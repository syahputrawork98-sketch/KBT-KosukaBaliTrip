# Project Documentation

Folder ini berisi dokumentasi inti untuk manajemen project Kosuka Bali Trip.

Dokumentasi di folder ini digunakan untuk menjaga konteks, sistem kerja, riwayat batch, onboarding akun baru, dan aturan penggunaan model AI.

## Struktur Folder

```txt
docs/project/
├── README.md
├── workflow/
│   ├── README.md
│   ├── PROJECT_CONTEXT.md
│   ├── WORKING_SYSTEM.md
│   └── MODEL_USAGE_GUIDE.md
├── history/
│   ├── README.md
│   ├── CURRENT_STATUS.md
│   ├── BATCH_TEMPLATE.md
│   └── BATCH_000_TO_010.md
└── onboarding/
    ├── README.md
    ├── CHATGPT_PROJECT_INSTRUCTIONS.md
    ├── ROOM_00_MANAGER_PROMPT.md
    └── ROOM_01_REVIEWER_PROMPT.md
```

### Folder workflow

Folder `workflow` berisi konteks project, sistem kerja, dan aturan penggunaan model.

Baca folder ini untuk memahami:
- Project ini apa
- Bagaimana sistem kerja project berjalan
- Peran user, Room Chat 00, Room Chat 01, Gemini, dan Antigravity Agent
- Kapan menggunakan Gemini 3.1 Pro Low
- Kapan menggunakan Gemini 3.1 Pro High
- Kapan boleh menggunakan model alternatif sebagai Acceleration Mode

### Folder history

Folder `history` berisi status terbaru project dan riwayat batch.

Baca folder ini untuk mengetahui:
- Batch terakhir yang selesai
- Batch yang sedang berjalan
- Commit hash terakhir
- Langkah berikutnya
- Riwayat pekerjaan Batch 000 sampai Batch 010

### Folder onboarding

Folder `onboarding` berisi instruksi copy-paste untuk setup ulang project.

Baca folder ini jika:
- User pindah akun ChatGPT
- User membuat ChatGPT Project baru
- User membuat Room Chat 00 baru
- User membuat Room Chat 01 baru

## Urutan Membaca

Untuk memahami project dari awal, baca dokumen dengan urutan berikut:

1. `README.md` di root repository
2. `FEATURES.md` di root repository
3. `docs/README.md`
4. `docs/project/README.md`
5. `docs/project/workflow/PROJECT_CONTEXT.md`
6. `docs/project/workflow/WORKING_SYSTEM.md`
7. `docs/project/workflow/MODEL_USAGE_GUIDE.md`
8. `docs/project/history/CURRENT_STATUS.md`
9. `docs/project/history/BATCH_000_TO_010.md`
10. `docs/project/onboarding/README.md`

## Prinsip Utama

GitHub adalah Source of Truth utama.

Dokumentasi ini dibuat agar project tetap bisa dilanjutkan walaupun akun ChatGPT, room chat, atau AI tools yang digunakan berubah.
