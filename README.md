# LinkTrees
# 🏰 Medieval Linktree - Modular Version

File structure sudah dipecah menjadi beberapa file terpisah agar lebih rapi dan mudah maintain!

## 📂 Struktur File

```
linktree/
├── index.html         (96 lines)   - HTML utama
├── style.css          (899 lines)  - Medieval theme styles  
├── script.js          (363 lines)  - JavaScript functions
└── README.md          - Dokumentasi ini
```

### **Total: 1,358 lines** (turun dari 1,482 lines!)

---

## 📊 Perbandingan

| Versi | Total Lines | File Count |
|-------|-------------|------------|
| **Old (Single File)** | 1,482 | 1 file |
| **New (Modular)** | 1,358 | 3 files |
| **Saved** | -124 lines | +2 files |

---

## 📁 Detail per File

### 1️⃣ **index.html** (96 lines)
Hanya berisi:
- ✅ Meta tags SEO
- ✅ Links ke external files
- ✅ HTML structure (body, containers)
- ✅ Loading screen
- ✅ View counter
- ✅ QR button

**Tidak ada lagi:**
- ❌ CSS inline (pindah ke style.css)
- ❌ JavaScript inline (pindah ke script.js)

---

### 2️⃣ **style.css** (899 lines)
Berisi semua styling:
- 🎨 Medieval theme variables
- 🎨 Background patterns & animations
- 🎨 Loading screen styles
- 🎨 View counter styles
- 🎨 Profile overrides
- 🎨 Links & buttons
- 🎨 Artist cards
- 🎨 Google AdSense container
- 🎨 Responsive design

---

### 3️⃣ **script.js** (363 lines)
Berisi semua logic:
- 🔥 Firebase configuration
- 📊 View counter functions
- 📱 QR code generator
- 👤 Profile badge renderer
- 🎵 Favorite singers renderer
- 💰 Google AdSense renderer
- ⏳ Loading screen handlers
- 🚀 Initialization

---

## 🚀 Cara Deploy

### Opsi 1: Hosting yang Support Multiple Files (Netlify, Vercel, GitHub Pages)

1. Upload **3 files** sekaligus:
   - index.html
   - style.css
   - script.js

2. Done! Semua file akan load otomatis.

**Netlify:**
```bash
# Drag & drop ketiga file ke Netlify dashboard
```

**Vercel:**
```bash
# Upload folder yang berisi ketiga file
```

**GitHub Pages:**
```bash
git add index.html style.css script.js
git commit -m "Medieval linktree modular version"
git push origin main
```

---

### Opsi 2: Single File (Untuk hosting yang hanya support 1 file)

Jika hosting kamu cuma bisa 1 file HTML, pakai file **index-premium.html** (versi lama yang sudah saya kasih).

---

## ✅ Keuntungan Modular Structure

### 1. **Lebih Mudah Edit**
- Mau edit style? Buka `style.css` aja
- Mau edit logic? Buka `script.js` aja
- Tidak perlu scroll ribuan baris!

### 2. **Lebih Cepat Load**
- Browser bisa cache CSS & JS terpisah
- Kalau update HTML, CSS & JS tidak perlu reload
- Better performance!

### 3. **Lebih Mudah Maintain**
- Bug di JavaScript? Check `script.js`
- Style rusak? Check `style.css`
- Clear separation of concerns

### 4. **Reusable**
- `style.css` bisa dipakai untuk page lain
- `script.js` bisa dipake untuk variant lain
- Mix & match components

### 5. **Collaboration Friendly**
- Tim bisa edit file berbeda tanpa conflict
- Git merge lebih mudah
- Version control lebih clean

---

## 🎨 Cara Edit Konten

### Edit Data Profile (script.js, line ~105)
```javascript
const linktreeData = {
  img: "URL_FOTO_KAMU",
  nama: "Nama Kamu",
  deskripsi: "Bio Kamu",
  medsos: [
    // Edit social media
  ],
  links: [
    // Edit links
  ],
  footer: "Footer Text"
};
```

### Edit Penyanyi Favorit (script.js, line ~120)
```javascript
const favoriteSingers = [
  {
    name: "Nama Penyanyi",
    image: "URL_FOTO",
    genre: "Genre"
  }
  // Tambah penyanyi baru di sini
];
```

### Edit Warna Theme (style.css, line ~6)
```css
:root {
  --gold: #d4af37;
  --crimson: #8b0000;
  --parchment: #f4e7d7;
  /* Edit warna di sini */
}
```

---

## 💰 Google AdSense Setup

### 1. Verifikasi (index.html, line ~37)
```html
<!-- PASTE ADSENSE VERIFICATION CODE HERE -->
<meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXX">
```

### 2. Ad Unit Code (script.js, line ~245)
```javascript
data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
data-ad-slot="XXXXXXXXXX"
```

### 3. Activation (script.js, line ~345)
```javascript
// Uncomment this line:
(adsbygoogle = window.adsbygoogle || []).push({});
```

📖 **Baca GOOGLE-ADSENSE-GUIDE.md untuk tutorial lengkap!**

---

## 🔧 Troubleshooting

### CSS Tidak Load?
- ✅ Pastikan `style.css` ada di folder yang sama dengan `index.html`
- ✅ Check typo di `<link rel="stylesheet" href="style.css">`
- ✅ Clear browser cache (Ctrl+Shift+R)

### JavaScript Tidak Jalan?
- ✅ Pastikan `script.js` ada di folder yang sama
- ✅ Check typo di `<script src="script.js"></script>`
- ✅ Open Console (F12) untuk lihat error

### File Tidak Muncul?
- ✅ Pastikan upload semua 3 files
- ✅ Check case-sensitive filename (Linux hosting)
- ✅ Pastikan permission file benar (755)

---

## 📦 Backup Single File

Jika butuh single file version (misal untuk hosting terbatas), pakai:
- **index-premium.html** (1,482 lines, all-in-one)

Keduanya punya fitur yang sama, cuma beda struktur file aja!

---

## 🎯 Which Version to Use?

| Use Case | Recommended |
|----------|-------------|
| Professional deployment | ✅ **Modular (3 files)** |
| Easy maintenance | ✅ **Modular** |
| Team collaboration | ✅ **Modular** |
| Better performance | ✅ **Modular** |
| Single HTML only hosting | ❌ Single file (index-premium.html) |
| Quick share | ❌ Single file |

**Rekomendasi: Pakai modular version (3 files)!**

---

## 📞 Support

Need help?
- 📧 Email: yudhadobar2@gmail.com
- 💬 Telegram: @RaidenNomaden
- 🎮 Discord: RaidenNomadenn

---

## 🎉 Happy Coding!

Struktur modular ini akan membuat hidup kamu lebih mudah! 🚀

**Created with ❤️ by Raiden Nomaden**

---

**Version:** 3.0 Modular
**Last Updated:** February 2026
