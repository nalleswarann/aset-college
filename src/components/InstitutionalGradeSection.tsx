import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollHeading, ScrollParagraph, ScrollEyebrow } from './ScrollTypography';
import {
  Landmark,
  Award,
  Briefcase,
  ShieldCheck,
  Scale,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from 'lucide-react';

import campusInstitutionalBg from '../assets/images/aset-campus-institutional-bg.webp';
import aaiClean from '../assets/images/partners/aai_clean.png';
import aasscLogo from '../assets/images/partners/aassc.png';
import kpmgLogo from '../assets/images/partners/kpmg.webp';
import lscLogo from '../assets/images/partners/lsc.png';
import msuLogo from '../assets/images/partners/msu.png';
import intiClean from '../assets/images/partners/inti_clean.png';
import hsuClean from '../assets/images/partners/hsu_clean.png';
import campusworldLogo from '../assets/images/partners/campusworld.png';

interface InstitutionalGradeSectionProps {
  onOpenAdmissions?: () => void;
}

interface InstitutionalPillar {
  id: string;
  icon: React.FC<{ className?: string }>;
  tag: string;
  shortTitle: string;
  fullTitle: string;
  description: string;
  number: string;
  partners: { name: string; logo: string }[];
}

const PILLARS_DATA: InstitutionalPillar[] = [
  {
    id: 'assets-managers',
    icon: Landmark,
    tag: 'Institutional Quality',
    number: '01',
    shortTitle: 'High-Quality Assets and Programs',
    fullTitle: 'High-Quality Infrastructure & Approved Assets',
    description:
      'Our dual flagship campuses house DGCA-compliant flight simulator bays, industrial firefighting rigs, and smart maritime logistics laboratories certified to international operational standards.',
    partners: [
      { name: 'Airports Authority of India', logo: aaiClean },
      { name: 'Logistics Sector Skill Council', logo: lscLogo },
      { name: 'Campus World Network', logo: campusworldLogo },
    ],
  },
  {
    id: 'regulated-providers',
    icon: Award,
    tag: 'University Backed',
    number: '02',
    shortTitle: 'Regulated Institutional Standards',
    fullTitle: 'Regulated Service Providers & University Norms',
    description:
      'Our academic curricula operate with official support from Alagappa University under UGC norms, structured ISO 9001:2015 frameworks, and annual compliance audits by national sector skill councils.',
    partners: [
      { name: 'Alagappa University Support', logo: msuLogo },
      { name: 'KPMG India Advisory', logo: kpmgLogo },
      { name: 'Aviation Sector Skill Council', logo: aasscLogo },
    ],
  },
  {
    id: 'experienced-leadership',
    icon: Briefcase,
    tag: 'Veteran Faculty',
    number: '03',
    shortTitle: 'Experienced Academic Leadership',
    fullTitle: 'Experienced Academic & Operational Leadership',
    description:
      'Directed by former commercial airline captains, senior port authorities, and certified industrial safety inspectors who bring over two decades of front-line field command directly to our lecture halls.',
    partners: [
      { name: 'INTI International University', logo: intiClean },
      { name: 'HSU University Alliances', logo: hsuClean },
      { name: 'Management & Science University', logo: msuLogo },
    ],
  },
  {
    id: 'audited-security',
    icon: ShieldCheck,
    tag: 'Independent Audits',
    number: '04',
    shortTitle: 'Third-Party Audited Quality',
    fullTitle: 'Third-Party Audited Quality & Examination Standards',
    description:
      'Every semester curriculum, simulation practical hour, and laboratory safety workflow receives independent annual audit reviews to ensure transparent, uncompromising academic rigor.',
    partners: [
      { name: 'Airports Authority of India', logo: aaiClean },
      { name: 'Logistics Sector Skill Council', logo: lscLogo },
      { name: 'KPMG India Alliance', logo: kpmgLogo },
    ],
  },
  {
    id: 'compliance-focus',
    icon: Scale,
    tag: 'Ethical Governance',
    number: '05',
    shortTitle: 'Compliance-First Focus',
    fullTitle: 'Compliance-First Placement & Industry Governance',
    description:
      'Zero-compromise civil aviation safety protocols, structured maritime conventions, and active hiring MoUs across 500+ multinational corporate partners worldwide ensure seamless career absorption.',
    partners: [
      { name: 'AASSC Aerospace Council', logo: aasscLogo },
      { name: 'Campus World Global', logo: campusworldLogo },
      { name: 'INTI International', logo: intiClean },
    ],
  },
];

// Cadence of auto-scroll in milliseconds (increased to 6.5s for comfortable reading)
const AUTO_SCROLL_DURATION = 6500;

export const InstitutionalGradeSection: React.FC<InstitutionalGradeSectionProps> = ({
  onOpenAdmissions,
}) => {
  // Start with pillar 3 (Third-Party Audited Quality) matching user's exact screenshot
  const [activeIndex, setActiveIndex] = useState(3);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [keyCounter, setKeyCounter] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // -------------------------------------------------------------
  // CONTINUOUS CIRCULAR AUTO-SCROLL ENGINE
  // Every card smoothly scrolls into the fixed spotlight position
  // -------------------------------------------------------------
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((currentIdx) => (currentIdx + 1) % PILLARS_DATA.length);
      setKeyCounter((k) => k + 1);
    }, AUTO_SCROLL_DURATION);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : PILLARS_DATA.length - 1));
    setKeyCounter((k) => k + 1);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev < PILLARS_DATA.length - 1 ? prev + 1 : 0));
    setKeyCounter((k) => k + 1);
  };

  const handleSelectPillar = (index: number) => {
    setDirection(index >= activeIndex ? 1 : -1);
    setActiveIndex(index);
    setKeyCounter((k) => k + 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX.current;
      if (deltaX < -35) {
        handleNext();
      } else if (deltaX > 35) {
        handlePrev();
      }
      touchStartX.current = null;
    }
    setTimeout(() => setIsPaused(false), 3000);
  };

  const total = PILLARS_DATA.length;

  // Circular slot indices relative to the active pillar:
  // Slot 0 is the permanently FIXED ACTIVE SPOTLIGHT position!
  // Slots [-2, -1] are queued on the left, Slots [+1, +2] on the right.
  const slotOffsets = [-2, -1, 0, 1, 2];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      filter: 'blur(3px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      filter: 'blur(3px)',
    }),
  };

  return (
    <section
      id="institutional-grade"
      className="relative w-full min-h-[92vh] lg:min-h-screen py-16 sm:py-24 lg:py-28 flex flex-col justify-between overflow-hidden bg-stone-950 text-white font-manrope select-none"
    >
      {/* ========================================================= */}
      {/* 1. CINEMATIC ASET CAMPUS BUILDING BACKGROUND              */}
      {/* Real campus photo with rich contrast scrim & warm ambient */}
      {/* ========================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src={campusInstitutionalBg}
          alt="ASET College Flagship Campus Building"
          className="w-full h-full object-cover object-center filter brightness-90 saturate-[1.1]"
        />
        {/* Cinematic contrast gradient scrim over background */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/70 to-stone-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/50 to-stone-950/40" />

        {/* Ambient warm light leak matching ASET colors */}
        <div
          aria-hidden="true"
          className="absolute -top-24 left-1/3 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-orange-500/18 via-rose-500/12 to-transparent blur-3xl pointer-events-none"
        />
      </div>

      {/* ========================================================= */}
      {/* 2. TOP HEADER ROW: Trust & Transparency + Big Headline    */}
      {/* Alignments and color combos matching website styles       */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-6">
        <div className="max-w-2xl space-y-2 sm:space-y-3">
          {/* Eyebrow Label with Animated Pulse Dot */}
          <ScrollEyebrow delay={0.04} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-orange-400">
              TRUST &amp; TRANSPARENCY
            </span>
          </ScrollEyebrow>

          {/* Standardized Headline with smooth reveal */}
          <ScrollHeading delay={0.12} className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold tracking-tight text-white leading-tight">
            Institutional Grade <br />
            <span className="text-gradient-title">In All We Do</span>
          </ScrollHeading>

          {/* Standardized Subtitle Paragraph */}
          <ScrollParagraph delay={0.2} className="text-sm sm:text-base text-stone-300 max-w-xl leading-relaxed font-sans pt-1">
            Every educational pathway at ASET is built on verified governance, university accreditations, and industry-certified benchmarks.
          </ScrollParagraph>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. FIXED ACTIVE SPOTLIGHT CAROUSEL TRACK                  */}
      {/* The active card sits at a FIXED spotlight position!       */}
      {/* Every card smoothly scrolls to this position & opens!     */}
      {/* Seamless horizontal sliding animation with touch gestures */}
      {/* ========================================================= */}
      <div
        className="relative z-10 w-full mt-10 sm:mt-14 mb-8 overflow-hidden touch-pan-y"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="max-w-[1540px] 2xl:max-w-[1660px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-center gap-3 sm:gap-4 md:gap-5 pb-4 pt-2">
            {slotOffsets.map((offset) => {
              const pillarIndex = (activeIndex + offset + total * 2) % total;
              const pillar = PILLARS_DATA[pillarIndex];
              const isActive = offset === 0;
              const IconComponent = pillar.icon;

              if (isActive) {
                // ===============================================
                // FIXED SPOTLIGHT ACTIVE WHITE CARD (Expanded)
                // Every card scrolls to THIS exact position & opens
                // ===============================================
                return (
                  <motion.div
                    key="fixed-spotlight-active-card"
                    layout
                    className="w-[92vw] sm:w-[480px] md:w-[540px] lg:w-[580px] shrink-0 bg-white text-stone-900 rounded-3xl p-6 sm:p-8 lg:p-9 shadow-[0_24px_60px_rgba(0,0,0,0.6)] border border-stone-100 z-20 will-change-transform overflow-hidden"
                    transition={{
                      type: 'spring',
                      stiffness: 240,
                      damping: 28,
                      mass: 0.8,
                    }}
                  >
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={pillar.id}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: 'spring', stiffness: 280, damping: 30 },
                          opacity: { duration: 0.35 },
                          filter: { duration: 0.35 },
                        }}
                      >
                        {/* Stamp Icon Badge on Top + Tag Badge */}
                        <div className="flex items-center justify-between mb-4 sm:mb-5">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/15 to-rose-500/15 border border-orange-500/30 flex items-center justify-center text-orange-600 shadow-xs">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-200/80">
                            {pillar.tag}
                          </span>
                        </div>

                        {/* Card Title */}
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-stone-900 tracking-tight leading-snug">
                          {pillar.fullTitle}
                        </h3>

                        {/* Description Body */}
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-2.5 sm:mt-3 font-sans">
                          {pillar.description}
                        </p>

                        {/* Horizontal Divider Line */}
                        <div className="h-px w-full bg-stone-200/90 my-4 sm:my-5" />

                        {/* Institutional Partners / Accreditation Row */}
                        <div className="flex items-center gap-4 sm:gap-6 flex-wrap pt-0.5">
                          {pillar.partners.map((partner, pIdx) => (
                            <div
                              key={pIdx}
                              className="flex items-center gap-2 group/partner cursor-default"
                              title={partner.name}
                            >
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-6 sm:h-7 w-auto object-contain grayscale opacity-65 group-hover/partner:grayscale-0 group-hover/partner:opacity-100 transition-all duration-300"
                              />
                              <span className="text-[11px] sm:text-xs font-semibold text-stone-500 font-sans hidden sm:inline-block">
                                {partner.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                );
              }

              // =================================================
              // COMPACT INACTIVE FROSTED GLASS CARDS
              // Queued seamlessly to the left & right of active slot
              // =================================================
              const isFarEdge = Math.abs(offset) === 2;

              return (
                <motion.div
                  key={`inactive-slot-${offset}`}
                  layout
                  whileHover={{
                    y: -6,
                    backgroundColor: 'rgba(255, 255, 255, 0.18)',
                    borderColor: 'rgba(255, 255, 255, 0.35)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelectPillar(pillarIndex)}
                  className={`w-32 sm:w-40 md:w-48 lg:w-52 h-[190px] sm:h-[220px] shrink-0 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 p-4 sm:p-5 flex flex-col justify-between text-white transition-all duration-300 cursor-pointer shadow-lg overflow-hidden ${
                    isFarEdge ? 'hidden lg:flex' : 'hidden sm:flex'
                  }`}
                >
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={pillar.id}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: 'spring', stiffness: 280, damping: 30 },
                        opacity: { duration: 0.3 },
                      }}
                      className="w-full h-full flex flex-col justify-between"
                    >
                      {/* Top Minimalist Icon */}
                      <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white/90">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      {/* Bottom Multi-Line Short Title & Number */}
                      <div className="mt-auto">
                        <span className="text-[11px] font-mono font-bold text-orange-400 block mb-1">
                          {pillar.number}
                        </span>
                        <h4 className="text-xs sm:text-sm font-semibold text-white/95 leading-snug">
                          {pillar.shortTitle}
                        </h4>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. BOTTOM CONTROLS ROW: Dynamic Progress & Round Scroll   */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between pt-2 pb-4">
        {/* Left: Dynamic Continuous Progress Bar Line */}
        <div className="flex items-center gap-3">
          <div className="relative w-28 sm:w-44 h-1.5 bg-white/20 rounded-full overflow-hidden">
            {/* Base Step Indicator */}
            <div
              className="absolute left-0 top-0 bottom-0 bg-white/35 rounded-full transition-all duration-300"
              style={{
                width: `${((activeIndex + 1) / total) * 100}%`,
              }}
            />
            {/* Live Continuous Cycle Fill with smooth 6.5s animation */}
            <motion.div
              key={keyCounter}
              initial={{ width: '0%' }}
              animate={{ width: isPaused ? '0%' : '100%' }}
              transition={{ duration: AUTO_SCROLL_DURATION / 1000, ease: 'linear' }}
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500 rounded-full"
            />
          </div>
          <span className="text-xs font-mono font-bold text-white/80">
            0{activeIndex + 1} / 0{total}
          </span>
          <button
            onClick={() => setIsPaused(!isPaused)}
            title={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            className="text-white/60 hover:text-white transition-colors cursor-pointer p-1"
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Right: Round Scroll Arrow Buttons (< and >) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handlePrev}
            aria-label="Previous institutional pillar"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 hover:bg-white/25 active:scale-95 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next institutional pillar"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 hover:bg-white/25 active:scale-95 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
