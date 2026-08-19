import './PageHeader.css'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Components
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

// Images
// TODO: placeholder — swap for a real sushi platter photo
import sushiHeaderImage from '@/assets/images/sushi-platter-3.jpg';

const MENU_ROUTES = ['/menu', '/sushi'];

interface PageHeaderContent {
  title: string;
  subtitle: string;
  intro?: string;        // optional longer paragraph, shown in-flow below the mobile header image
  mobileImage?: string;  // optional photo background for the mobile header — falls back to solid green
}

const PAGE_HEADERS: Record<string, PageHeaderContent> = {
  '/menu': {
    title: 'Our Menu',
    subtitle: 'Inspired by tradition, crafted with care, and served with flavor.',
    intro: "Experience the rich flavors of Asian cuisine, bringing together fresh seasonal ingredients"
  },
  '/sushi': {
    title: 'Our Sushi',
    subtitle: 'Crafted with precision, served with passion.',
    intro: "Experience our meticulously curated variety of sushi items, ranging from our twenty-year legacy Anniversary Rolls to delicately sliced Nigiri and vibrant Sushi Salads.",
    mobileImage: sushiHeaderImage,
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
    if (!scrollContainer) return;

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
          {/* Desktop/tablet — fixed overlay behind the navbar, unchanged from before.
              Hidden at the mobile breakpoint (see CSS) — replaced by the in-flow
              block below, which can't conflict with the fixed navbar since it
              isn't fixed itself. */}
          <div className={`page-header-visual ${isMenuPage ? 'page-header-visual-menu' : ''} ${isMenuPage && shrunk ? 'shrunk' : ''}`}>
            {headerContent && (
              <div className={`page-header-text ${shrunk ? 'hidden' : ''}`}>
                <h2>{headerContent.title}</h2>
                <p>{headerContent.subtitle}</p>
              </div>
            )}
          </div>
          <div className={`page-header-spacer ${isMenuPage ? 'page-header-spacer-menu' : ''} ${isMenuPage && shrunk ? 'shrunk' : ''}`} />

          {/* Mobile — normal in-flow content, sits below the fixed navbar rather
              than behind it. Hidden above the breakpoint (see CSS). */}
          {headerContent && (
            <div className="page-header-mobile">
              <div
                className="page-header-mobile-visual"
                style={headerContent.mobileImage ? { backgroundImage: `url(${headerContent.mobileImage})` } : undefined}
              >
                <div className="page-header-mobile-text">
                  <h1>{headerContent.title}</h1>
                  <p>{headerContent.subtitle}</p>
                </div>
              </div>
              {headerContent.intro && (
                <p className="page-header-mobile-intro">{headerContent.intro}</p>
              )}
            </div>
          )}
        </>
      )}
      <BottomNav />
    </>
  );
}