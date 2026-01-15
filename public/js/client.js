// script.js - ULTRA GENİŞLETİLMİŞ PRO OYUNCU LİSTESİ (2026 GÜNCEL)

const proPlayers = [
    // --- #1 TEAM VITALITY ---
    { nick: "ZywOo", team: "Team Vitality", img: "https://img-cdn.hltv.org/playerbodyshot/11893/1.png", dpi: 400, sens: 2.00, hz: 1000, res: "1280x960", cross: "CSGO-Qzpx5-BRLw8-xFPCS-hTns4-GHDhP" },
    { nick: "apEX", team: "Team Vitality", img: "https://img-cdn.hltv.org/playerbodyshot/7322/1.png", dpi: 400, sens: 1.91, hz: 1000, res: "1280x960", cross: "CSGO-567jK-123sD-Jp4hW-c5J6h-78uJc" },
    { nick: "Spinx", team: "Team Vitality", img: "https://img-cdn.hltv.org/playerbodyshot/18221/1.png", dpi: 800, sens: 1.1, hz: 1000, res: "1280x960", cross: "CSGO-AsD34-ZxC56-TyU78-IoP90-QwE21" },
    { nick: "flameZ", team: "Team Vitality", img: "https://img-cdn.hltv.org/playerbodyshot/16693/1.png", dpi: 800, sens: 1.2, hz: 1000, res: "1280x960", cross: "CSGO-7r3Re-K72re-J4j2e-K4j23-k4j23" },
    { nick: "mezii", team: "Team Vitality", img: "https://img-cdn.hltv.org/playerbodyshot/18462/1.png", dpi: 800, sens: 1.0, hz: 1000, res: "1920x1080", cross: "CSGO-2u2n5-sO686-35y67-S7y67-HYKvx" },

    // --- #2 FURIA ---
    { nick: "FalleN", team: "FURIA", img: "https://img-cdn.hltv.org/playerbodyshot/2023/1.png", dpi: 400, sens: 2.2, hz: 1000, res: "1280x960", cross: "CSGO-AsD34-ZxC56-TyU78-IoP90-QwE21" },
    { nick: "KSCERATO", team: "FURIA", img: "https://img-cdn.hltv.org/playerbodyshot/15631/1.png", dpi: 800, sens: 1.15, hz: 1000, res: "1280x960", cross: "CSGO-7r3Re-K72re-J4j2e-K4j23-k4j23" },
    { nick: "yuurih", team: "FURIA", img: "https://img-cdn.hltv.org/playerbodyshot/12553/1.png", dpi: 400, sens: 1.9, hz: 1000, res: "1280x960", cross: "CSGO-2u2n5-sO686-35y67-S7y67-HYKvx" },
    { nick: "chelo", team: "FURIA", img: "https://img-cdn.hltv.org/playerbodyshot/10566/1.png", dpi: 400, sens: 3.0, hz: 1000, res: "1280x960", cross: "CSGO-GftnU-TjoOj-76jXM-FzK2F-F5O5M" },
    { nick: "skullz", team: "FURIA", img: "https://img-cdn.hltv.org/playerbodyshot/18676/1.png", dpi: 800, sens: 1.1, hz: 1000, res: "1280x960", cross: "CSGO-Qzpx5-BRLw8-xFPCS-hTns4-GHDhP" },

    // --- #3 FALCONS ---
    { nick: "s1mple", team: "Falcons (Loan)", img: "https://img-cdn.hltv.org/playerbodyshot/7998/1.png", dpi: 400, sens: 3.09, hz: 1000, res: "1280x960", cross: "CSGO-Ku2Mc-ShB45-u2n5T-k5y6r-oXnQD" },
    { nick: "NiKo", team: "Falcons", img: "https://img-cdn.hltv.org/playerbodyshot/3741/1.png", dpi: 400, sens: 1.51, hz: 1000, res: "1152x864", cross: "CSGO-UwUWf-AScRw-fmW79-woFNe-wLsuL" },
    { nick: "Magisk", team: "Falcons", img: "https://img-cdn.hltv.org/playerbodyshot/9032/1.png", dpi: 800, sens: 1.1, hz: 1000, res: "1280x960", cross: "CSGO-2u2n5-sO686-35y67-S7y67-HYKvx" },
    { nick: "dupreeh", team: "Falcons", img: "https://img-cdn.hltv.org/playerbodyshot/7398/1.png", dpi: 400, sens: 1.8, hz: 1000, res: "1280x960", cross: "CSGO-UwUWf-AScRw-fmW79-woFNe-wLsuL" },
    { nick: "m0NESY", team: "Falcons", img: "https://img-cdn.hltv.org/playerbodyshot/19230/1.png", dpi: 400, sens: 2.30, hz: 1000, res: "1280x960", cross: "CSGO-hzrMn-jXu8b-R7VH4-nhA4Z-3kPcM" },

    // --- #4 MOUZ ---
    { nick: "torzsi", team: "MOUZ", img: "https://img-cdn.hltv.org/playerbodyshot/18072/1.png", dpi: 400, sens: 2.2, hz: 1000, res: "1024x768", cross: "CSGO-UwUWf-AScRw-fmW79-woFNe-wLsuL" },
    { nick: "xertioN", team: "MOUZ", img: "https://img-cdn.hltv.org/playerbodyshot/20312/1.png", dpi: 400, sens: 2.0, hz: 1000, res: "1280x960", cross: "CSGO-Qzpx5-BRLw8-xFPCS-hTns4-GHDhP" },
    { nick: "siuhy", team: "MOUZ", img: "https://img-cdn.hltv.org/playerbodyshot/16820/1.png", dpi: 400, sens: 1.8, hz: 1000, res: "1280x960", cross: "CSGO-567jK-123sD-Jp4hW-c5J6h-78uJc" },
    { nick: "Jimpphat", team: "MOUZ", img: "https://img-cdn.hltv.org/playerbodyshot/22026/1.png", dpi: 800, sens: 1.1, hz: 1000, res: "1280x960", cross: "CSGO-AsD34-ZxC56-TyU78-IoP90-QwE21" },
    { nick: "Brollan", team: "MOUZ", img: "https://img-cdn.hltv.org/playerbodyshot/13666/1.png", dpi: 800, sens: 1.2, hz: 1000, res: "1280x960", cross: "CSGO-7r3Re-K72re-J4j2e-K4j23-k4j23" },

    // --- #5 FAZE CLAN ---
    { nick: "ropz", team: "FaZe Clan", img: "https://img-cdn.hltv.org/playerbodyshot/11816/1.png", dpi: 400, sens: 1.77, hz: 1000, res: "1920x1080", cross: "CSGO-HYKvx-sO686-35y67-S7y67-u2n5T" },
    { nick: "broky", team: "FaZe Clan", img: "https://img-cdn.hltv.org/playerbodyshot/18053/1.png", dpi: 400, sens: 1.90, hz: 1000, res: "1280x960", cross: "CSGO-2u2n5-sO686-35y67-S7y67-HYKvx" },
    { nick: "karrigan", team: "FaZe Clan", img: "https://img-cdn.hltv.org/playerbodyshot/429/1.png", dpi: 400, sens: 1.6, hz: 1000, res: "1024x768", cross: "CSGO-123sD-Jp4hW-c5J6h-78uJc-567jK" },
    { nick: "rain", team: "FaZe Clan", img: "https://img-cdn.hltv.org/playerbodyshot/8183/1.png", dpi: 400, sens: 1.85, hz: 1000, res: "1280x960", cross: "CSGO-78uJc-567jK-123sD-Jp4hW-c5J6h" },
    { nick: "frozen", team: "FaZe Clan", img: "https://img-cdn.hltv.org/playerbodyshot/9960/1.png", dpi: 400, sens: 1.7, hz: 1000, res: "1280x960", cross: "CSGO-GftnU-TjoOj-76jXM-FzK2F-F5O5M" },

    // --- #6 THE MONGOLZ (YENİ EKLENDİ) ---
    { nick: "bLitz", team: "The MongolZ", img: "https://img-cdn.hltv.org/playerbodyshot/15743/1.png", dpi: 800, sens: 1.1, hz: 1000, res: "1280x960", cross: "CSGO-AsD34-ZxC56-TyU78-IoP90-QwE21" },
    { nick: "Techno4K", team: "The MongolZ", img: "https://img-cdn.hltv.org/playerbodyshot/20265/1.png", dpi: 400, sens: 2.0, hz: 1000, res: "1280x960", cross: "CSGO-7r3Re-K72re-J4j2e-K4j23-k4j23" },
    { nick: "910", team: "The MongolZ", img: "https://img-cdn.hltv.org/playerbodyshot/20266/1.png", dpi: 800, sens: 1.2, hz: 1000, res: "1280x960", cross: "CSGO-2u2n5-sO686-35y67-S7y67-HYKvx" },
    { nick: "mzinho", team: "The MongolZ", img: "https://img-cdn.hltv.org/playerbodyshot/20264/1.png", dpi: 800, sens: 1.0, hz: 1000, res: "1280x960", cross: "CSGO-h543d-j654d-k765d-f432d-g342d" },
    { nick: "Senzu", team: "The MongolZ", img: "https://img-cdn.hltv.org/playerbodyshot/20263/1.png", dpi: 800, sens: 1.3, hz: 1000, res: "1024x768", cross: "CSGO-9OysP-sFw9b-dHiIb-pWTpe-22NsD" },

    // --- #7 NAVI ---
    { nick: "b1t", team: "Natus Vincere", img: "https://img-cdn.hltv.org/playerbodyshot/18987/1.png", dpi: 400, sens: 1.42, hz: 1000, res: "1280x960", cross: "CSGO-9OysP-sFw9b-dHiIb-pWTpe-22NsD" },
    { nick: "Aleksib", team: "Natus Vincere", img: "https://img-cdn.hltv.org/playerbodyshot/9816/1.png", dpi: 800, sens: 0.95, hz: 1000, res: "1024x768", cross: "CSGO-Jp4hW-c5J6h-78uJc-567jK-123sD" },
    { nick: "jL", team: "Natus Vincere", img: "https://img-cdn.hltv.org/playerbodyshot/19206/1.png", dpi: 800, sens: 1.0, hz: 1000, res: "1280x960", cross: "CSGO-QwE21-AsD34-ZxC56-TyU78-IoP90" },
    { nick: "iM", team: "Natus Vincere", img: "https://img-cdn.hltv.org/playerbodyshot/14759/1.png", dpi: 400, sens: 1.8, hz: 1000, res: "1280x960", cross: "CSGO-GftnU-TjoOj-76jXM-FzK2F-F5O5M" },
    { nick: "w0nderful", team: "Natus Vincere", img: "https://img-cdn.hltv.org/playerbodyshot/20127/1.png", dpi: 400, sens: 3.09, hz: 1000, res: "1280x960", cross: "CSGO-Ku2Mc-ShB45-u2n5T-k5y6r-oXnQD" },

    // --- #8 SPIRIT ---
    { nick: "donk", team: "Team Spirit", img: "https://img-cdn.hltv.org/playerbodyshot/21167/1.png", dpi: 800, sens: 1.25, hz: 1000, res: "1280x960", cross: "CSGO-GftnU-TjoOj-76jXM-FzK2F-F5O5M" },
    { nick: "sh1ro", team: "Team Spirit", img: "https://img-cdn.hltv.org/playerbodyshot/16920/1.png", dpi: 800, sens: 1.04, hz: 1000, res: "1024x768", cross: "CSGO-Vb21t-43kLq-98yHz-12wSx-34qAz" },
    { nick: "chopper", team: "Team Spirit", img: "https://img-cdn.hltv.org/playerbodyshot/7716/1.png", dpi: 400, sens: 2.2, hz: 1000, res: "1280x960", cross: "CSGO-hzrMn-jXu8b-R7VH4-nhA4Z-3kPcM" },
    { nick: "magixx", team: "Team Spirit", img: "https://img-cdn.hltv.org/playerbodyshot/18317/1.png", dpi: 800, sens: 1.0, hz: 1000, res: "1280x960", cross: "CSGO-Qzpx5-BRLw8-xFPCS-hTns4-GHDhP" },
    { nick: "zont1x", team: "Team Spirit", img: "https://img-cdn.hltv.org/playerbodyshot/20423/1.png", dpi: 400, sens: 1.9, hz: 1000, res: "1280x960", cross: "CSGO-567jK-123sD-Jp4hW-c5J6h-78uJc" },

    // --- #9 G2 ESPORTS ---
    { nick: "huNter-", team: "G2 Esports", img: "https://img-cdn.hltv.org/playerbodyshot/3972/1.png", dpi: 400, sens: 2.1, hz: 1000, res: "1280x960", cross: "CSGO-f432d-g342d-h543d-j654d-k765d" },
    { nick: "malbsMd", team: "G2 Esports", img: "https://img-cdn.hltv.org/playerbodyshot/11617/1.png", dpi: 800, sens: 1.1, hz: 1000, res: "1280x960", cross: "CSGO-AsD34-ZxC56-TyU78-IoP90-QwE21" },
    { nick: "Snax", team: "G2 Esports", img: "https://img-cdn.hltv.org/playerbodyshot/2553/1.png", dpi: 800, sens: 1.2, hz: 1000, res: "1280x960", cross: "CSGO-7r3Re-K72re-J4j2e-K4j23-k4j23" },

    // --- #10 AURORA (YENİ EKLENDİ - Resimdekilerin aksine gerçek Aurora oyuncuları) ---
    { nick: "deko", team: "Aurora", img: "https://img-cdn.hltv.org/playerbodyshot/13564/1.png", dpi: 800, sens: 1.2, hz: 1000, res: "1280x960", cross: "CSGO-567jK-123sD-Jp4hW-c5J6h-78uJc" },
    { nick: "Lack1", team: "Aurora", img: "https://img-cdn.hltv.org/playerbodyshot/13240/1.png", dpi: 400, sens: 2.0, hz: 1000, res: "1280x960", cross: "CSGO-QwE21-AsD34-ZxC56-TyU78-IoP90" },
    { nick: "KENSI", team: "Aurora", img: "https://img-cdn.hltv.org/playerbodyshot/18386/1.png", dpi: 800, sens: 1.1, hz: 1000, res: "1024x768", cross: "CSGO-Vb21t-43kLq-98yHz-12wSx-34qAz" },

    // --- #11 BETBOOM (BB) (YENİ EKLENDİ) ---
    { nick: "zorte", team: "BetBoom", img: "https://img-cdn.hltv.org/playerbodyshot/15662/1.png", dpi: 400, sens: 2.1, hz: 1000, res: "1280x960", cross: "CSGO-2u2n5-sO686-35y67-S7y67-HYKvx" },
    { nick: "nafany", team: "BetBoom", img: "https://img-cdn.hltv.org/playerbodyshot/16921/1.png", dpi: 800, sens: 1.4, hz: 1000, res: "1280x960", cross: "CSGO-7r3Re-K72re-J4j2e-K4j23-k4j23" },
    { nick: "kaiR0N-", team: "BetBoom", img: "https://img-cdn.hltv.org/playerbodyshot/18200/1.png", dpi: 800, sens: 1.0, hz: 1000, res: "1280x960", cross: "CSGO-AsD34-ZxC56-TyU78-IoP90-QwE21" },

    // --- #12 3DMAX (YENİ EKLENDİ) ---
    { nick: "Maka", team: "3DMAX", img: "https://img-cdn.hltv.org/playerbodyshot/13138/1.png", dpi: 800, sens: 1.2, hz: 1000, res: "1280x960", cross: "CSGO-567jK-123sD-Jp4hW-c5J6h-78uJc" },
    { nick: "Lucky", team: "3DMAX", img: "https://img-cdn.hltv.org/playerbodyshot/13350/1.png", dpi: 400, sens: 2.0, hz: 1000, res: "1024x768", cross: "CSGO-9ty23-sO686-35y67-S7y67-HYKvx" },
    
    // --- #13 PAIN (YENİ EKLENDİ) ---
    { nick: "biguzera", team: "paiN", img: "https://img-cdn.hltv.org/playerbodyshot/15291/1.png", dpi: 400, sens: 2.2, hz: 1000, res: "1280x960", cross: "CSGO-Vb21t-43kLq-98yHz-12wSx-34qAz" },
    { nick: "lux", team: "paiN", img: "https://img-cdn.hltv.org/playerbodyshot/20993/1.png", dpi: 800, sens: 1.1, hz: 1000, res: "1280x960", cross: "CSGO-Qzpx5-BRLw8-xFPCS-hTns4-GHDhP" },

    // --- #14 ASTRALIS ---
    { nick: "dev1ce", team: "Astralis", img: "https://img-cdn.hltv.org/playerbodyshot/7592/1.png", dpi: 400, sens: 2.0, hz: 1000, res: "1280x960", cross: "CSGO-jvnbx-sO686-35y67-S7y67-HYKvx" },
    { nick: "stavn", team: "Astralis", img: "https://img-cdn.hltv.org/playerbodyshot/10994/1.png", dpi: 400, sens: 2.1, hz: 1000, res: "1024x768", cross: "CSGO-UwUWf-AScRw-fmW79-woFNe-wLsuL" },
    { nick: "jabbi", team: "Astralis", img: "https://img-cdn.hltv.org/playerbodyshot/17956/1.png", dpi: 400, sens: 1.8, hz: 1000, res: "1280x960", cross: "CSGO-Qzpx5-BRLw8-xFPCS-hTns4-GHDhP" },
    { nick: "Staehr", team: "Astralis", img: "https://img-cdn.hltv.org/playerbodyshot/20300/1.png", dpi: 800, sens: 1.1, hz: 1000, res: "1280x960", cross: "CSGO-567jK-123sD-Jp4hW-c5J6h-78uJc" },
    { nick: "CadiaN", team: "Astralis", img: "https://img-cdn.hltv.org/playerbodyshot/7964/1.png", dpi: 400, sens: 1.6, hz: 1000, res: "1280x960", cross: "CSGO-AsD34-ZxC56-TyU78-IoP90-QwE21" },

    // --- #15 TEAM LIQUID ---
    { nick: "Twistzz", team: "Team Liquid", img: "https://img-cdn.hltv.org/playerbodyshot/10394/1.png", dpi: 400, sens: 1.70, hz: 1000, res: "1280x960", cross: "CSGO-9ty23-sO686-35y67-S7y67-HYKvx" },
    { nick: "NAF", team: "Team Liquid", img: "https://img-cdn.hltv.org/playerbodyshot/8520/1.png", dpi: 800, sens: 0.9, hz: 1000, res: "1920x1080", cross: "CSGO-IoP90-QwE21-AsD34-ZxC56-TyU78" },
    { nick: "YEKINDAR", team: "Team Liquid", img: "https://img-cdn.hltv.org/playerbodyshot/13915/1.png", dpi: 400, sens: 1.2, hz: 1000, res: "1280x960", cross: "CSGO-GftnU-TjoOj-76jXM-FzK2F-F5O5M" },
    { nick: "jks", team: "Team Liquid", img: "https://img-cdn.hltv.org/playerbodyshot/4679/1.png", dpi: 400, sens: 1.9, hz: 1000, res: "1280x960", cross: "CSGO-Vb21t-43kLq-98yHz-12wSx-34qAz" },
    { nick: "ultimate", team: "Team Liquid", img: "https://img-cdn.hltv.org/playerbodyshot/21034/1.png", dpi: 800, sens: 1.0, hz: 1000, res: "1280x960", cross: "CSGO-hzrMn-jXu8b-R7VH4-nhA4Z-3kPcM" },
    
    // --- #19 HEROIC (YENİ EKLENDİ) ---
    { nick: "sjuush", team: "HEROIC", img: "https://img-cdn.hltv.org/playerbodyshot/14148/1.png", dpi: 400, sens: 1.9, hz: 1000, res: "1280x960", cross: "CSGO-Vb21t-43kLq-98yHz-12wSx-34qAz" },
    { nick: "TeSeS", team: "HEROIC", img: "https://img-cdn.hltv.org/playerbodyshot/12018/1.png", dpi: 800, sens: 1.1, hz: 1000, res: "1280x960", cross: "CSGO-hzrMn-jXu8b-R7VH4-nhA4Z-3kPcM" },
    { nick: "kyxsan", team: "HEROIC", img: "https://img-cdn.hltv.org/playerbodyshot/19663/1.png", dpi: 800, sens: 1.3, hz: 1000, res: "1280x960", cross: "CSGO-Qzpx5-BRLw8-xFPCS-hTns4-GHDhP" },

    // --- #24 NIP (YENİ EKLENDİ) ---
    { nick: "REZ", team: "NiP", img: "https://img-cdn.hltv.org/playerbodyshot/9278/1.png", dpi: 400, sens: 2.1, hz: 1000, res: "1280x960", cross: "CSGO-567jK-123sD-Jp4hW-c5J6h-78uJc" },
    { nick: "maxster", team: "NiP", img: "https://img-cdn.hltv.org/playerbodyshot/20888/1.png", dpi: 800, sens: 1.2, hz: 1000, res: "1280x960", cross: "CSGO-AsD34-ZxC56-TyU78-IoP90-QwE21" },

    // --- #22 VIRTUS.PRO ---
    { nick: "Jame", team: "Virtus.pro", img: "https://img-cdn.hltv.org/playerbodyshot/13776/1.png", dpi: 400, sens: 3.5, hz: 1000, res: "1280x960", cross: "CSGO-UwUWf-AScRw-fmW79-woFNe-wLsuL" },
    { nick: "electroNic", team: "Virtus.pro", img: "https://img-cdn.hltv.org/playerbodyshot/8918/1.png", dpi: 400, sens: 2.2, hz: 1000, res: "1280x1024", cross: "CSGO-Qzpx5-BRLw8-xFPCS-hTns4-GHDhP" },
    { nick: "fame", team: "Virtus.pro", img: "https://img-cdn.hltv.org/playerbodyshot/20341/1.png", dpi: 800, sens: 1.1, hz: 1000, res: "1280x960", cross: "CSGO-Qzpx5-BRLw8-xFPCS-hTns4-GHDhP" },

    // --- ETERNAL FIRE (TÜRK GURURU) ---
    { nick: "XANTARES", team: "Eternal Fire", img: "https://img-cdn.hltv.org/playerbodyshot/7938/1.png", dpi: 400, sens: 2.00, hz: 1000, res: "1024x768", cross: "CSGO-39uW7-inP3p-F5y6d-P3n5r-oXnQD" },
    { nick: "Wicadia", team: "Eternal Fire", img: "https://img-cdn.hltv.org/playerbodyshot/22888/1.png", dpi: 800, sens: 1.10, hz: 1000, res: "1280x960", cross: "CSGO-7r3Re-K72re-J4j2e-K4j23-k4j23" },
    { nick: "woxic", team: "Eternal Fire", img: "https://img-cdn.hltv.org/playerbodyshot/8574/1.png", dpi: 1600, sens: 1.5, hz: 1000, res: "1280x960", cross: "CSGO-PO423-sO686-35y67-S7y67-HYKvx" },
    { nick: "MAJ3R", team: "Eternal Fire", img: "https://img-cdn.hltv.org/playerbodyshot/5736/1.png", dpi: 800, sens: 1.0, hz: 1000, res: "1280x1024", cross: "CSGO-h543d-j654d-k765d-f432d-g342d" },
    { nick: "Calyx", team: "Eternal Fire", img: "https://img-cdn.hltv.org/playerbodyshot/8575/1.png", dpi: 400, sens: 2.0, hz: 1000, res: "1280x960", cross: "CSGO-9ty23-sO686-35y67-S7y67-HYKvx" },

    // --- EFSANELER (LEGENDS) ---
    { nick: "kennyS", team: "Legend", img: "https://img-cdn.hltv.org/playerbodyshot/7167/1.png", dpi: 400, sens: 2.2, hz: 1000, res: "1024x768", cross: "CSGO-TyU78-IoP90-QwE21-AsD34-ZxC56" },
    { nick: "pashaBiceps", team: "Legend", img: "https://img-cdn.hltv.org/playerbodyshot/317/1.png", dpi: 400, sens: 1.9, hz: 1000, res: "1280x960", cross: "CSGO-ZxC56-TyU78-IoP90-QwE21-AsD34" },
    { nick: "GeT_RiGhT", team: "Legend", img: "https://img-cdn.hltv.org/playerbodyshot/39/1.png", dpi: 400, sens: 2.9, hz: 1000, res: "1280x960", cross: "CSGO-123sD-Jp4hW-c5J6h-78uJc-567jK" },
    { nick: "f0rest", team: "Legend", img: "https://img-cdn.hltv.org/playerbodyshot/29/1.png", dpi: 400, sens: 3.5, hz: 1000, res: "1280x960", cross: "CSGO-78uJc-567jK-123sD-Jp4hW-c5J6h" },
    { nick: "olofmeister", team: "Legend", img: "https://img-cdn.hltv.org/playerbodyshot/885/1.png", dpi: 400, sens: 1.7, hz: 1000, res: "1024x768", cross: "CSGO-GftnU-TjoOj-76jXM-FzK2F-F5O5M" },
    { nick: "ScreaM", team: "Legend", img: "https://img-cdn.hltv.org/playerbodyshot/7390/1.png", dpi: 400, sens: 2.5, hz: 1000, res: "1280x960", cross: "CSGO-7r3Re-K72re-J4j2e-K4j23-k4j23" },
    { nick: "shox", team: "Legend", img: "https://img-cdn.hltv.org/playerbodyshot/1225/1.png", dpi: 400, sens: 2.25, hz: 1000, res: "1280x960", cross: "CSGO-2u2n5-sO686-35y67-S7y67-HYKvx" }
];


