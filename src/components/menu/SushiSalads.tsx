import './SushiSalads.css'
import ItemPhotoTrigger from '../shared/ItemPhotoTrigger';

interface SaladData {
  name: string;
  description: string;
  price: string;
  image?: string;
}

interface SushiSaladsProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  items: SaladData[];
  className?: string;
}

export default function SushiSalads({ title, subtitle, image, imageAlt = "", items, className = "" }: SushiSaladsProps) {
  return (
    <div className={`sushi-salads-section ${className}`.trim()}>
      <div className="sushi-salads-image-wrap">
        <img src={image} alt={imageAlt} className="sushi-salads-image" />
      </div>
      <div className="sushi-salads-content">
        <h2 className="sushi-salads-title">{title}</h2>
        {subtitle && <p className="sushi-salads-subtitle">{subtitle}</p>}
        <div className="sushi-salads-grid">
          {items.map((item, i) => (
            <div className="sushi-salad-item" key={i}>
              <div className="sushi-salad-item-header">
                <span className="sushi-salad-name-group">
                  <h3 className="sushi-salad-name">{item.name}</h3>
                  {item.image && <ItemPhotoTrigger image={item.image} alt={item.name} />}
                </span>
                <span className="sushi-salad-price">{item.price}</span>
              </div>
              {item.description && (
                <p className="sushi-salad-description">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}