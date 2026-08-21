import "./MenuItem.css"
import ItemPhotoTrigger from '../shared/ItemPhotoTrigger';

interface MenuItemProps {
  id?: string;
  name: string;
  description: string;
  price: string;
  pieces?: number;
  image?: string;
}

export default function MenuItem({ id, name, description, price, pieces, image }: MenuItemProps) {
  return (
    <div className="menu-item">
      <div className="menu-item-header">
        <span className="menu-item-id-name-group">
          {id && <span className="menu-item-id">{id}</span>}
          <span className="menu-item-name-group">
            <h3 className="menu-item-name">{name}</h3>
            {image && <ItemPhotoTrigger image={image} alt={name} />}
          </span>
        </span>
        <span className="menu-item-price">{price}</span>
      </div>
      <div className="menu-item-details">
        <p className="menu-item-description">{description}</p>
        {pieces !== undefined && (
          <span className="menu-item-pieces">{pieces} pc</span>
        )}
      </div>
    </div>
  );
}