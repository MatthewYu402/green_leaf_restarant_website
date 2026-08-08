import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// Pages
import Home from './pages/Home';
import SushiMenu from './pages/SushiMenu';
import LunchSpecials from './pages/LunchSpecials';
import MainMenu from './pages/MainMenu';

// Components
import PageHeader from './components/layout/PageHeader';
import ScrollToTop from './components/ScrollTopTop';

function App() {
  {/* Scrollbar fade — global, applies on every page */ }
  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      scrollContainer?.classList.add('scrolling'); // was document.documentElement
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        scrollContainer?.classList.remove('scrolling'); // was document.documentElement
      }, 1000);
    };

    const scrollContainer = document.getElementById('root');
    scrollContainer?.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer?.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <PageHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MainMenu />}/>
        <Route path="/sushi" element={<SushiMenu />} />
        <Route path="/lunch_specials" element={<LunchSpecials />} />
      </Routes>
    </>
  );
}

export default App;