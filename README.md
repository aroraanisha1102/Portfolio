# Anisha Arora — Portfolio

A fun, hand-drawn portfolio positioning Anisha Arora for **Strategy / Operations & AI-GTM** roles. Cream paper background, handwritten type, and a doodle aesthetic — with an interactive **road map of her career** as the hero moment.

## Highlights

- **The road so far** — a hand-drawn winding road (India → New York → Atlanta) with numbered stepping stones. Hover or tap any stone to reveal the role as **The Challenge · My Contribution · The Impact · Core Skills** — brevity-first, zero fluff. A traveling pin follows the road as you scroll, ending at a checkered finish line: *"To be continued…"*.
- **The AI Lab** — a living section of AI projects (with status badges) that showcases an AI-first mindset. Easy to swap in real projects as they ship.
- **Playful, on-brand vibe** — highlighter marker text, sketchy borders, rotating role words, and hand-drawn doodles.
- **Responsive & accessible** — works on mobile; respects `prefers-reduced-motion`.

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Google Fonts: **Caveat** (display) + **Kalam** (body) for the handwritten look

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

Everything lives in [`lib/data.ts`](lib/data.ts):

- `profile` — name, tagline, rotating roles, email, LinkedIn.
- `stops` — the road milestones (title, company, Challenge / Contribution / Impact / Core Skills, plus `x`/`y` map coordinates).
- `projects` — the AI Lab cards (title, blurb, tags, status).
- `toolkit` — skill groups.

Update that one file to change what the site says.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Next.js is auto-detected — click **Deploy**. Add a custom domain in the dashboard if you like.
