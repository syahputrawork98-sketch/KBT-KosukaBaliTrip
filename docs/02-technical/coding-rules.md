# Coding Rules & Guidelines

Untuk menjaga kualitas repository agar tetap rapi, mudah dibaca, dan bebas error sepele, seluruh pengerjaan harus mengikuti panduan berikut:

1. **Wajib Menggunakan TypeScript**
   Manfaatkan *static typing* TypeScript di Frontend dan Backend untuk mencegah *runtime error* sedini mungkin.
2. **Penamaan File Konsisten**
   Gunakan format penamaan yang standar. Disarankan `kebab-case` untuk folder dan file umum, serta `PascalCase` untuk komponen UI.
3. **Hindari Over-Engineering**
   Tulis solusi paling tepat guna (sederhana) untuk menjawab kebutuhan fitur. Hindari menambahkan pola arsitektur atau library rumit yang belum dibutuhkan.
4. **Jangan Refactor Skala Besar Tanpa Instruksi**
   Perubahan struktur direktori global, perubahan framework, atau refaktor masif hanya boleh dilakukan bila ada arahan tertulis pada dokumen batch planner.
5. **Komponen/Fungsi Mudah Dibaca**
   Batasi *Single Responsibility* pada suatu fungsi atau komponen. Pisahkan menjadi modul-modul kecil agar mudah digunakan berulang (reusable).
6. **Komentar Seperlunya**
   Dokumentasikan hanya hal-hal kompleks (menjelaskan "Mengapa" suatu pendekatan digunakan). Kode yang terstruktur dengan baik (Self-documenting code) biasanya tidak memerlukan baris komentar yang berlebihan.
