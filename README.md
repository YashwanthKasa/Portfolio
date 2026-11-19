# Premium Video Editor & Creative Storyteller Portfolio

A high-end, responsive personal portfolio website engineered specifically for professional video editors, colourists, and creative content specialists. Inspired by Apple's minimalist design philosophy, confident typography, controlled whitespace, and A24's cinematic atmosphere.

Built with **Next.js (App Router)**, **React**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

---

## ✦ Design System & Visual Identity

- **Main Background**: `#000000` (Pure Black)
- **Secondary Background**: `#0A0A0A`
- **Card Background**: `#111111`
- **Elevated Card Background**: `#161616`
- **Primary Text**: `#F5F5F7` (Apple Off-White)
- **Secondary Text**: `#86868B` (Muted Studio Gray)
- **Borders**: `#252525` (Subtle dark dividers)
- **Accent**: `#FFFFFF`
- **Aesthetic**: Pure black background, confident typography, controlled line breaks, high-contrast monochrome cards, zero rainbow gradients, and video work showcased as the hero attraction.

---

## ✦ Website Architecture (8 Core Sections)

1. **SECTION 01 — Navigation Bar**
   - Sticky header with backdrop blur and subtle `#252525` border.
   - Brand logo / personal name placeholder `[YOUR NAME]`.
   - Smooth scroll anchor links: `Home`, `Work`, `Services`, `About`, `Contact`.
   - Active section highlighting on scroll.
   - Minimalist outlined CTA button: *"Let's Talk"*.
   - Accessible full-screen mobile drawer navigation.

2. **SECTION 02 — Hero Section**
   - Eyebrow: `INDEPENDENT VIDEO EDITOR & CREATIVE STORYTELLER`
   - Headline: *"I turn footage into stories."*
   - Supporting description: *"Creating engaging visual experiences through storytelling, thoughtful editing and creative execution."*
   - Primary CTA: *"Explore My Work"* (scrolls smoothly to `#work`).
   - Secondary CTA: *"Let's Collaborate"* (scrolls smoothly to `#contact`).
   - **Cinematic Showreel Container**:
     - 16:9 widescreen aspect ratio with 16px rounded corners.
     - Minimalist circular play button with hover scaling and backdrop blur.
     - Label: `SELECTED SHOWREEL / 2026` + `4K UHD • Stereo / Atmos`.
     - Interactive modal theater with time scrubber, play/pause, volume, timecode, and keyboard escape.

3. **SECTION 03 — Selected Work**
   - Eyebrow: `SELECTED PROJECTS`
   - Headline: *"Different Stories. One Vision."*
   - Category filter pills:
     1. Short-form Content
     2. YouTube Long-form
     3. Cinematic Teasers
     4. Brand & Promotional Videos
   - Responsive 2-column grid on desktop/tablet, 1-column on mobile.
   - Each project card features: video thumbnail, project title, category tag, duration badge, client label, short description, and interactive preview trigger.
   - **Case Study Detail Modal**:
     - Large interactive video player (supports play, pause, seek, volume, timecode).
     - Full project overview.
     - My Role (Lead Editor, Colorist, Sound Designer, etc.).
     - Editing Approach & Craft (pacing, cuts, sound design, color grading).
     - Performance Impact / Results (e.g. view count, retention rate, Vimeo Staff Pick).
     - Software / Pipeline tags (DaVinci Resolve Studio, Premiere Pro, etc.).
     - Clear placeholder specimen badge.

4. **SECTION 04 — Services**
   - Eyebrow: `WHAT I DO`
   - Headline: *"More Than Just Editing."*
   - 4 monochrome service blocks:
     - **01: Short-form Video Editing** (Reels, TikToks, Shorts, hooks, pacing, retention).
     - **02: Long-form Video Editing** (YouTube essays, travel docs, story structure, audio mixing).
     - **03: Cinematic Editing** (Trailers, teasers, film sequences, ACES/Dehancer color grading).
     - **04: Brand & Promotional Content** (Product films, commercial cadence, multi-ratio exports).
   - Bespoke minimalist icons, key deliverables checklists, and hover elevation.

5. **SECTION 05 — Results & Impact**
   - Eyebrow: `THE IMPACT`
   - Headline: *"Creative Work. Measurable Impact."*
   - Oversized animated counter numbers (triggered on viewport intersection):
     - **1.7M+** — Highest views on a single video project.
     - **500K+** — Multiple videos crossing the 500k milestone.
     - **10K+** — YouTube subscriber growth driven by pacing.
     - **30K+** — Consistent average content reach.
   - Ethical context note highlighting that these reflect past creator achievements and not universal client guarantees.

6. **SECTION 06 — About Me**
   - Eyebrow: `BEHIND THE EDITS`
   - Headline: *"The Creative Behind the Timeline."*
   - Editorial split layout:
     - Left: Monochrome editorial portrait placeholder with film metadata (`24FPS / 35MM`) and software toolkit badges.
     - Right: Professional introduction, editing philosophy quote, creative approach breakdown, and digital marketing / audience retention expertise.

7. **SECTION 07 — My Workflow**
   - Eyebrow: `THE PROCESS`
   - Headline: *"From Raw Footage to Final Cut."*
   - 5-step structured post-production timeline:
     - **STEP 01 — Understand**: Vision, audience targets, deliverables.
     - **STEP 02 — Plan**: Storyboard arc, pacing, temp tracks, stringouts.
     - **STEP 03 — Create**: Rough assembly, sound design, kinetics, grade.
     - **STEP 04 — Refine**: Frame.io time-coded client revisions, audio polish.
     - **STEP 05 — Deliver**: Master 4K ProRes/H.265, vertical social cuts, project archives.
   - Horizontal interactive timeline on desktop with connecting lines; vertical timeline on mobile.

8. **SECTION 08 — Contact / Final CTA & Footer**
   - Eyebrow: `HAVE A PROJECT IN MIND?`
   - Headline: *"Let's make something worth watching."*
   - Direct communication channels: Email, WhatsApp, Instagram, LinkedIn, and current availability status.
   - **Functional Contact Form**:
     - Client Name, Email, Project Category, Budget Tier, and Message.
     - Real-time client-side validation (email regex, length constraints).
     - Generates pre-populated `mailto:` drafts and offers one-click clipboard copying with clear transparent feedback (no fake success states).
   - **Footer**: Personal brand name, copyright 2026, jump navigation, social links, and smooth back-to-top interaction.

---

## ✦ Central Configuration File

All texts, projects, showreels, services, statistics, contact info, and social channels are controlled in a single central data file:

📍 **`src/data/portfolioData.ts`**

### To customize your portfolio:
1. Open `src/data/portfolioData.ts`.
2. Update `personalName` to your real name (e.g., `"KAI CHEN"`).
3. Replace the `showreel.videoUrl` and `showreel.thumbnailUrl` with your personal showreel file or CDN link.
4. Replace or add your actual portfolio projects inside the `projects` array.
5. Update your direct contact channels (email, phone/WhatsApp, social handles).
6. Adjust your stats or services as needed.

---

## ✦ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
```

### 4. Run production server
```bash
npm run start
```

---

## ✦ Deployment

This project is fully optimized for **Vercel**, **Netlify**, or any Node.js hosting platform:
- **Zero configuration required**: Simply connect your GitHub repository to Vercel or Netlify.
- Fast static page generation (`SSG`) ensures lightning-fast load times globally.
- SEO-ready metadata and Open Graph tags configured in `src/app/layout.tsx`.
