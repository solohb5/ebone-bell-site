import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

// Eboné photos - using clean photos without design overlays
const eboneSpeaking = "/speaking-action.jpeg";  // Dynamic presentation shot
const eboneAction = "/contact-smile.jpg";  // Warm, approachable photo

// Her ACTUAL signature talks from her website
const signatureTalks = [
  {
    title: "Empowering Allyship",
    subtitle: "Approaches for Effective Support and Belonging",
    description: "Move beyond performative gestures to practical, everyday allyship. Learn how to show up for colleagues and communities in ways that actually matter — when it's convenient and when it costs something.",
    outcomes: ["Identify concrete actions vs. empty gestures", "Navigate uncomfortable conversations with grace", "Build lasting trust across difference"],
    icon: "01"
  },
  {
    title: "Level Up Leadership",
    subtitle: "Leading with Authenticity and Impact",
    description: "Leadership isn't about titles — it's about how you show up. Discover how to lead with your full self, create psychological safety, and build teams where everyone brings their best.",
    outcomes: ["Lead authentically without code-switching", "Create environments where others thrive", "Turn difference into competitive advantage"],
    icon: "02"
  },
  {
    title: "Building Bridges",
    subtitle: "Navigating Difficult Conversations & Civil Discourse",
    description: "Hard conversations don't have to destroy relationships. Learn the art of staying connected across disagreement — in boardrooms, classrooms, and living rooms.",
    outcomes: ["De-escalate without dismissing", "Find common ground in polarized spaces", "Disagree productively and maintain respect"],
    icon: "03"
  },
  {
    title: "Black History is American History",
    subtitle: "Understanding Our Shared Story",
    description: "Black history isn't a separate chapter — it's woven through every page of American history. This talk connects the dots, challenges assumptions, and reveals the fuller story we all share.",
    outcomes: ["See history through new lenses", "Understand systemic patterns", "Connect past to present action"],
    icon: "04"
  },
  {
    title: "Pride 365",
    subtitle: "LGBTQ+ History and Allyship Year-Round",
    description: "Pride isn't just a month — it's a mindset. From Stonewall to today, understand LGBTQ+ history and learn how to be an ally every day, not just in June.",
    outcomes: ["Know the history that shaped today", "Move from tolerance to celebration", "Support LGBTQ+ colleagues authentically"],
    icon: "05"
  }
];

const additionalTopics = [
  "Anti-Bullying and Inclusivity",
  "Cultivating Supportive Environments",
  "The Practice of Calling In",
  "Custom Engagements & Projects"
];

// 2026 speaking engagements
const speakingCalendar2026 = [
  "WorldPride 2025: Human Rights Conference",
  "Annual CIVSA Conference",
  "Vanderbilt University",
  "Penn State (Multiple Campuses)",
  "SGK Global",
  "ContentSquare",
  "Washington State University",
  "Oregon State University",
  "Bryant University",
  "Bucknell University",
  "Hamilton College",
  "MRI Global",
  "GEODIS",
  "Atwell, LLC",
  "Worcester Polytechnic Institute",
  "Cal Poly Humboldt"
];

