import './AboutUsPage.css';
import { Link } from 'react-router-dom';
import { about, business, holidayHours, hours } from '@/content';
import Section from '../components/ui/Section';
import Divider from '../components/ui/Divider';
import GalleryCarousel from '../components/ui/GalleryCarousel';
import RichText from '../components/ui/RichText';
import { useLightbox } from '@/components/ui/Lightbox';

export default function AboutUsPage() {
  const openLightbox = useLightbox();
  const { story, gallery, visit, instagram } = about;

  return (
    <div className="about-page">
      <Section reveal="slide">
        <div className="about-story">
          <div className="about-story-text">
            <h2 className="about-story-title">{story.title}</h2>
            {story.paragraphs.map((paragraph) => (
              <p className="about-story-paragraph" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <Link to={story.button.href} className="about-story-button">
              {story.button.label}
            </Link>
          </div>
          <img
            src={story.image}
            className="about-story-image"
            alt={story.imageAlt}
            onClick={() => openLightbox(story.image, story.imageAlt)}
          />
        </div>
      </Section>

      <Section reveal="fade">
        <Divider icon={about.dividerIcons.diamond} lineWidth="700px" thickness="2px" />
      </Section>

      <Section reveal="slide">
        <div className="about-gallery">
          <h2 className="about-gallery-title">{gallery.title}</h2>
          <p className="about-gallery-subtitle">{gallery.subtitle}</p>

          {/* Desktop/tablet — 3-column hover-zoom grid. Hidden on mobile (see CSS). */}
          <div className="about-gallery-grid">
            {gallery.images.map((image, i) => (
              <div className="about-gallery-item" key={i}>
                <img
                  src={image.src}
                  className="about-gallery-photo"
                  alt={image.alt}
                  onClick={() => openLightbox(image.src, image.alt)}
                />
                <div className="about-gallery-caption">{image.alt}</div>
              </div>
            ))}
          </div>

          {/* Mobile-only — the same photos as a carousel. Hidden above the breakpoint (see CSS). */}
          <div className="about-gallery-carousel-mobile">
            <GalleryCarousel images={gallery.images.map((image) => ({ ...image, description: image.alt }))} />
          </div>
        </div>
      </Section>

      <Divider icon={about.dividerIcons.circle} mobileOnly />

      <Section reveal="slide">
        <div className="about-join">
          <h2 className="about-join-title">{about.joinTitle}</h2>
          <div className="about-join-cards">
            <div className="about-info-card" id="visit-us">
              <div className="about-info-card-header">
                <img src={visit.icon} className="about-info-icon" alt="" />
                <h3 className="about-info-card-title">{visit.title}</h3>
              </div>
              <p className="about-info-line">
                <RichText text={business.address} />
              </p>
              <p className="about-info-line">{business.phone.display}</p>
              <a href={`tel:${business.phone.tel}`} className="about-info-cta">
                <img src={visit.callIcon} className="about-info-cta-icon" alt="" />
                {visit.callLabel}
              </a>
              <div className="about-map-embed">
                <iframe
                  title={visit.mapTitle}
                  src={business.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="about-info-card about-instagram-card">
              <svg
                className="about-instagram-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                <circle cx="12" cy="13" r="3" />
              </svg>

              <h3 className="about-instagram-title">{instagram.title}</h3>
              <p className="about-instagram-handle">{business.instagram.handle}</p>
              <p className="about-instagram-description">{instagram.description}</p>

              <a href={business.instagram.url} target="_blank" rel="noopener noreferrer" className="about-instagram-cta">
                {instagram.button}
              </a>
            </div>

            <div className="about-info-card">
              <div className="about-info-card-header">
                <img src={about.hours.icon} className="about-info-icon" alt="" />
                <h3 className="about-info-card-title">{about.hours.title}</h3>
              </div>
              {hours.map((row) => (
                <div className="about-hours-row" key={row.days}>
                  <span>{row.days}</span>
                  <span>{row.time ?? <strong>Closed</strong>}</span>
                </div>
              ))}
              <div className="about-holiday-hours">
                <h4 className="about-holiday-title">{about.hours.holidayTitle}</h4>
                {holidayHours.map((holiday) => (
                  <div className="about-holiday-row" key={holiday.name}>
                    <span className="about-holiday-name">{holiday.name}</span>
                    <span className={`about-holiday-status about-holiday-status--${holiday.time ? 'open' : 'closed'}`}>
                      {holiday.time ?? 'Closed'}
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
