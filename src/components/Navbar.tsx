import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu'},
  { label: 'Sushi Menu', href: '/sushi' },
  { label: 'Lunch Specials', href: '/lunch_specials' },
  { label: 'Dinner Specials', href: '/dinner_specials' },
  { label: 'About Us', href: '/about' },
];

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={`navbar ${isHome ? 'navbar-floating' : 'navbar-solid'}`}>
      <div className="logo">Green Leaf</div>
      <ul>
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
      <button className="cell-num">Call to Reserve</button>
    </nav>
  );
}