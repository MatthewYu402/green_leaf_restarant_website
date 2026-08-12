import { useEffect, useRef, useState } from 'react';
import './GalleryCarousel.css';

interface CarouselImage {
  src: string;
  alt?: string;
}

interface GalleryCarouselProps {
  images: CarouselImage[];
  slideWidthRatio?: number;
}

const CLONE_COUNT = 2;

export default function GalleryCarousel({ images, slideWidthRatio = 0.6 }: GalleryCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const count = images.length;

  const [trackPosition, setTrackPosition] = useState(CLONE_COUNT);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateWidth = () => setContainerWidth(el.offsetWidth);
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!transitionEnabled) {
      const raf = requestAnimationFrame(() => setTransitionEnabled(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [transitionEnabled]);

  const gap = 24;
  const slideWidth = containerWidth * slideWidthRatio;

  const goNext = () => {
    setTransitionEnabled(true);
    setTrackPosition((p) => p + 1);
  };

  const goPrev = () => {
    setTransitionEnabled(true);
    setTrackPosition((p) => p - 1);
  };

  const handleTransitionEnd = () => {
    if (trackPosition === CLONE_COUNT - 1) {
      setTransitionEnabled(false);
      setTrackPosition(CLONE_COUNT + count - 1);
    } else if (trackPosition === CLONE_COUNT + count) {
      setTransitionEnabled(false);
      setTrackPosition(CLONE_COUNT);
    }
  };

  const extended = [
    ...images.slice(count - CLONE_COUNT),
    ...images,
    ...images.slice(0, CLONE_COUNT),
  ];

  const offset = containerWidth
    ? (containerWidth - slideWidth) / 2 - trackPosition * (slideWidth + gap)
    : 0;

  return (
    <div className="gallery-carousel" ref={containerRef}>
      <button className="gallery-carousel-arrow gallery-carousel-arrow--left" onClick={goPrev} aria-label="Previous photo">
        &#8249;
      </button>

      <div className="gallery-carousel-viewport">
        <div
          className={`gallery-carousel-track ${transitionEnabled ? '' : 'gallery-carousel-track--no-transition'}`}
          style={{ transform: `translateX(${offset}px)`, gap: `${gap}px` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extended.map((image, i) => {
            const isActive = i === trackPosition;
            return (
              <div
                key={`${image.src}-${i}`}
                className={`gallery-carousel-slide ${isActive ? 'gallery-carousel-slide--active' : ''}`}
                style={{ width: slideWidth ? `${slideWidth}px` : `${slideWidthRatio * 100}%` }}
                onClick={() => {
                  if (i < trackPosition) goPrev();
                  else if (i > trackPosition) goNext();
                }}
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