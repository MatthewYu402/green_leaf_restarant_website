import { NavLink } from 'react-router-dom';
import './BottomNav.css';
import { HomeIcon, MenuIcon, SushiIcon, SpecialsIcon } from './NavIcons';

// About Us is intentionally left off the bottom bar (per decision — it's not
// what people need mid-order) and lives in the hamburger drawer instead.
const tabs = [
  { label: 'Home', href: '/', Icon: HomeIcon, end: true },
  { label: 'Menu', href: '/menu', Icon: MenuIcon, end: false },
  { label: 'Sushi', href: '/sushi', Icon: SushiIcon, end: false },
  { label: 'Specials', href: '/specials', Icon: SpecialsIcon, end: false },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Primary">
      <ul>
        {tabs.map(({ label, href, Icon, end }) => (
          <li key={href}>
            <NavLink
              to={href}
              end={end}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <Icon />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}