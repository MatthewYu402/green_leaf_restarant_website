import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/HomePage';
import SushiMenu from './pages/SushiMenuPage';
import MainMenu from './pages/MainMenuPage';
import AboutUsPage from './pages/AboutUsPage';
import CareersPage from './pages/CareersPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

// Components
import { LightboxProvider } from './components/shared/Lightbox';
import PageHeader from './components/layout/PageHeader';
import ScrollToTop from './components/ScrollTopTop';
import Specials from './pages/SpecialsPage';
import Footer from './components/layout/Footer';

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
    <LightboxProvider>
        <ScrollToTop />
        <PageHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MainMenu />} />
          <Route path="/sushi" element={<SushiMenu />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
        <Footer />
    </LightboxProvider>
      
    </>
  );
}

export default App;