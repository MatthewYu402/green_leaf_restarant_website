import './SpecialsPage.css';
import { dinnerSpecials } from '@/content';
import MenuCardGrid from '../components/menu/MenuCardGrid';
import DinnerSpecials from '../components/menu/DinnerSpecials';
import Section from '../components/ui/Section';

export default function SpecialsPage() {
  const { title, subtitle, chefSpecial, items } = dinnerSpecials;

  return (
    <div className="specials-page">
      {/* Mobile-only — page heading, sits first so it clears the fixed navbar */}
      <Section reveal="slide" className="specials-mobile-header">
        <div className="dinner-mobile-header">
          <h1 className="dinner-section-title">{title}</h1>
          <p className="dinner-section-subtitle">{subtitle}</p>
        </div>
      </Section>

      {/* Mobile-only — Chef's Feature as a photo card with overlaid text */}
      <Section reveal="slide" className="chef-feature-mobile-wrapper">
        <div className="chef-feature-mobile">
          <img src={chefSpecial.image} alt="" className="chef-feature-mobile-image" />
          <div className="chef-feature-mobile-overlay">
            <span className="chef-feature-mobile-label">{chefSpecial.mobileLabel}</span>
            <h2 className="chef-feature-mobile-name">{chefSpecial.name}</h2>
            <p className="chef-feature-mobile-description">{chefSpecial.description}</p>
            <div className="chef-feature-mobile-footer">
              <span className="chef-feature-mobile-price">{chefSpecial.price}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Desktop/tablet — includes its own title and Chef's Special banner */}
      <Section reveal="slide" className="desktop-only-dinner">
        <DinnerSpecials {...dinnerSpecials} />
      </Section>

      {/* Mobile-only — dinner grid (header and chef card already shown above) */}
      <Section reveal="slide" className="dinner-mobile-wrapper">
        <MenuCardGrid className="dinner-specials-grid-mobile" items={items} />
      </Section>
    </div>
  );
}
