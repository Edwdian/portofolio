# Portfolio — React

Portofolio minimalis berbasis React, siap deploy ke GitHub Pages.

---

## ✏️ Yang Perlu Diganti

Cari komentar `// ✏️` di setiap file:

| File | Isi |
|------|-----|
| `Navbar.jsx` | Inisial nama (contoh: `YN.`) |
| `Hero.jsx` | Nama, role, tagline, foto, link CV |
| `About.jsx` | Foto, bio paragraf 1 & 2, stats |
| `Skills.jsx` | Kategori skill & item-itemnya |
| `Projects.jsx` | Judul, deskripsi, tech, link, gambar |
| `Contact.jsx` | Email, telepon, kota, link social media |
| `Footer.jsx` | Nama |
| `package.json` | Ganti `YOUR_GITHUB_USERNAME` |

### Cara pasang foto sendiri
1. Simpan foto di `src/assets/photo.jpg`
2. Di `Hero.jsx`: `import photo from '../assets/photo.jpg'` lalu `src={photo}`

---

## 🚀 Deploy ke GitHub Pages

```bash
# 1. Buat repo baru di GitHub bernama "portfolio"

# 2. Edit package.json
"homepage": "https://USERNAME_ANDA.github.io/portfolio"

# 3. Install
npm install

# 4. Push ke GitHub
git init
git add .
git commit -m "init portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main

# 5. Deploy
npm run deploy

# 6. Aktifkan GitHub Pages
# Settings → Pages → Branch: gh-pages → Save
```

Portofolio live di: `https://USERNAME_ANDA.github.io/portfolio`

---

## 💻 Jalankan Lokal

```bash
npm install
npm start
```
