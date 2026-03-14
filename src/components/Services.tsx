import { motion } from 'motion/react';
import { Palette, Zap, Users, Target, ArrowUpRight, UserCheck, Briefcase } from 'lucide-react';

interface ServicesProps {
  isDark: boolean;
}

export function Services({ isDark }: ServicesProps) {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Crafting intuitive interfaces that delight users and drive conversions',
      color: 'from-sky-600 to-sky-700'
    },
    {
      icon: Zap,
      title: 'Design Systems',
      description: 'Scalable design frameworks that ensure consistency across platforms',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: UserCheck,
      title: 'Talent Acquisition',
      description: 'Connecting businesses with exceptional professionals across all industries',
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: Users,
      title: 'User Research',
      description: 'Data-driven insights to understand your audience and optimize experiences',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Briefcase,
      title: 'HR Consulting',
      description: 'Strategic talent management solutions to build and scale your team',
      color: 'from-green-600 to-green-700'
    },
    {
      icon: Target,
      title: 'Brand Strategy',
      description: 'Comprehensive brand identity that resonates with your target market',
      color: 'from-rose-600 to-rose-700'
    }
  ];

  return (
    <section 
      id="services" 
      className="py-24 px-6 relative"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            id="services-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-sky-600 to-orange-500 bg-clip-text text-transparent dark:from-sky-400 dark:to-orange-400">
              Expertise
            </span>
          </h2>
          
          <p className="text-xl opacity-70 max-w-3xl mx-auto leading-relaxed">
            We specialize in creating exceptional digital experiences and building high-performing teams 
            that drive real business results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:shadow-lg ${
                  isDark 
                    ? 'bg-gray-900/20 border-white/10 hover:bg-gray-900/30 hover:border-white/20' 
                    : 'bg-white/40 border-gray-200/30 hover:bg-white/60 hover:border-gray-200/50'
                }`}
              >
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <IconComponent size={24} className="text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="opacity-70 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <motion.div
                  className="flex items-center gap-2 text-sm font-medium text-sky-600 dark:text-sky-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  Learn more
                  <ArrowUpRight size={16} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg opacity-60 mb-8">
            Ready to transform your digital presence or build your dream team?
          </p>
          
          <motion.div
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl ${
              isDark 
                ? 'bg-gradient-to-r from-sky-400/20 to-orange-400/20 border border-sky-400/30' 
                : 'bg-gradient-to-r from-sky-600/10 to-orange-500/10 border border-sky-600/20'
            } backdrop-blur-sm`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <span className="font-semibold">📧 Get in touch</span>
            <span className="opacity-70">→ hello@collabrix.zone</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}