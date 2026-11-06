import './BeyondTheMenu.css';
import Section from '../ui/Section';

interface Offering {
  icon: string;
  title: string;
  description: string;
  /** Adds a "Call (xxx) xxx-xxxx" link under the description. */
  showPhone?: boolean;
}

interface BeyondTheMenuProps {
  title: string;
  subtitle: string;
  offerings: Offering[];
  phone: { tel: string; display: string };
}

/** Grid of icon cards for services beyond dine-in (catering, BYOB, takeout…). */
export default function BeyondTheMenu({ title, subtitle, offerings, phone }: BeyondTheMenuProps) {
  return (
    <Section>
      <div className="beyond-menu">
        <h2 className="beyond-menu-title">{title}</h2>
        <p className="beyond-menu-subtitle">{subtitle}</p>
        <div className="beyond-menu-grid">
          {offerings.map((item) => (
            <div className="beyond-menu-card" key={item.title}>
              <img src={item.icon} className="beyond-menu-icon" alt="" />
              <h3 className="beyond-menu-card-title">{item.title}</h3>
              <p className="beyond-menu-card-description">{item.description}</p>
              {item.showPhone && (
                <a href={`tel:${phone.tel}`} className="beyond-menu-card-cta beyond-menu-card-cta--link">
                  Call {phone.display}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
