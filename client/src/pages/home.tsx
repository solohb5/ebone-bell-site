import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Link } from "wouter";

// Eboné hero photos - clean versions without design overlays
const eboneHeroMain = "/hero-main.jpeg";
const eboneSpeaking = "/contact-smile.jpg";  // Clean photo for origin section

// Testimonials
const testimonials = [
  {
    quote: "If you want your teams to connect on a deeper level, if you want your team to be inspired, then you need to have Eboné come speak to them. She is truly a gifted speaker and motivator.",
    name: "Erin Merritt",
    title: "Director of Operations",
    company: "MRI Global"
  },
  {
    quote: "Eboné was an exceptional speaker. Her remarkable talent for connecting with individuals at any level is what I admire most. She equipped the audience with practical, real-life tactics.",
    name: "Collis Robinson",
    title: "Dean of Student Labor",
    company: "Berea College"
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    document.title = "Eboné F. Bell — Keynote Speaker & Movement Builder";
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col" id="main-content">
      
      {/* ═══════════════════════════════════════════════════════════════
          HERO — The Hook
      ═══════════════════════════════════════════════════════════════ */}
      <section className="min-h-screen relative overflow-hidden bg-dark-hero">
        {/* Film grain */}
        <div className="film-grain" />

        {/* Eboné Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="hidden md:block absolute inset-0">
            <img
              src={eboneHeroMain}
              alt="Eboné F. Bell"
              className="absolute right-0 top-0 h-full w-auto object-cover object-top opacity-70"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 100%)',
                maxWidth: '65%',
                filter: 'contrast(1.05) brightness(0.9)',
              }}
            />
          </div>
          <div className="md:hidden absolute inset-0">
            <img
              src={eboneHeroMain}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-top opacity-40"
              style={{
                filter: 'contrast(1.05) brightness(0.7)',
              }}
            />
          </div>
        </motion.div>

        {/* Text protection gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0E0D] via-[#0F0E0D]/80 to-transparent pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-16 pt-28 md:pt-32 pb-12 md:pb-16">
          <div className="flex-1 flex flex-col justify-center max-w-2xl lg:max-w-3xl">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 md:mb-10"
            >
              <span className="text-white/60 text-[11px] md:text-xs tracking-[0.25em] font-semibold uppercase">
                Keynote Speaker · Movement Builder
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[3.5rem] xl:text-6xl leading-[1.1] font-serif text-white mb-10 md:mb-12 tracking-tight"
            >
              Forbes called her one of 5 Black entrepreneurs changing the world<span className="text-primary">.</span><br />
              <span className="text-white/85 text-[1.5rem] sm:text-[2rem] md:text-4xl lg:text-5xl">Then she kept building<span className="text-primary">.</span></span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-start gap-5"
            >
              <a
                href="mailto:info@ebonebell.com"
                className="group relative inline-flex items-center bg-accent hover:bg-accent text-white px-10 md:px-12 py-5 md:py-6 text-sm md:text-base font-bold uppercase tracking-[0.12em] transition-all duration-320 ease-out hover:-translate-y-[4px] hover:scale-[1.02] shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_48px_rgba(212,165,54,0.35),0_8px_24px_rgba(0,0,0,0.18)]"
              >
                Book Eboné
                <svg className="ml-2.5 w-4 h-4 group-hover:translate-x-2 transition-transform duration-320" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link href="/story">
                <a className="group inline-flex items-center text-white/60 hover:text-accent text-sm font-medium transition-all duration-220">
                  <span className="relative">
                    See what she's built
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-280"></span>
                  </span>
                  <span className="ml-1.5 group-hover:translate-x-1 transition-transform duration-280">→</span>
                </a>
              </Link>
            </motion.div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pt-8 md:pt-0"
          >
            <div className="flex items-center gap-6 text-[11px] md:text-xs tracking-[0.15em] uppercase font-medium text-white/45">
              <span>20+ Years</span>
              <span className="w-1 h-1 bg-accent/60 rounded-full" />
              <span>100+ Organizations</span>
              <span className="w-1 h-1 bg-accent/60 rounded-full" />
              <span>WorldPride 2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PRESS LOGOS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 px-6 md:px-20 lg:px-32 bg-background border-b border-border/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <p className="text-center text-[10px] md:text-xs tracking-[0.16em] uppercase text-foreground/35 mb-14 md:mb-16 font-semibold">
            As Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-24">
            <img
              src="/press/forbes-transparent.png"
              alt="Forbes"
              className="h-7 md:h-8 w-auto object-contain opacity-40 hover:opacity-70 hover:-translate-y-1 transition-all duration-320 ease-out"
              style={{ filter: 'brightness(0) saturate(0) invert(0.2)' }}
            />
            <img
              src="/press/nbc-news.png"
              alt="NBC News"
              className="h-10 md:h-12 w-auto object-contain opacity-40 hover:opacity-70 hover:-translate-y-1 transition-all duration-320 ease-out"
              style={{ filter: 'brightness(0) saturate(0) invert(0.2)' }}
            />
            <img
              src="/press/msnbc-logo.png"
              alt="MSNBC"
              className="h-12 md:h-14 w-auto object-contain opacity-40 hover:opacity-70 hover:-translate-y-1 transition-all duration-320 ease-out"
              style={{ filter: 'brightness(0) saturate(0) invert(0.2)' }}
            />
            <img
              src="/press/huffpost-black.png"
              alt="HuffPost"
              className="h-4 md:h-5 w-auto object-contain opacity-40 hover:opacity-70 hover:-translate-y-1 transition-all duration-320 ease-out"
              style={{ filter: 'brightness(0) saturate(0) invert(0.2)' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE PROBLEM
      ═══════════════════════════════════════════════════════════════ */}
      <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-20 lg:px-32 bg-secondary text-secondary-foreground py-20 md:py-32 border-y border-accent/8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl"
        >
          <motion.h2 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.04] max-w-4xl mb-14 tracking-tight">
            Most inclusion efforts fail for the same reason<span className="text-primary">.</span>
          </motion.h2>

          <motion.div variants={fadeIn} className="max-w-3xl space-y-10">
            <p className="text-lg sm:text-xl md:text-2xl text-secondary-foreground/90 font-light leading-[1.6] tracking-[-0.01em]">
              They talk about belonging without building it. They make people feel judged instead of capable.
            </p>

            <div className="py-7 border-l-[3px] border-secondary-foreground/30 pl-7 md:pl-9">
              <p className="text-lg sm:text-xl md:text-2xl text-secondary-foreground font-semibold leading-[1.6] tracking-[-0.01em]">
                Your team doesn't need another lecture. They need someone who's actually built the rooms — and can show them how.
              </p>
            </div>

            <Link href="/speaking">
              <a className="group inline-flex items-center text-accent hover:text-accent text-base font-semibold transition-all duration-220">
                <span className="relative">
                  See Her Keynotes
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-280"></span>
                </span>
                <span className="ml-1.5 group-hover:translate-x-2 transition-transform duration-280">→</span>
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE ORIGIN — Brief
      ═══════════════════════════════════════════════════════════════ */}
      <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-20 lg:px-32 py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: 'hsl(333 45% 92%)' }}>
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={eboneSpeaking}
            alt=""
            className="absolute right-0 top-0 h-full w-auto object-cover"
            style={{
              opacity: 0.08,
              filter: 'grayscale(1) contrast(1.2)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 50%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 50%)',
            }}
          />
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl relative z-10"
        >
          <motion.div variants={fadeIn} className="mb-6">
            <span className="text-foreground/50 text-xs tracking-[0.3em] font-semibold uppercase">
              The Origin
            </span>
          </motion.div>

          <motion.h2 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] mb-10 text-foreground">
            In 2012, she couldn't find a magazine for women like her<span className="text-primary">.</span>
          </motion.h2>

          <motion.p variants={fadeIn} className="text-xl sm:text-2xl md:text-3xl text-foreground/80 font-light leading-relaxed mb-8 max-w-3xl">
            So she founded Tagg Magazine — the first national publication for queer women.
          </motion.p>

          <motion.p variants={fadeIn} className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl">
            She could have waited for someone else. Instead, she went home and started building. She's been building ever since.
          </motion.p>

          <motion.div variants={fadeIn}>
            <Link href="/story">
              <a className="inline-flex items-center text-accent text-base font-medium hover:translate-x-2 transition-transform duration-300">
                Read the Full Story →
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CLIENT LOGOS — Premium Trust Bar
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-20 lg:px-32 bg-background text-foreground">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <p className="text-center text-[10px] md:text-xs tracking-[0.2em] uppercase text-foreground/40 mb-12 md:mb-16 font-medium">
            Trusted By Industry Leaders
          </p>

          {/* Logo Grid - Real SVG Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center mb-16">
            <img src="/logos/microsoft.svg" alt="Microsoft" className="h-6 md:h-7 w-auto opacity-30 hover:opacity-60 transition-opacity duration-300" style={{ filter: 'brightness(0)' }} />
            <img src="/logos/deloitte.svg" alt="Deloitte" className="h-6 md:h-7 w-auto opacity-30 hover:opacity-60 transition-opacity duration-300" style={{ filter: 'brightness(0)' }} />
            <img src="/logos/accenture.svg" alt="Accenture" className="h-5 md:h-6 w-auto opacity-30 hover:opacity-60 transition-opacity duration-300" style={{ filter: 'brightness(0)' }} />
            <img src="/logos/att.svg" alt="AT&T" className="h-7 md:h-8 w-auto opacity-30 hover:opacity-60 transition-opacity duration-300" style={{ filter: 'brightness(0)' }} />
            <img src="/logos/edward-jones.svg" alt="Edward Jones" className="h-5 md:h-6 w-auto opacity-30 hover:opacity-60 transition-opacity duration-300" style={{ filter: 'brightness(0)' }} />
            <img src="/logos/charlotte-tilbury.svg" alt="Charlotte Tilbury" className="h-4 md:h-5 w-auto opacity-30 hover:opacity-60 transition-opacity duration-300" style={{ filter: 'brightness(0)' }} />
          </div>

          {/* Universities */}
          <div className="pt-10 border-t border-border/30">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-foreground/35">
              <span className="text-foreground/60 font-semibold">100+ Universities</span>
              <span className="hidden md:inline text-foreground/20">|</span>
              <span>Vanderbilt</span>
              <span className="text-foreground/20">·</span>
              <span>Penn State</span>
              <span className="text-foreground/20">·</span>
              <span>Kent State</span>
              <span className="text-foreground/20">·</span>
              <span>Rochester Institute of Technology</span>
              <span className="text-foreground/20">·</span>
              <span className="text-foreground/50">and more</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 px-6 md:px-20 lg:px-32 bg-secondary text-secondary-foreground">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div variants={fadeIn} className="mb-6">
            <span className="text-secondary-foreground/40 text-[11px] md:text-xs tracking-[0.16em] font-semibold uppercase">
              What They Say
            </span>
          </motion.div>

          <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.06] mb-20 tracking-tight">
            The impact speaks for itself<span className="text-primary">.</span>
          </motion.h2>

          {/* Testimonial */}
          <div className="relative min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic leading-[1.5] text-secondary-foreground mb-10 tracking-[-0.01em]">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="space-y-1">
                  <p className="font-bold text-secondary-foreground text-base">{testimonials[currentTestimonial].name}</p>
                  <p className="text-secondary-foreground/70 text-sm font-medium">{testimonials[currentTestimonial].title}, {testimonials[currentTestimonial].company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`transition-all duration-320 ${
                  index === currentTestimonial
                    ? 'bg-accent w-10 h-2'
                    : 'bg-secondary-foreground/20 hover:bg-secondary-foreground/40 w-2 h-2'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 md:px-20 lg:px-32 bg-background text-foreground py-20 md:py-32">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.div variants={fadeIn} className="mb-7">
            <span className="text-foreground/40 text-[11px] md:text-xs tracking-[0.14em] font-semibold uppercase">
              Ready?
            </span>
          </motion.div>

          <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.04] mb-7 tracking-tight">
            Let's create belonging<span className="text-primary">.</span>
          </motion.h2>

          <motion.p variants={fadeIn} className="text-lg md:text-xl text-foreground/60 mb-12 max-w-2xl leading-[1.6]">
            Eboné is booking keynotes, workshops, and facilitated sessions for 2026.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-start gap-7">
            <a
              href="mailto:info@ebonebell.com"
              className="group relative inline-flex items-center bg-accent text-white px-12 py-6 text-base font-bold uppercase tracking-[0.12em] transition-all duration-320 ease-out hover:-translate-y-[4px] hover:scale-[1.02] shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_48px_rgba(212,165,54,0.35),0_8px_24px_rgba(0,0,0,0.18)] before:absolute before:inset-0 before:border-[2px] before:border-accent/20 before:translate-x-1.5 before:translate-y-1.5 before:-z-10 before:transition-all before:duration-320 hover:before:translate-x-0 hover:before:translate-y-0"
            >
              Book Eboné
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-320" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link href="/speaking">
              <a className="group inline-flex items-center text-foreground hover:text-foreground text-base font-semibold transition-all duration-220 py-[1.125rem]">
                <span className="relative">
                  See Her Keynotes
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-280"></span>
                </span>
                <span className="ml-2 group-hover:translate-x-2 transition-transform duration-280">→</span>
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
