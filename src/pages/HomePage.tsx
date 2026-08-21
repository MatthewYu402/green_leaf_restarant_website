import './HomePage.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

// Icons
import flowerIcon from '@/assets/icons/flower-icon.svg'
import leafIcon from '@/assets/icons/gold-leaf.svg'

// Components
import Divider from '../components/shared/Divider';
import SignatureSection from '../components/sections/SignatureSection';
import BeyondTheMenu from '../components/sections/BeyondTheMenu';
import StoryTeaser from '../components/sections/StoryTeaser';
import PeekInside from '../components/sections/PeekInside';

export default function Home() {
  const [showScrollHint, setShowScrollHint] = useState(true);

  {/* Smooth scroll-to-next-section, only forward into unvisited sections.
      Disabled at/under 1024px — full-viewport snap-per-section doesn't work
      once mobile needs to fit more content into less space. Re-evaluated on
      breakpoint crossing via matchMedia, not just checked once on mount. */}
  useEffect(() => {
    const scrollContainer = document.getElementById('root');
    if (!scrollContainer) return;

    const mobileQuery = window.matchMedia('(max-width: 1024px)');
    let teardown: (() => void) | null = null;

    const setup = () => {
      teardown?.();
      teardown = null;

      if (mobileQuery.matches) return;

      const sections = Array.from(
        scrollContainer.querySelectorAll<HTMLElement>('.hero, .section')
      );

      let maxVisitedIndex = 0;
      let isAnimating = false;
      let rafId: number;

      const getCurrentIndex = () => {
        const currentScroll = scrollContainer.scrollTop;
        let index = 0;
        sections.forEach((section, i) => {
          if (section.offsetTop <= currentScroll + 10) index = i;
        });
        return index;
      };

      const animateScrollTo = (target: number, duration: number) => {
        const start = scrollContainer.scrollTop;
        const distance = target - start;
        const startTime = performance.now();
        isAnimating = true;

        const easeInOutCubic = (t: number) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const step = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          scrollContainer.scrollTop = start + distance * easeInOutCubic(progress);
          if (progress < 1) {
            rafId = requestAnimationFrame(step);
          } else {
            isAnimating = false;
          }
        };

        rafId = requestAnimationFrame(step);
      };

      const handleWheel = (e: WheelEvent) => {
        if (isAnimating) {
          e.preventDefault();
          return;
        }
        const currentIndex = getCurrentIndex();
        const scrollingDown = e.deltaY > 0;
        const nextIndex = currentIndex + 1;

        if (scrollingDown && nextIndex < sections.length && nextIndex > maxVisitedIndex) {
          e.preventDefault();
          maxVisitedIndex = nextIndex;
          animateScrollTo(sections[nextIndex].offsetTop, 1000);
        }
      };

      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
      teardown = () => {
        cancelAnimationFrame(rafId);
        scrollContainer.removeEventListener('wheel', handleWheel);
      };
    };

    setup();
    mobileQuery.addEventListener('change', setup);

    return () => {
      teardown?.();
      mobileQuery.removeEventListener('change', setup);
    };
  }, []);

  // Bottom-of-page scroll hint — visible while there's more content past
  // the last real section. Disabled on mobile. Once hidden (reached the
  // bottom), stays hidden permanently for this page load — scrolling back
  // up does not bring it back; only a refresh resets it.
  useEffect(() => {
    const scrollContainer = document.getElementById('root');
    if (!scrollContainer) return;

    const mobileQuery = window.matchMedia('(max-width: 1024px)');
    let permanentlyHidden = false;

    // Roughly the footer's height — hides the hint once the last real
    // section (PeekInside) is fully in view, rather than waiting until
    // the true bottom of the page (footer included) is reached.
    const BOTTOM_BUFFER = 400;

    const checkScrollPosition = () => {
      if (permanentlyHidden) return;

      if (mobileQuery.matches) {
        setShowScrollHint(false);
        permanentlyHidden = true;
        return;
      }

      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);

      if (distanceFromBottom <= BOTTOM_BUFFER) {
        setShowScrollHint(false);
        permanentlyHidden = true;
      }
    };

    checkScrollPosition();
    scrollContainer.addEventListener('scroll', checkScrollPosition, { passive: true });
    mobileQuery.addEventListener('change', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);

    return () => {
      scrollContainer.removeEventListener('scroll', checkScrollPosition);
      mobileQuery.removeEventListener('change', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  return (
    <>
      {/* Desktop/tablet — full-viewport photo hero. Hidden at the mobile breakpoint. */}
      <div className="hero">
        <div className="bg-image"></div>
        <div className="center-wrapper">
          <div className="main-body">
            <h1 className="home-title">Modern Fusion Sushi & Asian Cuisine</h1>
            <p className="sub-heading">
              Twenty-one years of dedication to precision, creativity, and the finest<br /> ingredients
            </p>
            <Link to="/menu" className="menu-btn">View Menu</Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`scroll-hint ${showScrollHint ? '' : 'scroll-hint--hidden'}`}
        onClick={() => {
          const scrollContainer = document.getElementById('root');
          if (!scrollContainer) return;
          scrollContainer.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        }}
        aria-label="Scroll down"
      >
        <svg viewBox="0 0 24 24" className="scroll-hint-arrow" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Mobile-only — plain text welcome block, no photo. Hidden above the breakpoint. */}
      <div className="hero-mobile">
        <h1 className="hero-mobile-title">Welcome</h1>
        <p className="hero-mobile-subtitle">
          Experience twenty years of family legacy through curated, premium sushi.
        </p>
      </div>

      <div className="home-content">
        <SignatureSection />
        <Divider iconUrl={flowerIcon} className="home-mobile-divider" />
        <BeyondTheMenu />
        <Divider iconUrl={leafIcon} className="home-mobile-divider" />
        <StoryTeaser />
        <Divider iconUrl={flowerIcon} className="home-mobile-divider" />
        <PeekInside />
      </div>
    </>
  );
}