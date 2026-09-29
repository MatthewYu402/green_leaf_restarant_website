import "./MainMenuPage.css"

// Components
import MenuOptions from "../components/menu/MenuOptions";
import Divider from "../components/shared/Divider";
import Section from "../components/shared/Section";
import FeaturedMenuSection from "../components/menu/FeaturedMenuSection";
import DrinksDesserts from "../components/menu/DrinksDesserts";
import RollAccordion from "../components/menu/RollAccordion";
import MiddayMuse, { MAKI_SPECIALS, BENTO_BOXES } from "../components/menu/MiddayMuse";

// Icons
import goldLeaf from "@/assets/icons/gold-leaf.svg";
import noodleIcon from "@/assets/icons/noodle-icon.svg";
import waveIcon from "@/assets/icons/wave-icon.svg";
import forkKnifeIcon from "@/assets/icons/gold-fork-knife.svg";
import snowflakeIcon from "@/assets/icons/cold-icon.svg";
import teacupBlackIcon from "@/assets/icons/hot-icon.svg";
import dessertIcon from "@/assets/icons/dessert-icon.svg";
import waterDropIcon from "@/assets/icons/water-drop-icon.svg";
import cupIcon from "@/assets/icons/hot-cup-icon.svg";

// Images
import AppetizersImage from "@/assets/images/sneak-peak-images/appetizers.jpg";
import SoupImage from "@/assets/images/sneak-peak-images/soups-and-salad.png";
import SushiAndSashimi from "@/assets/images/sneak-peak-images/sushi-and-sashimi.jpg";

// Appetizer Images
import SummerRoll from '@/assets/images/appetizers/summer-roll.jpg'
import FriedCalamari from '@/assets/images/appetizers/fried-calamari.webp'
import GreenLeafDumplings from '@/assets/images/appetizers/green-leaf-dumplings.jpg'
import ScallionPancakeStringBean from '@/assets/images/appetizers/scallion-pancake-string-bean.jpg'
import OceanGardenRoll from '@/assets/images/appetizers/ocean-garden-roll.jpg'
import CrispyWontons from '@/assets/images/appetizers/crispy-wontons.jpg'
import Shumai from '@/assets/images/appetizers/shumai.jpg'
import AgeTofu from '@/assets/images/appetizers/age-tofu.jpg'

// Soup and Salad Images
import MisoSoup from '@/assets/images/soups-salads/miso-soup.jpg'
import IceCream from '@/assets/images/sneak-peak-images/ice-cream.png';
import BabyOctopusSalad from '@/assets/images/soups-salads/octopus-salad.png'
import SushiBarSalad from '@/assets/images/soups-salads/sushi-bar-salad.jpg'
import HotAndSourSoup from '@/assets/images/soups-salads/hot-and-sour-soup.jpg'


// Changed: 
/**
 * Crispy Wonton - $6.50
 */
const APPETIZERS_FEATURED = [
  { name: "Green Leaf Dumplings", image: GreenLeafDumplings, price: "$5.50", description: "Pan-seared chicken dumplings in spinach wrap" },
  { name: "Scallion Pancake and String Bean", image: ScallionPancakeStringBean, price: "$8.50", description: "Savory stir-fried green beans wrapped in cripsy scallion pancake" },
  { name: "Edamame", price: "$5.50", description: "Steamed soybeans with sea salt" },
  { name: "Summer Roll", image: SummerRoll, price: "$6.95", description: "Shrimp, lettuce, carrot, crabstick, and rice noodle in rice paper" },
  { name: "Crispy Wonton (6)", image: CrispyWontons, price: "$6.50", description: "Fried wontons filled with cream cheese with crab meat" },
];

const APPETIZERS_ITEMS = [
  { name: "Age Tofu", image: AgeTofu, price: "$5.50", description: "Fried bean cure served with tempura sauce" },
  { name: "Shumai (6)", image: Shumai, price: "$5.95", description: "Steamed Shrimp Dumplings (Japanese Style)"},
  { name: "Japanese Vegetable Spring Roll (3)", price: "$5.50", description: "" },
  { name: "Shrimp Tempura", price: "$7.95", description: "Deep-fried tempura style shrimp with vegetables" },
  { name: "Tuna Tartare", price: "$10.95", description: "Marinated tuna and avocado with special sauce" },
  { name: "Fried Calamari", image: FriedCalamari, price: "$9.95", description: "Deep fried squid topped with sauteed onion and chives" },
  { name: "Ocean Garden Roll", image: OceanGardenRoll, price: "$12.95", description: "Crispy spicy crabmeat with mixed greens in rice paper wrap" },
  { name: "Yakitori (3)", price: "$5.95", description: "Grilled chicken skewers with teriyaki sauce" },
  { name: "California Fruit Roll", price: "$6.95", description: "Mango, apple, avocado, and crabstick in rice paper wrap" },
];

