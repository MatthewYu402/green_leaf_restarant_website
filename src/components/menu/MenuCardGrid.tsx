import './MenuCardGrid.css';
import type { MenuItem } from '@/types';
import MenuCard from './MenuCard';

interface MenuCardGridProps {
  items: MenuItem[];
  className?: string;
}

/** Two-column grid of MenuCards. */
export default function MenuCardGrid({ items, className }: MenuCardGridProps) {
  return (
    <div className={className ? `menu-card-grid ${className}` : 'menu-card-grid'}>
      {items.map((item, i) => (
        <MenuCard key={i} {...item} />
      ))}
    </div>
  );
}
