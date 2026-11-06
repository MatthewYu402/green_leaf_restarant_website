import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getScrollRoot } from '@/utils/scrollRoot';

/** Scrolls back to the top on every route change. */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    getScrollRoot()?.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
