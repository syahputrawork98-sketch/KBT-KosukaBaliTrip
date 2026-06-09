# Batch F08 — Contact Channel & Inquiry Flow

## Feature Summary
Membuat jalur kontak bagi wisatawan internasional menjadi lebih jelas dan mudah diakses. Mengintegrasikan email resmi KBT dan nomor WhatsApp dummy untuk keperluan pengembangan dengan penandaan placeholder yang jelas. Menghapus seluruh tautan kontak dummy (`#`) di seluruh halaman website dan merapikan panduan detail persiapan inquiry.

## Status
Completed / Ready for validation

## Story
Agar memudahkan komunikasi bagi calon tamu internasional, KBT memerlukan jalur komunikasi langsung yang berfungsi secara terarah. Untuk itu, data email resmi (`kosukabalitrip@gmail.com`) dan nomor WhatsApp dummy (`+62 812 3456 7890`) dipasang menggunakan struktur konfigurasi terpusat agar memudahkan penggantian data resmi sebelum naik ke produksi. Seluruh tombol CTA diubah agar merujuk ke link WhatsApp eksternal (dengan target `_blank`), tautan `mailto` dengan pre-filled template subjek dan body chat, atau link internal `/contact`.

## Current State
- **Contact Constants (`client/src/lib/contact.ts`)**: File konfigurasi terpusat untuk data kontak email dan WhatsApp KBT.
- **WhatsAppButton (`client/src/components/ui/WhatsAppButton.tsx`)**: Komponen tombol WhatsApp dinamis dengan deteksi otomatis tautan eksternal (wa.me) dan parameter proteksi keamanan (`target="_blank"`, `rel="noopener noreferrer"`).
- **Contact Page (`/contact` / [contact/page.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/app/contact/page.tsx))**:
  - Grid dua kolom "Contact Channels": WhatsApp (dengan tombol chat & label placeholder dev) dan Email (dengan tombol kirim email pre-filled).
  - Panduan checklist "Details to Prepare" yang rapi beserta paragraf imbauan informatif.
- **Contact CTA Block ([ContactCTA.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/sections/ContactCTA.tsx))**: Menyediakan 3 tombol aksi: Chat di WhatsApp, Kirim Email, dan Detail Petunjuk Inquiry.
- **Footer ([Footer.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/sections/Footer.tsx))**: Menampilkan tautan aktif email resmi dan WhatsApp dummy, serta menyajikan link Privacy Policy & Terms of Service sebagai teks statis "(Coming Soon)" yang tidak dapat diklik (untuk mencegah error 404).

## Files Touched
- [contact.ts](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/lib/contact.ts) [NEW]
- [WhatsAppButton.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/ui/WhatsAppButton.tsx) [MODIFY]
- [contact/page.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/app/contact/page.tsx) [MODIFY]
- [ContactCTA.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/sections/ContactCTA.tsx) [MODIFY]
- [Footer.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/sections/Footer.tsx) [MODIFY]

## Hold / Blocked Items
- Nomor WhatsApp resmi final (menunggu info dari user).
- Form kontak backend dengan database.
- API pengiriman email internal (seperti SendGrid/Resend).
- Otomatisasi WhatsApp API/chatbot.
- Sistem booking & payment gateway.
