# Model Usage Guide

Dokumen ini menjelaskan aturan penggunaan model AI dalam docs/project/Kosuka Bali Trip.

Panduan ini digunakan oleh User, Room Chat 00, Room Chat 01, Gemini, dan Antigravity Agent agar pemilihan model tetap konsisten, efisien, dan sesuai risiko pekerjaan.

## Prinsip Utama

Model utama project ini adalah:

- Gemini 3.1 Pro Low
- Gemini 3.1 Pro High

Kedua model ini menjadi pilihan default untuk pekerjaan project Kosuka Bali Trip di Antigravity Agent.

Model lain boleh digunakan hanya sebagai model alternatif untuk percepatan, eksplorasi, atau kondisi tertentu, tetapi bukan default utama.

GitHub tetap menjadi Source of Truth utama.

Model apa pun yang digunakan tidak menjadi sumber kebenaran final. Status final project tetap ditentukan berdasarkan isi repository, commit hash, dan hasil review.

## Primary Models

### Gemini 3.1 Pro Low

Gemini 3.1 Pro Low digunakan untuk pekerjaan ringan, kecil, dan terarah.

Gunakan model ini untuk:
- Edit dokumentasi ringan
- Update file markdown sederhana
- Update project history
- Update current status
- Membuat file kecil dengan scope jelas
- Perubahan struktur kecil
- Perbaikan typo atau wording
- Pekerjaan yang instruksinya sangat spesifik dan risiko rendah

Jangan gunakan model ini sebagai pilihan utama untuk pekerjaan yang membutuhkan banyak konteks, refactor besar, atau perubahan banyak file yang saling berkaitan.

### Gemini 3.1 Pro High

Gemini 3.1 Pro High digunakan untuk pekerjaan yang lebih kompleks dan membutuhkan pemahaman konteks lebih dalam.

Gunakan model ini untuk:
- Membuat beberapa dokumen yang saling berkaitan
- Menyusun instruksi besar
- Perubahan struktur project
- Perencanaan teknis
- Refactor yang membutuhkan pertimbangan
- Pekerjaan dengan banyak file terkait
- Pekerjaan yang berisiko sedang atau tinggi
- Pekerjaan yang membutuhkan reasoning lebih kuat

Gemini 3.1 Pro High menjadi pilihan utama jika pekerjaan tidak bisa dikategorikan ringan.

## Alternative Acceleration Models

Selain dua model utama, user mungkin memiliki akses ke model lain di Antigravity Agent.

Contoh model alternatif:
- Gemini 3.1 Flash Medium
- Gemini 3.5 Flash High
- Gemini 3.5 Flash Low
- Claude Sonnet 4.6 Thinking
- Claude Opus 4.6 Thinking
- GPT OSS 120B Medium

Model alternatif boleh digunakan ketika user secara eksplisit ingin percepatan atau ingin memanfaatkan token yang tersedia.

Namun, model alternatif harus diperlakukan sebagai:

- Acceleration model
- Drafting helper
- Exploration helper
- Non-default executor

Model alternatif tidak boleh menggantikan sistem utama kecuali user menyetujui secara eksplisit.

## Acceleration Mode

Acceleration Mode adalah kondisi ketika user ingin pekerjaan dilakukan lebih cepat atau ingin memanfaatkan model/token tambahan.

Acceleration Mode boleh digunakan untuk:
- Draft awal dokumentasi
- Eksplorasi ide
- Alternatif struktur
- Pekerjaan non-final
- Pekerjaan berisiko rendah
- Pekerjaan yang tetap akan direview oleh Room Chat 01

Acceleration Mode tidak disarankan untuk:
- Perubahan struktur besar tanpa review
- Setup framework
- Refactor besar
- File penting yang menentukan arsitektur
- Perubahan yang sulit dibatalkan
- Pekerjaan yang belum jelas scope-nya

## Model Selection Rule

Gunakan aturan berikut saat memilih model:

### Gunakan Gemini 3.1 Pro Low jika:

- Scope kecil
- Risiko rendah
- File sedikit
- Instruksi sangat jelas
- Perubahan mudah dicek
- Tidak perlu banyak reasoning

### Gunakan Gemini 3.1 Pro High jika:

- Scope sedang atau besar
- Risiko sedang atau tinggi
- File saling berkaitan
- Perlu pemahaman konteks project
- Perlu reasoning lebih kuat
- Perubahan akan menjadi pondasi penting

### Gunakan model alternatif jika:

- User meminta percepatan
- User ingin memanfaatkan token yang tersedia
- Pekerjaan bersifat draft atau eksplorasi
- Hasilnya tetap akan dicek ulang
- Room Chat 00 menyetujui scope kerja
- Room Chat 01 tetap melakukan review setelah commit

## Role of Room Chat 00

Room Chat 00 bertugas menentukan model yang disarankan untuk eksekusi.

Saat membuat instruksi untuk Antigravity Agent atau Gemini, Room Chat 00 harus mempertimbangkan:
- Ukuran batch
- Jumlah file yang berubah
- Risiko perubahan
- Kebutuhan reasoning
- Kebutuhan kecepatan
- Apakah pekerjaan final atau draft

Room Chat 00 boleh merekomendasikan:
- Gemini 3.1 Pro Low
- Gemini 3.1 Pro High
- Alternative acceleration model

Namun keputusan akhir tetap ada pada user.

## Role of Room Chat 01

Room Chat 01 bertugas memberi analisa dan rekomendasi model jika user meminta percepatan atau jika Room Chat 00 membutuhkan pertimbangan teknis.

Room Chat 01 dapat menilai:
- Apakah pekerjaan cocok untuk Pro Low
- Apakah pekerjaan butuh Pro High
- Apakah aman memakai model alternatif
- Apakah pekerjaan perlu review lebih ketat
- Apakah perubahan terlalu berisiko untuk acceleration mode

Room Chat 01 tidak menentukan keputusan final. Room Chat 01 hanya memberi rekomendasi.

## Recording Model Usage

Jika model alternatif digunakan, catat di project history pada bagian Notes.

Format catatan:

```txt
Model used: <model name>
Mode: Normal / Acceleration
Reason: <alasan singkat>
```

Untuk Gemini 3.1 Pro Low dan Gemini 3.1 Pro High, pencatatan model tidak wajib, tetapi boleh dicatat jika batch dianggap penting.

## Safety Rule

Apa pun model yang digunakan:

- Jangan mengerjakan hal di luar instruksi
- Jangan membuat asumsi besar
- Jangan menghapus file tanpa instruksi eksplisit
- Jangan install dependency tanpa instruksi eksplisit
- Jangan setup framework tanpa keputusan Room Chat 00 dan user
- Jangan menganggap output model sebagai final sebelum dicek
- Gunakan GitHub dan commit hash sebagai acuan akhir
