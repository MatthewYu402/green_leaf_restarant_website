import './SpecialsPage.css'

// Icons
import appleIcon from "../assets/apple-icon.svg";
import leafIcon from "../assets/gold-leaf.svg";

// Images
import FillerImage from '@/assets/images/square-sushi.png';

// Components
import Divider from "../components/shared/Divider";
import SpecialItemGrid from '../components/menu/SpecialItemGrid';
import MenuCategory from '../components/menu/MenuCategory';
import DinnerSpecials from '../components/menu/DinnerSpecials';
import Section from '../components/shared/Section';

export default function Specials() {
  return (
    <div className="specials-page">
      <Section className="reveal-block-slide">
        <h1 className="specials-title">Seasonal Selections</h1>
        <p className="specials-intro">Check out our curated specials, where a balance of tradition and fusion meet.</p>
      </Section>

      <Section className='reveal-block-fade'>
        <Divider iconUrl={appleIcon} iconAlt="leaf" lineWidth='500px' />
      </Section>
      

      <Section className="reveal-block-slide">
        <div className='lunch-section'>
          <h3 className="lunch-section-title">Midday Muse</h3>
          <p className="lunch-section-subtitle">A REFINED SELECTION OF LUNCH FEATURES, AVAILABLE DAILY UNTIL 3:00 PM.</p>
        </div>
      

      <div className="lunch-maki-bento-row">
        <div className="lunch-maki-column">
          <h4 className="lunch-maki-title">Lunch Maki Specials</h4>
          <p className="lunch-maki-note">*Served with traditional miso soup. No substitutions</p>
          <SpecialItemGrid
            items={[
              { id: "L1", name: "California Roll and Eel Avocado Roll", price: "$10.25", description: "" },
              { id: "L2", name: "Spicy Tuna Roll and California Roll", price: "$10.25", description: "" },
              { id: "L3", name: "Salmon Roll and California Roll", price: "$10.25", description: "" },
              { id: "L4", name: "Tuna Roll and California Roll", price: "$10.25", description: "" },
              { id: "L5", name: "Shrimp Avocado Roll and California Roll", price: "$10.25", description: "" },
              { id: "L6", name: "Two California Rolls", price: "$10.25", description: "" },
              { id: "L7", name: "Sushi Special (Chef's Choice)", price: "$10.25", description: "" },
              { id: "L8", name: "Sashimi Special (Chef's Choice)", price: "$10.25", description: "" },
            ]}
          />
        </div>

        <MenuCategory
          name="Featured Bento Boxes"
          url={FillerImage}
          className="featured-bento-category"
          note="*Served with white rice and miso soup. No substitutions"
          menu_items={[
            { id: "L9", name: "Shrimp Tempura and California Roll", price: "$10.95", description: "" },
            { id: "L10", name: "Chicken Teriyaki and California Roll", price: "$10.95", description: "" },
            { id: "L11", name: "Crispy Sesame Chicken and California Roll", price: "$10.95", description: "" },
            { id: "L12", name: "Vegetable Tempura and California Roll", price: "$10.95", description: "" }
          ]}
        />
      </div>

      </Section>

      <Section className='reveal-block-fade'>
        <Divider iconUrl={leafIcon} iconAlt="leaf" lineWidth='500px' />
      </Section>
      
      <Section className='reveal-block-slide'>
        <DinnerSpecials />
      </Section>
    </div>
  );
}