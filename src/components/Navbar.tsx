import { NavLink } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Sushi Menu', href: '/sushi'},
  { label: 'Dinner Specials', href: '/dinner_special' },
  { label: 'About Us', href: '/about' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
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
      <button className="cell-num">Call (410)-771-0030</button>
    </nav>
  );
}