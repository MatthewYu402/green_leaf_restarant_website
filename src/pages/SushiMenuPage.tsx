import './SushiMenuPage.css'

// Icons
import flowerIcon from "@/assets/icons/flower-icon.svg"
import circleIcon from "@/assets/icons/circle.svg"

// Images


// Components
import SushiRolls from '../components/menu/SushiRolls';
import Section from '../components/shared/Section';
import Divider from '../components/shared/Divider';
import NigiriSashimi from '../components/menu/NigiriSashimi';
import SushiSalads from '../components/menu/SushiSalads';
import RollAccordion from '../components/menu/RollAccordion';
import GalleryCarousel from '../components/shared/GalleryCarousel';

// Anniversary Roll Images:
import FirstYearRoll from '@/assets/images/anniversary-rolls/first-year-roll.jpg'
import SecondYearRoll from '@/assets/images/anniversary-rolls/second-year-roll.jpg'
import ThirdYearRoll from '@/assets/images/anniversary-rolls/third-year-roll.jpeg'
import FourthYearRoll from '@/assets/images/anniversary-rolls/fourth-year-roll.jpg'
import FifthYearRoll from '@/assets/images/anniversary-rolls/fifth-year-roll.jpeg'
import SixthYearRoll from '@/assets/images/anniversary-rolls/sixth-year-roll.jpg'
import SeventhYearRoll from '@/assets/images/anniversary-rolls/seventh-year-roll.jpg'
import EighthYearRoll from '@/assets/images/anniversary-rolls/eighth-year-roll.jpg'
import EleventhYearRoll from '@/assets/images/anniversary-rolls/eleventh-year-roll.jpg'
import TwelfthYearRoll from '@/assets/images/anniversary-rolls/twelfth-year-roll.jpg'
import ThirteenthYearRoll from '@/assets/images/anniversary-rolls/thirteenth-year-roll.jpg'
import FifteenthYearRoll from '@/assets/images/anniversary-rolls/fifteenth-year-roll.jpg'
import SeventeenthYearRoll from '@/assets/images/anniversary-rolls/seventeenth-year-roll.jpg'
import NineteenthYearRoll from '@/assets/images/anniversary-rolls/nineteenth-year-roll.jpg'
import twentyYearRoll from '@/assets/images/anniversary-rolls/twenty-year-roll.jpg'

// Sushi Special Rolls
import MatthewRoll from '@/assets/images/sushi-special-rolls/matt-roll.jpg'
import HajiRoll from '@/assets/images/sushi-special-rolls/haji-roll.webp'
import BakedScallopRoll from '@/assets/images/sushi-special-rolls/baked-scallop-roll.webp'
import PeggyTwoRoll from '@/assets/images/sushi-special-rolls/peggy-two-roll.jpg'
import SushiSisterRoll from '@/assets/images/sushi-special-rolls/sushi-sisiter-roll.jpg'
import UnforgetableRoll from '@/assets/images/sushi-special-rolls/unforgetable-roll.jpg'
import DiamondMikeRoll from '@/assets/images/sushi-special-rolls/diamond-mike-roll.jpg'
import GardenRoll from '@/assets/images/sushi-special-rolls/garden-roll.jpg'
import SonAndLawRoll from '@/assets/images/sushi-special-rolls/son-in-law-roll.jpg'
import PenthouseRoll from '@/assets/images/sushi-special-rolls/penthouse-roll.webp'

// Sashimi and Nigiri Images
import ScallopNigiri from '@/assets/images/nigiri-sashimi/scallop-nigiri.jpg'
import SalmonRoe from '@/assets/images/nigiri-sashimi/salmon-roe-roll.png'

// Sushi Salad Images
import BabyOctopusSalad from '@/assets/images/soups-salads/octopus-salad.png'

interface RollItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

interface NigiriItem {
  name: string;
  fillingNote?: string;
  nigiriPrice: string;
  sashimiPrice: string;
  image?: string;
}

