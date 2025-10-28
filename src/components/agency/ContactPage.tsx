import { motion } from 'motion/react';
import { ArrowRight, Mail, Linkedin, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';

interface ContactPageProps {
  isDark: boolean;
}

export function ContactPage({ isDark }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Email submission (mailto link with pre-filled data)
    const subject = `Project Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:hello@thecollabrix.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            Let's Create Something
            <br />
            <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-orange-500 bg-clip-text text-transparent dark:from-sky-400 dark:via-sky-300 dark:to-orange-400">
              Extraordinary
            </span>
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl opacity-70 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to transform your vision into reality? Get in touch with us today
          </motion.p>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-8 py-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className={`p-8 rounded-3xl border-2 backdrop-blur-sm ${
                isDark 
                  ? 'border-white/10 bg-white/5' 
                  : 'border-gray-200/50 bg-white/30'
              }`}>
                <h2 className="text-3xl mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 opacity-80">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 bg-transparent transition-colors focus:outline-none ${
                        isDark 
                          ? 'border-white/20 focus:border-sky-400' 
                          : 'border-gray-300 focus:border-sky-600'
                      }`}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 opacity-80">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 bg-transparent transition-colors focus:outline-none ${
                        isDark 
                          ? 'border-white/20 focus:border-sky-400' 
                          : 'border-gray-300 focus:border-sky-600'
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block mb-2 opacity-80">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 bg-transparent transition-colors focus:outline-none ${
                        isDark 
                          ? 'border-white/20 focus:border-sky-400' 
                          : 'border-gray-300 focus:border-sky-600'
                      }`}
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 opacity-80">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl border-2 bg-transparent transition-colors focus:outline-none resize-none ${
                        isDark 
                          ? 'border-white/20 focus:border-sky-400' 
                          : 'border-gray-300 focus:border-sky-600'
                      }`}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full px-8 py-6 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-orange-500 hover:to-orange-600 text-white hover:scale-105 transition-all duration-500 flex items-center gap-2 justify-center"
                  >
                    Send Message
                    <ArrowRight size={20} />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <h2 className="text-3xl mb-6">Get in touch</h2>
                <p className="text-lg opacity-70 mb-8">
                  Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className={`p-6 rounded-2xl border-2 backdrop-blur-sm ${
                  isDark 
                    ? 'border-white/10 bg-white/5' 
                    : 'border-gray-200/50 bg-white/30'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${isDark ? 'bg-sky-400/20 text-sky-400' : 'bg-sky-600/20 text-sky-600'}`}>
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Email</h3>
                      <a 
                        href="mailto:hello@thecollabrix.com"
                        className="opacity-70 hover:opacity-100 transition-opacity"
                      >
                        hello@thecollabrix.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-2xl border-2 backdrop-blur-sm ${
                  isDark 
                    ? 'border-white/10 bg-white/5' 
                    : 'border-gray-200/50 bg-white/30'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${isDark ? 'bg-sky-400/20 text-sky-400' : 'bg-sky-600/20 text-sky-600'}`}>
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/company/collabrix-zone-pvt-ltd/?viewAsMember=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-70 hover:opacity-100 transition-opacity"
                      >
                        Connect with us
                      </a>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-2xl border-2 backdrop-blur-sm ${
                  isDark 
                    ? 'border-white/10 bg-white/5' 
                    : 'border-gray-200/50 bg-white/30'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${isDark ? 'bg-sky-400/20 text-sky-400' : 'bg-sky-600/20 text-sky-600'}`}>
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Location</h3>
                      <p className="opacity-70">
                        Remote-first agency<br />
                        Serving clients worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className={`p-6 rounded-2xl border-2 backdrop-blur-sm ${
                isDark 
                  ? 'border-sky-400/30 bg-sky-400/5' 
                  : 'border-sky-600/30 bg-sky-600/5'
              }`}>
                <p className="opacity-80">
                  <strong>Quick Response Time:</strong> We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
