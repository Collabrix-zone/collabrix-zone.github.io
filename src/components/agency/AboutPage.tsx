import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Zap, Heart, TrendingUp } from 'lucide-react';

interface AboutPageProps {
  isDark: boolean;
}

export function AboutPage({ isDark }: AboutPageProps) {
  const features = [
    {
      icon: <Award size={24} />,
      title: 'Premium Design Quality',
      description: 'Every pixel matters. We deliver exceptional quality that exceeds expectations.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Fast Turnaround Time',
      description: 'We value your time and deliver projects on schedule without compromising quality.'
    },
    {
      icon: <Users size={24} />,
      title: 'Dedicated Support',
      description: 'Our team is always available to assist you throughout the entire project lifecycle.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Scalable Solutions',
      description: 'We build systems that grow with your business and adapt to changing needs.'
    },
    {
      icon: <Heart size={24} />,
      title: 'Client-Focused Approach',
      description: 'Your success is our success. We prioritize your goals and vision in everything we do.'
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: 'Unlimited Revisions',
      description: 'We iterate until you\'re completely satisfied with the final product.'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of design trends and embrace cutting-edge technologies to deliver modern solutions.'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients, treating every project as a true partnership.'
    },
    {
      title: 'Excellence',
      description: 'We set high standards and consistently deliver work that exceeds expectations.'
    },
    {
      title: 'Integrity',
      description: 'We believe in transparency, honesty, and building long-term relationships based on trust.'
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
            About Collabrix
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl opacity-70 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're a premium UI/UX design agency passionate about creating exceptional digital experiences
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-4 sm:px-6 md:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className={`p-8 sm:p-12 rounded-3xl border-2 backdrop-blur-sm ${
              isDark 
                ? 'border-white/10 bg-white/5' 
                : 'border-gray-200/50 bg-white/30'
            }`}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl sm:text-4xl mb-6">Our Story</h2>
            <div className="space-y-4 opacity-80 text-lg leading-relaxed">
              <p>
                Founded with a vision to transform how businesses connect with their users, Collabrix has grown into a trusted partner for companies seeking exceptional design solutions.
              </p>
              <p>
                Our team of talented designers and developers brings together years of experience and a passion for innovation. We believe that great design is more than just aesthetics—it's about solving problems, creating delightful experiences, and driving real business results.
              </p>
              <p>
                From startups to established enterprises, we've helped our clients achieve their goals through strategic design thinking and meticulous execution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 sm:px-6 md:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">Why Choose Collabrix</h2>
            <p className="text-xl opacity-70">Premium quality, every time</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`p-6 rounded-2xl border-2 backdrop-blur-sm ${
                  isDark 
                    ? 'border-white/10 hover:border-sky-400/30 hover:bg-white/5' 
                    : 'border-gray-200/50 hover:border-sky-600/30 hover:bg-white/30'
                } transition-all duration-300`}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className={`mb-4 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="opacity-70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="px-4 sm:px-6 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">Our Values</h2>
            <p className="text-xl opacity-70">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className={`p-8 rounded-2xl border-2 backdrop-blur-sm ${
                  isDark 
                    ? 'border-white/10 bg-white/5' 
                    : 'border-gray-200/50 bg-white/30'
                }`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <h3 className="text-2xl mb-3">{value.title}</h3>
                <p className="opacity-70 text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
