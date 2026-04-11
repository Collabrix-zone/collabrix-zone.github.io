import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Sparkles, Palette, Users, Award, TrendingUp, Zap, Globe, FileText, Check, Upload } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { Typewriter } from './Typewriter';
import { MagneticWrapper } from './MagneticWrapper';
import { InfiniteMarquee } from './InfiniteMarquee';
import { TiltCard } from './TiltCard';
import { WordReveal } from './WordReveal';
import { AIAssistant } from './AIAssistant';
import { useState } from 'react';

interface HomePageProps {
  isDark: boolean;
  onNavigate: (page: string) => void;
}

const MARQUEE_ITEMS = [
  'UX/UI Design', 'Talent Acquisition', 'Brand Identity', 'Executive Search',
  'Product Design', 'HR Consulting', 'Design Systems', 'Team Building',
  'Mobile Apps', 'Leadership Hiring', 'Web Design', 'Talent Strategy',
];

const stats = [
  { number: '150+', label: 'Projects Delivered', color: 'text-sky-600 dark:text-sky-400' },
  { number: '500+', label: 'Successful Placements', color: 'text-orange-600 dark:text-orange-400' },
  { number: '98%', label: 'Client Satisfaction', color: 'text-sky-600 dark:text-sky-400' },
  { number: '50+', label: 'Happy Clients', color: 'text-orange-600 dark:text-orange-400' },
];

// Deterministic floating particles (avoids re-randomization on render)
const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: (i * 37 + 13) % 100,
  y: (i * 47 + 7) % 100,
  size: (i % 3) + 1.5,
  duration: 4 + (i % 6),
  delay: (i * 0.35) % 4,
}));

function OrderForm({ isDark }: { isDark: boolean }) {
  const [form, setForm] = useState({ name: '', email: '', service: 'resume', message: '' });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitting(true);
    try {
      await fetch('https://script.google.com/a/macros/thecollabrix.com/s/AKfycbxYu4qhmXR-fUBPGwUDEw0ayHxMEVfdyN3sZJYsVg2hQ0BUmKkJYTa8XmV2lgA2ndAuBQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'order', ...form }),
      });
    } catch {
      // Submission still goes through with no-cors
    }
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', service: 'resume', message: '' });
      setFile(null);
    }, 5000);
  };

  const inputClass = `w-full px-5 py-4 rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-4 text-base ${
    isDark
      ? 'bg-white/5 border-white/10 focus:border-sky-400/50 focus:ring-sky-400/20 text-white placeholder:text-white/30'
      : 'bg-white border-gray-200 focus:border-sky-600/50 focus:ring-sky-600/20 text-gray-900 placeholder:text-gray-400'
  }`;

  if (submitted) {
    return (
      <section id="order-form" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36" aria-label="Order submitted">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center ${isDark ? 'bg-sky-400/10' : 'bg-sky-600/10'}`}>
              <Check size={32} className="text-sky-600 dark:text-sky-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Order Received!</h3>
            <p className="text-base opacity-65">We'll get back to you within 24 hours with next steps.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="order-form" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36" aria-labelledby="order-heading">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-3">Order</p>
          <h2 id="order-heading" className="tracking-tight leading-tight" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}>
            Place Your Order
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className={`p-8 sm:p-10 rounded-3xl border ${isDark ? 'bg-white/4 border-white/10' : 'bg-white/70 border-gray-200/50'}`}
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="order-name" className="block text-sm font-semibold mb-2 opacity-70">Name *</label>
              <input
                id="order-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="order-email" className="block text-sm font-semibold mb-2 opacity-70">Email *</label>
              <input
                id="order-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="order-service" className="block text-sm font-semibold mb-2 opacity-70">Service *</label>
              <select
                id="order-service"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={inputClass}
              >
                <option value="resume">Resume Design — ₹1,500 / $18</option>
                <option value="portfolio">Portfolio Deck — ₹3,000 / $36</option>
                <option value="bundle">Resume + Portfolio Bundle — ₹4,000 / $48</option>
              </select>
            </div>
            <div>
              <label htmlFor="order-message" className="block text-sm font-semibold mb-2 opacity-70">Message</label>
              <textarea
                id="order-message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your experience, target roles, or any preferences..."
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="order-file" className="block text-sm font-semibold mb-2 opacity-70">
                Attach File <span className="opacity-50 font-normal">(optional — existing resume, portfolio, etc.)</span>
              </label>
              <label
                htmlFor="order-file"
                className={`flex items-center gap-3 px-5 py-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-white/20 text-white/50'
                    : 'bg-white border-gray-200 hover:border-gray-300 text-gray-400'
                }`}
              >
                <Upload size={18} aria-hidden="true" />
                <span className="text-sm">{file ? file.name : 'Choose a file...'}</span>
                <input
                  id="order-file"
                  type="file"
                  className="sr-only"
                  accept=".pdf,.doc,.docx,.fig,.zip,.png,.jpg"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
              </label>
            </div>
          </div>

          <MagneticWrapper>
            <button
              type="submit"
              disabled={submitting}
              className="mt-8 w-full inline-flex items-center justify-center gap-3 px-7 py-4 bg-sky-800 dark:bg-sky-600 text-white rounded-2xl hover:bg-orange-600 dark:hover:bg-orange-600 transition-all duration-300 font-semibold focus:outline-none focus:ring-4 focus:ring-sky-600 dark:focus:ring-sky-400 min-h-[52px] disabled:opacity-50"
            >
              {submitting ? 'Submitting...' : 'Submit Order'}
              {!submitting && <ArrowRight size={18} aria-hidden="true" />}
            </button>
          </MagneticWrapper>
        </motion.form>
      </div>
    </section>
  );
}

