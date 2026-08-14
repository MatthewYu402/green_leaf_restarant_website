import './BentoItemList.css'

interface BentoItem {
  name: string;
  description?: string;
  price: string;
  image?: string; // optional — renders without a thumbnail if omitted
}

interface BentoItemListProps {
  items: BentoItem[];
}

export default function BentoItemList({ items }: BentoItemListProps) {
  return (
    <div className="bento-item-list">
      {items.map((item) => (
        <div className={`bento-item ${item.image ? 'has-image' : ''}`} key={item.name}>
          {item.image && (
            <img src={item.image} alt="" className="bento-item-image" />
          )}
          <div className="bento-item-content">
            <h4 className="bento-item-name">{item.name}</h4>
            {item.description && (
              <p className="bento-item-description">{item.description}</p>
            )}
            <span className="bento-item-price">{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}