const ANNIVERSARY_ROLLS:RollItem[]= [
  { name: "1st Year", image: FirstYearRoll, description: "Old Bay crabmeat and avocado, fried shrimp tempura style", price: "$14.95" },
  { name: "2nd Year", image: SecondYearRoll, description: "Spicy yellowtail topped with avocado and tuna", price: "$14.95" },
  { name: "3rd Year", image: ThirdYearRoll, description: "Fusion-style spicy tuna roll paired with tuna, calamari salad, cucumber, and seaweed salad", price: "$14.95" },
  { name: "4th Year", image: FourthYearRoll, description: "Spicy tuna, avocado, and crabmeat topped with tuna", price: "$14.95" },
  { name: "5th Year", image: FifthYearRoll, description: "Spicy tuna and crabmear, topped with white tuna, salmon, tuna, avocado, and tempura flakes", price: "$14.95" },
  { name: "6th Year", image: SixthYearRoll, description: "Spicy salmon and avocado, topped with fresh salmon, cream cheese, and tempura flakes", price: "$14.95" },
  { name: "7th Year", image: SeventhYearRoll, description: "Spicy tuna and salmon, topped with spicy crabmeat and scallop", price: "$14.95" },
  { name: "8th Year", image: EighthYearRoll, description: "Spicy tuna, topped with avocado and spicy salmon", price: "$14.95" },
  { name: "9th Year",  description: "Shimp tempura and asparagus, topped with spicy yellowtail and black crispy rice", price: "$14.95" },
  { name: "10th Year", description: "Yellowtail, salmon and spicy tuna, topped with salmon, mango, and spicy sauce", price: "$14.95" },
  { name: "11th Year", image: EleventhYearRoll, description: "Shrimp tempura topped with white tuna, jalapeno, and spicy sauce", price: "$14.95" },
  { name: "12th Year", image: TwelfthYearRoll, description: "Crabmeat, spicy tuna, and crispy flakes inside, topped with avocado, spicy yellowtail, and jalapeno", price: "$14.95" },
  { name: "13th Year", image: ThirteenthYearRoll, description: "Spicy salmon and avocado, topped with pepper seared tuna", price: "$14.95" },
  { name: "14th Year", description: "Spicy salmon and black crispy rice, topped with yellowtail and avocado", price: "$14.95" },
  { name: "15th Year", image: FifteenthYearRoll, description: "Spicy salmon and crispy rice, topped with salmon and avocado with spicy sauce", price: "$14.95" },
  { name: "16th Year", description: "Spicy yellowtail and crispy rice, topped with salmon, avocado, and spicy sauce", price: "$14.95" },
  { name: "17th Year", image: SeventeenthYearRoll, description: "Spicy salmon and avocado, topped with white tuna, spicy salmon, and roe", price: "$14.95" },
  { name: "18th Year", image: EighthYearRoll, description: "Shrimp tempuram crabstick, and avocado, topped with spicy tuna and spicy sauce", price: "$14.95" },
  { name: "19th Year", image: NineteenthYearRoll, description: "Yellowtail, avocado, and jalapenos, topped with spicy tuna and spicy sauce", price: "$14.95" },
  { name: "20th Year", image: twentyYearRoll, description: "Spicy tuna and avocado, topped with torched salmon, jalapenos, and spicy sauce", price: "$14.95" },
];

// Goes through all 20 eventually — for now, only 2 have photos to show.
// Once more real per-roll photos exist, change .slice(0, 2) to include more
// (or drop it entirely to show all 20).
const ANNIVERSARY_CAROUSEL_IMAGES = ANNIVERSARY_ROLLS
  .filter((roll): roll is typeof roll & { image: string } => roll.image !== undefined)
  .map((roll) => ({
    src: roll.image,
    alt: roll.name,
    description: `${roll.name} — ${roll.description}`,
  }));

