# Project Structure Plan

Menjaga **root folder** repositori ini tetap bersih adalah prioritas. Oleh karena itu, diterapkan larangan keras dalam meletakkan file dan folder sembarangan di luar batas yang ditentukan.

## Struktur Root Final
Di level tertinggi (root direktori), repositori **hanya boleh** memiliki item berikut:
- `README.md`
- `FEATURES.md`
- `client/`
- `server/`
- `docs/`

## Penjelasan & Batasan
- Segala *package.json*, file dependensi, *linter*, *formatter*, dan konfigurasi TypeScript khusus frontend **wajib** dikurung sepenuhnya di dalam folder `client/`.
- Segala file framework, API server, struktur logika bisnis, dan koneksi *database* backend **wajib** dikurung sepenuhnya di dalam folder `server/`.
- File atau folder lain harus sangat dihindari berada di root kecuali disyaratkan secara fundamental (misal `.gitignore` untuk root monorepo).

Dengan penerapan isolasi ini, setiap tim (Frontend maupun Backend) dapat bekerja secara paralel dan bersih tanpa bentrok modul dependency.