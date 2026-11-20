import React from 'react';
import { motion } from 'motion/react';
import { Landmark, Award } from 'lucide-react';
import {
  ScrollHeading,
  ScrollParagraph,
  ScrollEyebrow,
  ScrollAction,
} from './ScrollTypography';

export const AboutSection: React.FC = () => {

  const pillars = [
    {
      title: '01. Practical & Industry-Focused Learning',
      desc: 'Hands-on activities, live projects, safety simulations, firefighting demonstrations, and domain-specific labs.',
    },
    {
      title: '02. Monthly Industrial Visits (IV)',
      desc: 'Guided field visits to airports, seaports, logistics warehouses, ISRO facilities, Global Infocity, SRF, Hatsun Agro, Welspun, and APPL Industries.',
    },
    {
      title: '03. Internships & Corporate Exposure',
      desc: 'Practical internships with DGCA, Airports Authority of India (AAI), L&T, DHL, and Maersk, alongside an MBA structure with one major project, two mini-projects, and a summer internship.',
    },
    {
      title: '04. International Exposure & Placement Training',
      desc: 'Global academic exposure, student exchange, Dubai Alumni Meet for Fire & Safety careers, and 12-area structured placement training including Aptitude, Communication, GD, Mock Interviews, Leadership & Soft Skills.',
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32 bg-[#faf8f5]/86 backdrop-blur-xl text-stone-900 border-b border-stone-200/90 overflow-hidden">
      {/* Warm Ambient Backdrop Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-20 w-[45vw] max-w-[500px] h-[45vw] max-h-[500px] rounded-full bg-gradient-to-bl from-orange-400/8 via-rose-400/6 to-transparent blur-[110px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-20 w-[40vw] max-w-[450px] h-[40vw] max-h-[450px] rounded-full bg-gradient-to-tr from-amber-400/7 via-orange-400/5 to-transparent blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-stone-200">
          <div className="space-y-3 max-w-2xl">
            <ScrollEyebrow delay={0.04} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-orange-600">
                INSTITUTIONAL OVERVIEW &amp; RECOGNITION
              </span>
            </ScrollEyebrow>
            <ScrollHeading delay={0.12} className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold tracking-tight text-stone-900 leading-tight">
              Career-Focused Higher Education Across{' '}
              <span className="text-gradient-title">Chennai &amp; Coimbatore</span>
            </ScrollHeading>
          </div>
          <ScrollParagraph delay={0.22} className="text-sm sm:text-base text-stone-600 max-w-md leading-relaxed self-start md:self-end">
            Academically supported by Alagappa University · Official Website:{' '}
            <span className="font-mono text-stone-900 font-semibold">www.asetcollege.ac.in</span>
          </ScrollParagraph>
        </div>

        {/* Editorial Essay & 4 Foundational Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 items-start">
          <div className="lg:col-span-6 space-y-6">
            <ScrollHeading as="h3" delay={0.08} className="text-2xl font-manrope font-semibold text-stone-900">
              Industry-Aligned Pathways Backed by{' '}
              <span className="text-gradient-accent">Strong Foundations</span>
            </ScrollHeading>
            <ScrollParagraph delay={0.16} className="text-stone-700 text-base sm:text-lg leading-relaxed first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-amber-950">
              ASET College is a career-focused higher education institution offering industry-aligned undergraduate, postgraduate, diploma, and professional programs across Aviation, Fire &amp; Industrial Safety, Logistics &amp; Shipping, Business Analytics, Management, Commerce, Hospitality, and Artificial Intelligence. With established campuses in Chennai and Coimbatore, ASET integrates classroom instruction with hands-on practical training, industry interaction, internships, and structured career development.
            </ScrollParagraph>
            <ScrollParagraph delay={0.24} className="text-stone-700 text-base leading-relaxed">
              ASET College is academically supported by <strong>Alagappa University</strong>, enabling students to pursue career-oriented degree and diploma pathways backed by a strong academic foundation. Programs are structured to equip learners with technical competence, operational readiness, and workplace confidence.
            </ScrollParagraph>

            {/* National & International Recognition Banner */}
            <ScrollAction delay={0.3} className="p-5 bg-amber-50/70 border-l-4 border-amber-800 rounded-r-sm space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-inter uppercase tracking-widest text-amber-900 font-bold">
                <Award className="w-4 h-4" />
                <span>National &amp; International Recognition</span>
              </div>
              <p className="text-sm text-stone-800 leading-relaxed font-sans">
                Recognized as <strong>India&apos;s No. 1 Institution for Innovative Course</strong> at the International Innovative Summit &amp; Awards, organised by Elevate Global Forums in collaboration with IIMSAM–UN ECOSOC.
              </p>
            </ScrollAction>
          </div>

          {/* Right Column: 4 Pillars of Practical Learning & Exposure */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-stone-200">
              <h4 className="text-xs font-inter uppercase tracking-widest text-stone-500 font-semibold">
                Core Pillars · Practical Learning &amp; Exposure
              </h4>
              <span className="text-xs font-inter text-amber-900 font-semibold">
                Chennai &amp; Coimbatore
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="p-5 sm:p-6 glass-card rounded-2xl hover:shadow-xl hover:border-amber-400/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <h5 className="text-sm font-bold text-stone-900 mb-2 font-manrope">
                      {pillar.title}
                    </h5>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
