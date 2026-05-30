# Model Usage Guide

Dokumen ini menjelaskan aturan penggunaan model AI dalam docs/project/Kosuka Bali Trip.

Panduan ini digunakan oleh User, Room Chat 00, Room Chat 01, Gemini, dan Antigravity Agent agar pemilihan model tetap konsisten, efisien, dan sesuai risiko pekerjaan.

## Prinsip Utama

Model utama project ini adalah:
- Gemini 3.1 Pro Low
- Gemini 3.1 Pro High

Kedua model ini menjadi pilihan default untuk pekerjaan project Kosuka Bali Trip di Antigravity Agent.
Model lain (Alternative acceleration model) boleh digunakan hanya jika user meminta. Model alternatif tidak boleh menggantikan default tanpa persetujuan user.
Penggunaan model alternatif wajib dicatat jika dipakai.

## Primary Models

### Gemini 3.1 Pro Low
Digunakan untuk **Small Batch**, risiko rendah, perubahan 1 sampai 3 file.

Gunakan model ini untuk:
- Edit dokumentasi ringan
- Update project history atau status
- Membuat/mengubah 1-3 file dengan scope jelas
- Perbaikan typo atau wording
- Instruksi spesifik dan risiko rendah

### Gemini 3.1 Pro High
Digunakan untuk **Medium Batch**, perubahan beberapa file, reasoning lebih kuat, atau struktur penting.

Gunakan model ini untuk:
- Menyusun struktur yang lebih besar atau beberapa dokumen terkait
- Refactor yang membutuhkan pertimbangan
- Pekerjaan berisiko sedang atau tinggi
- Pekerjaan yang membutuhkan pemahaman konteks mendalam

*Catatan: **Large Batch** harus dipecah menjadi beberapa batch yang lebih kecil (Small atau Medium) jika memungkinkan, untuk meminimalisir risiko.*

## Alternative Acceleration Models

Contoh model alternatif:
- Gemini 3.1 Flash Medium
- Claude Sonnet 4.6 Thinking
- GPT OSS 120B Medium, dll.

Aturan penggunaan:
- **Hanya digunakan jika user meminta.**
- Tidak boleh menggantikan model default secara sepihak.
- Harus dicatat penggunaannya di bagian Notes pada file history.
- Tetap harus direview oleh Room Chat 01 setelah eksekusi.

## Role of Room Chat 00

Room Chat 00 bertugas menentukan model yang disarankan untuk eksekusi.
**Penting:** Room Chat 00 memberi rekomendasi model hanya saat membuat instruksi final (Batch Gate) untuk eksekusi, bukan saat Pre-Batch Mode.

Room Chat 00 menentukan ukuran batch (Small/Medium) dan merekomendasikan:
- Gemini 3.1 Pro Low (Small Batch)
- Gemini 3.1 Pro High (Medium Batch)

## Role of Room Chat 01

Room Chat 01 boleh memberi warning atau analisa risiko jika model yang dipakai/disarankan tidak sesuai dengan tingkat risiko pekerjaan.
Room Chat 01 tidak menentukan keputusan final, hanya memberikan peringatan dan review.

## Safety Rule

- Jangan mengerjakan hal di luar instruksi.
- Gunakan GitHub dan commit hash sebagai acuan akhir.
- Eksekutor tidak boleh melakukan commit dan push.
