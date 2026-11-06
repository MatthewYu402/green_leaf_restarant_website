import './DinnerSpecials.css';
import type { MenuItem } from '@/types';
import MenuCardGrid from './MenuCardGrid';

interface DinnerSpecialsProps {
  title: string;
  subtitle: string;
  chefSpecial: {
    label: string;
    name: string;
    description: string;
    price: string;
    image: string;
    imageAlt: string;
    icon: string;
  };
  items: MenuItem[];
}

/** Desktop dinner specials: heading, a wide Chef's Special banner, then a card grid. */
export default function DinnerSpecials({ title, subtitle, chefSpecial, items }: DinnerSpecialsProps) {
  return (
    <div className="dinner-section">
      <h1 className="dinner-section-title">{title}</h1>
      <p className="dinner-section-subtitle">{subtitle}</p>

      <div className="dinner-chef-special">
        <img src={chefSpecial.image} className="dinner-chef-special-image" alt={chefSpecial.imageAlt} />
        <div className="dinner-chef-special-content">
          <img src={chefSpecial.icon} className="dinner-chef-special-icon" alt="" />
          <span className="dinner-chef-special-label">{chefSpecial.label}</span>
          <h2 className="dinner-chef-special-name">{chefSpecial.name}</h2>
          <p className="dinner-chef-special-description">{chefSpecial.description}</p>
          <div className="dinner-chef-special-footer">
            <span className="dinner-chef-special-price">{chefSpecial.price}</span>
          </div>
        </div>
      </div>

      <MenuCardGrid className="dinner-specials-grid" items={items} />
    </div>
  );
}
