import './BeyondTheMenu.css'
import Section from '../shared/Section'

// TODO: swap for real icons
import cateringIcon from '../../assets/catering.svg'
import reservationsIcon from '../../assets/reservation.svg'
import byobIcon from '../../assets/byob.svg'

const OFFERINGS = [
  {
    icon: cateringIcon,
    title: "Catering",
    description: "Elevate your birthdays, office gatherings, and intimate celebrations with our bespoke sushi platters.",
  },
  {
    icon: reservationsIcon,
    title: "Reservations",
    description: "Call ahead to secure your table for a dining room, evening dining experience, and calm dining experience.",
  },
  {
    icon: byobIcon,
    title: "BYOB",
    description: "Bring your favorite pairing. We offer a modest corking fee so you can enjoy the perfect sip with our craft.",
  },
];

export default function BeyondTheMenu() {
  return (
    <Section>
      <div className="beyond-menu">
        <h2 className="beyond-menu-title">Beyond the Menu</h2>
        <p className="beyond-menu-subtitle">Experience the full warmth of our hospitality, tailored for your special moments.</p>
        <div className="beyond-menu-grid">
          {OFFERINGS.map((item) => (
            <div className="beyond-menu-card" key={item.title}>
              <img src={item.icon} className="beyond-menu-icon" alt="" />
              <h3 className="beyond-menu-card-title">{item.title}</h3>
              <p className="beyond-menu-card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}