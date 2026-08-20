import './NigiriSashimi.css'
import ItemPhotoTrigger from '../shared/ItemPhotoTrigger';

interface NigiriSashimiItem {
  name: string;
  fillingNote?: string;
  nigiriPrice: string;
  sashimiPrice: string;
  image?: string;
}

interface NigiriSashimiProps {
  title: string;
  note: string;
  items: NigiriSashimiItem[];
  columns?: 2 | 3;
}

export default function NigiriSashimi({ title, note, items, columns = 3 }: NigiriSashimiProps) {
  return (
    <div className="nigiri-sashimi-section">
      <h2 className="nigiri-sashimi-title">{title}</h2>
      <p className="nigiri-sashimi-note">{note}</p>
      <div className={`nigiri-sashimi-grid nigiri-sashimi-grid--${columns}col`}>
        {items.map((item, i) => (
          <div className="nigiri-sashimi-card" key={i}>
            <div className="nigiri-sashimi-card-header">
              <h3 className="nigiri-sashimi-name">
                <span className="nigiri-sashimi-name-group">
                  {item.name}
                  {item.fillingNote && <span className="nigiri-sashimi-filling"> ({item.fillingNote})</span>}
                  {item.image && <ItemPhotoTrigger image={item.image} alt={item.name} />}
                </span>
              </h3>
            </div>
            <div className="nigiri-sashimi-prices">
              <span className="nigiri-sashimi-price">{item.nigiriPrice}</span>
              <span className="nigiri-sashimi-price-divider">/</span>
              <span className="nigiri-sashimi-price">{item.sashimiPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}