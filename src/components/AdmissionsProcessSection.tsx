import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'motion/react';
import {
  FileCheck2,
  Compass,
  Users,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import { ADMISSIONS_STEPS } from '../data/universityData';
import redAeroplane from '../assets/images/red-aeroplane.png';
import {
  ScrollHeading,
  ScrollParagraph,
  ScrollEyebrow,
  ScrollAction,
} from './ScrollTypography';

interface AdmissionsProcessSectionProps {
  onOpenAdmissions: () => void;
}

export const AdmissionsProcessSection: React.FC<AdmissionsProcessSectionProps> = ({
  onOpenAdmissions,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Smooth scroll tracking across the admissions process section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 65%', 'end 75%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 26,
    mass: 0.25,
    restDelta: 0.001,
  });

  // Track the active milestone as the aeroplane reaches each section step
  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    if (latest < 0.28) {
      setActiveStep(0);
    } else if (latest < 0.58) {
      setActiveStep(1);
    } else if (latest < 0.84) {
      setActiveStep(2);
    } else {
      setActiveStep(3);
    }
  });

  // Vertical position of the aeroplane along the timeline guideline track (0% -> 100%)
  const planeTop = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  const stepIcons = [FileCheck2, Compass, Users, GraduationCap];

  return (
    <section
      ref={sectionRef}
      id="admissions-process"
      className="relative w-full overflow-hidden bg-[#faf8f5] text-stone-900 font-manrope py-20 sm:py-24 lg:py-32 select-none border-b border-stone-200/90"
    >
      {/* ========================================================= */}
      {/* ATMOSPHERIC BACKGROUND: Warm Orange to Crimson Rose Glow   */}
      {/* ========================================================= */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-orange-500/10 via-rose-500/8 to-transparent blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 left-10 w-[450px] h-[450px] rounded-full bg-orange-500/8 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 w-[480px] h-[480px] rounded-full bg-rose-500/8 blur-3xl pointer-events-none"
      />

      {/* Subtle organic light curves */}
      <svg
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        viewBox="0 0 1440 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-50 100 C 400 300, 800 150, 1500 250 C 1300 650, 900 850, 1450 1150 C 950 1050, 600 1180, 200 1100 C 450 750, 100 500, -50 100 Z"
          fill="url(#lightWaveGrad)"
        />
        <defs>
          <radialGradient id="lightWaveGrad" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#e1144b" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className="relative z-10 w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* TOP REFERENCE HEADER BAR (Matching Reference Image)        */}
        {/* Left: ADMISSIONS PROCESS | Right: 2026–2027 Session       */}
        {/* ========================================================= */}
        <div className="flex items-center justify-between pb-3.5 border-b border-stone-200/90 mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-inter uppercase tracking-widest text-stone-500 font-bold">
            Admissions Process
          </span>
          <span className="text-xs sm:text-sm font-inter font-bold text-amber-800">
            2026–2027 Session
          </span>
        </div>

        {/* ========================================================= */}
        {/* SECTION HEADER: Title & Curatorial Guidance               */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 space-y-3">
          <ScrollEyebrow delay={0.04} className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-orange-600">
              STEP-BY-STEP ADMISSIONS PATHWAY
            </span>
          </ScrollEyebrow>

          <ScrollHeading delay={0.12} className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold tracking-tight text-stone-900 leading-tight">
            Your Step-by-Step Pathway to{' '}
            <span className="text-gradient-title font-medium">
              ASET Excellence
            </span>
          </ScrollHeading>

          <ScrollParagraph delay={0.2} className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans max-w-2xl mx-auto">
            From eligibility verification to official enrollment confirmation, our streamlined admission journey ensures personal academic mentorship and career-aligned guidance every step of the way.
          </ScrollParagraph>

          <ScrollAction delay={0.28} className="pt-1.5 flex flex-wrap items-center justify-center gap-4 text-xs font-inter text-stone-600">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="font-medium">Academically Supported by Alagappa University</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="font-medium">Scholarships up to 100% Available</span>
            </div>
          </ScrollAction>
        </div>

        {/* ========================================================= */}
        {/* TIMELINE CONTAINER: Flight Moving Along with Scroll       */}
        {/* Travels along the line reaching each section step cleanly */}
        {/* ========================================================= */}
        <div className="relative">
          {/* Central Vertical Timeline Spine Track */}
          <div
            aria-hidden="true"
            className="absolute left-5 sm:left-7 md:left-1/2 -translate-x-1/2 top-4 bottom-8 w-[3px] pointer-events-none z-10"
          >
            {/* Guide track line (neutral path in front of plane) */}
            <div className="w-[2px] h-full mx-auto bg-stone-300/80 rounded-full" />

            {/* Scroll-Driven Red Line (trails behind the aeroplane tail) */}
            <motion.div
              style={{
                scaleY: smoothProgress,
                transformOrigin: 'top',
                willChange: 'transform',
              }}
              className="absolute inset-0 w-full h-full bg-red-600 rounded-full"
            />
          </div>

          {/* ========================================================= */}
          {/* AEROPLANE TRAVELING UNIT (Clean Flight Animation)          */}
          {/* Centered on track, trailing red line, reaching each step   */}
          {/* ========================================================= */}
          <div
            aria-hidden="true"
            className="absolute left-5 sm:left-7 md:left-1/2 -translate-x-1/2 top-4 bottom-8 w-0 pointer-events-none z-30 overflow-visible flex justify-center"
          >
            <motion.div
              style={{
                top: planeTop,
                willChange: 'top',
              }}
              className="absolute left-0 -translate-x-1/2 -translate-y-2 pointer-events-none select-none flex flex-col items-center overflow-visible"
            >
              <div className="relative select-none pointer-events-none overflow-visible flex items-center justify-center w-8 sm:w-10 md:w-11 h-auto">
                {/* Laser line junction beacon at plane tail */}
                <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-600 shadow-[0_0_8px_#ef4444] z-10 flex items-center justify-center pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_4px_#ffffff]" />
                </div>

                {/* Sleek Crimson Aeroplane */}
                <img
                  src={redAeroplane}
                  alt="Admissions Flight"
                  className="w-8 sm:w-10 md:w-11 h-auto object-contain select-none pointer-events-none filter drop-shadow-[0_4px_10px_rgba(220,38,38,0.25)]"
                />
              </div>
            </motion.div>
          </div>

          {/* 4 Admissions Process Steps */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {ADMISSIONS_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx] || FileCheck2;
              const isEven = idx % 2 === 0;
              const isCurrent = idx === activeStep;
              const isPassed = idx < activeStep;

              return (
                <div
                  key={step.step}
                  className="relative flex items-center md:justify-between group"
                >
                  {/* Central Node on the Spine (Highlights when flight reaches this step) */}
                  <div className="absolute left-5 sm:left-7 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isCurrent
                        ? 'bg-white border-2 border-red-600 text-red-600 shadow-md shadow-red-600/25 scale-110'
                        : isPassed
                          ? 'bg-red-50 border-2 border-red-600 text-red-700 shadow-xs'
                          : 'bg-white border-2 border-stone-300/90 text-stone-400 shadow-xs'
                        }`}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform" />
                    </div>
                  </div>

                  {/* Step Card */}
                  <div
                    className={`w-full md:w-[46%] pl-11 sm:pl-14 md:pl-0 ${isEven ? 'md:mr-auto md:pr-6 lg:pr-8' : 'md:ml-auto md:pl-6 lg:pl-8'
                      }`}
                  >
                    <div
                      className={`relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white border transition-all duration-300 overflow-hidden group ${isCurrent
                        ? 'border-red-500/60 shadow-[0_12px_28px_rgba(220,38,38,0.08)] -translate-y-0.5 ring-1 ring-red-500/20'
                        : 'border-stone-200/90 shadow-[0_3px_14px_rgba(0,0,0,0.03)] hover:border-red-500/40 hover:shadow-[0_8px_20px_rgba(185,28,28,0.05)] hover:-translate-y-0.5'
                        }`}
                    >
                      {/* Subtle ambient light gradient in top right */}
                      <div
                        aria-hidden="true"
                        className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-red-500/5 blur-xl pointer-events-none"
                      />

                      {/* Header Row: Step Number & Reference Badges */}
                      <div className="flex items-center justify-between pb-2.5 border-b border-stone-100 mb-2.5 gap-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-manrope text-lg sm:text-xl md:text-2xl font-black tracking-tight whitespace-nowrap ${isCurrent ? 'text-red-700' : 'text-stone-900'
                              }`}
                          >
                            {step.step}
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-inter uppercase tracking-wider px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-semibold border border-stone-200/80 whitespace-nowrap">
                            Milestone 0{idx + 1}
                          </span>
                        </div>

                        {isCurrent ? (
                          <span className="text-[11px] sm:text-xs font-inter font-bold text-red-700 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-50 border border-red-200/70 whitespace-nowrap">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                            <span>Active Step</span>
                          </span>
                        ) : isPassed ? (
                          <span className="text-[11px] sm:text-xs font-inter font-semibold text-emerald-700 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/70 whitespace-nowrap">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>Completed</span>
                          </span>
                        ) : (
                          <span className="text-[11px] sm:text-xs font-inter font-medium text-stone-400 px-2 py-0.5 rounded-full bg-stone-50 border border-stone-200/60 whitespace-nowrap">
                            Upcoming
                          </span>
                        )}
                      </div>

                      {/* Title & Summary */}
                      <div className="space-y-1 mb-2.5">
                        <h3 className="text-base sm:text-lg md:text-xl font-manrope font-bold text-stone-900 tracking-tight leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] md:text-sm text-stone-600 leading-relaxed font-sans">
                          {step.summary}
                        </p>
                      </div>

                      {/* Highlighted Note Alert Banner */}
                      <div className="px-3 py-2 sm:px-3.5 sm:py-2 rounded-lg bg-amber-50/80 border-l-[3px] border-amber-600 text-[11px] sm:text-xs text-stone-700 font-inter flex items-baseline gap-1.5 leading-relaxed">
                        <strong className="text-amber-800 font-bold uppercase tracking-wider text-[10px] shrink-0">
                          Note:
                        </strong>
                        <span>{step.detail}</span>
                      </div>

                      {/* Additional Step 04 Action CTA */}
                      {idx === 3 && (
                        <div className="pt-3 mt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2.5">
                          <button
                            onClick={onOpenAdmissions}
                            className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#a8161e] via-[#dc2626] to-[#a8161e] hover:from-[#dc2626] hover:to-[#ef4444] text-white text-xs font-inter font-bold shadow-md shadow-red-900/15 hover:scale-102 active:scale-98 transition-all cursor-pointer"
                          >
                            <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
                            <span>Apply for 2026–2027 Batch</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                          </button>
                          <span className="text-[11px] sm:text-xs font-inter text-stone-500">
                            Supported by Alagappa University
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM CALL-TO-ACTION LOCKUP                              */}
        {/* ========================================================= */}
        <div className="mt-14 sm:mt-18 text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-50/70 via-white to-amber-50/70 border border-stone-200 max-w-3xl mx-auto shadow-sm">
          <div className="space-y-2.5">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-manrope font-extrabold text-stone-900">
              Ready to Begin Your Admissions Journey?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto font-sans leading-relaxed">
              Our dedicated counselors across Chennai and Coimbatore campuses are ready to guide you through program selection, scholarships, and career pathways.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onOpenAdmissions}
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#a8161e] to-[#7f1d1d] hover:from-[#dc2626] hover:to-[#991b1b] text-white text-xs sm:text-sm font-inter font-bold shadow-md shadow-red-900/20 hover:scale-102 active:scale-98 transition-all cursor-pointer"
              >
                <span>Start Application for 2026–2027</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <div className="pt-1 text-[11px] sm:text-xs font-inter text-stone-500">
              Academically supported by Alagappa University · Campuses in Chennai &amp; Coimbatore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
