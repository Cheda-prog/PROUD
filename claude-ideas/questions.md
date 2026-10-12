# Open Questions

- [ ] Plain Three.js or React Three Fiber? Plain Three.js is what I know; R3F fits React's style. Either works.
- [ ] Zustand or React Context for shared state?
- [ ] Add the Sphere next to the hotel as a landmark?
- [ ] How does the visitor move: scroll, arrow keys, clicking stops in the nav bar, or all three?
- [ ] Is the intro at `/island` its own stop, or does it start at the house?
- [ ] What does day/night change: lighting only, or neon signs turning on too?
- [ ] Custom domain, or stay on `.vercel.app` for now?
- [ ] Is Supabase needed at all (view counter, guestbook)?
- [ ] Credits section for CC-BY models

## Answered

- **Framework:** Next.js (I already know it) instead of Vite.
- **Hosting:** Vercel, connected to the GitHub repo.
- **Experience stop:** a hotel tower, one floor per job.
- **Layouts:** one `island/layout.tsx` holding the scene and the nav bar, not two layouts.
- **Mobile:** a website in the same Next.js project, not React Native.
