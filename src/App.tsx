import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'

// Sections
import './components/SignatureSection'
import SignatureSection from './components/SignatureSection';

function App() {
  {/* Scrollbar Logic */ }
  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      document.documentElement.classList.add('scrolling');
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.documentElement.classList.remove('scrolling');
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  {/* */ }

  useEffect(() => {
    const scrollContainer = document.getElementById('root');
    if (!scrollContainer) return;

    const sections = Array.from(
      scrollContainer.querySelectorAll<HTMLElement>('.hero, .section')
    );

    let maxVisitedIndex = 0; // furthest section reached so far
    let isAnimating = false;

    const getCurrentIndex = () => {
      const currentScroll = scrollContainer.scrollTop;
      let index = 0;
      sections.forEach((section, i) => {
        if (section.offsetTop <= currentScroll + 10) {
          index = i;
        }
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
          requestAnimationFrame(step);
        } else {
          isAnimating = false;
        }
      };

      requestAnimationFrame(step);
    };

    const handleWheel = (e: WheelEvent) => {
      if (isAnimating) {
        e.preventDefault();
        return;
      }

      const currentIndex = getCurrentIndex();
      const scrollingDown = e.deltaY > 0;
      const nextIndex = currentIndex + 1;

      // Only intercept when scrolling DOWN into a section not yet visited
      if (scrollingDown && nextIndex < sections.length && nextIndex > maxVisitedIndex) {
        e.preventDefault();
        maxVisitedIndex = nextIndex;
        animateScrollTo(sections[nextIndex].offsetTop, 1000);
      }
      // Otherwise: do nothing, let native free scroll happen
      // (covers: scrolling up, or scrolling down within already-visited sections)
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="bg-image"></div>
        <div className="center-wrapper">
          {/* TODO: Turn this into a component or modularize */}
          <div className="main-body">
            <h1 className="home-title">Modern Fusion Sushi & Asian Cuisine</h1>
            <p className="sub-heading">Twenty-one years of dedication to precision, creativity, and the finest<br /> ingredients</p>
            <button className="menu-btn">View Menu</button>
          </div>
        </div>
      </div>
      {/* Sections */}
      <SignatureSection />
    </>
  )
}

export default App
