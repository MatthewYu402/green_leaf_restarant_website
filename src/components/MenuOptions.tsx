import './MenuOptions.css'
import SushiTypeOptions from './SushiTypeOptions';

interface Roll {
  name: string;
  description: string;
  price: string;
  pieces?: number; // Optional
}

interface MenuOptionsProps {
  name: string;
  url: string;
  rolls: Roll[];
}

export default function MenuOptions({name, rolls, url}:MenuOptionsProps) {
  return(
    <div className="menu-options">
      <img src={url} className="appetizer-image"></img>
      <div>
        <SushiTypeOptions
          title={name}
          rolls={rolls}
        />
      </div>
    </div>
  );
}