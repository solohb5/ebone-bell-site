import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, premiumEase } from "@/lib/animations";
import { Link } from "wouter";

// Eboné photos
const eboneHero = "/hero-main.jpeg";
const eboneAbout = "/workshop-group.jpg";  // Clean workshop presentation shot
const eboneSpeaking = "/speaking-stage.jpeg";

export default function Story() {
  useEffect(() => {
    document.title = "Story — Eboné F. Bell";
  }, []);

  return (
    <div className="flex flex-col bg-background text-foreground">
      
      {/* ═══════════════════════════════════════════════════════════════
          HERO — Who She Is (Dark, Cinematic)
      ═══════════════════════════════════════════════════════════════ */}
      <section 
        className="min-h-[80vh] flex flex-col justify-center px-6 md:px-20 lg:px-32 relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0F0E0D 0%, #151210 50%, #1A1815 100%)'
        }}
      >
        {/* Film grain */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '150px 150px'
          }}
        />

        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <img
            src={eboneAbout}
            alt=""
            className="absolute right-0 top-0 h-full w-auto object-cover"
            style={{
              opacity: 0.4,
              filter: 'grayscale(1) contrast(1.2) brightness(0.7)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
            }}
          />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl relative z-10"
        >
          <motion.div variants={fadeIn} className="mb-6">
            <span className="text-accent text-xs tracking-[0.3em] font-medium uppercase">
              The Story
            </span>
          </motion.div>

          <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] mb-8 text-white">
            Builder. Storyteller. Bridge-maker<span className="text-primary">.</span>
          </motion.h1>

          <motion.p variants={fadeIn} className="text-lg md:text-xl lg:text-2xl text-white/70 font-light leading-relaxed max-w-3xl">
            Eboné F. Bell is a visionary international speaker, facilitator, and trailblazer illuminating the realms of belonging, allyship, and leadership.
          </motion.p>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute bottom-8 left-6 md:left-20 lg:left-32"
        >
          <div className="flex items-center gap-6 text-[11px] md:text-xs tracking-[0.15em] uppercase font-medium text-white/40">
            <span>Founder, Tagg Magazine</span>
            <span className="w-1 h-1 bg-accent/60 rounded-full" />
            <span>Forbes Featured</span>
            <span className="w-1 h-1 bg-accent/60 rounded-full" />
            <span>20+ Years Building</span>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE ORIGIN — What Started It All
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-6 md:px-20 lg:px-32 bg-secondary text-secondary-foreground">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: The Origin */}
            <div>
              <motion.div variants={fadeIn} className="mb-4">
                <span className="text-accent text-xs tracking-[0.3em] font-medium uppercase">
                  2012
                </span>
              </motion.div>

              <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.1] mb-8">
                She couldn't find a magazine for women like her<span className="text-primary">.</span>
              </motion.h2>

              <motion.div variants={fadeIn} className="space-y-6 text-lg text-secondary-foreground/80 leading-relaxed">
                <p>
                  So she founded Tagg Magazine — the first national publication for queer women. An award-winning print publication and media company serving LGBTQ women across the nation.
                </p>
                <p className="text-secondary-foreground font-medium">
                  She could have complained. She could have waited for someone else to fix it. Instead, she went home and started building.
                </p>
              </motion.div>
            </div>

            {/* Right: What Came Next */}
            <div>
              <motion.div variants={fadeIn} className="mb-4">
                <span className="text-accent text-xs tracking-[0.3em] font-medium uppercase">
                  Then She Kept Building
                </span>
              </motion.div>

              <motion.div variants={fadeIn} className="space-y-6 text-lg text-secondary-foreground/80 leading-relaxed">
                <p>
                  A magazine wasn't enough. She saw young queer women of color who couldn't afford college. So she established the <span className="text-secondary-foreground font-medium">Tagg Scholarship Fund</span> — a crucial resource for pursuing higher education.
                </p>
                <p>
                  She saw LGBTQ students at University of Maryland College Park with nowhere to gather. So she initiated a student group for LGBTQ people of color that's still running today.
                </p>
                <p className="text-secondary-foreground font-serif text-xl italic">
                  This is who Eboné is: someone who sees what's missing and builds it.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE MISSION — In Her Words (Magenta Moment)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-6 md:px-20 lg:px-32 relative overflow-hidden" style={{ backgroundColor: 'hsl(333 60% 50%)' }}>
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <img
            src={eboneSpeaking}
            alt=""
            className="absolute right-0 top-0 h-full w-auto object-cover"
            style={{
              opacity: 0.2,
              filter: 'grayscale(1) contrast(1.2)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 50%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 50%)',
            }}
          />
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeIn} className="mb-8">
            <span className="text-6xl md:text-8xl text-accent/80 font-serif">"</span>
          </motion.div>

          <motion.blockquote variants={fadeIn} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.2] mb-8 text-white">
            My mission is clear: to make a lasting impact on the world<span className="text-accent">.</span>
          </motion.blockquote>

          <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            — Eboné F. Bell
          </motion.p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE WORK — What She Does Now
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-6 md:px-20 lg:px-32 bg-background text-foreground">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeIn} className="mb-4">
            <span className="text-accent text-xs tracking-[0.3em] font-medium uppercase">
              Today
            </span>
          </motion.div>

          <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.1] mb-12 max-w-3xl">
            A dynamic keynote speaker inspiring conversations on leadership, allyship, and cultivating belonging<span className="text-primary">.</span>
          </motion.h2>

          <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Speaking */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif text-foreground">Corporate & Campus</h3>
              <p className="text-muted-foreground leading-relaxed">
                Eboné has delivered impactful presentations at esteemed institutions including Microsoft, Accenture, Charlotte Tilbury, Deloitte, VistaPrint, Edward Jones, Vanderbilt University, Kent State University, Penn State, and Rochester Institute of Technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond lecture halls and corporations, she's actively engaged in middle schools and high schools nationwide, focusing on anti-bullying initiatives and workshops.
              </p>
            </div>

            {/* Her Approach */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif text-foreground">Her Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Eboné is celebrated for her warm energy and unwavering transparency. Fearless in tackling tough conversations, she invites audiences to explore their presence in the world.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Approachable both on and off-stage, her humor adds an engaging touch, while her dedication to fostering connections solidifies her status as a dynamic community leader and unforgettable speaker.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          RECOGNITION — The Track Record
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-6 md:px-20 lg:px-32 bg-secondary text-secondary-foreground">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeIn} className="mb-4">
            <span className="text-accent text-xs tracking-[0.3em] font-medium uppercase">
              Recognition
            </span>
          </motion.div>

          <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.1] mb-16 text-secondary-foreground">
            The track record speaks<span className="text-primary">.</span>
          </motion.h2>

          <motion.div variants={fadeIn} className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
            {/* Forbes */}
            <div className="border-l-2 border-accent/30 pl-6">
              <p className="text-sm text-secondary-foreground/60 uppercase tracking-wider mb-3">Forbes Magazine</p>
              <p className="text-xl md:text-2xl font-serif text-secondary-foreground leading-tight">
                "Inspiring Black Entrepreneur Changing Our World"
              </p>
            </div>

            {/* Rainbow History */}
            <div className="border-l-2 border-accent/30 pl-6">
              <p className="text-sm text-secondary-foreground/60 uppercase tracking-wider mb-3">Rainbow History Project</p>
              <p className="text-xl md:text-2xl font-serif text-secondary-foreground leading-tight">
                Community Pioneer Award
              </p>
              <p className="text-sm text-secondary-foreground/60 mt-2">15+ years of service</p>
            </div>

            {/* WorldPride */}
            <div className="border-l-2 border-accent/30 pl-6">
              <p className="text-sm text-secondary-foreground/60 uppercase tracking-wider mb-3">WorldPride 2025</p>
              <p className="text-xl md:text-2xl font-serif text-secondary-foreground leading-tight">
                Human Rights Conference Speaker
              </p>
            </div>
          </motion.div>

          {/* Press Logos */}
          <motion.div variants={fadeIn}>
            <p className="text-sm text-secondary-foreground/50 uppercase tracking-wider mb-8 text-center">
              As Featured In
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
              <img src="/press/forbes-logo.png" alt="Forbes" className="h-10 md:h-12 w-auto object-contain invert opacity-60 hover:opacity-100 transition-all duration-300" />
              <img src="/press/nbc-news.png" alt="NBC News" className="h-10 md:h-12 w-auto object-contain invert opacity-60 hover:opacity-100 transition-all duration-300" />
              <img src="/press/msnbc-logo.png" alt="MSNBC" className="h-10 md:h-12 w-auto object-contain invert opacity-60 hover:opacity-100 transition-all duration-300" />
              <img src="/press/huffpost-black.png" alt="HuffPost" className="h-10 md:h-12 w-auto object-contain invert opacity-60 hover:opacity-100 transition-all duration-300" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA — Book Her
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-6 md:px-20 lg:px-32 bg-background text-foreground">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.1] mb-6">
            Ready to bring Eboné to your event<span className="text-primary">?</span>
          </motion.h2>

          <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you're planning a keynote, a workshop, or a conference — let's talk about what you're trying to create.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:info@ebonebell.com"
              className="group relative inline-block bg-accent text-white px-10 py-4 text-base font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 before:absolute before:inset-0 before:border-2 before:border-accent before:translate-x-2 before:translate-y-2 before:-z-10 before:transition-transform before:duration-300 hover:before:translate-x-0 hover:before:translate-y-0"
            >
              Book Eboné →
            </a>
            <Link href="/speaking">
              <a className="inline-flex items-center text-accent text-base font-medium hover:translate-x-2 transition-transform duration-300">
                See Her Keynotes →
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
