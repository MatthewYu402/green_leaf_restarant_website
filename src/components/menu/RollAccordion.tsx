import { useState } from 'react';
import './RollAccordion.css';

export interface AccordionItem {
  name: string;
  description?: string;
  priceDisplay: string;
}

export interface AccordionGroup {
  subheading: string;
  items: AccordionItem[];
}

interface RollAccordionProps {
  title: string;
  items?: AccordionItem[];
  groups?: AccordionGroup[]; // use instead of `items` when subcategories need distinct labels (e.g. Seafood's Lunch/Dinner Exclusives)
  defaultOpen?: boolean;
  previewCount?: number;
  image?: string;
  imageAlt?: string;
}

export default function RollAccordion({
  title,
  items,
  groups,
  defaultOpen = false,
  previewCount = 3,
  image,
  imageAlt = "",
}: RollAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [showAll, setShowAll] = useState(false);

  const totalCount = groups
    ? groups.reduce((sum, g) => sum + g.items.length, 0)
    : (items?.length ?? 0);

  const visibleItems = !groups && items ? (showAll ? items : items.slice(0, previewCount)) : [];
  const remaining = !groups && items ? items.length - visibleItems.length : 0;

  return (
    <div className={`roll-accordion ${isOpen ? 'open' : ''}`}>
      <button
        type="button"
        className="roll-accordion-header"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
      >
        <span className="roll-accordion-title">
          {title} <span className="roll-accordion-count">({totalCount})</span>
        </span>
        <ChevronIcon />
      </button>

      <div className="roll-accordion-body">
        {image && (
          <img src={image} alt={imageAlt} className="roll-accordion-image" />
        )}

        {groups ? (
          groups.map((group) => (
            <div className="roll-accordion-group" key={group.subheading}>
              <h5 className="roll-accordion-subheading">{group.subheading}</h5>
              {group.items.map((item, i) => (
                <AccordionItemRow item={item} key={i} />
              ))}
            </div>
          ))
        ) : (
          <>
            {visibleItems.map((item, i) => (
              <AccordionItemRow item={item} key={i} />
            ))}
            {remaining > 0 && (
              <button
                type="button"
                className="roll-accordion-more"
                onClick={() => setShowAll(true)}
              >
                + {remaining} more options
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function AccordionItemRow({ item }: { item: AccordionItem }) {
  return (
    <div className="roll-accordion-item">
      <div className="roll-accordion-item-header">
        <h4 className="roll-accordion-item-name">{item.name}</h4>
        <span className="roll-accordion-item-price">{item.priceDisplay}</span>
      </div>
      {item.description && (
        <p className="roll-accordion-item-description">{item.description}</p>
      )}
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="roll-accordion-chevron">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}