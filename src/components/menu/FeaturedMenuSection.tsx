import './FeaturedMenuSection.css';
import type { MenuItem } from '@/types';
import MenuCard from './MenuCard';

interface FeaturedMenuSectionProps {
  title: string;
  image: string;
  imageAlt?: string;
  /** Pill shown on the photo, e.g. "Chef's Selection". */
  badge: string;
  featuredTitle: string;
  featuredDescription: string;
  /** Cards stacked beside the photo. */
  featured: MenuItem[];
  /** Cards in the grid below the photo. */
  items: MenuItem[];
  /** Puts the photo on the right instead of the left. */
  imageRight?: boolean;
}

/** A headed section: large captioned photo beside featured items, then a grid of the rest. */
export default function FeaturedMenuSection({
  title,
  image,
  imageAlt = '',
  badge,
  featuredTitle,
  featuredDescription,
  featured,
  items,
  imageRight = false,
}: FeaturedMenuSectionProps) {
  return (
    <div className={imageRight ? 'featured-menu-section featured-menu-section--image-right' : 'featured-menu-section'}>
      <div className="featured-menu-section-heading">
        <h2 className="featured-menu-section-title">{title}</h2>
        <span className="featured-menu-section-divider"></span>
      </div>

      <div className="featured-menu-top">
        <div className="featured-menu-image-wrap">
          <img src={image} alt={imageAlt} className="featured-menu-image" />
          <div className="featured-menu-image-overlay">
            <span className="featured-menu-badge">{badge}</span>
            <h3 className="featured-menu-image-title">{featuredTitle}</h3>
            <p className="featured-menu-image-description">{featuredDescription}</p>
          </div>
        </div>

        <div className="featured-menu-featured-items">
          {featured.map((item) => (
            <MenuCard key={item.name} {...item} />
          ))}
        </div>
      </div>

      <div className="featured-menu-grid">
        {items.map((item) => (
          <MenuCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}
