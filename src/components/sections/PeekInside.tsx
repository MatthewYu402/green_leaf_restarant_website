import './PeekInside.css'
import { Link } from 'react-router-dom'

// Components
import Section from '../shared/Section'
import GalleryCarousel from '../shared/GalleryCarousel'

// Images
// TODO: replace with real photos
import GalleryImage1 from '@/assets/images/chris.jpeg'
import GalleryImage2 from '@/assets/images/new-year.jpeg'
import GalleryImage3 from '@/assets/images/sushi-platter-2.jpg'
import GalleryImage4 from '@/assets/images/sushi-platter-3.jpg'
import GalleryImage5 from '@/assets/images/sushi-platter-5.jpg'
import GalleryImage6 from '@/assets/images/sushi-platter-4.jpg'

const GALLERY_IMAGES = [
  { src: GalleryImage1, alt: "Anniversary celebration" },
  { src: GalleryImage2, alt: "Sunday regulars" },
  { src: GalleryImage3, alt: "Chef's table event" },
  { src: GalleryImage4, alt: "Community gathering" },
  { src: GalleryImage5, alt: "Birthday dinner" },
  { src: GalleryImage6, alt: "Behind the counter" },
];

export default function PeekInside() {
  return (
    <Section>
      <div className="peek-inside">
        <div className="peek-inside-header">
          <div>
            <h2 className="peek-inside-title">A Peek Inside</h2>
            <p className="peek-inside-subtitle">The sanctuary we've built</p>
          </div>
          <Link to="/about" className="peek-inside-see-more">See More →</Link>
        </div>
        <GalleryCarousel images={GALLERY_IMAGES} />
      </div>
    </Section>
  );
}