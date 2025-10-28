import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Header } from "./Header";
import { JumpToTop } from "./JumpToTop";

interface TermsPageProps {
  isDark: boolean;
  onBack: () => void;
  toggleTheme: () => void;
  onNavigate: (page: "privacy" | "terms" | "home") => void;
}

export function TermsPage({
  isDark,
  onBack,
  toggleTheme,
  onNavigate,
}: TermsPageProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background elements */}
      <div
        className="fixed inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? "#faf8f4" : "#2a2a2a"} 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl ${
            isDark
              ? "bg-gradient-to-br from-sky-400/15 to-orange-400/10"
              : "bg-gradient-to-br from-sky-600/8 to-orange-500/5"
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
                <ArrowLeft
                  size={16}
                  className="sm:w-[18px] sm:h-[18px]"
                />
                <span>Back to Home</span>
              </Button>
            </motion.div>

            {/* Header section */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-sky-600 to-orange-500 bg-clip-text text-transparent dark:from-sky-400 dark:to-orange-400 leading-tight">
                Terms of Service
              </h1>

              <div className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-sky-600/10 dark:bg-sky-400/10 border border-sky-600/20 dark:border-sky-400/20">
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-sm sm:text-base lg:text-lg opacity-80">
                    <strong>Last updated:</strong> October 2,
                    2025
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg opacity-80">
                    <strong>Effective date:</strong> October 2,
                    2025
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none">
              <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                <section>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">
                    Agreement to Terms
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      By accessing and using the services
                      provided by Collabrix Zone Pvt. Ltd.
                      ("Company," "we," "our," or "us"), you
                      agree to be bound by these Terms of
                      Service ("Terms"). If you disagree with
                      any part of these terms, then you may not
                      access our services.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      These Terms apply to all visitors, users,
                      and others who access or use our website
                      and services.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">
                    Description of Services
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                    Collabrix is a premium UX/UI design agency
                    that provides:
                  </p>
                  <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base lg:text-lg mb-4">
                    <li>
                      User experience (UX) design services
                    </li>
                    <li>User interface (UI) design services</li>
                    <li>Digital design consultation</li>
                    <li>Website and application design</li>
                    <li>Design strategy and research</li>
                    <li>Prototype development</li>
                  </ul>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    Our services are designed to help businesses
                    create digital experiences that captivate,
                    convert, and inspire their audiences.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">
                    User Accounts and Registration
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      When you create an account with us, you
                      must provide information that is accurate,
                      complete, and current at all times. You
                      are responsible for safeguarding the
                      password and for maintaining the
                      confidentiality of your account.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      You agree to accept responsibility for all
                      activities that occur under your account
                      or password.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">
                    Acceptable Use
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                    You may use our services only for lawful
                    purposes and in accordance with these Terms.
                    You agree not to use the services:
                  </p>
                  <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
                    <li>
                      In any way that violates applicable
                      federal, state, local, or international
                      law or regulation
                    </li>
                    <li>
                      To transmit or procure the sending of any
                      advertising or promotional material
                      without our prior written consent
                    </li>
                    <li>
                      To impersonate or attempt to impersonate
                      the Company, employees, or other users
                    </li>
                    <li>
                      To engage in any other conduct that
                      restricts or inhibits anyone's use or
                      enjoyment of the services
                    </li>
                    <li>
                      For any purpose that is unlawful or
                      prohibited by these Terms
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">
                    Intellectual Property Rights
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      The services and their original content,
                      features, and functionality are and will
                      remain the exclusive property of Collabrix
                      Zone Pvt. Ltd. and its licensors. The
                      services are protected by copyright,
                      trademark, and other laws.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      Our trademarks and trade dress may not be
                      used in connection with any product or
                      service without our prior written consent.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">
                    Client Work and Deliverables
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                    For design projects and client work:
                  </p>
                  <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
                    <li>
                      Final deliverables become the property of
                      the client upon full payment
                    </li>
                    <li>
                      We retain the right to showcase work in
                      our portfolio unless otherwise agreed
                    </li>
                    <li>
                      Client must provide necessary materials
                      and feedback in a timely manner
                    </li>
                    <li>
                      Revisions beyond the agreed scope may
                      incur additional charges
                    </li>
                    <li>
                      Project timelines are estimates and may
                      vary based on client responsiveness
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">
                    Payment and Billing
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                    Payment terms for our services:
                  </p>
                  <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
                    <li>
                      Payment schedules will be outlined in
                      individual project agreements
                    </li>
                    <li>
                      Late payments may incur additional fees
                    </li>
                    <li>
                      Refunds are considered on a case-by-case
                      basis
                    </li>
                    <li>
                      All prices are subject to applicable taxes
                    </li>
                    <li>
                      We reserve the right to suspend services
                      for non-payment
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">
                    Privacy and Confidentiality
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      We respect your privacy and are committed
                      to protecting your personal information.
                      Our Privacy Policy explains how we
                      collect, use, and protect your information
                      when you use our services.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      We maintain strict confidentiality
                      regarding client projects and proprietary
                      information shared during the course of
                      our business relationship.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">
                    Disclaimers
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                    The information on this website is provided
                    on an "as is" basis. To the fullest extent
                    permitted by law, this Company:
                  </p>
                  <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
                    <li>
                      Excludes all representations and
                      warranties relating to this website and
                      its contents
                    </li>
                    <li>
                      Does not guarantee the accuracy,
                      completeness, or timeliness of information
                    </li>
                    <li>
                      Makes no warranties regarding the
                      performance or availability of services
                    </li>
                    <li>
                      Disclaims liability for any technical
                      issues or service interruptions
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">
                    Limitation of Liability
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      In no event shall Collabrix Zone Pvt.
                      Ltd., its directors, employees, or agents
                      be liable for any indirect, incidental,
                      special, consequential, or punitive
                      damages, including without limitation,
                      loss of profits, data, use, goodwill, or
                      other intangible losses.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      Our total liability shall not exceed the
                      amount paid by you for the specific
                      service giving rise to the claim.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">
                    Termination
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      We may terminate or suspend your account
                      and bar access to the services
                      immediately, without prior notice or
                      liability, under our sole discretion, for
                      any reason whatsoever, including without
                      limitation if you breach the Terms.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      If you wish to terminate your account, you
                      may simply discontinue using the services.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">
                    Governing Law
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    These Terms shall be interpreted and
                    governed by the laws of India, without
                    regard to its conflict of law provisions.
                    Our failure to enforce any right or
                    provision of these Terms will not be
                    considered a waiver of those rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">
                    Changes to Terms
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      We reserve the right, at our sole
                      discretion, to modify or replace these
                      Terms at any time. If a revision is
                      material, we will provide at least 30 days
                      notice prior to any new terms taking
                      effect.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      What constitutes a material change will be
                      determined at our sole discretion. By
                      continuing to access or use our services
                      after any revisions become effective, you
                      agree to be bound by the revised terms.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">
                    Contact Information
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                    If you have any questions about these Terms
                    of Service, please contact us:
                  </p>
                  <div className="bg-sky-600/10 dark:bg-sky-400/10 border border-sky-600/20 dark:border-sky-400/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                    <div className="space-y-2 sm:space-y-3">
                      <p className="text-sm sm:text-base lg:text-lg">
                        <strong>Email:</strong>
                        <a
                          href="mailto:hello@thecollabrix.com"
                          target="_blank"
                        >
                          {" "}
                          hello@thecollabrix.com
                        </a>
                      </p>
                      <p className="text-sm sm:text-base lg:text-lg">
                        <strong>Company:</strong> Collabrix Zone
                        Pvt. Ltd.
                      </p>
                      <p className="text-sm sm:text-base lg:text-lg">
                        <strong>LinkedIn:</strong>{" "}
                        <a
                          href="https://www.linkedin.com/company/collabrix-zone-pvt-ltd/"
                          target="_blank"
                        >
                          {" "}
                          https://www.linkedin.com/company/collabrix-zone-pvt-ltd/
                        </a>
                      </p>
                      <p className="text-sm sm:text-base lg:text-lg">
                        <strong>Address:</strong> India
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-sky-600 dark:text-sky-400">
                    Acknowledgment
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    By using our services, you acknowledge that
                    you have read these Terms of Service and
                    agree to be bound by them. These Terms
                    constitute the entire agreement between you
                    and Collabrix Zone Pvt. Ltd. regarding the
                    use of our services.
                  </p>
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
                isDark
                  ? "border-white/10"
                  : "border-gray-200/30"
              } flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6`}
            >
              <div className="text-xs sm:text-sm lg:text-base opacity-60 text-center md:text-left">
                © {currentYear} Collabrix Zone Pvt. Ltd. All
                rights reserved.
              </div>

              <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm lg:text-base">
                <motion.button
                  onClick={() => onNavigate("privacy")}
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
                  Privacy
                </motion.button>
                <motion.button
                  onClick={() => onNavigate("terms")}
                  className="font-medium rounded-lg px-4 py-2 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center border-2"
                  style={{
                    backgroundColor: 'var(--button-selected-bg)',
                    color: 'var(--button-selected-text)',
                    borderColor: 'var(--button-selected-border)'
                  }}
                  disabled={true}
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