const SOUPS_SALADS_FEATURED = [
  { name: "Miso Soup", image: MisoSoup, price: "$2.95", description: "Miso broth with tofu, seaweed, and scallions" },
  { name: "Green Leaf Dumpling Soup", price: "$5.50", description: "Chicken dumpling in savory chicken broth" },
  { name: "Hot and Sour Soup", image: HotAndSourSoup, price: "$4.95", description: "" },
  { name: "Egg Drop Soup", price: "$3.95", description: "" },
  { name: "Chicken, Barley, and Brown Rice Soup", price: "$5.95", description: "" },
];

const SOUPS_SALADS_ITEMS = [
  { name: "Sushi Bar Salad", image: SushiBarSalad, price: "$6.95", description: "Seaweed salad base with cucumber and crabstick topped spicy mayonaise and tempura flakes" },
  { name: "Seaweed Salad", price: "$5.95", description: "Refreshing wakame seaweed in sweet and savory dressing" },
  { name: "Hawaiian Poke Salad Bowl", price: "$11.95", description: "Seaweed salad and mixed greens topped with tuna, salmon, avocado, cucumber, and poke sauce" },
  { name: "California Style Salad", price: "$6.95", description: "Crabstick, avocado, cucumber, and spicy mayo" },
  { name: "Green Salad", price: "$3.95", description: "Served with ginger dressing" },
  { name: "Avocado Salad", price: "$6.95", description: "Mixed greens, cucumber, and avocado with sesame dressing" },
  { name: "Baby Octopus Salad", image: BabyOctopusSalad, price: "$7.95", description: "Seaweed salad topped with marinated baby octopus" },
  { name: "Marinated Calamari Salad", price: "$7.95", description: "" },
];

/**
 * Changes:
 * Added Chicken and Mixed Vegetables 
 */
const MEAT_ITEMS = [
  { name: "Honey Sesame Chicken", price: "$14.95", description: "" },
  { name: "Thai Curry Chicken", price: "$15.95", description: "" },
  { name: "General Tso's Chicken", price: "$14.95", description: "" },
  { name: "Orange Chicken", price: "$14.95", description: "" },
  { name: "Mongolian Beef", price: "$17.95", description: "" },
  { name: "Beef and Brocolli", price: "$17.95", description: "" },
  { name: "Chicken and Brocolli", price: "$14.95", description: "" },
  { name: "Chicken and String Beans", price: "$14.95", description: "" },
  { name: "Chicken and Mixed Vegetables", price: "$14.95", description: "" },
  { name: "Beef and Mixed Vegetables", price: "$17.95", description: "" },
  { name: "Fried Tonkatsu", price: "$14.95", description: "Breaded pork loin with special savory sauce" },
];


/**
 * Changes:
 * Pecan Crusted Salmon Filet - $20.95 
 * Grilled Slmon Filet with House Salad - $20.95
 */
const SEAFOOD_GROUPS = [
  {
    subheading: "Shared Favorites",
    layout: "full" as const,
    items: [
      { name: "Green Leaf Pasta", price: "$19.95", description: "Shrimp, scallops, and baby bok choy over spinach noodles" },
      { name: "Crispy Jumbo Shrimp", price: "$17.95", description: "Tempura-fried jumbo shrimp served with honey sesame sauce" },
      { name: "Seafood Combo", price: "$19.95", description: "Scallop and shrimp stir-fried with bell pepper, tomato and onion, served in a thai curry sauce, " },
      { name: "Pecan Crusted Salmon Filet", price: "$20.95", description: "" },
      { name: "Grilled Salmon Filet", price: "$20.95", description: "Fresh grilled salmon filet, served with a house salad" },
      { name: "Shrimp with Brocolli", price: "$17.95", description: "" },
      { name: "Shrimp with Mixed Vegetables", price: "$17.95", description: "" },
    ],
  },
  {
    subheading: "Lunch Exclusives",
    layout: "half" as const,
    items: [
      { name: "Thai Basil Shrimp", price: "$17.95", description: "" },
      { name: "Shrimp with String Beans", price: "$11.95", description: "" },
    ],
  },
  {
    subheading: "Dinner Exclusives",
    layout: "half" as const,
    items: [
      { name: "Pine Nut Fish", price: "$18.95", description: "Crispy cod served with spicy thai sauce" },
      { name: "Baked Cod", price: "$18.95", description: "Served with thai sauce" },
      { name: "Pineapple Shrimp", price: "$17.95", description: "Served with pineapple slices" },
    ],
  },
];

