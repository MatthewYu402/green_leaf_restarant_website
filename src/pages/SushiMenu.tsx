import './SushiMenu.css'
import specialImage from "../assets/square-sushi.png"

export default function SushiMenu() {
  return(
    <div className="sushi-menu-page">
      <h1>Sushi Menu</h1>
      <p>A curated selection, prepared with precision and care.</p>
      <div className="special-feature">
        <div className="special-feature-left">
          <h4 className="special-feature-title">Special Feature</h4>
          <h2>20th Year Anniversary Roll</h2>
          <p>A celebration of two decades of culinary excellence. Spicy salmon, avocado, topped with torched salmon. Topped with fried tempura flakes, yum yum sauce, and thinly sliced japaleno. </p>
          <span className="divider-line"></span>
          <p>$16</p>
        </div>
        <div className="special-feature-right">
          <img className = "twenty-year-roll" src={specialImage}></img>
        </div>
      </div>
    </div>
  );
}