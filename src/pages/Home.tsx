import { useEffect } from 'react';
import SignatureSection from '../components/sections/SignatureSection'
import DailySpecials from "../components/sections/DailySpecials"
import './Home.css';

export default function Home() {
  {/* Navbar style swap (floating -> scrolled) based on scroll past hero */ }
  useEffect(() => {
    const scrollContainer = document.getElementById('root');
    const navbar = document.querySelector('.navbar');
    if (!scrollContainer || !navbar) return;

    const heroHeight = window.innerHeight;

    const handleNavbarStyle = () => {
      if (scrollContainer.scrollTop > heroHeight * 0.8) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    scrollContainer.addEventListener('scroll', handleNavbarStyle);
    return () => scrollContainer.removeEventListener('scroll', handleNavbarStyle);
  }, []);

  {/* Smooth scroll-to-next-section, only forward into unvisited sections */ }
  useEffect(() => {
  const scrollContainer = document.getElementById('root');
  if (!scrollContainer) return;

  const sections = Array.from(
    scrollContainer.querySelectorAll<HTMLElement>('.hero, .section')
  );

  let maxVisitedIndex = 0;
  let isAnimating = false;
  let rafId: number; // NEW

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
        rafId = requestAnimationFrame(step); // CHANGED — capture the ID
      } else {
        isAnimating = false;
      }
    };

    rafId = requestAnimationFrame(step); // CHANGED — capture the ID
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
  return () => {
    cancelAnimationFrame(rafId); // NEW — stop any in-flight animation on unmount
    scrollContainer.removeEventListener('wheel', handleWheel);
  };
}, []);

  return (
    <>
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
      <SignatureSection />
      <DailySpecials />
    </>
  );
}