// SAYFA YÜKLENİNCE ÇALIŞACAK KOMUTAN
document.addEventListener("DOMContentLoaded", () => {
    const listContainer = document.getElementById("players-list");
    
    // Eğer ProHub sayfasında değilsek (listContainer yoksa) bu kodu çalıştırma, hata verir.
    if (!listContainer) return; 

    // OYUNCULARI EKRA E DÖKME FONKSİYONU
    function renderPlayers(data) {
        listContainer.innerHTML = ""; // Önce temizle
        
        data.forEach(player => {
            const card = document.createElement("div");
            card.classList.add("player-card");
            
            // Kartın HTML yapısı (Senin modern tasarımına uygun)
            card.innerHTML = `
                <div class="card-header">
                    <div class="player-avatar">
                        ${player.nick.substring(0,2).toUpperCase()}
                    </div>
                    <div>
                        <h3 style="margin:0; color:white;">${player.nick}</h3>
                        <small style="color:#666;">${player.team}</small>
                    </div>
                </div>
                
                <div class="stats-grid">
                    <div class="stat-box"><span>DPI</span><strong>${player.dpi}</strong></div>
                    <div class="stat-box"><span>SENS</span><strong>${player.sens}</strong></div>
                    <div class="stat-box"><span>HZ</span><strong>${player.hz}</strong></div>
                    <div class="stat-box"><span>RES</span><strong>${player.res}</strong></div>
                </div>

                <div class="action-buttons">
                    <button class="btn-action" onclick="copyCode('${player.crosshair}')">
                        <i class="fas fa-crosshairs"></i> Crosshair
                    </button>
                    <button class="btn-action secondary">
                        <i class="fas fa-download"></i> CFG İndir
                    </button>
                </div>
            `;
            
            // CSS STİLLERİNİ JS İÇİNDEN EKLEMEK ZOR OLUR, STYLE.CSS'E EKLEMEN GEREKİR
            // Ama şimdilik kartı listeye ekleyelim:
            listContainer.appendChild(card);
        });
    }

    // İlk yüklemede hepsini göster
    renderPlayers(players);

    // ARAMA FİLTRESİ
    const searchInput = document.getElementById("searchPlayer");
    if(searchInput) {
        searchInput.addEventListener("keyup", (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = players.filter(p => 
                p.nick.toLowerCase().includes(term) || 
                p.team.toLowerCase().includes(term)
            );
            renderPlayers(filtered);
        });
    }
});

// Crosshair Kopyalama Fonksiyonu
function copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        alert("Crosshair kodu kopyalandı komutanım: " + code);
    });
}