const SUSHISPECIALROLLS:RollItem[] = [
  { name: "Peggy", description: "Crabmeat, avocado, and tempura flakes with tuna and wasabi mirin sauce", price: "$14.95" },
  { name: "Peggy #2", image: PeggyTwoRoll, description: "California roll topped with torched, fish roe, and rice seasoning", price: "$14.95" },
  { name: "Esther", description: "Salmon and avocado, topped with spicy tuna and tempura flakes", price: "$14.95" },
  { name: "Matthew", image: MatthewRoll, description: "Salmon, crab stick, topped with avocado, spicy yellowtail and tempura flakes", price: "$14.95" },
  { name: "Ginger", description: "Spicy tuna, salmon skin topped with salmon and fish roe", price: "$14.95" },
  { name: "Raven", description: "Spicy yellowtail, topped with cripsy black rice and spicy tuna on top", price: "$14.95" },
  { name: "F-Ken", description: "Crab stick and cream cheese tempura style, topped with spicy tuna", price: "$14.95" },
  { name: "Godfather", description: "Shrimp tempura, old bay crabmeat, seaweed salad and avocado wrapped in yellow soy seaweed", price: "$14.95" },
  { name: "Penthouse (Mitchell Brown's Creation)", image: PenthouseRoll, description: "Shrimp tempura, cilantro, avocado, and tuna, finished with lime", price: "$14.95" },
  { name: "Angel", description: "Spicy yellowtail, topped with seaweed salad and spicy tuna", price: "$14.95" },
  { name: "Sweet Heart", description: "Spicy tuna, avocado, and tuna shaped as a heart", price: "$15.95" },
  { name: "Mac Daddy", description: "Fried soft-shell crab, cream cheese, topped with spicy lobster", price: "$16.95" },
  { name: "Hurricane", description: "Crabstick, mango, and apple, topped with spicy tuna and tempura flakes", price: "$14.95" },
  { name: "AJ", description: "Tempura california roll topped with grilled crabmeat on top", price: "$14.95" },
  { name: "Haji (The Hajimihalis Family)", image: HajiRoll, description: "Shrimp tempura, topped with crispy spicy crab meat and crabstick", price: "$14.95" },
  { name: "Baked Scallop", image: BakedScallopRoll, description: "California roll topped with spicy scallop", price: "$14.95" },
  { name: "Sushi Sister", image: SushiSisterRoll, description: "Salmon and cucumber topped with tuna, avocado, mango, and spicy sauce", price: "$14.95" },
  { name: "Diamond Mike (Michael Shield's Creation)", image: DiamondMikeRoll, description: "Crabstick and spicy salmon, topped with salmon, eel, avocado, and tempura flakes", price: "$14.95" },
  { name: "Unforgettable", image: UnforgetableRoll, description: "Spicy tuna, topped with eel and avocado", price: "$14.95" },
  { name: "Baltimore", description: "Soft-shell crab topped with spicy crabmeat", price: "$15.95" },
  { name: "Son-In-Law Mango", image: SonAndLawRoll, description: "Shrimp tempura, topped with cripsy spicy tuna and mango", price: "$14.95" },
  { name: "Garden", image: GardenRoll, description: "Tempura sweet potato and yellow radish, topped with avocado", price: "$8.95" },
  { name: "Crunchy Roll", description: "Lump crabmeat, avocado, and shimp, topped with fish roe and tempura flakes wrapped in soy paper", price: "$14.95" },
  { name: "Futomaki", description: "Crabstick, egg, avocado, and vegetables", price: "$13.95" },
  { name: "Phoenix", description: "Chicken tempura topped with eel and avocado", price: "$14.95" },
  { name: "Pretty In Red", description: "Lump Crabmeat and avocado, topped with tempura flakes, tuna, and spicy sauce", price: "$14.95" },
  { name: "Pine Nut Fish Roll", description: "Tempura cod with spicy sauce", price: "$9.95" },
  { name: "Red Dragon", description: "Shrimp Tempura topped with spicy tuna", price: "$14.95" },
  { name: "Spicy Lobster", description: "Crabstick topped with spicy lobster", price: "$15.50" },
  { name: "Teryaki Salmon", description: "Grilled Salmon teryaki sauce", price: "$8.95" },
  { name: "Tokyo", description: "Spicy tuna topped with tuna, salmon, and yellowtail with spicy sauce", price: "$14.95" },
  { name: "TNT Roll", description: "Spicy Lobster topped with tuna and tempura flakes", price: "$15.50" },
  { name: "Two to Tango", description: "Shrimp tempura topped with fresh shrimp and avocado", price: "$14.95" },
  { name: "Imperial Crab", description: "Crabstick and avocado topped with salmon and spicy grilled crabmeat", price: "$14.95" },
];

