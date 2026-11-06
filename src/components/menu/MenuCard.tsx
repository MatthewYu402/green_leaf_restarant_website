import './MenuCard.css';
import type { MenuItem } from '@/types';
import PhotoButton from '../ui/PhotoButton';

/** A bordered card for one menu item: optional ID badge, name, description, price bottom-right. */
export default function MenuCard({ id, name, price, description, image }: MenuItem) {
  return (
    <div className="menu-card">
      <div className="menu-card-content">
        <div className="menu-card-header">
          {id && <span className="menu-card-id">{id}</span>}
          <span className="menu-card-name-group">
            <h3 className="menu-card-name">{name}</h3>
            {image && <PhotoButton image={image} alt={name} />}
          </span>
        </div>
        {description && <p className="menu-card-description">{description}</p>}
      </div>
      <div className="menu-card-footer">
        <span className="menu-card-price">{price}</span>
      </div>
    </div>
  );
}