export default function Speaking() {
  useEffect(() => {
    document.title = "Speaking — Eboné F. Bell";
  }, []);

  return (
    <div className="flex flex-col bg-background text-foreground">
      
      {/* ═══════════════════════════════════════════════════════════════
          HERO — Speaking Page (Dark, Cinematic)
      ═══════════════════════════════════════════════════════════════ */}
      <section
        className="min-h-[70vh] flex flex-col justify-center px-6 md:px-20 lg:px-32 relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-dark-hero"
        id="main-content"
      >
        {/* Film grain */}
        <div className="film-grain" />

        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <img
            src={eboneSpeaking}
            alt=""
            className="absolute right-0 top-0 h-full w-auto object-cover img-cinematic-bw-soft opacity-40"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
            }}
          />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-5xl relative z-10"
        >
          <motion.div variants={fadeIn} className="mb-6">
            <span className="text-accent text-xs tracking-[0.3em] font-medium uppercase">
              Keynote Speaking
            </span>
          </motion.div>

          <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] mb-8 text-white">
            Keynotes that build rooms<span className="text-primary">.</span>
          </motion.h1>

          <motion.p variants={fadeIn} className="text-lg md:text-xl lg:text-2xl text-white/70 font-light leading-relaxed mb-10 max-w-3xl">
            Each talk is designed to spark connection, broaden perspectives, and equip audiences with practical tools for positive change. Not inspiration that fades by Monday — tools your team will actually use.
          </motion.p>

          <motion.div variants={fadeIn}>
            <a
              href="mailto:info@ebonebell.com?subject=Speaking Inquiry"
              className="inline-flex items-center bg-accent hover:bg-accent/90 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5"
            >
              Discuss Your Event
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute bottom-8 left-6 md:left-20 lg:left-32"
        >
          <div className="flex items-center gap-6 text-[11px] md:text-xs tracking-[0.15em] uppercase font-medium text-white/40">
            <span>5 Signature Talks</span>
            <span className="w-1 h-1 bg-accent/60 rounded-full" />
            <span>CAMPUSPEAK Partner</span>
            <span className="w-1 h-1 bg-accent/60 rounded-full" />
            <span>Corporate & Campus</span>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SIGNATURE TALKS — Premium Accordion Design
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 px-6 md:px-20 lg:px-32 bg-secondary text-secondary-foreground">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeIn} className="mb-6">
            <span className="text-accent text-xs tracking-[0.3em] font-medium uppercase">
              Signature Talks
            </span>
          </motion.div>

          <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.05] mb-8">
            Five keynotes. One mission<span className="text-primary">.</span>
          </motion.h2>

          <motion.p variants={fadeIn} className="text-lg md:text-xl text-secondary-foreground/70 mb-20 max-w-2xl leading-relaxed">
            Each session invites genuine dialogue and real-world strategies that participants can immediately apply.
          </motion.p>

          {/* Premium Talks Accordion */}
          <div className="border-t border-accent/20">
            {signatureTalks.map((talk, index) => (
              <motion.div
                key={talk.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group border-b border-accent/20"
              >
                {/* Main Row - Always Visible */}
                <div className="py-8 md:py-12 cursor-pointer">
                  <div className="flex items-start gap-6 md:gap-10">
                    {/* Large Number */}
                    <span className="text-accent/20 text-6xl md:text-8xl lg:text-[100px] font-serif leading-none -mt-2 md:-mt-4 transition-all duration-500 group-hover:text-accent/40">
                      {talk.icon}
                    </span>
                    
                    {/* Title Block */}
                    <div className="flex-1 pt-2 md:pt-4">
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif transition-colors duration-300 group-hover:text-accent">
                          {talk.title}
                        </h3>
                        <span className="text-accent/60 text-xs tracking-[0.2em] uppercase font-medium md:text-right shrink-0">
                          {talk.subtitle}
                        </span>
                      </div>
                      
                      {/* Expandable Content */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                        <div className="overflow-hidden">
                          <div className="pt-8 md:pt-10 pb-4">
                            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                              {/* Description */}
                              <div>
                                <p className="text-secondary-foreground/80 leading-relaxed text-base md:text-lg">
                                  {talk.description}
                                </p>
                              </div>
                              
                              {/* Outcomes */}
                              <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-accent/60 mb-5 font-medium">
                                  Your Team Walks Away With
                                </p>
                                <ul className="space-y-4">
                                  {talk.outcomes.map((outcome, i) => (
                                    <li key={i} className="flex items-start gap-4 text-secondary-foreground/90">
                                      <span className="w-5 h-px bg-accent mt-3 shrink-0" />
                                      <span className="leading-relaxed">{outcome}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <motion.div 
            variants={fadeIn}
            className="mt-16 md:mt-20 text-center"
          >
            <p className="text-secondary-foreground/50 text-sm tracking-wide mb-6">
              Each talk customized to your audience and objectives
            </p>
            <a
              href="mailto:info@ebonebell.com?subject=Speaking Inquiry"
              className="inline-flex items-center text-accent hover:text-accent/80 text-sm font-medium uppercase tracking-[0.2em] transition-colors group/link"
            >
              Discuss Your Event
              <svg className="ml-3 w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ADDITIONAL TOPICS + CAMPUSPEAK — Premium Gallery Treatment
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-20 lg:px-32 bg-background text-foreground">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Content - Takes 5 columns */}
            <div className="md:col-span-5 md:order-1">
              <span className="text-accent text-xs tracking-[0.3em] font-medium uppercase">
                Beyond the Stage
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mt-4 mb-6 leading-tight">
                Custom programs for your needs<span className="text-primary">.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Beyond signature talks, I offer insight and guidance on a range of timely topics — from fostering safer school climates to nurturing inclusive workplaces.
              </p>
              
              {/* Topics as elegant list */}
              <ul className="space-y-4 mb-10">
                {additionalTopics.map((topic, i) => (
                  <li key={topic} className="flex items-center gap-4 text-foreground group">
                    <span className="w-6 h-px bg-accent/40 group-hover:w-10 group-hover:bg-accent transition-all duration-300" />
                    <span className="text-foreground/90">{topic}</span>
                  </li>
                ))}
              </ul>
              
              {/* CAMPUSPEAK - Refined text treatment */}
              <div className="pt-8 border-t border-accent/15">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/60 mb-2">
                  Official Partner
                </p>
                <p className="text-lg font-serif text-foreground">
                  CAMPUSPEAK
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Specializing in higher education
                </p>
              </div>
            </div>

            {/* Image - Takes 7 columns with premium frame */}
            <div className="md:col-span-7 md:order-2">
              <div className="relative">
                {/* Gold frame offset */}
                <div className="absolute -inset-3 md:-inset-4 border border-accent/30 pointer-events-none" />
                
                {/* Main image */}
                <div className="relative overflow-hidden">
                  <img
                    src={eboneAction}
                    alt="Eboné Bell"
                    className="w-full aspect-[4/5] object-cover object-top"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
                </div>
                
                {/* Corner accent */}
                <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 border-r border-b border-accent/50" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2026 CALENDAR
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-6 md:px-20 lg:px-32 bg-secondary text-secondary-foreground">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeIn} className="text-center mb-16">
            <span className="text-accent text-xs tracking-[0.3em] font-medium uppercase">
              2026 Speaking Calendar
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-4 leading-[1.05]">
              Where I'll be this year<span className="text-primary">.</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeIn} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {speakingCalendar2026.map((engagement) => (
              <div
                key={engagement}
                className="bg-secondary-foreground/5 border border-secondary-foreground/10 p-4 md:p-6 text-center hover:border-accent/40 transition-colors"
              >
                <p className="text-sm md:text-base text-secondary-foreground/85">
                  {engagement}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.p variants={fadeIn} className="text-center text-secondary-foreground/60 mt-12 text-sm">
            Plus many more universities and organizations across the country...
          </motion.p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TESTIMONIALS — Bold Magenta Moment
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-6 md:px-20 lg:px-32" style={{ backgroundColor: 'hsl(333 60% 50%)' }}>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeIn} className="mb-4">
            <span className="text-white/50 text-xs tracking-[0.3em] font-medium uppercase">
              What They Say
            </span>
          </motion.div>

          <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.1] mb-16 text-white">
            Creating intentional change<span className="text-accent">.</span>
          </motion.h2>

          <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 border border-white/20">
              <blockquote className="text-lg md:text-xl font-serif italic leading-relaxed text-white mb-6">
                "Eboné was an exceptional speaker. Her remarkable talent for connecting with individuals at any level is what I admire most. She equipped the audience with practical, real-life tactics for effectively communicating in a manner that commands attention."
              </blockquote>
              <div>
                <p className="font-medium text-white">Collis Robinson</p>
                <p className="text-sm text-white/60">Dean of Student Labor, Berea College</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 border border-white/20">
              <blockquote className="text-lg md:text-xl font-serif italic leading-relaxed text-white mb-6">
                "If you want your teams to connect on a deeper level, if you want your team to be inspired, then you need to have Eboné come speak to them. She is engaging and warm — and handles sensitive topics with authenticity and empathy. She is truly a gifted speaker and motivator."
              </blockquote>
              <div>
                <p className="font-medium text-white">Erin Merritt</p>
                <p className="text-sm text-white/60">Director of Operations, MRI Global</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-6 md:px-20 lg:px-32 bg-background text-foreground">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeIn} className="mb-4">
            <span className="text-accent text-xs tracking-[0.3em] font-medium uppercase">
              Book Eboné
            </span>
          </motion.div>

          <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.05] mb-6">
            Let's build the room together<span className="text-primary">.</span>
          </motion.h2>

          <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you're planning a keynote, a workshop, or a conference — I'd love to hear what you're trying to create.
          </motion.p>

          <motion.div variants={fadeIn}>
            <a
              href="mailto:info@ebonebell.com?subject=Speaking Inquiry"
              className="group relative inline-block bg-accent text-white px-12 py-5 text-base font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 before:absolute before:inset-0 before:border-2 before:border-accent before:translate-x-2 before:translate-y-2 before:-z-10 before:transition-transform before:duration-300 hover:before:translate-x-0 hover:before:translate-y-0"
            >
              Get in Touch →
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
