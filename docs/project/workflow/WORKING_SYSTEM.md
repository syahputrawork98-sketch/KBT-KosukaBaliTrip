# Working System

Dokumen ini menjelaskan sistem kerja project Kosuka Bali Trip sebagai panduan internal untuk mengelola workflow, batch, eksekusi, validasi, dan review project.

## Prinsip Utama

- **GitHub adalah Source of Truth utama.**
- ChatGPT, Room Chat, Gemini, dan tools AI lain hanya membantu proses kerja.
- **Anti-Gravity IDE** adalah tempat eksekusi, pengecekan file, terminal, build/test jika diperlukan, dan validasi nyata oleh user.
- Perubahan project dilakukan dalam batch kecil yang jelas dan mudah dicek.
- Jangan mengandalkan memori chat lama jika informasi sudah tersedia di repository.
- Commit dan push **hanya dilakukan oleh user**.

## Peran Utama

### User
User adalah owner project dan pengambil keputusan final.
Tugas user:
- Menentukan keputusan akhir dan memberikan arahan utama.
- Melakukan commit dan push (Eksekutor dilarang commit dan push).
- Mengirim commit hash ke Room Chat 00.
- Menentukan apakah hasil kerja diterima, diperbaiki, atau dibatalkan.

### Room Chat 00
Room Chat 00 berperan sebagai manager utama project.
Tugas Room Chat 00:
- Menentukan arah kerja dan memastikan apakah user masih dalam tahap diskusi atau sudah siap membuat batch.
- Menyusun instruksi untuk eksekutor (Gemini Anti-Gravity).
- Menerima hasil kerja dari eksekutor dan mempertimbangkan hasil analisa dari Room Chat 01.
- Membuat keputusan kerja berikutnya.
- Menjaga agar project tetap rapi dan konsisten.
- Menentukan scope, file yang boleh diubah, file yang tidak boleh disentuh, model rekomendasi, kebutuhan Roomchat 01, dan saran commit message.
Room Chat 00 tidak melakukan commit/push dan bukan eksekutor langsung.

### Room Chat 01
Room Chat 01 berperan sebagai analyst dan reviewer.
Tugas Room Chat 01:
- Membaca repository, menganalisa struktur file dan risiko.
- Mengecek hasil pekerjaan dan membandingkan instruksi dengan hasil kerja.
- Mengecek commit hash jika diberikan.
- Memberikan laporan analisa risiko dan checklist validasi kepada Room Chat 00.
Room Chat 01 hanya analis dan reviewer. Tidak mengambil keputusan final, tidak membuat batch baru, tidak memberi instruksi final ke eksekutor, dan tidak membuat file.

### Gemini Anti-Gravity (Eksekutor)
Gemini Anti-Gravity berperan sebagai eksekutor satu kali.
Tugas dan Batasan:
- Mengerjakan instruksi dari Room Chat 00.
- **Dilarang keras melakukan commit dan push.**
- Melakukan perubahan file sesuai instruksi di workspace Anti-Gravity IDE.
- Tidak mengambil keputusan sendiri di luar instruksi, tidak melakukan pengecekan final, tidak memperluas scope.

## Workspace Utama

**Anti-Gravity IDE** adalah workspace utama untuk:
- Eksekusi perubahan file.
- Menjalankan perintah terminal lokal (validasi, build, test).
- Melihat git status.
- Pengecekan hasil nyata sebelum user melakukan commit dan push.

## Fase Kerja

### Discussion atau Pre-Batch Mode
- Digunakan saat user masih bertanya, bingung, brainstorming, meminta pendapat, atau meminta analisa.
- Tidak memakai nomor batch.
- Tidak membuat, mengubah, atau menghapus file.
- Tidak membutuhkan Gemini eksekutor.
- Room Chat 00 boleh memberi rekomendasi arah, tetapi belum membuat instruksi final eksekusi.
- Jika butuh analisa Room Chat 01, hasilnya tetap berupa analisa chat, bukan dokumen repo.

### Room Chat 01 Analysis Mode
- Room Chat 01 adalah analis atau auditor, bukan eksekutor.
- Analisa Room Chat 01 tidak dihitung sebagai batch.
- Analisa Room Chat 01 tidak membuat file baru, tidak perlu commit/push.
- Hasil analisa hanya menjadi bahan keputusan Room Chat 00 dan user.
- Analisa hanya boleh dijadikan dokumen repository jika user eksplisit meminta.

### Batch Execution
Fase di mana instruksi final diberikan ke eksekutor.

#### Ukuran Batch

**Small Batch**:
- 1 sampai 3 file.
- 1 area kerja saja.
- Risiko rendah.
- Mudah dicek manual.
- Tidak mengubah struktur besar.
- Cocok untuk Gemini 3.1 Pro Low.