const MAKI_ROLLS: RollItem[] = [
  { name: "California Roll", description: "Crabstick, avocado, and fish roe", price: "$5.95" },
  { name: "Philadelphia Roll", description: "Smoked salmon, cream cheese, and cucumber", price: "$6.95" },
  { name: "Dragon Roll", description: "Shrimp tempura topped with eel and avocado", price: "$14.95" },
  { name: "Volcano Roll", description: "Tuna and salmon topped with torched spicy sauce", price: "$8.95" },
  { name: "Rainbow Roll", description: "Crabstick and avocado, topped with salmon, tuna, and avocado", price: "$12.95" },
  { name: "Crazy Rock'n Roll", description: "Eel and shrimp topped with avocado", price: "$14.95" },
  { name: "Spider Roll", description: "Soft-shell crab with cucumber and fish roe", price: "$10.95" },
  { name: "Tuna", description: "", price: "$5.95" },
  { name: "Spicy Tuna", description: "", price: "$6.95" },
  { name: "Tuna Avocado", description: "", price: "$6.95" },
  { name: "Asparagas & Cucumber", description: "", price: "$4.95" },
  { name: "Avocado Roll", description: "", price: "$4.95" },
  { name: "Avocado & Cucumber", description: "", price: "$4.95" },
  { name: "Eel Avocado", description: "", price: "$7.95" },
  { name: "Lobster", description: "", price: "$11.95" },
  { name: "Lump Crabmeat Avocado", description: "", price: "$10.95" },
  { name: "Crispy Spicy Crab Roll", description: "", price: "$11.95" },
  { name: "Salmon", description: "", price: "$5.95" },
  { name: "Salmon Avocado", description: "", price: "$6.95" },
  { name: "Spicy Salmon", description: "", price: "$6.95" },
  { name: "Shrimp Avocado", description: "", price: "$6.95" },
  { name: "Shrimp Tempura", description: "", price: "$7.95" },
  { name: "Vegetable", description: "", price: "$5.95" },
  { name: "Cucumber", description: "", price: "$4.95" },
  { name: "Yellowtail Scallion & Cucumber", description: "", price: "$7.95" },
  { name: "Spicy Yellowtail", description: "", price: "$7.95" },
];

