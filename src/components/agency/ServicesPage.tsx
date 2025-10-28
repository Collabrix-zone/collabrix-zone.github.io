import { motion } from 'motion/react';
import { Palette, Code, Target, Rocket, Smartphone, Globe, Database, Shield } from 'lucide-react';

interface ServicesPageProps {
  isDark: boolean;
}

export function ServicesPage({ isDark }: ServicesPageProps) {
  const services = [
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love',
      details: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing'
      ]
    },
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'High-performance websites built with modern tech',
      details: [
        'React & Next.js Development',
        'Responsive Design',
        'Performance Optimization',
        'SEO Best Practices'
      ]
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile App Design',
      description: 'Native and cross-platform mobile experiences',
      details: [
        'iOS & Android Design',
        'React Native Development',
        'App Store Optimization',
        'Mobile-First Approach'
      ]
    },
    {
      icon: <Target size={32} />,
      title: 'Brand Strategy',
      description: 'Strategic design that drives business results',
      details: [
        'Brand Identity Design',
        'Visual Guidelines',
        'Marketing Materials',
        'Brand Positioning'
      ]
    },
    {
      icon: <Rocket size={32} />,
      title: 'Product Design',
      description: 'End-to-end product experiences that scale',
      details: [
        'Product Strategy',
        'Design Systems',
        'User Flows',
        'Design Sprints'
      ]
    },
    {
      icon: <Globe size={32} />,
      title: 'Web3 & Blockchain',
      description: 'Decentralized applications and smart contracts',
      details: [
        'DApp Design',
        'NFT Marketplaces',
        'Crypto Wallets',
        'Web3 Integration'
      ]
    },
    {
      icon: <Database size={32} />,
      title: 'SaaS Solutions',
      description: 'Scalable software-as-a-service platforms',
      details: [
        'Dashboard Design',
        'Admin Panels',
        'Multi-tenant Systems',
        'Analytics Integration'
      ]
    },
    {
      icon: <Shield size={32} />,
      title: 'Design Systems',
      description: 'Comprehensive design systems for consistency',
      details: [
        'Component Libraries',
        'Documentation',
        'Design Tokens',
        'Style Guides'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="px-4 sm:px-6 md:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl opacity-70 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive design and development solutions tailored to your needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 md:px-8 py-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`p-8 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'border-white/10 hover:border-sky-400/50 hover:bg-white/5' 
                    : 'border-gray-200/50 hover:border-sky-600/50 hover:bg-white/30'
                }`}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`mb-4 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl mb-3">{service.title}</h3>
                <p className="opacity-70 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 opacity-60">
                      <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-sky-400' : 'bg-sky-600'}`} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
