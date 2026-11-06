import './MenuList.css';
import type { MenuGroup, MenuItem } from '@/types';
import PhotoButton from '../ui/PhotoButton';

interface MenuListProps {
  title: string;
  /** A flat list of items. Use `groups` instead for sub-headed lists. */
  items?: MenuItem[];
  groups?: MenuGroup[];
  className?: string;
}

/**
 * A titled list of menu rows (name + price on one line, description below).
 * Each placement restyles it via a parent class — see MainMenuPage.css.
 */
export default function MenuList({ title, items, groups, className }: MenuListProps) {
  const renderGroups: Partial<MenuGroup>[] = groups ?? (items ? [{ items }] : []);

  return (
    <div className={className ? `menu-list ${className}` : 'menu-list'}>
      <h2 className="menu-list-title">{title}</h2>
      <div className="menu-list-groups">
        {renderGroups.map((group, i) => (
          <div className={`menu-list-group menu-list-group--${group.layout ?? 'full'}`} key={group.subheading ?? i}>
            {group.subheading && <h3 className="menu-list-subheading">{group.subheading}</h3>}
            <div className="menu-list-items">
              {group.items?.map((item, j) => <MenuListRow key={j} {...item} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MenuListRow({ id, name, description, price, image }: MenuItem) {
  return (
    <div className="menu-item">
      <div className="menu-item-header">
        <span className="menu-item-id-name-group">
          {id && <span className="menu-item-id">{id}</span>}
          <span className="menu-item-name-group">
            <h3 className="menu-item-name">{name}</h3>
            {image && <PhotoButton image={image} alt={name} />}
          </span>
        </span>
        <span className="menu-item-price">{price}</span>
      </div>
      <div className="menu-item-details">
        <p className="menu-item-description">{description}</p>
      </div>
    </div>
  );
}
