# KBT — Kosuka Bali Trip

KBT — Kosuka Bali Trip adalah website travel & tour Bali yang dibuat dari nol (greenfield project).
Repository ini sebelumnya menggunakan template WPWK (Web Project Workflow Kit) sebagai fondasi workflow, namun saat ini sudah sepenuhnya diadaptasi menjadi repository project KBT.

> **PENTING**: Project ini **BUKAN** project migrasi, dan **BUKAN** existing project adoption. Ini adalah project baru yang dibangun dari awal. Bahasa utama yang akan digunakan adalah **TypeScript**.

## Project Info
- **Project Name:** KBT — Kosuka Bali Trip
- **Description:** Website travel & tour Bali
- **Status:** Preparation / Foundation
- **Project Type:** Greenfield TypeScript Web Project

## Struktur Repository

Repository ini menggunakan struktur dokumentasi terpusat di dalam folder `docs/` untuk mengelola workflow, riwayat, dan panduan.

- `docs/project/` - Dokumentasi utama project, onboarding, dan riwayat workflow.
- `docs/frontend/` - Dokumentasi khusus area frontend (akan diisi saat coding dimulai).
- `docs/backend/` - Dokumentasi khusus area backend/API (jika nanti dibutuhkan).
- `docs/database/` - Dokumentasi khusus area database (jika nanti dibutuhkan).
- `docs/deployment/` - Dokumentasi khusus area deployment (jika nanti dibutuhkan).
- `client/` - Folder untuk aplikasi frontend website (belum ada implementasi teknis).
- `server/` - Folder untuk aplikasi backend, API, atau server logic (belum ada implementasi teknis).

## Prinsip Utama

1. **GitHub sebagai Source of Truth**: Semua perubahan yang diakui hanya yang sudah masuk ke GitHub.
2. **Pemisahan Peran**:
   - **User**: Owner project, pengambil keputusan final, satu-satunya yang boleh commit/push.
   - **Roomchat 00**: Manager Utama di ChatGPT.com.
   - **Roomchat 01**: Reviewer / Auditor.
   - **Gemini Anti-Gravity**: Eksekutor teknis di Anti-Gravity IDE.
3. **Batch System**: Pengerjaan dibagi menjadi Feature Batch (FXX) dan Execution Batch.

## Next Step
- Menyelesaikan Batch F01 (KBT Project Foundation) untuk memastikan semua dokumentasi dan arah project clear.
- Setelah foundation disetujui, lanjut ke technical planning dan inisialisasi framework.

## Status Awal Project

Project KBT saat ini sedang dalam tahap inisialisasi project foundation (Batch F01). Detail status dapat dilihat di `docs/history/CURRENT_STATUS.md`.