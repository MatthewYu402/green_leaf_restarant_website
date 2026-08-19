import './SushiRolls.css'
import ItemPhotoTrigger from '../shared/ItemPhotoTrigger';

interface RollData {
  name: string;
  price: string;
  description: string;
  image?: string;
}

interface SushiRollsProps {
  title: string;
  subtitle?: string;
  items: RollData[];
  columns?: 2 | 3;
  className?: string;
}

export default function SushiRolls({ title, subtitle, items, columns = 2, className = "" }: SushiRollsProps) {
  return (
    <div className={`anniversary-rolls-section ${className}`.trim()}>
      <h2 className="anniversary-rolls-title">{title}</h2>
      {subtitle && <p className="anniversary-rolls-subtitle">{subtitle}</p>}
      <div className={`anniversary-rolls-grid anniversary-rolls-grid--${columns}col`}>
        {items.map((item, i) => (
          <div className="anniversary-roll-card" key={i}>
            <div className="anniversary-roll-card-header">
              <span className="anniversary-roll-name-group">
                <h3 className="anniversary-roll-name">{item.name}</h3>
                {item.image && <ItemPhotoTrigger image={item.image} alt={item.name} />}
              </span>
              <span className="anniversary-roll-price">{item.price}</span>
            </div>
            {item.description && (
              <p className="anniversary-roll-description">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}