# Owner Pre-ACC Checklist — Localhost Review

Dokumen ini disediakan sebagai panduan bagi Owner untuk melakukan review mandiri terhadap website KBT (Kosuka Bali Trip) di lingkungan `localhost` sebelum memberikan persetujuan ACC final.

---

## 1. Brand & Keselarasan Visual
- [ ] **Logo Brand**: Pastikan logo transparan terbaru (`kosuka-bali-trip-logo.png`) tampil rapi di bagian kiri Navbar.
- [ ] **Skema Warna**: Warna dasar website harus mengikuti palet resmi logo: *Deep Ocean Navy* (`#082F49`), *Ocean Teal* (`#0E7490`), *Warm Bali Gold* (`#D6A84F`), dan *Soft Sand* (`#F7EFE2`).
- [ ] **Kesan Estetika**: Layout terasa bersih, minimalis, dan bergaya *Casual Luxury Tropical*, tanpa warna bawaan browser yang mencolok.

---

## 2. Homepage (Gateway / Landing Summary)
- [ ] **Fungsi Gateway**: Homepage berfungsi sebagai ringkasan dan pintu gerbang. Sisa bagian (Destinations, Tours, Vehicles, Gallery) berupa preview ringkas dengan tombol jelajah mengarah ke subpage yang bersangkutan.
- [ ] **Call To Action (CTA)**: Tombol utama mengarah ke halaman layanan (`/services`) atau halaman inquiry (`/contact`).
- [ ] **Ikon Minimalis**: Tidak ada emoji yang digunakan sebagai ikon di halaman depan, melainkan diganti dengan pustaka ikon outline SVG lokal (`BrandIcon.tsx`).

---

## 3. Services Page (`/services`)
- [ ] **Tiga Model Bantuan**: Penjelasan detail mengenai 3 model bantuan utama KBT (*Complete Bali Trip Package*, *Private Local Guide*, *Vehicle Rental Only*) tercantum secara terpisah dan mudah dipahami.
- [ ] **Tabel Perbandingan**: Fitur inklusi/eksklusi pada tabel perbandingan berjalan secara responsif (dapat di-scroll secara horizontal di perangkat mobile).
- [ ] **Alur Kerja (Workflow)**: Diagram langkah "How It Works" tampil rapi dengan penomoran dan ikon visual yang sesuai.

---

## 4. Diferensiasi Konten Subpage
- [ ] **Destinations (`/destinations`)**: Menjelaskan pembagian gaya wisata Bali berdasarkan kategori mood (pantai, budaya, alam, hidden gem) beserta rekomendasi area untuk tiap kelompok segmen wisatawan.
- [ ] **Tours (`/tours`)**: Menyajikan inspirasi trip style, visual timeline alur perjalanan harian standard, dan panduan durasi/pace trip.
- [ ] **Vehicles (`/vehicles`)**: Menjelaskan opsi armada mobil, kapasitas jumlah penumpang/bagasi yang nyaman, dan ketentuan rental (fuel & driver included, overtime, toll/parking notes).
- [ ] **Gallery (`/gallery`)**: Berfungsi sebagai mood board visual Bali dengan catatan copyright/sumber di bagian bawah grid.
- [ ] **About (`/about`)**: Kisah brand dan penjelasan 5 pilar perjalanan (Comfort, Friendly, Flexible, Local-aware, Not rushed) tampil dengan ikon outline profesional tanpa klaim pemasaran berlebihan (*overclaim*).

---

## 5. Jalur Kontak & Penanda Placeholder (`/contact`)
- [ ] **Opsi Tipe Bantuan**: Memiliki tombol panduan pemilihan kategori bantuan (Package, Guide, Vehicle, Not sure).
- [ ] **Email Channel**: Email resmi `kosukabalitrip@gmail.com` aktif menggunakan link `mailto` dengan subjek dan body template inquiry otomatis.
- [ ] **WhatsApp Channel**: WhatsApp dummy menggunakan nomor `+62 812 3456 7890` yang mengarah ke link `wa.me/6281234567890` (membuka tab baru).
- [ ] **Development Placeholder Label**: Pastikan terdapat catatan teks kecil yang jelas di dekat tombol WhatsApp: *"Note: WhatsApp number is currently a development placeholder."*

---

## 6. Validasi Tautan (No 404 / No Dummy Links)
- [ ] **Navbar & Footer Links**: Seluruh navigasi berjalan dengan benar ke rute internal masing-masing.
- [ ] **Tautan Legal / Kebijakan**: Karena halaman kebijakan belum dibuat dalam scope batch ini, pastikan link *Privacy Policy* dan *Terms of Service* di footer berupa teks statis redup *(Coming Soon)* yang tidak dapat diklik (tidak mengarah ke rute aktif / 404).

---

## Keputusan Owner Review (ACC Decision)
Setelah melakukan pengecekan localhost, mohon tandai pilihan keputusan Anda di bawah ini:

- [ ] **APPROVED / ACC**: Seluruh struktur halaman, visual brand, jalur kontak, dan dokumentasi telah disetujui untuk lanjut ke tahap Mobile Navigation & Responsive Polish.
- [ ] **NEEDS FIX**: Ada catatan perbaikan minor sebelum dapat diberikan ACC (mohon tulis catatan perbaikan Anda pada chat room).
- [ ] **HOLD**: Project ditangguhkan karena kebutuhan perubahan major.
