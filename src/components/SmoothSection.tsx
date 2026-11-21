import React from 'react';
import { motion } from 'motion/react';
import { LUXURY_EASE } from './ScrollTypography';

interface SmoothSectionProps {
  children: React.ReactNode;
  delay?: number;
}

export const SmoothSection: React.FC<SmoothSectionProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{
        duration: 0.8,
        delay,
        ease: LUXURY_EASE,
      }}
      style={{
        willChange: 'transform, opacity',
        transform: 'translate3d(0, 0, 0)',
      }}
    >
      {children}
    </motion.div>
  );
};

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  x = 0,
  y = 24,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.68,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
