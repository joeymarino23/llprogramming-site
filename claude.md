# L&L Programming Site

Static website showcasing iOS games developed by L&L Programming LLC.

## Tech Stack

- Pure HTML5, CSS3, vanilla JavaScript — no frameworks or build tools
- No package manager, bundler, or transpiler
- Static files served directly (no server-side processing)

## Project Structure

```
├── index.html              Main landing page
├── header.js               Shared navigation component (loaded on all pages)
├── app-ads.txt             Google AdMob publisher config
├── assets/                 Images organized by game (screenshots, heroes)
├── <game-name>/            Game landing pages (e.g., conquestofshadows/, birdvsevil/)
│   └── index.html
└── privacy/<game-name>/    Privacy policy pages per game
    └── index.html
```

Games: Conquest of Shadows, Bird vs Evil, Supernatural Slayer, War of the Heavens, Mermaid Maths, Play Bukharo, Star, Echoes of the Goetia.

## Conventions

### HTML
- Semantic HTML5: `<header>`, `<nav>`, `<main>`, `<section>` with proper heading hierarchy
- Accessibility: `aria-label`, `aria-current="page"`, `role` attributes, `:focus-visible` styles
- Each page is self-contained with inline `<style>` tags (no external CSS files)
- All pages include `header.js` via `<script src="/header.js?v=N"></script>` with version param for cache-busting

### CSS
- CSS custom properties on `:root` for theming (colors, shadows, max-width)
- Mobile-first responsive design with `clamp()` for fluid typography
- Breakpoint at 560px for mobile layouts
- BEM-like naming: `.hero`, `.hero-title`, `.hero-inner`, `.top-nav`, `.top-nav-inner`
- Modern features: CSS Grid, Flexbox, `backdrop-filter`, transitions, gradients

### JavaScript
- All JS wrapped in IIFE `(function() { ... })()` — no global variables
- Vanilla DOM API only (`querySelector`, `classList`, event listeners)
- Screenshot galleries use event delegation and keyboard navigation (arrow keys)
- `header.js` auto-detects the current page to highlight active nav link

### File Organization
- Game pages follow a consistent template structure — clone and modify when adding new games
- Images use `loading="lazy"` for performance
- Privacy policies exist in HTML (some also in Markdown/RTF) with GDPR/COPPA compliance

## Adding a New Game Page

1. Copy an existing game directory (e.g., `conquestofshadows/`)
2. Update the HTML content: title, descriptions, App Store link, screenshots
3. Add screenshot images to `assets/<game-name>/screenshots/`
4. Add a privacy policy page under `privacy/<game-name>/`
5. Add the game to the nav links array in `header.js`
6. Add a card for the game on the main `index.html` page

## Cache Busting

When updating `header.js`, increment the `?v=N` query parameter on every page that loads it.
