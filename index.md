---
layout: default
title: "gilangvf8-hash / Keruntuhan Hizbut Tahrir"
description: "Dokumentasi tentang keruntuhan Hizbut Tahrir"
keywords: "GitHub, Web, Situs, Blog"
---


## Daftar Posting
<div class="file-list" id="postContainer">
  {% for post in site.posts %}
    <div class="file post-item">
      📄 <span><a href="{{ post.url | relative_url }}">{{ post.title }}</a></span>
    </div>
  {% endfor %}
  <div class="file">
        📄 <span><a href="https://gilangvf8-hash.io/post/post4.html">Kenapa Anggota Hizbut Tahrir Bisa Merasa Tersinggung Ketika Mendengar Kata Munafik</a></span>
      </div>
      <div class="file">
        📄 <span><a href="https://gilangvf8-hash.github.io/post/post3.html">Kenapa Anggota Hizbut Tahrir Munafik</a></span>
      </div><div class="file">
        📄 <span><a href="https://gilangvf8-hash.github.io/post/post1.html">Kenapa Anggota Hizbut Tahrir Sering Gelisah</a></span>
      </div>
      <div class="file">
        📄 <span><a href="https://gilangvf8-hash.github.io/post/post2.html">Kenapa Xtgem Tidak Bisa Muncul di Google</a></span>
      </div>
</div>

<!-- Area untuk navigasi halaman -->
<div id="pagination" style="margin-top:15px;"></div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 5;
    const items = Array.from(document.querySelectorAll(".post-item"));
    const pagination = document.getElementById("pagination");
    const totalPages = Math.ceil(items.length / itemsPerPage);

    function showPage(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;

      items.forEach((item, index) => {
        item.style.display = (index >= start && index < end) ? "block" : "none";
      });

      renderPagination(page);
    }

    function renderPagination(currentPage) {
      pagination.innerHTML = "";

      // Tombol Previous
      if (currentPage > 1) {
        const prev = document.createElement("button");
        prev.textContent = "⬅️ Sebelumnya";
        prev.onclick = () => showPage(currentPage - 1);
        pagination.appendChild(prev);
      }

      // Info Halaman
      const info = document.createElement("span");
      info.style.margin = "0 10px";
      info.textContent = `Halaman ${currentPage} dari ${totalPages}`;
      pagination.appendChild(info);

      // Tombol Next
      if (currentPage < totalPages) {
        const next = document.createElement("button");
        next.textContent = "Berikutnya ➡️";
        next.onclick = () => showPage(currentPage + 1);
        pagination.appendChild(next);
      }
    }

    showPage(1); // Tampilkan halaman 1 saat pertama kali
  });
  </script>
