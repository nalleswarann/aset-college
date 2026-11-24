import React, { useState, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from 'motion/react';
import { ArrowRight, Plane, ShieldCheck, UtensilsCrossed, Sparkles } from 'lucide-react';

import aeroplaneCutout from '../assets/images/mission-aeroplane-cutout.png';
import aeroplaneFull from '../assets/images/mission-aeroplane-full.jpg';
import fireEngineCutout from '../assets/images/vision-fire-engine-pump-cutout.png';
import hotelRestaurantImg from '../assets/images/values-hotel-restaurant.jpg';

interface MissionVisionValuesSectionProps {
  onOpenAdmissions?: () => void;
  onExploreDepartments?: () => void;
}

interface PillarData {
  id: string;
  stepNumber: string;
  tabLabel: string;
  line1: string;
  line2: string;
  line3: string;
  deptFocus: string;
  description: string;
  badge: string;
  buttons: {
    label: string;
    href?: string;
    onClick?: () => void;
  }[];
}

const PILLARS: PillarData[] = [
  {
    id: 'mission',
    stepNumber: '01',
    tabLabel: 'OUR MISSION',
    line1: 'Your wings.',
    line2: 'Our mission.',
    line3: 'Welcome to ASET.',
    deptFocus: 'Commercial Aviation, Pilot Training & Aerospace',
    description:
      'Empowering aspiring commercial pilots and aerospace leaders through DGCA-aligned simulator labs, airline ground schools, and accelerated global cadet pathways in Chennai and Coimbatore.',
    badge: 'DGCA & ICAO Standards',
    buttons: [
      { label: 'Pilot Training Pathways', href: '#departments' },
      { label: 'Aviation Syllabus', href: '#departments' },
    ],
  },
  {
    id: 'vision',
    stepNumber: '02',
    tabLabel: 'OUR VISION',
    line1: 'Zero harm.',
    line2: 'Our vision.',
    line3: 'Industrial Safety.',
    deptFocus: 'Fire & Industrial Safety Engineering',
    description:
      'Pioneering zero-compromise industrial safety protocols, live chemical firefighting drill grounds, and international NEBOSH & IOSH certifications protecting lives across heavy industries worldwide.',
    badge: 'NEBOSH & IOSH Accredited',
    buttons: [
      { label: 'Safety Engineering Labs', href: '#departments' },
      { label: 'Live Drill Grounds', href: '#departments' },
    ],
  },
  {
    id: 'values',
    stepNumber: '03',
    tabLabel: 'OUR VALUES',
    line1: 'World-class.',
    line2: 'Our values.',
    line3: 'Hospitality.',
    deptFocus: 'School of Hotel Management & Catering Science',
    description:
      'Cultivating executive hospitality excellence, international culinary mastery, and five-star luxury guest management standards, launching graduates into premier global resort and airline brands.',
    badge: '5-Star Industry Standards',
    buttons: [
      { label: 'Hotel Management', href: '#departments' },
      { label: 'Culinary Arts Track', href: '#departments' },
    ],
  },
];

export const MissionVisionValuesSection: React.FC<MissionVisionValuesSectionProps> = ({
  onOpenAdmissions,
  onExploreDepartments,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  // High-performance pinned scroll tracking across 300vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Silky smooth spring physics for 60-120fps hardware acceleration
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    mass: 0.6,
    restDelta: 0.001,
  });

  // Track scroll progress to switch active stage smoothly
  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    if (latest < 0.33) {
      setActiveStage(0);
    } else if (latest < 0.66) {
      setActiveStage(1);
    } else {
      setActiveStage(2);
    }
  });

  // Smooth continuous zoom-in scales for each vehicle/subject
  // Stage 1: Aeroplane zoom-in (from 0.88 to 1.15)
  const planeScale = useTransform(smoothProgress, [0.0, 0.33], [0.88, 1.15]);
  const planeY = useTransform(smoothProgress, [0.0, 0.33], [40, -25]);
  const planeX = useTransform(smoothProgress, [0.0, 0.33], [30, -10]);
  const planeOpacity = useTransform(smoothProgress, [0.0, 0.04, 0.28, 0.35], [0.85, 1, 1, 0]);

  // Stage 2: Fire Engine zoom-in (from 0.85 to 1.12)
  const fireScale = useTransform(smoothProgress, [0.33, 0.66], [0.85, 1.12]);
  const fireY = useTransform(smoothProgress, [0.33, 0.66], [50, -15]);
  const fireX = useTransform(smoothProgress, [0.33, 0.66], [-20, 15]);
  const fireOpacity = useTransform(smoothProgress, [0.31, 0.38, 0.61, 0.68], [0, 1, 1, 0]);

  // Stage 3: Hotel Restaurant zoom-in (from 0.90 to 1.10)
  const hotelScale = useTransform(smoothProgress, [0.66, 1.0], [0.90, 1.10]);
  const hotelY = useTransform(smoothProgress, [0.66, 1.0], [45, 0]);
  const hotelOpacity = useTransform(smoothProgress, [0.64, 0.71, 0.98, 1.0], [0, 1, 1, 1]);

  // Scroll directly to a specific stage when tab pill is clicked
  const scrollToStage = (stageIdx: number) => {
    if (!containerRef.current) return;
    const targetY =
      containerRef.current.offsetTop +
      (stageIdx / 2.7) * (containerRef.current.offsetHeight - window.innerHeight);
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const currentPillar = PILLARS[activeStage];

  return (
    <div
      ref={containerRef}
      id="mission-vision-values"
      className="relative w-full h-[300vh] bg-[#faf8f5] text-stone-900 font-serif font-semibold select-none border-b border-stone-200/90"
    >
      {/* ========================================================= */}
      {/* STICKY 100VH VIEWPORT CANVAS: Pinned during scroll scrub  */}
      {/* ========================================================= */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 xl:px-20 z-10">

        {/* ------------------------------------------------------- */}
        {/* BACKGROUND LAYER: Radiating Contour Curves (Emons Style)*/}
        {/* ------------------------------------------------------- */}
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
        >
          {/* Subtle warm website canvas */}
          <div className="absolute inset-0 bg-[#faf8f5]" />

          {/* Radiating contour orbital arcs matching the Emons reference image */}
          <svg
            className="absolute top-0 right-0 w-[80vw] h-[80vh] max-w-[1100px] max-h-[1000px] text-orange-500/20 translate-x-1/4 -translate-y-1/4 pointer-events-none"
            viewBox="0 0 1000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="500" cy="500" r="280" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
            <circle cx="500" cy="500" r="380" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="500" cy="500" r="490" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="500" cy="500" r="620" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 6" />
            <circle cx="500" cy="500" r="760" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          {/* Ambient soft glow behind hero subject */}
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-400/10 via-rose-400/5 to-transparent blur-3xl" />
        </div>

        {/* ------------------------------------------------------- */}
        {/* TOP BAR: Section Eyebrow & Stage Tabs Navigation        */}
        {/* ------------------------------------------------------- */}
        <div className="relative z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1 sm:pt-2">
          {/* Section Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-orange-500 to-rose-600 shadow-[0_0_8px_#ea580c]" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-orange-800">
              Institutional Foundations
            </span>
            <span className="text-stone-300">|</span>
            <span className="text-xs font-mono text-stone-500">
              ASET College of Science &amp; Technology
            </span>
          </div>

          {/* Stage Tabs (01 OUR MISSION | 02 OUR VISION | 03 OUR VALUES) */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-900/5 backdrop-blur-md rounded-full border border-stone-200/90 shadow-2xs self-start sm:self-auto">
            {PILLARS.map((pillar, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => scrollToStage(idx)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 cursor-pointer ${isActive ? 'text-white' : 'text-stone-600 hover:text-stone-950'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="pillar-active-pill"
                      className="absolute inset-0 bg-stone-950 rounded-full shadow-md z-0"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span className="text-[10px] opacity-75">{pillar.stepNumber}</span>
                    <span>{pillar.tabLabel}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------- */}
        {/* CENTER / HERO VISUAL LAYER: Elevated 3D Vehicle in Zoom */}
        {/* Exactly matching Emons reference upper-right position   */}
        {/* ------------------------------------------------------- */}
        <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-end overflow-hidden pr-4 sm:pr-10 lg:pr-16 xl:pr-24">

          {/* VEHICLE 1: AEROPLANE (OUR MISSION) */}
          <motion.div
            style={{
              scale: planeScale,
              y: planeY,
              x: planeX,
              opacity: planeOpacity,
            }}
            className="absolute top-[8%] sm:top-[12%] lg:top-[10%] right-[2%] sm:right-[5%] lg:right-[8%] w-[320px] sm:w-[480px] md:w-[580px] lg:w-[680px] xl:w-[760px] pointer-events-none will-change-transform"
          >
            {/* Cutout Aeroplane with smooth drop shadow */}
            <div className="relative">
              <img
                src={aeroplaneCutout}
                alt="Commercial Passenger Aeroplane in Flight - ASET Pilot Training"
                className="w-full h-auto object-contain select-none filter drop-shadow-[0_28px_45px_rgba(0,0,0,0.35)]"
              />
              {/* Subtle dynamic engine thrust glow */}
              <div
                aria-hidden="true"
                className="absolute bottom-1/4 left-1/3 w-32 h-16 bg-orange-500/15 blur-2xl rounded-full pointer-events-none"
              />
            </div>
          </motion.div>

          {/* VEHICLE 2: FIRE ENGINE (OUR VISION) */}
          <motion.div
            style={{
              scale: fireScale,
              y: fireY,
              x: fireX,
              opacity: fireOpacity,
            }}
            className="absolute top-[16%] sm:top-[18%] lg:top-[16%] right-[2%] sm:right-[4%] lg:right-[6%] w-[340px] sm:w-[520px] md:w-[640px] lg:w-[780px] xl:w-[860px] pointer-events-none will-change-transform"
          >
            <div className="relative">
              <img
                src={fireEngineCutout}
                alt="Fire & Industrial Safety Engine Rig - ASET Safety Engineering"
                className="w-full h-auto object-contain select-none filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.3)]"
              />
              {/* Contact ground shadow */}
              <div
                aria-hidden="true"
                className="absolute -bottom-6 left-1/4 right-1/4 h-8 bg-black/25 blur-xl rounded-full"
              />
            </div>
          </motion.div>

          {/* SCENE 3: LUXURY HOTEL RESTAURANT (OUR VALUES) */}
          <motion.div
            style={{
              scale: hotelScale,
              y: hotelY,
              opacity: hotelOpacity,
            }}
            className="absolute top-[14%] sm:top-[16%] lg:top-[14%] right-[3%] sm:right-[6%] lg:right-[8%] w-[310px] sm:w-[460px] md:w-[560px] lg:w-[660px] xl:w-[720px] pointer-events-none will-change-transform"
          >
            {/* Elegant 3D floating perspective card for Hotel Management */}
            <div className="relative rounded-[2rem] sm:rounded-[2.8rem] overflow-hidden border-2 border-white/80 shadow-[0_32px_75px_rgba(0,0,0,0.28)] bg-stone-900 aspect-[16/10] sm:aspect-[16/9]">
              <img
                src={hotelRestaurantImg}
                alt="5-Star Luxury Hotel Restaurant Dining - ASET Hotel Management"
                className="w-full h-full object-cover select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 flex items-center gap-2 text-white">
                <UtensilsCrossed className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono uppercase tracking-widest font-bold">
                  Five-Star Executive Hospitality
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ------------------------------------------------------- */}
        {/* BOTTOM CONTENT SPLIT: Left Bold Title + Right Narrative */}
        {/* Matches Emons layout: "Your cargo. Our mission. Welcome"*/}
        {/* ------------------------------------------------------- */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-4 sm:pb-6">

          {/* ===================================================== */}
          {/* LEFT COLUMN: Monumental Typography Lockup             */}
          {/* ===================================================== */}
          <div className="lg:col-span-7 xl:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPillar.id + '-heading'}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-1 sm:space-y-2"
              >
                {/* Line 1: Catchphrase */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-stone-900 leading-[1.04]">
                  {currentPillar.line1}
                </h2>

                {/* Line 2: Identity with Website Title Gradient */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.04]">
                  <span className="text-gradient-title">{currentPillar.line2}</span>
                </h2>

                {/* Line 3: Destination Name */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-stone-900 leading-[1.04]">
                  {currentPillar.line3}
                </h2>

                {/* Department Focus Sub-tag */}
                <div className="pt-3 sm:pt-4 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                  <span>{currentPillar.deptFocus}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ===================================================== */}
          {/* RIGHT COLUMN: Action Buttons + Narrative Description  */}
          {/* ===================================================== */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-4 lg:space-y-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPillar.id + '-desc'}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                {/* Pill Action Buttons matching Emons right-aligned pills */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {currentPillar.buttons.map((btn, bIdx) => (
                    <a
                      key={btn.label}
                      href={btn.href || '#departments'}
                      onClick={(e) => {
                        if (btn.onClick) {
                          e.preventDefault();
                          btn.onClick();
                        } else if (onExploreDepartments) {
                          e.preventDefault();
                          onExploreDepartments();
                        }
                      }}
                      className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${bIdx === 0
                        ? 'bg-gradient-to-r from-orange-600 via-orange-500 to-rose-600 hover:from-orange-500 hover:to-rose-500 text-white shadow-md hover:shadow-lg shadow-orange-600/25'
                        : 'bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 shadow-2xs'
                        }`}
                    >
                      <span>{btn.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>

                {/* Narrative Paragraph with Website Typography */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans max-w-lg">
                  {currentPillar.description}
                </p>

                {/* Accreditation Badge */}
                <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-orange-900 bg-orange-100/60 border border-orange-200/80 px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                  <span>{currentPillar.badge}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ------------------------------------------------------- */}
        {/* BOTTOM TIMELINE PROGRESS BAR                            */}
        {/* ------------------------------------------------------- */}
        <div className="relative w-full h-1 bg-stone-200/90 rounded-full overflow-hidden mt-2 z-20">
          <motion.div
            style={{ scaleX: smoothProgress, transformOrigin: 'left' }}
            className="w-full h-full bg-gradient-to-r from-orange-600 via-amber-500 to-rose-600"
          />
        </div>
      </div>
    </div>
  );
};
