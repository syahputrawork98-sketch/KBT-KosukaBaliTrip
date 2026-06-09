# Batch F04 — Logo-Based Brand Theme Alignment

## Feature Summary
Menyelaraskan tema warna website KBT berdasarkan logo baru yang telah disediakan oleh user. Membuang background checkerboard palsu pada logo dan mengintegrasikannya secara transparan ke Navbar, serta memperbarui design tokens (CSS variables) ke palet warna baru (Deep Ocean Navy, Ocean Teal, Warm Bali Gold, dan Soft Sand).

## Status
Completed / Ready for validation

## Story
Setelah logo baru diberikan, warna website sebelumnya (muted sage dan coral) disesuaikan agar selaras dengan warna resmi logo baru yang bernuansa *Luxury Tropical + Ocean Travel + Warm Bali Sunset*. Untuk itu, token warna, button, badge, dan visual layout di Navbar, Hero, dan Footer diselaraskan.

## Current State
- Logo Kosuka Bali diletakkan di Navbar dengan format transparan bersih.
- Warna utama website diubah menjadi Deep Navy, Ocean Teal, dan Warm Gold.
- Navbar, Hero, dan Footer sudah terintegrasi dan responsif.
- Dokumen status diperbarui untuk F04.

## Execution Notes (F04.0 - Logo Integration)
- Mengunduh file logo dari Google Drive dan menyimpannya di `client/public/brand/kosuka-bali-logo.png`.
- Menjalankan script manipulasi pixel untuk membuang pola grid checkerboard abu-abu/putih agar logo transparan penuh.
- Memasang komponen logo Next.js `Image` di `Navbar.tsx`.

## Execution Notes (F04.1 - Brand Theme Alignment)
- **Design Tokens**: Mengubah warna dasar di `globals.css` ke Deep Ocean Navy (`#082F49`), Ocean Teal (`#0E7490`), Warm Bali Gold (`#D6A84F`), dan Soft Sand (`#F7EFE2`).
- **Button System**: Menyesuaikan variants di `Button.tsx` (primary = gold bg + navy text; secondary = teal bg + white text; outline = navy border + navy text).
- **Badge System**: Memperbarui variant di `Badge.tsx` agar menggunakan variable dan memiliki kontras yang baik.
- **Navbar**: Mengubah nama brand di Navbar menjadi "Kosuka Bali" agar tidak terlalu panjang, memperbarui hover link ke warm gold (`var(--color-accent)`).
- **Hero Section**: Mengubah light overlay dari putih ke warm sand gradasi (`from-[var(--color-sand)]/95`), dan membuang color class overrides pada tombol agar tombol dapat mengikuti variant global secara otomatis.
- **Footer**: Memperbarui warna latar ke `bg-[var(--color-primary)]` (Deep Navy), nama brand menjadi "Kosuka Bali", dan link hover ke warna gold (`var(--color-accent)`).

## Sub-Batch Roadmap
- F04.0 — Completed (Logo Integration & Transparency Fix)
- F04.1 — Completed (Design Tokens & Color Alignment)

## HOLD / Blocked Notes
- Backend, Database, CMS, Auth, Payment, Deployment.
- Booking engine & real-time vehicle availability.
- Multilingual/i18n.

## Next Step
- Validasi tampilan lokal bersama user.
- Mobile polish / perbaikan konten teks lanjutan.

## Validation Checklist
- [x] Menyimpan dan membersihkan background checkerboard logo menjadi transparan penuh.
- [x] Memasang logo di Navbar kiri secara rapi dan proporsional.
- [x] Memperbarui design tokens di `globals.css` (navy, teal, gold, sand).
- [x] Memperbarui Button & Badge variants sesuai tema warna baru.
- [x] Memperbarui Navbar, Hero, dan Footer agar selaras dengan warna baru dan nama brand "Kosuka Bali".
- [x] Membuang button style overrides di `HeroSection.tsx`.
- [x] npm run build succeeded (Clean TypeScript & Next.js compilation).
- [x] Tidak ada dependensi baru atau setup framework baru.
