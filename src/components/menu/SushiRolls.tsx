import './SushiRolls.css'

interface RollData {
  name: string;
  price: string;
  description: string;
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
        {items.map((item) => (
          <div className="anniversary-roll-card" key={item.name}>
            <div className="anniversary-roll-card-header">
              <h3 className="anniversary-roll-name">{item.name}</h3>
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