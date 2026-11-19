import React from 'react';
import { motion } from 'motion/react';
import {
  PLACEMENT_SECTORS,
  INDUSTRIAL_VISIT_PARTNERS,
  PLACEMENT_TRAINING_AREAS,
} from '../data/universityData';
import { Briefcase, ArrowRight, Compass, Building2, CheckCircle2 } from 'lucide-react';
import {
  ScrollHeading,
  ScrollParagraph,
  ScrollEyebrow,
  ScrollAction,
} from './ScrollTypography';

interface CampusLifeSectionProps {
  onOpenVirtualTour: () => void;
}

export const CampusLifeSection: React.FC<CampusLifeSectionProps> = ({ onOpenVirtualTour }) => {
  return (
    <section id="placements" className="relative py-20 sm:py-24 bg-stone-100/82 backdrop-blur-xl text-stone-900 border-b border-white/60 overflow-hidden">
      {/* Ambient background glow with signature orange-to-crimson combo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-20 w-[45vw] max-w-[500px] h-[45vw] max-h-[500px] rounded-full bg-gradient-to-bl from-orange-400/10 via-rose-400/8 to-transparent blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 -left-20 w-[35vw] max-w-[420px] h-[35vw] max-h-[420px] rounded-full bg-gradient-to-tr from-amber-400/8 via-rose-400/6 to-transparent blur-[100px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-stone-200">
          <div className="space-y-3 max-w-2xl">
            <ScrollEyebrow delay={0.04} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-orange-600">
                PLACEMENT CELL &amp; RECRUITING PARTNERS
              </span>
            </ScrollEyebrow>
            <ScrollHeading delay={0.12} className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold tracking-tight text-stone-900 leading-tight">
              End-to-End Placement Support &amp;{' '}
              <span className="text-gradient-title">Industry Partners</span>
            </ScrollHeading>
          </div>
          <ScrollAction delay={0.22} className="self-start md:self-end">
            <button
              onClick={onOpenVirtualTour}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-50 text-xs uppercase tracking-wider font-semibold rounded-full shadow-md transition-all cursor-pointer"
            >
              <span>Explore Campuses 360</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </ScrollAction>
        </div>

        {/* Full-width Placement Cell & Recruiting Partners Content */}
        <div className="pt-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <ScrollHeading as="h3" delay={0.1} className="text-xl sm:text-2xl font-manrope font-bold text-stone-900">
              Key Placement &amp; Industry Partners
            </ScrollHeading>
            <span className="text-xs font-mono text-stone-500">
              Domestic &amp; International Recruitment Drives
            </span>
          </div>

          <ScrollParagraph delay={0.18} className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-4xl">
            The Department of Placement &amp; Training prepares students through continuous skill assessments, corporate interaction sessions, and on-campus recruitment drives. Graduates from ASET College have been placed across leading domestic and international organizations:
          </ScrollParagraph>

          {/* 2-Column Grid for Placement Sectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {PLACEMENT_SECTORS.map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.58,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="p-5 sm:p-6 bg-white/95 border border-stone-200/90 rounded-sm space-y-3 hover:border-stone-400 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-amber-900" />
                    <h4 className="text-base font-serif font-bold text-stone-900">
                      {group.sector}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-stone-400">
                    {group.partners.length} Partners
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.partners.map((partner) => (
                    <span
                      key={partner}
                      className="px-2.5 py-1 bg-stone-100 border border-stone-200 rounded-xs text-xs font-medium text-stone-800"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dual Bottom Highlights: Placement Modules & Campus Training Tour */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
            {/* Structured Placement Training & Industrial Visits (8 cols) */}
            <div className="lg:col-span-8 p-6 sm:p-7 bg-stone-900 text-stone-100 rounded-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                  Structured Placement Training &amp; Industrial Visits
                </span>
                <span className="text-xs font-mono text-stone-400">12 Training Areas</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Pre-training assessments, customized mentoring, and post-module evaluations across 12 training areas, paired with guided monthly industrial visits.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 text-xs">
                <div>
                  <span className="font-mono uppercase text-[10px] text-amber-300 block mb-1.5 font-bold">
                    Core Placement Modules
                  </span>
                  <ul className="space-y-1 text-stone-300">
                    {PLACEMENT_TRAINING_AREAS.map((area) => (
                      <li key={area} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="font-mono uppercase text-[10px] text-amber-300 block mb-1.5 font-bold">
                    Industrial Visit Destinations
                  </span>
                  <p className="text-stone-300 leading-relaxed">
                    {INDUSTRIAL_VISIT_PARTNERS.join(' · ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Campus Tour Highlight Box (4 cols) */}
            <div className="lg:col-span-4 p-6 sm:p-7 bg-amber-50/80 border border-amber-200 rounded-sm flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-900 font-bold">
                  <Compass className="w-4 h-4 text-amber-900" />
                  <span>Chennai &amp; Coimbatore</span>
                </div>
                <h4 className="text-base font-serif font-bold text-stone-900">
                  State-of-the-Art Training Grounds
                </h4>
                <p className="text-xs text-stone-700 leading-relaxed">
                  Explore our dedicated Fire &amp; Safety Lab, firefighting &amp; CPR drill grounds, and specialized logistics training campuses in Kuthambakkam (Chennai) and Saravanampatti (Coimbatore).
                </p>
              </div>
              <button
                onClick={onOpenVirtualTour}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-amber-950 hover:text-orange-700 transition-colors cursor-pointer pt-2"
              >
                <span>Inspect Training Facilities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
