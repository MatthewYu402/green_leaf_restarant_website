import './SushiMenuPage.css'
import specialImage from "../assets/twenty-year-roll.jpg"
import flowerIcon from "../assets/flower-icon.svg"

// Components
import SushiRolls from '../components/menu/SushiRolls';
import Section from '../components/shared/Section';
import Divider from '../components/shared/Divider';
import NigiriSashimi from '../components/menu/NigiriSashimi';
import SpecialtyRolls from '../components/menu/SpecialtyRolls';
import SushiSalads from '../components/menu/SushiSalads';

// Icons
import circleIcon from "../assets/circle.svg"

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
        <SushiRolls
          title="20th Anniversary Rolls"
          subtitle="Celebrating two decades of culinary excellence."
          items={[
            { name: "1st Year", description: "Old Bay crabmeat and avocado, fried shrimp tempura style", price: "$14.95" },
            { name: "2nd Year", description: "Spicy yellowtail topped with avocado and tuna", price: "$14.95" },
            { name: "3rd Year", description: "Fusion-style spicy tuna roll paired with tuna, calamari salad, cucumber, and seaweed salad", price: "$14.95" },
            { name: "4th Year", description: "Spicy tuna, avocado, and crabmeat topped with tuna", price: "$14.95" },
            { name: "5th Year", description: "Spicy tuna and crabmear, topped with white tuna, salmon, tuna, avocado, and tempura flakes", price: "$14.95" },
            { name: "6th Year", description: "Spicy salmon and avocado, topped with fresh salmon, cream cheese, and tempura flakes", price: "$14.95" },
            { name: "7th Year", description: "Spicy tuna and salmon, topped with spicy crabmeat and scallop", price: "$14.95" },
            { name: "8th Year", description: "Spicy tuna, topped with avocado and spicy salmon", price: "$14.95" },
            { name: "9th Year", description: "Shimp tempura and asparagus, topped with spicy yellowtail and black crispy rice", price: "$14.95" },
            { name: "10th Year", description: "Yellowtail, salmon and spicy tuna, topped with salmon, mango, and spicy sauce", price: "$14.95" },
            { name: "11th Year", description: "Shrimp tempura topped with white tuna, jalapeno, and spicy sauce", price: "$14.95" },
            { name: "12th Year", description: "Crabmeat, spicy tuna, and crispy flakes inside, topped with avocado, spicy yellowtail, and jalapeno", price: "$14.95" },
            { name: "13th Year", description: "Spicy salmon and avocado, topped with pepper seared tuna", price: "$14.95" },
            { name: "14th Year", description: "Spicy salmon and black crispy rice, topped with yellowtail and avocado", price: "$14.95" },
            { name: "15th Year", description: "Spicy salmon and crispy rice, topped with salmon and avocado with spicy sauce", price: "$14.95" },
            { name: "16th Year", description: "Spicy yellowtail and crispy rice, topped with salmon, avocado, and spicy sauce", price: "$14.95" },
            { name: "17th Year", description: "Spicy salmon and avocado, topped with white tuna, spicy salmon, and roe", price: "$14.95" },
            { name: "18th Year", description: "Shrimp tempuram crabstick, and avocado, topped with spicy tuna and spicy sauce", price: "$14.95" },
            { name: "19th Year", description: "Yellowtail, avocado, and jalapenos, topped with spicy tuna and spicy sauce", price: "$14.95" },
            { name: "20th Year", description: "Spicy tuna and avocado, topped with torched salmon, jalapenos, and spicy sauce", price: "$14.95" },
          ]}
        />
      </Section>

      <Divider iconUrl={circleIcon} lineWidth='600px' thickness='2px' />
      
      <Section className='reveal-block-slide'>
        <SushiRolls
          title="Namesake Rolls"
          subtitle='Rolls named after people and places that shaped our story - friends, staff, and hometown pride.'
          className="rolls-section--plain"
          columns={2}
          items={[
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
      </Section>

      <Divider iconUrl={circleIcon} lineWidth='600px' thickness='2px' />

      <Section className='reveal-block-slide'>
        <SushiRolls
          title="Maki Rolls"
          subtitle='Cut into 6 to 8 pieces'
          className="rolls-section--plain"
          columns={3}
          items={[
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
            { name: "Crispy Spicy Crab Roll", description: "", price: "$11.95"},
            { name: "Salmon", description: "", price: "$5.95" },
            { name: "Salmon Avocado", description: "", price: "$6.95" },
            { name: "Spicy Salmon", description: "", price: "$6.95" },
            { name: "Shrimp Avocado", description: "", price: "$6.95" },
            { name: "Shrimp Tempura", description: "", price: "$7.95" },
            { name: "Vegetable", description: "", price: "$5.95" },
            { name: "Cucumber", description: "", price: "$4.95" },
            { name: "Yellowtail Scallion & Cucumber", description: "", price: "$7.95" },
            { name: "Spicy Yellowtail", description: "", price: "$7.95" },

          ]}
        />
      </Section>

      <Divider iconUrl={circleIcon} lineWidth='600px' thickness='2px'/>

      <Section className='reveal-block-slide'>
        <NigiriSashimi
          title="Nigiri & Sashimi"
          note="2pcs per order. Nigiri (with rice) / Sashimi (without rice)"
          columns={3}
          items={[
            { name: "Tuna", fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
            { name: "White Tuna", fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
            { name: "Salmon", fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
            { name: "Salmon Roe", fillingNote: "", nigiriPrice: "$5.95", sashimiPrice: "$5.95" },
            { name: "Smoked Salmon", fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
            { name: "Crab Stick", fillingNote: "", nigiriPrice: "$4.95", sashimiPrice: "$5.95" },
            { name: "Lobster", fillingNote: "", nigiriPrice: "$8.95", sashimiPrice: "$10.95" },
            { name: "Mackeral", fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
            { name: "Bean Curd", fillingNote: "", nigiriPrice: "$4.95", sashimiPrice: "$5.95" },
            { name: "Flying Fish Roe", fillingNote: "", nigiriPrice: "$4.95", sashimiPrice: "$5.50" },
            { name: "Freshwater Eel", fillingNote: "", nigiriPrice: "$5.95", sashimiPrice: "$7.95" },
            { name: "Octopus", fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
            { name: "Red Snapper", fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
            { name: "Scallop", fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
            { name: "Squid", fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
            { name: "Surf Clam", fillingNote: "", nigiriPrice: "$5.50", sashimiPrice: "$6.95" },
            { name: "Ebi Shrimp", fillingNote: "Cooked", nigiriPrice: "$5.95", sashimiPrice: "$6.95" },
            { name: "Sweet Shrimp", fillingNote: "Raw", nigiriPrice: "$8.95", sashimiPrice: "$8.95" },
            { name: "Tomago", fillingNote: "Egg", nigiriPrice: "$4.95", sashimiPrice: "$5.95" },
            { name: "Yellowtail", fillingNote: "", nigiriPrice: "$5.95", sashimiPrice: "$6.95" },
            { name: "Uni", fillingNote: "Market Price", nigiriPrice: "M.P", sashimiPrice: "M.P" },
          ]}
        />
      </Section>
      
      <Divider iconUrl={circleIcon} lineWidth='600px' thickness='2px' />

      <Section className='reveal-block-slide'>
        <SpecialtyRolls
          title="Specialty Rolls"
          subtitle=""
          image={specialImage}
          imageAlt=""
          className="specialty-rolls-section--reversed"
          items={[
            { name: "Crunchy Roll", description: "Lump crabmeat, avocado, and shimp, topped with fish roe and tempura flakes wrapped in soy paper", price: "$14.95" },
            { name: "Futomaki", description: "Crabstick, egg, avocado, and vegetables", price: "$13.95" },
            { name: "Phoenix", description: "Chicken tempura topped with eel and avocado", price: "$14.95" },
            { name: "Pretty In Red", description: "Lump Crabmeat and avocado, topped with tempura flakes, tuna, and spicy sauce", price: "$14.95" },
            { name: "Pine Nut Fish Roll", description: "Tempura cod with spicy sauce", price: "$9.95" },
            { name: "Red Dragon", description: "Shrimp Tempura topped with spicy tuna", price: "$14.95" },
            { name: "Spicy Lobster", description: "Crabstick topped with spicy lobster", price: "$15.50" },
            { name: "Teryaki Salmon", description: "", price: "$8.95" },
            { name: "Tokyo", description: "Spicy tuna topped with tuna, salmon, and yellowtail with spicy sauce", price: "$14.95" },
            { name: "TNT Roll", description: "Spicy Lobster topped with tuna and tempura flakes", price: "$15.50" },
            { name: "Two to Tango", description: "Shrimp tempura topped with fresh shrimp and avocado", price: "$14.95" },
            { name: "Imperial Crab", description: "Crabstick and avocado topped with salmon and spicy grilled crabmeat", price: "$14.95" },
            { name: "Tekka Don (Tuna)", description: "Fresh tuna on top of seasoned rice", price: "$20.95" },
            { name: "Una Jyu", description: "Broiled Eel over seasoned rice", price: "$20.95" },
            { name: "Sashimi Deluxe", description: "", price: "$24.95" },
            { name: "Sushi Deluxe", description: "", price: "$20.95" },
            { name: "Sushi & Sashimi Combo", description: "", price: "$29.95" },
            { name: "Chirashi Don", description: "", price: "$20.95" },
            { name: "Salmon Don", description: "", price: "$20.95" },
          ]}
        />
      </Section>

      <Divider iconUrl={circleIcon} lineWidth='600px' thickness='2px' />

      <Section className='reveal-block-slide'>
        <SushiSalads
          title="Sushi Salads"
          subtitle=""
          image={specialImage}
          imageAlt=""
          items={[
            { name: "Sushi Bar Salad", description: "", price: "$6.95" },
            { name: "Seaweed Salad", description: "", price: "$5.95" },
            { name: "California Style Salad", description: "", price: "$6.95" },
            { name: "Calamari Salad", description: "", price: "$7.95" },
            { name: "Tuna Tartare", description: "", price: "$10.95" },
            { name: "Summer Roll", description: "", price: "$6.95" },
            { name: "Baby Octopus Salad", description: "", price: "$7.95" },
            { name: "California Fruit Roll", description: "", price: "$6.95" },
          ]}
        />
      </Section>
     

    </div>
  );
}