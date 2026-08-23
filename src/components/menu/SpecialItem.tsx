import './SpecialItem.css'
import ItemPhotoTrigger from '../shared/ItemPhotoTrigger';

interface SpecialItemProps {
  id?: string;
  name: string;
  price: string;
  description: string;
  image?: string;
}

export default function SpecialItem({ id, name, price, description, image }: SpecialItemProps) {
  return (
    <div className="special-item">
      <div className="special-item-content">
        <div className="special-item-header">
          <span className="special-item-id-name-group">
            {id && <span className="special-item-id">{id}</span>}
            <span className="special-item-name-group">
              <h3 className="special-item-name">{name}</h3>
              {image && <ItemPhotoTrigger image={image} alt={name} />}
            </span>
          </span>
        </div>
        {description && (
          <p className="special-item-description">{description}</p>
        )}
      </div>
      <div className="special-item-footer">
        <span className="special-item-price">{price}</span>
      </div>
    </div>
  );
}