import { useEffect } from 'react';
import { getScrollRoot } from '@/utils/scrollRoot';

/** Stops the page behind an overlay (nav drawer, lightbox) from scrolling while `locked`. */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    const scrollRoot = getScrollRoot();
    if (!scrollRoot) return;
    scrollRoot.style.overflowY = locked ? 'hidden' : 'scroll';
    return () => {
      scrollRoot.style.overflowY = 'scroll';
    };
  }, [locked]);
}
