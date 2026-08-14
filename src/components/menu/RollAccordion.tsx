import { useState } from 'react';
import './RollAccordion.css';

export interface AccordionItem {
  name: string;
  description?: string;
  priceDisplay: string;
}

interface RollAccordionProps {
  title: string;
  items: AccordionItem[];
  defaultOpen?: boolean;
  previewCount?: number;
}

export default function RollAccordion({
  title,
  items,
  defaultOpen = false,
  previewCount = 3,
}: RollAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? items : items.slice(0, previewCount);
  const remaining = items.length - visibleItems.length;

  return (
    <div className={`roll-accordion ${isOpen ? 'open' : ''}`}>
      <button
        type="button"
        className="roll-accordion-header"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
      >
        <span className="roll-accordion-title">
          {title} <span className="roll-accordion-count">({items.length})</span>
        </span>
        <ChevronIcon />
      </button>

      {/* Height-animated via CSS grid-template-rows (0fr -> 1fr), not measured
          in JS — deliberately avoiding the class of bug we hit with the old
          carousel's ResizeObserver-based measurement. */}
      <div className="roll-accordion-body-wrapper">
        <div className="roll-accordion-body">
          {visibleItems.map((item) => (
            <div className="roll-accordion-item" key={item.name}>
              <div className="roll-accordion-item-header">
                <h4 className="roll-accordion-item-name">{item.name}</h4>
                <span className="roll-accordion-item-price">{item.priceDisplay}</span>
              </div>
              {item.description && (
                <p className="roll-accordion-item-description">{item.description}</p>
              )}
            </div>
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
        </div>
      </div>
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