import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import './PageHeader.css'

const MENU_ROUTES = ['/menu', '/sushi'];

const PAGE_HEADERS: Record<string, { title: string; subtitle: string }> = {
  '/menu': {
    title: 'Our Menu',
    subtitle: 'Experience the harmony of Japanese techniques and fresh seasonal ingredients',
  },
  '/sushi': {
    title: 'Sushi Menu',
    subtitle: 'A curated selection, prepared with precision and care.',
  },
};

export default function PageHeader() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isMenuPage = MENU_ROUTES.includes(location.pathname);
  const headerContent = PAGE_HEADERS[location.pathname];
  const [shrunk, setShrunk] = useState(false);

  useEffect(() => {
    if (!isMenuPage) return;

    const scrollContainer = document.getElementById('root');
    if(!scrollContainer) return;

    const handleScroll = () => {
     setShrunk(scrollContainer.scrollTop > 80); 
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [location.pathname, isMenuPage]);

  return (
    <>
      <Navbar />
      {!isHome && (
        <>
          {/* fixed visual layer — pinned to viewport, moves with the navbar, never scrolls */}
          <div className={`page-header-visual ${isMenuPage ? 'page-header-visual-menu' : ''} ${isMenuPage && shrunk ? 'shrunk' : ''}`}>
            {headerContent && (
              <div className={`page-header-text ${shrunk ? 'hidden' : ''}`}>
                <h2>{headerContent.title}</h2>
                <p>{headerContent.subtitle}</p>
              </div>
            )}
          </div>
          {/* flow spacer — invisible, just reserves space so page content starts below the fixed header */}
          <div className={`page-header-spacer ${isMenuPage ? 'page-header-spacer-menu' : ''} ${isMenuPage && shrunk ? 'shrunk' : ''}`} />
        </>
      )}
    </>
  );
}