**Medium Batch**:
- 4 sampai 8 file.
- 1 sampai 2 area kerja.
- Ada relasi antar file.
- Risiko sedang.
- Cocok untuk Gemini 3.1 Pro High.

**Large Batch**:
- Lebih dari 8 file.
- Menyentuh banyak area.
- Migrasi struktur besar, refactor besar, frontend/backend logic, deployment penting.
- **Wajib dipecah** menjadi beberapa batch kecil jika memungkinkan.
- Jika tidak bisa dipecah, wajib review Room Chat 01 sebelum eksekusi.

#### Scope Area
Satu batch idealnya hanya menyentuh satu area:
- docs
- frontend
- backend
- database
- deployment
- content
- design
Jika satu batch menyentuh lebih dari satu area, Room Chat 00 wajib menjelaskan alasannya dan menentukan apakah perlu Room Chat 01.

#### Batch Gate Sebelum Eksekusi
Sebelum eksekusi, Room Chat 00 harus menyajikan "Batch Gate" berupa ringkasan eksekusi yang wajib disetujui user.
Batch Gate wajib memuat:
- Nama batch.
- Tujuan batch.
- Ukuran batch.
- Scope area.
- File yang boleh dibuat atau diubah.
- File atau folder yang tidak boleh disentuh.
- Model rekomendasi.
- Perlu Room Chat 01 atau tidak.
- Risiko utama.
- Cara cek hasil.
- Rekomendasi commit message.
- Larangan commit dan push oleh eksekutor.

#### Batch Naming Policy
Gunakan format:
- **Batch 004** = fase besar atau batch utama.
- **Batch 004A, 004B, 004C** = batch kerja lanjutan dalam fase yang sama (Huruf A, B, C dipakai untuk pekerjaan utama lanjutan).
- **Batch 004A.1, 004A.2** = pecahan kecil dari satu batch kerja yang terlalu besar.
- **Batch 004-CP** = checkpoint dokumentasi fleksibel.
  - `-CP` tidak memiliki turunan seperti CP2 atau CP3.
  - Jika checkpoint dibutuhkan lagi pada fase yang sama, tetap gunakan kode `-CP`, bukan membuat varian baru.
  - `-CP` dipakai hanya untuk checkpoint dokumentasi.
  - `-CP` bukan batch fitur baru.

#### History Checkpoint Policy (-CP)
- History detail tidak wajib diisi setiap batch kerja.
- Batch kerja boleh fokus ke eksekusi.
- `CURRENT_STATUS.md` wajib diupdate jika ada perubahan besar.
- Checkpoint dokumentasi dilakukan saat user meminta Batch [nomor]-CP.
- Checkpoint dapat dilakukan kapan saja sesuai kondisi fokus user.
- Checkpoint tidak wajib setiap 5 batch atau 10 batch.
- Saat checkpoint, rangkum hasil kerja sebelumnya ke dokumentasi yang sesuai.
- Jangan menambahkan fitur baru saat checkpoint.

Aturan saat -CP:
- Jika perubahan terjadi di client/frontend, update `docs/frontend/` jika folder tersebut sudah ada.
- Jika perubahan terjadi di server/backend, update `docs/backend/` jika folder tersebut sudah ada.
- Jika perubahan terjadi di database/data model, update `docs/database/` jika folder tersebut sudah ada.
- Jika perubahan terjadi pada konten travel, update dokumentasi content jika folder tersebut sudah ada.
- Jika status project berubah, update `docs/project/history/CURRENT_STATUS.md`.
- Jika batch sudah selesai, update file batch history yang sesuai.

## Aturan Eksekusi

- Jangan mengerjakan hal di luar instruksi batch.
- Jangan membuat framework, package, dependency, atau konfigurasi baru tanpa instruksi eksplisit.
- Jangan mencampur dokumentasi, frontend, backend, deployment, content, dan design dalam satu batch besar kecuali memang diminta dan dijelaskan alasannya.
- Jangan menghapus file atau folder tanpa instruksi eksplisit.
- Jangan mengganti nama file atau folder tanpa instruksi eksplisit.
- Jangan menyimpan password, API key, token, credential, atau data sensitif di repository.
- Eksekutor tidak boleh commit dan push.

## Aturan Review

Review dilakukan oleh Room Chat 01. Review harus memastikan:
- Apakah file yang dibuat atau diubah sesuai instruksi.
- Apakah ada perubahan di luar scope.
- Apakah struktur folder masih konsisten.
- Apakah referensi path masih benar.
- Apakah tidak ada perubahan di client/server jika batch hanya docs.
- Apakah tidak ada dependency baru.
- Apakah hasil aman untuk dilanjutkan ke batch berikutnya.
