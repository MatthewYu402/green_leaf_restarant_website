import './SpecialtyRolls.css'

interface RollData {
  name: string;
  description: string;
  price: string;
}

interface SpecialtyRollsProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  items: RollData[];
  className?: string;
}

export default function SpecialtyRolls({ title, subtitle, image, imageAlt = "", items, className = "" }: SpecialtyRollsProps) {
  return (
    <div className={`specialty-rolls-section ${className}`.trim()}>
      <div className="specialty-rolls-image-wrap">
        <img src={image} alt={imageAlt} className="specialty-rolls-image" />
      </div>
      <div className="specialty-rolls-content">
        <h2 className="specialty-rolls-title">{title}</h2>
        {subtitle && <p className="specialty-rolls-subtitle">{subtitle}</p>}
        <div className="specialty-rolls-list">
          {items.map((item) => (
            <div className="specialty-roll-item" key={item.name}>
              <div className="specialty-roll-item-header">
                <h3 className="specialty-roll-name">{item.name}</h3>
                <span className="specialty-roll-price">{item.price}</span>
              </div>
              {item.description && (
                <p className="specialty-roll-description">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}