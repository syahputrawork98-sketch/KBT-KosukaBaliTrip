# Working System

Dokumen ini menjelaskan sistem kerja project Kosuka Bali Trip, yang mengadaptasi standar dari Personal Web Syah Putra.

## Peran Utama

### User

User adalah owner project dan pengambil keputusan final.

Tugas user:
- Menentukan keputusan akhir
- Memberikan arahan utama
- Melakukan commit dan push (Eksekutor dilarang commit dan push)
- Mengirim commit hash ke Room Chat 00
- Menentukan apakah hasil kerja diterima, diperbaiki, atau dibatalkan

### Room Chat 00

Room Chat 00 berperan sebagai manager utama project.

Tugas Room Chat 00:
- Menentukan arah kerja
- Memastikan apakah user masih dalam tahap diskusi atau sudah siap membuat batch
- Menyusun instruksi untuk eksekutor (Gemini Anti-Gravity)
- Menerima hasil kerja dari Antigravity Agent
- Mempertimbangkan hasil analisa dari Room Chat 01
- Membuat keputusan kerja berikutnya
- Menjaga agar project tetap rapi dan konsisten
- Menentukan scope, file yang boleh diubah, file yang tidak boleh disentuh, model rekomendasi, kebutuhan Roomchat 01, dan saran commit message.

Room Chat 00 tidak melakukan commit/push dan bukan eksekutor langsung.

### Room Chat 01

Room Chat 01 berperan sebagai analyst dan reviewer.

Tugas Room Chat 01:
- Membaca repository
- Menganalisa struktur file dan risiko
- Mengecek hasil pekerjaan
- Membandingkan instruksi dengan hasil kerja
- Mengecek commit hash jika diberikan
- Memberikan laporan analisa risiko dan checklist validasi kepada Room Chat 00

Room Chat 01 hanya analis dan reviewer. Tidak mengambil keputusan final, tidak membuat batch baru, tidak memberi instruksi final ke eksekutor, dan tidak membuat file.

### Gemini Anti-Gravity (Eksekutor)

Gemini Anti-Gravity berperan sebagai eksekutor satu kali.

Tugas dan Batasan:
- Mengerjakan instruksi dari Room Chat 00
- **Dilarang keras melakukan commit dan push**
- Melakukan perubahan file sesuai instruksi di workspace Anti-Gravity IDE
- Tidak mengambil keputusan sendiri di luar instruksi
- Tidak melakukan pengecekan final
- Tidak memperluas scope pekerjaan tanpa izin

## Workspace Utama

**Anti-Gravity IDE** adalah workspace utama untuk:
- Eksekusi perubahan file
- Menjalankan perintah terminal lokal (validasi, build, test)
- Melihat git status
- Pengecekan hasil nyata sebelum user melakukan commit dan push

## Fase Kerja

### Pre-Batch Mode
Mode ini digunakan untuk diskusi, analisa, brainstorming, dan rekomendasi tanpa membuat batch eksekusi. Room Chat 00 harus bisa mendeteksi jika user masih dalam mode ini.

### Roomchat 01 Analysis Mode
Mode analisa non-batch tanpa perubahan file. Digunakan ketika Room Chat 00 atau User meminta Room Chat 01 untuk menganalisa repository, struktur, atau risiko sebelum batch dibuat.

### Batch Execution
Fase di mana instruksi final diberikan ke eksekutor (Gemini Anti-Gravity). 

#### Ukuran Batch:
- **Small Batch**: Perubahan kecil, risiko rendah, 1 sampai 3 file.
- **Medium Batch**: Perubahan beberapa file, reasoning lebih kuat, atau struktur penting.
- **Large Batch**: Perubahan masif. Harus dipecah menjadi beberapa batch jika memungkinkan.

#### Scope Area:
Satu batch idealnya hanya menyentuh satu area kerja (misalnya: hanya `docs/`, hanya `client/`, atau hanya `server/`). Jangan mencampur perbaikan backend dan dokumentasi dalam satu batch.

#### Batch Gate:
Sebelum eksekusi, Room Chat 00 harus menyajikan "Batch Gate" berupa ringkasan eksekusi yang harus disetujui user.
Isi Batch Gate: Tujuan, Scope, Ukuran Batch, File yang akan diubah, File yang dilarang disentuh.

#### Batch Naming Policy:
Penamaan batch harus jelas dan mencerminkan perubahan utama.
Contoh: `Batch 004 — Align KBT Workflow with Personal Web Standard`

#### History Checkpoint Policy (-CP):
Gunakan kode `-CP` untuk penanda checkpoint di history jika ada pencapaian milestone yang layak dicatat dan stabil.

## Alur Kerja Batch

1. **Pre-Batch**: User menyampaikan kebutuhan ke Room Chat 00 (diskusi/brainstorming).
2. **Analysis**: Jika perlu analisa, Room Chat 00 atau User meminta Room Chat 01 melakukan *Roomchat 01 Analysis Mode*.
3. **Batch Gate**: Room Chat 00 menyusun batch (Small/Medium) dan menyajikan Batch Gate.
4. **Approval**: User menyetujui Batch Gate.
5. **Execution**: Eksekutor (Gemini Anti-Gravity) mengerjakan batch satu kali di Anti-Gravity IDE.
6. **Validation**: User mengecek hasil (menggunakan git status dll) di IDE.
7. **Commit & Push**: User melakukan commit dan push. Eksekutor DILARANG commit & push.
8. **Review**: User mengirim commit hash ke Room Chat 00. Room Chat 01 me-review.
9. **Next Step**: Room Chat 00 menentukan langkah berikutnya.

## Aturan Eksekusi

- Jangan mengerjakan hal di luar instruksi.
- Jangan membuat framework, package, atau konfigurasi baru tanpa instruksi.
- Terapkan Scope Area (satu batch satu area).
- Dilarang keras melakukan commit dan push.
- Setelah selesai, laporkan hasil dengan jelas (file diubah, cara cek, rekomendasi commit).

## Aturan Review

Review dilakukan oleh Room Chat 01.
Review memeriksa:
- Kesesuaian struktur dan isi file dengan instruksi
- Temuan file tambahan atau perubahan di luar scope
- Risiko dan checklist validasi
- Commit hash (jika sudah di-push user)

## Prinsip Source of Truth

GitHub adalah Source of Truth.
Semua AI tools hanya membantu proses kerja. Keputusan final ditentukan berdasarkan isi repository GitHub.
