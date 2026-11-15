# IT klub – web stranica

Projektni zadatak iz predmeta Softversko inženjerstvo (4. razred gimnazije, IT smjer), školska 2026/2027.

**Autori (rad u paru):** Ema Kapur i Ime Prezime

**Repozitorij:** https://github.com/GITHUB_KORISNIK/it-klub-stranica

## O projektu

Prezentacijska web stranica školskog IT kluba (Coding Club). Stranica predstavlja klub, članove i projekte te ima formu za prijavu novih članova.

## Sekcije stranice

- **Početna** – hero sekcija s opisom kluba, dugmadima i kratkom statistikom
- **O nama** – opis kluba i kartice članova
- **Projekti** – kartice projekata s filterom po kategoriji (Web, Igre, Python)
- **Prijavi se** – forma za prijavu s JavaScript validacijom i brojačem znakova
- Responzivan dizajn (mobitel, tablet i računalo) s hamburger menijem na mobitelu

## Tehnologije

HTML5, CSS3 i JavaScript bez vanjskih biblioteka. Fontovi (Sora, Inter, Fira Code) se učitavaju s Google Fonts.

## Struktura repozitorija

```
.
├── index.html
├── style.css
├── script.js
├── images/
│   └── favicon.svg
├── docs/
│   ├── wireframe-desktop.png
│   ├── wireframe-mobile.png
│   └── mockup.png
└── README.md
```

## Kako pokrenuti

1. Kloniraj repozitorij: `git clone https://github.com/GITHUB_KORISNIK/it-klub-stranica.git`
2. Otvori datoteku `index.html` u pregledniku (dvoklik ili desni klik, Open with).

Nije potrebna instalacija ni server.

## Podjela posla

| Član | Branch | Zadužen za |
|------|--------|------------|
| Ema Kapur | `feature/ema-kapur` | `index.html` i `style.css` (struktura, sekcije, dizajn, responzivnost) |
| Ime Prezime | `feature/ime-prezime` | `script.js` (validacija, meni, filter), `docs/`, `images/`, `README.md` |

## Git rad

- Svaki član radi na vlastitom branchu.
- Na `main` se ne commita direktno i ne radi se merge dok profesor ne pregleda i odobri.
