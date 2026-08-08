import "./MainMenu.css"
import MenuCategory from "../components/menu/MenuCategory";

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
            { name: "Edamame", price: "$5.50", description: "", },
            { name: "Shumai", price: "$5.95", description: "Steamed Shrimp Dumplings (Japanese Style)" },
            { name: "Japanese Vegetable Spring Roll", price: "$5.50", description: "", pieces: 3 },
            { name: "Age Tofu", price: "$4.95", description: "Fried bean cure served with tempura sauce" },
            { name: "Shrimp Tempura", price: "$7.95", description: "Deep-fried shrimp with vegetables" },
            { name: "Tuna Tartare", price: "$10.95", description: "" },
            { name: "Yakitori", price: "$5.95", description: "Grilled chicken skewer with teryaki sauce", pieces: 3 },
            { name: "Fried Calamari", price: "$9.95", description: "" },
            { name: "Crispy Wonton", price: "5.95", description: "Cream cheese with crab meat", pieces: 3 },
            { name: "Scallion Pancake and String Bean", price: "$8.50", description: "" },
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
            { name: "Green Leaf Dumpling Soup", price: "$5.50", description: "", },
            { name: "Hot and Sour Soup", price: "$4.95", description: "", },
            { name: "Chicken, Barley, and Brown Rice Soup", price: "$5.95", description: "", },
            { name: "Egg Drop Soup", price: "$3.95", description: "", },
            { name: "Green Salad", price: "$3.95", description: "Comes with ginger dressing", },
            { name: "Hawaiian Poke Salad Bowl", price: "$11.95", description: "", },
            { name: "Seaweed Salad", price: "$5.95", description: "", },
            { name: "California Style Salad", price: "$6.95", description: "", },
            { name: "Sushi Bar Salad", price: "$6.95", description: "", },
            { name: "Avocado Salad", price: "$6.95", description: "Mixed greens, cucumber, and avocado with sesame dressing", },
            { name: "Baby Octopus Salad", price: "$7.95", description: "", },
            { name: "Marinated Calamari Salad", price: "$7.95", description: "", },
          ]}
        />
      </div>

    </div>
  );
}