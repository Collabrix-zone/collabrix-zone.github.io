import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Header } from './Header';
import { JumpToTop } from './JumpToTop';

interface PrivacyPageProps {
  isDark: boolean;
  onBack: () => void;
  toggleTheme: () => void;
  onNavigate: (page: 'privacy' | 'terms' | 'home') => void;
}

export function PrivacyPage({ isDark, onBack, toggleTheme, onNavigate }: PrivacyPageProps) {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background elements */}
      <div 
        className="fixed inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? '#faf8f4' : '#2a2a2a'} 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl ${
            isDark 
              ? 'bg-gradient-to-br from-sky-400/15 to-orange-400/10' 
              : 'bg-gradient-to-br from-sky-600/8 to-orange-500/5'
          }`}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border">
          <Header isDark={isDark} toggleTheme={toggleTheme} />
        </div>
        
        {/* Main content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 lg:space-y-10"
          >
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Button
                onClick={onBack}
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 hover:bg-sky-600/10 dark:hover:bg-sky-400/10 -ml-2 text-sm sm:text-base"
              >
                <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>Back to Home</span>
              </Button>
            </motion.div>
            
            {/* Header section */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-sky-600 to-orange-500 bg-clip-text text-transparent dark:from-sky-400 dark:to-orange-400 leading-tight">
                Privacy Policy
              </h1>
              
              <div className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-sky-600/10 dark:bg-sky-400/10 border border-sky-600/20 dark:border-sky-400/20">
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-sm sm:text-base lg:text-lg opacity-80">
                    <strong>Last updated:</strong> October 2, 2025
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg opacity-80">
                    <strong>Effective date:</strong> October 2, 2025
                  </p>
                </div>
              </div>
            </div>
            
            <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none">
              <div className="space-y-8 sm:space-y-10 lg:space-y-12">

              <section>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">Introduction</h2>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    At Collabrix Zone Pvt. Ltd. ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    Please note that Figma Make is not intended for collecting personally identifiable information (PII) or securing sensitive data. This service is designed for prototyping and development purposes only.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">Information We Collect</h2>
                
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-medium mb-3 sm:mb-4">Personal Information</h3>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                      We may collect the following personal information when you voluntarily provide it:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
                      <li>Name and email address (when you sign up for our newsletter or contact us)</li>
                      <li>Contact information (phone number, company name)</li>
                      <li>Project details and requirements (when requesting consultation)</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-medium mb-3 sm:mb-4">Automatically Collected Information</h3>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                      We automatically collect certain information when you visit our website:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Referring website</li>
                      <li>Device information</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">How We Use Your Information</h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
                  <li>To provide and improve our services</li>
                  <li>To communicate with you about our services and updates</li>
                  <li>To send you marketing communications (with your consent)</li>
                  <li>To analyze website usage and improve user experience</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">Information Sharing and Disclosure</h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting our business</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of our business</li>
                  <li><strong>Consent:</strong> With your explicit consent for other purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">Data Security</h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">Your Rights</h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
                  <li>Right to access your personal information</li>
                  <li>Right to rectify inaccurate information</li>
                  <li>Right to erase your personal information</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Right to withdraw consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">Cookies and Tracking Technologies</h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">Third-Party Links</h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">Children's Privacy</h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If we become aware that we have collected such information, we will take steps to delete it promptly.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">Changes to This Privacy Policy</h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">Contact Us</h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-sky-600/10 dark:bg-sky-400/10 border border-sky-600/20 dark:border-sky-400/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-sm sm:text-base lg:text-lg"><strong>Email:</strong><a
              href="mailto:hello@thecollabrix.com"
              target="_blank"> hello@thecollabrix.com</a></p>
                    <p className="text-sm sm:text-base lg:text-lg"><strong>Company:</strong> Collabrix Zone Pvt. Ltd.</p>
                    <p className="text-sm sm:text-base lg:text-lg"><strong>Address:</strong> India</p>
                  </div>
                </div>
              </section>
              </div>
            </div>
          </motion.div>
        </main>

        {/* Footer section */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8"
        >
          <div className="max-w-6xl mx-auto">
            <div
              className={`pt-4 sm:pt-6 border-t ${
                isDark ? "border-white/10" : "border-gray-200/30"
              } flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6`}
            >
              <div className="text-xs sm:text-sm lg:text-base opacity-60 text-center md:text-left">
                © {currentYear} Collabrix Zone Pvt. Ltd. All rights reserved.
              </div>

              <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm lg:text-base">
                <motion.button
                  onClick={() => onNavigate('privacy')}
                  className="font-medium rounded-lg px-4 py-2 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center border-2"
                  style={{
                    backgroundColor: 'var(--button-selected-bg)',
                    color: 'var(--button-selected-text)',
                    borderColor: 'var(--button-selected-border)'
                  }}
                  disabled={true}
                >
                  Privacy
                </motion.button>
                <motion.button
                  onClick={() => onNavigate('terms')}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-3 py-2 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                  style={{
                    '--tw-bg-opacity': '0'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--button-hover-bg)';
                    e.currentTarget.style.color = 'var(--button-hover-text)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'inherit';
                  }}
                  whileHover={{ y: -1 }}
                >
                  Terms
                </motion.button>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
      
      {/* Jump to Top Button */}
      <JumpToTop isDark={isDark} />
    </div>
  );
}