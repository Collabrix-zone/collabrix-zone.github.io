import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Linkedin, MapPin, CheckCircle2, Send, Clock, MessageSquare, ArrowRight } from 'lucide-react';

interface ContactPageProps {
  isDark: boolean;
}

type ServiceOption = 'design' | 'talent' | 'both' | 'other';

const serviceOptions: { value: ServiceOption; label: string; description: string }[] = [
  { value: 'design', label: 'Design Services', description: 'UX/UI, product design, branding' },
  { value: 'talent', label: 'Talent Services', description: 'Recruitment, executive search, HR' },
  { value: 'both', label: 'Both Services', description: 'Full design & talent partnership' },
  { value: 'other', label: 'Something Else', description: 'Let\'s talk about your needs' },
];

const faqs = [
  { q: 'How quickly can you start on a project?', a: 'Typically within 1–2 weeks of signing. We keep capacity available for new clients and can accommodate urgent timelines.' },
  { q: 'What is your typical project duration?', a: 'Design projects range from 4 weeks for focused sprints to 6+ months for comprehensive engagements. Talent searches average 21 days to first placement.' },
  { q: 'Do you work with international clients?', a: 'Yes. We work with clients globally and have experience placing candidates across multiple markets and time zones.' },
  { q: 'How is pricing structured?', a: 'Design projects are scoped and quoted per engagement. Talent services are typically a percentage of first-year compensation. Contact us for a tailored quote.' },
];

