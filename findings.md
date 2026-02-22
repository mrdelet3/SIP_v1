# findings.md — Research, Discoveries & Constraints

## ✅ Build Audit Results (2026-02-21)
- `npm run build` → **EXIT 0** (clean). No TypeScript errors, no lint errors.
- Output: `dist/index.html` (3.44 KB), `dist/assets/index.css` (27.28 KB), `dist/assets/index.js` (226.86 KB gzipped: 70 KB)
- Vite version: 6.4.1

## 🔍 Project Structure Findings

### Strengths
- ✅ Excellent SEO: full `<meta>` tags, Open Graph, LocalBusiness JSON-LD structured data, canonical URL
- ✅ WCAG skip-link in `App.tsx` (`#main-content`)
- ✅ ARIA labels on all interactive elements (nav, buttons, social links, map iframe)
- ✅ Semantic heading hierarchy (h1 → h2 → h3) consistent across sections
- ✅ Lazy loading on all gallery `<img>` tags
- ✅ Passive scroll listeners in Navbar (performance best practice)
- ✅ `rel="noopener noreferrer"` on all external links

### Issues / Cleanup Items
- ❌ **No `.gitignore`** — must be created before `git init`
- ❌ **No git repo** — `.git/` does not exist
- ⚠️ **Stray files in project root:** `SIB_A code.html`, `SIB_A.png`, `StoutLOGO_transpr_1K.png`, `Stout_NEWLOGO.jpeg`, `hero_A_end.jpeg`, `hero_A_start.jpeg`, `homepage_screenshot.png` — these are design artifacts/references, NOT source files. They should be excluded via `.gitignore` or moved.
- ⚠️ `netlify.toml` exists but needs verification it points to `dist/` correctly
- ⚠️ `vercel.json` exists (dual-config) — confirm deployment target

## 📁 File Inventory
| File | Keep? | Notes |
|------|-------|-------|
| `src/` | ✅ Yes | All source files |
| `public/` | ✅ Yes | logo.png, hero.jpg, favicons |
| `index.html` | ✅ Yes | Entry point with full SEO |
| `package.json` | ✅ Yes | |
| `vite.config.ts` | ✅ Yes | |
| `tailwind.config.ts` | ✅ Yes | |
| `tsconfig*.json` | ✅ Yes | |
| `netlify.toml` | ✅ Yes | Deployment config |
| `vercel.json` | ✅ Yes | Alternate deployment config |
| `postcss.config.js` | ✅ Yes | |
| `node_modules/` | ❌ .gitignore | Never commit |
| `dist/` | ❌ .gitignore | Auto-generated build output |
| `SIB_A code.html` | ⚠️ .gitignore | Design reference artifact |
| `SIB_A.png` | ⚠️ .gitignore | Design reference |
| `StoutLOGO_transpr_1K.png` | ⚠️ .gitignore | Source asset (duplicate) |
| `Stout_NEWLOGO.jpeg` | ⚠️ .gitignore | Source asset (duplicate) |
| `hero_A_end.jpeg` | ⚠️ .gitignore | Design reference |
| `hero_A_start.jpeg` | ⚠️ .gitignore | Design reference |
| `homepage_screenshot.png` | ⚠️ .gitignore | Design reference |
| `docs/` | ✅ Yes | Keep (may contain useful docs) |

## 🌐 External Dependencies (CDN)
- Google Fonts: Cinzel, Montserrat, Playfair Display (loaded in index.html)
- Google Maps Embed iframe (footer)
- Gallery images: Google Aida CDN + Unsplash (no local copies needed)
- OpenTable reservation links (external)
