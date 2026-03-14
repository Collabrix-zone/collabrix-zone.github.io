import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ArrowRight, Sparkles, Calendar, Users, Zap } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-05-01T00:00:00Z').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email && email.includes('@')) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 4000);
      setName('');
      setEmail('');
    }
  };

  return (
    <main 
      id="main-content" 
      className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16" 
      role="main"
    >
      <div className="w-full max-w-6xl mx-auto text-center">
        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className={`flex flex-col sm:inline-flex sm:flex-row items-center gap-2 sm:gap-3 lg:gap-4 px-2 sm:px-4 lg:px-6 py-3 sm:py-4 rounded-2xl backdrop-blur-sm border-2 w-full max-w-[calc(100vw-2rem)] sm:max-w-fit overflow-hidden ${
            isDark 
              ? 'bg-gradient-to-r from-sky-400/20 via-sky-300/15 to-orange-400/20 border-sky-400/30 shadow-2xl shadow-sky-400/10' 
              : 'bg-gradient-to-r from-sky-600/10 via-sky-500/8 to-orange-500/10 border-sky-600/20 shadow-2xl shadow-sky-600/8'
          }`}>
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block"
              >
                <Calendar size={18} className="text-sky-600 dark:text-sky-400" />
              </motion.div>
              <span className="font-semibold tracking-wide text-sm sm:text-base">Launch in:</span>
            </div>
            <div className="flex items-center justify-center gap-1 sm:gap-2 lg:gap-3 flex-nowrap min-w-0">
              <motion.div 
                className={`text-center w-12 sm:w-14 lg:w-16 py-1 sm:py-2 rounded-lg sm:rounded-xl ${
                  isDark 
                    ? 'bg-white/5 border border-white/10' 
                    : 'bg-white/30 border border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <motion.div 
                  className="font-bold text-sm sm:text-lg lg:text-xl tracking-wider"
                  key={timeLeft.days}
                  initial={{ scale: 1.2, color: isDark ? '#38bdf8' : '#0369a1' }}
                  animate={{ scale: 1, color: 'inherit' }}
                  transition={{ duration: 0.3 }}
                >
                  {timeLeft.days}
                </motion.div>
                <div className="text-xs font-medium opacity-70 uppercase tracking-wider">days</div>
              </motion.div>
              <div className="text-sky-600 dark:text-sky-400 font-bold text-sm sm:text-lg lg:text-xl animate-pulse px-0.5">:</div>
              <motion.div 
                className={`text-center w-12 sm:w-14 lg:w-16 py-1 sm:py-2 rounded-lg sm:rounded-xl ${
                  isDark 
                    ? 'bg-white/5 border border-white/10' 
                    : 'bg-white/30 border border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <motion.div 
                  className="font-bold text-sm sm:text-lg lg:text-xl tracking-wider"
                  key={timeLeft.hours}
                  initial={{ scale: 1.2, color: isDark ? '#38bdf8' : '#0369a1' }}
                  animate={{ scale: 1, color: 'inherit' }}
                  transition={{ duration: 0.3 }}
                >
                  {timeLeft.hours.toString().padStart(2, '0')}
                </motion.div>
                <div className="text-xs font-medium opacity-70 uppercase tracking-wider">hrs</div>
              </motion.div>
              <div className="text-sky-600 dark:text-sky-400 font-bold text-sm sm:text-lg lg:text-xl animate-pulse px-0.5">:</div>
              <motion.div 
                className={`text-center w-12 sm:w-14 lg:w-16 py-1 sm:py-2 rounded-lg sm:rounded-xl ${
                  isDark 
                    ? 'bg-white/5 border border-white/10' 
                    : 'bg-white/30 border border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <motion.div 
                  className="font-bold text-sm sm:text-lg lg:text-xl tracking-wider"
                  key={timeLeft.minutes}
                  initial={{ scale: 1.2, color: isDark ? '#38bdf8' : '#0369a1' }}
                  animate={{ scale: 1, color: 'inherit' }}
                  transition={{ duration: 0.3 }}
                >
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </motion.div>
                <div className="text-xs font-medium opacity-70 uppercase tracking-wider">min</div>
              </motion.div>
              <div className="text-sky-600 dark:text-sky-400 font-bold text-sm sm:text-lg lg:text-xl animate-pulse px-0.5">:</div>
              <motion.div 
                className={`text-center w-12 sm:w-14 lg:w-16 py-1 sm:py-2 rounded-lg sm:rounded-xl ${
                  isDark 
                    ? 'bg-white/5 border border-white/10' 
                    : 'bg-white/30 border border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <motion.div 
                  className="font-bold text-sm sm:text-lg lg:text-xl tracking-wider"
                  key={timeLeft.seconds}
                  initial={{ scale: 1.2, color: isDark ? '#38bdf8' : '#0369a1' }}
                  animate={{ scale: 1, color: 'inherit' }}
                  transition={{ duration: 0.3 }}
                >
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </motion.div>
                <div className="text-xs font-medium opacity-70 uppercase tracking-wider">sec</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.9] mb-4">
            <span>Premium </span>
            <motion.span
              className="bg-gradient-to-r from-sky-600 via-sky-500 to-orange-500 bg-clip-text text-transparent dark:from-sky-400 dark:via-sky-300 dark:to-orange-400"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Design & Talent
            </motion.span>
            <span> Studio</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-lg sm:text-xl md:text-2xl opacity-70 max-w-2xl mx-auto leading-relaxed px-4">
            Crafting exceptional digital experiences and connecting businesses with world-class talent.
          </p>
        </motion.div>

        {/* Email Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-20"
        >
          <form 
            onSubmit={async (e) => {
              e.preventDefault();
              
              if (!name.trim() || !email.trim()) return;
              
              try {
                // HubSpot Forms API integration
                const hubspotResponse = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/244015961/b37c956f-3eee-4aa0-a334-8e9616e6c8f0', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    fields: [
                      {
                        name: 'firstname',
                        value: name
                      },
                      {
                        name: 'email',
                        value: email
                      },
                      {
                        name: 'lead_source',
                        value: 'Website - Coming Soon Page'
                      },
                      {
                        name: 'company',
                        value: 'Collabrix Zone'
                      }
                    ],
                    context: {
                      pageUri: window.location.href,
                      pageName: 'Collabrix Coming Soon'
                    }
                  })
                });

                if (hubspotResponse.ok) {
                  console.log('Successfully submitted to HubSpot CRM');
                } else {
                  console.error('HubSpot submission failed:', await hubspotResponse.text());
                }
              } catch (error) {
                console.error('Error submitting to HubSpot:', error);
              }
              
              // Call original handler if it exists
              if (handleSubmit) {
                handleSubmit(e);
              }
            }} 
            className="flex flex-col gap-4 max-w-2xl mx-auto px-4" 
            role="form" 
            aria-label="Project consultation signup"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <label htmlFor="name-input" className="sr-only">
                  Full name for design consultation
                </label>
                
                <Input
                  id="name-input"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-6 py-4 text-lg rounded-2xl border-2 bg-transparent backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] ${
                    isDark 
                      ? 'border-white/20 focus:border-sky-400 text-white placeholder:text-gray-400' 
                      : 'border-gray-200/50 focus:border-sky-500 text-gray-900 placeholder:text-gray-500'
                  } min-h-[64px]`}
                  required
                  aria-required="true"
                  aria-describedby="name-description"
                />
                
                <div id="name-description" className="sr-only">
                  Your name for personalized consultation and updates
                </div>
              </div>
              
              <div className="flex-1 relative">
                <label htmlFor="email-input" className="sr-only">
                  Email address for design consultation
                </label>
                
                <Input
                  id="email-input"
                  type="email"
                  placeholder="Enter your email for updates"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-6 py-4 text-lg rounded-2xl border-2 bg-transparent backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] ${
                    isDark 
                      ? 'border-white/20 focus:border-sky-400 text-white placeholder:text-gray-400' 
                      : 'border-gray-200/50 focus:border-sky-500 text-gray-900 placeholder:text-gray-500'
                  } min-h-[64px]`}
                  required
                  aria-required="true"
                  aria-describedby="email-description"
                />
                
                <div id="email-description" className="sr-only">
                  Get notified about Collabrix design services and launch updates
                </div>
              </div>
            </div>
            
            <Button
              type="submit"
              className={`px-8 py-4 rounded-2xl text-lg font-semibold min-h-[64px] min-w-[180px] transition-all duration-500 focus:ring-2 focus:ring-sky-600 focus:ring-opacity-50 focus:outline-none flex items-center gap-3 ${
                isSubmitted 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-gradient-to-r from-sky-600 to-sky-700 hover:from-orange-500 hover:to-orange-600 hover:scale-105 text-white'
              }`}
              disabled={isSubmitted}
              aria-live="polite"
            >
              <span>
                {isSubmitted ? 'Thank you!' : 'Stay Updated'}
              </span>
              
              <motion.div
                animate={{ x: isSubmitted ? 0 : 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                {isSubmitted ? (
                  <Sparkles size={20} />
                ) : (
                  <ArrowRight size={20} />
                )}
              </motion.div>
            </Button>
            
            {isSubmitted && (
              <div className="sr-only" aria-live="polite">
                Thank you! You'll receive updates about Collabrix design services.
              </div>
            )}
          </form>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 opacity-60"
        >
          <div className="flex items-center gap-3">
            <Sparkles size={20} className="text-sky-600 dark:text-sky-400" />
            <span className="text-lg">Premium Design</span>
          </div>
          
          <div className={`hidden sm:block w-2 h-2 rounded-full ${
            isDark ? 'bg-white/30' : 'bg-gray-400/50'
          }`} />
          
          <div className="flex items-center gap-3">
            <Users size={20} className="text-purple-500" />
            <span className="text-lg">Elite Talent</span>
          </div>
          
          <div className={`hidden sm:block w-2 h-2 rounded-full ${
            isDark ? 'bg-white/30' : 'bg-gray-400/50'
          }`} />
          
          <div className="flex items-center gap-3">
            <Zap size={20} className="text-orange-500" />
            <span className="text-lg">Client-Focused</span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}