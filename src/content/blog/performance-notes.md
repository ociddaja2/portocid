---
title: Catatan Performance Portfolio
description: Checklist singkat agar Lighthouse mendekati 100.
pubDate: 2026-04-08
tags: [performance, seo]
---

Checklist yang aku pakai untuk web portfolio minimalis:

- **SSG** + HTML minify
- **Gambar**: gunakan `astro:assets` dan lazy load
- **Font**: preload + `display=swap`
- **JS**: hanya untuk kebutuhan (mis. toggle tema)