const DONBURI_ITEMS = [
  { name: "Tekka Don", price: "$20.95", description: "Bowl of seasoned rice topped with fresh tuna" },
  { name: "Salmon Don", price: "$20.95", description: "Bowl of seasoned rice topped with fresh salmon" },
  { name: "Chirashi Don", price: "$20.95", description: "Bowl of seasoned rice with assorted raw fish" },
  { name: "Una-jyu", price: "$21.95", description: "Broiled fresh water eel with special sauce over rice" },
];

const SUSHI_SASHIMI_ITEMS = [
  { name: "Sushi Deluxe", price: "$21.95", description: "8 piece sushi (chef's choice) and a tuna roll" },
  { name: "Sashimi Deluxe", price: "$24.95", description: "15 piece sashimi (chef's choice)" },
  { name: "Sushi and Sashimi Combo", price: "$29.95", description: "" },
  { name: "Family Boat", price: "$59.95", description: "15 pieces sashimi (chef's choice), 5 piece nigiri (chef's choice), california roll, and spicy tuna roll." },
];

/**
 * Changes:
 * Drunken Noodles Shrimp Or Chicken - $16.95
 * Drukeeb Noodles w Beef - $17.95
 */

const NOODLES_ITEMS = [
  { name: "Japanese Pan Noodle", price: "$18.95", description: "Chicken, shrimp, and vegetables" },
  { name: "Pad Thai", price: "$14.95", description: "Chicken or shrimp" },
  { name: "Singapore Rice Noodles", price: "$14.95", description: "Chicken or shrimp" },
  { name: "Yaki Udon Noodles", price: "$14.95", description: "Chicken or shrimp" },
  { name: "Drunken Noodles Chicken or Shrimp", price: "$16.95", description: "Sautéed rice noodles with vegetables in a curry sauce" },
  { name: "Drunken Noodles with Beef", price: "$17.95", description: ""},
  { name: "Japanese Fried Rice", price: "$13.95", description: "Chicken or shrimp" },
  { name: "Roasted Pork Fried Rice", price: "$13.95", description: "Pork and vegetables" },
  { name: "Nabe Yaki Udon Soup", price: "$14.95", description: "Pork and vegetables" },
  { name: "Lo Mein", price: "$14.95", description: "Chicken, pork, or shrimp" },
  { name: "Slimming Noodle Soup", price: "$14.95", description: "Rice noodles, white chicken meat, shrimp, and vegetables in home-made miso broth" },
];

const VEGETARIAN_ITEMS = [
  { name: "Szechuan String Bean", price: "$13.95", description: "" },
  { name: "Tofu Phad Thai", price: "$13.95", description: "" },
  { name: "Veggie Pad Thai", price: "$13.95", description: "" },
  { name: "Singapore Rice Noodles", price: "$13.95", description: "" },
  { name: "Sauteed Mixed Vegetables", price: "$13.95", description: "" },
  { name: "Crispy Eggplant", price: "$13.95", description: "Tempura fried eggplant with honey sesame sauce" },
];

const TERIYAKI_TEMPURA_ITEMS = [
  { name: "Chicken Teriyaki", price: "$14.95", description: "" },
  { name: "Salmon Teriyaki", price: "$19.95", description: "" },
  { name: "Steak Teryaki", price: "$24.95", description: "" },
  { name: "Chicken Tempura", price: "$14.95", description: "" },
  { name: "Shrimp Tempura", price: "$17.95", description: "" },
  { name: "Seafood Tempura", price: "$19.95", description: "" },
  { name: "Vegetable Tempura", price: "$13.95", description: "" },
];

const COLD_ITEMS = [
  { name: "Mineral Water", price: "$3.95", description: "" },
  { name: "Iced Tea", price: "$2.00", description: "" },
  { name: "Japanese Marble Soda", price: "$3.95", description: "" },
  { name: "Strawberry Iced Tea", price: "$3.95", description: "" },
  { name: "Mango Iced Tea", price: "$3.95", description: "" },
  { name: "Soft Drinks", price: "$2.50", description: "Coke, Diet Coke, Sprite, Ginger Ale" },
];

