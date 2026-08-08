// MenuCategory.tsx
import './MenuCategory.css'
import MenuOptions from './MenuOptions';

interface MenuItemData {
  name: string;
  description: string;
  price: string;
  pieces?: number;
}

interface MenuCategoryProps {
  name: string;
  menu_items: MenuItemData[];
  url?: string; // now optional
}

export default function MenuCategory({ name, menu_items, url }: MenuCategoryProps) {
  return (
    <div className="menu-category">
      {url && <img src={url} className="category-image" alt={name} />}
      <div>
        <MenuOptions
          title={name}
          menu_items={menu_items}
        />
      </div>
    </div>
  );
}