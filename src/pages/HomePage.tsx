import './HomePage.css';
import { useEffect } from 'react';

// Icons
import circleIcon from '@/assets/icons/circle.svg';

// Components
import Divider from '../components/shared/Divider';
import SignatureSection from '../components/sections/SignatureSection';
import BeyondTheMenu from '../components/sections/BeyondTheMenu';
import StoryTeaser from '../components/sections/StoryTeaser';
import PeekInside from '../components/sections/PeekInside';

export default function Home() {
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
            <button className="menu-btn">View Menu</button>
          </div>
        </div>
      </div>

      {/* Mobile-only — plain text welcome block, no photo. Hidden above the breakpoint. */}
      <div className="hero-mobile">
        <h1 className="hero-mobile-title">Welcome</h1>
        <p className="hero-mobile-subtitle">
          Experience twenty years of family legacy through curated, premium sushi.
        </p>
      </div>

      <SignatureSection />
      <Divider iconUrl={circleIcon} className="home-mobile-divider" />
      <BeyondTheMenu />
      <Divider iconUrl={circleIcon} className="home-mobile-divider" />
      <StoryTeaser />
      <Divider iconUrl={circleIcon} className="home-mobile-divider" />
      <PeekInside />
    </>
  );
}