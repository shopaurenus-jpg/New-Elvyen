import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Rocket } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technologies to deliver exceptional digital experiences.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client Focused',
      description: 'Your success is our success. We collaborate closely to understand and exceed your expectations.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Design Thinking',
      description: 'Every project starts with deep research and creative problem-solving to find the perfect solution.',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Modern Technology',
      description: 'We use the latest tools and frameworks to build fast, scalable, and maintainable applications.',
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero */}
      <section className="px-6 md:px-12 mb-24" data-testid="about-hero-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-500 font-mono text-sm mb-4">ABOUT ELVYEN</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8" data-testid="about-headline">
              We Are A Creative
              <br />
              <span className="text-cyan-500">Tech Studio</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
              Elvyen is a digital agency specializing in creating exceptional web experiences. We combine innovative design, modern technology, and strategic thinking to help startups and businesses thrive in the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 md:px-12 py-24" data-testid="story-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1758520145147-c30bc656f314?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBjcmVhdGl2ZSUyMG9mZmljZSUyMHRlYW0lMjB3b3JraW5nJTIwZGFyayUyMGxpZ2h0aW5nfGVufDB8fHx8MTc3Mjg3NzkyMXww&ixlib=rb-4.1.0&q=85"
              alt="Elvyen Team"
              className="rounded-2xl w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Founded by a team of passionate designers and developers, Elvyen emerged from a simple belief: the web should be beautiful, functional, and accessible to everyone.
              </p>
              <p>
                We've worked with startups disrupting industries, established businesses modernizing their digital presence, and creators bringing their visions to life. Each project is an opportunity to innovate and push the boundaries of what's possible.
              </p>
              <p>
                Today, we're proud to be trusted partners for brands that value quality, creativity, and results.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-12 py-24" data-testid="values-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-cyan-500 font-mono text-sm mb-4">OUR VALUES</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors duration-500 group"
                data-testid={`value-card-${index}`}
              >
                <div className="text-cyan-500 mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {value.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-12 py-24" data-testid="stats-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '30+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
                data-testid={`stat-${index}`}
              >
                <div className="font-heading text-4xl md:text-6xl font-bold text-cyan-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;