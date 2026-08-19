// MenuCategory.tsx
import './MenuCategory.css'
import MenuOptions from './MenuOptions';

interface MenuItemData {
  id?: string;
  name: string;
  description: string;
  price: string;
  pieces?: number;
  image?: string;
}

interface MenuItemGroup {
  subheading?: string;
  layout?: "full" | "half";
  items: MenuItemData[]
}

interface MenuCategoryProps {
  name: string;
  note?: string;   // NEW
  menu_items?: MenuItemData[];
  groups?: MenuItemGroup[];
  url?: string;
  className?: string;
}

export default function MenuCategory({ name, note, menu_items, groups, url, className = "" }: MenuCategoryProps) {
  return (
    <div className={`menu-category ${className}`.trim()}>
      {url && <img src={url} className="category-image" alt={name} />}
      <div>
        <MenuOptions title={name} note={note} menu_items={menu_items} groups={groups} />
      </div>
    </div>
  );
}