import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

// Modern luxury easing curve (Apple / Linear / Stripe style)
export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

/* =========================================================================
   SCROLL HEADING
   High-impact cinematic text reveal: upward glide with pure GPU translation.
   No laggy blur filter repaints — 120fps hardware-accelerated.
   ========================================================================= */
interface ScrollHeadingProps extends HTMLMotionProps<'h2'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  delay?: number;
  yOffset?: number;
}

export const ScrollHeading: React.FC<ScrollHeadingProps> = ({
  as = 'h2',
  children,
  className = '',
  delay = 0.05,
  yOffset = 24,
  ...props
}) => {
  const Component = motion[as] as typeof motion.h2;

  return (
    <Component
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
      transition={{
        duration: 0.78,
        delay,
        ease: LUXURY_EASE,
      }}
      style={{
        willChange: 'transform, opacity',
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

/* =========================================================================
   SCROLL PARAGRAPH
   Gentle, readable paragraph fade-and-glide with luxury easing.
   Pure GPU acceleration without CPU rasterization spikes.
   ========================================================================= */
interface ScrollParagraphProps extends HTMLMotionProps<'p'> {
  delay?: number;
  yOffset?: number;
}

export const ScrollParagraph: React.FC<ScrollParagraphProps> = ({
  children,
  className = '',
  delay = 0.16,
  yOffset = 18,
  ...props
}) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
      transition={{
        duration: 0.72,
        delay,
        ease: LUXURY_EASE,
      }}
      style={{
        willChange: 'transform, opacity',
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.p>
  );
};

/* =========================================================================
   SCROLL EYEBROW
   Category tag, pill badge or index indicator that leads the eye downward.
   ========================================================================= */
interface ScrollEyebrowProps extends HTMLMotionProps<'div'> {
  delay?: number;
}

export const ScrollEyebrow: React.FC<ScrollEyebrowProps> = ({
  children,
  className = '',
  delay = 0.04,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: LUXURY_EASE,
      }}
      style={{
        willChange: 'transform, opacity',
        transform: 'translate3d(0, 0, 0)',
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/* =========================================================================
   SCROLL ACTION / BUTTON
   Smooth action reveal following title and description flow.
   ========================================================================= */
interface ScrollActionProps extends HTMLMotionProps<'div'> {
  delay?: number;
}

export const ScrollAction: React.FC<ScrollActionProps> = ({
  children,
  className = '',
  delay = 0.22,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: LUXURY_EASE,
      }}
      style={{
        willChange: 'transform, opacity',
        transform: 'translate3d(0, 0, 0)',
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/* =========================================================================
   SCROLL REVEAL (Container Wrapper)
   Smooth container reveal for cards, grids, and media wrappers.
   ========================================================================= */
interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  delay?: number;
  yOffset?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0.1,
  yOffset = 22,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -30px 0px' }}
      transition={{
        duration: 0.75,
        delay,
        ease: LUXURY_EASE,
      }}
      style={{
        willChange: 'transform, opacity',
        transform: 'translate3d(0, 0, 0)',
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/* =========================================================================
   SCROLL WORD REVEAL
   Ultra-modern kinetic word reveal: animates words in a subtle wave.
   Used for high-impact editorial headings.
   ========================================================================= */
interface ScrollWordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div';
}

export const ScrollWordReveal: React.FC<ScrollWordRevealProps> = ({
  text,
  className = '',
  delay = 0.05,
  as = 'h2',
}) => {
  const words = text.split(' ');
  const Component = motion[as] as typeof motion.h2;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.035,
            delayChildren: delay,
          },
        },
      }}
      className={`inline-block ${className}`}
    >
      {words.map((word, idx) => (
        <span key={`${word}-${idx}`} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: '0%',
                opacity: 1,
                transition: {
                  duration: 0.7,
                  ease: LUXURY_EASE,
                },
              },
            }}
            style={{ willChange: 'transform, opacity' }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};
