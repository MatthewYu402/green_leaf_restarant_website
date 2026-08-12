import './FeaturedMenuSection.css'
import SpecialItem from './SpecialItem'

interface MenuItemData {
  name: string;
  price: string;
  description: string;
}

interface FeaturedMenuSectionProps {
  title: string;
  image: string;
  imageAlt?: string;
  badge: string;
  featuredTitle: string;
  featuredDescription: string;
  featuredItems: MenuItemData[];
  items: MenuItemData[];
  className?: string;
}

export default function FeaturedMenuSection({
  title,
  image,
  imageAlt = "",
  badge,
  featuredTitle,
  featuredDescription,
  featuredItems,
  items,
  className = "",
}: FeaturedMenuSectionProps) {
  return (
    <div className={`featured-menu-section ${className}`.trim()}>
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
          {featuredItems.map((item) => (
            <SpecialItem key={item.name} {...item} />
          ))}
        </div>
      </div>

      <div className="featured-menu-grid">
        {items.map((item) => (
          <SpecialItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}