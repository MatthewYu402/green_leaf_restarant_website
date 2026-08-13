import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

// Images
import restaurantLogo from "../../assets/green-leaf-logo.svg";

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu'},
  { label: 'Sushi Menu', href: '/sushi' },
  { label: 'Specials', href: '/specials' },
  { label: 'About Us', href: '/about' },
];

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={`navbar ${isHome ? 'navbar-floating' : 'navbar-solid'}`}>
      <img src={restaurantLogo} className="logo" />
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
      <a className="cell-num" href="tel:4107710030">
        Call to Reserve
      </a>
    </nav>
  );
}