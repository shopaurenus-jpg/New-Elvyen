import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Code, Palette } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import ScheduleMeeting from '../components/ScheduleMeeting';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true });

  useEffect(() => {
    // Hero glow animation
    const glow = document.querySelector('.hero-glow');
    if (glow) {
      gsap.to(glow, {
        scale: 1.5,
        opacity: 0.2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }

    // Parallax effect for hero elements
    gsap.to('.hero-subtitle', {
      y: 100,
      opacity: 0.5,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, []);

  const featuredProjects = [
    {
      id: 1,
      title: 'Trello',
      category: 'Web Application',
      description: 'Modern fintech dashboard with real-time analytics',
      image: 'https://images.unsplash.com/photo-1769120064066-4ab270e38ea8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwzfHxmdXR1cmlzdGljJTIwZGlnaXRhbCUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdCUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzcyODc3OTIyfDA&ixlib=rb-4.1.0&q=85',
      link: 'https://trello.com/',
    },
    {
      id: 2,
      title: 'Synthesia',
      category: 'AI Platform',
      description: 'AI-powered content generation platform',
      image: 'https://images.unsplash.com/photo-1762279388952-85187155e48d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHw0fHxmdXR1cmlzdGljJTIwZGlnaXRhbCUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdCUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzcyODc3OTIyfDA&ixlib=rb-4.1.0&q=85',
      link: 'https://www.synthesia.io/',
    },
    {
      id: 3,
      title: 'Target',
      category: 'E-commerce',
      description: 'Next-gen e-commerce with immersive 3D',
      image: 'https://images.unsplash.com/photo-1581084243124-209fc8f93cf6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNkJTIwbmVvbiUyMGJsdWUlMjBjeWFuJTIwc2hhcGVzJTIwZGFyayUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzcyODc3OTIwfDA&ixlib=rb-4.1.0&q=85',
      link: 'https://www.target.com/',
    },
    {
      id: 4,
      title: 'Active Theory',
      category: 'Website Design',
      description: 'Portfolio website with stunning animations',
      image: 'https://images.unsplash.com/photo-1772056382223-d6e5ec57dd9c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMDNkJTIwbmVvbiUyMGJsdWUlMjBjeWFuJTIwc2hhcGVzJTIwZGFyayUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzcyODc3OTIwfDA&ixlib=rb-4.1.0&q=85',
      link: 'https://activetheory.net/',
    },
    {
      id: 5,
      title: 'Raycast',
      category: 'Web Application',
      description: 'Health and fitness tracking with personalized insights',
      image: 'https://images.unsplash.com/photo-1758117169154-ba6ffd8f51ad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMDNkJTIwbmVvbiUyMGJsdWUlMjBjeWFuJTIwc2hhcGVzJTIwZGFyayUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzcyODc3OTIwfDA&ixlib=rb-4.1.0&q=85',
      link: 'https://www.raycast.com/',
    },
    {
      id: 6,
      title: 'Landbook',
      category: 'UI/UX Design',
      description: 'Comprehensive design system for enterprise apps',
      image: 'https://images.unsplash.com/photo-1758520145147-c30bc656f314?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBjcmVhdGl2ZSUyMG9mZmljZSUyMHRlYW0lMjB3b3JraW5nJTIwZGFyayUyMGxpZ2h0aW5nfGVufDB8fHx8MTc3Mjg3NzkyMXww&ixlib=rb-4.1.0&q=85',
      link: 'https://land-book.com/',
    },
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Website Design',
      description: 'Stunning, conversion-focused websites that tell your brand story',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Web Development',
      description: 'High-performance web applications built with modern technologies',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Web Applications',
      description: 'Custom web apps tailored to your business needs',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Intuitive interfaces that users love to interact with',
    },
  ];

  const process = [
    { number: '01', title: 'Discovery', description: 'Understanding your vision and goals' },
    { number: '02', title: 'Design', description: 'Crafting the perfect visual experience' },
    { number: '03', title: 'Development', description: 'Building with cutting-edge technology' },
    { number: '04', title: 'Launch', description: 'Deploying and optimizing for success' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12" data-testid="hero-section">
        {/* Animated Glow */}
        <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-cyan-500 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-3 h-3 bg-blue-500 rounded-full"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8" data-testid="hero-headline">
              We Create
              <br />
              <span className="text-cyan-500">Digital</span> Experiences
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12"
            data-testid="hero-subheadline"
          >
            Elvyen builds modern websites, web apps, and digital solutions for startups and businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton
              data-testid="view-projects-btn"
              className="px-8 py-4 bg-white text-black rounded-full font-medium flex items-center gap-2 group"
            >
              <Link to="/portfolio" className="flex items-center gap-2">
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>

            <MagneticButton
              data-testid="start-project-btn"
              className="px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              <Link to="/contact">Start a Project</Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 md:py-32 px-6 md:px-12" data-testid="featured-projects-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-cyan-500 font-mono text-sm mb-4">FEATURED WORK</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight">
              Creative Showcase
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-2xl aspect-[4/3] block ${project.link ? 'cursor-pointer' : ''}`}
                data-testid={`project-card-${project.id}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-cyan-500 text-sm font-mono mb-2">{project.category}</p>
                  <h3 className="font-heading text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                  {project.link && (
                    <p className="text-cyan-500 text-xs mt-3 flex items-center gap-1">
                      View Project <ArrowRight className="w-4 h-4" />
                    </p>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section ref={servicesRef} className="py-24 md:py-32 px-6 md:px-12" data-testid="services-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <p className="text-cyan-500 font-mono text-sm mb-4">WHAT WE DO</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight">
              Our Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500"
                data-testid={`service-card-${index}`}
              >
                <div className="text-cyan-500 mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {service.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              data-testid="view-all-services-btn"
              className="inline-flex items-center gap-2 text-cyan-500 font-medium hover:gap-4 transition-all"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 px-6 md:px-12" data-testid="process-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-cyan-500 font-mono text-sm mb-4">HOW WE WORK</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight">
              Our Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
                data-testid={`process-step-${index}`}
              >
                <div className="font-mono text-6xl font-bold text-white/5 mb-4">{step.number}</div>
                <h3 className="font-heading text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white/[0.02]" data-testid="reviews-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-cyan-500 font-mono text-sm mb-4">TESTIMONIALS</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight">
              What Clients Say
            </h2>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                company: 'TechStart Inc.',
                role: 'CEO',
                review: 'Elvyen transformed our digital presence completely. Their attention to detail and modern design approach exceeded our expectations.',
                rating: 5,
                image: '👩‍💼',
              },
              {
                name: 'Michael Chen',
                company: 'InnovateLabs',
                role: 'Product Manager',
                review: 'Outstanding work! The team delivered a stunning website with smooth animations and excellent user experience. Highly recommended.',
                rating: 5,
                image: '👨‍💻',
              },
              {
                name: 'Emily Rodriguez',
                company: 'Creative Studios',
                role: 'Design Director',
                review: 'Working with Elvyen was seamless. They understood our vision and brought it to life with cutting-edge technology and beautiful design.',
                rating: 5,
                image: '👩‍🎨',
              },
              {
                name: 'David Park',
                company: 'GrowthHub',
                role: 'Founder',
                review: 'The web application they built for us is fast, responsive, and exactly what we needed. Great communication throughout the project.',
                rating: 5,
                image: '👨‍💼',
              },
              {
                name: 'Priya Sharma',
                company: 'DesignCo',
                role: 'Creative Lead',
                review: 'Incredible attention to detail and creativity. Elvyen delivered a premium digital experience that our users love.',
                rating: 5,
                image: '👩‍💻',
              },
              {
                name: 'James Wilson',
                company: 'StartupVentures',
                role: 'CTO',
                review: 'Professional, skilled, and innovative. They took our startup to the next level with their exceptional web development expertise.',
                rating: 5,
                image: '👨‍🔬',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-500"
                data-testid={`review-card-${index}`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.review}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Meeting */}
      <ScheduleMeeting />

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 md:px-12" data-testid="cta-section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Ready to Start
              <br />
              <span className="text-cyan-500">Your Project?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Let's create something amazing together
            </p>
            <MagneticButton
              data-testid="cta-contact-btn"
              className="px-10 py-5 bg-cyan-500 text-black rounded-full font-medium text-lg"
            >
              <Link to="/contact">Get In Touch</Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;