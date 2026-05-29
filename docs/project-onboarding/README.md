# Project Onboarding

Folder ini berisi panduan onboarding untuk project Kosuka Bali Trip.

Dokumentasi ini dibuat agar project bisa dilanjutkan dengan mudah walaupun akun ChatGPT, ChatGPT Project, room chat, atau AI tools yang digunakan berubah.

## Tujuan

Project onboarding digunakan untuk:
- Menyiapkan ChatGPT Project baru
- Menyiapkan Room Chat 00
- Menyiapkan Room Chat 01
- Menyimpan instruksi copy-paste
- Membantu AI baru memahami konteks project dari GitHub
- Mengurangi ketergantungan pada memori chat lama

## File Utama

### CHATGPT_PROJECT_INSTRUCTIONS.md

File ini berisi instruksi yang dapat di-copy-paste ke bagian Add Instructions di ChatGPT Project.

Instruksi ini berlaku untuk keseluruhan project.

### ROOM_00_MANAGER_PROMPT.md

File ini berisi prompt awal untuk membuat Room Chat 00.

Room Chat 00 berperan sebagai manager utama project.

### ROOM_01_REVIEWER_PROMPT.md

File ini berisi prompt awal untuk membuat Room Chat 01.

Room Chat 01 berperan sebagai analyst dan reviewer.

## Alur Setup Akun atau Project Baru

Jika user pindah akun ChatGPT atau membuat ChatGPT Project baru, lakukan langkah berikut:

1. Buat ChatGPT Project baru.
2. Buka `docs/project-onboarding/CHATGPT_PROJECT_INSTRUCTIONS.md`.
3. Copy isi file tersebut ke bagian Add Instructions di ChatGPT Project.
4. Buat Room Chat 00.
5. Copy isi `docs/project-onboarding/ROOM_00_MANAGER_PROMPT.md` sebagai pesan awal Room Chat 00.
6. Buat Room Chat 01.
7. Copy isi `docs/project-onboarding/ROOM_01_REVIEWER_PROMPT.md` sebagai pesan awal Room Chat 01.
8. Baca `docs/project-history/CURRENT_STATUS.md` untuk mengetahui status terakhir project.
9. Lanjutkan pekerjaan berdasarkan batch terakhir dan arahan Room Chat 00.

## Urutan Dokumen yang Perlu Dibaca

Untuk memahami project dari awal, baca dokumen berikut:

1. `README.md`
2. `FEATURES.md`
3. `docs/README.md`
4. `docs/project-workflow/README.md`
5. `docs/project-workflow/PROJECT_CONTEXT.md`
6. `docs/project-workflow/WORKING_SYSTEM.md`
7. `docs/project-history/CURRENT_STATUS.md`
8. `docs/project-history/BATCH_000_TO_010.md`
9. `docs/project-onboarding/README.md`

## Prinsip Utama

GitHub adalah Source of Truth utama.

ChatGPT Project, room chat, Gemini, dan Antigravity Agent hanya menjadi alat bantu kerja. Konteks final project harus selalu merujuk ke repository GitHub.
