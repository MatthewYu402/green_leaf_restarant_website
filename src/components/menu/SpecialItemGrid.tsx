// SpecialItemGrid.tsx
import './SpecialItemGrid.css'
import SpecialItem from './SpecialItem'

interface SpecialItemData {
  id: string;
  name: string;
  price: string;
  description: string;
}

interface SpecialItemGridProps {
  items: SpecialItemData[];
  className?: string;
}

export default function SpecialItemGrid({ items, className = "" }: SpecialItemGridProps) {
  return (
    <div className={`special-item-grid ${className}`.trim()}>
      {items.map((item) => (
        <SpecialItem key={item.id} {...item} />
      ))}
    </div>
  );
}