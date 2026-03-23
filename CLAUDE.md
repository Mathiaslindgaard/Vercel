# CLAUDE.md — Roni Ismail · Realtor Website

## Project Overview
Personal landing page for Roni Ismail, realtor at danbolig Åbyhøj · Brabrand · Aarhus Vest.
Two pages: `index.html` (landing page) and `about.html` (about page).

## File Structure
```
androni-realestate/
├── index.html       — Main landing page
├── about.html       — About page
├── style.css        — Shared base styles
├── about.css        — About page specific styles
├── main.js          — Shared JS (reveal animations, counters, form)
├── serve.mjs        — Dev server (copy from parent /websites/ folder if missing)
├── IMG_5658.jpg     — Portrait in suit (dark background) → hero photo
├── IMG_5659.jpg     — Snow selfie with danbolig sign → contact section / personal
├── IMG_5660.jpg     — Holding SOLGT sign → social proof section
└── IMG_5661.jpg     — danbolig marketing collage with headshot → about section
```

## Brand & Design System

**Colors (CSS custom properties defined in style.css)**
- `--bg: #ffffff`
- `--bg-surface: #f4f5f8`
- `--bg-card: #ffffff`
- `--border: #e4e4e4`
- `--text-primary: #232d3f`
- `--text-secondary: #525f7f`
- `--text-muted: #98a5b9`
- `--accent: #006664` (danbolig teal — primary brand color)
- `--accent-hover: #024042`
- `--accent-light: rgba(0, 102, 100, 0.08)`
- `--navy: #232d3f`

**Typography**
- Headings: `Poppins` (Google Fonts) — weights 400, 500, 600, 700
- Body: `Lora` (Google Fonts) — weights 400, 500, italic 400
- Both loaded via Google Fonts CDN in `<head>`

**Spacing**
- Section padding: `112px 0` desktop, `80px 0` mobile
- Container max-width: `1080px`, padding: `0 40px` (desktop), `0 20px` (mobile)

**Radius & Shadows**
- `--radius: 20px`, `--radius-sm: 12px`
- `--shadow-sm: 0 2px 8px rgba(35,45,63,0.06)`
- `--shadow-md: 0 8px 32px rgba(35,45,63,0.10)`
- `--shadow-lg: 0 20px 60px rgba(35,45,63,0.14)`

**Buttons**
- Primary: teal bg, white text, `border-radius: 100px` (pill)
- Ghost: transparent, navy border, pill
- All buttons: hover with `translateY(-2px)` lift

## Tone & Copy
- Danish language throughout
- Tone: confident, warm, grounded — not corporate
- Headlines: short and punchy (e.g. "Din bolig. Gjort rigtigt.")
- Body: honest, personal — first person ("Jeg...")

## Nav
- Logo: "Roni Ismail" (links to index.html)
- Nav link: "Om mig" (links to about.html)
- CTA button: "Skriv til mig" (links to #kontakt / index.html#kontakt)
- On index.html: nav starts transparent, gets glass blur on scroll
- On about.html: nav starts with `.scrolled` class (always visible)

## Contact Info
- Phone: 86 15 68 11 (`tel:+4586156811`)
- Instagram: @theoneandroni (`https://www.instagram.com/theoneandroni`)

## Do Not
- Do not change the color palette without being asked
- Do not switch away from Poppins/Lora
- Do not add pages or sections not requested
- Do not use dark mode — this is a light theme site
