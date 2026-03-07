import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div
        className={`mx-6 md:mx-12 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-black/60 backdrop-blur-xl border border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 md:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            data-testid="nav-logo"
            className="text-2xl font-heading font-bold text-white relative z-10"
          >
            <span className="text-cyan-500">El</span>vyen
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                data-testid={`nav-${item.name.toLowerCase()}`}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === item.path
                    ? 'text-cyan-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-cyan-500 transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            data-testid="nav-cta-button"
            className="hidden md:block px-6 py-3 bg-cyan-500 text-black rounded-full font-medium hover:bg-cyan-400 transition-colors"
          >
            Start Project
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mx-6 mt-4 p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl"
          data-testid="mobile-menu"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              data-testid={`mobile-nav-${item.name.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-3 text-lg font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-cyan-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            data-testid="mobile-cta-button"
            onClick={() => setMobileMenuOpen(false)}
            className="block mt-4 px-6 py-3 bg-cyan-500 text-black rounded-full font-medium text-center hover:bg-cyan-400 transition-colors"
          >
            Start Project
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;