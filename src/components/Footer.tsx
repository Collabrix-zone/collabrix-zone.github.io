import { motion } from "motion/react";
import { Mail, Heart } from "lucide-react";

interface FooterProps {
  isDark: boolean;
  onNavigate?: (page: 'privacy' | 'terms') => void;
}

export function Footer({ isDark, onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="relative py-6 px-4 sm:px-6 md:px-8"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="w-full max-w-[896px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Left side - Brand */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <svg 
              width="295" 
              height="28" 
              viewBox="0 0 295 28" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 sm:h-8 w-auto"
            >
              <path d="M31.3483 11.2363C29.7539 12.7151 29.9874 12.2558 28.8223 10.5544C27.8105 9.07559 21.6288 0.856855 14.5178 1.24119C-1.10046 2.08486 3.68029 31.0508 19.5603 26.2255C31.6832 22.5415 38.3626 -0.631281 51.9076 0.0131883C69.3797 0.842796 69.2264 26.7341 52.2732 27.9527C45.0585 28.4706 43.6079 24.6249 38.2942 21.8431C30.7704 17.9037 27.4024 24.4843 21.1146 26.8887C13.4399 29.8252 3.38548 26.6966 0.72033 18.4919C-2.65238 8.11475 6.35016 -0.687531 16.657 0.191291C23.6382 0.786547 32.2799 10.3692 31.3459 11.2363H31.3483Z" fill={isDark ? '#ffffff' : '#1a1a1a'}/>
              <path d="M99.0024 5.62224L96.905 7.23541C95.7472 5.72554 94.3594 4.58125 92.7377 3.80247C91.1161 3.0237 89.3358 2.63432 87.3929 2.63432C85.2717 2.63432 83.305 3.14686 81.497 4.16404C79.689 5.18121 78.2853 6.55599 77.2941 8.27644C76.2989 9.99689 75.8033 11.9359 75.8033 14.0854C75.8033 17.3356 76.9135 20.0494 79.1418 22.2228C81.3661 24.3962 84.1734 25.4849 87.5595 25.4849C91.2865 25.4849 94.403 24.0227 96.9089 21.0983L99.0064 22.6916C97.6821 24.3843 96.0247 25.6915 94.0422 26.6133C92.0597 27.5391 89.8433 28 87.3969 28C82.742 28 79.0704 26.4464 76.3821 23.3433C74.1261 20.7209 73 17.5581 73 13.847C73 9.94522 74.364 6.66326 77.0958 3.99716C79.8277 1.33504 83.2456 0 87.3573 0C89.8393 0 92.0835 0.49268 94.0858 1.47806C96.0882 2.46345 97.7257 3.84221 99.0064 5.61829L99.0024 5.62224Z" fill={isDark ? '#ffffff' : '#1a1a1a'}/>
              <path d="M120.338 0.0039772C124.366 0.0039772 127.741 1.35093 130.453 4.04484C133.169 6.73875 134.525 10.0565 134.525 13.994C134.525 17.9316 133.169 21.2056 130.461 23.9234C127.753 26.6411 124.45 28 120.552 28C116.655 28 113.276 26.6491 110.564 23.9393C107.852 21.2295 106.492 17.9594 106.492 14.1172C106.492 11.5544 107.111 9.18235 108.348 6.99702C109.585 4.81169 111.27 3.09919 113.407 1.85951C115.544 0.619836 117.852 0.0039772 120.338 0.0039772ZM120.457 2.59457C118.49 2.59457 116.623 3.10713 114.858 4.13622C113.094 5.16531 111.718 6.54803 110.727 8.28835C109.736 10.0287 109.24 11.9716 109.24 14.1093C109.24 17.276 110.334 19.954 112.527 22.1354C114.72 24.3167 117.36 25.4094 120.453 25.4094C122.519 25.4094 124.43 24.9088 126.186 23.9035C127.943 22.8983 129.315 21.5275 130.298 19.7871C131.281 18.0468 131.773 16.1118 131.773 13.9821C131.773 11.8524 131.281 9.95317 130.298 8.24067C129.315 6.52817 127.927 5.16133 126.143 4.13224C124.355 3.10315 122.459 2.59059 120.457 2.59059V2.59457Z" fill={isDark ? '#ffffff' : '#1a1a1a'}/>
              <path d="M143.196 0.67547H145.853V24.7618H156.09V27.3365H143.196V0.67547Z" fill={isDark ? '#ffffff' : '#1a1a1a'}/>
              <path d="M163.636 0.67547H166.292V24.7618H176.53V27.3365H163.636V0.67547Z" fill={isDark ? '#ffffff' : '#1a1a1a'}/>
              <path d="M194.943 0.67547L207.35 27.3325H204.479L200.296 18.5594H188.837L184.694 27.3325H181.728L194.297 0.67547H194.947H194.943ZM194.61 6.33746L190.051 15.9887H199.146L194.61 6.33746Z" fill={isDark ? '#ffffff' : '#1a1a1a'}/>
              <path d="M214.879 0.67547H220.125C222.234 0.67547 223.856 0.925771 224.99 1.42641C226.124 1.92705 227.02 2.69788 227.674 3.73889C228.333 4.7799 228.662 5.93217 228.662 7.19966C228.662 8.38371 228.372 9.46049 227.797 10.434C227.222 11.4074 226.374 12.1941 225.26 12.7981C226.644 13.2709 227.706 13.8232 228.452 14.455C229.197 15.0907 229.776 15.8575 230.192 16.7555C230.608 17.6574 230.815 18.6309 230.815 19.6838C230.815 21.8215 230.034 23.6333 228.471 25.1114C226.909 26.5895 224.816 27.3325 222.187 27.3325H214.879V0.67547ZM217.484 3.28197V11.8167H219.007C220.855 11.8167 222.215 11.6458 223.083 11.3001C223.951 10.9545 224.641 10.4141 225.149 9.67106C225.656 8.92805 225.91 8.1016 225.91 7.19568C225.91 5.97587 225.486 5.01831 224.633 4.32298C223.781 3.62765 222.425 3.28197 220.565 3.28197H217.484ZM217.484 14.5026V24.722H220.779C222.722 24.722 224.15 24.5313 225.054 24.1498C225.958 23.7684 226.687 23.1724 227.238 22.3658C227.789 21.5553 228.063 20.6811 228.063 19.7395C228.063 18.5554 227.678 17.5224 226.905 16.6403C226.132 15.7582 225.069 15.1543 223.717 14.8284C222.809 14.6099 221.235 14.5026 218.987 14.5026H217.484Z" fill={isDark ? '#ffffff' : '#1a1a1a'}/>
              <path d="M239.554 0.67547H244.851C247.805 0.67547 249.807 0.794659 250.854 1.03703C252.432 1.3986 253.716 2.17737 254.704 3.36937C255.691 4.56137 256.187 6.02753 256.187 7.77182C256.187 9.22208 255.846 10.5015 255.164 11.6021C254.482 12.7027 253.51 13.5331 252.242 14.0973C250.977 14.6616 249.228 14.9476 246.996 14.9595L256.563 27.3365H253.276L243.709 14.9595H242.206V27.3365H239.546V0.679423L239.554 0.67547ZM242.21 3.28197V12.3451L246.794 12.3809C248.57 12.3809 249.882 12.21 250.735 11.8723C251.587 11.5346 252.249 10.9942 252.729 10.2512C253.209 9.50816 253.443 8.67773 253.443 7.75989C253.443 6.84205 253.201 6.05533 252.717 5.32424C252.234 4.59315 251.599 4.07266 250.814 3.7548C250.029 3.4409 248.725 3.28197 246.901 3.28197H242.21Z" fill={isDark ? '#ffffff' : '#1a1a1a'}/>
              <path d="M264.838 0.67547H267.495V27.3325H264.838V0.67547Z" fill={isDark ? '#ffffff' : '#1a1a1a'}/>
              <path d="M275.524 0.67547H278.633L285 11.0498L291.408 0.67547H294.477L286.543 13.557L295 27.3325H291.891L284.984 16.084L278.054 27.3325H274.945L283.442 13.5729L275.524 0.67547Z" fill={isDark ? '#ffffff' : '#1a1a1a'}/>
            </svg>
            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex items-center gap-2 text-sm opacity-60">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart
                    size={14}
                    className="text-red-500 fill-current"
                  />
                </motion.div>
                <span>in India</span>
              </div>
              <span className="text-xs opacity-40">Based in India, serving clients globally</span>
            </div>
          </div>

          {/* Right side - Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <motion.a
              href="mailto:hello@thecollabrix.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary ${
                isDark
                  ? "hover:bg-white/5 border border-transparent hover:border-white/10"
                  : "hover:bg-gray-900/5 border border-transparent hover:border-gray-200/30"
              }`}
              whileHover={{ y: -2 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
              aria-label="Send email to hello@thecollabrix.com"
            >
              <Mail size={18} className="text-blue-600" />
              <span className="font-medium">
                hello@thecollabrix.com
              </span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/company/collabrix-zone-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary min-h-[48px] min-w-[48px] flex items-center justify-center ${
                isDark
                  ? "hover:bg-white/5 border border-transparent hover:border-white/10"
                  : "hover:bg-gray-900/5 border border-transparent hover:border-gray-200/30"
              }`}
              whileHover={{ y: -2, rotate: 5 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
              aria-label="Visit Collabrix Zone on LinkedIn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={isDark ? "text-blue-400" : "text-blue-700"}
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Bottom section */}
        <div
          className={`mt-6 pt-4 border-t ${
            isDark ? "border-white/10" : "border-gray-200/30"
          } flex flex-col md:flex-row items-center justify-between gap-4`}
        >
          <div className="text-sm opacity-60">
            © {currentYear} Collabrix Zone Pvt. Ltd. All rights
            reserved.
          </div>

          <div className="flex items-center gap-6 text-sm opacity-60">
            <motion.button
              onClick={() => onNavigate?.('privacy')}
              className="hover:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-3 py-2 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              whileHover={{ y: -1 }}
            >
              Privacy
            </motion.button>
            <motion.button
              onClick={() => onNavigate?.('terms')}
              className="hover:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-3 py-2 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              whileHover={{ y: -1 }}
            >
              Terms
            </motion.button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}