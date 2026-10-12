# Stack

| Layer | Tool | Its job |
|---|---|---|
| 3D models | Blender | Build the island, house, hotel, UNLV and billboards |
| Free filler models | Kenney, Quaternius, Poly Pizza | Trees, cars, props |
| Model compression | gltf-transform | Shrink `.glb` files so they load fast |
| Framework | Next.js 16 | Where the pages and the backend code are written |
| Language | TypeScript (TSX) | What it's all written in |
| Styling | Tailwind CSS 4 | Came with the Next.js template |
| 3D in the browser | Three.js | Draws the island in the visitor's browser |
| Shared state | Zustand (planned) | Day/night, menu open, hotel floor |
| Contact form email | Resend | Delivers contact-form messages to my inbox |
| Live projects | GitHub API | Latest repos for "currently working on" |
| Database (optional) | Supabase | Only if stored data is needed later |
| Code storage | GitHub | `Cheda-prog/PROUD` |
| Hosting | Vercel | Serves the site and runs the backend code |

## Who does what

- **Next.js** is where I *write* pages and API routes (`route.ts`).
- **Vercel** *runs* them: it hosts pages and runs API routes as serverless functions.
- **React** turns my components into the page, on the server and in the browser.
- **Three.js** only runs in the browser. Load it with `ssr: false`.
- **Blender** to `.glb` to gltf-transform to `public/models/`, then loaded by Three.js.

## Vercel settings

- Root Directory: `proud` (the app lives in a subfolder of the repo)
- Build Command: default (`next build`). Never `npm run dev`.
- Secrets go in Project > Settings > Environment Variables, and in `.env.local` locally.

## Performance targets

- First download before moving: under 5MB
- Whole island: under ~300k triangles
- Draw calls: under ~100
- Textures: 2K max, a handful of atlases
- Bake lighting in Blender; minimal real-time lights
- Cap pixel ratio at ~1.5
