import './DrinksDesserts.css';
import type { MenuItem } from '@/types';

interface DrinksCardContent {
  title: string;
  icon: string;
  /** Large faded icon in the card's top-right corner. */
  backgroundIcon?: string;
  items: MenuItem[];
}

interface DrinksDessertsProps {
  cold: DrinksCardContent;
  warm: DrinksCardContent;
  dessert: DrinksCardContent;
  image: string;
  imageAlt?: string;
}

/** Cold drinks, hot drinks, and desserts cards stacked beside a photo. */
export default function DrinksDesserts({ cold, warm, dessert, image, imageAlt = '' }: DrinksDessertsProps) {
  return (
    <div className="drinks-desserts-grid">
      <div className="drinks-desserts-column">
        <DrinksCard tone="cold" columns={2} {...cold} />
        <DrinksCard tone="warm" columns={2} {...warm} />
        <DrinksCard tone="dessert" columns={1} {...dessert} />
      </div>

      <div className="drinks-desserts-column">
        <div className="drinks-photo-wrap">
          <img src={image} alt={imageAlt} className="drinks-photo" />
        </div>
      </div>
    </div>
  );
}

function DrinksCard({
  tone,
  columns,
  title,
  icon,
  backgroundIcon,
  items,
}: DrinksCardContent & { tone: 'cold' | 'warm' | 'dessert'; columns: 1 | 2 }) {
  return (
    <div className={tone === 'dessert' ? 'drinks-card drinks-card--dessert' : 'drinks-card'}>
      <img src={backgroundIcon} className="drinks-card-bg-icon" alt="" />
      <div className="drinks-card-header">
        <span className={`drinks-card-icon-chip drinks-card-icon-chip--${tone}`}>
          <img src={icon} alt="" />
        </span>
        <h2 className="drinks-card-title">{title}</h2>
      </div>
      <div className={`drinks-card-grid drinks-card-grid--${columns}col`}>
        {items.map((item) => (
          <div className="drink-row" key={item.name}>
            <div className="drink-row-header">
              <h3 className="drink-row-name">{item.name}</h3>
              <span className="drink-row-price">{item.price}</span>
            </div>
            {item.description && <p className="drink-row-description">{item.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
