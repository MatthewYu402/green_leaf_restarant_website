import './PeekInside.css';
import { Link } from 'react-router-dom';
import type { GalleryImage } from '@/types';
import Section from '../ui/Section';
import GalleryCarousel from '../ui/GalleryCarousel';

interface PeekInsideProps {
  title: string;
  subtitle: string;
  link: { label: string; href: string };
  images: GalleryImage[];
}

/** Heading with a "See More" link, above a photo carousel. */
export default function PeekInside({ title, subtitle, link, images }: PeekInsideProps) {
  return (
    <Section>
      <div className="peek-inside">
        <div className="peek-inside-header">
          <div>
            <h2 className="peek-inside-title">{title}</h2>
            <p className="peek-inside-subtitle">{subtitle}</p>
          </div>
          <Link to={link.href} className="peek-inside-see-more">
            {link.label}
          </Link>
        </div>
        <GalleryCarousel images={images} />
      </div>
    </Section>
  );
}
