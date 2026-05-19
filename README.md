# Luma House

A clickable prototype web app for a values-driven creator platform for women — monetize knowledge, lifestyle, mentorship, and community.

> **Working tagline:** Monetize your value, not your body.

This is a **static HTML/CSS/JS prototype** built with Bootstrap 5 — no build step required. It's intended to be presented to investors, developer partners, and early creator collaborators.

---

## Pages

| Route | Description |
| --- | --- |
| `/` (`index.html`) | Premium editorial landing page |
| `/explore.html` | Public creator discovery with search + category filters |
| `/creator-profile.html` | Public creator profile (Sophia Lane) with tabs |
| `/dashboard.html` | Creator dashboard with stats, earnings chart, quick actions |
| `/create-post.html` | Creator content composer |
| `/products.html` | Digital products grid with filtering |
| `/subscribe.html` | Subscription checkout mockup |
| `/community.html` | Private members community feed |
| `/login.html` | Sign-in screen |
| `/signup.html` | Sign-up with Creator / Subscriber account-type selection |

---

## Tech

- **HTML5 / CSS3 / vanilla JS**
- **Bootstrap 5** via CDN
- **Bootstrap Icons** via CDN
- **Google Fonts** — Playfair Display, Inter, Manrope, Plus Jakarta Sans
- No build step, no Node dependencies

```
luma-house/
├── index.html
├── explore.html
├── creator-profile.html
├── dashboard.html
├── create-post.html
├── products.html
├── subscribe.html
├── community.html
├── login.html
├── signup.html
└── assets/
    ├── css/
    │   └── styles.css   # Global design system (~1200 lines, commented)
    └── js/
        └── main.js      # Tabs, filters, reveal-on-scroll, toast
```

---

## Design system

**Palette**

| Token | Hex | Usage |
| --- | --- | --- |
| Ivory | `#F8F4EF` | Background |
| Warm white | `#FFFDFC` | Surface |
| Charcoal | `#1F1B18` | Text |
| Muted rose | `#C89BA0` | Accent |
| Champagne | `#E9D8C5` | Soft accent |
| Soft taupe | `#B7A99A` | Tertiary |
| Deep plum | `#3A2636` | Primary CTA |
| Gold | `#C8A96A` | Highlight |

**Typography**

- Headings — Playfair Display
- Body — Inter
- Accent labels — Manrope

---

## Run locally

No dependencies. Open `index.html` directly in a browser, or use any static server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then open `http://localhost:8000`.

---

## Deploy

This is a fully static site — host it anywhere that serves static files.

### Render (Static Site)

The included `render.yaml` configures Render to serve this as a static site with no build step. After pushing to GitHub:

1. Go to [render.com](https://render.com) → New → Blueprint
2. Connect this repository
3. Render will detect `render.yaml` and deploy automatically

### Other hosts

- **Netlify / Vercel** — drag & drop the folder or connect the repo
- **GitHub Pages** — enable Pages on the `main` branch
- **Cloudflare Pages** — connect the repo, no build command needed

---

## Status

Prototype only. No backend, no real auth, no real payments. Forms display a confirmation toast and redirect to demonstrate the flow.

## License

© 2026 Ben Guerra / MESH. All rights reserved.
