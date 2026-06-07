# Batch F03 — Casual Luxury Visual Refactor

## Feature Summary
Melakukan refactor visual awal pada landing page KBT berdasarkan feedback user menuju arah "Casual Luxury". Fokus tahap ini adalah pada Hero Section dan Card Packages sebagai proof of concept.

## Status
In Progress / Proof of concept

## Story
Berdasarkan ulasan atas hasil fondasi visual F02, skema warna yang digunakan sebelumnya dirasa terlalu berat/vintage dan struktur antarmukanya dirasa kaku seperti panel admin. Karena target pasar utamanya adalah wisatawan Australia dan Eropa, KBT membutuhkan arah visual yang lebih elegan, modern, luas (*spacious*), bersih, namun tetap terkesan mewah tapi kasual (*casual luxury*). Perbaikan pada batch ini menggeser *tone* desain agar lebih premium namun *approachable*, layaknya liburan santai yang terkurasi.

## Current State
- `globals.css` telah diubah dengan palet yang lebih terang (*muted sage*, *soft background*, *sand/terracotta accent*).
- `HeroSection` telah diubah menjadi layar penuh (*min-height 90vh*) dengan efek *overlay* dan *floating info bar*.
- `TourPackagesPreview` telah disesuaikan agar bergaya kartu sudut membulat (*rounded-3xl*) dengan bayangan transparan tipis (*soft floating shadow*).
- Komponen *Button* telah disegarkan menggunakan gaya kapsul (*rounded-full*).

## Sub-Batch Roadmap
- F03.0 — Completed (Proof of concept on Hero & Tour Cards)
- F03.1 — Planned / Pending Review

## HOLD / Blocked Notes
- Full multilingual/i18n (do not install i18n packages).
- Backend, Database, CMS, Auth, Payment, Deployment.
- Booking engine & real-time vehicle availability.

## Next Step
Menunggu ulasan (*user review*) atas eksperimen bukti konsep (*proof of concept*) dari Hero Section dan Tour Package Card.

## Validation Checklist
- [x] Refactor *Hero Section* dengan tata ruang visual penuh dan *overlay*.
- [x] Menambahkan *floating info bar* pada *Hero*.
- [x] Penyesuaian bentuk *Tour Package Card* dengan struktur hierarki baru.
- [x] Pembaruan skema warna pada `globals.css` menjauhi gaya *vintage* berat.
- [x] Penggunaan *soft dropshadows* dan *rounded corners* di *Card* & *Button*.
- [x] npm run lint succeeded
- [x] npm run build succeeded
- [x] Tidak ada instalasi dependensi atau pembuatan fitur non-UI (HOLD).

## Notes
Pendekatan proof of concept memastikan pergeseran gaya visual telah disetujui tanpa harus merombak seluruh halaman sekaligus.
