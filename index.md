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

      <h1>Artikel Terbaru dari gilangvf.com.free</h1>
  <div id="posts" class="posts">Memuat…</div>
  <footer>Otomatis diupdate via GitHub Actions • <a href="https://gilangvf.com.free/" target="_blank">Sumber Asli</a></footer>

<script>
(async()=>{
  const el = document.getElementById("posts");
  try {
    const res = await fetch("posts.json");
    const posts = await res.json();
    if(!posts.length) { el.textContent = "Belum ada artikel."; return; }

    el.innerHTML = "";
    posts.forEach(p=>{
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<a href="${p.link}" target="_blank">${p.title}</a>`;
      el.appendChild(div);
    });
  } catch(e){
    el.textContent = "Gagal memuat posts.json";
  }
})();
</script>
