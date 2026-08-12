// MenuOptions.tsx
import "./MenuOptions.css"
import MenuItem from "./MenuItem"

interface MenuItemData {
  id?: string;
  name: string;
  description: string;
  price: string;
  pieces?: number;
}

interface MenuItemGroup {
  subheading?: string;
  layout?: "full" | "half";   // new — explicit, not inferred
  items: MenuItemData[];
}

interface MenuOptionsProps {
  title: string;
  note?: string;   // NEW
  menu_items?: MenuItemData[];
  groups?: MenuItemGroup[];
  className?: string;
}

export default function MenuOptions({ title, note, menu_items, groups, className = "" }: MenuOptionsProps) {
  const renderGroups: MenuItemGroup[] = groups ?? (menu_items ? [{ items: menu_items }] : []);

  return (
    <div className={`menu-options ${className}`.trim()}>
      <h2 className="menu-options-title">{title}</h2>
      {note && <p className="menu-options-note">{note}</p>}
      <div className="menu-groups">
        {renderGroups.map((group, i) => (
          <div
            className={`menu-item-group menu-item-group--${group.layout ?? "full"}`}
            key={group.subheading ?? i}
          >
            {group.subheading && (
              <h3 className="menu-options-subheading">{group.subheading}</h3>
            )}
            <div className="item-list">
              {group.items.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}