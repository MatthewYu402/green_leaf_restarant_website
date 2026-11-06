import type { ReactNode } from 'react';
import './MenuPanel.css';

interface MenuPanelProps {
  title: string;
  /** Usually two <MenuList>s, laid out side by side. */
  children: ReactNode;
  className?: string;
}

/** Off-white rounded panel with a heading and side-by-side menu columns. */
export default function MenuPanel({ title, children, className }: MenuPanelProps) {
  return (
    <div className={className ? `menu-panel ${className}` : 'menu-panel'}>
      <h2 className="menu-panel-title">{title}</h2>
      <div className="menu-panel-columns">{children}</div>
    </div>
  );
}
