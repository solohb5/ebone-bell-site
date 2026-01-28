// Check for reduced motion preference
const prefersReducedMotion = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false;

// Premium easing curves (cubic-bezier)
export const premiumEase = [0.16, 1, 0.3, 1] as const; // Smooth deceleration
export const sharpEase = [0.4, 0, 0.2, 1] as const; // Material sharp

export const fadeIn = prefersReducedMotion
  ? {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 }
    }
  : {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1, ease: premiumEase }
    };

export const fadeInUp = prefersReducedMotion
  ? {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 }
    }
  : {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: premiumEase }
    };

export const fadeInLeft = prefersReducedMotion
  ? {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 }
    }
  : {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8, ease: premiumEase }
    };

export const fadeInRight = prefersReducedMotion
  ? {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 }
    }
  : {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8, ease: premiumEase }
    };

export const scaleIn = prefersReducedMotion
  ? {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 }
    }
  : {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.6, ease: premiumEase }
    };

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export const staggerFast = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

// For text reveal effects
export const textReveal = prefersReducedMotion
  ? {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: { duration: 0.3 }
      }
    }
  : {
      initial: { opacity: 0, y: 100, skewY: 7 },
      animate: {
        opacity: 1,
        y: 0,
        skewY: 0,
        transition: { duration: 1.2, ease: premiumEase }
      }
    };

// For images
export const imageReveal = prefersReducedMotion
  ? {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: { duration: 0.3 }
      }
    }
  : {
      initial: { opacity: 0, scale: 1.1 },
      animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1.0, ease: premiumEase }
      }
    };
