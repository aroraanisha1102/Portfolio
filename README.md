# Anisha Arora — Portfolio

A creative, animation-first portfolio positioning Anisha Arora for **Strategy / Operations / GTM** roles at AI companies. The centerpiece is an **animated journey map** that traces her career route from India → New York → Atlanta, revealing the roles, skills, and results at each stop as you scroll.

## Highlights

- **Animated roadmap** — a scroll-synced map that draws the flight path between cities and moves a plane between stops while the matching role card highlights.
- **Impact counters** — headline metrics animate into view.
- **Lean, brevity-first copy** — short, scannable cards instead of walls of text.
- **Responsive & accessible** — works on mobile, respects `prefers-reduced-motion`.

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Editing content

All content lives in [`lib/data.ts`](lib/data.ts) — profile details, journey stops (with map coordinates), impact metrics, and skills. Update that single file to change what the site says.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.

Optionally add a custom domain in the Vercel dashboard.
