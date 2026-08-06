import "./SushiTypeOptions.css"
import RollItem from "./RollItem"

interface Roll {
  name: string;
  description: string;
  price: string;
  pieces?: number;
}

interface SushiTypeOptionsProps {
  title: string;
  rolls: Roll[];
}

export default function SushiTypeOptions({ title, rolls }: SushiTypeOptionsProps) {
  return(
    <div className="sushi-type-options">
      <h2 className="sushi-type-title">{title}</h2>
      <span className="divider-line"></span>
      <div className="roll-list">
        {rolls.map((roll) => (
          <RollItem 
            key={roll.name}
            name={roll.name}
            description={roll.description}
            price={roll.price}
            pieces={roll.pieces}
          />
        ))}
      </div>
    </div>
  );
}