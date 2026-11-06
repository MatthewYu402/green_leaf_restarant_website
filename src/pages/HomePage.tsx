import './HomePage.css';
import { Link } from 'react-router-dom';
import { business, home } from '@/content';
import { useScrollHint } from '@/hooks/useScrollHint';
import { useSectionSnapScroll } from '@/hooks/useSectionSnapScroll';
import { getScrollRoot } from '@/utils/scrollRoot';
import Divider from '../components/ui/Divider';
import RichText from '../components/ui/RichText';
import SignatureSection from '../components/home/SignatureSection';
import BeyondTheMenu from '../components/home/BeyondTheMenu';
import StoryTeaser from '../components/home/StoryTeaser';
import PeekInside from '../components/home/PeekInside';

export default function HomePage() {
  useSectionSnapScroll();
  const showScrollHint = useScrollHint();

  return (
    <>
      {/* Desktop/tablet — full-viewport photo hero. Hidden at the mobile breakpoint. */}
      <div className="hero">
        <div className="bg-image"></div>
        <div className="center-wrapper">
          <div className="main-body">
            <h1 className="home-title">{home.hero.title}</h1>
            <p className="sub-heading">
              <RichText text={home.hero.subtitle} />
            </p>
            <Link to={home.hero.button.href} className="menu-btn">
              {home.hero.button.label}
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`scroll-hint ${showScrollHint ? '' : 'scroll-hint--hidden'}`}
        onClick={() => getScrollRoot()?.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        aria-label="Scroll down"
      >
        <svg viewBox="0 0 24 24" className="scroll-hint-arrow" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Mobile-only — plain text welcome block, no photo. Hidden above the breakpoint. */}
      <div className="hero-mobile">
        <h1 className="hero-mobile-title">{home.heroMobile.title}</h1>
        <p className="hero-mobile-subtitle">{home.heroMobile.subtitle}</p>
      </div>

      <div className="home-content">
        <SignatureSection {...home.signature} />
        <Divider icon={home.dividerIcons.flower} mobileOnly />
        <BeyondTheMenu {...home.beyondTheMenu} phone={business.phone} />
        <Divider icon={home.dividerIcons.leaf} mobileOnly />
        <StoryTeaser {...home.story} />
        <Divider icon={home.dividerIcons.flower} mobileOnly />
        <PeekInside {...home.peekInside} />
      </div>
    </>
  );
}
