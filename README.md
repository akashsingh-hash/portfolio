
A high‑quality, futuristic personal portfolio for Akash Singh built with React, Tailwind CSS and subtle 3D/animation touches. Glassmorphism cards, neon accents, animated panels and a starfield background create a premium, modern presentation.

Live demos
- VocalDocs — https://vocal-doc-eight.vercel.app/
- Currency Converter — https://currency-converter-jade-three.vercel.app/

Quick links (repo components)
- src/components
  - Achievements.tsx
  - Contact.tsx
  - Footer.tsx
  - Hero.tsx
  - Leadership.tsx
  - Navbar.tsx
  - Projects.tsx
  - Skills.tsx

Tech stack
- ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Framer Motion](https://img.shields.io/badge/Framer_Motion-000000?style=for-the-badge&logo=framer&logoColor=white)
- ![React Three Fiber](https://img.shields.io/badge/React_Three_Fiber-000000?style=for-the-badge&logo=three.js&logoColor=white)
- ![Vite](https://img.shields.io/badge/Vite-BF40FF?style=for-the-badge&logo=vite&logoColor=white)
- ![lucide-react](https://img.shields.io/badge/lucide--react-111827?style=for-the-badge)
- ![maath](https://img.shields.io/badge/maath-random-111827?style=for-the-badge)

Key features
- Futuristic UI: glassmorphism cards, neon gradient borders, subtle glows.
- Responsive layout: mobile-first grid (1 column → 2/3 columns on desktop).
- Animated interactions: framer-motion for staggered entrance + hover tilt.
- 3D background: react-three/fiber + drei Points starfield.
- Projects include Live Demo & View Code buttons.
- Contact form scaffold for secure backend/email integration.

Demo screenshots
- Add project screenshots in `public/screenshots/` and reference them here for immediate visual context.
  - Example: `public/screenshots/preview.png`

Installation (Windows)
1. Clone repo  
   git clone <repo-url> c:\Portfolio Bolt.new\project
2. Install dependencies  
   cd c:\Portfolio Bolt.new\project  
   npm install
3. Run dev server  
   npm run dev
4. Build for production  
   npm run build  
   npm run preview

Common commands
- npm run dev — start dev server (Vite)
- npm run build — production build
- npm run preview — preview build locally

Project structure (important files)
- src/index.css — Tailwind + global CSS (must contain pure CSS; remove any pasted JS/TS)
- src/main.tsx — app bootstrap
- src/components/Hero.tsx — starfield + hero content
- src/components/Skills.tsx — skill cards with progress / badges
- src/components/Achievements.tsx — achievement cards (same style as skills)
- src/components/Projects.tsx — featured projects (Live Demo/GitHub)
- src/components/Contact.tsx — contact form & contact cards

Notes & troubleshooting
- PostCSS / Vite "Unknown word" error: caused by non-CSS content in `src/index.css`. Ensure it starts with Tailwind directives only.
- Double-border on hover: remove inner border + p-[1px] wrapper; use a single neon overlay (.neon-ring).
- If framer-motion animations don't run: install framer-motion (`npm i framer-motion`).
- If starfield errors: ensure `@react-three/fiber`, `@react-three/drei`, and `maath` are installed.

License
- MIT License — © 2023-2025 Akash Singh  
  See [LICENSE](./LICENSE) for full text.

Contact
- Email: singh0810.akash@gmail.com
- GitHub: https://github.com/akashsingh-hash
- LinkedIn: https://www.linkedin.com/in/akashsingh0810/

Contributing
- Fork the repo, create a feature branch, add changes, open a PR.
- Keep styles in Tailwind utilities and extract reusable styles to `src/styles` where appropriate.

Next improvements (suggested)
- Add unit tests with Vitest + React Testing Library.
- Replace client-side email transport with a serverless function for secure form sending.
- Add lazy-loading for images and code-splitting for larger components.
- Include a short GIF demo in this README for visual impact.

---

If you want, I can:
- Add a LICENSE file (MIT) to the repo.
- Generate a small demo GIF and add `public/screenshots/preview.png` with an example.
