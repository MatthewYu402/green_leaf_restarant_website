import './DinnerSpecials.css'
import SpecialItemGrid from './SpecialItemGrid';

// TODO: Replace with real chef's special photo
import ChefSpecialImage from '../../assets/square-sushi.png';
import forkKnifeIcon from '../../assets/fork-knife-icon.svg';

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
          <span className="dinner-chef-special-label">Chef's Special</span>
          <h2 className="dinner-chef-special-name">Korean BBQ Beef Short Ribs</h2>
          <p className="dinner-chef-special-description">
            Experience our meticulously prepared Galbi. Tender, grilled bone-in beef short ribs
            marinated in a rich, savory-sweet soy and garlic glaze. Served sizzling, garnished
            with toasted sesame seeds and fresh scallions, accompanied by traditional banchan.
          </p>
          <div className="dinner-chef-special-footer">
            <span className="dinner-chef-special-price">$42</span>
          </div>
        </div>
      </div>

      <SpecialItemGrid
        className="dinner-specials-grid"
        items={[
          { name: "Chicken Lettuce Wrap", price: "$11.95", description: "TODO" },
          { name: "Thai Basil Chicken", price: "$15.95", description: "TODO" },
          { name: "Triple Delight", price: "$18.95", description: "TODO" },
          { name: "Thai Basil Shrimp", price: "$17.95", description: "TODO" },
          { name: "Thai Basil Beef", price: "$17.95", description: "TODO" },
          { name: "Beef and Shrimp", price: "$18.95", description: "Stir-fry with tomato and spring onions" },
          { name: "Pepper Steak", price: "$17.95", description: "Stir-fry beef with bell peppers and onion" },
        ]}
      />
    </div>
  );
}