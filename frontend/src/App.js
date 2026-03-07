import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import '@/App.css';

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <div className="App relative">
          {/* Noise Overlay */}
          <div className="noise-overlay" />
          
          {/* Custom Cursor */}
          <CustomCursor />
          
          {/* Navigation */}
          <Navigation />
          
          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;