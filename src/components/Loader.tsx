import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Loader() {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1);
  const [showTagline, setShowTagline] = useState(false);
  
  const brandName = "COLLABRIX";
  const letters = brandName.split('');

  useEffect(() => {
    const letterInterval = setInterval(() => {
      setCurrentLetterIndex(prev => {
        if (prev >= letters.length - 1) {
          clearInterval(letterInterval);
          setTimeout(() => setShowTagline(true), 500);
          return letters.length - 1;
        }
        return prev + 1;
      });
    }, 150);

    return () => clearInterval(letterInterval);
  }, [letters.length]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Sophisticated background pattern */}
      <div 
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, var(--border) 1px, transparent 1px),
            linear-gradient(180deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Geometric background elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Morphing geometric shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + i * 15}%`,
              left: `${15 + i * 20}%`,
              width: `${40 + i * 20}px`,
              height: `${40 + i * 20}px`,
            }}
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.2, 0.8, 1.1, 1],
              borderRadius: ["0%", "25%", "50%", "25%", "0%"],
              opacity: [0.1, 0.3, 0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{
              background: `linear-gradient(${45 + i * 30}deg, var(--brand-primary)${Math.floor(10 + i * 5).toString(16)}, var(--brand-secondary)${Math.floor(8 + i * 3).toString(16)})`,
              border: `1px solid var(--brand-accent)${Math.floor(20 + i * 10).toString(16)}`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* Main brand animation */}
        <div className="mb-16">
          {/* Letter-by-letter reveal */}
          <div className="flex items-center justify-center gap-1 sm:gap-2 mb-8">
            {letters.map((letter, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  y: 50, 
                  rotateX: 90,
                  scale: 0.5
                }}
                animate={
                  index <= currentLetterIndex
                    ? { 
                        opacity: 1, 
                        y: 0, 
                        rotateX: 0,
                        scale: 1
                      }
                    : { 
                        opacity: 0, 
                        y: 50, 
                        rotateX: 90,
                        scale: 0.5
                      }
                }
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="relative"
              >
                <span 
                  className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider select-none"
                  style={{
                    background: `linear-gradient(135deg, var(--brand-primary), var(--brand-accent))`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))',
                    textShadow: 'none'
                  }}
                >
                  {letter}
                </span>
                
                {/* Letter reveal effect */}
                {index <= currentLetterIndex && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      ease: "easeOut",
                      delay: 0.2 
                    }}
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: `linear-gradient(90deg, transparent, var(--brand-primary)30, transparent)`,
                      transformOrigin: 'left center'
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Geometric accent under brand name */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: currentLetterIndex >= letters.length - 1 ? "100%" : "0%",
              opacity: currentLetterIndex >= letters.length - 1 ? 1 : 0
            }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="h-1 mx-auto rounded-full relative overflow-hidden"
            style={{ maxWidth: '200px' }}
          >
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: `linear-gradient(90deg, var(--brand-primary), var(--brand-accent), var(--brand-secondary))`
              }}
            />
            <motion.div
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 w-1/3 rounded-full"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)`
              }}
            />
          </motion.div>
        </div>

        {/* Tagline and description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: showTagline ? 1 : 0,
            y: showTagline ? 0 : 30
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Animated tagline */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {['Design', 'Develop', 'Deliver'].map((word, index) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: showTagline ? 1 : 0,
                  scale: showTagline ? 1 : 0.8
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 + 0.5,
                  ease: "easeOut"
                }}
                className="relative group"
              >
                <span 
                  className="text-lg sm:text-xl font-medium tracking-wide px-4 py-2 rounded-full transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, var(--brand-primary)10, var(--brand-accent)05)`,
                    border: `1px solid var(--brand-primary)20`,
                    color: 'var(--foreground)'
                  }}
                >
                  {word}
                </span>
                
                {/* Subtle glow effect */}
                <motion.div
                  animate={{
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.8,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-full blur-md -z-10"
                  style={{
                    background: `var(--brand-primary)30`
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Loading indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showTagline ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="space-y-4"
          >
            {/* Elegant loading dots */}
            <div className="flex items-center justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: `var(--brand-primary)`
                  }}
                />
              ))}
            </div>

            <motion.p 
              className="text-sm opacity-60 tracking-wide"
              animate={{ opacity: [0.6, 0.9, 0.6] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              Crafting Premium Digital Experiences
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Floating geometric accents */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `var(--brand-${i % 2 === 0 ? 'primary' : 'accent'})`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Accessibility announcements */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {currentLetterIndex < letters.length - 1 
            ? `Loading ${brandName}, letter ${currentLetterIndex + 2} of ${letters.length}`
            : showTagline 
              ? "Collabrix loaded. Crafting premium digital experiences."
              : "Collabrix brand name loaded."
          }
        </div>
      </div>
    </div>
  );
}