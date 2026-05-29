# Working System

Dokumen ini menjelaskan sistem kerja project Kosuka Bali Trip.

## Peran Utama

### User

User adalah owner project dan pengambil keputusan final.

Tugas user:
- Menentukan keputusan akhir
- Memberikan arahan utama
- Melakukan commit dan push jika diperlukan
- Mengirim commit hash ke Room Chat 00
- Menentukan apakah hasil kerja diterima, diperbaiki, atau dibatalkan

### Room Chat 00

Room Chat 00 berperan sebagai manager utama project.

Tugas Room Chat 00:
- Menentukan arah kerja
- Menyusun instruksi untuk eksekutor
- Menerima hasil kerja dari Antigravity Agent atau Gemini
- Mempertimbangkan hasil analisa dari Room Chat 01
- Membuat keputusan kerja berikutnya
- Menjaga agar project tetap rapi dan konsisten

Room Chat 00 boleh membuat instruksi kerja, tetapi tidak menjadi eksekutor langsung.

### Room Chat 01

Room Chat 01 berperan sebagai analyst dan reviewer.

Tugas Room Chat 01:
- Membaca repository
- Menganalisa struktur file
- Mengecek hasil pekerjaan
- Membandingkan instruksi dengan hasil kerja
- Mengecek commit hash jika diberikan
- Memberikan laporan analisa kepada Room Chat 00

Room Chat 01 tidak mengambil keputusan utama dan tidak membuat perubahan langsung.

### Antigravity Agent

Antigravity Agent berperan sebagai eksekutor.

Tugas Antigravity Agent:
- Mengerjakan instruksi dari Room Chat 00
- Melakukan perubahan file sesuai instruksi
- Tidak mengambil keputusan sendiri di luar instruksi
- Tidak melakukan pengecekan final
- Tidak memperluas scope pekerjaan tanpa izin

### Gemini 3.1 Pro Low

Gemini 3.1 Pro Low digunakan untuk pekerjaan ringan dan terarah.

Detail aturan penggunaan model dijelaskan di `docs/project-workflow/MODEL_USAGE_GUIDE.md`.

Contoh penggunaan:
- Membuat file sederhana
- Mengubah teks dokumentasi
- Merapikan struktur kecil
- Melakukan perubahan yang scope-nya kecil

### Gemini 3.1 Pro High

Gemini 3.1 Pro High digunakan untuk pekerjaan yang lebih kompleks.

Detail aturan penggunaan model dijelaskan di `docs/project-workflow/MODEL_USAGE_GUIDE.md`.

Contoh penggunaan:
- Menyusun struktur yang lebih besar
- Refactor yang perlu pertimbangan lebih banyak
- Membuat beberapa file yang saling berkaitan
- Menjalankan instruksi yang membutuhkan pemahaman konteks lebih dalam

### Alternative Acceleration Models

Model alternatif dapat digunakan hanya jika user ingin percepatan atau ingin memanfaatkan token yang tersedia.

Model alternatif bukan default utama project.

Penggunaan model alternatif harus tetap mengikuti instruksi Room Chat 00 dan hasilnya tetap perlu direview oleh Room Chat 01.

Jika model alternatif digunakan, catat model yang dipakai di project history pada bagian Notes.

## Alur Kerja

1. User menyampaikan kebutuhan ke Room Chat 00.
2. Room Chat 00 memahami kebutuhan dan menyusun arah kerja.
3. Jika perlu analisa repository, Room Chat 00 meminta Room Chat 01 melakukan analisa.
4. Room Chat 01 membaca repository dan memberi laporan.
5. Room Chat 00 membuat instruksi final untuk Antigravity Agent atau Gemini.
6. Antigravity Agent atau Gemini mengerjakan instruksi satu kali.
7. User melakukan commit dan push jika hasil kerja sudah siap.
8. User mengirim commit hash ke Room Chat 00.
9. Room Chat 00 meminta Room Chat 01 mengecek hasil commit.
10. Room Chat 01 memberi laporan review.
11. Room Chat 00 menentukan langkah berikutnya.

## Aturan Eksekusi

- Jangan mengerjakan hal di luar instruksi.
- Jangan membuat framework, package, atau konfigurasi baru tanpa instruksi.
- Jangan mencampur pekerjaan dokumentasi, frontend, backend, dan deployment dalam satu instruksi kecuali diminta.
- Jangan menghapus file tanpa instruksi eksplisit.
- Jangan mengganti nama folder atau file tanpa instruksi eksplisit.
- Jangan melakukan pengecekan final sebagai eksekutor.
- Setelah pekerjaan selesai, cukup laporkan file yang dibuat atau diubah.

## Aturan Review

Review dilakukan oleh Room Chat 01.

Review harus memeriksa:
- Apakah struktur file sesuai instruksi
- Apakah isi file sesuai instruksi
- Apakah ada file tambahan yang tidak diminta
- Apakah ada perubahan di luar scope
- Apakah commit hash sesuai dengan hasil kerja yang dilaporkan

## Prinsip Source of Truth

GitHub adalah Source of Truth.

ChatGPT, Gemini, Antigravity Agent, dan room chat hanya membantu proses kerja. Status final project tetap ditentukan berdasarkan isi repository GitHub.
