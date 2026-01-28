import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 1: Quote fades in (0 - 0.8s)
    const timer1 = setTimeout(() => setPhase(1), 100);
    
    // Phase 2: Logo fades in (0.8s - 1.4s)
    const timer2 = setTimeout(() => setPhase(2), 800);
    
    // Phase 3: Hold (1.4s - 2.5s) - already at phase 2
    
    // Phase 4: Fade out and complete (2.5s - 3.0s)
    const timer3 = setTimeout(() => setPhase(3), 2500);
    const timer4 = setTimeout(() => onComplete(), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  const handleSkip = () => {
    onComplete();
  };

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onClick={handleSkip}
          className="fixed inset-0 z-[100] bg-[#1A1815] flex flex-col items-center justify-center cursor-pointer"
        >
          {/* Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-serif italic text-lg sm:text-xl md:text-2xl lg:text-[2.5rem] text-[#F5F2ED] text-center max-w-3xl px-6 sm:px-8 leading-relaxed"
          >
            "Systems beat motivation<span className="text-accent">.</span> Every time<span className="text-accent">.</span>"
          </motion.p>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 2 ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-8 sm:mt-10"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#F5F2ED]">
              TR<span className="text-accent">.</span>
            </span>
          </motion.div>

          {/* Skip hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 2 ? 0.3 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            className="absolute bottom-6 sm:bottom-8 text-[10px] sm:text-xs font-mono tracking-widest uppercase text-[#F5F2ED]/30"
          >
            Tap to skip
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

