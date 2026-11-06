import { useEffect } from 'react';
import { getScrollRoot } from '@/utils/scrollRoot';

/** Adds a `scrolling` class to the scroll root while scrolling, removed 1s after scrolling stops. */
export function useScrollbarFade() {
  useEffect(() => {
    const scrollRoot = getScrollRoot();
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      scrollRoot?.classList.add('scrolling');
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        scrollRoot?.classList.remove('scrolling');
      }, 1000);
    };

    scrollRoot?.addEventListener('scroll', handleScroll);

    return () => {
      scrollRoot?.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
}
