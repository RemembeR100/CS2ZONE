const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcryptjs');
const http = require('http');
const { Server } = require("socket.io");
const multer = require('multer');

// Oyuncu verilerini içe aktar
let proPlayers = [];
try {
    proPlayers = require('./data/players');
} catch (e) {
    proPlayers = [];
}

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Veritabanı bağlantısı
const db = new sqlite3.Database('./cs2zone.sqlite');

// Tablo kurulumları ve varsayılan veriler
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, email TEXT UNIQUE, password TEXT, avatar TEXT DEFAULT '/img/default_avatar.png')`);
    db.run(`CREATE TABLE IF NOT EXISTS blog (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, title TEXT, author TEXT, content TEXT, category TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);
    db.run(`CREATE TABLE IF NOT EXISTS comments (id INTEGER PRIMARY KEY AUTOINCREMENT, post_id INTEGER, user_id INTEGER, author TEXT, content TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);
    db.run(`CREATE TABLE IF NOT EXISTS friends (id INTEGER PRIMARY KEY AUTOINCREMENT, sender_id INTEGER, receiver_id INTEGER, status TEXT DEFAULT 'pending')`);
    db.run(`CREATE TABLE IF NOT EXISTS groups (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, owner_id INTEGER, description TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);
    db.run(`CREATE TABLE IF NOT EXISTS group_members (id INTEGER PRIMARY KEY AUTOINCREMENT, group_id INTEGER, user_id INTEGER)`);
    db.run(`CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, room TEXT, sender_id INTEGER, sender_name TEXT, sender_avatar TEXT, message TEXT, is_read INTEGER DEFAULT 0, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);

    // Örnek blog içerikleri
    db.get("SELECT COUNT(*) as count FROM blog", (err, row) => {
        if (row && row.count === 0) {
            const users = ['XANTARES_Fan', 's1mple_clone', 'DonkPeek'];
            const content = [{t: "CS2 Optimizasyon", c: "FPS sorunu yaşayan var mı?", cat: "Bug"}];
            content.forEach(t => {
                const randomUser = users[Math.floor(Math.random() * users.length)];
                db.run("INSERT INTO blog (user_id, title, author, content, category) VALUES (0, ?, ?, ?, ?)", [t.t, randomUser, t.c, t.cat]);
            });
        }
    });
});

// Middleware ayarları
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'cs2zone_secret_key', resave: false, saveUninitialized: true }));

const upload = multer({ storage: multer.diskStorage({
    destination: 'public/uploads/',
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
})});

// Global değişkenler (Kullanıcı oturumu ve bildirimler)
app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    res.locals.currentPath = req.path;
    
    if (req.session.user) {
        db.get("SELECT COUNT(*) as totalUnread FROM messages WHERE sender_id != ? AND room LIKE ? AND is_read = 0", 
        [req.session.user.id, `%${req.session.user.id}%`], (err, row) => {
            res.locals.totalUnread = row ? row.totalUnread : 0;
            next();
        });
    } else {
        res.locals.totalUnread = 0;
        next();
    }
});

// Oturum kontrolü
function isAuthenticated(req, res, next) {
    if (req.session.user) return next();
    res.redirect('/login');
}

/* --- ROTALAR --- */

// Ana Sayfa
app.get('/', (req, res) => {
    const onlineCount = io.engine.clientsCount > 0 ? io.engine.clientsCount : 1; 
    db.get('SELECT COUNT(*) as uCount FROM users', (err, uRow) => {
        db.get('SELECT COUNT(*) as pCount FROM blog', (err, pRow) => {
            db.all('SELECT * FROM blog ORDER BY created_at DESC LIMIT 6', (err, posts) => {
                const stats = { users: uRow ? uRow.uCount : 0, posts: pRow ? pRow.pCount : 0, online: onlineCount };
                res.render('index', { recentPosts: posts || [], stats: stats });
            });
        });
    });
});

// ProHub
app.get('/prohub', (req, res) => res.render('prohub', { players: proPlayers }));

// Topluluk (Forum)
app.get('/community', (req, res) => {
    let sql = 'SELECT blog.*, users.avatar as authorAvatar FROM blog LEFT JOIN users ON blog.user_id = users.id';
    let params = [];
    if(req.query.cat && req.query.cat !== 'Hepsi') { sql += ' WHERE category = ?'; params.push(req.query.cat); }
    if(req.query.q) { sql += (params.length > 0 ? ' AND' : ' WHERE') + ' title LIKE ?'; params.push(`%${req.query.q}%`); }
    sql += ' ORDER BY created_at DESC';
    
    db.all(sql, params, (err, posts) => {
        db.all('SELECT post_id FROM comments', (err, allComments) => {
             if(posts) {
                 posts.forEach(p => {
                     p.commentCount = allComments.filter(c => c.post_id === p.id).length;
                     if(p.user_id === 0) p.authorAvatar = '/img/default_avatar.png';
                 });
             }
             res.render('community', { posts: posts || [], currentCat: req.query.cat || 'Hepsi', currentQ: req.query.q || '' });
        });
    });
});

app.post('/community/new', isAuthenticated, (req, res) => {
    db.run(`INSERT INTO blog (user_id, title, author, content, category) VALUES (?, ?, ?, ?, ?)`, 
    [req.session.user.id, req.body.title, req.session.user.username, req.body.content, req.body.category], () => res.redirect('/community'));
});

app.post('/community/delete/:id', isAuthenticated, (req, res) => {
    db.get('SELECT * FROM blog WHERE id = ?', [req.params.id], (err, post) => {
        if(post && post.user_id === req.session.user.id) {
            db.run('DELETE FROM blog WHERE id = ?', [req.params.id], () => res.redirect('/community'));
        } else { res.redirect('/community'); }
    });
});

// Konu Detay ve Yorumlar
app.get('/post/:id', (req, res) => {
    db.get(`SELECT blog.*, users.username as authorName, users.avatar as authorAvatar FROM blog LEFT JOIN users ON blog.user_id = users.id WHERE blog.id = ?`, [req.params.id], (err, post) => {
        if (!post) return res.redirect('/community');
        if(post.user_id === 0) post.authorAvatar = '/img/default_avatar.png';
        db.all(`SELECT comments.*, users.avatar as userAvatar FROM comments JOIN users ON comments.user_id = users.id WHERE post_id = ? ORDER BY created_at ASC`, [req.params.id], (err, comments) => {
            res.render('post_detail', { post, comments: comments || [] });
        });
    });
});

app.post('/comment/:id', isAuthenticated, (req, res) => {
    db.run(`INSERT INTO comments (post_id, user_id, author, content) VALUES (?, ?, ?, ?)`, [req.params.id, req.session.user.id, req.session.user.username, req.body.content], () => res.redirect('/post/' + req.params.id));
});

app.post('/comment/delete/:id', isAuthenticated, (req, res) => {
    db.get('SELECT * FROM comments WHERE id = ?', [req.params.id], (err, comment) => {
        if(comment && comment.user_id === req.session.user.id) {
            db.run('DELETE FROM comments WHERE id = ?', [req.params.id], () => res.redirect('/post/' + comment.post_id));
        } else { res.redirect('/community'); }
    });
});

// Arkadaşlar ve Timler
app.get('/friends', isAuthenticated, (req, res) => {
    const uid = req.session.user.id;
    // Arkadaş listesi
    db.all(`SELECT u.id, u.username, u.avatar FROM friends f JOIN users u ON (f.sender_id = u.id OR f.receiver_id = u.id) WHERE (f.sender_id = ? OR f.receiver_id = ?) AND f.status = 'accepted' AND u.id != ?`, [uid, uid, uid], (err, friends) => {
        // Gelen istekler
        db.all(`SELECT u.username, u.id as user_id, f.id as request_id FROM friends f JOIN users u ON f.sender_id = u.id WHERE f.receiver_id = ? AND f.status = 'pending'`, [uid], (err, requests) => {
            // Bekleyen istekler
            db.all(`SELECT receiver_id FROM friends WHERE sender_id = ? AND status = 'pending'`, [uid], (err, pendingRows) => {
                const myPendingIds = pendingRows ? pendingRows.map(r => r.receiver_id) : [];
                // Timler ve üye sayıları
                db.all(`SELECT g.*, (SELECT COUNT(*) FROM group_members WHERE group_id = g.id) as memberCount FROM groups g JOIN group_members gm ON g.id = gm.group_id WHERE gm.user_id = ?`, [uid], (err, myGroups) => {
                    // Tim üyelerini detaylı çek
                    const groupPromises = myGroups.map(group => {
                        return new Promise((resolve) => {
                            db.all(`SELECT u.username, u.avatar FROM group_members gm JOIN users u ON gm.user_id = u.id WHERE gm.group_id = ?`, [group.id], (err, members) => {
                                group.members = members || [];
                                resolve();
                            });
                        });
                    });

                    Promise.all(groupPromises).then(() => {
                        res.render('friends', { 
                            friends: friends || [], 
                            requests: requests || [], 
                            myPendingIds: myPendingIds, 
                            myGroups: myGroups || [] 
                        });
                    });
                });
            });
        });
    });
});

// Kullanıcı Arama API
app.get('/api/search-users', isAuthenticated, (req, res) => {
    db.all(`SELECT id, username, avatar FROM users WHERE (username LIKE ? OR id = ?) AND id != ? LIMIT 5`, [`${req.query.q}%`, req.query.q, req.session.user.id], (err, rows) => res.json(rows));
});

// Arkadaşlık İşlemleri
app.post('/friend/request', isAuthenticated, (req, res) => {
    const targetId = req.body.targetId;
    if(targetId == req.session.user.id) return res.redirect('/friends');
    db.get("SELECT * FROM friends WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?)", [req.session.user.id, targetId, targetId, req.session.user.id], (err, row) => {
        if(!row) db.run(`INSERT INTO friends (sender_id, receiver_id) VALUES (?, ?)`, [req.session.user.id, targetId]);
        res.redirect('/friends');
    });
});

app.post('/friend/accept', isAuthenticated, (req, res) => {
    if (req.body.action === 'accept') db.run(`UPDATE friends SET status = 'accepted' WHERE id = ?`, [req.body.requestId]);
    else db.run(`DELETE FROM friends WHERE id = ?`, [req.body.requestId]);
    res.redirect('/friends');
});

// Tim İşlemleri
app.post('/groups/create', isAuthenticated, (req, res) => {
    db.run(`INSERT INTO groups (name, owner_id, description) VALUES (?, ?, ?)`, [req.body.groupName, req.session.user.id, req.body.description], function(err) {
        if(!err) db.run(`INSERT INTO group_members (group_id, user_id) VALUES (?, ?)`, [this.lastID, req.session.user.id]);
        res.redirect('/friends');
    });
});

app.post('/groups/add-member', isAuthenticated, (req, res) => {
    db.run(`INSERT INTO group_members (group_id, user_id) VALUES (?, ?)`, [req.body.groupId, req.body.memberId], () => res.redirect('/friends'));
});

// Sohbet (Chat)
app.get('/chat', isAuthenticated, (req, res) => {
    const uid = req.session.user.id;
    const isMini = req.query.mode === 'mini';
    
    db.all(`SELECT u.id, u.username, u.avatar FROM friends f JOIN users u ON (f.sender_id = u.id OR f.receiver_id = u.id) WHERE (f.sender_id = ? OR f.receiver_id = ?) AND f.status = 'accepted' AND u.id != ?`, [uid, uid, uid], (err, friends) => {
        db.all(`SELECT g.id, g.name FROM groups g JOIN group_members gm ON g.id = gm.group_id WHERE gm.user_id = ?`, [uid], (err, groups) => {
            const tasks = [];

            // Okunmamış mesajları hesapla
            friends.forEach(f => {
                tasks.push(new Promise(resolve => {
                    const room = [uid, f.id].sort().join('-');
                    db.get(`SELECT COUNT(*) as cnt FROM messages WHERE room = ? AND sender_id != ? AND is_read = 0`, [room, uid], (err, row) => {
                        f.unread = row ? row.cnt : 0;
                        resolve();
                    });
                }));
            });

            // Tim üyelerini çek
            groups.forEach(g => {
                tasks.push(new Promise(resolve => {
                    db.all(`SELECT u.username, u.avatar FROM group_members gm JOIN users u ON gm.user_id = u.id WHERE gm.group_id = ?`, [g.id], (err, members) => {
                        g.members = members || [];
                        resolve();
                    });
                }));
            });

            Promise.all(tasks).then(() => {
                res.render('chat', { friends: friends || [], groups: groups || [], isMini: isMini });
            });
        });
    });
});

// Kimlik Doğrulama
app.get('/login', (req, res) => res.render('login', { error: null }));
app.post('/login', (req, res) => {
    db.get(`SELECT * FROM users WHERE email = ?`, [req.body.email], async (err, user) => {
        if (user && await bcrypt.compare(req.body.password, user.password)) {
            req.session.user = user;
            return res.redirect('/');
        }
        res.render('login', { error: 'Giriş bilgileri hatalı.' });
    });
});

app.get('/register', (req, res) => res.render('register', { error: null }));
app.post('/register', async (req, res) => {
    if(req.body.username.toLowerCase().includes('neo')) return res.render('register', { error: 'Bu kullanıcı adı kullanılamaz.' });
    try {
        const hash = await bcrypt.hash(req.body.password, 8);
        db.run(`INSERT INTO users (username, email, password) VALUES (?, ?, ?)`, [req.body.username, req.body.email, hash], (err) => {
            if (err) return res.render('register', { error: 'Kullanıcı adı veya e-posta kullanımda.' });
            res.redirect('/login');
        });
    } catch (e) { res.render('register', { error: 'Bir hata oluştu.' }); }
});

app.get('/logout', (req, res) => { req.session.destroy(); res.redirect('/'); });

// Profil
app.get('/profile', isAuthenticated, (req, res) => {
    db.get('SELECT COUNT(*) as postCount FROM blog WHERE user_id = ?', [req.session.user.id], (err, pRow) => {
        db.get('SELECT COUNT(*) as friendCount FROM friends WHERE (sender_id = ? OR receiver_id = ?) AND status = "accepted"', [req.session.user.id, req.session.user.id], (err, fRow) => {
            res.render('profile', { stats: { posts: pRow ? pRow.postCount : 0, friends: fRow ? fRow.friendCount : 0 } });
        });
    });
});

app.post('/update-profile', isAuthenticated, upload.single('avatarFile'), (req, res) => {
    if(req.body.newUsername.toLowerCase().includes('neo')) return res.redirect('/profile');
    let avatar = req.session.user.avatar;
    if(req.file) avatar = '/uploads/' + req.file.filename;
    db.run('UPDATE users SET username = ?, avatar = ? WHERE id = ?', [req.body.newUsername, avatar, req.session.user.id], () => {
        req.session.user.username = req.body.newUsername;
        req.session.user.avatar = avatar;
        res.redirect('/profile');
    });
});

// Veritabanı İndirme (Yönetici aracı)
app.get('/indir-db', isAuthenticated, (req, res) => {
    if (req.session.user.id === 1) {
        const file = path.join(__dirname, 'cs2zone.sqlite');
        res.download(file); 
    } else {
        res.send("Yetkisiz erişim.");
    }
});

// Socket.io İşlemleri
io.on('connection', (socket) => {
    socket.on('join_room', (room) => {
        socket.join(room);
        db.all("SELECT * FROM messages WHERE room = ? ORDER BY created_at ASC LIMIT 50", [room], (err, msgs) => {
            socket.emit('load_history', msgs || []);
        });
    });
    
    socket.on('send_message', (data) => {
        const timestamp = new Date().toISOString();
        db.run("INSERT INTO messages (room, sender_id, sender_name, sender_avatar, message, created_at) VALUES (?, ?, ?, ?, ?, ?)", 
            [data.room, data.sender_id, data.author, data.avatar, data.message, timestamp], function() {
                io.to(data.room).emit('receive_message', { ...data, created_at: timestamp });
            });
    });
    
    // Bildirimleri temizle
    socket.on('clear_notifications', (userId) => {
        db.run("UPDATE messages SET is_read = 1 WHERE sender_id != ? AND room LIKE ?", [userId, `%${userId}%`]);
    });
});

// Statik Sayfalar
app.get('/about', (req, res) => res.render('about'));
app.get('/terms', (req, res) => res.render('terms'));
app.get('/privacy', (req, res) => res.render('privacy'));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Sunucu çalışıyor: Port ${PORT}`));