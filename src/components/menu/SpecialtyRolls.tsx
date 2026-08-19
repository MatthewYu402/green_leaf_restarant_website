import './SpecialtyRolls.css'
import ItemPhotoTrigger from '../shared/ItemPhotoTrigger';

interface RollData {
  name: string;
  description: string;
  price: string;
  image?: string;
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
          {items.map((item, i) => (
            <div className="specialty-roll-item" key={i}>
              <div className="specialty-roll-item-header">
                <span className="specialty-roll-name-group">
                  <h3 className="specialty-roll-name">{item.name}</h3>
                  {item.image && <ItemPhotoTrigger image={item.image} alt={item.name} />}
                </span>
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