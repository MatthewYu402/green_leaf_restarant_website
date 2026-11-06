import type { MenuItem } from '@/types';
import MenuCardGrid from './MenuCardGrid';
import MenuList from './MenuList';
// Imported last so these overrides load after MenuCardGrid/MenuList CSS
import './LunchSpecials.css';

interface LunchSpecialsProps {
  title: string;
  subtitle: string;
  maki: { title: string; items: MenuItem[] };
  bento: { title: string; image: string; items: MenuItem[] };
}

/** Lunch section: maki specials as cards beside a dark bento-box card. */
export default function LunchSpecials({ title, subtitle, maki, bento }: LunchSpecialsProps) {
  return (
    <div className="lunch-specials">
      <div className="lunch-section">
        <h3 className="lunch-section-title">{title}</h3>
        <p className="lunch-section-subtitle">{subtitle}</p>
      </div>

      <div className="lunch-maki-bento-row">
        <div className="lunch-maki-column">
          <h4 className="lunch-maki-title">{maki.title}</h4>
          <MenuCardGrid items={maki.items} />
        </div>

        <div className="lunch-bento-card">
          <img src={bento.image} className="lunch-bento-image" alt={bento.title} />
          <div>
            <MenuList title={bento.title} items={bento.items} />
          </div>
        </div>
      </div>
    </div>
  );
}
