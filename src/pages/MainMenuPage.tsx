import './MainMenuPage.css';
import {
  appetizers,
  drinksAndDesserts,
  grillAndKitchen,
  lunchSpecials,
  mainMenuDividerIcons as icons,
  mainMenuPdfs,
  meat,
  noodles,
  noodlesAndVegetarian,
  seafood,
  soupsAndSalads,
  sushiAndSashimi,
  teriyakiAndTempura,
  vegetarian,
} from '@/content';
import MenuList from '../components/menu/MenuList';
import Divider from '../components/ui/Divider';
import Section from '../components/ui/Section';
import PdfLinks from '../components/ui/PdfLinks';
import FeaturedMenuSection from '../components/menu/FeaturedMenuSection';
import DrinksDesserts from '../components/menu/DrinksDesserts';
import MenuAccordion from '../components/menu/MenuAccordion';
import LunchSpecials from '../components/menu/LunchSpecials';
import MenuPanel from '../components/menu/MenuPanel';

/** Gold divider between sections — the same size everywhere on this page. */
function MenuDivider({ icon, alt }: { icon: string; alt?: string }) {
  return (
    <Section reveal="fade">
      <Divider icon={icon} iconAlt={alt} thickness="2px" lineWidth="600px" />
    </Section>
  );
}

export default function MainMenuPage() {
  return (
    <div className="main-menu-page">
      <PdfLinks links={mainMenuPdfs} className="main-menu-pdf-links" />

      {/* Desktop/tablet — full section-by-section layout. Hidden on mobile (see CSS). */}
      <div className="main-menu-desktop-lists">
        <Section reveal="slide">
          <FeaturedMenuSection {...appetizers} />
        </Section>

        <Section reveal="slide">
          <FeaturedMenuSection {...soupsAndSalads} imageRight />
        </Section>

        <MenuDivider icon={icons.goldLeaf} alt="gold leaf icon" />

        <Section reveal="slide">
          <MenuPanel title={grillAndKitchen.title} className="menu-panel--tight">
            <MenuList title={meat.title} items={meat.items} />
            <MenuList title={seafood.title} groups={seafood.groups} className="seafood-options" />
          </MenuPanel>
        </Section>

        <MenuDivider icon={icons.wave} alt="wave icon" />

        <Section reveal="slide">
          <div className="sushi-sashimi">
            <img src={sushiAndSashimi.image} className="sushi-sashimi-image" alt={sushiAndSashimi.imageAlt} />
            <div className="sushi-sashimi-content">
              <h2 className="sushi-sashimi-header">{sushiAndSashimi.title}</h2>
              <p className="sushi-sashimi-description">{sushiAndSashimi.description}</p>
              <div className="menu-sushi-sashimi-options">
                <MenuList title={sushiAndSashimi.donburi.title} items={sushiAndSashimi.donburi.items} />
                <MenuList title={sushiAndSashimi.platters.title} items={sushiAndSashimi.platters.items} />
              </div>
            </div>
          </div>
        </Section>

        <MenuDivider icon={icons.noodle} alt="noodle-icon" />

        <Section reveal="slide">
          <MenuPanel title={noodlesAndVegetarian.title} className="menu-panel--stack-early">
            <MenuList title={noodles.title} items={noodles.items} />
            <MenuList title={vegetarian.title} items={vegetarian.items} />
          </MenuPanel>
        </Section>

        <MenuDivider icon={icons.goldLeaf} />

        <Section reveal="slide">
          <LunchSpecials {...lunchSpecials} />
        </Section>

        <MenuDivider icon={icons.goldLeaf} />

        <Section reveal="slide">
          <div className="teriyaki-card">
            <img src={teriyakiAndTempura.icon} className="teriyaki-card-icon" alt="" />
            <h2 className="teriyaki-card-title">{teriyakiAndTempura.title}</h2>
            <p className="teriyaki-card-subtitle">{teriyakiAndTempura.subtitle}</p>
            <MenuList title="" className="teriyaki-card-options" items={teriyakiAndTempura.items} />
          </div>
        </Section>

        <MenuDivider icon={icons.goldLeaf} alt="tempura-icon" />

        <Section reveal="slide">
          <DrinksDesserts {...drinksAndDesserts} />
        </Section>
      </div>

      {/* Mobile — the same data collapsed into accordions. Hidden above the breakpoint (see CSS). */}
      <div className="main-menu-mobile-lists">
        <MenuAccordion
          title={appetizers.title}
          image={appetizers.image}
          imageAlt={appetizers.imageAlt}
          items={[...appetizers.featured, ...appetizers.items]}
        />
        <MenuAccordion
          title={soupsAndSalads.title}
          image={soupsAndSalads.image}
          imageAlt={soupsAndSalads.imageAlt}
          items={[...soupsAndSalads.featured, ...soupsAndSalads.items]}
        />
        <MenuAccordion title={meat.title} items={meat.items} />
        <MenuAccordion title={seafood.title} groups={seafood.groups} />
        <MenuAccordion title={sushiAndSashimi.donburi.title} items={sushiAndSashimi.donburi.items} />
        <MenuAccordion title={sushiAndSashimi.platters.title} items={sushiAndSashimi.platters.items} />
        <MenuAccordion title={noodles.title} items={noodles.items} />
        <MenuAccordion
          title={lunchSpecials.mobileTitle}
          groups={[
            { subheading: lunchSpecials.maki.title, items: lunchSpecials.maki.items },
            { subheading: lunchSpecials.bento.title, items: lunchSpecials.bento.items },
          ]}
        />
        <MenuAccordion title={vegetarian.title} items={vegetarian.items} />
        <MenuAccordion title={teriyakiAndTempura.title} items={teriyakiAndTempura.items} />
        <MenuAccordion title={drinksAndDesserts.cold.title} items={drinksAndDesserts.cold.items} />
        <MenuAccordion title={drinksAndDesserts.warm.title} items={drinksAndDesserts.warm.items} />
        <MenuAccordion title={drinksAndDesserts.dessert.title} items={drinksAndDesserts.dessert.items} />
      </div>
    </div>
  );
}
