# 🚀 Alex Chen — Developer Portfolio

A modern, futuristic personal portfolio built with **React + Vite + Tailwind CSS**.

## ✨ Features

- **Dark / Light theme toggle** (persists via localStorage)
- **Smooth scroll animations** (IntersectionObserver-based fade-up reveals)
- **Sections:** Hero, About, Skills, Projects, Experience, Coding Profiles, Contact
- **Progress bar skills visualization** with per-category color themes
- **Glassmorphism cards** with hover glow effects
- **Animated hero** with floating badges and ambient glow orbs
- **Timeline-style experience** section
- **Coding profile cards** (GitHub, LeetCode, LinkedIn) with stat grids
- **Contact form** with simulated submission state
- **Fully responsive** — mobile-first layout
- **Custom scrollbar, noise texture overlay, grid background**

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav with mobile menu + theme toggle
│   │   ├── Hero.jsx            # Landing section with animated badges
│   │   ├── About.jsx           # Bio + stats grid
│   │   ├── Skills.jsx          # Progress bars + tech badge cloud
│   │   ├── Projects.jsx        # Project cards with status badges
│   │   ├── Experience.jsx      # Timeline (work + education)
│   │   ├── CodingProfiles.jsx  # GitHub / LeetCode / LinkedIn cards
│   │   ├── Contact.jsx         # Form + social links
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js        # ← EDIT THIS to personalize everything
│   ├── hooks/
│   │   ├── useIntersectionObserver.js  # Scroll reveal hook
│   │   └── useTheme.js                 # Dark/light theme hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Custom styles + Tailwind base
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Setup & Run Locally

### Prerequisites
- Node.js v18+ 
- npm or pnpm

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → Opens at http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 🎨 Personalization

All content lives in **`src/data/portfolio.js`** — just edit that one file:

```js
// Your basic info
export const personalInfo = {
  name: "Your Name",
  role: "Your Role",
  tagline: "Your tagline...",
  email: "you@email.com",
  location: "City, Country",
  resumeUrl: "/resume.pdf",  // Add your resume to /public/
};

// Social links
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  leetcode: "https://leetcode.com/yourusername",
};

// Skills, projects, experience, coding profiles...
// All in the same file — fully documented inline
```

### Adding a Profile Photo
In `Hero.jsx`, replace the initials placeholder with an `<img>` tag:
```jsx
// Replace the initials div with:
<img src="/avatar.jpg" alt="Your Name" className="w-full h-full object-cover" />
```
Then add your image to `/public/avatar.jpg`.

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `accent` | `#00f5c4` | Primary color, highlights, glows |
| `accent2` | `#6366f1` | Secondary / gradient end |
| Font (sans) | Sora | Headings + body |
| Font (mono) | JetBrains Mono | Labels, badges, code |

## 📦 Tech Stack

- **React 18** — UI framework
- **Vite** — Blazing fast build tool
- **Tailwind CSS 3** — Utility-first styling
- **Lucide React** — Icon library
- **IntersectionObserver API** — Scroll animations (no external dep)
- **Google Fonts** — Sora + JetBrains Mono

## 🚀 Deploy

### Vercel (recommended)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag & drop the `dist/` folder to netlify.com/drop
```

### GitHub Pages
```bash
# In vite.config.js, add: base: '/repo-name/'
npm run build
# Push dist/ to gh-pages branch
```

---

Made with ♥ using React + Vite + Tailwind CSS
