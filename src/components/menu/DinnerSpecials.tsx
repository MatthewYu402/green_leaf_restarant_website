import './DinnerSpecials.css'

// Components
import SpecialItemGrid from './SpecialItemGrid';

// Icons
import forkKnifeIcon from '@/assets/icons/fork-knife-icon.svg';

// Images
import ChefSpecialImage from '@/assets/images/coming-soon.png';
import ChickenLettuceWrap from '@/assets/images/appetizers/chicken-lettuce-wrap.jpg'

export { ChefSpecialImage };

export const CHEF_SPECIAL = {
  label: "Chef's Special",
  name: "Korean BBQ Beef Short Ribs",
  description:
    "Tender, grilled bone-in beef short ribs marinated in a rich, savory-sweet glaze. Served sizzling and accompanied by a serving of rice and mixed vegetables",
  price: "$20.95",
};

export const DINNER_GRID_ITEMS = [
  { name: "Chicken Lettuce Wrap", image: ChickenLettuceWrap, price: "$11.95", description: "Stir-fry chicken with peas and carrots placed on a lettuce wrap" },
  { name: "Beef and Shrimp", price: "$18.95", description: "Stir-fry with tomato and spring onions" },
  { name: "Pepper Steak", price: "$17.95", description: "Stir-fry beef with bell peppers and onion" },
  { name: "Triple Delight", price: "$18.95", description: "Stir-fry of shrimp, chicken, beef, and vegetables" },
  { name: "Thai Basil Chicken", price: "$15.95", description: "" },
  { name: "Thai Basil Shrimp", price: "$17.95", description: "" },
  { name: "Thai Basil Beef", price: "$17.95", description: "" },
];

export default function DinnerSpecials() {
  return (
    <div className="dinner-section">
      <h1 className="dinner-section-title">Evening Expressions</h1>
      <p className="dinner-section-subtitle">CURATED NIGHTLY FEATURES HIGHLIGHTING SEASONAL INGREDIENTS.</p>

      <div className="dinner-chef-special">
        <img
          src={ChefSpecialImage}
          className="dinner-chef-special-image"
          alt="Chef's special dish"
        />
        <div className="dinner-chef-special-content">
          <img
            src={forkKnifeIcon}
            className="dinner-chef-special-icon"
            alt=""
          />
          <span className="dinner-chef-special-label">{CHEF_SPECIAL.label}</span>
          <h2 className="dinner-chef-special-name">{CHEF_SPECIAL.name}</h2>
          <p className="dinner-chef-special-description">
            {CHEF_SPECIAL.description}
          </p>
          <div className="dinner-chef-special-footer">
            <span className="dinner-chef-special-price">{CHEF_SPECIAL.price}</span>
          </div>
        </div>
      </div>

      <SpecialItemGrid
        className="dinner-specials-grid"
        items={DINNER_GRID_ITEMS}
      />
    </div>
  );
}