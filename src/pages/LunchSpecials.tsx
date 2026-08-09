import './LunchSpecials.css'
import leafIcon from "../assets/leaf-icon.svg"
import Divider from "../components/shared/Divider"

export default function LunchSpecials() {
  return (
    <div className="lunch-special-page">
      <h1>Midday Lunch Canvas</h1>
      <p>A curated selection, prepared with precision and care.</p>
      <Divider iconUrl={leafIcon} iconAlt="leaf" />
    </div>
  );
}