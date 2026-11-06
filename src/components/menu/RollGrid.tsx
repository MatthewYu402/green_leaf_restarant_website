import './RollGrid.css';
import type { MenuItem } from '@/types';
import PhotoButton from '../ui/PhotoButton';

interface RollGridProps {
  title: string;
  subtitle?: string;
  items: MenuItem[];
  columns?: 2 | 3;
  /** Dark title instead of gold (every roll section but Anniversary Rolls). */
  plainTitle?: boolean;
}

/** A titled grid of white roll cards with a pill-shaped price. */
export default function RollGrid({ title, subtitle, items, columns = 2, plainTitle = false }: RollGridProps) {
  return (
    <div className={plainTitle ? 'roll-section roll-section--plain-title' : 'roll-section'}>
      <h2 className="roll-section-title">{title}</h2>
      {subtitle && <p className="roll-section-subtitle">{subtitle}</p>}
      <div className={`roll-section-grid roll-section-grid--${columns}col`}>
        {items.map((item, i) => (
          <div className="roll-card" key={i}>
            <div className="roll-card-header">
              <span className="roll-card-name-group">
                <h3 className="roll-card-name">{item.name}</h3>
                {item.image && <PhotoButton image={item.image} alt={item.name} />}
              </span>
              <span className="roll-card-price">{item.price}</span>
            </div>
            {item.description && <p className="roll-card-description">{item.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
