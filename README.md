# ryancarpentier.com

Portfolio for Ryan Carpentier — construction & project management. Next.js 14 (App Router), Tailwind CSS, Framer Motion.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

| To change…                         | Edit                    |
| ---------------------------------- | ----------------------- |
| Name, tagline, nav, headline stats | `lib/site.ts`           |
| The 7 lifecycle phases             | `lib/phases.ts`         |
| Roles / experience page            | `lib/experience.ts`     |
| Projects (case studies)            | `lib/projects.ts`       |
| Colors, fonts                      | `tailwind.config.ts`, `app/layout.tsx` |

## Adding a project

1. Put photos in `public/projects/<slug>/` (e.g. `public/projects/pizza-press/01.jpg`).
2. In `lib/projects.ts`, copy an existing object and set a new `slug`.
3. Set `src: "/projects/<slug>/01.jpg"` on `cover` and each `gallery` item. Items without `src` render a placeholder.
4. List the phases you owned under `phases` — the timeline on the page lights up automatically, and the card shows a mini progress bar.

The page, card, sitemap entry and static route are generated from that one object.

## Headshot

Add `public/ryan.jpg` and set the image `src` in `app/about/page.tsx`.

## Contact form

The form is the only public contact method — no email address appears in the page source. To deliver messages, create a `.env.local` (see `.env.example`). Without it, submissions are logged to the server console.

## Deploying

Vercel is the simplest host: import the repo, add the env vars, and point `ryancarpentier.com` at it.
