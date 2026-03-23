# Redesign: Mørk Luksus — Roni Ismail

**Dato:** 2026-03-23
**Scope:** `style.css` + font-import i `index.html` og `about.html`
**Status:** Godkendt af bruger

---

## Mål

Erstatte den nuværende danbolig-farvet corporate identitet med en mørk, eksklusiv, personlig stil. Siden skal føles som et high-end magasin eller arkitekturpublikation — ikke en franchise-mægler.

Brugerens krav:
- Mindre "danbolig", mere personlig
- Mørkere, mere eksklusiv farvepalette
- Tydelig sektion med erfaringer/resultater
- Enkel typografi
- Luksus-vibe, meget luft, magasin-følelse

---

## Farvepalette

Alle farver defineres som CSS custom properties på `:root`.

| Token | Hex | Brug |
|---|---|---|
| `--bg` | `#18181b` | Primær baggrund (kul) |
| `--bg-raised` | `#1e1e22` | Hævede flader (alternerende sektioner) |
| `--bg-deep` | `#0f0f11` | Dybeste lag (atmosfære-sektion, footer) |
| `--border` | `rgba(232,221,208,0.07)` | Subtile kanter |
| `--text-primary` | `#e8ddd0` | Primær tekst (lin/lærred) |
| `--text-muted` | `#b8a898` | Dæmpet tekst, eyebrows, labels |
| `--text-dim` | `rgba(232,221,208,0.4)` | Brødtekst, sekundær information |

Ingen accent-farve (fjern danbolig-teal `#006664`). Kontrast skabes udelukkende gennem tone og typografi.

Knapper:
- Primær: `--text-primary` baggrund, `--bg` tekst (inverteret)
- Ghost: transparent, `rgba(232,221,208,0.2)` kant, `--text-primary` tekst

---

## Typografi

Erstat Poppins + Lora med Cormorant Garamond + Inter.

| Brug | Font | Vægt |
|---|---|---|
| Overskrifter (h1, h2, h3, `.hero-headline`) | Cormorant Garamond | 300 (light), 400, italic 300/400 |
| Body, UI, labels, knapper | Inter | 300 (light), 400, 500 |

