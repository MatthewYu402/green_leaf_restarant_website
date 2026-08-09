import "./MainMenu.css"
import MenuCategory from "../components/menu/MenuCategory";
import MenuOptions from "../components/menu/MenuOptions";
import Divider from "../components/shared/Divider";
import goldLeaf from "../assets/gold-leaf.svg";
import noodleIcon from "../assets/noodle-icon.svg"
import waveIcon from "../assets/wave-icon.svg"

// Images
import AppImage from "../assets/Apps.jpg";
import SoupImage from "../assets/soups.jpg"

export default function MainMenu() {
  return (
    <div className="main-menu-page">
      <div className="apps-soups-salads">
        <MenuCategory
          name="Appetizers"
          url={AppImage}
          menu_items={[
            { name: "Green Leaf Dumplings", price: "$5.50", description: "Pan-seared chicken dumplings in spinich wrap", pieces: 4 },
            { name: "Edamame", price: "$5.50", description: "TODO", },
            { name: "Shumai", price: "$5.95", description: "Steamed Shrimp Dumplings (Japanese Style)" },
            { name: "Japanese Vegetable Spring Roll", price: "$5.50", description: "TODO", pieces: 3 },
            { name: "Age Tofu", price: "$4.95", description: "Fried bean cure served with tempura sauce" },
            { name: "Shrimp Tempura", price: "$7.95", description: "Deep-fried shrimp with vegetables" },
            { name: "Tuna Tartare", price: "$10.95", description: "TODO" },
            { name: "Yakitori", price: "$5.95", description: "Grilled chicken skewer with teryaki sauce", pieces: 3 },
            { name: "Fried Calamari", price: "$9.95", description: "TODO" },
            { name: "Crispy Wonton", price: "5.95", description: "Cream cheese with crab meat", pieces: 3 },
            { name: "Scallion Pancake and String Bean", price: "$8.50", description: "TODO" },
            { name: "Ocean Garden Roll", price: "$12.95", description: "Mixed greens with crispy spicy crabmeat in rice paper wrap" },
            { name: "Summer Roll", price: "$6.95", description: "Shrimp, lettuce, carrot, crabstick, and rice noodle in rice paper" },
            { name: "California Fruit Roll", price: "$6.95", description: "Mango, apple, avocado, and crabstick in rice paper wrap" },
          ]}
        />
        <MenuCategory
          name="Soups & Salads"
          url={SoupImage}
          menu_items={[
            { name: "Miso Soup", price: "$2.95", description: "Miso broth with tofu, seaweed, and scallions", },
            { name: "Green Leaf Dumpling Soup", price: "$5.50", description: "TODO", },
            { name: "Hot and Sour Soup", price: "$4.95", description: "TODO", },
            { name: "Chicken, Barley, and Brown Rice Soup", price: "$5.95", description: "TODO", },
            { name: "Egg Drop Soup", price: "$3.95", description: "TODO", },
            { name: "Green Salad", price: "$3.95", description: "Comes with ginger dressing", },
            { name: "Hawaiian Poke Salad Bowl", price: "$11.95", description: "TODO", },
            { name: "Seaweed Salad", price: "$5.95", description: "TODO", },
            { name: "California Style Salad", price: "$6.95", description: "TODO", },
            { name: "Sushi Bar Salad", price: "$6.95", description: "TODO", },
            { name: "Avocado Salad", price: "$6.95", description: "Mixed greens, cucumber, and avocado with sesame dressing", },
            { name: "Baby Octopus Salad", price: "$7.95", description: "TODO", },
            { name: "Marinated Calamari Salad", price: "$7.95", description: "TODO", },
          ]}
        />
      </div>
      <Divider 
        iconUrl={goldLeaf}
        iconAlt="gold leaf icon"
        thickness="2px"
      />

      <div className="grill-kitchen-wrapper">
        <h2 className="grill-title">From The Grill & Kitchen</h2>
        <div className="grill-kitchen">
        <MenuOptions
          title="Meat"
          menu_items={[
            { name: "Honey Sesame Chicken", price: "$14.95", description: "" },
            { name: "Thai Curry Chicken", price: "$15.95", description: "" },
            { name: "General Tso's Chicken", price: "$14.95", description: "" },
            { name: "Orange Chicken", price: "$14.95", description: "" },
            { name: "Mongolian Beef", price: "$17.95", description: "" },
            { name: "Beef and Brocolli", price: "$17.95", description: "" },
            { name: "Chicken and Brocolli", price: "$14.95", description: "" },
            { name: "Chicken and String Beans", price: "$14.95", description: "" },
            { name: "Chicken and Mixed Vegetables", price: "$14.95", description: "" },
            { name: "Fried Tonkatsu", price: "$14.95", description: "Breaded pork loin with special savory sauce" },
          ]}
        />
        <MenuOptions
          title="Seafood"
          className="seafood-options"
          groups={[
            {
              subheading: "Shared Favorites",
              layout: "full",
              items: [
                { name: "Green Leaf Pasta", price: "$19.95", description: "Shrimp, scallops, and baby bok choy over spinach noodles" },
                { name: "Crispy Jumbo Shrimp", price: "$18.95", description: "Served with honey sesame" },
                { name: "Seafood Combo", price: "$19.95", description: "Served in thai curry sauce" },
                { name: "Pecan Crusted Salmon Filet", price: "$19.95", description: "" },
                { name: "Grilled Salmon Filet", price: "$19.95", description: "Served with house salad" },
                { name: "Shrimp with Brocolli", price: "$17.95", description: "" },
              ],
            },
            {
              subheading:"Lunch Exclusives",
              layout: "half",
              items: [
                { name: "Thai Basil Shrimp", price: "$17.95", description: "" },
                { name: "Shrimp with String Beans", price: "$11.95", description: "" },
              ],
            },
            {
              subheading: "Dinner Exclusives",
              layout: "half",
              items: [
                { name: "Pine Nut Fish", price: "$18.95", description: "Crispy cod served with spicy thai sauce" },
                { name: "Baked cod", price: "$18.95", description: "Served with thai sauce" },
                { name: "Pineapple Shrimp", price: "$17.95", description: "Served with pineapple slices" },
              ],
            },
          ]}
        />
        </div>
      </div>

      <Divider
        iconUrl={waveIcon}
        iconAlt="wave icon"
        thickness="2px"
      />

      <div className='sushi-sashimi'>
        <h2 className='sushi-sashimi-header'>Sushi & Sashimi</h2>
        <p>Sourced daily, expertly prepared. Served a la carte (2 pieces per order) or as chef's selection</p>
        <div className='menu-sushi-sashimi-options'>
          <MenuOptions
            title="Donburi & Una-jyu"
            menu_items={[
              { name: "Tekka Don", price: "$20.95", description: "Bowl of seasoned rice topped with fresh tuna"},
              { name: "Salmon Don", price: "$20.95", description: "Bowl of seasoned rice topped with fresh salmon" },
              { name: "Chirashi Don", price: "$20.95", description: "Bowl of seasoned rice with assorted raw fish" },
              { name: "Una-jyu", price: "$20.95", description: "Broiled fresh water eel with special sauce over rice" },
            ]}
          />
          <MenuOptions
            title="Sushi & Sashimi"
            menu_items={[
              { name: "Sushi Deluxe", price: "$20.95", description: "TODO" },
              { name: "Sashimi Deluxe", price: "$24.95", description: "TODO" },
              { name: "Sushi Boat", price: "$59.95", description: "TODO" },
            ]}
          />
        </div>
      </div>
      <Divider
        iconUrl={noodleIcon}
        iconAlt="noodle-icon"
        thickness="2px"
      />
      <div className="noodles-vegetarian">
        <MenuOptions
          title="Noodles & Fried Rice"
          menu_items={[
            { name: "Japanese Pan Noodle", price: "$18.95", description: "Chicken, shrimp, and vegetables" },
            { name: "Pad Thai", price: "$14.95", description: "Chicken or shrimp" },
            { name: "Singapore Rice Noodes", price: "$14.95", description: "Chicken or shrimp" },
            { name: "Yaki Udon Noodes", price: "$14.95", description: "Chicken or shrimp" },
            { name: "Drunken Noodle", price: "$15.95", description: "Chicken or shrimp" },
            { name: "Japanese Fried Rice", price: "$13.95", description: "Chicken or shrimp" },
            { name: "Roasted Pork Fried Rice", price: "$13.95", description: "Pork and vegetables" },
            { name: "Nabe Yaki Udon Soup", price: "$14.95", description: "Pork and vegetables" },
            { name: "Lo Mein", price: "$14.95", description: "Chicken, pork, or shrimp" },
            { name: "Slimming Noodle Soup", price: "$14.95", description: "Rice noodles, white chicken meat, shrimp, and vegetables in home-made miso broth" },
          ]}
        />
        <MenuOptions
          title="Vegetarian"
          menu_items={[
            { name: "Szechuan String Bean", price: "$13.95", description: "" },
            { name: "Tofu Phad Thai", price: "$13.95", description: "" },
            { name: "Veggie Pad Thai", price: "$13.95", description: "" },
            { name: "Singapore Rice Noode", price: "$13.95", description: "" },
            { name: "Sauteed Mixed Vegetables", price: "$13.95", description: "" },
            { name: "Crispy Eggplant", price: "$13.95", description: "Comes with sesame sauce" },
          ]}
        />
      </div>

      <Divider
        iconUrl={goldLeaf}
        iconAlt="tempura-icon"
        thickness="2px"
      />

      <div className="teriyaki-tempura">
        <h2 className="teriyaki-tempura-header">Teriyaki & Tempura</h2>
        <p>Grilled and glazed, or golden and crisp — a taste of both traditions</p>
        <div className="menu-teriyaki-tempura-options">
          <MenuOptions
            title=""
            className="teriyaki-options"
            groups={[
              {
                subheading: "Teriyaki",
                layout: "half",
                items: [
                  { name: "Chicken Teriyaki", price: "$14.95", description: "" },
                  { name: "Salmon Teriyaki", price: "$19.95", description: "" },
                  { name: "Steak Teriyaki", price: "$24.95", description: "" },
                ],
              },
              {
                subheading: "Tempura",
                layout: "half",
                items: [
                  { name: "Chicken Tempura", price: "$14.95", description: ""},
                  { name: "Shrimp Tempura", price: "$17.95", description: "" },
                  { name: "Seafood Tempura", price: "$19.95", description: "" },
                  { name: "Vegetable Tempura", price: "$13.95", description: "" },
                ],
              },
            ]}
          />
        </div>
      </div>

    </div>
  );
}