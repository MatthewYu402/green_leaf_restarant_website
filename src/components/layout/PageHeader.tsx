import './PageHeader.css';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import BottomNav from './BottomNav';
import { pageHeaders } from '@/content';
import { useScrolledPast } from '@/hooks/useScrolledPast';

const MENU_ROUTES = ['/menu', '/sushi'];

/**
 * Navbar + per-route page banner + mobile bottom nav. Banner text comes from
 * `pageHeaders` in content.ts; on the menu pages the banner shrinks on scroll.
 */
export default function PageHeader() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isMenuPage = MENU_ROUTES.includes(location.pathname);
  const headerContent = pageHeaders[location.pathname];
  const shrunk = useScrolledPast(() => 80, isMenuPage, [location.pathname]);

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