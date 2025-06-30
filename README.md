# 🏥 PT CIPTA HOSPITAL INDONESIA

Website rumah sakit modern yang dibangun dengan Next.js 14, React, dan Tailwind CSS dengan desain responsif dan fitur konsultasi online.

![PT CIPTA HOSPITAL](https://img.shields.io/badge/Hospital-Website-emerald)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-cyan)

## ✨ Fitur Utama

- 🏥 **Desain Modern**: Interface yang bersih dan profesional dengan warna hijau telur asin
- 📱 **Responsive Design**: Tampilan optimal di semua perangkat (mobile, tablet, desktop)
- 🩺 **Form Konsultasi**: Formulir booking konsultasi dengan dokter online
- 👨‍⚕️ **Profil Dokter**: Menampilkan dokter yang tersedia dengan status online/offline
- 📊 **Statistik Real-time**: Counter untuk dokter, konsultasi, obat, dan pasien
- 🎯 **Smooth Navigation**: Scroll halus ke berbagai section dengan anchor links
- 🎨 **Interactive UI**: Hover effects dan animasi yang smooth
- 🔍 **SEO Optimized**: Meta tags dan struktur HTML yang SEO-friendly

## 🛠️ Teknologi

- **[Next.js 14](https://nextjs.org/)** - React framework dengan App Router
- **[React 18](https://reactjs.org/)** - Library JavaScript untuk membangun UI
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety dan better developer experience
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Komponen UI primitives yang accessible
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon library

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

1. **Clone repository:**
\`\`\`bash
git clone https://github.com/username/pt-cipta-hospital-indonesia.git
cd pt-cipta-hospital-indonesia
\`\`\`

2. **Install dependencies:**
\`\`\`bash
npm install
# atau
yarn install
\`\`\`

3. **Jalankan development server:**
\`\`\`bash
npm run dev
# atau
yarn dev
\`\`\`

4. **Buka browser:**
   Akses [http://localhost:3000](http://localhost:3000)

## 📁 Struktur Project

\`\`\`
pt-cipta-hospital-indonesia/
├── 📁 app/                    # Next.js App Router
│   ├── globals.css           # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── 📁 components/            # Reusable components
│   └── 📁 ui/               # UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── select.tsx
│       └── textarea.tsx
├── 📁 lib/                   # Utility functions
│   └── utils.ts
├── 📁 public/               # Static assets
│   └── 📁 images/
│       └── doctor-aisyah.png
├── 📄 package.json
├── 📄 tailwind.config.js
├── 📄 tsconfig.json
├── 📄 next.config.mjs
└── 📄 README.md
\`\`\`

## 🎨 Sections Website

### 1. **Header Navigation**
- Logo PT CIPTA HOSPITAL
- Menu navigasi responsive
- Tombol Login & Daftar

### 2. **Hero Section**
- Call-to-action untuk konsultasi
- Gambar dokter profesional
- Gradient background yang menarik

### 3. **Statistics Counter**
- Jumlah dokter: 2
- Konsultasi: 1
- Obat tersedia: 0
- Total pasien: 0

### 4. **About Section**
- Informasi tentang rumah sakit
- 3 keunggulan utama:
  - Fasilitas Modern
  - Dokter Berpengalaman  
  - Layanan 24/7

### 5. **Sidebar Features**
- **Form Konsultasi**: Input nama, email, telepon, spesialis, keluhan
- **Profil Dokter**: dr. Aisyah (Spesialis Jantung & Dokter Umum)
- **Layanan**: Kesehatan Jantung, Neurologi, Pediatri, Oftalmologi

### 6. **Footer**
- Informasi kontak: Makassar Kece, Indonesia
- Email: info@ciptahospital.co.id
- Telepon: (021) 123-4567

## 🎨 Customization

### Mengubah Warna Theme
Edit file `tailwind.config.js` untuk mengubah warna utama:
\`\`\`javascript
// Ganti emerald dengan warna lain
colors: {
  primary: colors.emerald, // Ubah ke colors.blue, colors.green, dll
}
\`\`\`

### Mengganti Konten
- **Teks**: Edit di `app/page.tsx`
- **Gambar**: Ganti file di `public/images/`
- **Kontak**: Update di section footer

### Menambah Halaman Baru
\`\`\`bash
# Buat file baru di folder app
touch app/about/page.tsx
touch app/services/page.tsx
\`\`\`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Deploy ke Vercel (Recommended)
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Deploy ke Netlify
\`\`\`bash
npm run build
# Upload folder 'out' ke Netlify
\`\`\`

### Build untuk Production
\`\`\`bash
npm run build
npm start
\`\`\`

## 🤝 Contributing

1. Fork repository
2. Buat branch baru: \`git checkout -b feature/amazing-feature\`
3. Commit changes: \`git commit -m 'Add amazing feature'\`
4. Push ke branch: \`git push origin feature/amazing-feature\`
5. Buat Pull Request

## 📝 License

© 2024 PT CIPTA HOSPITAL INDONESIA. All rights reserved.

## 👨‍💻 Developer

Dibuat dengan ❤️ untuk PT CIPTA HOSPITAL INDONESIA

---

### 📞 Support

Jika ada pertanyaan atau butuh bantuan:
- 📧 Email: info@ciptahospital.co.id
- 📱 WhatsApp: +62 21 123-4567
- 📍 Alamat: Makassar Kece, Indonesia

**⭐ Jangan lupa beri star jika project ini membantu!**