const WARM_ITEMS = [
  { name: "Jasmine Tea", price: "$2.00", description: "" },
  { name: "Japanese Green Tea", price: "$2.00", description: "" },
  { name: "Wine Corking Fee", price: "$3.00", description: "" },
];

const DESSERT_ITEMS = [
  { name: "Fried Banana with Ice Cream", price: "$5.95", description: "Tempura-fried bananas served with ice cream" },
  { name: "Mango Rice Pudding", price: "$5.95", description: "Sticky rice with fresh mango and mixed nuts" },
  { name: "Premium Ice Cream", price: "$4.95", description: "Red bean, green tea, french vanilla" },
  { name: "Mini Sugar Donuts (6)", price: "$4.95", description: "Fried soft buns tossed in sugar" },
  { name: "Tempura Fried Cheesecake", price: "$6.25", description: "" },
];

type SourceItem = { id?: string; name: string; price: string; description: string; image?: string };

const toAccordionItems = (items: SourceItem[]) =>
  items.map((i) => ({ id: i.id, name: i.name, description: i.description, priceDisplay: i.price, image: i.image }));

const toAccordionGroups = (groups: { subheading: string; items: SourceItem[] }[]) =>
  groups.map((g) => ({
    subheading: g.subheading,
    items: toAccordionItems(g.items),
  }));

const LUNCH_GROUPS = [
  { subheading: "Lunch Maki Specials", items: MAKI_SPECIALS },
  { subheading: "Featured Bento Boxes", items: BENTO_BOXES },
];

