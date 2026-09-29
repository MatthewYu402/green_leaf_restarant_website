import './SpecialsPage.css'

// Icons
import appleIcon from "@/assets/icons/apple-icon.svg";
import leafIcon from "@/assets/icons/gold-leaf.svg";
import circleIcon from "@/assets/icons/circle.svg";
import forkKnifeIcon from "@/assets/icons/fork-knife-icon.svg";

// Images
// TODO: Change Filler Image
import FillerImage from '@/assets/images/sneak-peak-images/double-eel-roll.jpg';
import L3 from "@/assets/images/specials/L3-maki.jpg"
import L9 from "@/assets/images/specials/L9-bento.jpg"
import L10 from "@/assets/images/specials/L10-bento.jpg"
import L12 from "@/assets/images/specials/L12-bento.jpg"


// Components
import Divider from "../components/shared/Divider";
import SpecialItemGrid from '../components/menu/SpecialItemGrid';
import MenuCategory from '../components/menu/MenuCategory';
import BentoItemList from '../components/menu/BentoItemList';
import DinnerSpecials, { CHEF_SPECIAL, ChefSpecialImage, DINNER_GRID_ITEMS } from '../components/menu/DinnerSpecials';
import Section from '../components/shared/Section';

const MAKI_SPECIALS = [
  { id: "L1", name: "California Roll and Eel Avocado Roll", price: "$10.25", description: "" },
  { id: "L2", name: "Spicy Tuna Roll and California Roll", price: "$10.25", description: "" },
  { id: "L3", image: L3, name: "Salmon Roll and California Roll", price: "$10.25", description: "" },
  { id: "L4", name: "Tuna Roll and California Roll", price: "$10.25", description: "" },
  { id: "L5", name: "Shrimp Avocado Roll and California Roll", price: "$10.25", description: "" },
  { id: "L6", name: "Two California Rolls", price: "$10.25", description: "" },
  { id: "L7", name: "Sushi Special (Chef's Choice)", price: "$13.25", description: "" },
  { id: "L8", name: "Sashimi Special (Chef's Choice)", price: "$15.95", description: "" },
];

const BENTO_BOXES = [
  { id: "L9", image: L9, name: "Shrimp Tempura and California Roll", price: "$10.95", description: "" },
  { id: "L10", image: L10, name: "Chicken Teriyaki and California Roll", price: "$10.95", description: "" },
  { id: "L11", name: "Crispy Sesame Chicken and California Roll", price: "$10.95", description: "" },
  { id: "L12", image: L12, name: "Vegetable Tempura and California Roll", price: "$10.95", description: "" },
];

export default function Specials() {
  return (
    <div className="specials-page">
      <Section className="reveal-block-slide">
        <h1 className="specials-title">Seasonal Selections</h1>
        <p className="specials-intro">Check out our curated specials, where a balance of tradition and fusion meet.</p>
      </Section>

      {/* Mobile-only — divider between the page title and Chef's Feature */}
      <Section className="reveal-block-slide specials-mobile-divider">
        <Divider iconUrl={appleIcon} iconAlt="" lineWidth="500px" />
      </Section>

      {/* Mobile-only — Chef's Feature pulled to the top of the page.
          Real content reused from DinnerSpecials via its exported consts,
          not retyped, so it can't drift out of sync with the version
          rendered further down (desktop, and mobile's own Dinner section).
          Wrapped in Section so it gets the same fade/slide-in transition
          as everything else on the page. */}
      <Section className="reveal-block-slide chef-feature-mobile-wrapper">
        <div className="chef-feature-mobile">
          <img src={ChefSpecialImage} alt="" className="chef-feature-mobile-image" />
          <div className="chef-feature-mobile-overlay">
            <span className="chef-feature-mobile-label">Chef's Feature</span>
            <h2 className="chef-feature-mobile-name">{CHEF_SPECIAL.name}</h2>
            <p className="chef-feature-mobile-description">{CHEF_SPECIAL.description}</p>
            <div className="chef-feature-mobile-footer">
              <span className="chef-feature-mobile-price">{CHEF_SPECIAL.price}</span>
              {/* Decorative for now — no ordering system exists yet to link to */}
            </div>
          </div>
        </div>
      </Section>

      <Section className='reveal-block-slide'>
        <Divider iconUrl={circleIcon} iconAlt="leaf" lineWidth='500px' />
      </Section>


      <Section className="reveal-block-slide">
        <div className='lunch-section'>
          <h3 className="lunch-section-title">Midday Muse</h3>
          <p className="lunch-section-subtitle">A REFINED SELECTION OF LUNCH FEATURES, AVAILABLE DAILY UNTIL 3:00 PM.</p>
        </div>

        {/* Desktop/tablet — side-by-side columns, unchanged. Hidden on mobile (see CSS). */}
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

        {/* Mobile-only — Maki Specials first, then Bento Boxes (with the
            optional-image row layout), matching desktop's visual order.
            Hidden above the breakpoint (see CSS). */}
        <div className="lunch-mobile">
          <h5 className="lunch-mobile-label">Lunch Maki Specials</h5>
          <SpecialItemGrid className="maki-specials-mobile-list" items={MAKI_SPECIALS} />

          <h5 className="lunch-mobile-label">Featured Bento Boxes</h5>
          <BentoItemList items={BENTO_BOXES} />
        </div>
      </Section>

      <Section className='reveal-block-fade'>
        <Divider iconUrl={leafIcon} iconAlt="leaf" lineWidth='500px' />
      </Section>

      {/* Desktop/tablet — includes its own Chef's Special box. Hidden on
          mobile (see CSS) so it isn't duplicated with chef-feature-mobile above. */}
      <Section className='reveal-block-slide desktop-only-dinner'>
        <DinnerSpecials />
      </Section>

      {/* Mobile-only — same real grid data as desktop's DinnerSpecials,
          without its chef box (already shown at the top of the page) and
          without an arrow on each card, per instructions. Wrapped in
          Section for the same fade/slide-in transition as the rest. */}
      <Section className="reveal-block-slide dinner-mobile-wrapper">
        <div className="dinner-mobile">
          <img src={forkKnifeIcon} alt="" className="dinner-mobile-icon" />
          <h1 className="dinner-section-title">Evening Expressions</h1>
          <p className="dinner-section-subtitle">CURATED NIGHTLY FEATURES HIGHLIGHTING SEASONAL INGREDIENTS.</p>
          <SpecialItemGrid className="dinner-specials-grid-mobile" items={DINNER_GRID_ITEMS} />
        </div>
      </Section>
    </div>
  );
}