import './BentoItemList.css'
import ItemPhotoTrigger from '../shared/ItemPhotoTrigger';

interface BentoItem {
  id?: string;
  name: string;
  description?: string;
  price: string;
  image?: string;
}

interface BentoItemListProps {
  items: BentoItem[];
}

export default function BentoItemList({ items }: BentoItemListProps) {
  return (
    <div className="bento-item-list">
      {items.map((item) => (
        <div className={`bento-item ${item.image ? 'has-image' : ''}`} key={item.name}>
          <div className="bento-item-content">
            <div className="bento-item-header">
              {item.id && <span className="bento-item-id">{item.id}</span>}
              <span className="bento-item-name-group">
                <h4 className="bento-item-name">{item.name}</h4>
                {item.image && <ItemPhotoTrigger image={item.image} alt={item.name} />}
              </span>
            </div>
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