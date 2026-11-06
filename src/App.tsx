import { Routes, Route } from 'react-router-dom';
import './App.css';

// NOTE: import order here sets the order of the bundled CSS, which decides
// ties between equally-specific selectors. Don't reorder casually.
import HomePage from './pages/HomePage';
import SushiMenuPage from './pages/SushiMenuPage';
import MainMenuPage from './pages/MainMenuPage';
import AboutUsPage from './pages/AboutUsPage';
import CareersPage from './pages/CareersPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ContactPage from './pages/ContactPage';
import { LightboxProvider } from './components/ui/Lightbox';
import PageHeader from './components/layout/PageHeader';
import ScrollToTop from './components/layout/ScrollToTop';
import SpecialsPage from './pages/SpecialsPage';
import Footer from './components/layout/Footer';
import { useScrollbarFade } from './hooks/useScrollbarFade';

export default function App() {
  useScrollbarFade();

  return (
    <LightboxProvider>
      <ScrollToTop />
      <PageHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MainMenuPage />} />
        <Route path="/sushi" element={<SushiMenuPage />} />
        <Route path="/specials" element={<SpecialsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
      <Footer />
    </LightboxProvider>
  );
}
