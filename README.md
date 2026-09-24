# Portfolio — Next.js 15 + React 19 + Tailwind CSS v4

## Run it
```bash
npm install
npm run dev        # open http://localhost:3000
```

## Make it yours
Edit **one file**: `data/portfolio.ts` (name, bio, projects, skills, certifications, contact, social links).

Images: put them in `public/` and reference them as `"/profile.jpg"`.
If an image is left as `""`, a clean fallback (your initials / a graduation cap) is shown instead of a broken image.

## Deploy to Vercel
Push to GitHub → import the repo at vercel.com → Deploy. No settings needed.

## Structure
- `app/` — layout (fonts, theme script) and the page
- `components/` — one file per section (Navbar, Hero, About, Projects, Skills, Certifications, Contact, Footer)
- `data/portfolio.ts` — all your content
