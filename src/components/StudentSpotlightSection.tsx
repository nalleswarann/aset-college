import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import campusBuildingCutout from '../assets/images/aset-campus-modern-cutout.png';

interface StudentSpotlightSectionProps {
  onOpenAdmissions: () => void;
  onExploreDepartments: () => void;
}

export const StudentSpotlightSection: React.FC<StudentSpotlightSectionProps> = ({
  onOpenAdmissions,
  onExploreDepartments,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // High-performance scroll tracking tuned for zero lag, zero stutter, and 120fps hardware acceleration
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.8,
    restDelta: 0.001,
  });

  // Building animation: Glides in smoothly from the LEFT side with GPU-composited translate
  const buildingSlideX = useTransform(smoothScroll, [0, 0.35, 1], [-80, 0, 12]);
  const buildingOpacity = useTransform(smoothScroll, [0, 0.2], [0.75, 1]);

  // Monumental CHENNAI COIMBATORE text subtle floating drift
  const textScrollY = useTransform(smoothScroll, [0, 1], [-15, 20]);

  return (
    <section
      ref={sectionRef}
      id="spotlight"
      className="relative w-full overflow-hidden bg-[#faf8f5] text-white font-manrope py-16 sm:py-20 lg:py-28 select-none border-b border-stone-200/90"
    >
      {/* Expansive Wide Container */}
      <div className="w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Master Poster Canvas: Rich vibrant crimson velvet red background */}
        <div className="relative rounded-[32px] sm:rounded-[44px] bg-gradient-to-br from-[#a8161e] via-[#851117] to-[#4e070c] border border-red-500/30 shadow-[0_24px_70px_rgba(185,28,28,0.22)] overflow-hidden min-h-0 md:min-h-[700px] lg:min-h-[740px] xl:min-h-[780px] flex flex-col justify-between">
          {/* ========================================================= */}
          {/* BACKGROUND LAYER: Optimized Crimson Petal Atmosphere Glow */}
          {/* ========================================================= */}
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-16 w-[450px] h-[450px] rounded-full bg-red-400/20 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute top-1/4 left-1/3 w-[380px] h-[380px] rounded-full bg-rose-500/15 blur-3xl pointer-events-none"
          />

          {/* Organic Crimson Floral & Silk Waves matching Reference Image */}
          <svg
            className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-screen pointer-events-none"
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M100 -60 C 500 160, 850 60, 1480 -30 C 1240 360, 1060 560, 1460 880 C 940 760, 740 900, 360 860 C 560 520, 240 320, 100 -60 Z"
              fill="url(#crimsonWaveGrad)"
            />
            <path
              d="M-40 180 C 320 340, 620 220, 980 440 C 720 680, 420 840, -40 730 Z"
              fill="url(#crimsonWaveGrad2)"
            />
            <defs>
              <radialGradient id="crimsonWaveGrad" cx="60%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
                <stop offset="45%" stopColor="#dc2626" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0.05" />
              </radialGradient>
              <radialGradient id="crimsonWaveGrad2" cx="30%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#f87171" stopOpacity="0.35" />
                <stop offset="55%" stopColor="#b91c1c" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#450a0a" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>

          {/* ========================================================= */}
          {/* MIDGROUND LAYER (z-10): MONUMENTAL TEXT BEHIND BUILDING   */}
          {/* Big Size "CHENNAI COIMBATORE" with Hardware Compositing   */}
          {/* ========================================================= */}
          <motion.div
            style={{
              y: textScrollY,
              transform: 'translate3d(0, 0, 0)',
              willChange: 'transform',
            }}
            className="relative md:absolute top-0 md:top-6 lg:md:top-10 left-0 md:left-6 lg:md:left-12 z-10 select-none pointer-events-none p-5 sm:p-7 md:p-0"
          >
            {/* Curatorial Header Eyebrow */}
            <div className="flex flex-wrap items-center gap-2.5 mb-2 sm:mb-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[11px] sm:text-xs font-inter font-medium text-amber-200 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>Innovation · Inspiration · Future</span>
              </div>
              <span className="text-[11px] sm:text-xs font-inter uppercase tracking-wider text-red-100 font-bold hidden sm:inline drop-shadow-xs">
                ASET College of Science &amp; Technology · Institutional Excellence
              </span>
            </div>

            {/* BIG SIZE TEXTS: CHENNAI COIMBATORE */}
            <div className="font-manrope font-black text-5xl sm:text-7xl md:text-7xl lg:text-[105px] xl:text-[128px] uppercase tracking-tighter text-white/95 leading-[0.84] select-none drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)]">
              <div>CHENNAI</div>
              <div className="text-white/80">COIMBATORE</div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* FOREGROUND LAYER (z-20): COLLEGE BUILDING FROM LEFT SIDE  */}
          {/* GPU Hardware Accelerated + Smooth Right Opacity Dissolve  */}
          {/* ========================================================= */}
          <motion.div
            style={{
              x: buildingSlideX,
              opacity: buildingOpacity,
              transform: 'translate3d(0, 0, 0)',
              willChange: 'transform, opacity',
            }}
            className="relative md:absolute bottom-0 left-0 z-20 w-full md:w-[62%] lg:w-[58%] xl:w-[54%] max-w-[1000px] pointer-events-none my-4 md:my-0"
          >
            <div className="relative w-full">
              {/* Grand Building Image: Seamless Right-Side Opacity Merge with Instant Decoding */}
              <img
                src={campusBuildingCutout}
                alt="ASET College Campus Building"
                loading="eager"
                decoding="async"
                className="w-full h-auto max-h-[360px] sm:max-h-[460px] md:max-h-[520px] lg:max-h-[620px] xl:max-h-[680px] object-contain object-bottom-left"
                style={{
                  maskImage:
                    'linear-gradient(to right, black 0%, black 35%, rgba(0,0,0,0.6) 62%, transparent 88%), linear-gradient(to top, transparent 0%, black 12%, black 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to right, black 0%, black 35%, rgba(0,0,0,0.6) 62%, transparent 88%), linear-gradient(to top, transparent 0%, black 12%, black 100%)',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'destination-in',
                }}
              />
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT SIDE CONTENT (z-30): TWO CARDS                      */}
          {/* Perfectly Framed, Fully Visible on All Viewports          */}
          {/* ========================================================= */}
          <div className="relative md:absolute bottom-0 md:bottom-6 lg:md:bottom-8 xl:md:bottom-10 right-0 md:right-6 lg:md:right-8 xl:md:right-10 z-30 p-4 sm:p-6 md:p-0 w-full md:w-auto md:max-w-[560px] lg:max-w-[640px] xl:max-w-[700px] pointer-events-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-5 items-stretch">
              {/* ------------------------------------------------------- */}
              {/* CARD 1: Frosted Crimson Glass (Campus 01 · Chennai)    */}
              {/* Smooth Side Transition from Left                      */}
              {/* ------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, x: -35, y: 15 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, scale: 1.015 }}
                className="relative p-5 sm:p-5.5 lg:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#7a1017]/85 via-[#540c11]/80 to-[#35070a]/85 backdrop-blur-xl border border-red-400/30 shadow-[0_15px_40px_rgba(0,0,0,0.4)] flex flex-col justify-between group overflow-hidden"
              >
                {/* Ambient Corner Glow */}
                <div
                  aria-hidden="true"
                  className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-red-400/25 blur-xl pointer-events-none"
                />

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-inter font-bold uppercase tracking-wider text-amber-300/90">
                      Campus 01 · Chennai
                    </span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-manrope font-extrabold text-white tracking-tight leading-snug">
                    Shaping Confident, Industry-Ready Graduates
                  </h4>

                  <p className="text-xs text-red-100/90 leading-relaxed font-sans line-clamp-3 sm:line-clamp-none">
                    From dedicated Fire &amp; Safety labs and airport ground-operations briefings to global logistics simulations, ASET equips every learner with technical competence and practical readiness.
                  </p>

                  <div className="pt-1.5 flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-[10px] sm:text-[11px] font-inter font-medium text-red-100 border border-white/15">
                      10,000+ Learners
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-[10px] sm:text-[11px] font-inter font-medium text-red-100 border border-white/15">
                      Alagappa University
                    </span>
                  </div>
                </div>

                <div className="pt-3.5 mt-3 border-t border-white/20 flex items-center justify-between text-xs text-red-200 font-inter">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                    <span className="text-[11px] sm:text-xs">State-of-the-Art Labs</span>
                  </div>
                  <span className="text-amber-300 font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">
                    UG · PG · Diploma
                  </span>
                </div>
              </motion.div>

              {/* ------------------------------------------------------- */}
              {/* CARD 2: Signature Arched Portal Glass (Coimbatore)     */}
              {/* Smooth Side Transition from Right                     */}
              {/* ------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, x: 35, y: 15 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, scale: 1.015 }}
                className="relative p-5 sm:p-5.5 lg:p-6 rounded-tl-2xl rounded-tr-[55px] sm:rounded-tr-[70px] rounded-bl-2xl rounded-br-2xl bg-gradient-to-br from-[#1a0407]/90 via-[#120205]/95 to-[#0a0102]/95 backdrop-blur-2xl border border-white/25 shadow-[0_18px_45px_rgba(0,0,0,0.5)] flex flex-col justify-between group overflow-hidden"
              >
                {/* Ambient subtle glow */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-28 h-28 rounded-full bg-red-500/20 blur-2xl pointer-events-none"
                />

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-inter font-bold uppercase tracking-wider text-amber-300/90">
                      Campus 02 · Coimbatore
                    </span>
                    <span className="text-[10px] font-inter text-red-300 font-semibold uppercase px-2 py-0.5 rounded-full bg-red-950/80 border border-red-800/60">
                      Career Pathways
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-manrope font-extrabold text-white tracking-tight leading-snug">
                    Placement Readiness &amp; Corporate Network
                  </h4>

                  <p className="text-xs text-stone-200/90 leading-relaxed font-sans line-clamp-3 sm:line-clamp-none">
                    12-area structured placement training, monthly industrial visits (IVs), and mandatory corporate internships across aviation, shipping, safety, and business hubs.
                  </p>

                  <div className="pt-1.5 flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-[10px] sm:text-[11px] font-inter font-medium text-stone-200 border border-white/15">
                      12 Training Areas
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-[10px] sm:text-[11px] font-inter font-medium text-stone-200 border border-white/15">
                      100% Placement Support
                    </span>
                  </div>
                </div>

                {/* Bottom Action CTA & Department Explore Buttons */}
                <div className="pt-3.5 mt-3 border-t border-white/20 flex flex-wrap items-center justify-between gap-2">
                  <button
                    onClick={onOpenAdmissions}
                    className="group inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-[#b91c1c] to-[#991b1b] hover:from-[#dc2626] hover:to-[#b91c1c] text-white text-xs font-inter font-bold shadow-md shadow-red-950/40 hover:scale-102 active:scale-98 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                    <span>Apply 2026–2027</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={onExploreDepartments}
                    className="text-xs text-stone-300 hover:text-white font-inter font-semibold transition-colors flex items-center gap-1 cursor-pointer py-1"
                  >
                    <span>6 Depts</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
