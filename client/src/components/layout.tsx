import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground bg-noise selection:bg-accent selection:text-white">

      {/* Skip to Content - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:font-bold focus:uppercase focus:tracking-widest focus:text-sm"
      >
        Skip to content
      </a>

      {/* Premium Navigation */}
      <nav 
        className={`fixed top-0 w-full z-40 px-6 md:px-12 lg:px-16 py-5 md:py-6 transition-all duration-500 ease-out flex justify-between items-center ${
          scrolled ? "opacity-0 pointer-events-none" : ""
        }`}
      >
        {/* Logo */}
        <Link href="/">
          <a className="group cursor-pointer">
            <img
              src="/logo-white-magenta.png"
              alt="Eboné F. Bell"
              className="h-16 md:h-[72px] w-auto object-contain"
            />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 lg:gap-14">
          <Link href="/story">
            <a className={`text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-220 hover:text-accent cursor-pointer ${location === '/story' ? 'text-accent' : 'text-white/90 hover:text-white'}`}>
              Story
            </a>
          </Link>
          <Link href="/speaking">
            <a className={`text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-220 hover:text-accent cursor-pointer ${location === '/speaking' ? 'text-accent' : 'text-white/90 hover:text-white'}`}>
              Speaking
            </a>
          </Link>
          <a
            href="mailto:info@ebonebell.com"
            className="ml-3 bg-accent hover:bg-accent text-white px-7 py-3 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-320 ease-out hover:-translate-y-[2px] shadow-[0_2px_6px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(201,162,39,0.24),0_3px_8px_rgba(0,0,0,0.1)]"
          >
            Book Eboné
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-primary"></span>
          <span className="w-6 h-0.5 bg-primary"></span>
          <span className="w-4 h-0.5 bg-primary self-end"></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-primary text-primary-foreground md:hidden"
          >
            {/* Close Button */}
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo */}
            <div className="absolute top-6 left-6">
              <img
                src="/logo-white-magenta.png"
                alt="Eboné F. Bell"
                className="h-14 w-auto object-contain"
              />
            </div>

            {/* Menu Links */}
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link href="/">
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-3xl font-serif transition-colors ${location === '/' ? 'text-accent' : 'hover:text-accent'}`}
                  >
                    Home
                  </a>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <Link href="/story">
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-3xl font-serif transition-colors ${location === '/story' ? 'text-accent' : 'hover:text-accent'}`}
                  >
                    Story
                  </a>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href="/speaking">
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-3xl font-serif transition-colors ${location === '/speaking' ? 'text-accent' : 'hover:text-accent'}`}
                  >
                    Speaking
                  </a>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-8"
              >
                <a
                  href="mailto:info@ebonebell.com"
                  className="inline-block bg-accent text-white px-10 py-4 text-sm font-bold uppercase tracking-widest"
                >
                  Book Eboné
                </a>
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-12 text-xs font-mono tracking-widest uppercase text-center px-8"
              >
                Keynote Speaker · Movement Builder
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scrolled Navigation */}
      <AnimatePresence>
        {scrolled && !mobileMenuOpen && (
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-primary/5 py-3 px-6 md:px-12 lg:px-16 flex justify-between items-center"
          >
            <Link href="/">
              <img
                src="/logo-black-magenta.png"
                alt="Eboné F. Bell"
                className="h-11 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-9">
              <Link href="/story">
                <a className={`text-[10px] font-bold uppercase tracking-[0.14em] transition-all duration-220 hover:text-accent cursor-pointer ${location === '/story' ? 'text-accent' : 'text-primary'}`}>
                  Story
                </a>
              </Link>
              <Link href="/speaking">
                <a className={`text-[10px] font-bold uppercase tracking-[0.14em] transition-all duration-220 hover:text-accent cursor-pointer ${location === '/speaking' ? 'text-accent' : 'text-primary'}`}>
                  Speaking
                </a>
              </Link>
              <a
                href="mailto:info@ebonebell.com"
                className="bg-accent hover:bg-accent text-white px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] transition-all duration-320 ease-out hover:-translate-y-[2px] shadow-[0_2px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(201,162,39,0.22),0_2px_6px_rgba(0,0,0,0.08)]"
              >
                Book Eboné
              </a>
            </div>

            {/* Mobile hamburger */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1"
              aria-label="Open menu"
            >
              <span className="w-5 h-0.5 bg-primary"></span>
              <span className="w-5 h-0.5 bg-primary"></span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      {/* Signature Line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-6 md:mx-12" />

      {/* Footer */}
      <footer className="pt-16 md:pt-20 pb-8 md:pb-12 px-6 md:px-12 relative overflow-hidden" style={{ backgroundColor: 'hsl(333 60% 50%)' }}>
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Contact & Social */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 md:mb-16">
            <a
              href="mailto:info@ebonebell.com"
              className="text-lg md:text-xl text-white hover:text-accent transition-colors font-medium"
            >
              info@ebonebell.com
            </a>
            <div className="flex gap-6 text-xs tracking-[0.2em] uppercase text-white/60">
              <a href="https://instagram.com/ebone.bell" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://linkedin.com/in/ebonebell" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://tiktok.com/@ebone.bell" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-12 md:mb-16">
            <img
              src="/logo-white-magenta.png"
              alt="Eboné F. Bell"
              className="h-16 md:h-20 w-auto object-contain opacity-60"
            />
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/20">
            <div className="flex items-center gap-6 text-[10px] md:text-xs font-mono tracking-widest text-white/40 uppercase">
              <span>Washington D.C.</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span>© 2026</span>
            </div>
            
            {/* Solo Credit */}
            <a 
              href="https://solo-landing-one.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
            >
              <span className="text-[10px] font-mono tracking-widest uppercase">
                Design by Solo
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
