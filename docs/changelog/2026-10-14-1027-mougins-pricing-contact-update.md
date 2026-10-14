# 2026-10-14 10:27 — Mougins relocation: pricing, phone, booking link, popup removal, map section

**Repo:** LGE-WebSite · **Branch:** Quiz-V2 · **Commits:** 260ab39 + uncommitted working tree (map section, mailto)
**Scope:** Home page content (`app/page.tsx`), pricing card component, SEO metadata, global styles

## Technical

### Added
- `PricingCard` now accepts optional `ctaText` and `onCtaClick` props so a card can trigger something other than the booking site; defaults keep the previous behaviour ("Réserver" → booking URL) (`app/components/PricingCard.tsx`).
- New "Entreprises & CE" pricing card with "Sur devis" and a "Demander un devis" CTA. Quote requests go to `mailto:Lgemougins@gmail.com?subject=Demande%20de%20devis` via `window.location.href` (not `window.open`, which leaves a blank tab for `mailto:`). Same link on the hero banner "Demandez votre devis" (`app/page.tsx`).
- New "Nous trouver" section at the bottom of the home page (`app/page.tsx`): two columns. Left: "Retrouvez-nous à Mougins" heading, address "561 route de la Roquette, 06250 Mougins", an "Itinéraire" `Button` opening the Google Maps short link `https://maps.app.goo.gl/ajQsYKWJ3gQrU1d29`, the phone button, and a `mailto:` link for quotes. Right: a Google Maps `<iframe>` embed built from the address query (`google.com/maps?q=…&output=embed`, no API key needed), `loading="lazy"`. The site has no dedicated contact page, so this section is the contact point.

### Changed
- Navbar: new "Nous trouver" `Button` (same primary style as "Réserver", hidden below the `sm` breakpoint to keep the mobile header from overflowing) that smooth-scrolls to the section with `id="nous-trouver"` (`app/page.tsx`).
- Hero title promoted from `<h2>` to `<h1>` (the page had no `h1`) and now reads "Découvrez l'expérience ultime à Mougins", with "Mougins" highlighted in yellow (`app/page.tsx`).
- Booking URL replaced everywhere: `quizmaster-nice.resasoft.fr/...P1=QM1` → `lasergame-evolution.resasoft.fr/FR/Centre-v2.awp?P1=141` (`app/page.tsx`, `app/components/PricingCard.tsx`).
- Phone number replaced: 04.23.32.01.55 → 04.92.28.16.53, `tel:` link normalised to `tel:0492281653` (header button, hero banner, contact section).
- Pricing grid reduced to two offers: "Partie complète" 22€ / 9 manches / 50 min and "Partie express" 15€ / 4 manches / 30 min, both "2 à 12 joueurs". Section heading changed from "Plus vous êtes nombreux, moins c'est chers" to "Deux formules, un seul prix par personne" since prices no longer depend on group size.
- Hero bottom banner: "Profitez de nos offres de groupe…" replaced by "Entreprises & groupes : demandez votre devis" (clickable `mailto:` link), because group pricing no longer exists.
- Player count: "Entre 2 et 34 joueurs" → "Entre 2 et 12 joueurs".
- SEO keywords in `app/layout.tsx`: every "Nice" keyword replaced by "Mougins".

### Removed
- Opening popup `QuizBattlePromoModal` (closing announcement for 27 April 2026): component file deleted, import and usage removed from `app/page.tsx`, and the whole `// Promo Modal` block (`.promo-*` classes and keyframes) removed from `app/globals.scss`. `framer-motion` stays as a dependency because `Button` uses it.
- Birthday offer ("Formule anniversaire" 26€) is **commented out, not deleted**, in `app/page.tsx` as a JSX comment labelled "Formule anniversaire (désactivée)". Its icon imports (`BirthdayIcon`, `TableIcon`, `DrinkIcon`, `CwdTopIcon`, `CwdBottomIcon`) are kept as commented lines next to the other imports so the block can be re-enabled by uncommenting both.
- Old pricing cards removed: Petit/Moyen/Grand groupe (18€), Tarif étudiant (18€), Tarif enfant (15€).

### Breaking changes & migrations
- None.

### Follow-ups
- Two pre-existing `react/no-unescaped-entities` ESLint errors remain on the "événement d'entreprise" paragraph (`app/page.tsx`); ESLint is set to `ignoreDuringBuilds` so the build passes. Not touched in this session.
- `app/layout.tsx` description still says "directement depuis votre salon"; it does not mention Mougins. Left as is.
- Verified with `tsc --noEmit` (clean) and `next build` (successful).

## Non-technical

The website now reflects the move from Nice to Mougins. The opening announcement popup is gone. The phone number shown everywhere is now 04 92 28 16 53, and every "Réserver" button opens the new booking site. Prices are simplified to two offers: the full 9-round game at 22 € per person and the 4-round express game at 15 € per person, for 2 to 12 players. Companies are invited to request a quote by email at Lgemougins@gmail.com. The birthday package is hidden for now and can be brought back later. A new "Nous trouver" block at the bottom of the page shows the Mougins address, a map, a "get directions" button and the phone number, and a "Nous trouver" link in the top bar jumps straight to it. The main title on the landing screen now says "à Mougins".

## Files touched
```
app/components/PricingCard.tsx          |  12 +++-
app/components/QuizBattlePromoModal.tsx | 120 --------------------------------
app/globals.scss                        | 119 -------------------------------
app/layout.tsx                          |  16 ++---
app/page.tsx                            |  83 ++++++++++++++--------
5 files changed, 71 insertions(+), 279 deletions(-)
```
