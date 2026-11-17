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
    stiffness: 110,
    damping: 24,
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
      className="relative w-full overflow-hidden bg-[#faf8f5] text-stone-900 font-manrope py-16 sm:py-20 lg:py-28 select-none border-b border-stone-200/90"
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
        <div className="flex items-center justify-between pb-4 border-b border-stone-200/90 mb-10 sm:mb-14">
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
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24 space-y-4">
          <ScrollEyebrow delay={0.04} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-xs font-inter font-semibold text-red-900 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="uppercase tracking-wider">Step-by-Step Admissions Pathway</span>
          </ScrollEyebrow>

          <ScrollHeading delay={0.12} className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold tracking-tight text-stone-900 leading-tight">
            Your Step-by-Step Pathway to{' '}
            <span className="text-gradient-accent">
              ASET Excellence
            </span>
          </ScrollHeading>

          <ScrollParagraph delay={0.2} className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans max-w-2xl mx-auto">
            From eligibility verification to official enrollment confirmation, our streamlined admission journey ensures personal academic mentorship and career-aligned guidance every step of the way.
          </ScrollParagraph>

          <ScrollAction delay={0.28} className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-inter text-stone-600">
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
            className="absolute left-10 sm:left-14 md:left-1/2 -translate-x-1/2 top-4 bottom-12 w-[3px] pointer-events-none z-10"
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
            className="absolute left-10 sm:left-14 md:left-1/2 -translate-x-1/2 top-4 bottom-12 w-0 pointer-events-none z-30 overflow-visible flex justify-center"
          >
            <motion.div
              style={{
                top: planeTop,
                willChange: 'top',
              }}
              className="absolute left-0 -translate-x-1/2 -translate-y-2 pointer-events-none select-none flex flex-col items-center overflow-visible"
            >
              <div className="relative select-none pointer-events-none overflow-visible flex items-center justify-center w-10 sm:w-12 h-auto">
                {/* Laser line junction beacon at plane tail */}
                <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-red-600 shadow-[0_0_10px_#ef4444] z-10 flex items-center justify-center pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_4px_#ffffff]" />
                </div>

                {/* Sleek Crimson Aeroplane (Matching reference design exactly) */}
                <img
                  src={redAeroplane}
                  alt="Admissions Flight"
                  className="w-10 sm:w-12 h-auto object-contain select-none pointer-events-none filter drop-shadow-[0_6px_14px_rgba(220,38,38,0.3)]"
                />
              </div>
            </motion.div>
          </div>

          {/* 4 Admissions Process Steps */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
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
                  <div className="absolute left-10 sm:left-14 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isCurrent
                          ? 'bg-white border-2 border-red-600 text-red-600 shadow-md shadow-red-600/25 scale-110'
                          : isPassed
                          ? 'bg-red-50 border-2 border-red-600 text-red-700 shadow-xs'
                          : 'bg-white border-2 border-stone-300/90 text-stone-400 shadow-xs'
                      }`}
                    >
                      <Icon className="w-5 h-5 transition-transform" />
                    </div>
                  </div>

                  {/* Step Card */}
                  <div
                    className={`w-full md:w-[46%] pl-24 sm:pl-32 md:pl-0 ${
                      isEven ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'
                    }`}
                  >
                    <div
                      className={`relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border transition-all duration-300 overflow-hidden group ${
                        isCurrent
                          ? 'border-red-500/60 shadow-[0_16px_36px_rgba(220,38,38,0.1)] -translate-y-1 ring-1 ring-red-500/20'
                          : 'border-stone-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-red-500/40 hover:shadow-[0_12px_28px_rgba(185,28,28,0.06)] hover:-translate-y-0.5'
                      }`}
                    >
                      {/* Subtle ambient light gradient in top right */}
                      <div
                        aria-hidden="true"
                        className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-red-500/5 blur-xl pointer-events-none"
                      />

                      {/* Header Row: Step Number & Reference Badges */}
                      <div className="flex items-center justify-between pb-3.5 border-b border-stone-100 mb-4">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`font-manrope text-2xl sm:text-3xl font-black tracking-tight ${
                              isCurrent ? 'text-red-700' : 'text-stone-900'
                            }`}
                          >
                            {step.step}
                          </span>
                          <span className="text-[10px] font-inter uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 font-semibold border border-stone-200/80">
                            Milestone 0{idx + 1}
                          </span>
                        </div>

                        {isCurrent ? (
                          <span className="text-xs sm:text-sm font-inter font-bold text-red-700 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                            <span>Active Step</span>
                          </span>
                        ) : isPassed ? (
                          <span className="text-xs sm:text-sm font-inter font-semibold text-emerald-700 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Completed</span>
                          </span>
                        ) : (
                          <span className="text-xs sm:text-sm font-inter font-semibold text-stone-400">
                            Upcoming
                          </span>
                        )}
                      </div>

                      {/* Title & Summary */}
                      <div className="space-y-2 mb-4">
                        <h3 className="text-xl sm:text-2xl font-manrope font-bold text-stone-900 tracking-tight leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-[15px] text-stone-600 leading-relaxed font-sans">
                          {step.summary}
                        </p>
                      </div>

                      {/* Highlighted Note Alert Banner */}
                      <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/90 border-l-4 border-amber-600 text-xs sm:text-[13px] text-amber-950 font-inter leading-relaxed">
                        <strong className="text-amber-800 font-bold uppercase tracking-wider block text-[10px] mb-0.5">
                          Note:
                        </strong>
                        <span>{step.detail}</span>
                      </div>

                      {/* Additional Step 04 Action CTA */}
                      {idx === 3 && (
                        <div className="pt-6 mt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                          <button
                            onClick={onOpenAdmissions}
                            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#a8161e] via-[#dc2626] to-[#a8161e] hover:from-[#dc2626] hover:to-[#ef4444] text-white text-xs sm:text-sm font-inter font-bold shadow-md shadow-red-900/20 hover:scale-102 active:scale-98 transition-all cursor-pointer"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                            <span>Apply for 2026–2027 Batch</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                          </button>
                          <span className="text-xs font-inter text-stone-500">
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
        <div className="mt-20 sm:mt-24 text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-50/70 via-white to-amber-50/70 border border-stone-200 max-w-4xl mx-auto shadow-md">
          <div className="space-y-3">
            <h4 className="text-2xl sm:text-3xl font-manrope font-extrabold text-stone-900">
              Ready to Begin Your Admissions Journey?
            </h4>
            <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto font-sans leading-relaxed">
              Our dedicated counselors across Chennai and Coimbatore campuses are ready to guide you through program selection, scholarships, and career pathways.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenAdmissions}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#a8161e] to-[#7f1d1d] hover:from-[#dc2626] hover:to-[#991b1b] text-white text-xs sm:text-sm font-inter font-bold shadow-lg shadow-red-900/25 hover:scale-103 active:scale-98 transition-all cursor-pointer"
              >
                <span>Start Application for 2026–2027</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <div className="pt-2 text-xs font-inter text-stone-500">
              Academically supported by Alagappa University · Campuses in Chennai &amp; Coimbatore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
