import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ScrollHeading, ScrollParagraph, ScrollEyebrow, LUXURY_EASE } from './ScrollTypography';

interface ValueItem {
  number: string;
  title: string;
  description: string;
}

const VALUES_DATA: ValueItem[] = [
  {
    number: '01',
    title: 'EXPERTISE',
    description:
      'We provide specialized higher education rooted in proven industry experience. We pride ourselves on having the master faculty, flight instructors, and safety directors to help every student succeed.',
  },
  {
    number: '02',
    title: 'CONFIDENCE',
    description:
      'Our students’ confidence is backed by Alagappa University academic support and state-of-the-art simulator labs, ensuring graduates step directly into global careers with complete operational readiness.',
  },
  {
    number: '03',
    title: 'ATTITUDE',
    description:
      'We instill a proactive, resilient attitude that drives collaborative leadership, critical problem-solving, and professional excellence across our corporate partners and student cohorts.',
  },
  {
    number: '04',
    title: 'INTEGRITY',
    description:
      'Integrity is at the heart of our institution, embracing academic honesty, corporate responsibility, ethical governance, and transparent career advancement for every learner.',
  },
];

/* -------------------------------------------------------------
 * 5x5 Dot Matrix Grid (Faithfully matching reference design)
 * Dynamically illuminates with a rhythmic wave in warm gradient
 * ----------------------------------------------------------- */
const DotMatrix: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <div
      aria-hidden="true"
      className="grid grid-cols-5 gap-1.5 p-1 select-none pointer-events-none"
    >
      {Array.from({ length: 25 }).map((_, i) => {
        const row = Math.floor(i / 5);
        const col = i % 5;
        const waveDelay = (row + col) * 0.025;
        return (
          <motion.div
            key={i}
            animate={{
              opacity: isHovered ? (i % 2 === 0 ? 1 : 0.78) : 0.28,
              scale: isHovered ? (i % 2 === 0 ? 1.35 : 1.1) : 1,
              backgroundColor: isHovered
                ? i % 3 === 0
                  ? '#ea580c'
                  : i % 3 === 1
                  ? '#f97316'
                  : '#e1144b'
                : '#d6d3d1',
            }}
            transition={{
              duration: 0.28,
              delay: isHovered ? waveDelay : 0,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-1.5 h-1.5 rounded-full"
          />
        );
      })}
    </div>
  );
};

