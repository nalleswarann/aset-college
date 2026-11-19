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
import heroCampusImg from '../assets/images/hero_university_campus_1794469701413.jpg';
import aviationImg from '../assets/images/aset-aviation-students.png';
import logisticsImg from '../assets/images/dept_global_business_1794469703130.jpg';
import safetyImg from '../assets/images/dept_biotech_robotics_1794469703091.jpg';
import analyticsImg from '../assets/images/dept_design_architecture_1794469703164.jpg';
import commerceImg from '../assets/images/aset-graduates-wearing-caps.jpg';
import hospitalityImg from '../assets/images/aset-college-pathway-sunset.jpg';

import {
  ChevronLeft,
  ChevronRight,
  Table,
  CheckCircle2,
  ArrowRight,
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
  },
];

export const DepartmentSection: React.FC<DepartmentSectionProps> = ({
  onSelectDepartment,
  onApplyForDepartment,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isVisionPhase, setIsVisionPhase] = useState(false);

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
      {/* 1. Starts with big architectural image ("02 OUR VALUES")                  */}
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
              className={`absolute inset-0 z-10 transition-opacity duration-500 ease-out pointer-events-none ${
                isVisionPhase ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <img
                src={heroCampusImg}
                alt="ASET College Architecture"
                className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/60 pointer-events-none" />
            </div>

            {/* Phase 2 Department Filmstrip (Hardware-accelerated vertical elevator) */}
            <div
              className={`absolute inset-0 z-20 transition-opacity duration-500 ease-out ${
                isVisionPhase ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
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
                      className="w-full h-full object-cover select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-stone-950/20 pointer-events-none" />
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
              className={`absolute inset-0 z-10 transition-opacity duration-500 ease-out pointer-events-none ${
                isVisionPhase ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <img
                src={heroCampusImg}
                alt="ASET College Architecture"
                className="w-full h-full object-cover object-center filter brightness-[0.78]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/60 pointer-events-none" />
            </div>

            {/* Phase 2 Mobile Filmstrip */}
            <div
              className={`absolute inset-0 z-20 transition-opacity duration-500 ease-out ${
                isVisionPhase ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
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
                      className="w-full h-full object-cover select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-stone-950/20 pointer-events-none" />
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
              {/* Top-Left: 02 OUR VALUES (Padded safely below floating glass navbar) */}
              <div className="flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-white">
                <span className="font-bold text-orange-400">02</span>
                <span className="w-8 h-px bg-white/40" />
                <h2 className="font-semibold text-white tracking-[0.22em] drop-shadow-sm">OUR VALUES</h2>
              </div>

              {/* Bottom Row: Telha Clarke layout (Left: Pill CTA, Right: 2-Sentence Manifesto) */}
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12 pointer-events-auto">
                {/* Left Side: Floating Black Pill CTA */}
                <div className="shrink-0">
                  <button
                    onClick={() => onApplyForDepartment('General Admissions')}
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-black text-white text-xs font-mono font-medium tracking-wide shadow-2xl hover:bg-stone-800 transition-all duration-300 cursor-pointer border border-white/15 active:scale-95"
                  >
                    <span className="text-white text-sm leading-none">❖</span>
                    <span>Let&apos;s work together</span>
                  </button>
                </div>

                {/* Right Side: Editorial Manifesto */}
                <div className="max-w-xl lg:text-right space-y-3">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-light text-white leading-relaxed drop-shadow-sm">
                    We provide institutional-grade academic excellence and a hands-on approach.
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-white/90 font-light leading-relaxed">
                    Underpinning all of our disciplines is an understanding of industry demand,
                    student potential, and experiential training, so that academic pathways and
                    degrees remain meaningful and relevant over time.
                  </p>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-orange-300/90 pt-1">
                    Affiliated to Alagappa University &bull; Admissions 2026&ndash;2027
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
            className={`w-full lg:w-1/2 lg:max-w-[50%] h-[60%] lg:h-full flex flex-col justify-between pt-5 sm:pt-8 lg:pt-36 pb-6 sm:pb-8 lg:pb-16 px-6 sm:px-10 lg:px-12 xl:px-16 bg-[#faf8f5] z-10 shrink-0 transition-opacity duration-300 ${
              isVisionPhase ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* 1. Top-Left: 03 OUR VISION Eyebrow with Alagappa Badge */}
            <div className="flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-3 text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-stone-500">
                <span className="font-bold text-orange-600">03</span>
                <span className="w-8 h-px bg-stone-300" />
                <h2 className="font-semibold text-stone-900 tracking-[0.22em]">OUR VISION</h2>
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
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-manrope font-extrabold tracking-tight text-[#111111] leading-[1.08]">
                    {activeItem.prefix}{' '}
                    <span className="text-gradient-title">{activeItem.highlight}</span>
                  </h3>

                  {/* Editorial Description: Dark Charcoal (#333333) with high contrast */}
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-[#333333] font-normal leading-relaxed">
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
                <span className="text-white text-sm leading-none">❖</span>
                <span>Let&apos;s work together</span>
              </button>

              {/* Minimalist Slide Progress Dots with Gradient Active Dot */}
              <div className="flex items-center gap-1.5">
                {REFINED_DEPARTMENTS.map((dept, idx) => (
                  <button
                    key={dept.id}
                    onClick={() => scrollToDepartment(idx)}
                    aria-label={`Jump to ${dept.fullName}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      activeIdx === idx
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
      {/* SECTION 4: ACADEMIC SPECIFICATION GUIDE TABLE                             */}
      {/* Warm Cream (#faf8f5) Backdrop, Minimalist Table & Full Prospectus Specs   */}
      {/* ========================================================================= */}
      <div className="bg-[#faf8f5] text-stone-900 px-6 sm:px-10 lg:px-20 py-20 border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="space-y-3">
              <ScrollEyebrow delay={0.04} className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-stone-500">
                <span className="text-amber-600 font-bold text-sm">04</span>
                <span className="w-8 h-px bg-stone-300" />
                <span className="text-stone-800 font-semibold flex items-center gap-1.5">
                  <Table className="w-3.5 h-3.5 text-amber-600" />
                  ACADEMIC SPECIFICATION GUIDE
                </span>
              </ScrollEyebrow>
              <ScrollHeading as="h3" delay={0.12} className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold tracking-tight text-stone-900 leading-tight">
                Program Duration &amp;{' '}
                <span className="text-gradient-title">
                  Entry Eligibility Guide
                </span>
              </ScrollHeading>
            </div>
            <ScrollAction delay={0.2} className="self-start md:self-end">
              <p className="text-xs font-mono text-stone-500 bg-white border border-stone-200/90 px-3.5 py-1.5 rounded-full shadow-2xs">
                2026&ndash;2027 Academic Prospectus &bull; Pages 3&ndash;4
              </p>
            </ScrollAction>
          </div>

          <div className="overflow-x-auto border border-stone-200/90 rounded-2xl bg-white shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-stone-950 text-stone-100 font-mono uppercase tracking-wider text-[11px] border-b border-stone-800">
                  <th className="py-4 px-5">Department</th>
                  <th className="py-4 px-5">Representative Programs</th>
                  <th className="py-4 px-5 whitespace-nowrap">Typical Duration</th>
                  <th className="py-4 px-5">Entry Eligibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200/80 font-manrope">
                {PROGRAM_MATRIX.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="hover:bg-orange-50/40 transition-colors group"
                  >
                    <td className="py-4 px-5 font-bold text-stone-900 group-hover:text-orange-700 transition-colors">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <span>{row.department}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-stone-700 leading-relaxed">
                      {row.programs}
                    </td>
                    <td className="py-4 px-5 font-mono text-orange-700 font-semibold whitespace-nowrap">
                      <span className="bg-orange-100/70 border border-orange-200/60 px-2.5 py-1 rounded-md text-xs">
                        {row.duration}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-stone-600 leading-relaxed">
                      {row.eligibility}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
