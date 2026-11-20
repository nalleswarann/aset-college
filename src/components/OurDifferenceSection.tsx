import React, { useState, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface DifferenceItem {
  id: string;
  word: string;
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
}

const DIFFERENCE_DATA: DifferenceItem[] = [
  {
    id: 'intelligent',
    word: 'INTELLIGENT',
    subtitle: 'Data-Driven & AI-Integrated Curricula',
    description:
      'Engineered with predictive analytics, AI-assisted simulator labs, and smart aviation diagnostics to prepare graduates for next-generation automated industrial workflows.',
    metric: '100%',
    metricLabel: 'Simulation-Ready Labs',
  },
  {
    id: 'local',
    word: 'LOCAL',
    subtitle: 'Dual Flagship Campuses: Chennai & Coimbatore',
    description:
      'Deeply rooted in Tamil Nadu’s vital industrial corridors with immediate access to major international airports, maritime seaports, and manufacturing centers.',
    metric: '2 Campuses',
    metricLabel: 'Chennai & Coimbatore',
  },
  {
    id: 'global',
    word: 'GLOBAL',
    subtitle: 'International Alliances & Worldwide Mobility',
    description:
      'Backed by 60+ global university partners and corporate ties spanning 12+ countries, offering students study tours, dual-degree pathways, and worldwide placements.',
    metric: '60+',
    metricLabel: 'Global Academic Alliances',
  },
  {
    id: 'excellence',
    word: 'EXCELLENCE',
    subtitle: 'Academically Supported by Alagappa University',
    description:
      'Rigorous academic foundations certified under UGC norms, structured ISO quality frameworks, comprehensive soft-skills grooming, and 100% placement assurance.',
    metric: 'A+',
    metricLabel: 'NAAC Accredited University Support',
  },
];

export const OurDifferenceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  // -------------------------------------------------------------
  // Fast, responsive single-scroll tracking:
  // Instead of an exhausting 720vh, a compact 180vh-200vh height allows
  // a single natural scroll gesture to effortlessly glide through all
  // 4 dimensions (INTELLIGENT -> LOCAL -> GLOBAL -> EXCELLENCE)
  // -------------------------------------------------------------
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Responsive spring physics: instantly reactive with buttery momentum smoothing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 24,
    mass: 0.35,
    restDelta: 0.001,
  });

  // Map the single scroll cleanly across the 4 equal zones
  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    if (latest < 0.25) {
      setActiveWordIndex(0);
    } else if (latest < 0.50) {
      setActiveWordIndex(1);
    } else if (latest < 0.75) {
      setActiveWordIndex(2);
    } else {
      setActiveWordIndex(3);
    }
  });

  // Smooth scroll to an exact dimension step on click
  const scrollToStep = (index: number) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const sectionStart = rect.top + scrollTop;
    const scrollableDistance = sectionRef.current.offsetHeight - window.innerHeight;
    const targetScroll = sectionStart + ((index + 0.35) / 4) * scrollableDistance;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  const activeItem = DIFFERENCE_DATA[activeWordIndex];

  return (
    <section
      ref={sectionRef}
      id="our-difference"
      className="relative w-full h-[140vh] sm:h-[150vh] lg:h-[160vh] bg-[#faf8f5]/80 backdrop-blur-md select-none"
    >
      {/* ========================================================= */}
      {/* STICKY SCREEN CONTAINER: Pinned fixed viewport during      */}
      {/* scroll while items transition with fluid kinetic animation */}
      {/* ========================================================= */}
      <div className="sticky top-0 h-screen h-[100dvh] w-full flex flex-col justify-center overflow-hidden bg-[#faf8f5]/80 backdrop-blur-md border-b border-stone-200/90 text-stone-900 font-manrope">

        {/* ======================================================= */}
        {/* ATMOSPHERIC BACKGROUND: Warm Orange to Crimson Glow     */}
        {/* ======================================================= */}
        <div
          aria-hidden="true"
          className="absolute top-1/3 left-1/4 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] rounded-full bg-gradient-to-br from-orange-500/10 via-rose-500/8 to-transparent blur-3xl pointer-events-none transition-all duration-1000"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 right-10 w-[350px] h-[350px] rounded-full bg-orange-500/8 blur-3xl pointer-events-none"
        />

        {/* Subtle organic light curves */}
        <svg
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          viewBox="0 0 1440 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M-50 150 C 450 350, 750 180, 1500 280 C 1300 700, 850 820, 1450 1050 C 900 950, 600 1100, 200 1000 C 450 700, 100 450, -50 150 Z"
            fill="url(#diffWaveGradSticky)"
          />
          <defs>
            <radialGradient id="diffWaveGradSticky" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#ea580c" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#e1144b" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#faf8f5" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        {/* ======================================================= */}
        {/* 2. MAIN CENTER CONTENT AREA (Proportional & Responsive) */}
        {/* ======================================================= */}
        <div className="relative z-10 flex-1 flex items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4 overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center">
            {/* ----------------------------------------------------- */}
            {/* LEFT COLUMN: Eyebrow + Heading + Context Card         */}
            {/* ----------------------------------------------------- */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-3 sm:space-y-4 lg:space-y-5">
              <div>
                {/* Eyebrow Label with 4-Dot Diamond Accent */}
                <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-stone-500 mb-1.5 sm:mb-2.5">
                  <span>OUR DIFFERENCE</span>
                  <div aria-hidden="true" className="grid grid-cols-2 gap-0.5">
                    <span className="w-1 h-1 rounded-full bg-orange-600" />
                    <span className="w-1 h-1 rounded-full bg-rose-600" />
                    <span className="w-1 h-1 rounded-full bg-rose-600" />
                    <span className="w-1 h-1 rounded-full bg-orange-600" />
                  </div>
                </div>

                {/* Main Heading Prefix + Animated Circular Dial */}
                <div className="flex items-center gap-2.5 sm:gap-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold uppercase tracking-tight text-stone-900 leading-tight">
                    OPERATIONS ARE
                  </h2>

                  {/* Animated Minimalist Compass Dial with Dynamic Progress Arc */}
                  <div
                    aria-hidden="true"
                    className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-stone-300 flex items-center justify-center shrink-0 bg-white shadow-xs"
                  >
                    <svg className="w-full h-full -rotate-90 p-0.5" viewBox="0 0 44 44">
                      <circle
                        cx="22"
                        cy="22"
                        r="18"
                        stroke="#f1f5f9"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <motion.circle
                        cx="22"
                        cy="22"
                        r="18"
                        stroke="url(#dialGradient)"
                        strokeWidth="2.5"
                        fill="none"
                        strokeDasharray={2 * Math.PI * 18}
                        style={{
                          pathLength: smoothProgress,
                        }}
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="dialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ea580c" />
                          <stop offset="100%" stopColor="#e1144b" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-600 to-rose-600 shadow-[0_0_8px_#ea580c]" />
                  </div>
                </div>

                <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed mt-1.5 sm:mt-2 max-w-md font-sans hidden sm:block">
                  Every educational pathway at ASET College is engineered to surpass conventional curricula through high-growth industry integration, dual-campus facilities, and accredited global recognition.
                </p>
              </div>

              {/* Dynamic Context Card: Proportional, clean typography */}
              <div className="relative min-h-[130px] sm:min-h-[150px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className="p-3.5 sm:p-4 lg:p-5 rounded-2xl bg-white/95 border border-stone-200/90 shadow-md shadow-stone-200/40 backdrop-blur-md space-y-2 sm:space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                        <span>Dimension 0{activeWordIndex + 1}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-orange-50 border border-orange-200/80 text-[10px] sm:text-[11px] font-bold text-orange-950">
                        {activeItem.metric}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base lg:text-[17px] font-bold text-stone-900 leading-snug">
                      {activeItem.subtitle}
                    </h4>

                    <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed font-sans line-clamp-2 sm:line-clamp-none">
                      {activeItem.description}
                    </p>

                    <div className="pt-0.5 flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-stone-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{activeItem.metricLabel}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dimension Navigation Indicators with Smooth Jump */}
              <div className="flex items-center gap-2 pt-0.5">
                {DIFFERENCE_DATA.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToStep(i)}
                    aria-label={`Jump to dimension 0${i + 1}`}
                    className="group py-1 px-0.5 cursor-pointer focus:outline-hidden"
                  >
                    <div
                      className={`h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeWordIndex === i
                        ? 'w-7 sm:w-9 bg-gradient-to-r from-orange-500 to-rose-600 shadow-xs shadow-orange-500/25'
                        : 'w-2 bg-stone-300 group-hover:bg-stone-400'
                        }`}
                    />
                  </button>
                ))}
                <span className="text-[10px] sm:text-[11px] font-mono text-stone-400 ml-1.5 font-bold">
                  0{activeWordIndex + 1} / 04
                </span>
              </div>
            </div>

            {/* ----------------------------------------------------- */}
            {/* RIGHT COLUMN: 4 Monumental Words (Suitable Font Sizes) */}
            {/* Proportional scaling, zero clipping, ample room for arrow */}
            {/* ----------------------------------------------------- */}
            <div className="lg:col-span-7 flex flex-col space-y-1.5 sm:space-y-2.5 lg:space-y-3.5 justify-center">
              {DIFFERENCE_DATA.map((item, index) => {
                const isActive = activeWordIndex === index;

                return (
                  <div
                    key={item.id}
                    onClick={() => scrollToStep(index)}
                    className="group relative cursor-pointer py-1 sm:py-1.5 select-none"
                  >
                    <motion.div
                      animate={{
                        x: isActive ? (typeof window !== 'undefined' && window.innerWidth >= 640 ? 10 : 4) : 0,
                      }}
                      transition={{ type: 'spring', stiffness: 240, damping: 24 }}
                      className="flex items-center justify-between"
                    >
                      {/* Suitable Harmonious Font Scale (Never overflows screen) */}
                      <h3
                        className={`text-2xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.75rem] 2xl:text-[4.25rem] font-black uppercase tracking-tight leading-none select-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive
                          ? 'text-gradient-accent drop-shadow-[0_4px_20px_rgba(234,88,12,0.2)]'
                          : 'text-stone-300/80 hover:text-stone-400'
                          }`}
                      >
                        {item.word}
                      </h3>

                      {/* Active Indicator Arrow Button with Smooth Scale & Fade */}
                      <div
                        className={`flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive
                          ? 'bg-gradient-to-r from-orange-500 to-rose-600 text-white shadow-md shadow-orange-500/25 scale-100 opacity-100'
                          : 'opacity-0 -translate-x-3 scale-75 group-hover:opacity-40 group-hover:translate-x-0 text-stone-400'
                          }`}
                      >
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </motion.div>

                    {/* Underline Progress Line with Smooth Transition */}
                    <div className="h-[2px] w-full bg-stone-200/70 mt-1.5 sm:mt-2.5 overflow-hidden rounded-full">
                      {isActive ? (
                        <motion.div
                          layoutId="active-difference-line"
                          className="h-full bg-gradient-to-r from-orange-500 via-rose-500 to-red-600 rounded-full"
                          transition={{ type: 'spring', stiffness: 180, damping: 22 }}
                        />
                      ) : (
                        <div className="h-full w-0 group-hover:w-16 bg-stone-300 transition-all duration-300" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ======================================================= */}
        {/* 3. BOTTOM SCROLL TRACK INDICATOR BAR                    */}
        {/* Shows smooth, swift progress across the single scroll   */}
        {/* ======================================================= */}
        <div className="w-full shrink-0 border-t border-stone-200/80 bg-white/75 backdrop-blur-xs py-1.5 sm:py-2 px-4 sm:px-8 flex items-center justify-between text-[11px] font-mono text-stone-500 z-20">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
            <span className="hidden sm:inline">Scroll to explore dimensions</span>
            <span className="sm:hidden">Swipe to explore</span>
          </span>
          <div className="w-24 sm:w-40 h-1.5 bg-stone-200/90 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: smoothProgress, transformOrigin: 'left' }}
              className="h-full bg-gradient-to-r from-orange-500 to-rose-600"
            />
          </div>
          <button
            type="button"
            onClick={() => scrollToStep((activeWordIndex + 1) % 4)}
            className="hover:text-orange-600 transition-colors cursor-pointer font-bold"
          >
            {activeWordIndex < 3 ? 'Next Dimension ↓' : 'Next Section ↓'}
          </button>
        </div>
      </div>
    </section>
  );
};
