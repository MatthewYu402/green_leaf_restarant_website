import { useEffect, useRef, useState } from 'react';
import './GalleryCarousel.css';

interface CarouselImage {
  src: string;
  alt?: string;
  description?: string;
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

    let rafId = 0;

    // Deterministic, synchronous "closest slide to viewport center" check —
    // recomputed from live geometry on every scroll event, rather than
    // relying on IntersectionObserver's threshold-crossing callbacks (which
    // can land one step behind after a fast desktop scroll-snap settle,
    // since the browser is free to batch/delay when it checks).
    const updateActive = () => {
      const trackRect = track.getBoundingClientRect();
      const viewportCenter = trackRect.left + trackRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      slideRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const slideCenter = rect.left + rect.width / 2;
        const distance = Math.abs(slideCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      setActive(closestIndex);
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateActive);
    };

    updateActive(); // correct initial state on mount, before any scrolling happens
    track.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      cancelAnimationFrame(rafId);
      track.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
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