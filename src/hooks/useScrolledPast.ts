import { useEffect, useState } from 'react';
import { getScrollRoot } from '@/utils/scrollRoot';

/**
 * True once the page has scrolled more than `getThreshold()` pixels.
 * Only listens while `enabled`; reports false otherwise. `getThreshold` is
 * read once each time the listener is (re)attached, which happens when
 * `enabled` or any value in `resetKeys` changes.
 */
export function useScrolledPast(getThreshold: () => number, enabled: boolean, resetKeys: unknown[] = []) {
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setScrolledPast(false);
      return;
    }

    const scrollRoot = getScrollRoot();
    if (!scrollRoot) return;

    const threshold = getThreshold();
    const handleScroll = () => setScrolledPast(scrollRoot.scrollTop > threshold);

    scrollRoot.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => scrollRoot.removeEventListener('scroll', handleScroll);
  }, [enabled, ...resetKeys]);

  return scrolledPast;
}
