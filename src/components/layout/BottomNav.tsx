import { NavLink } from 'react-router-dom';
import './BottomNav.css';
import { bottomNavTabs } from '@/content';
import { HomeIcon, MenuIcon, SushiIcon, SpecialsIcon } from './NavIcons';

const ICONS = { home: HomeIcon, menu: MenuIcon, sushi: SushiIcon, specials: SpecialsIcon };

/** Mobile-only tab bar fixed to the bottom of the screen. */
export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Primary">
      <ul>
        {bottomNavTabs.map(({ label, href, icon }) => {
          const Icon = ICONS[icon];
          return (
            <li key={href}>
              <NavLink to={href} end={href === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
                <Icon />
                <span>{label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
