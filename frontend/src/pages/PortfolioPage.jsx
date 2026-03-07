import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const PortfolioPage = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'web-app', 'website', 'e-commerce', 'ui-ux'];

  const projects = [
    {
      id: 1,
      title: 'FinanceFlow',
      category: 'web-app',
      description: 'Modern fintech dashboard with real-time analytics and data visualization',
      image: 'https://images.unsplash.com/photo-1769120064066-4ab270e38ea8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwzfHxmdXR1cmlzdGljJTIwZGlnaXRhbCUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdCUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzcyODc3OTIyfDA&ixlib=rb-4.1.0&q=85',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'NeuralHub',
      category: 'web-app',
      description: 'AI-powered content generation platform with intuitive interface',
      image: 'https://images.unsplash.com/photo-1762279388952-85187155e48d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHw0fHxmdXR1cmlzdGljJTIwZGlnaXRhbCUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdCUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzcyODc3OTIyfDA&ixlib=rb-4.1.0&q=85',
      tags: ['Next.js', 'OpenAI', 'TailwindCSS'],
    },
    {
      id: 3,
      title: 'QuantumStore',
      category: 'e-commerce',
      description: 'Next-gen e-commerce platform with immersive 3D product views',
      image: 'https://images.unsplash.com/photo-1581084243124-209fc8f93cf6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNkJTIwbmVvbiUyMGJsdWUlMjBjeWFuJTIwc2hhcGVzJTIwZGFyayUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzcyODc3OTIwfDA&ixlib=rb-4.1.0&q=85',
      tags: ['React', 'Three.js', 'Stripe'],
    },
    {
      id: 4,
      title: 'CreativeStudio',
      category: 'website',
      description: 'Portfolio website for a creative agency with stunning animations',
      image: 'https://images.unsplash.com/photo-1772056382223-d6e5ec57dd9c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMDNkJTIwbmVvbiUyMGJsdWUlMjBjeWFuJTIwc2hhcGVzJTIwZGFyayUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzcyODc3OTIwfDA&ixlib=rb-4.1.0&q=85',
      tags: ['Next.js', 'GSAP', 'Framer Motion'],
    },
    {
      id: 5,
      title: 'HealthTrack',
      category: 'web-app',
      description: 'Health and fitness tracking application with personalized insights',
      image: 'https://images.unsplash.com/photo-1758117169154-ba6ffd8f51ad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMDNkJTIwbmVvbiUyMGJsdWUlMjBjeWFuJTIwc2hhcGVzJTIwZGFyayUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzcyODc3OTIwfDA&ixlib=rb-4.1.0&q=85',
      tags: ['React', 'Firebase', 'Chart.js'],
    },
    {
      id: 6,
      title: 'DesignSystem Pro',
      category: 'ui-ux',
      description: 'Comprehensive design system for enterprise applications',
      image: 'https://images.unsplash.com/photo-1769120064066-4ab270e38ea8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwzfHxmdXR1cmlzdGljJTIwZGlnaXRhbCUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdCUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzcyODc3OTIyfDA&ixlib=rb-4.1.0&q=85',
      tags: ['Figma', 'Storybook', 'React'],
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen pt-32">
      {/* Hero */}
      <section className="px-6 md:px-12 mb-16" data-testid="portfolio-hero-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-500 font-mono text-sm mb-4">PORTFOLIO</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8" data-testid="portfolio-headline">
              Our
              <br />
              <span className="text-cyan-500">Creative Work</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
              Explore our latest projects and see how we transform ideas into exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 md:px-12 mb-12" data-testid="portfolio-filter-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                data-testid={`filter-${cat}`}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-cyan-500 text-black'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:border-cyan-500/50'
                }`}
              >
                {cat.replace('-', ' ').toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 pb-24" data-testid="projects-grid-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-500"
                data-testid={`portfolio-project-${project.id}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading text-xl font-bold">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-500 text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;