export const WhatWeStandForSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="values"
      className="relative w-full overflow-hidden bg-[#faf8f5]/80 backdrop-blur-md text-stone-900 font-manrope py-20 sm:py-24 lg:py-28 border-t border-b border-stone-200/90 select-none"
    >
      {/* ========================================================= */}
      {/* ATMOSPHERIC BACKGROUND: Warm Orange to Crimson Rose Glow   */}
      {/* ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-orange-500/10 via-rose-500/8 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-10 w-[450px] h-[450px] rounded-full bg-orange-500/8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 w-[480px] h-[480px] rounded-full bg-rose-500/8 blur-3xl"
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
          fill="url(#valuesWaveGrad)"
        />
        <defs>
          <radialGradient id="valuesWaveGrad" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#e1144b" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#faf8f5" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* CURATORIAL HEADER (Standardized Across All Website Sections) */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-stone-200">
          <div className="space-y-3 max-w-2xl">
            {/* Standard Eyebrow with Animated Concentric Target Radar */}
            <ScrollEyebrow delay={0.04} className="flex items-center gap-2.5">
              <div className="relative w-4 h-4 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
                <span className="absolute inset-0 rounded-full border border-orange-500/40 animate-ping [animation-duration:2.5s]" />
              </div>
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-orange-600">
                CORE VALUES &amp; PRINCIPLES
              </span>
            </ScrollEyebrow>

            {/* Standard Section Heading with Smooth Entrance */}
            <ScrollHeading
              delay={0.12}
              className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold tracking-tight text-stone-900 leading-tight"
            >
              What We <span className="text-gradient-title">Stand For</span>
            </ScrollHeading>
          </div>

          {/* Standard Subtitle Paragraph with Smooth Fade-Glide */}
          <ScrollParagraph
            delay={0.22}
            className="text-sm sm:text-base text-stone-600 max-w-md lg:max-w-lg leading-relaxed font-sans self-start md:self-end"
          >
            Our core values shape every curriculum we engineer, every industry partnership we forge, and every student career we launch across Chennai and Coimbatore.
          </ScrollParagraph>
        </div>

        {/* ========================================================= */}
        {/* 4 CORE VALUE ROWS: EXPERTISE, CONFIDENCE, ATTITUDE, ...   */}
        {/* Strict symmetrical column alignment for desktop/tablet    */}
        {/* Clean, comfortable touch-friendly card format for mobile   */}
        {/* ========================================================= */}
        <div className="border-b border-stone-200/90 divide-y divide-stone-200/90">
          {VALUES_DATA.map((val, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={val.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.75,
                  delay: 0.08 + idx * 0.08,
                  ease: LUXURY_EASE,
                }}
                style={{
                  willChange: 'transform, opacity',
                  transform: 'translate3d(0, 0, 0)',
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(isHovered ? null : idx)}
                className="group relative transition-all duration-300 cursor-pointer overflow-hidden px-2 sm:px-4"
              >
                {/* Subtle Ambient Hover Glow in Warm Website Tint */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-gradient-to-r from-orange-500/8 via-rose-500/4 to-transparent pointer-events-none transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Left Active Accent Pill Indicator in Signature Gradient */}
                <motion.div
                  aria-hidden="true"
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    scaleY: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: LUXURY_EASE }}
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-orange-500 via-rose-500 to-red-600 origin-center"
                />

                {/* ----------------------------------------------------- */}
                {/* DESKTOP & TABLET LAYOUT: Strict 12-Column Symmetrical */}
                {/* ----------------------------------------------------- */}
                <div className="hidden md:grid md:grid-cols-12 items-center gap-6 lg:gap-8 py-8 lg:py-10 relative z-10">
                  {/* Column 1: Index Number + Value Title (5 cols) */}
                  <div className="col-span-5 flex items-baseline gap-4 lg:gap-6">
                    <span
                      className={`w-8 shrink-0 font-mono text-xs sm:text-sm font-bold tracking-widest transition-colors duration-300 ${
                        isHovered ? 'text-orange-600' : 'text-stone-400'
                      }`}
                    >
                      {val.number}
                    </span>
                    <h3
                      className={`text-2xl lg:text-[34px] xl:text-[40px] font-black tracking-tight uppercase leading-none transition-all duration-300 ${
                        isHovered
                          ? 'text-gradient-accent translate-x-1.5'
                          : 'text-stone-900'
                      }`}
                    >
                      {val.title}
                    </h3>
                  </div>

                  {/* Column 2: Exact Column-Aligned Narrative Description (6 cols) */}
                  <p
                    className={`col-span-6 text-xs sm:text-sm lg:text-[15px] leading-relaxed transition-colors duration-300 font-sans ${
                      isHovered ? 'text-stone-900' : 'text-stone-600'
                    }`}
                  >
                    {val.description}
                  </p>

                  {/* Column 3: 5x5 Dot Matrix Grid (1 col, flush right) */}
                  <div className="col-span-1 flex items-center justify-end">
                    <DotMatrix isHovered={isHovered} />
                  </div>
                </div>

                {/* ----------------------------------------------------- */}
                {/* MOBILE LAYOUT: Clean stacked card with indented text  */}
                {/* ----------------------------------------------------- */}
                <div className="block md:hidden py-6 relative z-10">
                  {/* Top Line: Number + Title (left) & DotMatrix (right) */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`font-mono text-xs font-bold tracking-widest transition-colors duration-300 ${
                          isHovered ? 'text-orange-600' : 'text-stone-400'
                        }`}
                      >
                        {val.number}
                      </span>
                      <h3
                        className={`text-xl sm:text-2xl font-black tracking-tight uppercase transition-all duration-300 ${
                          isHovered
                            ? 'text-gradient-accent translate-x-1'
                            : 'text-stone-900'
                        }`}
                      >
                        {val.title}
                      </h3>
                    </div>

                    <div className="shrink-0">
                      <DotMatrix isHovered={isHovered} />
                    </div>
                  </div>

                  {/* Description: Indented to align precisely under the Title */}
                  <p
                    className={`mt-2.5 pl-7 text-xs sm:text-sm leading-relaxed font-sans transition-colors duration-300 ${
                      isHovered ? 'text-stone-900' : 'text-stone-600'
                    }`}
                  >
                    {val.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