export function ContactPage({ isDark }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'design' as ServiceOption,
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', service: 'design', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-4"
          >
            Contact
          </motion.p>
          <motion.h1
            id="contact-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="tracking-tight leading-[0.92] mb-8 max-w-3xl"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Let's start a{' '}
            <span className="italic bg-gradient-to-br from-sky-600 to-sky-800 dark:from-sky-300 dark:to-sky-500 bg-clip-text text-transparent">
              conversation
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg sm:text-xl opacity-65 leading-relaxed max-w-2xl"
          >
            Whether you have a project in mind, a team to build, or just want to explore 
            what's possible — we'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* ── MAIN CONTACT ──────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28" aria-labelledby="form-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* ── FORM ─────────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className={`p-8 sm:p-10 rounded-3xl border ${isDark ? 'bg-white/4 border-white/8' : 'bg-white/80 border-gray-100 shadow-sm'}`}>
                <h2 id="form-heading" className="text-2xl sm:text-3xl font-bold mb-8 tracking-tight">
                  Send us a message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-600/10 dark:bg-green-400/10 flex items-center justify-center mb-4">
                      <CheckCircle2 size={32} className="text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message sent!</h3>
                    <p className="opacity-65 max-w-sm">
                      Thank you for reaching out. We'll get back to you within 24 business hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2 opacity-80">
                          Full Name <span className="text-red-500" aria-label="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className={`w-full px-4 py-3 rounded-xl border text-base transition-all duration-200 focus:outline-none focus:ring-4 min-h-[48px] ${
                            isDark
                              ? 'bg-white/8 border-white/15 text-white placeholder:text-white/35 focus:ring-sky-400/30 focus:border-sky-400/50'
                              : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-sky-600/20 focus:border-sky-400'
                          }`}
                          required
                          aria-required="true"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2 opacity-80">
                          Email Address <span className="text-red-500" aria-label="required">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          className={`w-full px-4 py-3 rounded-xl border text-base transition-all duration-200 focus:outline-none focus:ring-4 min-h-[48px] ${
                            isDark
                              ? 'bg-white/8 border-white/15 text-white placeholder:text-white/35 focus:ring-sky-400/30 focus:border-sky-400/50'
                              : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-sky-600/20 focus:border-sky-400'
                          }`}
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2 opacity-80">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className={`w-full px-4 py-3 rounded-xl border text-base transition-all duration-200 focus:outline-none focus:ring-4 min-h-[48px] ${
                          isDark
                            ? 'bg-white/8 border-white/15 text-white placeholder:text-white/35 focus:ring-sky-400/30 focus:border-sky-400/50'
                            : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-sky-600/20 focus:border-sky-400'
                        }`}
                      />
                    </div>

                    {/* Service selector — card style */}
                    <div>
                      <p className="block text-sm font-semibold mb-3 opacity-80">
                        Interested In <span className="text-red-500" aria-label="required">*</span>
                      </p>
                      <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Service type">
                        {serviceOptions.map((opt) => (
                          <label
                            key={opt.value}
                            className={`flex flex-col gap-0.5 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                              formData.service === opt.value
                                ? isDark
                                  ? 'border-sky-400 bg-sky-400/10'
                                  : 'border-sky-600 bg-sky-600/5'
                                : isDark
                                  ? 'border-white/10 bg-white/4 hover:border-white/20'
                                  : 'border-gray-200 bg-white/50 hover:border-gray-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="service"
                              value={opt.value}
                              checked={formData.service === opt.value}
                              onChange={() => setFormData({ ...formData, service: opt.value })}
                              className="sr-only"
                            />
                            <span className="text-sm font-semibold">{opt.label}</span>
                            <span className="text-xs opacity-55 leading-snug">{opt.description}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2 opacity-80">
                        Message <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or hiring needs, timeline, and any specific requirements..."
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl border text-base transition-all duration-200 resize-none focus:outline-none focus:ring-4 ${
                          isDark
                            ? 'bg-white/8 border-white/15 text-white placeholder:text-white/35 focus:ring-sky-400/30 focus:border-sky-400/50'
                            : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-sky-600/20 focus:border-sky-400'
                        }`}
                        required
                        aria-required="true"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                      className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-sky-800 dark:bg-sky-600 text-white rounded-2xl hover:bg-orange-600 dark:hover:bg-orange-600 transition-all duration-300 font-semibold disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-sky-600 dark:focus:ring-sky-400 min-h-[52px]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                          <span>Sending…</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* ── SIDEBAR ───────────────────────────────────────────────── */}
            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-5 space-y-5"
              aria-label="Contact information"
            >
              {/* Contact info */}
              <div className={`p-7 sm:p-8 rounded-3xl border ${isDark ? 'bg-white/4 border-white/8' : 'bg-white/80 border-gray-100 shadow-sm'}`}>
                <h2 className="font-bold text-xl mb-6 tracking-tight">Contact Information</h2>
                <div className="space-y-5">
                  <a
                    href="mailto:hello@thecollabrix.com"
                    className="flex items-start gap-4 group focus:outline-none"
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-sky-400/10' : 'bg-sky-600/8'}`}>
                      <Mail size={20} className="text-sky-600 dark:text-sky-400" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase opacity-50 mb-1">Email</p>
                      <span className="text-base font-medium group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors focus:ring-2 focus:ring-sky-600 dark:focus:ring-sky-400 rounded">
                        hello@thecollabrix.com
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/collabrix-zone-pvt-ltd/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group focus:outline-none"
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-sky-400/10' : 'bg-sky-600/8'}`}>
                      <Linkedin size={20} className="text-sky-600 dark:text-sky-400" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase opacity-50 mb-1">LinkedIn</p>
                      <span className="text-base font-medium group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        Collabrix Zone Pvt. Ltd.
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-sky-400/10' : 'bg-sky-600/8'}`}>
                      <MapPin size={20} className="text-sky-600 dark:text-sky-400" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase opacity-50 mb-1">Location</p>
                      <span className="text-base font-medium">India</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response & Hours */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className={`p-6 rounded-2xl border ${isDark ? 'bg-white/4 border-white/8' : 'bg-white/80 border-gray-100 shadow-sm'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <Clock size={18} className="text-orange-600 dark:text-orange-400" aria-hidden="true" />
                    <h3 className="font-semibold">Response Time</h3>
                  </div>
                  <p className="text-sm opacity-65 leading-relaxed">
                    We respond to all inquiries within <strong>24 hours</strong> on business days. Urgent? Say so in your message.
                  </p>
                </div>
                <div className={`p-6 rounded-2xl border ${isDark ? 'bg-white/4 border-white/8' : 'bg-white/80 border-gray-100 shadow-sm'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <MessageSquare size={18} className="text-sky-600 dark:text-sky-400" aria-hidden="true" />
                    <h3 className="font-semibold">Business Hours</h3>
                  </div>
                  <div className="text-sm opacity-65 space-y-1">
                    <p>Mon–Fri: 9:00 AM – 6:00 PM IST</p>
                    <p>Weekends: Closed</p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className={`relative overflow-hidden p-6 rounded-2xl border ${
                isDark
                  ? 'bg-gradient-to-br from-orange-950/80 to-orange-900/30 border-orange-800/40'
                  : 'bg-gradient-to-br from-orange-50 to-white border-orange-100'
              }`}>
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-orange-500/10 blur-2xl" aria-hidden="true" />
                <h3 className="font-bold mb-2">Prefer to talk?</h3>
                <p className="text-sm opacity-65 mb-4 leading-relaxed">
                  Book a free 30-minute discovery call and let's explore how we can help.
                </p>
                <a
                  href="mailto:hello@thecollabrix.com?subject=Discovery Call Request"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 dark:text-orange-400 hover:gap-3 transition-all focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-orange-400 rounded"
                >
                  <span>Request a Call</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className={`px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-current/8 ${isDark ? 'bg-white/2' : 'bg-black/2'}`} aria-labelledby="faq-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 sm:mb-14"
          >
            <p className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold tracking-tight">Common questions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`p-6 sm:p-7 rounded-2xl border ${isDark ? 'bg-white/4 border-white/8' : 'bg-white/70 border-gray-100'}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 size={18} className="text-sky-600 dark:text-sky-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <h3 className="font-bold">{faq.q}</h3>
                </div>
                <p className="text-sm opacity-65 leading-relaxed pl-7">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
