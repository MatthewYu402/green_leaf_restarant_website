import "./RollItem.css"

interface RollItemProps {
  name: string;
  description: string;
  price: string;
  pieces?: number; // Optional
}

export default function RollItem({ name, description, price, pieces }: RollItemProps) {
  return (
    <div className="roll-item">
      <div className="roll-item-header">
        <h3 className="roll-item-name">{name}</h3>
        <span className="roll-item-price">{price}</span>
      </div>
      <div className="roll-item-details">
        <p className="roll-item-description">{description}</p>
        {pieces !== undefined && (
          <span className="roll-item-pieces">{pieces} pc</span>
        )}
      </div>
    </div>
  );
}