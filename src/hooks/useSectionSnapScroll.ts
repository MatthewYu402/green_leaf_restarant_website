import { useEffect } from 'react';
import { getScrollRoot } from '@/utils/scrollRoot';

const MOBILE_QUERY = '(max-width: 1024px)';
const SCROLL_DURATION_MS = 1000;

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/**
 * Home page only: a downward wheel scroll glides to the next `.hero` /
 * `.section`, but only into sections not yet visited. Disabled at/under
 * 1024px — full-viewport snap-per-section doesn't work once mobile needs to
 * fit more content into less space. Re-evaluated whenever the breakpoint is
 * crossed, not just once on mount.
 */
export function useSectionSnapScroll() {
  useEffect(() => {
    const scrollRoot = getScrollRoot();
    if (!scrollRoot) return;

    const mobileQuery = window.matchMedia(MOBILE_QUERY);
    let teardown: (() => void) | null = null;

    const setup = () => {
      teardown?.();
      teardown = null;

      if (mobileQuery.matches) return;

      const sections = Array.from(scrollRoot.querySelectorAll<HTMLElement>('.hero, .section'));

      let maxVisitedIndex = 0;
      let isAnimating = false;
      let rafId: number;

      const getCurrentIndex = () => {
        const currentScroll = scrollRoot.scrollTop;
        let index = 0;
        sections.forEach((section, i) => {
          if (section.offsetTop <= currentScroll + 10) index = i;
        });
        return index;
      };

      const animateScrollTo = (target: number) => {
        const start = scrollRoot.scrollTop;
        const distance = target - start;
        const startTime = performance.now();
        isAnimating = true;

        const step = (currentTime: number) => {
          const progress = Math.min((currentTime - startTime) / SCROLL_DURATION_MS, 1);
          scrollRoot.scrollTop = start + distance * easeInOutCubic(progress);
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
        const nextIndex = getCurrentIndex() + 1;
        const scrollingDown = e.deltaY > 0;

        if (scrollingDown && nextIndex < sections.length && nextIndex > maxVisitedIndex) {
          e.preventDefault();
          maxVisitedIndex = nextIndex;
          animateScrollTo(sections[nextIndex].offsetTop);
        }
      };

      scrollRoot.addEventListener('wheel', handleWheel, { passive: false });
      teardown = () => {
        cancelAnimationFrame(rafId);
        scrollRoot.removeEventListener('wheel', handleWheel);
      };
    };

    setup();
    mobileQuery.addEventListener('change', setup);

    return () => {
      teardown?.();
      mobileQuery.removeEventListener('change', setup);
    };
  }, []);
}
