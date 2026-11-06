import type { CSSProperties } from 'react';
import './Divider.css';

interface DividerProps {
  icon?: string;
  iconAlt?: string;
  /** Max width of each line on either side of the icon, e.g. "600px". */
  lineWidth?: string;
  /** Line thickness, e.g. "2px". */
  thickness?: string;
  /** Only show at the mobile breakpoint (≤1024px). */
  mobileOnly?: boolean;
}

/** Horizontal gold rule with an optional centered icon. */
export default function Divider({ icon, iconAlt = '', lineWidth, thickness, mobileOnly = false }: DividerProps) {
  const style = { '--divider-line-width': lineWidth, '--divider-thickness': thickness } as CSSProperties;

  return (
    <div className={mobileOnly ? 'divider divider--mobile-only' : 'divider'} style={style}>
      <span className="divider__line" />
      {icon && (
        <>
          <img className="divider__icon" src={icon} alt={iconAlt} />
          <span className="divider__line" />
        </>
      )}
    </div>
  );
}
