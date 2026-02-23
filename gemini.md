# gemini.md — Project Constitution
> **This file is law.** Update only when: a schema changes, a rule is added, or architecture is modified.

---

## 🏗️ Project Identity
- **Project:** Stout Irish Pub — One-Page Scroller Website
- **Stack:** Vite 6 · React 19 · TypeScript 5.6 · Tailwind CSS 3.4 · lucide-react
- **Primary Domain:** https://stoutirishpub.ca/
- **Location:** 221 Carlton Street, Toronto, ON M5A 2L2

---

## 📐 Data Schema

### Site Configuration (static — in-source)
```json
{
  "brand": {
    "name": "Stout Irish Pub",
    "phone": "+16473447676",
    "email": "info@stoutirishpub.ca",
    "address": "221 Carlton St, Toronto ON M5A 2L2",
    "instagram": "https://www.instagram.com/stoutirishpubto/",
    "opentable": "https://www.opentable.com/r/stout-irish-pub-toronto"
  },
  "hours": {
    "mon_thu": "11:30 AM – 11:00 PM",
    "fri_sat": "11:30 AM – 12:00 AM",
    "sun": "11:00 AM – 9:00 PM"
  },
  "happyHour": {
    "schedule": "Everyday 9:00 PM – 11:00 PM",
    "items": ["$7 Beers & Highballs", "$6 Shots", "$10 Martinis"]
  }
}
```

### Retail Items Schema
```json
[
  { "name": "string", "price": "string (e.g. '$12')", "sub": "string | undefined" }
]
```

### Event Schema
```json
[{ "name": "string", "schedule": "string" }]
```

---

## 🎨 Design Tokens
| Token     | Value       | Usage                        |
|-----------|-------------|------------------------------|
| primary   | `#141414`   | Page background              |
| secondary | `#1c1c1c`   | Section alternate background |
| gold      | `#C5A059`   | Brand accent / CTAs          |
| Font (display) | Cinzel | Headings                    |
| Font (serif)   | Playfair Display | Captions / italic body |
| Font (sans)    | Montserrat | Body / nav                  |

---

## 📜 Architectural Invariants (Do Not Violate)
1. **No `.env` secrets committed.** `.env` must always be in `.gitignore`.
2. **`node_modules/` and `dist/` are never committed.** Always in `.gitignore`.
3. **Image assets in `public/`** — only `logo.png`, `hero.jpg`, `favicon.png`, `apple-icon.png` are local. All gallery images are hosted via Google/Unsplash CDN (no binary assets committed).
4. **Build command:** `npm run build` must exit 0 before any push.
5. **Deployment target:** GitHub → auto-deploy via Netlify (connected to GitHub repo push).
6. **`vite.config.ts` base** — no `/reponame` base needed (custom domain via Netlify).

---

## 🛠️ Behavioral Rules
- Do not hardcode environment secrets in any `.tsx` or `.ts` file.
- Do not commit `dist/`, `node_modules/`, `.tmp/`, or `.env`.
- Preserve all existing SEO meta tags, structured data, and `canonical` URL in `index.html`.
- Keep one-page scroller architecture — do not add routing libs (React Router etc.) unless explicitly approved.
- Maintain `scroll-snap-type: y mandatory` on `html` element.

---

## 🔧 Maintenance Log
| Date       | Change                              | Author    |
|------------|-------------------------------------|-----------|
| 2026-02-21 | Initial B.L.A.S.T. constitution created | System Pilot |
| 2026-02-21 | Git repo initialized, pushed to GitHub | System Pilot |
