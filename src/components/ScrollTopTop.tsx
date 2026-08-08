import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const scrollContainer = document.getElementById('root');
    scrollContainer?.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}