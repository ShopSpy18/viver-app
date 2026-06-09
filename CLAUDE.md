# CLAUDE.md

## Project overview

App name: **MoreToLive** (wordmark written lowercase as "more to live", on a single line).

A local experience discovery app that connects professionals ("hosts") with people
who want to live something new. Users open the app to discover and book experiences --
wellness, sports, food, culture, and learning -- in their city.

The purpose is to fight situational loneliness and the fear of starting something new:
helping people live experiences, meet like-minded people, and break out of their routine.

- Pilot city: Campinas, Brazil
- Audience: people aged 18 to 35
- Entry niche (MVP): wellness (yoga, running, climbing, etc.)
- Interface language: Brazilian Portuguese (the UI text is in Portuguese, even though
  we talk in English while building)

## Current stage

Validation MVP. The goal is to prove the core flow works end to end:
explore experiences -> view detail -> book a spot.
Payment is NOT included now (booking is a simple confirmation; charging is manual for now).

Note: the build order and task list live in STEPS.md. Follow that file for what to
build and in what sequence. This file is for stable context only.

## Tech stack

- Web app (opens in the phone browser, no app store publishing yet)
- React + Vite
- Styling with simple CSS or Tailwind (prefer Tailwind if it speeds things up)
- Data in memory / local JSON file at this stage (no real database yet)
- No complex backend at this stage -- focus on a navigable front-end

## Screens the app has

(These are the screens that exist in the app. The order to build them is in STEPS.md.)

- Explore (home) -- list of experiences as cards, with categories at the top
- Experience detail -- photo, host, date, spots, "who's going", book button
- Booking confirmation -- simple "spot secured" screen
- User profile -- history of experiences, upcoming bookings
- Host profile -- bio, reviews, experiences offered
- Create experience -- form for the host to publish

## Visual identity (MoreToLive brand)

Palette — 5 colors only:
- Coral Sunset (PRIMARY) #FF7A59 -- main buttons, highlights, active states, the wordmark
- Creme (background) #F7F3EC -- app background
- Preto Suave (text/dark) #1A1A1A -- main text, dark backgrounds (e.g. confirmation screen)
- Verde Oliva (secondary) #6F7D6C -- secondary/muted text and elements
- Verde Neon (accent) #C6FF00 -- ONLY small accents (e.g. "últimas vagas" tag).
  NEVER as a background behind normal text, NEVER as text on a light background (too low contrast).

Other rules:
- Text on coral buttons is Preto Suave #1A1A1A (near-black), NOT white/creme --
  white on coral is only ~2.5:1 contrast (fails); dark-on-coral is ~6:1.
- Logo/wordmark: "more to live" -- lowercase, coral, single inline line (NOT stacked),
  serif (Playfair Display), no icon, no cursive.
- Typography: Satoshi (Bold for titles, Regular for body), fallback Inter -- used for the
  whole UI. The WORDMARK uses Playfair Display (serif). Loaded via Fontshare (Satoshi) +
  Google Fonts (Inter + Playfair Display). All support Portuguese accents.
- Category chips on Explore are icon tiles (line icons); bottom nav uses line icons too.
- Cards: "Popular" tag, participant photos as social proof, full-width "reservar vaga" CTA.
- Clean, flat look, no gradients, no heavy shadows.
- Cards with rounded corners, lots of breathing room (whitespace).
- Each experience has a photo/illustration at the top of its card.

Implementation note: colors live as CSS tokens in src/index.css (@theme). The brand-named
tokens are coral/creme/preto/oliva/neon. The old names (verde/menta/carvao/cinza/ambar/lilas)
are kept as aliases pointing at the new palette so older class names still work.

## Tone of voice (VERY important)

The UI copy is in Brazilian Portuguese, jovial, warm and casual. Experience titles
speak directly to beginners, no jargon. Examples of the tone:
- "yoga pra quem nao encosta a mao no pe"
- "corrida pra quem cansa de subir escada"
- "primeira vez na escalada (sem cair, prometo)"

Home header: "o que voce quer viver hoje?"
Book button: "bora? reservar vaga"

Keep all user-facing text in Portuguese in this exact casual style, even though our
working conversation is in English.

## Experience data structure

Each experience has: title, category, photo, description, host name,
date, time, duration, level (beginner/intermediate), location, price,
total spots, spots filled, list of who's going.

## Account and profiles

One single account per person. The same person can be a user (books experiences)
and a host (publishes experiences) -- toggling a "host mode".
Do NOT build two separate apps.

## What NOT to do

- Do not implement payment at this stage
- Do not build a real database yet (use local/mock data)
- Do not use English in the interface (all user-facing text in Brazilian Portuguese)
- Do not use Title Case or ALL CAPS in the copy -- normal sentence case, lowercase casual style
- Do not invent new screens without asking first
- Do not use gradients, heavy shadows, or a busy visual style

## How to work with me

I am a beginner at programming. So please:
- Explain what you are going to do before doing it, in simple language
- Build one screen/feature at a time, not everything at once
- Whenever you finish something, tell me how to see the result in the browser
- If I correct something, record the correction here in CLAUDE.md so it does not repeat

## Notes / decisions

(Decisions we make as we go, so they don't get lost or re-litigated.)

- Attendee privacy: the NAMED "quem vai" list (faces + first names) on the experience
  DETAIL screen is only shown to users who confirmed their spot. Non-confirmed users see
  blurred avatars + a count there. The Explore CARD shows small participant photos as
  social proof (faces, NO names) to everyone -- this relaxes the rule slightly for the
  card to build trust, while names stay gated behind booking. (Open: if we want stricter,
  blur the card faces for non-bookers too.)
