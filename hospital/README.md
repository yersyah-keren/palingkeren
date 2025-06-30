# PT CIPTA HOSPITAL INDONESIA

Website rumah sakit modern yang dibangun dengan Next.js 14, React, dan Tailwind CSS.

## Fitur

- 🏥 **Desain Modern**: Interface yang bersih dan profesional dengan warna hijau telur asin
- 📱 **Responsive**: Tampilan optimal di semua perangkat
- 🩺 **Form Konsultasi**: Formulir untuk booking konsultasi dengan dokter
- 👨‍⚕️ **Profil Dokter**: Menampilkan dokter yang tersedia dengan status online
- 📊 **Statistik**: Counter untuk dokter, konsultasi, obat, dan pasien
- 🎯 **Navigasi Smooth**: Scroll halus ke berbagai section
- 🎨 **Animasi Hover**: Efek interaktif pada elemen UI

## Teknologi

- **Next.js 14** - React framework dengan App Router
- **React 18** - Library JavaScript untuk UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Komponen UI primitives
- **Lucide React** - Icon library

## Instalasi

1. Clone repository:
\`\`\`bash
git clone <repository-url>
cd pt-cipta-hospital-indonesia
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Jalankan development server:
\`\`\`bash
npm run dev
\`\`\`

4. Buka [http://localhost:3000](http://localhost:3000) di browser

## Struktur Project

\`\`\`
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── select.tsx
│       └── textarea.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── images/
│       └── doctor-aisyah.png
├── package.json
├── tailwind.config.js
└── tsconfig.json
\`\`\`

## Sections Website

1. **Header** - Navigasi dengan menu responsive
2. **Hero** - Section utama dengan CTA konsultasi
3. **Statistics** - Counter untuk berbagai metrics
4. **About** - Informasi tentang rumah sakit
5. **Sidebar** - Form konsultasi, profil dokter, dan layanan
6. **Footer** - Informasi kontak dan layanan

## Customization

### Warna
Warna utama menggunakan emerald/teal (hijau telur asin). Untuk mengubah warna, edit file `tailwind.config.js` dan `app/globals.css`.

### Konten
- Edit teks di `app/page.tsx`
- Ganti gambar di folder `public/images/`
- Update informasi kontak di section footer

## Build untuk Production

\`\`\`bash
npm run build
npm start
\`\`\`

## License

© 2024 PT CIPTA HOSPITAL INDONESIA. All rights reserved.
