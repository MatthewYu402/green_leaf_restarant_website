import { createContext, useContext, useState, useCallback, useEffect, useRef, type ReactNode } from 'react';
import './Lightbox.css';

interface LightboxImage {
  src: string;
  alt?: string;
}

interface LightboxContextValue {
  openLightbox: (src: string, alt?: string) => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

// Call this from any component to make an image open full-view on click:
//   const openLightbox = useLightbox();
//   <img src={photo} onClick={() => openLightbox(photo, "description")} />
export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    throw new Error('useLightbox must be used within <LightboxProvider>');
  }
  return ctx.openLightbox;
}

const CLOSE_TRANSITION_MS = 250;

// Mounted once near the root of the app (see App.tsx) so the overlay can
// render above absolutely everything else, regardless of which page/component
// triggered it.
export function LightboxProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<LightboxImage | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef<number | undefined>(undefined);

  const openLightbox = useCallback((src: string, alt = '') => {
    window.clearTimeout(closeTimeoutRef.current);
    setImage({ src, alt });
    // two-step so the fade-in actually has a "before" state to animate from
    requestAnimationFrame(() => setIsOpen(true));
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    closeTimeoutRef.current = window.setTimeout(() => setImage(null), CLOSE_TRANSITION_MS);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox]);

  // Same scroll-lock technique used for the mobile nav drawer
  useEffect(() => {
    const scrollContainer = document.getElementById('root');
    if (!scrollContainer) return;
    scrollContainer.style.overflowY = isOpen ? 'hidden' : 'scroll';
    return () => {
      scrollContainer.style.overflowY = 'scroll';
    };
  }, [isOpen]);

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}
      {image && (
        <div
          className={`lightbox-overlay ${isOpen ? 'open' : ''}`}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={image.alt || 'Image preview'}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <img
            src={image.src}
            alt={image.alt}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </LightboxContext.Provider>
  );
}