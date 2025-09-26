---
layout: default
title: "gilangvf8-hash / Keruntuhan Hizbut Tahrir"
description: "Dokumentasi tentang keruntuhan Hizbut Tahrir"
---


## Daftar Posting
<div class="file-list">
  {% for post in site.posts %}
    <div class="file">
      📄 <span><a href="{{ post.url | relative_url }}">{{ post.title }}</a></span>
    </div>
  {% endfor %}
  <div class="file">
        📄 <span><a href="https://gilangvf8-hash.github.io/post/post4.html">Kenapa Anggota Hizbut Tahrir Bisa Merasa Tersinggung Ketika Mendengar Kata Munafik</a></span>
      </div>
      <div class="file">
        📄 <span><a href="https://gilangvf8-hash.github.io/post/post3.html">Kenapa Anggota Hizbut Tahrir Munafik</a></span>
      </div>
      <div class="file">
        📄 <span><a href="https://gilangvf8-hash.github.io/post/post1.html">Kenapa Anggota Hizbut Tahrir Sering Gelisah</a></span>
      </div>
      <div class="file">
        📄 <span><a href="https://gilangvf8-hash.github.io/post/post2.html">Kenapa Xtgem Tidak Bisa Muncul di Google</a></span>
      </div>
</div>

    
    ## Artikel terbaru dari Medium
  
  <div class="container">
    <div class="repo-info">
  <main>
    <section id="posts">Memuat postingan...</section>
  </main>
</div>
  </div>
  

  <script>
    async function loadMedium() {
      const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gilangvf8";
      try {
        const res = await fetch(url);
        const data = await res.json();

        let html = "";
        data.items.slice(0, 6).forEach(item => {
          html += `
            <article class="post">
              <h2><a href="post.html?id=${encodeURIComponent(item.link)}">${item.title}</a></h2>
              <p class="date">${new Date(item.pubDate).toLocaleDateString("id-ID")}</p>
              <p>${item.description.replace(/<[^>]*>/g, '').substring(0, 180)}...</p>
              <a class="read-more" href="post.html?id=${encodeURIComponent(item.link)}">Baca selengkapnya →</a>
            </article>
          `;
        });
        document.getElementById("posts").innerHTML = html;
      } catch (err) {
        document.getElementById("posts").innerHTML = "Gagal memuat postingan.";
      }
    }
    loadMedium();
  </script>
