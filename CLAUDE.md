# Project Rulebook: Geff's UGC Portfolio

A one-page portfolio for **Geff Meridores**, a UGC (user-generated content) creator who makes
videos in **English, Tagalog, and Mandarin**. Separate from the Enrich agency website.
Deployed on **Vercel (free plan)** as a static site.

## About me (the developer)

- I'm a beginner at web development (basic Figma, some Python, learning Vue/Nuxt).
- Explain each change in simple terms (2–4 sentences), including which files you touched.
- Work in small steps. Ask before adding any new npm package, library, or service.
- After a change, tell me how to check it in the browser (desktop and mobile view).

## Hard rules

- **Honesty:** no invented numbers, brands, logos, reviews, or results. Only real ones Geff provides.
  Placeholders must look like placeholders (dashed boxes, "coming soon", [bracketed text]).
- **Privacy:** don't mention Geff's day job or employer (his request for now).
- **No rates or prices** on the page (for now). Contact is by email and social links only.
- One page only. Keep it fast: videos load only when played (`preload="none"`).

## Where things live

```
app/
  data/profile.ts   Geff's name, brand, email, socials, bio, approach, brands, reviews  ← edit text here
  data/videos.ts    Work samples, niches, formats ("What I make"), what's included       ← add videos here
  pages/index.vue   The page: hero, brands, work, what I make, about, reviews, contact
  components/       SiteHeader, HeroPhone, VideoCard, FormatIcon
  assets/css/main.css  Colors, fonts, buttons (design tokens)
public/videos/      Compressed .mp4 files (3–8 MB, vertical 9:16) + cover images
```

## Design rules

- **Colors** (tokens in `main.css`): `ink` navy #0E1A33 (dark sections, text), `ink-2`/`ink-3` (surfaces and
  borders on navy), `paper` #F5F7FB (light sections), `muted` #586381 (secondary text), `sun` marigold #F5B841
  (buttons/highlights, only on navy or with navy text), `sky` #AFC6F7 (small text on navy).
- **Fonts:** Bricolage Grotesque (`font-display`) for headings, Instrument Sans for body.
  Chinese falls back to the device's own Chinese font.
- **Signature:** the hero greets in all three languages, each with a language tag (EN / TL / 中文).
  Every video card shows its language tag too.
- **Buttons:** `btn-sun` (main action), `btn-ink` (on light), `btn-ghost` (outline on navy). Pill shaped.
- **Animation:** hero `rise` on load, gentle `v-reveal` fade-up on sections. Off under reduced motion.
- **Mobile first:** must look right at 360px, 390px, and 1440px wide.

## Before launch checklist

- [ ] Real details in `profile.ts`: brand name, email, socials, bio, location wording
- [ ] Geff's photos (hero card + About) and intro video
- [ ] Real videos in `public/videos/` + entries in `videos.ts`
- [ ] Real brand logos and reviews (or remove those sections)
- [ ] Confirm "Every video comes with" and the formats list with Geff
- [ ] Deploy to Vercel (free), then add a custom domain if Geff has one