Google Fonts import:
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500&display=swap
```

Opdater `--font-heading` og `--font-body` tokens. Fjern Poppins og Lora fra `<head>` i begge HTML-filer.

Typografiske principper:
- `h1`: `font-size: clamp(3.5rem, 6.5vw, 6rem)`, `font-weight: 300`, `letter-spacing: -0.02em`, `line-height: 1.0`
- `h2`: `font-size: clamp(2rem, 4vw, 3rem)`, `font-weight: 300`, `letter-spacing: -0.02em`
- Eyebrow: Inter, `font-size: 10px`, `font-weight: 400`, `letter-spacing: 0.2em`, uppercase
- Body: Inter, `font-size: 1rem`, `font-weight: 300`, `line-height: 1.85`
- Statistik-tal: Cormorant Garamond, `font-weight: 300`, meget store størrelser

---

## Sektionsstruktur

Siden er **fuldt mørk** hele vejen. Ingen lyse sektioner. Sektion-adskillelse skabes via subtile nuanceforskelle:

| Sektion | Baggrund |
|---|---|
| Nav | transparent → `rgba(24,24,27,0.92)` blur ved scroll |
| Hero | `--bg` (#18181b) |
| Stats-bar | `--bg-raised` (#1e1e22) |
| Om mig | `--bg` (#18181b) |
| Resultater | `--bg-raised` (#1e1e22) |
| Testimonials | `--bg` (#18181b) |
| Atmosfære-foto | `--bg-deep` (#0f0f11) |
| Kontakt | `--bg-raised` (#1e1e22) |
| Footer | `--bg-deep` (#0f0f11) |

---

## Hero

Layout: Split 50/50 grid. Bevares som nu.

- Venstre: `--bg` baggrund, tekst + knapper
- Højre: `--bg-raised` baggrund, portræt `object-fit: contain`, `object-position: bottom center`
- Hero-headline: Cormorant Garamond 300, `em` i kursiv med `--text-muted` farve
- Knapper: primær (lys) + ghost (transparent med lys kant)
- **Fjern** `.hero-left::after` pseudo-elementet (det gamle teal radial-gradient glow) — ikke relevant i det mørke tema

---

## Stats-bar

Fire tal på `--bg-raised`. **Den eksisterende stats-bar i `index.html` har kun 3 items — den skal udvides til 4.** Erstat hele stats-bar HTML-blokken med fire items:

| Tal | Label |
|---|---|
| 250+ | Involveret i handler |
| 8 dg. | Gns. salgstid |
| 4.9★ | Bedømmelse |
| 12+ | Års erfaring |

Tallene bruger Cormorant Garamond 300. Labels i Inter, 9px, letter-spacing.

---

## Resultater-sektion

Fire kort i grid (`repeat(4, 1fr)`), adskilt med 1px `--border` linjer. Baggrund `--bg-raised`.

| Tal | Titel | Beskrivelse |
|---|---|---|
| 250+ | Handler i alt | Involveret som rådgiver, købers- eller sælgers mægler — fra første møde til overtagelse. |
| 8 dg. | Gns. salgstid | Mine boliger finder køber hurtigere end markedsgennemsnittet i Aarhus-området. |
| 4.9★ | Kundebedømmelse | Baseret på anmeldelser fra tidligere kunder — fordi resultater ikke lyver. |
| 12+ | Års erfaring | Markedet forandrer sig. Erfaringen til at navigere det gør ikke. |

Under de fire kort: en mørk strip (`--bg-deep`) med label "Specialisering" og teksten **"Projektsalg & nybyggeri"** + kort beskrivelse: *"Erfaring med salg af projektboliger og nybyggede ejendomme — fra tegning til overtagelse."*

---

## Knapper

- Ingen `border-radius: 100px` pill — erstattes med `border-radius: 2px` (skarpere, mere eksklusiv)
- Primær: `background: var(--text-primary)`, `color: var(--bg)`, ingen farvet shadow
- Ghost: `border: 1px solid rgba(232,221,208,0.2)`, `color: var(--text-primary)`, `background: transparent`
- Hover primær: `opacity: 0.9`, `transform: translateY(-2px)`, ingen farvede box-shadows
- Hover ghost: `border-color: rgba(232,221,208,0.4)`, `background: rgba(232,221,208,0.05)`, `color: var(--text-primary)`, `transform: translateY(-2px)`
- Ingen teal-farver i hover-states
- **Fjern** den eksisterende hero-scoped override `.hero-left .btn-ghost:hover` i `style.css` — den globale ghost hover-regel overtager og er korrekt for det mørke tema

---

## Nav

- Transparent ved top, blur+border ved scroll
- Logo: Cormorant Garamond, `font-weight: 400`
- Nav-links: Inter, `font-weight: 300`, `--text-muted`
- CTA-knap: ghost-stil (kant, ingen baggrund)
- Scrolled state: `background: rgba(24,24,27,0.92)`, `backdrop-filter: blur(24px)`

---

## Animationer

Uændrede:
- Reveal: `opacity 0` → `1`, `translateY(28px)` → `0`, `cubic-bezier(0.22, 1, 0.36, 1)`
- Delays: 0.12s, 0.24s, 0.36s, 0.48s

---

## Filer der ændres

1. **`style.css`** — komplet omskrivning af `:root` tokens + alle sektion-styles. **Opdater** `--gold` fra `#b8974a` til `#b8a898` (erstat den gamle amber-tone med den dæmpede lin-tone — bruges til stjerne-ratings i testimonials).
2. **`index.html`** — opdater Google Fonts `<link>` (Cormorant + Inter, fjern Poppins + Lora), opdater stats-bar tekst og tal, opdater resultater-tekst, tilføj projektsalg-strip HTML under resultat-kortet.
3. **`about.html`** — opdater Google Fonts `<link>` (Cormorant + Inter, fjern Poppins + Lora).
4. **`about.css`** — fuld mørk gennemgang. Specifikke værdier der skal opdateres:
   - `.page-hero`: baggrund → `var(--bg)` (fjern `var(--navy)`)
   - `.page-hero-text .label` og alle `var(--accent)` forekomster → `var(--text-muted)`
   - `.about-stat-num`: farve → `var(--text-primary)`
   - `.about-stats-strip`: baggrund → `var(--bg-raised)`
   - `.values` og andre sektioner med `var(--bg-surface)` → `var(--bg-raised)`
   - Alle `rgba(0, 102, 100, ...)` teal-referencer → fjernes eller erstattes med `rgba(232,221,208,0.07)`
   - `var(--accent-light)` på `.value-icon` og `.timeline-dot--active` → erstat med `rgba(232,221,208,0.06)` direkte (tokenet fjernes fra `:root`)

---

## Ikke i scope

- Strukturelle HTML-ændringer (undtagen: stats-tekst/tal, resultater-tekst, og tilføjelse af projektsalg-strip under resultater-grid)
- Nye sektioner
- `main.js` — ingen JS-ændringer
- Mobilresponsive breakpoints ændres ikke strukturelt, kun farver/fonts arves
