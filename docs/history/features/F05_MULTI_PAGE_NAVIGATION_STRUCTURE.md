# Batch F05 — Multi-Page Navigation Structure

## Feature Summary
Mengubah struktur navigasi KBT dari satu halaman (one-page scroll landing) menjadi multi-page navigation menggunakan Next.js App Router. Membuat halaman terpisah untuk setiap item navigasi utama di Navbar dan Footer, serta menyederhanakan halaman utama agar berfungsi sebagai landing page summary dengan tombol tautan CTA eksplorasi.

## Status
Completed / Ready for validation

## Story
Seiring diterimanya tema visual baru (F04), navigasi satu halaman dinilai kurang skalabel untuk konten jangka panjang. User ingin setiap tautan menu navigasi mengarah ke halamannya sendiri.

## Routes Created
1. `/destinations` - Menampilkan destinasi unggulan Bali.
2. `/tours` - Menampilkan daftar paket tur terpopuler.
3. `/vehicles` - Menampilkan armada kendaraan yang tersedia.
4. `/gallery` - Menampilkan galeri dokumentasi foto.
5. `/about` - Menampilkan informasi latar belakang tim lokal.
6. `/contact` - Menampilkan formulir CTA kontak WhatsApp.
7. `/services` - Halaman placeholder untuk layanan premium masa depan.

## Files Touched
- [NEW] [PageShell.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/layout/PageShell.tsx) (Layout pembungkus Navbar dan Footer)
- [NEW] [PageHeader.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/layout/PageHeader.tsx) (Header perkenalan subpage)
- [NEW] [page.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/app/destinations/page.tsx) (Halaman Destinasi)
- [NEW] [page.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/app/tours/page.tsx) (Halaman Tur)
- [NEW] [page.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/app/vehicles/page.tsx) (Halaman Kendaraan)
- [NEW] [page.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/app/gallery/page.tsx) (Halaman Galeri)
- [NEW] [page.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/app/about/page.tsx) (Halaman Tentang Kami)
- [NEW] [page.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/app/contact/page.tsx) (Halaman Kontak)
- [NEW] [page.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/app/services/page.tsx) (Placeholder Layanan)
- [MODIFY] [Navbar.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/sections/Navbar.tsx) (Migrasi dari anchor tag ke Link routing Next.js)
- [MODIFY] [Footer.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/sections/Footer.tsx) (Migrasi link footer ke rute absolut)
- [MODIFY] [DestinationHighlights.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/sections/DestinationHighlights.tsx) (Menambahkan prop showCTA)
- [MODIFY] [TourPackagesPreview.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/sections/TourPackagesPreview.tsx) (Menambahkan prop showCTA & Link Inquire)
- [MODIFY] [VehiclePreview.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/sections/VehiclePreview.tsx) (Menambahkan prop showCTA)
- [MODIFY] [GalleryPreview.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/sections/GalleryPreview.tsx) (Menambahkan prop showCTA)
- [MODIFY] [page.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/app/page.tsx) (Homepage menyederhanakan preview & membuang section About)

## HOLD / Blocked Notes
- Mengisi konten final 3 layanan pada rute `/services`.
- Mengimplementasikan fungsionalitas kirim pesan form kontak atau integrasi WhatsApp API sesungguhnya.
- Backend, Database, CMS, Auth, Payment, Deployment.

## Validation Checklist
- [x] Rute-rute baru berhasil dibuat dan dapat diakses tanpa 404.
- [x] Navbar berhasil dimigrasi menggunakan `next/link` dan mengarah ke subpage yang benar.
- [x] Klik logo di Navbar mengembalikan pengguna ke halaman utama (`/`).
- [x] Footer link berhasil dialihkan ke halaman subpage.
- [x] Homepage disederhanakan dengan tombol CTA "Explore" kustom ke masing-masing rute.
- [x] Halaman `/services` disiapkan sebagai placeholder elegan.
- [x] Konsistensi warna tema F04 (Deep Navy, Warm Gold, Teal, Sand) terjaga di seluruh halaman.
- [x] npm run build sukses (TypeScript dan Next.js Turbopack bersih tanpa error compile).