const NIGIRI_SASHIMI: NigiriItem[] = [
  { name: "Tuna", fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
  { name: "White Tuna", fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
  { name: "Salmon", fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
  { name: "Salmon Roe", image: SalmonRoe, fillingNote: "", nigiriPrice: "$5.95", sashimiPrice: "$5.95" },
  { name: "Smoked Salmon", fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
  { name: "Crab Stick", fillingNote: "", nigiriPrice: "$4.95", sashimiPrice: "$5.95" },
  { name: "Lobster", fillingNote: "", nigiriPrice: "$8.95", sashimiPrice: "$10.95" },
  { name: "Mackeral", fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
  { name: "Bean Curd", fillingNote: "", nigiriPrice: "$4.95", sashimiPrice: "$5.95" },
  { name: "Flying Fish Roe", fillingNote: "", nigiriPrice: "$4.95", sashimiPrice: "$5.50" },
  { name: "Freshwater Eel", fillingNote: "", nigiriPrice: "$5.95", sashimiPrice: "$7.95" },
  { name: "Octopus", fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
  { name: "Red Snapper", fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
  { name: "Scallop", image: ScallopNigiri, fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
  { name: "Squid", fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
  { name: "Surf Clam", fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
  { name: "Ebi Shrimp", fillingNote: "Cooked", nigiriPrice: "$5.95", sashimiPrice: "$6.95" },
  { name: "Sweet Shrimp", fillingNote: "Raw", nigiriPrice: "$8.95", sashimiPrice: "$8.95" },
  { name: "Tomago", fillingNote: "Egg", nigiriPrice: "$4.95", sashimiPrice: "$5.95" },
  { name: "Yellowtail", fillingNote: "", nigiriPrice: "$5.95", sashimiPrice: "$6.95" },
  { name: "Uni", fillingNote: "Market Price", nigiriPrice: "M.P", sashimiPrice: "M.P" },
];

const SPECIALTY_ROLLS: RollItem[] = [
  { name: "Crunchy Roll", description: "Lump crabmeat, avocado, and shimp, topped with fish roe and tempura flakes wrapped in soy paper", price: "$14.95" },
  { name: "Futomaki", description: "Crabstick, egg, avocado, and vegetables", price: "$13.95" },
  { name: "Phoenix", description: "Chicken tempura topped with eel and avocado", price: "$14.95" },
  { name: "Pretty In Red", description: "Lump Crabmeat and avocado, topped with tempura flakes, tuna, and spicy sauce", price: "$14.95" },
  { name: "Pine Nut Fish Roll", description: "Tempura cod with spicy sauce", price: "$9.95" },
  { name: "Red Dragon", description: "Shrimp Tempura topped with spicy tuna", price: "$14.95" },
  { name: "Spicy Lobster", description: "Crabstick topped with spicy lobster", price: "$15.50" },
  { name: "Teryaki Salmon", description: "Grilled Salmon teryaki sauce", price: "$8.95" },
  { name: "Tokyo", description: "Spicy tuna topped with tuna, salmon, and yellowtail with spicy sauce", price: "$14.95" },
  { name: "TNT Roll", description: "Spicy Lobster topped with tuna and tempura flakes", price: "$15.50" },
  { name: "Two to Tango", description: "Shrimp tempura topped with fresh shrimp and avocado", price: "$14.95" },
  { name: "Imperial Crab", description: "Crabstick and avocado topped with salmon and spicy grilled crabmeat", price: "$14.95" },
];

const SUSHI_SALADS: RollItem[] = [
  { name: "Sushi Bar Salad", description: "", price: "$6.95" },
  { name: "Seaweed Salad", description: "", price: "$5.95" },
  { name: "California Style Salad", description: "", price: "$6.95" },
  { name: "Calamari Salad", description: "", price: "$7.95" },
  { name: "Tuna Tartare", description: "", price: "$10.95" },
  { name: "Summer Roll", description: "", price: "$6.95" },
  { name: "Baby Octopus Salad", description: "", price: "$7.95" },
  { name: "California Fruit Roll", description: "", price: "$6.95" },
];

export default function SushiMenu() {
  return (
    <div className="sushi-menu-page">

      <Section className='reveal-block-fade'>
        <div className="special-feature">
          <div className="special-feature-left">
            <h4 className="special-feature-title">Special Feature</h4>
            <h2>20th Year Anniversary Roll</h2>
            <p className="special-feature-description">A celebration of two decades of culinary excellence. Spicy salmon, avocado, topped with torched salmon. Finished with fried tempura flakes, spicy sauce, and thinly sliced japaleňo. </p>
            <span className="divider-line"></span>
            <p className="special-feature-price">$14.95</p>
          </div>
          <div className="special-feature-right">
            <img className="twenty-year-roll" src={twentyYearRoll}></img>
          </div>
        </div>
      </Section>

      <Divider iconUrl={flowerIcon} className="home-mobile-divider" />

      {/* Mobile-only — sits between the Special Feature and the accordions.
          Goes through all 20 rolls eventually; only 2 have real photos so far. */}
      <Section className="reveal-block-slide anniversary-carousel-mobile">
        <h4 className="anniversary-carousel-mobile-label">A Roll for Every Year</h4>
        <GalleryCarousel images={ANNIVERSARY_CAROUSEL_IMAGES} />
      </Section>

      {/* Desktop/tablet — full section-by-section layout, unchanged. Hidden on mobile (see CSS). */}
      <div className="sushi-menu-desktop-lists">
        <Section className='reveal-block-fade'>
          <Divider iconUrl={flowerIcon} iconAlt='flower icon' thickness='2px' />
        </Section>

        <Section className='reveal-block-slide'>
          <SushiRolls
            title="20th Anniversary Rolls"
            subtitle="Celebrating two decades of culinary excellence."
            items={ANNIVERSARY_ROLLS}
          />
        </Section>

        <Divider iconUrl={circleIcon} lineWidth='600px' thickness='2px' />

        <Section className='reveal-block-slide'>
          <SushiRolls
            title="Sushi Special Rolls"
            subtitle='Rolls named after people and places that shaped our story - friends, staff, and hometown pride.'
            className="rolls-section--plain"
            columns={3}
            items={SUSHISPECIALROLLS
            
            }
          />
        </Section>

        <Divider iconUrl={circleIcon} lineWidth='600px' thickness='2px' />

        <Section className='reveal-block-slide'>
          <SushiRolls
            title="Maki Rolls"
            subtitle='Cut into 6 to 8 pieces'
            className="rolls-section--plain"
            columns={3}
            items={MAKI_ROLLS}
          />
        </Section>

        <Divider iconUrl={circleIcon} lineWidth='600px' thickness='2px' />

        <Section className='reveal-block-slide'>
          <NigiriSashimi
            title="Nigiri & Sashimi"
            note="Nigiri (with rice) / Sashimi (without rice)"
            columns={3}
            items={NIGIRI_SASHIMI}
          />
        </Section>

        <Divider iconUrl={circleIcon} lineWidth='600px' thickness='2px' />

        <Section className='reveal-block-slide'>
          <SushiSalads
            title="Sushi Salads"
            subtitle=""
            image={BabyOctopusSalad}
            imageAlt=""
            items={SUSHI_SALADS}
          />
        </Section>
      </div>

      {/* Mobile — same real data, collapsed into accordions. Hidden above the breakpoint (see CSS). */}
      <div className="sushi-menu-mobile-lists">
        <RollAccordion
          title="20th Anniversary Rolls"
          items={ANNIVERSARY_ROLLS.map((r) => ({ name: r.name, description: r.description, priceDisplay: r.price, image: r.image }))}
        />
        <RollAccordion
          title="Namesake Rolls"
          items={SUSHISPECIALROLLS
          .map((r) => ({ name: r.name, description: r.description, priceDisplay: r.price, image: r.image }))}
        />
        <RollAccordion
          title="Maki Rolls"
          items={MAKI_ROLLS.map((r) => ({ name: r.name, description: r.description, priceDisplay: r.price, image: r.image }))}
        />
        <RollAccordion
          title="Nigiri & Sashimi"
          items={NIGIRI_SASHIMI.map((i) => ({
            name: i.name,
            description: i.fillingNote,
            priceDisplay: `${i.nigiriPrice} / ${i.sashimiPrice}`,
            image: i.image,
          }))}
        />
        <RollAccordion
          title="Specialty Rolls"
          items={SPECIALTY_ROLLS.map((r) => ({ name: r.name, description: r.description, priceDisplay: r.price, image: r.image }))}
        />
        <RollAccordion
          title="Sushi Salads"
          items={SUSHI_SALADS.map((r) => ({ name: r.name, description: r.description, priceDisplay: r.price, image: r.image }))}
        />
      </div>

    </div>
  );
}