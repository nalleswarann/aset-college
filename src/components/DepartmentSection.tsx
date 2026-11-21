import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'motion/react';
import { DEPARTMENTS, PROGRAM_MATRIX } from '../data/universityData';
import { Department } from '../types/university';

// High-resolution authentic imagery
import asetCampusMainImg from '../assets/images/aset-campus-main-building.webp';
import aviationImg from '../assets/images/departments/dept-aviation.jpg';
import logisticsImg from '../assets/images/departments/dept-logistics.jpg';
import safetyImg from '../assets/images/departments/dept-safety.jpg';
import analyticsImg from '../assets/images/departments/dept-analytics.jpg';
import commerceImg from '../assets/images/departments/dept-commerce.jpg';
import hospitalityImg from '../assets/images/departments/dept-hospitality.jpg';

import {
  ChevronLeft,
  ChevronRight,
  Table,
  CheckCircle2,
  Check,
  Zap,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Clock,
  ShieldCheck,
  Search,
} from 'lucide-react';
import {
  ScrollHeading,
  ScrollEyebrow,
  ScrollAction,
} from './ScrollTypography';

interface DepartmentSectionProps {
  onSelectDepartment: (dept: Department) => void;
  onApplyForDepartment: (deptName: string) => void;
}

// Clean, punchy department definitions with signature website gradient title combos
const REFINED_DEPARTMENTS = [
  {
    id: 'aviation-pilot',
    prefix: 'Aviation &',
    highlight: 'Pilot Training',
    fullName: 'Pilot Training, Aviation & Airport Management',
    deptRef: 'Pilot Training, Aviation & Airport Management',
    description:
      'Designed for students aspiring to careers in commercial aviation, airline operations, and airport management. The curriculum combines classroom management principles with in-flight exposure, DGCA flight simulation, and guided airport operations.',
    image: aviationImg,
    objectPosition: 'center 45%',
    tag: 'Aviation Flight Deck & Operations',
  },
  {
    id: 'logistics-shipping',
    prefix: 'Logistics &',
    highlight: 'Shipping',
    fullName: 'Logistics & Shipping',
    deptRef: 'Logistics & Shipping',
    description:
      'Specialized education in multimodal freight transport, maritime shipping, supply chain analytics, and container port logistics, developed in close partnership with international cargo hubs and shipping authorities.',
    image: logisticsImg,
    objectPosition: 'center 50%',
    tag: 'Maritime Port & Global Freight',
  },
  {
    id: 'fire-safety',
    prefix: 'Fire &',
    highlight: 'Industrial Safety',
    fullName: 'Fire & Industrial Safety',
    deptRef: 'Fire & Industrial Safety',
    description:
      'Comprehensive training for safety officers, HSE professionals, and disaster response engineers, integrating live firefighting simulation rigs, hazardous chemical safety protocols, and NEBOSH / IOSH international standards.',
    image: safetyImg,
    objectPosition: 'center 30%',
    tag: 'HSE & Industrial Disaster Safety',
  },
  {
    id: 'business-analytics',
    prefix: 'Business',
    highlight: 'Analytics & Studies',
    fullName: 'Business Analytics & Management Studies',
    deptRef: 'Business Analytics & Management Studies',
    description:
      'Preparing forward-thinking business leaders through advanced predictive analytics, corporate financial modeling, modern management strategy, and digital enterprise systems aligned with high-growth industries.',
    image: analyticsImg,
    objectPosition: 'center 40%',
    tag: 'AI & Data-Driven Management',
  },
  {
    id: 'commerce',
    prefix: 'School of',
    highlight: 'Commerce & Finance',
    fullName: 'School of Commerce (CA / CMA / CS / ACCA + B.Com)',
    deptRef: 'School of Commerce (CA / CMA / CS / ACCA + B.Com)',
    description:
      'Integrates undergraduate commerce education with globally recognized professional accounting, taxation, and corporate governance qualifications, offering accelerated dual pathways in CA, CMA, CS, and ACCA.',
    image: commerceImg,
    objectPosition: 'center 45%',
    tag: 'Chartered Accounting & Global Finance',
  },
  {
    id: 'hospitality',
    prefix: 'Hotel &',
    highlight: 'Hospitality Management',
    fullName: 'Hotel Management',
    deptRef: 'Hotel Management',
    description:
      'World-class hospitality education covering luxury hotel administration, culinary operations, international tourism, and guest relations, delivering hands-on industry exposure across premier global hotel brands.',
    image: hospitalityImg,
    objectPosition: 'center 55%',
    tag: 'Luxury Hotel & Hospitality Administration',
  },
];

