import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ScrollHeading, ScrollParagraph } from './ScrollTypography';

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
 * 5x5 Dot Matrix Grid (Matching reference screenshot exactly)
 * Dynamically illuminates in the website's orange-to-rose gradient
 * ----------------------------------------------------------- */
const DotMatrix: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <div
      aria-hidden="true"
      className="grid grid-cols-5 gap-1.5 p-1 select-none pointer-events-none"
    >
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: isHovered ? (i % 2 === 0 ? 1 : 0.7) : 0.28,
            scale: isHovered ? (i % 2 === 0 ? 1.3 : 1.05) : 1,
            backgroundColor: isHovered
              ? i % 3 === 0
                ? '#ea580c'
                : i % 3 === 1
                ? '#f97316'
                : '#e1144b'
              : '#d6d3d1',
          }}
          transition={{
            duration: 0.25,
            delay: isHovered ? (i % 5) * 0.02 : 0,
          }}
          className="w-1.5 h-1.5 rounded-full"
        />
      ))}
    </div>
  );
};

export const WhatWeStandForSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="values"
      className="relative w-full overflow-hidden bg-[#faf8f5] text-stone-900 font-manrope py-20 sm:py-28 lg:py-36 border-t border-b border-stone-200/90 select-none"
    >
      {/* ========================================================= */}
      {/* ATMOSPHERIC BACKGROUND: Warm Orange to Crimson Rose Glow   */}
      {/* Matches website color theme established in other sections  */}
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
        {/* TOP HEADER BLOCK (Standardized Responsive Header)         */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-stone-200">
          <div className="space-y-3 max-w-2xl">
            {/* Standard Eyebrow with Pulsing Accent Dot */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-orange-600">
                CORE VALUES &amp; PRINCIPLES
              </span>
            </div>

            {/* Standard Section Heading */}
            <ScrollHeading
              delay={0.08}
              className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold tracking-tight text-stone-900 leading-tight"
            >
              What We <span className="text-gradient-title">Stand For</span>
            </ScrollHeading>
          </div>

          {/* Standard Subtitle Paragraph */}
          <ScrollParagraph
            delay={0.16}
            className="text-sm sm:text-base text-stone-600 max-w-md lg:max-w-lg leading-relaxed font-sans self-start md:self-end"
          >
            Our core values shape every curriculum we engineer, every industry partnership we forge, and every student career we launch across Chennai and Coimbatore.
          </ScrollParagraph>
        </div>

        {/* ========================================================= */}
        {/* 4 CORE VALUE ROWS: EXPERTISE, CONFIDENCE, ATTITUDE, ...   */}
        {/* Responsive, interactive hover illumination & dot matrix   */}
        {/* ========================================================= */}
        <div className="border-b border-stone-200/90">
          {VALUES_DATA.map((val, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={val.number}
                initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: 0.12 + idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(isHovered ? null : idx)}
                className="group relative border-t border-stone-200/90 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Subtle Ambient Hover Glow in Warm Website Tint */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-gradient-to-r from-orange-500/8 via-rose-500/4 to-transparent pointer-events-none transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Left Active Accent Pill Indicator in Signature Gradient */}
                <div
                  aria-hidden="true"
                  className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-orange-500 via-rose-500 to-red-600 transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Row Content Container */}
                <div className="relative z-10 py-7 sm:py-9 md:py-11 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 px-2 sm:px-4">
                  {/* Left Column: Number + Big Bold Title */}
                  <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-6 md:w-[360px] lg:w-[440px] shrink-0">
                    <div className="flex items-center gap-4 sm:gap-6">
                      {/* Step Number (01, 02, 03, 04) */}
                      <span
                        className={`font-mono text-xs sm:text-sm font-bold tracking-widest transition-colors duration-300 ${
                          isHovered ? 'text-orange-600' : 'text-stone-400'
                        }`}
                      >
                        {val.number}
                      </span>

                      {/* Title: EXPERTISE, CONFIDENCE, ATTITUDE, INTEGRITY */}
                      <h3
                        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black tracking-wider uppercase transition-all duration-300 ${
                          isHovered
                            ? 'text-gradient-accent translate-x-2'
                            : 'text-stone-900'
                        }`}
                      >
                        {val.title}
                      </h3>
                    </div>

                    {/* Mobile-only dot matrix preview */}
                    <div className="flex sm:hidden items-center">
                      <DotMatrix isHovered={isHovered} />
                    </div>
                  </div>

                  {/* Middle Column: Value Explanation Description */}
                  <p
                    className={`text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-xl transition-colors duration-300 flex-1 ${
                      isHovered ? 'text-stone-900' : 'text-stone-600'
                    }`}
                  >
                    {val.description}
                  </p>

                  {/* Right Column: 5x5 Dot Matrix Grid (Desktop / Tablet) */}
                  <div className="hidden sm:flex items-center justify-end shrink-0 pl-4">
                    <DotMatrix isHovered={isHovered} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
