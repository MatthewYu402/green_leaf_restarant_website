import './DrinksDesserts.css'

interface DrinkItem {
  name: string;
  price: string;
  description?: string;
}

interface DrinksDessertsProps {
  coldTitle: string;
  coldIcon: string;
  coldBgIcon: string;
  coldItems: DrinkItem[];
  warmTitle: string;
  warmIcon: string;
  warmBgIcon: string;
  warmItems: DrinkItem[];
  dessertTitle: string;
  dessertIcon: string;
  dessertBgIcon?: string;
  dessertItems: DrinkItem[];
  image: string;
  imageAlt?: string;
}

function DrinkRow({ item }: { item: DrinkItem }) {
  return (
    <div className="drink-row">
      <div className="drink-row-header">
        <h3 className="drink-row-name">{item.name}</h3>
        <span className="drink-row-price">{item.price}</span>
      </div>
      {item.description && (
        <p className="drink-row-description">{item.description}</p>
      )}
    </div>
  );
}

export default function DrinksDesserts({
  coldTitle, coldIcon, coldBgIcon, coldItems,
  warmTitle, warmIcon, warmBgIcon, warmItems,
  dessertTitle, dessertIcon, dessertBgIcon, dessertItems,
  image, imageAlt = "",
}: DrinksDessertsProps) {
  return (
    <div className="drinks-desserts-grid">
      <div className="drinks-desserts-column">
        <div className="drinks-card">
          <img src={coldBgIcon} className="drinks-card-bg-icon" alt="" />
          <div className="drinks-card-header">
            <span className="drinks-card-icon-chip drinks-card-icon-chip--cold">
              <img src={coldIcon} alt="" />
            </span>
            <h2 className="drinks-card-title">{coldTitle}</h2>
          </div>
          <div className="drinks-card-grid drinks-card-grid--2col">
            {coldItems.map((item) => <DrinkRow item={item} key={item.name} />)}
          </div>
        </div>

        <div className="drinks-card">
          <img src={warmBgIcon} className="drinks-card-bg-icon" alt="" />
          <div className="drinks-card-header">
            <span className="drinks-card-icon-chip drinks-card-icon-chip--warm">
              <img src={warmIcon} alt="" />
            </span>
            <h2 className="drinks-card-title">{warmTitle}</h2>
          </div>
          <div className="drinks-card-grid drinks-card-grid--2col">
            {warmItems.map((item) => <DrinkRow item={item} key={item.name} />)}
          </div>
        </div>
      </div>

      <div className="drinks-desserts-column">
        <div className="drinks-photo-wrap">
          <img src={image} alt={imageAlt} className="drinks-photo" />
        </div>

        <div className="drinks-card drinks-card--dessert">
          <img src={dessertBgIcon} className="drinks-card-bg-icon" alt="" />
          <div className="drinks-card-header">
            <span className="drinks-card-icon-chip drinks-card-icon-chip--dessert">
              <img src={dessertIcon} alt="" />
            </span>
            <h2 className="drinks-card-title">{dessertTitle}</h2>
          </div>
          <div className="drinks-card-grid drinks-card-grid--1col">
            {dessertItems.map((item) => <DrinkRow item={item} key={item.name} />)}
          </div>
        </div>
      </div>
    </div>
  );
}