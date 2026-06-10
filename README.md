# Abday Hafidz — Developer Portfolio (Persona 5 Royal Edition) 🌟

Developer portfolio interaktif yang sepenuhnya di-rebrand dengan estetika visual game **Persona 5 Royal**. Dilengkapi dengan loading animation "Calling Card" khas Atlus, halftone grid, skew/slanted blocks, high-contrast Atlus Acid Red (`#e60012`), and an interactive AI terminal chat.

---

## 🎨 Persona 5 Royal Aesthetics & Features

- **Preloader Calling Card:** Animasi diagonal slash loading bar, skewed name blocks, dan dynamic loading star.
- **Theme Color Palette:** Kombinasi kontras tinggi antara Hitam, Putih, dan **Atlus Acid Red (`#e60012`)**.
- **Slanted Layouts:** Penggunaan `.p5-skew-x`, `.p5-skew-y`, dan `.p5-skew-both` untuk memberikan layout visual asimetris yang dinamis khas Atlus UI.
- **Halftone Patterns:** Efek overlay dot pattern (`.p5-halftone-bg` & `.p5-halftone-dark`) untuk visual background yang retro-modern.
- **AI Terminal Chat Widget:** Chat widget berbentuk command-line terminal yang mendukung command lokal (`help`, `ls`, `cat <slug>`, `history`, `clear`) dan integrasi AI (Cerebras LLaMA).
- **GSAP & ScrollTrigger Animations:** Transisi scroll yang mulus, didukung oleh smooth scrolling dari **Lenis**.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS + Custom CSS tokens (P5R elements)
- **Animation:** GSAP (GreenSock) + ScrollTrigger
- **Scroll Logic:** Lenis Smooth Scroll
- **Routing:** React Router

---

## 🚀 Prasyarat

- **Node.js:** Versi 22 atau lebih baru
- **npm:** Versi 10 atau lebih baru

---

## 💻 Cara Menjalankan Project Secara Lokal

### 1. Clone Repository
```bash
git clone https://github.com/abday-wong/abdayhafidz.git
cd abdayhafidz
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Konfigurasi Environment Variables
Buat file `.env` di root direktori project, kemudian tambahkan API key Cerebras untuk mengaktifkan AI respon di chat widget:
```env
VITE_CEREBRAS_API_KEY=your_cerebras_key_here
```
*Catatan: Jika API key tidak diisi, command lokal di terminal tetap dapat berfungsi secara offline.*

### 4. Jalankan Development Server
```bash
npm run dev
```
Buka URL `http://localhost:5173` di web browser Anda.

### 5. Build Project (Production)
```bash
npm run build
```
Hasil file build production akan diekspor ke folder `build/`.

### 6. Preview Hasil Build
```bash
npm run preview
```

---

## 📂 Struktur Direktori

```text
.
├── index.html
├── public/
├── src/
│   ├── components/            # Komponen visual (Navbar, Preloader, dll)
│   ├── data/                  # Data statis portfolio (portfolioData, projectMeta)
│   ├── hooks/                 # Custom React hooks
│   ├── pages/                 # Halaman utama (Home.jsx)
│   ├── projectDetails/        # Komponen detail showcase case-studies
│   ├── services/              # Integrasi AI Cerebras & Context Builder
│   └── utils/                 # Utility helpers (GSAP animations)
├── tailwind.config.js
├── vite.config.js
└── build/                     # Folder output production build
```

---

## 📝 Mengedit Konten Portfolio

Untuk mengubah data portofolio tanpa merusak visual layout, cukup edit file berikut:
- **Profil, Skills, Capabilities, & Achievements:** `src/data/portfolioData.js`
- **Metadata Card Projects:** `src/data/projectMeta.js`
- **Detail Project (Showcase):** `src/data/projectDetailsData.js`
- **Section Router & Registry:** `src/data/sectionRegistry.js`

---

## 💬 Terminal Commands (Chat Widget)

Terminal chat interaktif di pojok kanan bawah mendukung command-command berikut:
- `help` — Menampilkan list command yang tersedia.
- `ls` — Menampilkan daftar project case study yang dipublikasikan.
- `cat <slug>` — Membaca detail case study (contoh: `cat yoknabung`).
- `history` — Menampilkan riwayat input perintah Anda.
- `clear` — Membersihkan layar terminal.

---

## 🌐 Deploy
Project ini dioptimalkan untuk di-deploy ke platform cloud statis seperti **Vercel** atau **Netlify**.

---

## 📄 Lisensi
Repository ini dimiliki oleh Abday Hafidz. All rights reserved.