export function HomePage({ isDark, onNavigate }: HomePageProps) {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-0"
        aria-labelledby="hero-heading"
      >
        {/* Decorative accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-600/50 to-transparent origin-left"
        />

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-sky-600/20 dark:bg-sky-400/15"
              style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
              animate={{ y: [0, -14, 0], opacity: [0.25, 0.65, 0.25] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-16 sm:pb-20 lg:pb-28">
            <div className="lg:col-span-7" style={{ minWidth: 0 }}>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-4"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-600/30 dark:border-sky-400/30 bg-sky-600/5 dark:bg-sky-400/5 text-sky-800 dark:text-sky-300">
                  <Sparkles size={14} aria-hidden="true" />
                  <span className="text-sm font-semibold tracking-wide uppercase">Premium Design & Talent Studio</span>
                </span>
              </motion.div>

              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="tracking-tight leading-[0.92] mb-4"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}
              >
                Premium{' '}
                <span className="bg-gradient-to-br from-sky-600 to-sky-800 dark:from-sky-300 dark:to-sky-500 bg-clip-text text-transparent">
                  UX/UI Design Studio
                </span>
                <br />
                &{' '}
                <span className="bg-gradient-to-br from-orange-500 to-orange-700 dark:from-orange-300 dark:to-orange-500 bg-clip-text text-transparent">
                  Talent Acquisition Firm
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl opacity-50 mb-8 italic"
                style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
              >
                Where Great Design Meets Great Talent
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-base sm:text-lg opacity-60 mb-8"
                style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.125rem)' }}
              >
                We help UX/UI designers land jobs with resumes and portfolios that get noticed.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28 }}
                className="flex items-center gap-2 mb-5"
              >
                <span className="text-sm font-semibold uppercase tracking-widest opacity-45">We specialize in</span>
                <Typewriter
                  words={['UX/UI Excellence', 'Talent Acquisition', 'Brand Strategy', 'Product Design']}
                  className="text-sm font-bold text-sky-600 dark:text-sky-400"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.32 }}
                className="text-lg sm:text-xl opacity-65 max-w-xl leading-relaxed mb-10"
              >
                <WordReveal
                  text="Collabrix is a premium studio delivering world-class UX/UI design and strategic talent acquisition—two superpowers, one seamless partner."
                  delay={0.35}
                  stagger={0.04}
                />
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <MagneticWrapper>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="group inline-flex items-center gap-3 px-7 py-4 bg-sky-800 dark:bg-sky-600 text-white rounded-2xl hover:bg-orange-600 dark:hover:bg-orange-600 transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-sky-600 dark:focus:ring-sky-400 min-h-[52px]"
                    aria-label="Get started with Collabrix"
                  >
                    <span className="font-semibold">Get Started</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </button>
                </MagneticWrapper>
                {/* <MagneticWrapper>
                  <button
                    onClick={() => onNavigate('work')}
                    className="group inline-flex items-center gap-3 px-7 py-4 border-2 border-current/20 rounded-2xl hover:border-sky-600 dark:hover:border-sky-400 hover:text-sky-700 dark:hover:text-sky-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-600 dark:focus:ring-sky-400 min-h-[52px]"
                  >
                    <span className="font-semibold opacity-70 group-hover:opacity-100">View Our Work</span>
                    <ArrowUpRight size={18} className="opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  </button>
                </MagneticWrapper> */}
              </motion.div>
            </div>

            {/* Right: Abstract visual composition */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:col-span-5 relative hidden lg:block"
              aria-hidden="true"
            >
              <div className="relative w-full aspect-square max-w-sm ml-auto">
                {/* Rings */}
                <div className="absolute inset-0 rounded-full border border-sky-600/10 dark:border-sky-400/10" />
                <div className="absolute inset-8 rounded-full border border-orange-600/10 dark:border-orange-400/10" />
                <div className="absolute inset-16 rounded-full border border-sky-600/15 dark:border-sky-400/15" />
                {/* Center orb */}
                <div className="absolute inset-20 rounded-full bg-gradient-to-br from-sky-600/20 via-sky-500/10 to-orange-500/15 dark:from-sky-400/20 dark:to-orange-400/15 blur-sm" />
                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className={`absolute top-4 right-8 px-4 py-3 rounded-2xl shadow-xl text-sm font-semibold ${isDark ? 'bg-white/10 backdrop-blur-xl border border-white/15 text-white' : 'bg-white/80 backdrop-blur-xl border border-sky-100 text-sky-900'}`}
                >
                  <div className="flex items-center gap-2">
                    <Palette size={16} className="text-sky-600 dark:text-sky-400" />
                    <span>Design</span>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className={`absolute bottom-10 left-4 px-4 py-3 rounded-2xl shadow-xl text-sm font-semibold ${isDark ? 'bg-white/10 backdrop-blur-xl border border-white/15 text-white' : 'bg-white/80 backdrop-blur-xl border border-orange-100 text-orange-900'}`}
                >
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-orange-600 dark:text-orange-400" />
                    <span>Talent</span>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className={`absolute top-1/3 -left-2 px-3 py-2 rounded-xl shadow-lg text-xs font-semibold ${isDark ? 'bg-sky-900/60 backdrop-blur-xl border border-sky-400/20 text-sky-300' : 'bg-sky-50 border border-sky-200 text-sky-700'}`}
                >
                  98% Satisfied
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  className={`absolute bottom-1/4 right-0 px-3 py-2 rounded-xl shadow-lg text-xs font-semibold ${isDark ? 'bg-orange-900/60 backdrop-blur-xl border border-orange-400/20 text-orange-300' : 'bg-orange-50 border border-orange-200 text-orange-700'}`}
                >
                  500+ Placed
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Marquee strip — animated, non-overlapping */}
        <div
          className={`py-5 border-y border-current/8 ${isDark ? 'bg-white/3' : 'bg-black/2'}`}
          aria-hidden="true"
        >
          <InfiniteMarquee speed={32}>
            {MARQUEE_ITEMS.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase opacity-40 mr-14 whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block flex-shrink-0" />
                {item}
              </span>
            ))}
          </InfiniteMarquee>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 sm:mb-20"
          >
            <p className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-3">What we do</p>
            <h2 id="services-heading" className="tracking-tight leading-tight max-w-2xl" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}>
              UX/UI Design & Talent Acquisition Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Resume & Portfolio Design card */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="lg:col-span-2"
            >
              <TiltCard className={`group relative overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12 border transition-all duration-500 ${
                isDark
                  ? 'bg-gradient-to-br from-sky-950/40 via-orange-950/20 to-sky-950/40 border-sky-800/20 hover:border-sky-600/40 hover:shadow-[0_8px_40px_-8px_rgba(14,165,233,0.15)]'
                  : 'bg-gradient-to-br from-sky-50/80 via-orange-50/40 to-sky-50/80 border-sky-100/80 hover:border-sky-300 hover:shadow-[0_8px_40px_-8px_rgba(14,165,233,0.12)]'
              }`}>
                <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-orange-500/8 dark:bg-orange-400/8 blur-3xl group-hover:scale-150 transition-transform duration-700" aria-hidden="true" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/8 to-transparent pointer-events-none" aria-hidden="true" />

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-start justify-between mb-8">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isDark ? 'bg-sky-400/10 border border-sky-400/20' : 'bg-sky-600/10 border border-sky-600/15'}`}>
                        <FileText size={30} className="text-sky-600 dark:text-sky-400" aria-hidden="true" />
                      </div>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${isDark ? 'bg-orange-400/15 text-orange-400 border border-orange-400/20' : 'bg-orange-500/10 text-orange-700 border border-orange-500/15'}`}>
                        <Sparkles size={12} aria-hidden="true" />
                        New
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">Resume & Portfolio Design</h3>
                    <p className="text-base sm:text-lg opacity-65 leading-relaxed mb-6">
                      Figma-crafted resumes and portfolio decks designed specifically for UX/UI designers. ATS-friendly, visually compelling, delivered in 3–5 days.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {['ATS-Friendly', 'Figma Source File', 'Portfolio Decks', '3–5 Day Delivery'].map((tag) => (
                        <span key={tag} className={`px-3 py-1 rounded-lg text-xs font-semibold ${isDark ? 'bg-sky-400/10 text-sky-400 border border-sky-400/20' : 'bg-sky-600/8 text-sky-800 border border-sky-600/15'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    {[
                      { label: 'Resume Design', price: '\u20B91,500 / $18', days: '3 day turnaround' },
                      { label: 'Portfolio Deck', price: '\u20B93,000 / $36', days: '5 day turnaround' },
                      { label: 'Bundle (Both)', price: '\u20B94,000 / $48', days: '5 day turnaround' },
                    ].map((item) => (
                      <div key={item.label} className={`flex items-center justify-between p-4 rounded-2xl border ${isDark ? 'bg-white/4 border-white/8' : 'bg-white/70 border-gray-200/50'}`}>
                        <div>
                          <p className="font-semibold text-sm">{item.label}</p>
                          <p className="text-xs opacity-50">{item.days}</p>
                        </div>
                        <span className="font-bold text-sky-700 dark:text-sky-400 text-sm">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.article>

            {/* Design card */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onClick={() => onNavigate('design')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onNavigate('design')}
              aria-label="Explore Design Services"
            >
            <TiltCard className={`group relative overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12 border transition-all duration-500 cursor-pointer ${
                isDark
                  ? 'bg-gradient-to-br from-sky-950/60 to-sky-900/20 border-sky-800/30 hover:border-sky-600/50 hover:shadow-[0_8px_40px_-8px_rgba(14,165,233,0.25)]'
                  : 'bg-gradient-to-br from-sky-50 to-white border-sky-100 hover:border-sky-300 hover:shadow-[0_8px_40px_-8px_rgba(14,165,233,0.2)]'
              }`}>
              {/* Accent orb */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-sky-500/10 dark:bg-sky-400/10 blur-3xl group-hover:scale-150 transition-transform duration-700" aria-hidden="true" />
              {/* Shimmer sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/8 to-transparent pointer-events-none" aria-hidden="true" />

              <div className="relative">
                <div className="flex items-start justify-between mb-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isDark ? 'bg-sky-400/10 border border-sky-400/20' : 'bg-sky-600/10 border border-sky-600/15'}`}>
                    <Palette size={30} className="text-sky-600 dark:text-sky-400" aria-hidden="true" />
                  </div>
                  <span className="text-7xl font-bold opacity-5 select-none">01</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Design Excellence</h3>
                <p className="text-base sm:text-lg opacity-65 leading-relaxed mb-8">
                  From UX/UI to complete brand identities — we craft digital experiences
                  that captivate users and convert visitors into loyal customers.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['UX/UI Design', 'Product Design', 'Branding', 'Mobile Apps'].map((tag) => (
                    <span key={tag} className={`px-3 py-1 rounded-lg text-xs font-semibold ${isDark ? 'bg-sky-400/10 text-sky-400 border border-sky-400/20' : 'bg-sky-600/8 text-sky-800 border border-sky-600/15'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400 font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Explore Design Services</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </div>
              </div>
            </TiltCard>
            </motion.article>

            {/* Talent card */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              onClick={() => onNavigate('talent')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onNavigate('talent')}
              aria-label="Explore Talent Services"
            >
            <TiltCard className={`group relative overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12 border transition-all duration-500 cursor-pointer ${
                isDark
                  ? 'bg-gradient-to-br from-orange-950/60 to-orange-900/20 border-orange-800/30 hover:border-orange-600/50 hover:shadow-[0_8px_40px_-8px_rgba(234,88,12,0.25)]'
                  : 'bg-gradient-to-br from-orange-50 to-white border-orange-100 hover:border-orange-300 hover:shadow-[0_8px_40px_-8px_rgba(234,88,12,0.2)]'
              }`}>
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-orange-500/10 dark:bg-orange-400/10 blur-3xl group-hover:scale-150 transition-transform duration-700" aria-hidden="true" />
              {/* Shimmer sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/8 to-transparent pointer-events-none" aria-hidden="true" />

              <div className="relative">
                <div className="flex items-start justify-between mb-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isDark ? 'bg-orange-400/10 border border-orange-400/20' : 'bg-orange-600/10 border border-orange-600/15'}`}>
                    <Users size={30} className="text-orange-600 dark:text-orange-400" aria-hidden="true" />
                  </div>
                  <span className="text-7xl font-bold opacity-5 select-none">02</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Talent Acquisition</h3>
                <p className="text-base sm:text-lg opacity-65 leading-relaxed mb-8">
                  Strategic recruitment and HR consulting to build high-performing teams —
                  from individual contributors to C-suite executives.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Full-Cycle Recruiting', 'Executive Search', 'HR Consulting', 'Team Building'].map((tag) => (
                    <span key={tag} className={`px-3 py-1 rounded-lg text-xs font-semibold ${isDark ? 'bg-orange-400/10 text-orange-400 border border-orange-400/20' : 'bg-orange-600/8 text-orange-800 border border-orange-600/15'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-orange-700 dark:text-orange-400 font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Explore Talent Services</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </div>
              </div>
            </TiltCard>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36" aria-labelledby="pricing-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 sm:mb-20"
          >
            <p className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-3">Pricing</p>
            <h2 id="pricing-heading" className="tracking-tight leading-tight max-w-2xl" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}>
              Resume & Portfolio Packages
            </h2>
          </motion.div>

          {/* Offer banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-10 p-5 rounded-2xl border text-center ${
              isDark
                ? 'bg-orange-950/30 border-orange-800/30 text-orange-300'
                : 'bg-orange-50 border-orange-200 text-orange-800'
            }`}
          >
            <p className="font-bold text-lg">First 3 clients get 50% off</p>
            <p className="text-sm opacity-70 mt-1">Email <a href="mailto:divyansh.sharma@thecollabrix.com" className="underline font-semibold hover:opacity-100 transition-opacity">divyansh.sharma@thecollabrix.com</a></p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Resume Design',
                price: '\u20B91,500',
                usd: '$18',
                turnaround: '3 day turnaround',
                features: ['ATS-friendly layout', 'Figma source file', 'One revision round', 'Print-ready PDF'],
                accent: 'sky',
              },
              {
                title: 'Portfolio Deck',
                price: '\u20B93,000',
                usd: '$36',
                turnaround: '5 day turnaround',
                features: ['Up to 10 slides', 'Case study layout', 'Figma source file', 'Two revision rounds'],
                accent: 'orange',
                popular: true,
              },
              {
                title: 'Resume + Portfolio Bundle',
                price: '\u20B94,000',
                usd: '$48',
                turnaround: '5 day turnaround',
                features: ['Everything in both plans', 'Cohesive design system', 'Priority delivery', 'Three revision rounds'],
                accent: 'sky',
              },
            ].map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                  plan.popular
                    ? isDark
                      ? 'bg-orange-950/30 border-orange-600/40 shadow-[0_4px_30px_-4px_rgba(234,88,12,0.2)]'
                      : 'bg-orange-50/60 border-orange-300 shadow-[0_4px_30px_-4px_rgba(234,88,12,0.12)]'
                    : isDark
                      ? 'bg-white/4 border-white/10 hover:bg-white/8'
                      : 'bg-white/70 border-gray-200/50 hover:bg-white hover:shadow-lg'
                }`}
              >
                {plan.popular && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                    isDark ? 'bg-orange-600 text-white' : 'bg-orange-500 text-white'
                  }`}>
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                <div className="mb-1">
                  <span className={`text-4xl font-bold ${plan.accent === 'sky' ? 'text-sky-700 dark:text-sky-400' : 'text-orange-600 dark:text-orange-400'}`}>{plan.price}</span>
                  <span className="text-lg opacity-50 ml-2">/ {plan.usd}</span>
                </div>
                <p className="text-sm opacity-50 mb-6">{plan.turnaround}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <Check size={16} className={plan.accent === 'sky' ? 'text-sky-600 dark:text-sky-400' : 'text-orange-600 dark:text-orange-400'} aria-hidden="true" />
                      <span className="opacity-70">{f}</span>
                    </li>
                  ))}
                </ul>
                <MagneticWrapper>
                  <a
                    href="#order-form"
                    className={`block text-center w-full px-7 py-3 rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 min-h-[48px] ${
                      plan.popular
                        ? 'bg-orange-600 text-white hover:bg-orange-700 focus:ring-orange-600/50'
                        : isDark
                          ? 'bg-white/10 border border-white/20 text-white hover:bg-white/15 focus:ring-sky-400/50'
                          : 'bg-sky-800 text-white border border-sky-800 hover:bg-sky-900 focus:ring-sky-600/50'
                    }`}
                  >
                    Get Started
                  </a>
                </MagneticWrapper>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORDER FORM ────────────────────────────────────────────────── */}
      <OrderForm isDark={isDark} />

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      {/* <section
        className={`px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-y border-current/8 ${isDark ? 'bg-white/2' : 'bg-black/2'}`}
        aria-label="Key statistics"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <AnimatedCounter
                value={stat.number}
                label={stat.label}
                className="text-center"
                numberClassName={`text-4xl sm:text-5xl lg:text-6xl font-bold ${stat.color}`}
              />
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* ── WHY COLLABRIX ─────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-3">Why us</p>
                <h2 id="why-heading" className="tracking-tight leading-tight mb-6" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)' }}>
                  Why Choose The Collabrix
                </h2>
                <p className="text-base sm:text-lg opacity-65 leading-relaxed mb-8">
                  We don't just deliver work — we build long-term partnerships grounded
                  in transparency, craft, and a relentless drive for results.
                </p>
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sky-700 dark:text-sky-400 font-semibold hover:gap-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-sky-400 rounded"
                  aria-label="Learn more about Collabrix"
                >
                  <span>Our Story</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </motion.div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: <Award size={24} />, title: 'Premium Quality', description: 'Industry-leading standards on every engagement — no shortcuts, ever.', accent: 'sky' },
                { icon: <TrendingUp size={24} />, title: 'Proven Results', description: 'Consistent track record of outcomes that genuinely move the needle.', accent: 'orange' },
                { icon: <Zap size={24} />, title: 'Agile Delivery', description: 'Fast, iterative, and responsive — we move at the speed of your ambition.', accent: 'sky' },
                { icon: <Globe size={24} />, title: 'Global Network', description: 'Access to world-class design talent and candidates across every market.', accent: 'orange' },
              ].map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`relative p-6 rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isDark
                      ? 'bg-white/4 border-white/8 hover:bg-white/8 hover:border-white/15'
                      : 'bg-white/70 border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-lg'
                  }`}
                >
                  {/* Accent left border reveal */}
                  <div className={`absolute left-0 top-0 w-[3px] h-0 group-hover:h-full rounded-l-2xl transition-all duration-500 ${
                    item.accent === 'sky' ? 'bg-sky-600 dark:bg-sky-400' : 'bg-orange-500 dark:bg-orange-400'
                  }`} aria-hidden="true" />
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110 ${
                    item.accent === 'sky'
                      ? 'bg-sky-600/10 dark:bg-sky-400/10 text-sky-600 dark:text-sky-400'
                      : 'bg-orange-600/10 dark:bg-orange-400/10 text-orange-600 dark:text-orange-400'
                  }`} aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-65 leading-relaxed">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AI ASSISTANT ──────────────────────────────────────────────── */}
      <AIAssistant isDark={isDark} />

      {/* ── STATIC SERVICES LIST (crawlable) ────────────────────────── */}
      <section className="sr-only" aria-label="Complete list of services offered by The Collabrix">
        <h2>Our Services</h2>
        <ul>
          <li>UX/UI Design</li>
          <li>Product Design</li>
          <li>Brand Identity</li>
          <li>Design Systems</li>
          <li>Mobile App Design</li>
          <li>Web Design</li>
          <li>Resume & Portfolio Design</li>
          <li>Talent Acquisition</li>
          <li>Full-Cycle Recruiting</li>
          <li>Executive Search</li>
          <li>HR Consulting</li>
          <li>Team Building</li>
          <li>Leadership Hiring</li>
          <li>Talent Strategy</li>
        </ul>
      </section>

      {/* ── ABOUT THE COLLABRIX (expanded body copy) ─────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-3">About Us</p>
            <h2 id="about-heading" className="tracking-tight leading-tight mb-8" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}>
              Two Superpowers, One Partner — Design & Talent Under One Roof
            </h2>
            <div className="space-y-5 text-base sm:text-lg opacity-70 leading-relaxed">
              <p>
                The Collabrix is a premium studio that brings together two disciplines most companies struggle to find in one place: world-class UX/UI design and full-service talent acquisition. We believe that building exceptional products and hiring exceptional people are two sides of the same coin — and we do both with equal precision, passion, and craft.
              </p>
              <p>
                On the design side, we deliver end-to-end UX/UI design, product design, brand identity, design systems, and mobile app design. Whether you are a startup shaping your first product or an enterprise redesigning a complex platform, our design team creates digital experiences that are intuitive, beautiful, and built to convert. We obsess over every interaction, every pixel, and every user journey — because great design is not just how it looks, it is how it works.
              </p>
              <p>
                On the talent side, we operate a full-cycle talent acquisition practice covering executive search, leadership hiring, HR consulting, team building, and talent strategy — across all industries and functions. From individual contributors to C-suite executives, from tech and finance to operations, marketing, and beyond, we help organizations find and secure the people who will drive their growth. Our recruiting methodology blends deep market research, precision sourcing, and a consultative approach that treats every hire as a strategic investment.
              </p>
              <p>
                What makes The Collabrix different is that these two practices are not separate business units bolted together — they are built to work as one. Need a beautifully designed product and the engineering team to build it? We can deliver both. Need a brand refresh and a new Head of Marketing to own it? That is exactly what we do. This integrated model means faster timelines, tighter alignment, and a single partner who understands the full picture.
              </p>
              <p>
                We work with startups, scaleups, and enterprises across all industries. Our clients come to us because they want a partner who treats their business as their own — one who delivers premium quality without the overhead of managing multiple agencies. Whether you need design, talent, or both, The Collabrix is built to help you move faster, hire smarter, and build better.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36" aria-labelledby="faq-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 sm:mb-20"
          >
            <p className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-3">FAQ</p>
            <h2 id="faq-heading" className="tracking-tight leading-tight max-w-2xl" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}>
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="max-w-3xl space-y-8">
            {[
              {
                q: 'What does The Collabrix do?',
                a: 'The Collabrix is a premium studio offering two services: world-class UX/UI design (including product design, branding, and mobile apps) and full-service talent acquisition across all industries (including executive search, full-cycle recruiting, HR consulting, and team building).',
              },
              {
                q: 'What industries does The Collabrix recruit for?',
                a: 'The Collabrix recruits across all industries and functions — from tech and finance to operations, marketing, and leadership roles. We place individual contributors through C-suite executives.',
              },
              {
                q: 'How is The Collabrix different from a regular design agency?',
                a: 'Unlike a traditional design agency, The Collabrix also operates a full talent acquisition practice. This means we can design your product and help you hire the team to build and grow it — all under one roof.',
              },
              {
                q: 'How do I get started with The Collabrix?',
                a: 'You can reach us at hello@thecollabrix.com or use the contact form on our website. Tell us whether you need design services, talent acquisition support, or both — and we\u2019ll set up a discovery call.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <h3 className="text-lg sm:text-xl font-bold mb-2">{item.q}</h3>
                <p className="text-base opacity-65 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Schema (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What does The Collabrix do?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The Collabrix is a premium studio offering two services: world-class UX/UI design (including product design, branding, and mobile apps) and full-service talent acquisition across all industries (including executive search, full-cycle recruiting, HR consulting, and team building).',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What industries does The Collabrix recruit for?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The Collabrix recruits across all industries and functions — from tech and finance to operations, marketing, and leadership roles. We place individual contributors through C-suite executives.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How is The Collabrix different from a regular design agency?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Unlike a traditional design agency, The Collabrix also operates a full talent acquisition practice. This means we can design your product and help you hire the team to build and grow it — all under one roof.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I get started with The Collabrix?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You can reach us at hello@thecollabrix.com or use the contact form on our website. Tell us whether you need design services, talent acquisition support, or both — and we\u2019ll set up a discovery call.',
                  },
                },
              ],
            }),
          }}
        />
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 lg:pb-36" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] p-10 sm:p-16 lg:p-20 ${
              isDark
                ? 'bg-gradient-to-br from-sky-950 via-sky-900/80 to-orange-950/50 border border-sky-800/50'
                : 'bg-gradient-to-br from-sky-800 via-sky-700 to-sky-900'
            }`}
          >
            <div className="absolute inset-0 opacity-10" aria-hidden="true"
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
            />
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />

            <div className="relative text-white">
              <p className="text-sm font-semibold tracking-widest uppercase opacity-60 mb-4">Ready to begin?</p>
              <h2
                id="cta-heading"
                className="tracking-tight leading-tight mb-6 max-w-2xl"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}
              >
                Work With Us — Start Your Project or Hire Top Talent
              </h2>
              <p className="text-lg opacity-70 mb-10 max-w-xl leading-relaxed">
                Whether you need exceptional design or world-class talent, we're ready to help you get there.
              </p>
              <div className="flex flex-wrap gap-4">
                <MagneticWrapper>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-sky-900 rounded-2xl hover:bg-orange-50 transition-all duration-300 font-semibold focus:outline-none focus:ring-4 focus:ring-white/50 min-h-[52px]"
                  >
                    <span>Contact Us Today</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </button>
                </MagneticWrapper>
                {/* <MagneticWrapper>
                  <button
                    onClick={() => onNavigate('work')}
                    className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-2xl hover:border-white/60 transition-all duration-300 font-semibold focus:outline-none focus:ring-4 focus:ring-white/30 min-h-[52px]"
                  >
                    See Our Work
                  </button>
                </MagneticWrapper> */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}