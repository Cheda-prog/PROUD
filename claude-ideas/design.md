# Design

## Concept

A low-poly Las Vegas on an island. You travel a path around it, and each stop is a section of the portfolio.

| Order | Stop | Place | Content |
|---|---|---|---|
| 1 | Projects | My house | Personal, work, currently working on |
| 2 | Experience | Hotel tower on the Strip | Coding jobs and internships |
| 3 | Education | UNLV | College, GPA, skills, languages, frameworks |
| 4 | Contact | Billboards on the way out of UNLV | Links and socials |

The route follows real geography: UNLV sits just east of the Strip.

### The hotel (Experience)

- Each job is one floor, oldest at the bottom; the penthouse is the current or latest role.
- Glass facade, one mesh per floor. No modeled interiors.
- An elevator button panel (HTML) picks a floor. The camera glides up the outside, that floor's windows light up, and the info panel shows the job.
- Optional landmark: the Sphere next to the hotel, visible from anywhere.

### Movement

- On rails: the camera (or a car) follows a path curve drawn in Blender.
- Scroll or arrow keys move along it; it stops at each of the 4 places.
- No free roaming, so no collision or physics.

### Text

- All text lives in HTML panels over the scene, not 3D text.
- Content comes from one `content.json`, shared by the 3D site and the mobile site.

## Code layout (planned)

```
app/
├── layout.tsx                ← root layout (html/body)
├── page.tsx                  ← entry: checks screen width + WebGL, sends to 3D or mobile
├── mobile/page.tsx           ← mobile site (no 3D)
├── island/
│   ├── layout.tsx            ← 3D scene + nav bar overlay; stays loaded between stops
│   ├── page.tsx              ← intro / start
│   ├── projects/page.tsx     ← house panel
│   ├── experience/page.tsx   ← hotel panel
│   ├── education/page.tsx    ← UNLV panel
│   └── contact/page.tsx      ← billboards panel
└── api/
    ├── contact/route.ts      ← Resend email
    └── projects/route.ts     ← GitHub repos
```

### Decisions

- **One island layout.** `island/layout.tsx` holds both the 3D scene and the nav bar overlay (menu, links, day/night). Navigating between stops swaps only the panel; the island never reloads.
- **Current stop = the URL** (`/island/experience`). The scene reads the URL and flies the camera there. Don't duplicate it in state. Bonus: shareable links and a working back button.
- **Other state goes in a Zustand store:** day/night, menu open, selected hotel floor. Layouts can't pass props down to pages, so the store is how the overlay, scene and panels share state.
- Move between stops with `<Link>` / `router.push`. A full refresh reloads the island.
- The 3D scene is a client component loaded with `next/dynamic` and `ssr: false`, so phones never download it.

### Mobile check

- The decision happens in the browser: screen width (e.g. at least 1024px) and WebGL support.
- Optional early guess from the user-agent in `proxy.ts` (Next 16's name for middleware). Not reliable on its own.
- Add a "Classic view" link on the 3D site that goes to the mobile site.
