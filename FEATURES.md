# Features

Dokumen ini berisi daftar fitur sistem workflow yang digunakan dalam WPWK.

- **Source of Truth System**: GitHub sebagai satu-satunya kebenaran mutlak.
- **Roomchat Role System**: Pemisahan tugas antara Manager (Room 00), Reviewer (Room 01), dan Eksekutor (Gemini Anti-Gravity).
- **Batch Gate System**: Mekanisme validasi sebelum eksekusi dimulai (Pre-Batch Mode vs Batch Execution).
- **Feature Batch Tracker**: Pelacakan fitur menggunakan kode FXX (misal: F00, F01).
- **Executor Report System**: Standar pelaporan eksekusi dari Gemini ke User.
- **Review Checklist System**: Standar audit hasil eksekusi oleh Room 01.
- **Documentation Checkpoint System**: Pos pemeriksaan (FXX-CP) untuk memastikan sinkronisasi dokumentasi dan kode.
- **Technical Area Documentation System**: Aturan pencatatan area frontend, backend, dan database.
- **Frontend Role Documentation Rule**: Standar penulisan arsitektur UI dan akses halaman.
- **Backend Role and Permission Documentation Rule**: Standar penulisan API endpoint dan middleware.
- **Database Access and Ownership Documentation Rule**: Standar penulisan skema relasi dan kepemilikan data.
- **Single Role / Multi Role Project Recording Rule**: Aturan pembedaan dokumentasi antara project dengan satu atau banyak role.
- **Project Type Rule System**: Standar jenis project turunan.
- **Documentation Depth Rule**: Aturan kedalaman dokumentasi sesuai kompleksitas project.
- **Template Adaptation Rule**: Panduan menyesuaikan template untuk project nyata.
- **README Adaptation Rule**: Standar penulisan ulang README untuk project turunan.
- **FEATURES Adaptation Rule**: Standar penulisan ulang FEATURES untuk project turunan.
- **Documentation Debt / Docs Later Rule**: Mekanisme penundaan pembaruan dokumen melalui checkpoint.
- **Workflow Scenario Playbook**: Kumpulan skenario penggunaan workflow.
- **Specialist Analysis Room Workflow**: Alur kerja penggunaan spesialis eksternal.
- **Project Starter Checklist**: Checklist persiapan saat memulai project nyata.
- **Project Starter Checklist**: Checklist persiapan saat memulai project nyata.
- **Roomchat 00 Acceptance Template**: Standar validasi hasil eksekusi oleh Manager Room 00.
- **Specialist Analysis Template**: Standar ringkasan saran dari spesialis ruang eksternal.
- **Existing Project Documentation Adoption**: Panduan penerapan WPWK ke project berjalan.
- **Existing Feature Inventory**: Sistem pendataan fitur project yang sudah ada.
- **Existing Project Audit Summary**: Standar audit awal untuk project berjalan.
- **History Layer Separation**: Pemisahan layer history dari workflow/control layer.
- **Removable Workflow Control Layer**: Folder docs/project/ yang dapat dilepas untuk project turunan.
- **Persistent Project Memory Layer**: Folder docs/history/ sebagai penyimpan status dan riwayat permanen.
- **Public / Client-Safe History Mode**: Gaya bahasa netral untuk repo publik atau client-facing.