export default function MainMenu() {
  return (
    <div className="main-menu-page">

      {/* Desktop/tablet — full section-by-section layout, unchanged. Hidden on mobile (see CSS). */}
      <div className="main-menu-desktop-lists">
        <Section className="reveal-block-slide">
          <FeaturedMenuSection
            title="Appetizers"
            image={AppetizersImage}
            imageAlt="Signature appetizer spread"
            badge="Chef's Selection"
            featuredTitle="Signature Starters"
            featuredDescription="Experience a curated assortment of our finest appetizers, perfect for sharing and awakening the palate."
            featuredItems={APPETIZERS_FEATURED}
            items={APPETIZERS_ITEMS}
          />
        </Section>

        <Section className="reveal-block-slide">
          <FeaturedMenuSection
            className="soups-salads-section"
            title="Soups & Salads"
            image={SoupImage}
            imageAlt="Soups and salads selection"
            badge="Chef's Selection"
            featuredTitle="Comforting Classics"
            featuredDescription="Warm broths and crisp, fresh salads — traditional favorites made to balance and complement any meal."
            featuredItems={SOUPS_SALADS_FEATURED}
            items={SOUPS_SALADS_ITEMS}
          />
        </Section>

        <Section className="reveal-block-fade">
          <Divider iconUrl={goldLeaf} iconAlt="gold leaf icon" thickness="2px" lineWidth="600px" />
        </Section>

        <Section className="reveal-block-slide">
          <div className="grill-kitchen-wrapper">
            <h2 className="grill-title">From The Grill & Kitchen</h2>
            <div className="grill-kitchen">
              <MenuOptions title="Meat" menu_items={MEAT_ITEMS} />
              <MenuOptions title="Seafood" className="seafood-options" groups={SEAFOOD_GROUPS} />
            </div>
          </div>
        </Section>

        <Section className="reveal-block-fade">
          <Divider iconUrl={waveIcon} iconAlt="wave icon" thickness="2px" lineWidth="600px" />
        </Section>

        <Section className="reveal-block-slide">
          <div className="sushi-sashimi">
            <img src={SushiAndSashimi} className="sushi-sashimi-image" alt="Fresh sushi and sashimi selection" />
            <div className="sushi-sashimi-content">
              <h2 className="sushi-sashimi-header">Sushi & Sashimi</h2>
              <p className="sushi-sashimi-description">Sourced daily, expertly prepared. Served a la carte (2 pieces per order) or as chef's selection</p>
              <div className="menu-sushi-sashimi-options">
                <MenuOptions title="Donburi & Una-jyu" menu_items={DONBURI_ITEMS} />
                <MenuOptions title="Sushi & Sashimi" menu_items={SUSHI_SASHIMI_ITEMS} />
              </div>
            </div>
          </div>
        </Section>

        <Section className="reveal-block-fade">
          <Divider iconUrl={noodleIcon} iconAlt="noodle-icon" thickness="2px" lineWidth="600px" />
        </Section>

        <Section className='reveal-block-slide'>
          <div className="noodles-vegetarian-wrapper">
            <h2 className="noodles-vegetarian-title">Noodles & Vegetarian</h2>
            <div className="noodles-vegetarian">
              <MenuOptions title="Noodles & Fried Rice" menu_items={NOODLES_ITEMS} />
              <MenuOptions title="Vegetarian" menu_items={VEGETARIAN_ITEMS} />
            </div>
          </div>
        </Section>

        <Section className='reveal-block-fade'>
          <Divider iconUrl={goldLeaf} iconAlt="" thickness="2px" lineWidth="600px" />
        </Section>

        <Section className="reveal-block-slide">
          <MiddayMuse />
        </Section>

        <Section className='reveal-block-fade'>
          <Divider iconUrl={goldLeaf} iconAlt="" thickness="2px" lineWidth="600px" />
        </Section>

        <Section className="reveal-block-slide">
          <div className="teriyaki-card">
            <img src={forkKnifeIcon} className="teriyaki-card-icon" alt="" />
            <h2 className="teriyaki-card-title">Teriyaki & Tempura</h2>
            <p className="teriyaki-card-subtitle">
              Grilled and glazed, or golden and crisp — a taste of both traditions
            </p>
            <MenuOptions title="" className="teriyaki-card-options" menu_items={TERIYAKI_TEMPURA_ITEMS} />
          </div>
        </Section>


        <Section className='reveal-block-fade'>
          <Divider iconUrl={goldLeaf} iconAlt="tempura-icon" thickness="2px" lineWidth="600px" />
        </Section>

        <Section className="reveal-block-slide">
          <DrinksDesserts
            coldTitle="Cold Refreshments"
            coldIcon={snowflakeIcon}
            coldBgIcon={waterDropIcon}
            coldItems={COLD_ITEMS}
            warmTitle="Hot Beverages"
            warmIcon={teacupBlackIcon}
            warmBgIcon={cupIcon}
            warmItems={WARM_ITEMS}
            dessertTitle="Desserts"
            dessertIcon={dessertIcon}
            dessertItems={DESSERT_ITEMS}
            image={IceCream}
            imageAlt=""
          />
        </Section>
      </div>

      {/* Mobile — same real data, collapsed into accordions. Two subcategories
          (Appetizers, Soups & Salads) carry a real photo; the rest are left
          without one since no distinct photos exist for them yet — the
          optional `image` prop is ready whenever they do. Hidden above the
          breakpoint (see CSS). */}
      <div className="main-menu-mobile-lists">
        <RollAccordion
          title="Appetizers"
          image={AppetizersImage}
          imageAlt="Signature appetizer spread"
          items={toAccordionItems([...APPETIZERS_FEATURED, ...APPETIZERS_ITEMS])}
        />
        <RollAccordion
          title="Soups & Salads"
          image={SoupImage}
          imageAlt="Soups and salads selection"
          items={toAccordionItems([...SOUPS_SALADS_FEATURED, ...SOUPS_SALADS_ITEMS])}
        />
        <RollAccordion title="Meat" items={toAccordionItems(MEAT_ITEMS)} />
        <RollAccordion title="Seafood" groups={toAccordionGroups(SEAFOOD_GROUPS)} />
        <RollAccordion title="Donburi & Una-jyu" items={toAccordionItems(DONBURI_ITEMS)} />
        <RollAccordion title="Sushi & Sashimi" items={toAccordionItems(SUSHI_SASHIMI_ITEMS)} />
        <RollAccordion title="Noodles & Fried Rice" items={toAccordionItems(NOODLES_ITEMS)} />
        <RollAccordion title="Lunch Specials" groups={toAccordionGroups(LUNCH_GROUPS)} />
        <RollAccordion title="Vegetarian" items={toAccordionItems(VEGETARIAN_ITEMS)} />
        <RollAccordion title="Teriyaki & Tempura" items={toAccordionItems(TERIYAKI_TEMPURA_ITEMS)} />
        <RollAccordion title="Cold Refreshments" items={toAccordionItems(COLD_ITEMS)} />
        <RollAccordion title="Hot Beverages" items={toAccordionItems(WARM_ITEMS)} />
        <RollAccordion title="Desserts" items={toAccordionItems(DESSERT_ITEMS)} />
        <RollAccordion title="Desserts" items={toAccordionItems(DESSERT_ITEMS)} />

      </div>
    </div>
  );
}