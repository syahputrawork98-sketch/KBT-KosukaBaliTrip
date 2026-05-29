# Kosuka Bali Trip Documentation

Folder ini berisi dokumentasi utama untuk project Kosuka Bali Trip.

Dokumentasi digunakan agar project tetap rapi, mudah dipahami, dan bisa dilanjutkan walaupun akun, room chat, atau AI tools yang digunakan berubah.

## Struktur Dokumentasi

```txt
docs/
├── README.md
└── project/
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

### Alur Membaca Dokumentasi

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

### Folder project

Folder `project` berisi dokumentasi inti yang mengatur cara kerja project.

Isi utama:
- `workflow/` untuk konteks project, sistem kerja, dan aturan penggunaan model
- `history/` untuk status terbaru dan riwayat batch
- `onboarding/` untuk instruksi copy-paste saat pindah akun ChatGPT atau membuat room baru

Folder ini penting agar dokumentasi project tidak tercecer di level depan `docs/`.

## Prinsip Utama

GitHub adalah Source of Truth utama.

Semua konteks, status, dan riwayat kerja harus merujuk pada repository GitHub.
