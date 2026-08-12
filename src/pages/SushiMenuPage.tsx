import './SushiMenuPage.css'
import specialImage from "../assets/square-sushi.png"
import flowerIcon from "../assets/flower-icon.svg"

// Components
import MenuCategory from '../components/menu/MenuCategory';
import Section from '../components/shared/Section';
import Divider from '../components/shared/Divider';

export default function SushiMenu() {
  return (
    <div className="sushi-menu-page">

      <Section className='reveal-block-fade'>
        <div className="special-feature">
          <div className="special-feature-left">
            <h4 className="special-feature-title">Special Feature</h4>
            <h2>20th Year Anniversary Roll</h2>
            <p className="special-feature-description">A celebration of two decades of culinary excellence. Spicy salmon, avocado, topped with torched salmon. Finished with fried tempura flakes, spicy sauce, and thinly sliced japaleno. </p>
            <span className="divider-line"></span>
            <p>$16</p>
          </div>
          <div className="special-feature-right">
            <img className="twenty-year-roll" src={specialImage}></img>
          </div>
        </div>
      </Section>

      <Section className='reveal-block-fade'>
        <Divider iconUrl={flowerIcon} iconAlt='flower icon' thickness='2px' />
      </Section>
     
      <Section className='reveal-block-slide'>
        <div className="sushi-rolls-row">
          <MenuCategory
            name="Specialty Rolls"
            menu_items={[
              { name: "Peggy", description: "Crabmeat, avocado, and tempura flakes with tuna and wasabi mirin sauce", price: "$14.95" },
              { name: "Esther", description: "Salmon and avocado, topped with spicy tuna and tempura flakes", price: "$14.95" },
              { name: "Matthew", description: "Salmon, crab stick, topped with avocado, spicy yellowtail and tempura flakes", price: "$14.95" },
              { name: "Ginger", description: "Spicy tuna, salmon skin topped with salmon and fish roe", price: "$14.95" },
              { name: "Raven", description: "Spicy yellowtail, topped with cripsy black rice and spicy tuna on top", price: "$14.95" },
              { name: "F-Ken", description: "Crab stick and cream cheese tempura style, topped with spicy tuna", price: "$14.95" },
              { name: "Godfather", description: "Shrimp tempura, old bay crabmeat, seaweed salad and avocado wrapped in yellow soy seaweed", price: "$14.95" },
              { name: "Penthouse", description: "Shrimp tempura, cilantro, avocado, and tuna, finished with lime", price: "$14.95" },
              { name: "Angel", description: "Spicy yellowtail, topped with seaweed salad and spicy tuna", price: "$14.95" },
              { name: "Sweet Heart", description: "Spicy tuna, avocado, and tuna shaped as a heart", price: "$15.95" },
              { name: "Mac Daddy", description: "Fried soft-shell crab, cream cheese, topped with spicy lobster", price: "$16.95" },
              { name: "Hurricane", description: "Crabstick, mango, and apple, topped with spicy tuna and tempura flakes", price: "$14.95" },
              { name: "AJ", description: "Tempura california roll topped with grilled crabmeat on top", price: "$14.95" },
              { name: "Haji", description: "Shrimp tempura, topped with crispy spicy crab meat and crabstick", price: "$14.95" },
              { name: "Baked Scallop", description: "California roll topped with spicy scallop", price: "$14.95" },
              { name: "Sushi Sister", description: "Salmon and cucumber topped with tuna, avocado, mango, and spicy sauce", price: "$14.95" },
              { name: "Diamond Mike", description: "Crabstick and spicy salmon, topped with salmon, eel, avocado, and tempura flakes", price: "$14.95" },
              { name: "Unforgettable", description: "Spicy tuna, topped with eel and avocado", price: "$14.95" },
              { name: "Baltimore", description: "Soft-shell crab topped with spicy crabmeat", price: "$15.95" },
              { name: "Son-In-Law Mango", description: "Shrimp tempura, topped with cripsy spicy tuna and mango", price: "$14.95" },
              { name: "Garden", description: "Tempura sweet potato and yellow radish, topped with avocado", price: "$8.95" },
            ]}
          />
          <MenuCategory
            name="Anniversary Rolls"
            menu_items={[
              { name: "1st Year", description: "Old Bay crabmeat and avocado, fried shrimp tempura style", price: "$14.95", pieces: 8 },
              { name: "2nd Year", description: "Spicy yellowtail topped with avocado and tuna", price: "$14.95", pieces: 8 },
              { name: "3rd Year", description: "Fusion-style spicy tuna roll paired with tuna, calamari salad, cucumber, and seaweed salad", price: "$14.95" },
              { name: "4th Year", description: "Spicy tuna, avocado, and crabmeat topped with tuna", price: "$14.95", pieces: 8 },
              { name: "5th Year", description: "Spicy tuna and crabmear, topped with white tuna, salmon, tuna, avocado, and tempura flakes", price: "$14.95", pieces: 8 },
              { name: "6th Year", description: "Spicy salmon and avocado, topped with fresh salmon, cream cheese, and tempura flakes", price: "$14.95", pieces: 8 },
              { name: "7th Year", description: "Spicy tuna and salmon, topped with spicy crabmeat and scallop", price: "$14.95", pieces: 8 },
              { name: "8th Year", description: "Spicy tuna, topped with avocado and spicy salmon", price: "$14.95", pieces: 8 },
              { name: "9th Year", description: "Shimp tempura and asparagus, topped with spicy yellowtail and black crispy rice", price: "$14.95", pieces: 8 },
              { name: "10th Year", description: "Yellowtail, salmon and spicy tuna, topped with salmon, mango, and spicy sauce", price: "$14.95", pieces: 8 },
              { name: "11th Year", description: "Shrimp tempura topped with white tuna, jalapeno, and spicy sauce", price: "$14.95", pieces: 8 },
              { name: "12th Year", description: "Crabmeat, spicy tuna, and crispy flakes inside, topped with avocado, spicy yellowtail, and jalapeno", price: "$14.95", pieces: 8 },
              { name: "13th Year", description: "Spicy salmon and avocado, topped with pepper seared tuna", price: "$14.95", pieces: 8 },
              { name: "14th Year", description: "Spicy salmon and black crispy rice, topped with yellowtail and avocado", price: "$14.95", pieces: 8 },
              { name: "15th Year", description: "Spicy salmon and crispy rice, topped with salmon and avocado with spicy sauce", price: "$14.95", pieces: 8 },
              { name: "16th Year", description: "Spicy yellowtail and crispy rice, topped with salmon, avocado, and spicy sauce", price: "$14.95", pieces: 8 },
              { name: "17th Year", description: "Spicy salmon and avocado, topped with white tuna, spicy salmon, and roe", price: "$14.95", pieces: 8 },
              { name: "18th Year", description: "Shrimp tempuram crabstick, and avocado, topped with spicy tuna and spicy sauce", price: "$14.95", pieces: 8 },
              { name: "19th Year", description: "Yellowtail, avocado, and jalapenos, topped with spicy tuna and spicy sauce", price: "$14.95", pieces: 8 },
              { name: "20th Year", description: "Spicy tuna and avocado, topped with torched salmon, jalapenos, and spicy sauce", price: "$14.95", pieces: 8 },
            ]}
          />
        </div>
      </Section>
     

    </div>
  );
}