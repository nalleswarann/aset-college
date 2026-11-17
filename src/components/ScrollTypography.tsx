import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

// Modern luxury easing curve (Apple / Linear / Peachweb style)
export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

/* =========================================================================
   SCROLL HEADING
   High-impact cinematic text reveal: upward glide with optical lens focus.
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
  yOffset = 28,
  ...props
}) => {
  const Component = motion[as] as typeof motion.h2;

  return (
    <Component
      initial={{ opacity: 0, y: yOffset, filter: 'blur(7px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -30px 0px' }}
      transition={{
        duration: 0.85,
        delay,
        ease: LUXURY_EASE,
      }}
      style={{ willChange: 'transform, opacity, filter' }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

/* =========================================================================
   SCROLL PARAGRAPH
   Gentle, readable paragraph fade-and-glide with subtle lens focus.
   ========================================================================= */
interface ScrollParagraphProps extends HTMLMotionProps<'p'> {
  delay?: number;
  yOffset?: number;
}

export const ScrollParagraph: React.FC<ScrollParagraphProps> = ({
  children,
  className = '',
  delay = 0.16,
  yOffset = 20,
  ...props
}) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: yOffset, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -30px 0px' }}
      transition={{
        duration: 0.78,
        delay,
        ease: LUXURY_EASE,
      }}
      style={{ willChange: 'transform, opacity, filter' }}
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
  delay = 0,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -30px 0px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: LUXURY_EASE,
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
  delay = 0.24,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -30px 0px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: LUXURY_EASE,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
