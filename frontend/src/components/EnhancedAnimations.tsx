import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

// Fade in animation wrapper
export const FadeIn = ({ children, delay = 0, duration = 0.5 }: { 
  children: ReactNode; 
  delay?: number; 
  duration?: number; 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

// Scale in animation for cards
export const ScaleIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.3, delay }}
  >
    {children}
  </motion.div>
);

// Slide in from left
export const SlideInLeft = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

// Slide in from right
export const SlideInRight = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

// Stagger children animation
export const StaggerContainer = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children }: { children: ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
  >
    {children}
  </motion.div>
);

// Floating animation for icons
export const FloatingIcon = ({ children }: { children: ReactNode }) => (
  <motion.div
    animate={{
      y: [-10, 10, -10],
      rotate: [-5, 5, -5]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

// Page transition wrapper
export const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

// Modal animation
export const ModalAnimation = ({ children, isOpen }: { children: ReactNode; isOpen: boolean }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

// Pulse animation for notifications
export const PulseNotification = ({ children }: { children: ReactNode }) => (
  <motion.div
    animate={{
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);
