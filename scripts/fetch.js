// scripts/fetch.js
import fetch from "node-fetch";
import { JSDOM } from "jsdom";
import fs from "fs";

const TARGET = "https://gilangvf.com.free/";
const OUTPUT = "posts.json";

(async () => {
  try {
    console.log(`🔍 Mengambil artikel dari ${TARGET} ...`);
    const res = await fetch(TARGET);
if (!res.ok) throw new Error(`HTTP ${res.status}`);
const html = await res.text();

    const dom = new JSDOM(html);
    const doc = dom.window.document;

    // cari semua <a> yang mengandung /update/ (pola khas di situs kamu)
    const anchors = Array.from(doc.querySelectorAll("a"));
    const posts = [];
    const seen = new Set();

    for (const a of anchors) {
      const href = a.href || "";
      if (href.includes("/update/")) {
        if (seen.has(href)) continue;
        seen.add(href);
        posts.push({
          title: (a.textContent || "").trim() || "Tanpa Judul",
          link: href.startsWith("http") ? href : TARGET + href.replace(/^\//, "")
        });
      }
      if (posts.length >= 10) break; // ambil max 10 artikel
    }

    if (posts.length === 0) {
      console.warn("⚠️ Tidak ada artikel ditemukan. Cek struktur HTML situs.");
    }

    fs.writeFileSync(OUTPUT, JSON.stringify(posts, null, 2));
    console.log(`✅ Berhasil menyimpan ${posts.length} artikel ke ${OUTPUT}`);
  } catch (err) {
    console.error("❌ Gagal mengambil artikel:", err);
    process.exit(1);
  }
})();
