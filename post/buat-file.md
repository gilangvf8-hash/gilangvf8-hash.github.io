---
layout: post
title: "Cara Membuat File di Github"
description: "membuat file di github"
keywords: "Github, blog, artikel"
date: 2026-07-20
---

# Cara Membuat File di GitHub

GitHub adalah platform hosting kode berbasis Git yang paling banyak digunakan oleh developer di seluruh dunia. Salah satu aktivitas paling dasar yang perlu dikuasai saat menggunakan GitHub adalah membuat file baru, baik langsung melalui browser maupun melalui terminal (Git). Artikel ini akan membahas kedua cara tersebut secara lengkap.

## 1. Membuat File Langsung di Website GitHub

Cara ini paling mudah untuk pemula karena tidak memerlukan instalasi Git di komputer.

### Langkah-langkah:

1. **Login ke akun GitHub** Anda di [github.com](https://github.com).
2. Masuk ke repository yang ingin Anda tambahkan file, atau buat repository baru dengan mengklik tombol **New** di halaman utama.
3. Setelah berada di dalam repository, klik tombol **Add file** di pojok kanan atas, lalu pilih **Create new file**.
4. Beri nama file pada kolom yang tersedia, misalnya `README.md`, `index.html`, atau `script.py`. Anda juga bisa membuat file di dalam folder tertentu dengan menuliskan path lengkapnya, misalnya `src/index.js` — GitHub akan otomatis membuat folder `src` jika belum ada.
5. Tulis isi file pada kotak editor yang muncul di bawahnya.
6. Gulir ke bawah hingga menemukan bagian **Commit changes**. Isi pesan commit yang menjelaskan perubahan Anda (misalnya "Menambahkan file konfigurasi").
7. Pilih apakah ingin melakukan commit langsung ke branch utama (`main`) atau membuat branch baru lalu mengajukan pull request.
8. Klik **Commit changes** untuk menyimpan file tersebut ke repository.

## 2. Membuat File Melalui Git di Terminal

Cara ini lebih cocok bagi developer yang bekerja secara lokal dan ingin mengelola banyak file sekaligus sebelum mengunggahnya ke GitHub.

### Langkah-langkah:

1. Pastikan Git sudah terinstal di komputer Anda. Cek dengan perintah:
   ```bash
   git --version
   ```
2. Clone repository yang sudah ada (jika belum punya salinan lokal):
   ```bash
   git clone https://github.com/username/nama-repo.git
   cd nama-repo
   ```
3. Buat file baru menggunakan perintah terminal, misalnya:
   ```bash
   touch nama-file.txt
   ```
   Atau di Windows (Command Prompt):
   ```bash
   type nul > nama-file.txt
   ```
4. Tambahkan isi ke dalam file menggunakan text editor pilihan Anda (VS Code, Nano, Vim, dll):
   ```bash
   code nama-file.txt
   ```
5. Setelah file diisi dan disimpan, tambahkan file tersebut ke staging area:
   ```bash
   git add nama-file.txt
   ```
6. Buat commit untuk mencatat perubahan:
   ```bash
   git commit -m "Menambahkan file nama-file.txt"
   ```
7. Unggah (push) perubahan ke GitHub:
   ```bash
   git push origin main
   ```

## 3. Membuat File Baru untuk Repository yang Belum Ada

Jika Anda ingin memulai dari nol tanpa repository sebelumnya:

1. Buat folder baru di komputer, lalu masuk ke dalamnya:
   ```bash
   mkdir proyek-baru
   cd proyek-baru
   ```
2. Inisialisasi Git:
   ```bash
   git init
   ```
3. Buat file pertama, misalnya `README.md`:
   ```bash
   echo "# Proyek Baru" > README.md
   ```
4. Tambahkan, commit, lalu hubungkan ke repository GitHub yang sudah dibuat sebelumnya di website:
   ```bash
   git add README.md
   git commit -m "Commit awal"
   git branch -M main
   git remote add origin https://github.com/username/proyek-baru.git
   git push -u origin main
   ```

## Tips Tambahan

- **Gunakan `.gitignore`** untuk mencegah file yang tidak perlu (seperti `node_modules/` atau file konfigurasi lokal) ikut terunggah ke repository.
- **Beri nama file yang deskriptif** agar mudah dikenali oleh kolaborator lain.
- **Tulis pesan commit yang jelas** setiap kali menambahkan file baru, karena ini membantu melacak riwayat perubahan proyek.
- Untuk proyek tim, sebaiknya buat file melalui **branch terpisah** dan ajukan **pull request** agar bisa direview sebelum digabung ke branch utama.

## Kesimpulan

Membuat file di GitHub bisa dilakukan dengan dua pendekatan utama: langsung melalui antarmuka web untuk kemudahan cepat, atau melalui Git di terminal untuk kontrol yang lebih fleksibel dan cocok untuk alur kerja pengembangan yang lebih kompleks. Menguasai kedua cara ini adalah fondasi penting sebelum melangkah ke fitur-fitur GitHub yang lebih lanjut, seperti branching, pull request, dan kolaborasi tim.
