import './SpecialsPage.css'

// Icons

// Components
import SpecialItemGrid from '../components/menu/SpecialItemGrid';
import DinnerSpecials, { CHEF_SPECIAL, ChefSpecialImage, DINNER_GRID_ITEMS } from '../components/menu/DinnerSpecials';
import Section from '../components/shared/Section';

export default function Specials() {
  return (
    <div className="specials-page">
      {/* Mobile-only — page heading, sits first so it clears the fixed navbar */}
      <Section className="reveal-block-slide specials-mobile-header">
        <div className="dinner-mobile-header">
          <h1 className="dinner-section-title">Evening Expressions</h1>
          <p className="dinner-section-subtitle">CURATED NIGHTLY FEATURES HIGHLIGHTING SEASONAL INGREDIENTS.</p>
        </div>
      </Section>

      {/* Mobile-only — Chef's Feature, reusing DinnerSpecials' exported data */}
      <Section className="reveal-block-slide chef-feature-mobile-wrapper">
        <div className="chef-feature-mobile">
          <img src={ChefSpecialImage} alt="" className="chef-feature-mobile-image" />
          <div className="chef-feature-mobile-overlay">
            <span className="chef-feature-mobile-label">Chef's Feature</span>
            <h2 className="chef-feature-mobile-name">{CHEF_SPECIAL.name}</h2>
            <p className="chef-feature-mobile-description">{CHEF_SPECIAL.description}</p>
            <div className="chef-feature-mobile-footer">
              <span className="chef-feature-mobile-price">{CHEF_SPECIAL.price}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Desktop/tablet — includes its own title and Chef's Special box */}
      <Section className='reveal-block-slide desktop-only-dinner'>
        <DinnerSpecials />
      </Section>

      {/* Mobile-only — dinner grid (header and chef box already shown above) */}
      <Section className="reveal-block-slide dinner-mobile-wrapper">
        <SpecialItemGrid className="dinner-specials-grid-mobile" items={DINNER_GRID_ITEMS} />
      </Section>
    </div>
  );
}