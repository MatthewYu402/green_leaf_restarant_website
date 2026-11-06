import './MenuAccordion.css';
import { useEffect, useRef, useState } from 'react';
import type { MenuGroup, MenuItem } from '@/types';
import PhotoButton from '../ui/PhotoButton';

interface MenuAccordionProps {
  title: string;
  /** A flat list — shows `previewCount` items, then a "+N more" button. */
  items?: MenuItem[];
  /** Sub-headed lists — always shows every item. */
  groups?: MenuGroup[];
  defaultOpen?: boolean;
  previewCount?: number;
  image?: string;
  imageAlt?: string;
}

/** Mobile menu category: a tap-to-expand header with the item count. */
export default function MenuAccordion({
  title,
  items,
  groups,
  defaultOpen = false,
  previewCount = 3,
  image,
  imageAlt = '',
}: MenuAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [showAll, setShowAll] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  const totalCount = groups ? groups.reduce((sum, g) => sum + g.items.length, 0) : (items?.length ?? 0);

  const visibleItems = !groups && items ? (showAll ? items : items.slice(0, previewCount)) : [];
  const remaining = !groups && items ? items.length - visibleItems.length : 0;

  // Measures the body's real content height instead of a fixed cap — a
  // hardcoded max-height clips accordions with many items (e.g. 30+ rolls).
  useEffect(() => {
    if (isOpen && bodyRef.current) {
      setMaxHeight(bodyRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [isOpen, showAll, items, groups]);

  const toggle = () => {
    setIsOpen((open) => {
      // Closing resets the "+N more" expansion so reopening starts at the preview.
      if (open) setShowAll(false);
      return !open;
    });
  };

  return (
    <div className={`menu-accordion ${isOpen ? 'open' : ''}`}>
      <button type="button" className="menu-accordion-header" onClick={toggle} aria-expanded={isOpen}>
        <span className="menu-accordion-title">
          {title} <span className="menu-accordion-count">({totalCount})</span>
        </span>
        <ChevronIcon />
      </button>

      <div className="menu-accordion-body" ref={bodyRef} style={{ maxHeight }}>
        {image && <img src={image} alt={imageAlt} className="menu-accordion-image" />}

        {groups ? (
          groups.map((group) => (
            <div className="menu-accordion-group" key={group.subheading}>
              <h5 className="menu-accordion-subheading">{group.subheading}</h5>
              {group.items.map((item, i) => (
                <AccordionRow item={item} key={i} />
              ))}
            </div>
          ))
        ) : (
          <>
            {visibleItems.map((item, i) => (
              <AccordionRow item={item} key={i} />
            ))}
            {remaining > 0 && (
              <button type="button" className="menu-accordion-more" onClick={() => setShowAll(true)}>
                + {remaining} more options
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function AccordionRow({ item }: { item: MenuItem }) {
  return (
    <div className="menu-accordion-item">
      <div className="menu-accordion-item-header">
        <span className="menu-accordion-item-name-group">
          {item.id && <span className="menu-accordion-item-id">{item.id}</span>}
          <h4 className="menu-accordion-item-name">{item.name}</h4>
          {item.image && <PhotoButton image={item.image} alt={item.name} />}
        </span>
        <span className="menu-accordion-item-price">{item.price}</span>
      </div>
      {item.description && <p className="menu-accordion-item-description">{item.description}</p>}
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="menu-accordion-chevron">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
