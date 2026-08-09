// MenuCategory.tsx
import './MenuCategory.css'
import MenuOptions from './MenuOptions';

interface MenuItemData {
  name: string;
  description: string;
  price: string;
  pieces?: number;
}

interface MenuItemGroup {
  subheading?: string;
  layout?: "full" | "half";
  items: MenuItemData[]
}

interface MenuCategoryProps {
  name: string;
  menu_items?: MenuItemData[];   // now optional, since groups can be used instead
  groups?: MenuItemGroup[];      
  url?: string;
  className?: string;            
}

export default function MenuCategory({ name, menu_items, groups, url, className = "" }: MenuCategoryProps) {
  return (
    <div className={`menu-category ${className}`.trim()}>
      {url && <img src={url} className="category-image" alt={name} />}
      <div>
        <MenuOptions
          title={name}
          menu_items={menu_items}
          groups={groups}
        />
      </div>
    </div>
  );
}