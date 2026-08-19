import { useLightbox } from './Lightbox';
import './ItemPhotoTrigger.css';

interface ItemPhotoTriggerProps {
  image: string;
  alt?: string;
}

// Small camera icon shown next to a menu item's name — only rendered by the
// parent when that item actually has an `image`. Clicking it opens the same
// full-screen Lightbox used everywhere else on the site.
export default function ItemPhotoTrigger({ image, alt = '' }: ItemPhotoTriggerProps) {
  const openLightbox = useLightbox();

  return (
    <button
      type="button"
      className="item-photo-trigger"
      onClick={(e) => {
        e.stopPropagation();
        openLightbox(image, alt);
      }}
      aria-label={`View photo of ${alt || 'this item'}`}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 8a2 2 0 0 1 2-2h1.5l.8-1.2A2 2 0 0 1 10 4h4a2 2 0 0 1 1.7.9L16.5 6H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    </button>
  );
}