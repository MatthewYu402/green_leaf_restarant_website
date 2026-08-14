import { useEffect, useRef, useState } from 'react';
import './GalleryCarousel.css';

interface CarouselImage {
  src: string;
  alt?: string;
  description?: string; // optional caption, shown for whichever photo is currently active
}

interface GalleryCarouselProps {
  images: CarouselImage[];
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const count = images.length;
  const activeDescription = images[active]?.description;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(index)) setActive(index);
          }
        });
      },
      { root: track, threshold: [0.6] }
    );

    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [images.length]);

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(count - 1, index));
    slideRefs.current[clamped]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  const goPrev = () => scrollToIndex(active - 1);
  const goNext = () => scrollToIndex(active + 1);

  return (
    <div className="gallery-carousel-wrapper">
      <div className="gallery-carousel-row">
        <button
          type="button"
          className="gallery-carousel-arrow gallery-carousel-arrow--left"
          onClick={goPrev}
          disabled={active === 0}
          aria-label="Previous photo"
        >
          &#8249;
        </button>

        <div className="gallery-carousel-track" ref={trackRef}>
          {images.map((image, i) => (
            <div
              key={image.src}
              ref={(el) => { slideRefs.current[i] = el; }}
              data-index={i}
              className={`gallery-carousel-slide ${i === active ? 'active' : ''}`}
              onClick={() => scrollToIndex(i)}
            >
              <img src={image.src} alt={image.alt ?? ''} className="gallery-carousel-image" />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="gallery-carousel-arrow gallery-carousel-arrow--right"
          onClick={goNext}
          disabled={active === count - 1}
          aria-label="Next photo"
        >
          &#8250;
        </button>
      </div>

      {/* Only rendered if this usage's images actually provide descriptions —
          e.g. Home's PeekInside gallery has none, so this stays absent there. */}
      {activeDescription && (
        <p key={active} className="gallery-carousel-caption">
          {activeDescription}
        </p>
      )}

      <div className="gallery-carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`gallery-carousel-dot ${i === active ? 'active' : ''}`}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}