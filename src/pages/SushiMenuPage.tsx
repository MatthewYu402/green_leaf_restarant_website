import './SushiMenuPage.css';
import {
  anniversaryRolls,
  featuredRoll,
  makiRolls,
  nigiriSashimi,
  specialRolls,
  sushiMenuDividerIcons as icons,
  sushiMenuPdfs,
  sushiPlatters,
} from '@/content';
import type { GalleryImage } from '@/types';
import PdfLinks from '../components/ui/PdfLinks';
import RollGrid from '../components/menu/RollGrid';
import Section from '../components/ui/Section';
import Divider from '../components/ui/Divider';
import NigiriSashimiGrid from '../components/menu/NigiriSashimiGrid';
import MenuAccordion from '../components/menu/MenuAccordion';
import GalleryCarousel from '../components/ui/GalleryCarousel';

// Every anniversary roll that has a photo, captioned with its description.
const anniversaryCarouselImages: GalleryImage[] = anniversaryRolls.items
  .filter((roll) => roll.image !== undefined)
  .map((roll) => ({ src: roll.image, alt: roll.name, description: `${roll.name} — ${roll.description}` }));

// Nigiri/sashimi as plain menu items for the mobile accordion.
const nigiriSashimiItems = nigiriSashimi.items.map((item) => ({
  name: item.name,
  description: item.note,
  price: `${item.nigiriPrice} / ${item.sashimiPrice}`,
  image: item.image,
}));

export default function SushiMenuPage() {
  return (
    <div className="sushi-menu-page">
      <PdfLinks links={sushiMenuPdfs} />

      <Section reveal="fade">
        <div className="special-feature">
          <div className="special-feature-left">
            <h4 className="special-feature-title">{featuredRoll.badge}</h4>
            <h2>{featuredRoll.name}</h2>
            <p className="special-feature-description">{featuredRoll.description}</p>
            <span className="divider-line"></span>
            <p className="special-feature-price">{featuredRoll.price}</p>
          </div>
          <div className="special-feature-right">
            <img className="twenty-year-roll" src={featuredRoll.image}></img>
          </div>
        </div>
      </Section>

      <Divider icon={icons.flower} mobileOnly />

      {/* Mobile-only — sits between the Special Feature and the accordions. */}
      <Section reveal="slide" className="anniversary-carousel-mobile">
        <h4 className="anniversary-carousel-mobile-label">{anniversaryRolls.carouselLabel}</h4>
        <GalleryCarousel images={anniversaryCarouselImages} />
      </Section>

      {/* Desktop/tablet — full section-by-section layout. Hidden on mobile (see CSS). */}
      <div className="sushi-menu-desktop-lists">
        <Section reveal="fade">
          <Divider icon={icons.flower} lineWidth="600px" iconAlt="flower icon" thickness="2px" />
        </Section>

        <Section reveal="slide">
          <RollGrid {...anniversaryRolls} />
        </Section>

        <Divider icon={icons.goldLeaf} lineWidth="600px" thickness="2px" />

        <Section reveal="slide">
          <RollGrid {...specialRolls} columns={3} plainTitle />
        </Section>

        <Divider icon={icons.circle} lineWidth="600px" thickness="2px" />

        <Section reveal="slide">
          <RollGrid {...makiRolls} columns={3} plainTitle />
        </Section>

        <Divider icon={icons.apple} lineWidth="600px" thickness="2px" />

        <Section reveal="slide">
          <NigiriSashimiGrid {...nigiriSashimi} columns={3} />
        </Section>

        <Divider icon={icons.flower} lineWidth="600px" iconAlt="flower icon" thickness="2px" />
      </div>

      {/* Mobile — the same data collapsed into accordions. Hidden above the breakpoint (see CSS). */}
      <div className="sushi-menu-mobile-lists">
        <MenuAccordion title={anniversaryRolls.title} items={anniversaryRolls.items} />
        <MenuAccordion title={specialRolls.title} items={specialRolls.items} />
        <MenuAccordion title={makiRolls.title} items={makiRolls.items} />
        <MenuAccordion title={nigiriSashimi.title} items={nigiriSashimiItems} />
      </div>

      <Section reveal="slide">
        <div className="sushi-platters">
          <div className="sushi-platters-header">
            <h2 className="sushi-platters-title">{sushiPlatters.title}</h2>
            <p className="sushi-platters-subtitle">{sushiPlatters.subtitle}</p>
          </div>
          <GalleryCarousel images={sushiPlatters.images} />
        </div>
      </Section>
    </div>
  );
}
