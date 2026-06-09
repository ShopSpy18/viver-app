# STEPS.md — build roadmap

This file is the build plan. Work through it top to bottom, one step at a time.
Do not jump ahead. After finishing a step, tell me how to see the result in the
browser, then wait for my "ok, next" before starting the next step.

Mark progress by changing [ ] to [x] when a step is done.

---

## Phase 0 — Project setup

- [x] Confirm understanding of CLAUDE.md and summarize the project back to me
- [x] Set up a React + Vite project in this folder
- [x] Get a blank app running in the browser (show me the localhost link)
- [x] Set up the basic visual identity (colors, fonts, spacing) from CLAUDE.md

## Phase 1 — Core flow (the heart of validation)

This is the most important phase. The goal: a person can explore experiences,
open one, and book a spot. Build with local/mock data. No payment.

- [x] Create mock data: 5 to 6 sample wellness experiences in Campinas
      (title, category, photo/illustration, host, date, time, location, price,
      total spots, spots filled)
- [x] Screen 1 — Explore (home): header "o que você quer viver hoje?",
      category chips at top, list of experience cards
- [x] Make each card open Screen 2 when tapped
- [x] Screen 2 — Experience detail: big photo, host info, date/time/location,
      spots bar, "quem vai" avatars, description, book button "bora? reservar vaga"
- [x] Screen 3 — Booking confirmation: simple "vaga garantida" screen after booking
- [x] Make the booked experience reduce the spots count and remember the booking
      (local state is fine for now)

## Phase 2 — Profiles

- [x] Screen 4 — User profile: stats (experiences lived, people met),
      upcoming bookings, "já vivi" history grid
- [x] Screen 5 — Host profile: cover, avatar, verified badge, bio, rating,
      reviews, list of experiences the host offers
- [x] Link host name on Screen 2 to open the host profile (Screen 5)

## Phase 3 — Host mode (publishing)

- [x] Add a "host mode" toggle in the user profile (same account, not a new app)
- [x] Screen 6 — Create experience: form with photo upload, title (with a hint
      about the casual beginner-friendly tone), category, description, date,
      time, spots, price, location, and a "publicar experiência" button
- [x] Make a published experience appear in the Explore list

## Phase 4 — Polish (only after the above works)

- [x] Bottom navigation bar: explorar / salvos / minhas vagas / perfil
- [x] "Salvos" (saved) — let users heart/save experiences
      (+ "minhas vagas" tab listing confirmed experiences)
- [ ] Empty states and small loading touches
- [ ] Mobile layout check (it must look good on a phone screen, 9:16)

---

## Notes / corrections (we add here as we go)

(empty for now — when I correct something, record it here and in CLAUDE.md)
