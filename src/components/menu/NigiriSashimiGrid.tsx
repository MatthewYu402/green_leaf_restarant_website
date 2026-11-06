import './NigiriSashimiGrid.css';
import type { NigiriItem } from '@/types';
import PhotoButton from '../ui/PhotoButton';

interface NigiriSashimiGridProps {
  title: string;
  note: string;
  items: NigiriItem[];
  columns?: 2 | 3;
}

/** Dark panel of fish cards, each showing "nigiri price / sashimi price". */
export default function NigiriSashimiGrid({ title, note, items, columns = 3 }: NigiriSashimiGridProps) {
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
                  {item.note && <span className="nigiri-sashimi-filling"> ({item.note})</span>}
                  {item.image && <PhotoButton image={item.image} alt={item.name} />}
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
