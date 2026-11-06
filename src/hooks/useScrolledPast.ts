import { useEffect, useRef, useState } from 'react';
import { getScrollRoot } from '@/utils/scrollRoot';

/**
 * True once the page has scrolled more than `getThreshold()` pixels.
 * Only listens while `enabled`; reports false otherwise. `getThreshold` is
 * read once each time the listener is (re)attached, which happens when
 * `enabled` or `resetKey` changes.
 */
export function useScrolledPast(getThreshold: () => number, enabled: boolean, resetKey?: unknown) {
  const [scrolledPast, setScrolledPast] = useState(false);
  const getThresholdRef = useRef(getThreshold);
  getThresholdRef.current = getThreshold;

  useEffect(() => {
    if (!enabled) {
      setScrolledPast(false);
      return;
    }

    const scrollRoot = getScrollRoot();
    if (!scrollRoot) return;

    const threshold = getThresholdRef.current();
    const handleScroll = () => setScrolledPast(scrollRoot.scrollTop > threshold);

    scrollRoot.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => scrollRoot.removeEventListener('scroll', handleScroll);
  }, [enabled, resetKey]);

  return scrolledPast;
}
