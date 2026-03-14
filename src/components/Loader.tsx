import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'exit'>('loading');

  useEffect(() => {
    // Tick progress from 0 → 100 over ~1.7s
    const start = performance.now();
    const duration = 1700;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setPhase('exit'), 300);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  return (
    <AnimatePresence>
      {phase === 'loading' && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f0f0f] overflow-hidden"
          role="status"
          aria-label="Loading Collabrix"
          aria-live="polite"
        >
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
            aria-hidden="true"
          />

          {/* Corner marks */}
          {[
            'top-8 left-8 border-t border-l',
            'top-8 right-8 border-t border-r',
            'bottom-8 left-8 border-b border-l',
            'bottom-8 right-8 border-b border-r',
          ].map((cls, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`absolute w-6 h-6 border-white/20 ${cls}`}
              aria-hidden="true"
            />
          ))}

          {/* Centre content */}
          <div className="relative flex flex-col items-center gap-10">
            {/* Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-3"
            >
              <span
                className="text-white tracking-[0.25em] uppercase select-none"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                  fontWeight: 700,
                  letterSpacing: '0.3em',
                }}
              >
                COLLABRIX
              </span>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-white/30 tracking-[0.4em] uppercase text-xs select-none"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Design &amp; Talent Studio
              </motion.span>
            </motion.div>

            {/* Progress track */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col items-center gap-4 w-[260px] sm:w-[320px]"
            >
              {/* Track */}
              <div className="relative w-full h-px bg-white/10 overflow-hidden rounded-full">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-sky-400 to-[#ff7f2e]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>

              {/* Counter */}
              <span
                className="text-white/25 tabular-nums select-none"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                }}
              >
                {String(progress).padStart(3, '0')}
              </span>
            </motion.div>
          </div>

          {/* Bottom label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-10 left-0 right-0 flex justify-center"
            aria-hidden="true"
          >
            <span
              className="text-white/15 tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem' }}
            >
              Premium Studio
            </span>
          </motion.div>

          {/* Accent dot — top centre */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-sky-500/60 to-transparent origin-center"
            aria-hidden="true"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
