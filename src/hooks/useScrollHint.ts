import { useEffect, useState } from 'react';
import { getScrollRoot } from '@/utils/scrollRoot';

// Roughly the footer's height — hides the hint once the last real section is
// fully in view, rather than waiting for the true bottom of the page.
const BOTTOM_BUFFER = 400;

/**
 * Whether to show the bottom-of-page "scroll down" hint. Visible while there's
 * more content below; disabled on mobile. Once hidden it stays hidden for
 * this page load — scrolling back up does not bring it back.
 */
export function useScrollHint() {
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const scrollRoot = getScrollRoot();
    if (!scrollRoot) return;

    const mobileQuery = window.matchMedia('(max-width: 1024px)');
    let permanentlyHidden = false;

    const hide = () => {
      setShowScrollHint(false);
      permanentlyHidden = true;
    };

    const checkScrollPosition = () => {
      if (permanentlyHidden) return;
      if (mobileQuery.matches) return hide();

      const { scrollTop, scrollHeight, clientHeight } = scrollRoot;
      if (scrollHeight - (scrollTop + clientHeight) <= BOTTOM_BUFFER) hide();
    };

    checkScrollPosition();
    scrollRoot.addEventListener('scroll', checkScrollPosition, { passive: true });
    mobileQuery.addEventListener('change', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);

    return () => {
      scrollRoot.removeEventListener('scroll', checkScrollPosition);
      mobileQuery.removeEventListener('change', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  return showScrollHint;
}
