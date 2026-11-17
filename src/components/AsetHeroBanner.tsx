import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import asetAeroplane from '../assets/images/aset-aeroplane.png';
import asetAviationStudents from '../assets/images/aset-aviation-students.png';

interface AsetHeroBannerProps {
  onOpenVirtualTour?: () => void;
  onExploreDepartments?: () => void;
  onOpenAdmissions?: () => void;
}

export const AsetHeroBanner: React.FC<AsetHeroBannerProps> = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  // Track scroll progress through this hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Spring-smoothed scroll progress for immediate, buttery-smooth and fast response
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 22,
    mass: 0.5,
  });

  // Scroll Parallax for the screen-wide monumental ASET typography:
  // Starts grounded at the bottom behind the students, spans edge-to-edge with increased height,
  // and dynamically glides upwards beyond the top edge as the user scrolls
  const asettitleY = useTransform(smoothProgress, [0, 0.65, 1], ['0%', '-140%', '-250%']);
  const asettitleScale = useTransform(smoothProgress, [0, 0.6, 1], [1, 1.05, 1.12]);
  const asettitleOpacity = useTransform(smoothProgress, [0, 0.7, 0.95], [1, 0.9, 0]);

  // Subtle slower grounded parallax movement on the student subjects
  const studentsY = useTransform(smoothProgress, [0, 1], ['0%', '8%']);
  const studentsScale = useTransform(smoothProgress, [0, 1], [1, 1.05]);

  // Fast Scroll Parallax for the Aeroplane (Flying from Back to Front):
  // Starts in the deep distant background above 'A' (small scale),
  // swoops rapidly forward towards the viewer (scaling up 4x),
  // crosses through 'S' and 'E' behind the students, and reaches 'T' on the right
  const planeX = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.48],
    ['8vw', '34vw', '64vw', '88vw']
  );
  const planeY = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.48],
    ['24vh', '29vh', '21vh', '12vh']
  );
  const planeRotate = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.48],
    [4, 10, 2, -4]
  );
  // Back to front scale expansion: starts small in the background (0.35) and flies forward (1.45)
  const planeScale = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.48],
    [0.35, 0.74, 1.2, 1.45]
  );
  // Fast flight opacity: solid during flight, then seamlessly dissolves into the sky past 'T'
  const planeOpacity = useTransform(
    smoothProgress,
    [0, 0.04, 0.44, 0.58],
    [0.85, 1, 1, 0]
  );

  // Dark blue gradient overlay deepens smoothly as next section approaches
  const overlayOpacity = useTransform(smoothProgress, [0, 0.8], [0.2, 0.85]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full h-[175vh] bg-[#001428]"
    >
      {/* Sticky 100vh Hero Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Layer 0: Deep Cobalt to Royal Navy Blue Gradient Atmosphere */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#001733] via-[#003B67] to-[#002244]"
        />

        {/* Ambient Radial Glow & Studio Rim Lighting */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,rgba(74,144,194,0.42),rgba(0,38,77,0.72)_55%,rgba(0,18,40,0.96)_100%)] pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -top-1/4 -right-1/4 w-[85vw] h-[85vh] rounded-full bg-gradient-to-br from-sky-400/25 via-blue-600/12 to-transparent blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] rounded-full bg-amber-400/10 blur-3xl pointer-events-none"
        />

        {/* Layer 1: Screen-Wide Edge-to-Edge "ASET" Typography Placed at Bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none select-none z-10 w-full px-0 pb-0"
        >
          <motion.div
            style={{
              y: asettitleY,
              scale: asettitleScale,
              opacity: asettitleOpacity,
            }}
            className="w-full max-w-none text-center will-change-transform flex justify-center items-end"
          >
            {/* Edge-to-edge responsive SVG wordmark for 100% screen-width stretch with increased vertical height */}
            <svg
              viewBox="0 0 2000 650"
              className="w-full h-[45vh] sm:h-[58vh] md:h-[68vh] lg:h-[78vh] xl:h-[84vh] select-none overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="asetWideGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="38%" stopColor="#E6F2FC" />
                  <stop offset="100%" stopColor="#7EBAE8" />
                </linearGradient>

                <filter id="asetWideShadow" x="-15%" y="-15%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="24" stdDeviation="32" floodColor="#000e26" floodOpacity="0.85" />
                  <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#002244" floodOpacity="0.65" />
                </filter>
              </defs>

              <text
                x="50%"
                y="88%"
                textAnchor="middle"
                textLength="100%"
                lengthAdjust="spacingAndGlyphs"
                fontFamily="'Manrope', 'Lausanne', 'TWK Lausanne', 'Plus Jakarta Sans', system-ui, sans-serif"
                fontWeight="900"
                fontSize="650"
                fill="url(#asetWideGrad)"
                stroke="rgba(255, 255, 255, 0.45)"
                strokeWidth="2.5"
                filter="url(#asetWideShadow)"
                style={{
                  letterSpacing: '0.04em',
                }}
              >
                ASET
              </text>
            </svg>
          </motion.div>
        </div>

        {/* Layer 1.5: Commercial Aeroplane Soaring from 'A' across to 'T' in Background */}
        <motion.div
          style={{
            left: planeX,
            top: planeY,
            rotate: planeRotate,
            scale: planeScale,
            opacity: planeOpacity,
          }}
          aria-hidden="true"
          className="absolute z-[15] pointer-events-none select-none will-change-transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative flex items-center">
            {/* Aerodynamic Jet Engine Contrails (Left & Right Engines) */}
            <div
              aria-hidden="true"
              className="absolute right-[80%] top-[56%] w-28 sm:w-44 md:w-64 lg:w-80 h-3 bg-gradient-to-l from-white/40 via-sky-300/25 to-transparent rounded-full blur-[2px] pointer-events-none -translate-y-1/2"
            />
            <div
              aria-hidden="true"
              className="absolute right-[78%] top-[68%] w-24 sm:w-36 md:w-52 lg:w-68 h-2.5 bg-gradient-to-l from-white/30 via-sky-300/18 to-transparent rounded-full blur-[2px] pointer-events-none -translate-y-1/2"
            />

            {/* Subtle Turbine Glow */}
            <div
              aria-hidden="true"
              className="absolute right-[77%] top-[58%] w-6 h-6 rounded-full bg-sky-300/30 blur-sm pointer-events-none"
            />

            {/* Aeroplane Cutout Image */}
            <img
              src={asetAeroplane}
              alt="ASET Aviation Commercial Aeroplane"
              className="w-[180px] sm:w-[240px] md:w-[310px] lg:w-[380px] xl:w-[440px] h-auto object-contain drop-shadow-[0_18px_32px_rgba(0,10,28,0.75)]"
            />
          </div>
        </motion.div>

        {/* Layer 2: Cropped Transparent Student Cutout (Positioned Heroically in Front of Aeroplane & ASET) */}
        <motion.div
          style={{
            y: studentsY,
            scale: studentsScale,
          }}
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-[30] flex justify-center items-end pointer-events-none select-none will-change-transform px-4"
        >
          <div className="relative w-full max-w-[540px] sm:max-w-[680px] md:max-w-[780px] lg:max-w-[900px] xl:max-w-[980px] flex justify-center">
            <img
              src={asetAviationStudents}
              alt="ASET College Aviation Students"
              className="w-full h-auto max-h-[64vh] sm:max-h-[70vh] md:max-h-[76vh] lg:max-h-[84vh] xl:max-h-[88vh] object-contain object-bottom drop-shadow-[0_34px_58px_rgba(0,10,28,0.85)]"
            />
            {/* Subtle soft grounding shadow beneath waist */}
            <div className="absolute inset-x-8 bottom-0 h-14 bg-gradient-to-t from-[#001428] to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Layer 3: Scroll-Linked Contrast Scrim over Stage */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-[#001428]/25 via-transparent to-[#001428]/95 pointer-events-none z-20"
        />

        {/* Layer 4: Peripheral Film Vignette */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,18,40,0.7)_100%)] pointer-events-none z-20"
        />
      </div>
    </section>
  );
};
