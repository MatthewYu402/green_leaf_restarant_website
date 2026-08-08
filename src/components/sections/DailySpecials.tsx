import Section from "../shared/Section"
import "./DailySpecials.css"
import foodIcon from "../../assets/food-icon.svg"

export default function TodaysSpecials() {
  return(
    <Section className="daily-special-section">
      <h2 className="daily-special-title">Daily Chef Specials</h2>
      <img src={foodIcon} className="food-icon"></img>
      <div className="daily-specials-wrapper">
        
      </div>                                    
    </Section>
  );
}

