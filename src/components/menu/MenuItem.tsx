import "./MenuItem.css"

interface MenuItemProps {
  id?: string;
  name: string;
  description: string;
  price: string;
  pieces?: number;
}

export default function MenuItem({ id, name, description, price, pieces }: MenuItemProps) {
  return (
    <div className="menu-item">
      <div className="menu-item-header">
        {id && <span className="menu-item-id">{id}</span>}
        <h3 className="menu-item-name">{name}</h3>
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