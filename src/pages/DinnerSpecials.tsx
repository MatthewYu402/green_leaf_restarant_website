import './DinnerSpecials.css'
import leafIcon from "../assets/leaf-icon.svg"

export default function DinnerSpecials() {
  return (
    <div className="dinner-special-page">
      <h1>Evening Expressions</h1>
      <p>A curated selection, prepared with precision and care.</p>
      <div className="divider">
        <span className="divider-line"></span>
        <img className="leaf-icon" src={leafIcon}></img>
        <span className="divider-line"></span>
      </div>
    </div>
  );
}