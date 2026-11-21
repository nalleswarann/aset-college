import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import asetAeroplane from '../assets/images/aset-aeroplane.png';
import asetAviationStudents from '../assets/images/aset-aviation-students.png';
import skyVideo from '../assets/videos/sky-video-banner.mp4';

interface AsetHeroBannerProps {
  onOpenVirtualTour?: () => void;
  onExploreDepartments?: () => void;
  onOpenAdmissions?: () => void;
}

export const AsetHeroBanner: React.FC<AsetHeroBannerProps> = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Guarantee seamless video playback across mobile & desktop browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback for strict browser autoplay policies
      });
    }
  }, []);

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
  // Starts in the deep distant background above 'A' (scale 0.45),
  // swoops rapidly forward towards the viewer (scaling up 3x),
  // crosses through 'S' and 'E' behind the students, and reaches 'T' on the right
  const planeX = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.48],
    ['18vw', '42vw', '68vw', '90vw']
  );
  const planeY = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.48],
    ['18vh', '24vh', '18vh', '12vh']
  );
  const planeRotate = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.48],
    [3, 8, 2, -4]
  );
  // Back to front scale expansion: starts visible in the background (0.46) and flies forward (1.45)
  const planeScale = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.48],
    [0.46, 0.82, 1.2, 1.45]
  );
  // Fast flight opacity: solid during flight, then seamlessly dissolves into the sky past 'T'
  const planeOpacity = useTransform(
    smoothProgress,
    [0, 0.04, 0.44, 0.58],
    [0.85, 1, 1, 0]
  );

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full h-[130vh] sm:h-[155vh] lg:h-[175vh] bg-black"
    >
      {/* Sticky 100vh Hero Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between bg-black">
        {/* Layer 0: High-Definition Sky Video Background (Pure video background with zero dark blue tint) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/videos/sky-banner-poster.jpg"
            className="w-full h-full object-cover object-center pointer-events-none select-none"
          >
            <source src={skyVideo} type="video/mp4" />
            <source src="/videos/sky-video-banner.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Layer 1: Screen-Wide "ASET" Typography Placed Behind Students */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-[14vh] xs:bottom-[16vh] sm:bottom-0 flex items-end justify-center pointer-events-none select-none z-10 w-full px-0 pb-0"
        >
          <motion.div
            style={{
              y: asettitleY,
              scale: asettitleScale,
              opacity: asettitleOpacity,
            }}
            className="w-full max-w-none text-center will-change-transform flex justify-center items-end"
          >
            {/* Mobile View: Proportional, undistorted monumental ASET typography with natural geometry */}
            <svg
              viewBox="0 0 1600 520"
              className="block sm:hidden w-full h-auto max-h-[22vh] select-none overflow-visible px-2"
              preserveAspectRatio="xMidYBottom meet"
            >
              <defs>
                <linearGradient id="asetWideGradMob" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#E2F0FD" stopOpacity="0.88" />
                </linearGradient>

                <filter id="asetWideShadowMob" x="-15%" y="-15%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000000" floodOpacity="0.45" />
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.3" />
                </filter>
              </defs>

              <text
                x="50%"
                y="84%"
                textAnchor="middle"
                fontFamily="'NewGrotesk', 'San Francisco', 'Neue Montreal', ui-sans-serif, system-ui, sans-serif"
                fontWeight="900"
                fontSize="540"
                fill="url(#asetWideGradMob)"
                stroke="rgba(255, 255, 255, 0.55)"
                strokeWidth="2"
                filter="url(#asetWideShadowMob)"
                style={{
                  letterSpacing: '0.04em',
                }}
              >
                ASET
              </text>
            </svg>

            {/* Desktop View (sm and above): Full-bleed edge-to-edge cinematic stretch */}
            <svg
              viewBox="0 0 2000 650"
              className="hidden sm:block w-full sm:h-[58vh] md:h-[68vh] lg:h-[78vh] xl:h-[84vh] select-none overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="asetWideGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#E2F0FD" stopOpacity="0.88" />
                </linearGradient>

                <filter id="asetWideShadow" x="-15%" y="-15%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="18" stdDeviation="24" floodColor="#000000" floodOpacity="0.45" />
                  <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000000" floodOpacity="0.3" />
                </filter>
              </defs>

              <text
                x="50%"
                y="88%"
                textAnchor="middle"
                textLength="100%"
                lengthAdjust="spacingAndGlyphs"
                fontFamily="'NewGrotesk', 'San Francisco', 'Neue Montreal', ui-sans-serif, system-ui, sans-serif"
                fontWeight="900"
                fontSize="650"
                fill="url(#asetWideGrad)"
                stroke="rgba(255, 255, 255, 0.55)"
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
              className="absolute right-[80%] top-[56%] w-28 sm:w-44 md:w-64 lg:w-80 h-3 bg-gradient-to-l from-white/50 via-sky-200/35 to-transparent rounded-full blur-[2px] pointer-events-none -translate-y-1/2"
            />
            <div
              aria-hidden="true"
              className="absolute right-[78%] top-[68%] w-24 sm:w-36 md:w-52 lg:w-68 h-2.5 bg-gradient-to-l from-white/40 via-sky-200/25 to-transparent rounded-full blur-[2px] pointer-events-none -translate-y-1/2"
            />

            {/* Aeroplane Cutout Image */}
            <img
              src={asetAeroplane}
              alt="ASET Aviation Commercial Aeroplane"
              className="w-[140px] sm:w-[240px] md:w-[310px] lg:w-[380px] xl:w-[440px] h-auto object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.45)]"
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
          className="absolute inset-x-0 bottom-0 z-[30] flex justify-center items-end pointer-events-none select-none will-change-transform px-2 sm:px-4"
        >
          <div className="relative w-full max-w-[440px] sm:max-w-[680px] md:max-w-[780px] lg:max-w-[900px] xl:max-w-[980px] flex justify-center">
            <img
              src={asetAviationStudents}
              alt="ASET College Aviation Students"
              className="w-full h-auto max-h-[58vh] sm:max-h-[70vh] md:max-h-[76vh] lg:max-h-[84vh] xl:max-h-[88vh] object-contain object-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
