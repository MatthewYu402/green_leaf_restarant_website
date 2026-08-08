import "./MenuOptions.css"
import MenuItem from "./MenuItem"

interface MenuItemData {
  name: string;
  description: string;
  price: string;
  pieces?: number;
}

interface MenuOptionsProps {
  title: string;
  menu_items: MenuItemData[];
}

export default function MenuOptions({ title, menu_items }: MenuOptionsProps) {
  return (
    <div className="menu-options">
      <h2 className="menu-options-title">{title}</h2>
      <span className="divider-line"></span>
      <div className="item-list">
        {menu_items.map((item) => (
          <MenuItem
            key={item.name}
            name={item.name}
            description={item.description}
            price={item.price}
            pieces={item.pieces}
          />
        ))}
      </div>
    </div>
  );
}