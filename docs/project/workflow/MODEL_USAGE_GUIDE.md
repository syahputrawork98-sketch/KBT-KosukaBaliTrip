# Model Usage Guide

## Fungsi Dokumen
Menjelaskan standar pemilihan model AI untuk pengembangan KBT agar konsisten, efisien, aman, dan sesuai risiko pekerjaan.
Panduan ini digunakan oleh User, Room Chat 00, Room Chat 01, Gemini, dan Antigravity Agent.

## Prinsip Utama
- Prioritas pada model default.
- Keamanan dan presisi.
- Keputusan akhir tetap pada user.
- Model AI hanya memberi rekomendasi, bukan sumber kebenaran final.
- GitHub dan commit hash adalah acuan akhir.

## Primary Models
- **Gemini 3.1 Pro Low**
- **Gemini 3.1 Pro High**

Kedua model ini menjadi pilihan default untuk pekerjaan project Kosuka Bali Trip di Antigravity Agent.

## Model by Batch Size
- **Small Batch** → Gemini 3.1 Pro Low.
- **Medium Batch** → Gemini 3.1 Pro High.
- **Large Batch** → pecah menjadi beberapa batch kecil jika memungkinkan. Jika tidak bisa, gunakan Gemini 3.1 Pro High dan wajib review Room Chat 01.
- **Acceleration Mode** → hanya jika user meminta. Tetap perlu review jika scope sedang atau besar.

## Aturan Gemini 3.1 Pro Low
Gunakan model ini untuk:
- Edit dokumentasi ringan.
- Update README skala kecil.
- Update project history.
- Update current status.
- Perbaikan typo atau wording.
- Perubahan 1 sampai 3 file saja.
- Risiko rendah.

## Aturan Gemini 3.1 Pro High
Gunakan model ini untuk:
- Perubahan pada banyak file.
- Restrukturisasi dokumentasi.
- Migrasi file antar folder.
- Refactor kode.
- Perencanaan arsitektur teknis.
- Pekerjaan lintas komponen.
- Risiko sedang atau tinggi.
- Membutuhkan reasoning lebih kuat.

## Alternative Acceleration Models
- Hanya digunakan jika user eksplisit meminta percepatan atau menyebut model tertentu (misal: Gemini 3.1 Flash Medium, Claude Sonnet 4.6 Thinking, GPT OSS 120B Medium).
- Dipakai sebagai drafting helper, exploration helper, acceleration model, atau non-default executor.
- Tidak boleh menggantikan model default tanpa persetujuan user.
- Wajib dicatat jika digunakan.

## Role of Room Chat 00
- Selalu merekomendasikan Gemini 3.1 Pro Low atau Gemini 3.1 Pro High sebagai eksekutor default saat membuat instruksi final.
- Menyertakan rekomendasi model dalam instruksi final batch eksekusi.
- Jika user hanya meminta pendapat atau audit chat, jangan menyusun prompt eksekutor Gemini.
- Rekomendasi model wajib muncul hanya saat membuat instruksi final batch eksekusi.

## Role of Room Chat 01
- Memberi peringatan jika model yang dipilih terlalu rendah untuk risiko pekerjaan.
- Memberi rekomendasi model lebih kuat jika diperlukan.
- Tidak menentukan keputusan final, hanya memberikan peringatan dan review.

## Recording Model Usage
- Penggunaan Gemini 3.1 Pro Low/High tidak wajib dicatat, tapi boleh dicatat untuk batch krusial.
- Penggunaan Alternative Acceleration Models wajib dicatat di history dengan format:
```txt
Model used: <model name>
Mode: Normal / Acceleration
Reason: <alasan singkat>
```

## Safety Rule
- Jangan memaksa acceleration model.
- Jangan menjalankan eksekusi kritis dengan model alternatif tanpa validasi.
- Jangan commit.
- Jangan push.
- Commit dan push hanya oleh user.
