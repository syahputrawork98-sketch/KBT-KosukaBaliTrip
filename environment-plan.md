# Environment Variables Plan

Dokumen ini mengatur cara pengelolaan rahasia (secrets) di proyek Kosuka Bali Trip menggunakan *Environment Variables*.

## Status Saat Ini
- File `.env` maupun `.env.example` **belum dibuat** pada fase perencanaan ini.
- Setup environment yang sesungguhnya baru akan dibahas saat proyek masuk pada fase pengaturan Backend/API Server (Batch selanjutnya).

## Rencana Implementasi
1. **Isolasi .env**: Nanti akan dibuatkan file `.env` yang terpisah (Satu untuk `client/`, satu untuk `server/`).
2. **Keamanan Repository (Awas Secrets!)**: Variabel rahasia seperti credential database, API Keys, atau token auth **tidak boleh** sama sekali disimpan dan dikirim (push) ke GitHub.
3. **Template Tersedia**: Nanti akan ada file template `.env.example` yang diikutsertakan ke GitHub agar developer baru mengetahui daftar *keys* apa saja yang wajib disiapkan tanpa membocorkan nilai aslinya.