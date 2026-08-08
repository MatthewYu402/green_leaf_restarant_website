import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import './PageHeader.css'

const MENU_ROUTES = ['/menu'];

const PAGE_HEADERS: Record<string, { title: string; subtitle: string }> = {
  '/menu': {
    title: 'Our Menu',
    subtitle: 'Experience the harmony of Japanese techniques and fresh seasonal ingredients',
  },
};

export default function PageHeader() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isMenuPage = MENU_ROUTES.includes(location.pathname);
  const headerContent = PAGE_HEADERS[location.pathname];

  return (
    <>
      <Navbar />
      {!isHome && (
        <>
          {/* fixed visual layer — pinned to viewport, moves with the navbar, never scrolls */}
          <div className={`page-header-visual ${isMenuPage ? 'page-header-visual-menu' : ''}`}>
            {headerContent && (
              <div className="page-header-text">
                <h2>{headerContent.title}</h2>
                <p>{headerContent.subtitle}</p>
              </div>
            )}
          </div>
          {/* flow spacer — invisible, just reserves space so page content starts below the fixed header */}
          <div className={`page-header-spacer ${isMenuPage ? 'page-header-spacer-menu' : ''}`} />
        </>
      )}
    </>
  );
}