# Architecture Overview

## Gambaran Arsitektur Sederhana
Kosuka Bali Trip akan dibangun menggunakan model *Client-Server* sederhana yang dipisah foldernya namun dikelola di dalam satu repositori yang sama.

### Pembagian Peran
1. **Client (Frontend)**: Berperan menampilkan UI/UX (Landing page, detail paket, form) dan berinteraksi secara langsung dengan pengguna akhir (calon wisatawan).
2. **Server (Backend API)**: Berperan sebagai pusat penyedia data/katalog wisata ke Client, memvalidasi data bila perlu, serta nantinya bertindak sebagai jembatan ke Database.
3. **Docs (Dokumentasi)**: Berperan sebagai panduan berjalan bagi developer selama proses pengembangan dan pemeliharaan.

## Alur Umum Pengguna (User Flow)
1. **Membuka Website**:
   Pengguna masuk ke halaman utama. `client` akan memuat halaman Landing Page yang ringan dan responsif.
2. **Melihat Katalog/Paket**:
   Pengguna menelusuri paket wisata yang tersedia. `client` akan memanggil endpoint API dari `server` untuk mendapatkan list data paket.
3. **Mengirim Inquiry (Booking)**:
   - Pengguna memilih "Pesan Sekarang" dan melengkapi form isian ringkas.
   - Form memvalidasi input dari pengguna secara mandiri (Frontend validation).
   - Aplikasi lalu me-redirect data ke WhatsApp Admin untuk penyelesaian transaksi *(Fokus Utama MVP)*.