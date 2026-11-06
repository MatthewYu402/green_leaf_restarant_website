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
  content.ts                # ALL site content: menus, prices, photos, copy, hours, contact info
  types.ts                  # MenuItem, MenuGroup, NigiriItem, GalleryImage, PdfLink
  App.tsx                   # routes + site chrome (header, footer, lightbox)
  main.tsx                  # BrowserRouter wrapper, font imports
  index.css                 # :root design tokens, global resets, scrollbar styling
  assets/                   # icons, images (grouped by menu area), menu PDFs
  components/
    layout/                 # site chrome
      Navbar.tsx            # floating on Home, solid elsewhere; mobile drawer
      PageHeader.tsx        # Navbar + per-route banner + BottomNav
      BottomNav.tsx         # mobile tab bar (icons in NavIcons.tsx)
      Footer.tsx
      ScrollToTop.tsx       # resets #root scroll on every route change
    ui/                     # generic building blocks, no content
      Section.tsx           # reveal-on-scroll wrapper (reveal="slide" | "fade")
      Divider.tsx           # gold rule with an optional icon
      GalleryCarousel.tsx   # swipeable photo strip
      Lightbox.tsx          # full-screen photo viewer (provider + useLightbox)
      PhotoButton.tsx       # camera icon next to a menu item that has a photo
      PdfLinks.tsx          # "View … Menu (PDF)" links
      RichText.tsx          # renders **bold** and \n from content strings
    menu/                   # menu displays — all take content as props
      MenuList.tsx          # titled list of rows (flat or grouped)
      MenuCard.tsx          # bordered card for one item; MenuCardGrid.tsx lays them out
      MenuAccordion.tsx     # mobile tap-to-expand category
      MenuPanel.tsx         # off-white panel holding side-by-side MenuLists
      FeaturedMenuSection.tsx  # big photo + featured cards + grid
      RollGrid.tsx          # roll cards with pill prices (Sushi page)
      NigiriSashimiGrid.tsx # nigiri / sashimi dual-price cards
      DrinksDesserts.tsx    # cold / hot / dessert cards beside a photo
      LunchSpecials.tsx     # maki cards + bento card
      DinnerSpecials.tsx    # Chef's Special banner + card grid
    home/                   # Home page sections
      SignatureSection.tsx, BeyondTheMenu.tsx, StoryTeaser.tsx, PeekInside.tsx
  hooks/
    useInView.ts            # IntersectionObserver rooted on #root, fires once
    useScrolledPast.ts      # "has #root scrolled past N px?" (navbar, header shrink)
    useScrollLock.ts        # freezes #root while an overlay is open
    useScrollHint.ts        # Home's bottom "scroll down" arrow
    useSectionSnapScroll.ts # Home's glide-to-next-section on wheel
    useScrollbarFade.ts
  utils/
    scrollRoot.ts           # getScrollRoot() — the #root scroll container
  pages/                    # one file per route; wire content.ts into components
```

Each component has a matching `.css` file next to it.

## Editing content

Everything a visitor reads or sees lives in `src/content.ts`: every menu item and price, photos, section titles, hours, phone, address, and page copy. To change a price, add a roll, swap a photo, or update hours, edit only that file. Components never hard-code content.

- Add an item: add an object to the right `items` array, e.g. `{ name: 'Tokyo', price: '$14.95', description: '…' }`. `description`, `image`, and `id` (an "L1"-style badge) are optional.
- Add a photo to an item: import the image at the top of `content.ts` and set `image:`. A camera button appears automatically.
- Desktop and mobile layouts read the same arrays, so they stay in sync.

## Key files

| File | Why it matters |
| --- | --- |
| `src/content.ts` | All content. Start here for any text, price, or photo change. |
| `src/index.css` | All design tokens (`:root` variables), the `#root` scroll container, and the scrollbar styling. |
| `src/App.tsx` | Route definitions. Its import order also sets global CSS order (see gotchas). |
| `src/components/layout/PageHeader.tsx` | `MENU_ROUTES` controls which routes get the tall, shrinking header; titles come from `pageHeaders` in `content.ts`. |
| `src/pages/MainMenuPage.css` | Per-section restyling of `MenuList` (Seafood, Sushi & Sashimi, Teriyaki). |

## Architecture notes

### `#root` is the scroll container

`#root` has `height: 100svh; overflow-y: scroll`, so it scrolls, not `window` or `<html>`. All scroll logic goes through `getScrollRoot()` in `src/utils/scrollRoot.ts`.

### PageHeader: fixed visual plus in-flow spacer

On non-home pages, `PageHeader` renders two elements:

1. `.page-header-visual` is `position: fixed` behind the navbar. It holds the background image and title text, and shrinks on scroll on menu pages.
2. `.page-header-spacer` is an in-flow element of the same height that reserves space so page content starts below the header. It needs `flex-shrink: 0`, because `#root` is a flex column and an empty child would otherwise collapse to zero height.

To add a menu page, add its path to `MENU_ROUTES`. To give it a title and subtitle, add it to `pageHeaders` in `content.ts`. Keys must match the route paths in `App.tsx` exactly.

### Menu components

`MenuList`, `MenuCard`, and `MenuAccordion` are generic and take `MenuItem[]`. Each section on the main menu restyles them through a parent class (`MenuPanel.css`, `MainMenuPage.css`) instead of adding variants to the components.

### Desktop and mobile layouts

Most menu pages render separate desktop and mobile trees and switch between them at `max-width: 1024px`. Both are built from the same `content.ts` arrays, so content stays in sync.

### Scroll animations

- `useInView` uses an `IntersectionObserver` rooted on `#root`, fires once, and then stays visible.
- `Section` wraps content and applies `reveal-block-slide` / `reveal-block-fade` via its `reveal` prop.
- Home's scroll-to-section animation (`useSectionSnapScroll`) uses `requestAnimationFrame` and cancels it on unmount. Without that cleanup, navigating away mid-animation overrides `ScrollToTop`.

### Imports

The `@` alias maps to `src/` (configured in `vite.config.ts` and `tsconfig.json`), so assets are imported like `@/assets/icons/gold-leaf.svg`.

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
- Route strings live in `App.tsx` and in `content.ts` (`navLinks`, `bottomNavTabs`, `pageHeaders`, button links). Typos fail silently, so keep them in sync.
- CSS is global, and bundle order follows import order: each component imports its own `.css` first, and page CSS loads before the component CSS it overrides. Ties between equally specific selectors go to whichever file loads later, so reordering imports can change the look.

## Status and roadmap

- [x] Wire up `/dinner_specials` and `/about` routes (nav links exist, pages don't)
- [x] Hamburger menu and a full mobile navbar pass
- [x] Replace placeholder images (for example the Featured Bento Boxes filler)
- [x] Remove any leftover scrollbar-fade code from `App.tsx`
- [x] Custom domain and business email for the restaurant

## Browser support

Targets current evergreen browsers. Custom scrollbar styling is WebKit-only (Chrome, Safari, Edge).
