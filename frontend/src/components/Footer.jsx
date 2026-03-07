import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      { name: 'Website Design', path: '/services' },
      { name: 'Web Development', path: '/services' },
      { name: 'Web Applications', path: '/services' },
      { name: 'UI/UX Design', path: '/services' },
    ],
  };

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6" data-testid="footer-logo">
              <img 
                src="https://customer-assets.emergentagent.com/job_flux-digital-1/artifacts/py96ij7q_IMG_1020-removebg-preview.png" 
                alt="Elvyen Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Creating exceptional digital experiences for startups and businesses worldwide.
            </p>
            <div className="flex items-center gap-2">
              <Link 
                to="/contact" 
                data-testid="footer-cta"
                className="inline-flex items-center gap-2 text-cyan-500 text-sm font-medium hover:gap-3 transition-all group"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                    className="text-gray-400 text-sm hover:text-cyan-500 transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    data-testid={`footer-service-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 text-sm hover:text-cyan-500 transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-6 text-white">Get In Touch</h3>
            <div className="space-y-4">
              <a
                href="mailto:workelvyen@gmail.com"
                data-testid="footer-email"
                className="flex items-start gap-3 text-gray-400 text-sm hover:text-cyan-500 transition-colors group"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-cyan-500" />
                <span className="group-hover:translate-x-1 transition-transform">
                  workelvyen@gmail.com
                </span>
              </a>
              
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-cyan-500" />
                <div className="space-y-1">
                  <a href="tel:+919306928510" className="block hover:text-cyan-500 transition-colors" data-testid="footer-phone-1">
                    +91 93069 28510
                  </a>
                  <a href="tel:+919991239374" className="block hover:text-cyan-500 transition-colors" data-testid="footer-phone-2">
                    +91 99912 39374
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-cyan-500" />
                <span>
                  New Delhi<br />India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm" data-testid="footer-copyright">
              © {currentYear} Elvyen. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <Link 
                to="/about" 
                className="text-gray-500 text-sm hover:text-cyan-500 transition-colors"
                data-testid="footer-bottom-privacy"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/about" 
                className="text-gray-500 text-sm hover:text-cyan-500 transition-colors"
                data-testid="footer-bottom-terms"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </footer>
  );
};

export default Footer;
