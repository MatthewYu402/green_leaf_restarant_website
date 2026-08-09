import './SpecialItem.css'

interface SpecialItemProps {
  id: string;
  name: string;
  price: string;
  description: string;
}

export default function SpecialItem({ id, name, price, description }: SpecialItemProps) {
  return (
    <div className="special-item">
      <div className="special-item-header">
        <span className="special-item-id">{id}</span>
        <h3 className="special-item-name">{name}</h3>
        <span className="special-item-price">{price}</span>
      </div>
      {description && (
        <p className="special-item-description">{description}</p>
      )}
    </div>
  );
}