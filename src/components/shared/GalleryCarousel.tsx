import { useEffect, useRef, useState, useCallback } from 'react';
import './GalleryCarousel.css';

interface CarouselImage {
  src: string;
  alt?: string;
}

interface GalleryCarouselProps {
  images: CarouselImage[];
  slideWidthRatio?: number;   // fraction of container width each slide takes, default 0.6
}

export default function GalleryCarousel({ images, slideWidthRatio = 0.6 }: GalleryCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateWidth = () => setContainerWidth(el.offsetWidth);
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const gap = 24;
  const slideWidth = containerWidth * slideWidthRatio;
  const count = images.length;

  const goTo = useCallback((i: number) => {
    setIndex(((i % count) + count) % count);
  }, [count]);

  const goPrev = () => goTo(index - 1);
  const goNext = () => goTo(index + 1);

  // Build an extended track: [last clone, ...real images, first clone]
  // so there is always a genuine neighbor slide to peek at on both sides,
  // even at index 0 or the final index.
  const extended = [images[count - 1], ...images, images[0]];
  const extendedIndex = index + 1;   // +1 to account for the prepended clone

  const offset = containerWidth
    ? (containerWidth - slideWidth) / 2 - extendedIndex * (slideWidth + gap)
    : 0;

  return (
    <div className="gallery-carousel" ref={containerRef}>
      <button className="gallery-carousel-arrow gallery-carousel-arrow--left" onClick={goPrev} aria-label="Previous photo">
        &#8249;
      </button>

      <div className="gallery-carousel-viewport">
        <div
          className="gallery-carousel-track"
          style={{ transform: `translateX(${offset}px)`, gap: `${gap}px` }}
        >
          {extended.map((image, i) => {
            const realIndex = i - 1;   // maps back to the true index, clones excluded from this
            const isActive = realIndex === index;
            return (
              <div
                key={`${image.src}-${i}`}
                className={`gallery-carousel-slide ${isActive ? 'gallery-carousel-slide--active' : ''}`}
                style={{ width: slideWidth ? `${slideWidth}px` : `${slideWidthRatio * 100}%` }}
                onClick={() => goTo(realIndex)}
              >
                <img src={image.src} alt={image.alt ?? ''} className="gallery-carousel-image" />
              </div>
            );
          })}
        </div>
      </div>

      <button className="gallery-carousel-arrow gallery-carousel-arrow--right" onClick={goNext} aria-label="Next photo">
        &#8250;
      </button>
    </div>
  );
}