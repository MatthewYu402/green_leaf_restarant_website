# Green Leaf Sushi

A responsive restaurant website for Green Leaf, a modern fusion sushi and Asian cuisine restaurant. Built with React, TypeScript, and Vite, with hand-written CSS and no UI or animation libraries.

## Features

- **Home page** with a full-viewport hero, an animated dark-to-image reveal, and a floating navbar that turns frosted-glass on scroll.
- **Directional scroll-to-section** on Home: scrolling down into an unvisited section eases smoothly into place once, then scrolling is free.
- **Full menu** organized by category (appetizers, soups and salads, grill and kitchen, sushi and sashimi, noodles, vegetarian, teriyaki and tempura, lunch specials, drinks and desserts).
- **Sushi menu** with a featured roll and lists of specialty and anniversary rolls.
- **Specials page** with the Chef's Special and dinner specials.
- **Responsive layout** with a 1024px breakpoint. On mobile, the menu collapses into accordions and the Chef's Feature becomes an image card.
- **Shared page header** on menu pages: a fixed background that shrinks on scroll, with route-driven titles.
- **Scroll-triggered reveal animations** that play once per element.

## Tech stack

- React and TypeScript
- Vite (build tool and dev server)
- react-router-dom (client-side routing)
- Plain CSS with custom properties for theming (no CSS framework)
- Fonts: Plus Jakarta Sans (body) and Libre Caslon Text (headings)

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  assets/
    icons/                  # SVG icons used in dividers and section headers
    images/                 # photos, grouped by menu area
      appetizers/
      soups-salads/
      specials/
      sneak-peak-images/    # hero/section images for menu categories
  components/
    ScrollToTop.tsx         # resets #root scroll to the top on every route change
    layout/
      Navbar.tsx            # floating pill on Home, solid bar elsewhere
      PageHeader.tsx        # fixed header visual + in-flow spacer for non-home pages
    menu/
      MenuItem.tsx          # name / price / description / optional pieces row
      MenuOptions.tsx       # title + divider + list of MenuItems (flat or grouped)
      MenuCategory.tsx      # optional image + MenuOptions in a card
      FeaturedMenuSection.tsx
      DrinksDesserts.tsx
      MiddayMuse.tsx        # lunch specials (L1-L12), desktop layout
      SpecialItemGrid.tsx   # card grid for numbered specials
      BentoItemList.tsx
      DinnerSpecials.tsx    # Chef's Special + dinner grid (exports shared data)
      RollAccordion.tsx     # mobile accordion; supports groups and item ID badges
    sections/
      SignatureSection.tsx  # home page signature roll section
      DailySpecials.tsx     # home page section
    shared/
      Section.tsx           # fade/slide-in-on-scroll wrapper
      Divider.tsx           # icon divider with flanking lines
      ItemPhotoTrigger.tsx  # photo preview trigger for menu items
  hooks/
    useInView.ts            # IntersectionObserver hook, triggers once
  pages/
    Home.tsx
    MainMenuPage.tsx
    SushiMenu.tsx
    SpecialsPage.tsx
  App.tsx                   # routes, ScrollToTop, PageHeader
  main.tsx                  # BrowserRouter wrapper
  index.css                 # :root design tokens, global resets, scrollbar styling
```

Each component has a matching `.css` file next to it.

## Key files

| File | Why it matters |
| --- | --- |
| `src/index.css` | All design tokens (`:root` variables), the `#root` scroll container, and the scrollbar styling. |
| `src/App.tsx` | Route definitions and the global `ScrollToTop` and `PageHeader`. |
| `src/components/layout/PageHeader.tsx` | `MENU_ROUTES` and `PAGE_HEADERS` control which routes get the tall header and which get a title. |
| `src/pages/MainMenuPage.tsx` | Holds the menu data and renders both the desktop layout and the mobile accordions from the same arrays. |
| `src/pages/Home.tsx` | Navbar scroll-style toggle and the scroll-to-section animation. |
| `src/components/menu/MiddayMuse.tsx` | Lunch specials data (`MAKI_SPECIALS`, `BENTO_BOXES`), exported and reused by the mobile accordion. |
| `src/components/menu/DinnerSpecials.tsx` | Exports `CHEF_SPECIAL`, `ChefSpecialImage`, and `DINNER_GRID_ITEMS`, reused on the mobile Specials layout. |

