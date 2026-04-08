# Minimal Portfolio (Astro + Tailwind)

Website portfolio pribadi yang **simple & minimalis**, built dengan Astro (SSG, zero‑JS by default) + Tailwind CSS.

## ✨ Fitur

- **Layout clean**: header fixed + nav (Home, About, Projects, Blog, Contact)
- **Pages**: `/`, `/about`, `/projects`, `/blog`, `/blog/[slug]`, `/contact`
- **Blog Markdown**: via Astro Content Collections (`src/content/blog/`)
- **Projects data**: via Content Collections (`src/content/projects/`)
- **SEO**: meta tags, canonical, Open Graph, `sitemap.xml`, `rss.xml`
- **Dark mode**: toggle kecil (inline script), tanpa framework JS
- **Images**: via `astro:assets` (`<Image />`) + `sharp`

## 📦 Project Structure

```text
src/
  assets/
    profile.svg
    projects/
      project-1.svg
      project-2.svg
  components/
    Footer.astro
    Header.astro
    ProjectCard.astro
  content/
    blog/
      hello-world.md
      performance-notes.md
    projects/
      minimal-portfolio.md
      project-notes.md
    config.ts
  layouts/
    Layout.astro
  pages/
    blog/
      [slug].astro
      index.astro
    about.astro
    contact.astro
    projects.astro
    index.astro
    rss.xml.ts
```

## 🧞 Commands

```bash
npm install
npm run dev
```

- `npm run dev`: dev server `http://localhost:4321`
- `npm run build`: build ke `dist/`
- `npm run preview`: preview build
- `npm run check`: typecheck Astro

## 🌐 Deploy (Vercel / Netlify)

- **Build command**: `npm run build`
- **Output directory**: `dist`
- (Opsional) set env **`SITE`** ke domain kamu (contoh: `https://yourdomain.com`) untuk sitemap/RSS URL yang benar.

