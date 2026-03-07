import { motion } from 'framer-motion';
import { Code, Zap, Sparkles, Palette, ShoppingCart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagneticButton from '../components/MagneticButton';

const ServicesPage = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Website Design',
      description: 'Stunning, conversion-focused websites that tell your brand story and drive results.',
      features: [
        'Responsive Design',
        'Custom Illustrations',
        'Brand Identity',
        'SEO Optimization',
      ],
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Web Development',
      description: 'High-performance web applications built with modern technologies and best practices.',
      features: [
        'React & Next.js',
        'API Integration',
        'Performance Optimization',
        'Cloud Deployment',
      ],
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Web Applications',
      description: 'Custom web apps tailored to your business needs with intuitive user experiences.',
      features: [
        'Dashboard Design',
        'Real-time Features',
        'Data Visualization',
        'User Management',
      ],
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'Intuitive interfaces that users love to interact with, backed by research and testing.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Usability Testing',
      ],
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: 'E-commerce Development',
      description: 'Complete e-commerce solutions with secure payments and inventory management.',
      features: [
        'Product Catalogs',
        'Payment Integration',
        'Order Management',
        'Analytics Dashboard',
      ],
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategies to help your business grow and reach new audiences.',
      features: [
        'Market Analysis',
        'Competitor Research',
        'Growth Planning',
        'Performance Tracking',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero */}
      <section className="px-6 md:px-12 mb-24" data-testid="services-hero-section">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-500 font-mono text-sm mb-4">SERVICES</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8" data-testid="services-headline">
              What We
              <br />
              <span className="text-cyan-500">Offer</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              From design to development, we provide end-to-end digital solutions that help your business succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 py-12" data-testid="services-grid-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500"
                data-testid={`service-detail-card-${index}`}
              >
                <div className="text-cyan-500 mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {service.icon}
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-24" data-testid="services-cta-section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Let's Build Something
              <br />
              <span className="text-cyan-500">Amazing Together</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Ready to start your project? Get in touch and let's discuss your ideas.
            </p>
            <MagneticButton
              data-testid="services-contact-btn"
              className="px-10 py-5 bg-cyan-500 text-black rounded-full font-medium text-lg"
            >
              <Link to="/contact">Contact Us</Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;