## Architecture notes

### `#root` is the scroll container

`#root` has `height: 100svh; overflow-y: scroll`, so it scrolls, not `window` or `<html>`. All scroll logic uses `document.getElementById('root')`.

### PageHeader: fixed visual plus in-flow spacer

On non-home pages, `PageHeader` renders two elements:

1. `.page-header-visual` is `position: fixed` behind the navbar. It holds the background image and title text, and shrinks on scroll on menu pages.
2. `.page-header-spacer` is an in-flow element of the same height that reserves space so page content starts below the header. It needs `flex-shrink: 0`, because `#root` is a flex column and an empty child would otherwise collapse to zero height.

To add a menu page, add its path to `MENU_ROUTES`. To give it a title and subtitle, add it to `PAGE_HEADERS`. Keys must match the route paths in `App.tsx` exactly.

### Menu components

```
MenuCategory (optional image, wraps MenuOptions)
  └── MenuOptions (title, divider, list or groups)
        └── MenuItem x N
```

`MenuItem` and `MenuOptions` are generic. Each section on the main menu restyles them through scoped overrides in `MainMenuPage.css` instead of adding variants to the components.

### Desktop and mobile layouts

Most menu pages render separate desktop and mobile trees and switch between them at `max-width: 1024px`. Both are built from the same data arrays, so content stays in sync. On the main menu, `toAccordionItems` and `toAccordionGroups` convert menu data into the shape `RollAccordion` expects, including an optional `id` that renders as an L1-L12 style badge.

### Scroll animations

- `useInView` uses an `IntersectionObserver` rooted on `#root`, fires once, and then stays visible.
- `Section` wraps content and applies reveal classes such as `reveal-block-slide` and `reveal-block-fade`.
- Home's scroll-to-section animation uses `requestAnimationFrame` and cancels it on unmount. Without that cleanup, navigating away mid-animation overrides `ScrollToTop`.

### Imports

The `@` alias maps to `src/` (configured in `vite.config.ts` and `tsconfig.json`), so assets are imported like `@/assets/icons/gold-leaf.svg`. Components still use relative paths.

## Design system

Tokens live in `:root` in `src/index.css`. The site is light-mode only (`color-scheme: light`).

- **Greens:** `--green-dark`, `--green-nav` for backgrounds and the navbar
- **Golds:** `--gold-light`, `--gold-medium`, `--gold-accent`, `--gold-dark`, `--gold-border` for accents, prices, and dividers
- **Text:** `--text-dark`, `--text-white`, `--gray-dark`, `--gray-medium`
- **Surfaces:** `--white`, `--offwhite`, `--gray-div`, `--gray-border`
- **Type:** `--sans` (Plus Jakarta Sans), `--libre` (Libre Caslon Text)
- **Layout:** `--navbar-height-mobile`, `--mobile-page-margin`

Referencing a custom property that isn't defined invalidates the whole declaration (for example `border: 1px solid var(--typo)` becomes no border). If a style silently disappears, check the variable name first.

The scrollbar is a permanent dark-grey track with a light-grey thumb, using WebKit-only `::-webkit-scrollbar` styling. Firefox shows its default scrollbar.

## Conventions and gotchas

- `max-width` is a ceiling, not a target. Pair it with `width: 100%` when an element should fill space inside a flex container.
- Empty flex children collapse in a column container. Use `flex-shrink: 0` on spacers.
- A `margin` shorthand after `margin-top` in the same rule overwrites it.
- Elements that inherit text color only work by coincidence. Set `color` explicitly on components reused across pages with different backgrounds.
- Any `requestAnimationFrame` loop started in an effect must be cancelled in the effect's cleanup.
- Route strings are hard-coded in several places (`App.tsx`, `Navbar.tsx`, `PageHeader.tsx`). Typos fail silently, so keep them in sync.

## Status and roadmap

- [ ] Wire up `/dinner_specials` and `/about` routes (nav links exist, pages don't)
- [ ] Hamburger menu and a full mobile navbar pass
- [ ] Replace placeholder images (for example the Featured Bento Boxes filler)
- [ ] Remove any leftover scrollbar-fade code from `App.tsx`
- [ ] Custom domain and business email for the restaurant

## Browser support

Targets current evergreen browsers. Custom scrollbar styling is WebKit-only (Chrome, Safari, Edge).
