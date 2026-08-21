import './AboutUsPage.css'
import { Link } from 'react-router-dom'

// Components
import Section from '../components/shared/Section'
import Divider from '../components/shared/Divider'
import GalleryCarousel from '../components/shared/GalleryCarousel'
import { useLightbox } from '@/components/shared/Lightbox'

// Icons
import mapPinIcon from '@/assets/icons/pin.svg'
import clockIcon from '@/assets/icons/clock.svg'
import diamondIcon from '@/assets/icons/diamond.svg'
import circleIcon from '@/assets/icons/circle.svg'
import phoneIcon from '@/assets/icons/reservation.svg'

// Images
import FamilyImage from '@/assets/images/green-leaf-front.webp'
import GalleryImage1 from '@/assets/images/about-us-gallery/new-years.jpg'
import GalleryImage2 from '@/assets/images/about-us-gallery/sunday-regulars.webp'
import GalleryImage3 from '@/assets/images/about-us-gallery/neigborhood.jpg'
import GalleryImage4 from '@/assets/images//about-us-gallery/chinese-new-year.jpeg'
import GalleryImage5 from '@/assets/images/about-us-gallery/about-us-birthday.webp'
import GalleryImage6 from '@/assets/images/about-us-gallery/about-us-birthday.webp'

const GALLERY_ITEMS = [
  { img: GalleryImage1, caption: "New Year Celebrations" },
  { img: GalleryImage2, caption: "Sunday regulars" },
  { img: GalleryImage3, caption: "Neighborhood" },
  { img: GalleryImage4, caption: "Chinese New year" },
  { img: GalleryImage5, caption: "Birthday dinner" },
  { img: GalleryImage6, caption: "Behind the counter" },
];

export default function AboutUsPage() {
  const openLightbox = useLightbox();

  return (
    <div className="about-page">
      <Section className="reveal-block-slide">
        <div className="about-story">
          <div className="about-story-text">
            <h2 className="about-story-title">A Local Business</h2>
            <p className="about-story-paragraph">
              For over 20 years, Green Leaf has become more than a local restaurant. It has
              been a hub rooted in the heart of the neighborhood. We are a
              family-owned establishment built on a foundation of respect for tradition and
              a passion for culinary excellence.
            </p>
            <p className="about-story-paragraph">
              Our commitment lies in creating meaningful relationships with the community and embracing the
              warmth of shared moments. Every dish we serve is a testament to the genuine
              connections we've built with our regular customers, who we consider an
              extension of our own family.
            </p>
            <Link to="/menu" className="about-story-button">Explore Our Menu</Link>
          </div>
          <img
            src={FamilyImage}
            className="about-story-image"
            alt="Chef preparing sushi"
            onClick={() => openLightbox(FamilyImage, "Chef preparing sushi")}
          />
        </div>
      </Section>

      <Section className='reveal-block-fade'>
        <Divider iconUrl={diamondIcon} lineWidth="700px" thickness="2px" />
      </Section>

      <Section className="reveal-block-slide">
        <div className="about-gallery">
          <h2 className="about-gallery-title">Moments With Our Community</h2>
          <p className="about-gallery-subtitle">
            Celebrations, regulars, and everyday moments shared around our table
          </p>

          {/* Desktop/tablet — 3-column hover-zoom grid, unchanged. Hidden on mobile (see CSS). */}
          <div className="about-gallery-grid">
            {GALLERY_ITEMS.map((item, i) => (
              <div className="about-gallery-item" key={i}>
                <img
                  src={item.img}
                  className="about-gallery-photo"
                  alt={item.caption}
                  onClick={() => openLightbox(item.img, item.caption)}
                />
                <div className="about-gallery-caption">{item.caption}</div>
              </div>
            ))}
          </div>

          {/* Mobile-only — same real photos/captions, carousel presentation.
              Hidden above the breakpoint (see CSS). Lightbox already wired
              into GalleryCarousel itself (tap the centered photo). */}
          <div className="about-gallery-carousel-mobile">
            <GalleryCarousel
              images={GALLERY_ITEMS.map((item) => ({
                src: item.img,
                alt: item.caption,
                description: item.caption,
              }))}
            />
          </div>
        </div>
      </Section>

      <Divider iconUrl={circleIcon} className="home-mobile-divider" />

      <Section className="reveal-block-slide">
        <div className="about-join">
          <h2 className="about-join-title">Join Our Table</h2>
          <div className="about-join-cards">
            <div className="about-info-card">
              <div className="about-info-card-header">
                <img src={mapPinIcon} className="about-info-icon" alt="" />
                <h3 className="about-info-card-title">Visit Us</h3>
              </div>
              <p className="about-info-line">11313 York Road<br />Hunt Valley, MD 21030</p>
              <p className="about-info-line">(410) 771-0030</p>
              <a href="tel:4107710030" className="about-info-cta">
                <img src={phoneIcon} className="about-info-cta-icon" alt="" />
                Call to Reserve
              </a>
              <div className="about-map-embed">
                <iframe
                  title="Green Leaf Sushi location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.8981569619473!2d-76.65141112357551!3d39.49421421126889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8127d9fb3d903%3A0x2d9fbe817004b328!2sGreen%20Leaf!5e0!3m2!1sen!2sus!4v1786509925863!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="about-info-card">
              <div className="about-info-card-header">
                <img src={clockIcon} className="about-info-icon" alt="" />
                <h3 className="about-info-card-title">Hours of Operation</h3>
              </div>
              <div className="about-hours-row">
                <span>Monday</span>
                <span><strong>Closed</strong></span>
              </div>
              <div className="about-hours-row">
                <span>Tuesday - Friday</span>
                <span>11:30 AM - 9:30 PM</span>
              </div>
              <div className="about-hours-row">
                <span>Saturday</span>
                <span>12:00 PM - 9:30 PM</span>
              </div>
              <div className="about-hours-row">
                <span>Sunday</span>
                <span>12:00 PM - 9:30 PM</span>
              </div>
              <div className="about-holiday-hours">
                <h4 className="about-holiday-title">Holiday Hours</h4>
                {[
                  { name: "Super Bowl Sunday", status: "closed" as const },
                  { name: "Fourth of July", status: "closed" as const },
                  { name: "Thanksgiving Day", status: "closed" as const },
                  { name: "Christmas Day", status: "open" as const, note: "12:00 PM - 9:30 PM" },
                ].map((holiday) => (
                  <div className="about-holiday-row" key={holiday.name}>
                    <span className="about-holiday-name">{holiday.name}</span>
                    <span className={`about-holiday-status about-holiday-status--${holiday.status}`}>
                      {holiday.status === "open" ? (holiday.note ?? "Open") : "Closed"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}