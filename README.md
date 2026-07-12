# Muhammad Asad Ullah — Developer Portfolio

A premium, animated developer portfolio built with **React + Vite**, **Tailwind CSS**, and
**Framer Motion**. Dark navy theme, glassmorphism cards, animated typing hero, scroll-triggered
skill bars, cursor glow, and a full case of sections from About through Contact.

## Getting started

```bash
npm install
npm run dev       # start local dev server at http://localhost:5173
npm run build     # production build into /dist
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/
    layout/       # Navbar, Footer, Loader, CursorGlow, ScrollProgressBar, BackToTop
    sections/      # One component per page section (Hero, About, Skills, ...)
    ui/            # Reusable primitives (GlassCard, GradientButton, ProgressBar, ...)
  constants/       # Personal info, nav links, typed roles
  data/            # Content arrays: skills.js, projects.js, experience.js, ...
  hooks/           # useTypewriter, useMousePosition, useScrollProgress
  index.css        # Tailwind layer + custom utility classes
  App.jsx
  main.jsx
```

Content lives in `src/data/*` and `src/constants/index.js` — update those files rather than
editing JSX to change copy, links, or figures.

## Placeholders to replace before going live

| What | Where |
| --- | --- |
| Email, phone, GitHub, LinkedIn | `src/constants/index.js` → `PERSONAL` |
| Profile photo | Replace `public/profile-placeholder.svg` usage in `About.jsx` with a real `<img>` |
| Resume PDF | Drop your file at `public/resume.pdf` (the buttons already link to `/resume.pdf`) |
| Project links & screenshots | `src/data/projects.js` — `github`, `demo`, `caseStudy`, `image` |
| University name & graduation year | `src/data/education.js` → `EDUCATION` |
| Certification issuers | `src/data/education.js` → `CERTIFICATIONS` |
| Contact form (EmailJS) | `src/components/sections/Contact.jsx` — add your `SERVICE_ID`, `TEMPLATE_ID`, `PUBLIC_KEY` from [emailjs.com](https://www.emailjs.com/) |
| Open Graph cover image | `public/og-cover.png` (a placeholder is included) |
| Canonical URL | `index.html` → `<link rel="canonical">` and `og:url` |

## Notes

- Colors, radii, shadows, and animation timings are all defined as design tokens in
  `tailwind.config.js` — change them there to re-theme the whole site at once.
- `prefers-reduced-motion` is respected globally (see the bottom of `src/index.css`).
- The cursor glow and mouse parallax automatically disable on touch devices.
