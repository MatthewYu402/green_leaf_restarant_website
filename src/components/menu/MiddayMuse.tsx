// Components
import SpecialItemGrid from './SpecialItemGrid';
import MenuCategory from './MenuCategory';

// Images
// TODO: Change Filler Image
import FillerImage from '@/assets/images/sneak-peak-images/double-eel-roll.jpg';
import L3 from '@/assets/images/specials/L3-maki.jpg';
import L9 from '@/assets/images/specials/L9-bento.jpg';
import L10 from '@/assets/images/specials/L10-bento.jpg';
import L12 from '@/assets/images/specials/L12-bento.jpg';

// Imported LAST so these overrides load after SpecialItemGrid/MenuCategory CSS
import './MiddayMuse.css';

export const MAKI_SPECIALS = [
  { id: "L1", name: "California Roll and Eel Avocado Roll", price: "$10.50", description: "" },
  { id: "L2", name: "Spicy Tuna Roll and California Roll", price: "$10.50", description: "" },
  { id: "L3", image: L3, name: "Salmon Roll and California Roll", price: "$10.50", description: "" },
  { id: "L4", name: "Tuna Roll and California Roll", price: "$10.50", description: "" },
  { id: "L5", name: "Shrimp Avocado Roll and California Roll", price: "$10.50", description: "" },
  { id: "L6", name: "Two California Rolls", price: "$10.50", description: "" },
  { id: "L7", name: "Sushi Special (Chef's Choice)", price: "$14.95", description: "" },
  { id: "L8", name: "Sashimi Special (Chef's Choice)", price: "$16.95", description: "" },
];

export const BENTO_BOXES = [
  { id: "L9", image: L9, name: "Shrimp Tempura and California Roll", price: "$10.95", description: "" },
  { id: "L10", image: L10, name: "Chicken Teriyaki and California Roll", price: "$10.95", description: "" },
  { id: "L11", name: "Crispy Sesame Chicken and California Roll", price: "$10.95", description: "" },
  { id: "L12", image: L12, name: "Vegetable Tempura and California Roll", price: "$10.95", description: "" },
];

export default function MiddayMuse() {
  return (
    <div className="midday-muse">
      <div className="lunch-section">
        <h3 className="lunch-section-title">Midday Muse</h3>
        <p className="lunch-section-subtitle">
          A REFINED SELECTION OF LUNCH FEATURES, AVAILABLE DAILY UNTIL 3:00 PM.
        </p>
      </div>

      <div className="lunch-maki-bento-row">
        <div className="lunch-maki-column">
          <h4 className="lunch-maki-title">Lunch Maki Specials</h4>
          <SpecialItemGrid items={MAKI_SPECIALS} />
        </div>

        <MenuCategory
          name="Featured Bento Boxes"
          url={FillerImage}
          className="featured-bento-category"
          menu_items={BENTO_BOXES}
        />
      </div>
    </div>
  );
}