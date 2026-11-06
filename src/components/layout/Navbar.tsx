import { useEffect, useState } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import './Navbar.css';
import { business, navbar, navLinks } from '@/content';
import { useScrolledPast } from '@/hooks/useScrolledPast';
import { useScrollLock } from '@/hooks/useScrollLock';

/** Top bar: hamburger (mobile), logo, page links, and a call button. Floats over the Home hero. */
export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Home only: floating (transparent) navbar turns solid once scrolled past most of the hero.
  const scrolled = useScrolledPast(() => window.innerHeight * 0.8, isHome);

  // Close the drawer on every route change.
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  // The page behind the full-screen drawer can't scroll underneath it.
  useScrollLock(drawerOpen);

  return (
    <>
      <nav
        className={`navbar ${isHome ? 'navbar-floating' : 'navbar-solid'} ${scrolled ? 'scrolled' : ''}`}
      >
        <button
          type="button"
          className={`hamburger ${drawerOpen ? 'open' : ''}`}
          onClick={() => setDrawerOpen((open) => !open)}
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={drawerOpen}
          aria-controls="mobile-nav-drawer"
        >
          <span />
          <span />
          <span />
        </button>

        <Link to="/" className="logo-link" aria-label="Green Leaf Cuisine — Home">
          <img src={business.logo} className="logo" alt={business.name} />
        </Link>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a className="cell-num" href={`tel:${business.phone.tel}`}>
          <span className="cell-num-full">{navbar.callFull}</span>
          <span className="cell-num-short">{navbar.callShort}</span>
        </a>
      </nav>

      {/* Mobile-only: full-screen drawer, driven entirely by drawerOpen above. */}
      <div
        className={`nav-drawer-overlay ${drawerOpen ? 'open' : ''}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />
      <div
        id="mobile-nav-drawer"
        className={`nav-drawer ${drawerOpen ? 'open' : ''}`}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setDrawerOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}