export const DepartmentSection: React.FC<DepartmentSectionProps> = ({
  onSelectDepartment,
  onApplyForDepartment,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isVisionPhase, setIsVisionPhase] = useState(false);
  const [durationMode, setDurationMode] = useState<'standard' | 'lateral'>('standard');
  const [isMatrixDrawerOpen, setIsMatrixDrawerOpen] = useState(false);
  const [matrixFilter, setMatrixFilter] = useState('');

  const activeItem = REFINED_DEPARTMENTS[activeIdx] || REFINED_DEPARTMENTS[0];
  const matchedFullDept =
    DEPARTMENTS.find((d) => d.name === activeItem.deptRef) || DEPARTMENTS[activeIdx];

  // Continuous scroll tracking across the pinned section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Desktop transforms: image reduces smoothly from 100% full-screen to the right 50%
  const imageWidth = useTransform(scrollYProgress, [0.08, 0.20], ['100%', '50%']);
  const imageLeft = useTransform(scrollYProgress, [0.08, 0.20], ['0%', '50%']);

  // Mobile transforms: image reduces from 100% full-screen to top 40% height
  const imageHeightMobile = useTransform(scrollYProgress, [0.08, 0.20], ['100%', '40%']);

  // Phase 1 (02 OUR VALUES) text fades out during the initial morph
  const valuesTextOpacity = useTransform(scrollYProgress, [0.04, 0.12], [1, 0]);

  // Track phase threshold to cleanly separate Phase 1 (Values) and Phase 2 (Vision)
  // This guarantees Phase 1 and Phase 2 text NEVER overlap under any circumstances
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const isVision = progress >= 0.16;
    setIsVisionPhase(isVision);

    if (progress < 0.20) {
      setActiveIdx(0);
    } else {
      const visionProgress = Math.max(0, (progress - 0.20) / 0.80);
      const idx = Math.min(
        REFINED_DEPARTMENTS.length - 1,
        Math.floor(visionProgress * REFINED_DEPARTMENTS.length)
      );
      setActiveIdx(idx);
    }
  });

  // Scroll to a specific department on dot click or arrow click
  const scrollToDepartment = (idx: number) => {
    setActiveIdx(idx);
    if (!isVisionPhase) {
      setIsVisionPhase(true);
    }
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      const containerTop = currentScrollY + rect.top;
      const totalScrollHeight = containerRef.current.scrollHeight - window.innerHeight;
      const targetProgress = 0.20 + (idx / REFINED_DEPARTMENTS.length) * 0.78 + 0.02;
      const targetY = containerTop + targetProgress * totalScrollHeight;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    const nextIdx = activeIdx === 0 ? REFINED_DEPARTMENTS.length - 1 : activeIdx - 1;
    scrollToDepartment(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIdx === REFINED_DEPARTMENTS.length - 1 ? 0 : activeIdx + 1;
    scrollToDepartment(nextIdx);
  };

  const handleOpenCurriculum = () => {
    if (matchedFullDept) {
      onSelectDepartment(matchedFullDept);
    }
  };

  const handleOpenApply = () => {
    onApplyForDepartment(activeItem.fullName);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx, isVisionPhase]);

  return (
    <section id="departments" className="relative bg-[#faf8f5] text-stone-900 font-manrope">
      {/* ========================================================================= */}
      {/* TELHA CLARKE SCROLL CANVAS                                                */}
      {/* 1. Starts with authentic ASET campus building ("02 OUR DEPARTMENTS")        */}
      {/* 2. Image smoothly reduces to right side (50% desktop, 40% mobile)         */}
      {/* 3. Left side reveals solid website cream (#faf8f5) with solid black text  */}
      {/* 4. Sliding elevator film-strip for the department images                  */}
      {/* ========================================================================= */}
      <div ref={containerRef} className="relative h-[380vh] sm:h-[420vh]">
        {/* Pinned 100vh Viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col lg:flex-row bg-[#faf8f5]">

          {/* ========================================================================= */}
          {/* THE REDUCING IMAGE VIEWPORT (Desktop: right 50%, Mobile: top 40%)         */}
          {/* Sits at z-20 so it remains 100% VISIBLE and never covered by left panel   */}
          {/* ========================================================================= */}

          {/* --- DESKTOP VIEWPORT IMAGE --- */}
          <motion.div
            style={{
              width: imageWidth,
              left: imageLeft,
            }}
            className="hidden lg:block absolute top-0 bottom-0 z-20 overflow-hidden bg-stone-950 will-change-transform shadow-2xl"
          >
            {/* Phase 1 Hero Image (Shown during Values phase and initial reduction) */}
            <div
              className={`absolute inset-0 z-10 transition-opacity duration-500 ease-out pointer-events-none ${isVisionPhase ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            >
              <img
                src={asetCampusMainImg}
                alt="ASET College Campus Building"
                className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/60 pointer-events-none" />
            </div>

            {/* Phase 2 Department Filmstrip (Hardware-accelerated vertical elevator) */}
            <div
              className={`absolute inset-0 z-20 transition-opacity duration-500 ease-out ${isVisionPhase ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
              <div
                className="w-full h-full flex flex-col"
                style={{
                  transform: `translate3d(0, -${activeIdx * 100}%, 0)`,
                  transition: 'transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {REFINED_DEPARTMENTS.map((dept, fIdx) => (
                  <div key={fIdx} className="w-full h-full min-h-full shrink-0 relative overflow-hidden bg-stone-900">
                    <img
                      src={dept.image}
                      alt={dept.fullName}
                      loading={fIdx === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      style={{ objectPosition: dept.objectPosition || 'center center' }}
                      className="w-full h-full object-cover select-none transition-transform duration-700"
                    />
                    {/* Cinematic vignette overlay for maximum contrast and elegance */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-black/20 to-stone-950/40 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-950/35 via-transparent to-stone-950/15 pointer-events-none" />

                    {/* Department Tag Pill in Top-Left */}
                    <div className="absolute top-8 left-8 z-30 pointer-events-none">
                      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/65 backdrop-blur-xl border border-white/20 text-white shadow-2xl">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        <span className="text-xs font-mono font-bold tracking-widest uppercase">
                          0{fIdx + 1} / 0{REFINED_DEPARTMENTS.length} · {dept.tag}
                        </span>
                      </div>
                    </div>

                    {/* Department Name Indicator in Bottom-Left */}
                    <div className="absolute bottom-10 left-8 z-30 pointer-events-none max-w-sm hidden sm:block">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-orange-400 font-bold block mb-1 drop-shadow-sm">
                        Department Focus &amp; Practical Training
                      </span>
                      <p className="text-sm lg:text-base font-semibold text-white/95 drop-shadow-md leading-snug">
                        {dept.fullName}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Minimalist Carousel Arrow Controls */}
              <div className="absolute bottom-10 right-10 z-30 flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Department"
                  className="w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-xl active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Department"
                  className="w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-xl active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* --- MOBILE VIEWPORT IMAGE (Top 40%) --- */}
          <motion.div
            style={{
              height: imageHeightMobile,
            }}
            className="lg:hidden w-full relative z-20 overflow-hidden bg-stone-950 shrink-0 will-change-transform shadow-lg order-first"
          >
            {/* Phase 1 Mobile */}
            <div
              className={`absolute inset-0 z-10 transition-opacity duration-500 ease-out pointer-events-none ${isVisionPhase ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            >
              <img
                src={asetCampusMainImg}
                alt="ASET College Campus Building"
                className="w-full h-full object-cover object-center filter brightness-[0.78]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/60 pointer-events-none" />
            </div>

            {/* Phase 2 Mobile Filmstrip */}
            <div
              className={`absolute inset-0 z-20 transition-opacity duration-500 ease-out ${isVisionPhase ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
              <div
                className="w-full h-full flex flex-col"
                style={{
                  transform: `translate3d(0, -${activeIdx * 100}%, 0)`,
                  transition: 'transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {REFINED_DEPARTMENTS.map((dept, fIdx) => (
                  <div key={fIdx} className="w-full h-full min-h-full shrink-0 relative overflow-hidden bg-stone-900">
                    <img
                      src={dept.image}
                      alt={dept.fullName}
                      loading={fIdx === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      style={{ objectPosition: dept.objectPosition || 'center center' }}
                      className="w-full h-full object-cover select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-black/10 to-stone-950/30 pointer-events-none" />

                    {/* Mobile Badge */}
                    <div className="absolute top-3 left-3 z-30 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold tracking-wider uppercase text-white shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        <span>0{fIdx + 1} · {dept.highlight}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Arrows */}
              <div className="absolute bottom-3 right-3 z-30 flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  aria-label="Previous"
                  className="w-8 h-8 rounded-full bg-black/70 text-white backdrop-blur-md flex items-center justify-center border border-white/20 cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next"
                  className="w-8 h-8 rounded-full bg-black/70 text-white backdrop-blur-md flex items-center justify-center border border-white/20 cursor-pointer active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* PHASE 1: "02 OUR VALUES" (Full Screen Architectural Hero)                 */}
          {/* Rendered ONLY before Vision Phase, eliminating any possibility of overlap */}
          {/* ========================================================================= */}
          {!isVisionPhase && (
            <motion.div
              style={{ opacity: valuesTextOpacity }}
              className="absolute inset-0 z-30 flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-20 pointer-events-none will-change-transform"
            >
              {/* Top-Left: 02 OUR DEPARTMENTS (Padded safely below floating glass navbar) */}
              <div className="flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-white">
                <span className="font-bold text-orange-400">02</span>
                <span className="w-8 h-px bg-white/40" />
                <h2 className="font-semibold text-white tracking-[0.22em] drop-shadow-sm">OUR DEPARTMENTS</h2>
              </div>

              {/* Bottom Row: Telha Clarke layout (Left: Pill CTA, Right: Department Manifesto) */}
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12 pointer-events-auto">
                {/* Left Side: Floating Black Pill CTA */}
                <div className="shrink-0">
                  <button
                    onClick={() => scrollToDepartment(0)}
                    className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-lg bg-black/85 hover:bg-black text-white text-xs font-mono font-medium tracking-wide shadow-2xl transition-all duration-300 cursor-pointer border border-white/20 active:scale-95"
                  >
                    <span className="text-orange-400 text-sm leading-none">❖</span>
                    <span>Explore All Departments</span>
                  </button>
                </div>

                {/* Right Side: Editorial Department Manifesto */}
                <div className="max-w-xl lg:text-right space-y-3">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed drop-shadow-sm">
                    Specialized academic departments engineered for <span className="font-medium text-amber-200">practical mastery</span> and global careers.
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-white/90 font-normal leading-relaxed">
                    From DGCA flight simulation bays and industrial safety drill-fields to maritime shipping hubs and digital analytics laboratories, our specialized departments combine rigorous academic curriculum with hands-on industry competence.
                  </p>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-orange-300/90 pt-1">
                    Academically Supported by Alagappa University &bull; Chennai &amp; Coimbatore &bull; Admissions 2026&ndash;2027
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* PHASE 2: "03 OUR VISION" (Left 50% on desktop, bottom 60% on mobile)      */}
          {/* Strictly w-full lg:w-1/2 lg:max-w-[50%] so it NEVER covers the right image*/}
          {/* Signature website color combos: #111111 + text-gradient-title (#ea580c)   */}
          {/* ========================================================================= */}
          <div
            className={`w-full lg:w-1/2 lg:max-w-[50%] h-[60%] lg:h-full flex flex-col justify-between pt-4 sm:pt-6 lg:pt-32 xl:pt-36 pb-4 sm:pb-6 lg:pb-16 px-5 sm:px-10 lg:px-12 xl:px-16 bg-[#faf8f5] z-10 shrink-0 transition-opacity duration-300 overflow-y-auto ${isVisionPhase ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
          >
            {/* 1. Top-Left: 03 OUR DEPARTMENTS Eyebrow with Alagappa Badge */}
            <div className="flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-3 text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-stone-500">
                <span className="font-bold text-orange-600">03</span>
                <span className="w-8 h-px bg-stone-300" />
                <h2 className="font-semibold text-stone-900 tracking-[0.22em]">OUR DEPARTMENTS</h2>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-orange-100/70 text-orange-800 border border-orange-200/60">
                Alagappa University
              </span>
            </div>

            {/* 2 & 3. Middle Body: Monumental Title with Signature Gradient Combo & Description */}
            <div className="my-auto py-2 sm:py-4 lg:py-6 space-y-3 sm:space-y-5 max-w-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-3 sm:space-y-5"
                >
                  {/* Giant Headline: Solid Deep Black (#111111) + Signature Orange-to-Rose Gradient Highlight */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-medium tracking-tight text-[#111111] leading-[1.12]">
                    {activeItem.prefix}{' '}
                    <span className="text-gradient-title">{activeItem.highlight}</span>
                  </h3>

                  {/* Editorial Description: Dark Charcoal (#333333) with high contrast */}
                  <p className="text-xs sm:text-sm lg:text-[15px] xl:text-base text-[#333333] font-normal leading-relaxed">
                    {activeItem.description}
                  </p>

                  {/* Clean curriculum detail link */}
                  <div className="pt-1">
                    <button
                      onClick={handleOpenCurriculum}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-stone-900 hover:text-orange-600 transition-colors cursor-pointer group"
                    >
                      <span>Explore Syllabus &amp; Degrees</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-orange-600" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 4. Bottom Row: Telha Clarke Floating Black Pill + Slide Dots */}
            <div className="flex items-center justify-between gap-4 shrink-0 pt-3 sm:pt-4 border-t border-stone-200/80">
              <button
                onClick={handleOpenApply}
                className="inline-flex items-center gap-2.5 px-4 py-2 sm:py-2.5 rounded-lg bg-black hover:bg-stone-800 text-white text-xs font-mono font-medium tracking-wide shadow-xl transition-all duration-300 cursor-pointer border border-white/10 shrink-0 active:scale-95"
              >
                <span className="text-orange-400 text-sm leading-none">❖</span>
                <span>Apply for Department</span>
              </button>

              {/* Minimalist Slide Progress Dots with Gradient Active Dot */}
              <div className="flex items-center gap-1.5">
                {REFINED_DEPARTMENTS.map((dept, idx) => (
                  <button
                    key={dept.id}
                    onClick={() => scrollToDepartment(idx)}
                    aria-label={`Jump to ${dept.fullName}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${activeIdx === idx
                      ? 'w-6 sm:w-7 bg-gradient-to-r from-orange-600 to-rose-600 shadow-xs'
                      : 'w-1.5 sm:w-2 bg-stone-300 hover:bg-stone-400'
                      }`}
                  />
                ))}
                <span className="text-xs font-mono text-stone-500 ml-2">
                  0{activeIdx + 1} / 0{REFINED_DEPARTMENTS.length}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 4: PROGRAM DURATION & ENTRY ELIGIBILITY GUIDE (3-CARD PRICING CLONE) */}
      {/* Warm Cream (#faf8f5) Backdrop, Curated 3-Card Layout & Full Specification Matrix */}
      {/* ========================================================================= */}
      <div className="bg-[#faf8f5] text-stone-900 px-4 sm:px-8 lg:px-16 py-20 sm:py-24 lg:py-32 border-t border-stone-200/80 relative overflow-hidden">
        {/* Soft atmospheric gradient glow behind the cards using website warm palette */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-r from-orange-100/40 via-amber-100/30 to-stone-200/20 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Centered Top Eyebrow Badge */}
          <div className="flex justify-center mb-3">
            <ScrollEyebrow delay={0.04}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50/90 border border-orange-200/70 text-orange-800 text-xs font-semibold shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>Academic Pathways &amp; Eligibility</span>
              </span>
            </ScrollEyebrow>
          </div>

          {/* Centered Main Title */}
          <ScrollHeading
            as="h3"
            delay={0.08}
            className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-extrabold tracking-tight text-stone-900 text-center leading-tight"
          >
            Program Duration &amp;{' '}
            <span className="text-gradient-title font-medium">
              Entry Eligibility Guide
            </span>
          </ScrollHeading>

          {/* Centered Subtitle */}
          <ScrollAction delay={0.14} className="mt-4 max-w-2xl mx-auto text-center px-4">
            <p className="text-sm sm:text-base text-stone-600 font-manrope leading-relaxed">
              Explore industry-certified undergraduate, postgraduate, and fast-track diploma specifications affiliated with{' '}
              <strong className="text-stone-900 font-semibold">Alagappa University</strong>{' '}
              designed for high-growth global careers.
            </p>
          </ScrollAction>

          {/* Centered Segmented Toggle Pill (Cloned from Monthly | Yearly Save 16%) */}
          <div className="flex justify-center mt-8 mb-12 sm:mb-14">
            <div className="inline-flex items-center p-1 rounded-full bg-stone-200/70 border border-stone-300/60 shadow-inner">
              <button
                type="button"
                onClick={() => setDurationMode('standard')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${durationMode === 'standard'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
                  }`}
              >
                Standard Degree Pathways
              </button>
              <button
                type="button"
                onClick={() => setDurationMode('lateral')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${durationMode === 'lateral'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
                  }`}
              >
                <span>Fast-Track &amp; Lateral Entry</span>
                <span className="bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs">
                  Save 1 Yr
                </span>
              </button>
            </div>
          </div>

          {/* 3-Card Curated Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
            {/* CARD 1: Diploma & Fast-Track */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="bg-white rounded-3xl border border-stone-200/90 p-7 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-bold font-manrope text-stone-900">
                  Diploma &amp; Fast-Track
                </h4>

                <div className="mt-4 mb-3 flex items-baseline">
                  <span className="text-5xl sm:text-6xl font-extrabold text-stone-900 tracking-tight font-manrope">
                    {durationMode === 'standard' ? '1–3' : '1'}
                  </span>
                  <span className="text-stone-500 font-medium text-xs sm:text-sm ml-2">
                    {durationMode === 'standard' ? '/ Years' : '/ Year Fast-Track'}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-500 font-manrope leading-relaxed min-h-[40px]">
                  Ideal for 10th &amp; 12th pass students seeking immediate vocational readiness and DGCA/industrial credentials.
                </p>

                <button
                  type="button"
                  onClick={() => onApplyForDepartment('Diploma in Fire & Safety / Shipping & Logistics')}
                  className="w-full mt-6 py-3.5 px-5 rounded-2xl bg-stone-100 hover:bg-stone-200/90 text-stone-900 font-semibold text-xs sm:text-sm transition-all border border-stone-200/90 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Explore Diploma Programs</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-700 transition-transform group-hover:translate-x-0.5" />
                </button>

                <div className="mt-8 pt-6 border-t border-stone-100 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>10th Std / SSLC or 12th Std (HSC) Pass</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>Fire &amp; Industrial Safety Operations (1 &amp; 3 Yrs)</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>Shipping, Logistics &amp; Cargo Operations (1 Yr)</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>Aviation Ground Operations &amp; Pilot Ground School</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>DGCA Simulator Flight Training Lab Access</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>Direct Airport &amp; Seaport Apprenticeship Pipeline</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>Eligible for Lateral Entry into 2nd Year UG Degrees</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: Undergraduate Degrees (Highlighted with clean website gradient line, no banner text) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="relative bg-white rounded-3xl border-2 border-orange-500/40 shadow-xl shadow-orange-500/5 flex flex-col justify-between overflow-hidden lg:-translate-y-2 z-10"
            >
              {/* Sleek signature website gradient top highlight line */}
              <div className="h-1.5 w-full bg-gradient-to-r from-orange-600 via-amber-500 to-rose-600" />

              <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-xl font-bold font-manrope text-stone-900">
                    Undergraduate Degrees (UG)
                  </h4>

                  <div className="mt-4 mb-3 flex items-baseline">
                    <span className="text-5xl sm:text-6xl font-extrabold text-stone-900 tracking-tight font-manrope">
                      {durationMode === 'standard' ? '3' : '2'}
                    </span>
                    <span className="text-stone-500 font-medium text-xs sm:text-sm ml-2">
                      {durationMode === 'standard' ? '/ Years (6 Sems)' : '/ Years (LE Track)'}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-500 font-manrope leading-relaxed min-h-[40px]">
                    Flagship bachelor curricula affiliated with Alagappa University for high-demand corporate and technical careers.
                  </p>

                  <button
                    type="button"
                    onClick={() => onApplyForDepartment('Pilot Training, Aviation & Airport Management')}
                    className="w-full mt-6 py-3.5 px-5 rounded-2xl bg-stone-900 hover:bg-orange-600 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-stone-900/15 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Apply for UG Programs</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <div className="mt-8 pt-6 border-t border-orange-100 space-y-3">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-manrope leading-relaxed">
                      <div className="w-4 h-4 rounded-full border border-orange-400 bg-orange-50 text-orange-600 shrink-0 mt-0.5 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>12th Std (HSC) Pass in Any Stream / Group</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-manrope leading-relaxed">
                      <div className="w-4 h-4 rounded-full border border-orange-400 bg-orange-50 text-orange-600 shrink-0 mt-0.5 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span className="font-semibold text-stone-900">Conferred by Alagappa University</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-manrope leading-relaxed">
                      <div className="w-4 h-4 rounded-full border border-orange-400 bg-orange-50 text-orange-600 shrink-0 mt-0.5 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>B.Sc. Aviation &amp; BBA Airline Management</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-manrope leading-relaxed">
                      <div className="w-4 h-4 rounded-full border border-orange-400 bg-orange-50 text-orange-600 shrink-0 mt-0.5 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>B.Sc. Fire &amp; Industrial Safety (LE Available)</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-manrope leading-relaxed">
                      <div className="w-4 h-4 rounded-full border border-orange-400 bg-orange-50 text-orange-600 shrink-0 mt-0.5 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>BBA Shipping &amp; Logistics Management</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-manrope leading-relaxed">
                      <div className="w-4 h-4 rounded-full border border-orange-400 bg-orange-50 text-orange-600 shrink-0 mt-0.5 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>Integrated B.Com + CA / CMA / CS / ACCA (UK)</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-manrope leading-relaxed">
                      <div className="w-4 h-4 rounded-full border border-orange-400 bg-orange-50 text-orange-600 shrink-0 mt-0.5 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>B.Sc. Artificial Intelligence &amp; Analytics</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-manrope leading-relaxed">
                      <div className="w-4 h-4 rounded-full border border-orange-400 bg-orange-50 text-orange-600 shrink-0 mt-0.5 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>100% Placement Guarantee &amp; Internships</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 3: Postgraduate & MBA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="bg-white rounded-3xl border border-stone-200/90 p-7 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-bold font-manrope text-stone-900">
                  Postgraduate &amp; MBA (PG)
                </h4>

                <div className="mt-4 mb-3 flex items-baseline">
                  <span className="text-5xl sm:text-6xl font-extrabold text-stone-900 tracking-tight font-manrope">
                    {durationMode === 'standard' ? '2' : '1'}
                  </span>
                  <span className="text-stone-500 font-medium text-xs sm:text-sm ml-2">
                    {durationMode === 'standard' ? '/ Years (4 Sems)' : '/ Year PG Diploma'}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-500 font-manrope leading-relaxed min-h-[40px]">
                  Master's degree curricula for graduates and professionals targeting corporate leadership and industrial oversight.
                </p>

                <button
                  type="button"
                  onClick={() => onApplyForDepartment('Management & Business Analytics (MBA)')}
                  className="w-full mt-6 py-3.5 px-5 rounded-2xl bg-stone-100 hover:bg-stone-200/90 text-stone-900 font-semibold text-xs sm:text-sm transition-all border border-stone-200/90 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Apply for PG / MBA</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-700 transition-transform group-hover:translate-x-0.5" />
                </button>

                <div className="mt-8 pt-6 border-t border-stone-100 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>Any Recognized Undergraduate Degree (UG)</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span className="font-semibold text-stone-900">Conferred by Alagappa University</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>MBA Business Analytics &amp; Quantitative BI</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>MBA Airline, Airport &amp; Aviation Operations</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>MBA Shipping &amp; Global Port Logistics</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>M.Sc. Industrial Safety &amp; Hygiene (B.E./B.Sc.)</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>1 Major Project + 2 Capstone Mini-Projects</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>Corporate Placement Access (Zoho, KPMG, TTF)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Specification Matrix Drawer */}
          <div className="mt-12 sm:mt-16 max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center shrink-0 border border-orange-200/70">
                  <Table className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-stone-900 font-manrope">
                    Detailed Department-by-Department Matrix
                  </h4>
                  <p className="text-xs text-stone-500">
                    Official 2026–2027 Academic Prospectus &bull; Conferred by Alagappa University
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsMatrixDrawerOpen(!isMatrixDrawerOpen)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200/80 text-stone-800 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                <span>{isMatrixDrawerOpen ? 'Collapse Detailed Table' : 'View Full Program Specifications'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMatrixDrawerOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Expandable Table Drawer */}
            <AnimatePresence>
              {isMatrixDrawerOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-4">
                    {/* Search filter input */}
                    <div className="mb-4 flex items-center gap-2 bg-white border border-stone-200 rounded-xl px-4 py-2.5 shadow-2xs">
                      <Search className="w-4 h-4 text-stone-400 shrink-0" />
                      <input
                        type="text"
                        value={matrixFilter}
                        onChange={(e) => setMatrixFilter(e.target.value)}
                        placeholder="Search by department, degree name, or eligibility (e.g. Aviation, Fire, MBA, 12th Std)..."
                        className="w-full text-xs sm:text-sm text-stone-800 placeholder-stone-400 bg-transparent focus:outline-hidden"
                      />
                      {matrixFilter && (
                        <button
                          type="button"
                          onClick={() => setMatrixFilter('')}
                          className="text-xs text-stone-400 hover:text-stone-600 font-mono"
                        >
                          Clear
                        </button>
                      )}
                    </div>

                    <div className="overflow-x-auto border border-stone-200/90 rounded-2xl bg-white shadow-xs">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-stone-950 text-stone-100 font-mono uppercase tracking-wider text-[11px] border-b border-stone-800">
                            <th className="py-4 px-5">Department</th>
                            <th className="py-4 px-5">Representative Programs</th>
                            <th className="py-4 px-5 whitespace-nowrap">Typical Duration</th>
                            <th className="py-4 px-5">Entry Eligibility</th>
                            <th className="py-4 px-5 text-right">Apply</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200/80 font-manrope">
                          {PROGRAM_MATRIX.filter((row) => {
                            if (!matrixFilter.trim()) return true;
                            const q = matrixFilter.toLowerCase();
                            return (
                              row.department.toLowerCase().includes(q) ||
                              row.programs.toLowerCase().includes(q) ||
                              row.eligibility.toLowerCase().includes(q) ||
                              row.duration.toLowerCase().includes(q)
                            );
                          }).map((row, idx) => (
                            <tr
                              key={idx}
                              className="hover:bg-orange-50/40 transition-colors group"
                            >
                              <td className="py-4 px-5 font-bold text-stone-900 group-hover:text-orange-700 transition-colors whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                                  <span>{row.department}</span>
                                </div>
                              </td>
                              <td className="py-4 px-5 text-stone-700 leading-relaxed font-medium">
                                {row.programs}
                              </td>
                              <td className="py-4 px-5 font-mono text-orange-700 font-semibold whitespace-nowrap">
                                <span className="bg-orange-50 border border-orange-200/70 px-2.5 py-1 rounded-md text-xs">
                                  {row.duration}
                                </span>
                              </td>
                              <td className="py-4 px-5 text-stone-600 leading-relaxed text-xs">
                                {row.eligibility}
                              </td>
                              <td className="py-4 px-5 text-right whitespace-nowrap">
                                <button
                                  type="button"
                                  onClick={() => onApplyForDepartment(row.department)}
                                  className="text-xs font-semibold text-orange-600 hover:text-orange-800 underline hover:no-underline cursor-pointer"
                                >
                                  Apply &rarr;
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
