import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, PartyPopper, Rocket, ArrowRight } from 'lucide-react';

interface LaunchCelebrationProps {
  isDark: boolean;
  onEnterSite: () => void;
}

// Confetti particle config — deterministic positions for SSR-safety
const CONFETTI = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: (i * 17 + 5) % 100,
  delay: (i * 0.08) % 3,
  duration: 2.5 + (i % 8) * 0.3,
  size: 4 + (i % 4) * 2,
  color: [
    '#0ea5e9', // sky-500
    '#f97316', // orange-500
    '#38bdf8', // sky-400
    '#fb923c', // orange-400
    '#0284c7', // sky-600
    '#ea580c', // orange-600
    '#fbbf24', // amber-400
    '#a78bfa', // violet-400
  ][i % 8],
  rotation: (i * 47) % 360,
  shape: i % 3, // 0 = circle, 1 = square, 2 = rectangle
}));

export function LaunchCelebration({ isDark, onEnterSite }: LaunchCelebrationProps) {
  const [phase, setPhase] = useState<'burst' | 'message' | 'ready'>('burst');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('message'), 800);
    const t2 = setTimeout(() => setPhase('ready'), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-br from-gray-950 via-sky-950/40 to-gray-950'
            : 'bg-gradient-to-br from-white via-sky-50 to-white'
        }`}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl ${
            isDark ? 'bg-sky-500/10' : 'bg-sky-400/15'
          }`}
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut', delay: 0.2 }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl ${
            isDark ? 'bg-orange-500/8' : 'bg-orange-400/10'
          }`}
        />
      </div>

      {/* Confetti */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {CONFETTI.map((c) => (
          <motion.div
            key={c.id}
            initial={{
              x: `${c.x}vw`,
              y: '-5vh',
              rotate: c.rotation,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              y: '110vh',
              rotate: c.rotation + 720,
              opacity: [1, 1, 0.8, 0],
              scale: [1, 1.1, 0.9, 0.6],
            }}
            transition={{
              duration: c.duration,
              delay: c.delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="absolute"
            style={{
              width: c.shape === 2 ? c.size * 2 : c.size,
              height: c.size,
              backgroundColor: c.color,
              borderRadius: c.shape === 0 ? '50%' : c.shape === 1 ? '2px' : '1px',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Rocket / Party icon burst */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.3 }}
          className="mb-8 inline-flex"
        >
          <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-3xl flex items-center justify-center ${
            isDark
              ? 'bg-gradient-to-br from-sky-500/20 to-orange-500/15 border border-sky-400/20'
              : 'bg-gradient-to-br from-sky-100 to-orange-50 border border-sky-200'
          }`}>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Rocket size={48} className="text-sky-500 dark:text-sky-400" strokeWidth={1.5} />
            </motion.div>
          </div>
        </motion.div>

        {/* Headline */}
        <AnimatePresence>
          {(phase === 'message' || phase === 'ready') && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                style={{
                  borderColor: isDark ? 'rgba(56,189,248,0.3)' : 'rgba(14,165,233,0.2)',
                  background: isDark ? 'rgba(56,189,248,0.08)' : 'rgba(14,165,233,0.05)',
                }}
              >
                <PartyPopper size={14} className="text-orange-500" />
                <span className="text-xs font-semibold tracking-widest uppercase text-sky-700 dark:text-sky-300">
                  We're Live
                </span>
                <PartyPopper size={14} className="text-sky-500 -scale-x-100" />
              </motion.div>

              <h1
                className="font-bold tracking-tight leading-tight mb-4"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-orange-500 dark:from-sky-400 dark:via-sky-300 dark:to-orange-400 bg-clip-text text-transparent">
                  The Collabrix
                </span>
                <br />
                <span className={isDark ? 'text-white' : 'text-gray-900'}>
                  Has Launched
                </span>
              </h1>

              <p className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-lg mx-auto ${
                isDark ? 'text-white/55' : 'text-gray-500'
              }`}>
                Our premium design & talent studio is now open for business. Let's build something extraordinary together.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Button */}
        <AnimatePresence>
          {phase === 'ready' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                onClick={onEnterSite}
                className={`group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 min-h-[56px] ${
                  isDark
                    ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white hover:from-sky-400 hover:to-sky-500 shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 focus:ring-sky-400/30'
                    : 'bg-gradient-to-r from-sky-600 to-sky-700 text-white hover:from-sky-500 hover:to-sky-600 shadow-xl shadow-sky-600/25 hover:shadow-sky-600/40 focus:ring-sky-500/25'
                }`}
              >
                <Sparkles size={20} className="group-hover:scale-110 transition-transform" />
                <span>Enter The Collabrix</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
