# CS2ZONE - Player Community Platform

## 🌐 Live Demo
**Access the live application here:** [CS2ZONE Live Website](https://cs2zone-tr.onrender.com)

> **Note:** The application is hosted on Render's free tier. If the site has been inactive for 15 minutes, the server will go to sleep. It may take up to 1-2 minutes for the initial load when waking up. Furthermore, due to the ephemeral file system of the free tier, the local SQLite database resets upon every server restart.

## 📖 About the Project
CS2ZONE is a comprehensive, full-stack web application designed specifically for Counter-Strike 2 players. It provides a dynamic environment where users can socialize, form tactical teams, share community content, and communicate in real-time. The project is built following modern web development principles, utilizing a robust Node.js backend and a Server-Side Rendered (SSR) frontend.

## 🚀 Key Features
* **Secure Authentication:** User registration and login system with Bcrypt password hashing and Express-Session management.
* **Real-Time Communication:** Instant messaging via WebSocket protocol (Socket.io) for global, team, and private chat rooms.
* **Team & Friend Management:** Relational database integration allowing users to search for peers, send friend requests, and establish teams.
* **Community Forum (CRUD):** A dynamic blog/forum section where users can create topics, comment, and manage their content.
* **Profile Customization:** User profile management with avatar uploading capabilities using Multer.

## 🛠️ Technology Stack
* **Backend:** Node.js, Express.js
* **Frontend:** EJS (Embedded JavaScript Templates), CSS3, HTML5
* **Database:** SQLite (Relational Database)
* **Real-Time:** Socket.io
* **Security & Storage:** Bcryptjs, Express-Session, Multer

---

# CS2ZONE - Oyuncu Topluluk Platformu

## 🌐 Canlı Demo
**Uygulamaya buradan erişebilirsiniz:** [CS2ZONE Canlı Web Sitesi](https://cs2zone-tr.onrender.com)

> **Not:** Uygulama Render'ın ücretsiz planında barındırılmaktadır. Site 15 dakika boyunca aktif olmazsa sunucu uyku moduna geçer. Bu nedenle ilk açılış 1-2 dakika sürebilir. Ayrıca, ücretsiz planın geçici dosya sistemi nedeniyle, yerel SQLite veritabanı sunucu her yeniden başlatıldığında sıfırlanmaktadır.

## 📖 Proje Hakkında
CS2ZONE, Counter-Strike 2 oyuncuları için özel olarak tasarlanmış kapsamlı, full-stack bir web uygulamasıdır. Kullanıcıların sosyalleşebileceği, taktiksel ekipler (timler) kurabileceği, topluluk içerikleri paylaşabileceği ve gerçek zamanlı iletişim kurabileceği dinamik bir ortam sağlar. Proje, modern web geliştirme prensiplerine uygun olarak, güçlü bir Node.js arka planı ve Sunucu Taraflı İşleme (SSR) arayüzü kullanılarak geliştirilmiştir.

## 🚀 Temel Özellikler
* **Güvenli Kimlik Doğrulama:** Bcrypt şifreleme ve Express-Session yönetimi ile kullanıcı kayıt ve giriş sistemi.
* **Gerçek Zamanlı İletişim:** Global, tim ve özel sohbet odaları için WebSocket protokolü (Socket.io) üzerinden anlık mesajlaşma.
* **Tim ve Arkadaş Yönetimi:** Kullanıcıların diğer oyuncuları aramasına, arkadaşlık isteği göndermesine ve takım kurmasına olanak tanıyan ilişkisel veritabanı entegrasyonu.
* **Topluluk Forumu (CRUD):** Kullanıcıların konu açabildiği, yorum yapabildiği ve içeriklerini yönetebildiği dinamik blog/forum bölümü.
* **Profil Özelleştirme:** Multer kullanılarak avatar yükleme özellikleri ile detaylı kullanıcı profili yönetimi.

## 🛠️ Kullanılan Teknolojiler
* **Arka Plan (Backend):** Node.js, Express.js
* **Ön Yüz (Frontend):** EJS (Şablon Motoru), CSS3, HTML5
* **Veritabanı:** SQLite (İlişkisel Veritabanı)
* **Gerçek Zamanlı İletişim:** Socket.io
* **Güvenlik ve Depolama:** Bcryptjs, Express-Session, Multer
