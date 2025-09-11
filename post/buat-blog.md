Berikut langkah-langkah membuat folder **post** untuk blog di GitHub (misalnya menggunakan GitHub Pages dengan Jekyll):

### 1. Buka Repositori Blog
Misal: [gilangvf8-hash/gilangvf8-hash.github.io](https://github.com/gilangvf8-hash/gilangvf8-hash.github.io)

### 2. Buat Folder Baru
1. Klik tombol **Add file** > **Create new file**.
2. Di kotak nama file, ketik `post/.keep` (atau `posts/.keep`, sesuai kebutuhan).  
   Dengan menambahkan file `.keep`, GitHub akan membuat folder tersebut.

### 3. Simpan Perubahan
1. Tambahkan pesan commit misal “add post folder”.
2. Klik **Commit new file**.

### 4. (Opsional) Menambahkan Postingan
- Untuk blog Jekyll, biasanya folder untuk postingan adalah `_posts`.
- Jika kamu ingin membuat folder khusus (misal `post`), pastikan konfigurasi blog kamu mengarah ke folder tersebut.

**Menambah postingan:**
1. Tambahkan file Markdown baru di folder `post` atau `_posts`.
2. Format nama file: `YYYY-MM-DD-judul-post.md`
3. Isi postingan menggunakan format front matter Jekyll:

```markdown
---
title: Judul Postingan
date: 2025-09-11
---
Isi konten di sini.
```

---

Kalau ada kebutuhan khusus (misal blog framework tertentu atau ingin folder dengan nama spesifik), silakan sebutkan, saya bisa berikan instruksi detail!
