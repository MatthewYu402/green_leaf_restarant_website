import './LunchSpecials.css'
import leafIcon from "../assets/leaf-icon.svg"

export default function LunchSpecials() {
  return (
    <div className="lunch-special-page">
      <h1>Midday Lunch Canvas</h1>
      <p>A curated selection, prepared with precision and care.</p>
      <div className="divider">
        <span className="divider-line"></span>
        <img className="leaf-icon" src={leafIcon}></img>
        <span className="divider-line"></span>
      </div>
    </div>
  );
}