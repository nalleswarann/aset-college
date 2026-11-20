import React from 'react';
import { motion } from 'motion/react';
import { ScrollHeading, ScrollParagraph, ScrollEyebrow } from './ScrollTypography';
import { Sparkles, CheckCircle2, ShieldCheck, Award, Compass, HeartHandshake } from 'lucide-react';

interface ValueItem {
  number: string;
  title: string;
  tag: string;
  icon: React.FC<{ className?: string }>;
  description: string;
}

const VALUES_DATA: ValueItem[] = [
  {
    number: '01',
    title: 'Expertise',
    tag: 'Veteran Faculty',
    icon: Award,
    description:
      'We provide specialized higher education rooted in proven industry experience. Faculty include former airline captains, safety directors, and logistics authorities.',
  },
  {
    number: '02',
    title: 'Confidence',
    tag: 'Academic Backing',
    icon: ShieldCheck,
    description:
      'Backed by Alagappa University academic support and DGCA flight simulator bays, ensuring our students step into international careers with complete readiness.',
  },
  {
    number: '03',
    title: 'Attitude',
    tag: 'Proactive Leadership',
    icon: Compass,
    description:
      'We instill a proactive, resilient mindset that drives critical problem-solving, operational leadership, and team collaboration across modern corporate environments.',
  },
  {
    number: '04',
    title: 'Integrity',
    tag: 'Ethical Governance',
    icon: HeartHandshake,
    description:
      'Integrity is the bedrock of ASET — embracing academic honesty, corporate responsibility, ethical governance, and transparent career placement for every learner.',
  },
];

export const WhatWeStandForSection: React.FC = () => {
  return (
    <section
      id="values"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#faf8f5] text-stone-900 font-manrope select-none border-b border-stone-200/90"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Apple-Style Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14 pb-8 sm:pb-10 border-b border-stone-200">
          <div className="space-y-3 max-w-2xl">
            <ScrollEyebrow delay={0.04} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-orange-800 text-xs font-mono font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
              <span>Core Institutional Values</span>
            </ScrollEyebrow>

            <ScrollHeading delay={0.1} className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-extrabold tracking-tight text-stone-950 leading-tight">
              What We{' '}
              <span className="font-serif italic font-normal text-gradient-title">
                Stand For.
              </span>
            </ScrollHeading>
          </div>

          <ScrollParagraph delay={0.16} className="text-sm sm:text-base text-stone-600 max-w-md lg:max-w-lg leading-relaxed font-sans self-start md:self-end">
            Our core values shape every syllabus we design, every corporate consortium we forge, and every student career we launch across Chennai and Coimbatore.
          </ScrollParagraph>
        </div>

        {/* 4-Card Apple-Style Bento Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {VALUES_DATA.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      {val.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-semibold px-2.5 py-0.5 rounded-full bg-stone-100">
                      {val.tag}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-2xl bg-orange-50 border border-orange-200/60 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  <h3 className="text-xl font-bold text-stone-950 tracking-tight mb-2">
                    {val.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans pt-4 border-t border-stone-100">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
