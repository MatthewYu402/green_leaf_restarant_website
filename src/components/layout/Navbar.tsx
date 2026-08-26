import { useEffect, useState } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import './Navbar.css';

// Images
import restaurantLogo from "@/assets/images/green-leaf-logo.png";

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Main Menu', href: '/menu' },
  { label: 'Sushi Menu', href: '/sushi' },
  { label: 'Specials', href: '/specials' },
  { label: 'About Us', href: '/about' },
];

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Floating -> scrolled swap on Home, based on scroll past the hero.
  // Moved here from HomePage.tsx (was manual DOM classList mutation) so it's
  // ordinary React state that lives with the rest of the navbar's own state,
  // and resets automatically on route change via the isHome dependency.
  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }

    const scrollContainer = document.getElementById('root');
    if (!scrollContainer) return;

    const heroHeight = window.innerHeight;

    const handleScroll = () => {
      setScrolled(scrollContainer.scrollTop > heroHeight * 0.8);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Close the drawer on every route change.
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  // Lock the scroll container while the drawer is open, so the page behind
  // the full-screen drawer can't scroll underneath it.
  useEffect(() => {
    const scrollContainer = document.getElementById('root');
    if (!scrollContainer) return;
    scrollContainer.style.overflowY = drawerOpen ? 'hidden' : 'scroll';
    return () => {
      scrollContainer.style.overflowY = 'scroll';
    };
  }, [drawerOpen]);

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
          <img src={restaurantLogo} className="logo" alt="Green Leaf Sushi" />
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

        <a className="cell-num" href="tel:4107710030">
          <span className="cell-num-full">Call to Reserve</span>
          <span className="cell-num-short">Call</span>
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