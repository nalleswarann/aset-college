import React from 'react';
import { motion } from 'motion/react';
import { Users, BookOpen, Compass, MapPin, Building, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { ScrollHeading, ScrollParagraph, ScrollEyebrow } from './ScrollTypography';

export const KeyMetricsBar: React.FC = () => {
  const metrics = [
    {
      value: '10,000+',
      label: 'Students & Alumni Network',
      description: 'Enrolled across career disciplines, with 6,000+ Aviation, Safety & Logistics graduates worldwide.',
      tag: 'Global Footprint',
      accent: 'from-orange-500 to-amber-600',
    },
    {
      value: '120+',
      label: 'Specialized Academic Pathways',
      description: 'Undergraduate, postgraduate, lateral-entry, and fast-track diplomas affiliated with Alagappa University.',
      tag: 'Academic Breadth',
      accent: 'from-rose-500 to-orange-600',
    },
    {
      value: '500+',
      label: 'Recruiting Consortia & Partners',
      description: 'Airports Authority of India, DHL Supply Chain, SpiceJet, KPMG Advisory, and Maritime Seaports.',
      tag: '100% Placement Record',
      accent: 'from-amber-500 to-orange-600',
    },
    {
      value: '2 Flagship',
      label: 'Campuses in Tamil Nadu',
      description: 'Full-fledged training centers in Chennai (Kuthambakkam) & Coimbatore (Saravanampatti).',
      tag: 'Chennai & Coimbatore',
      accent: 'from-orange-600 to-rose-600',
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 bg-[#faf8f5] text-stone-900 font-manrope select-none border-b border-stone-200/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Card Apple-Style Bento Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-3xl bg-white/90 hover:bg-white border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-orange-700 font-bold px-2.5 py-1 rounded-full bg-orange-50 border border-orange-200/60">
                    {m.tag}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-stone-300 group-hover:bg-orange-500 transition-colors" />
                </div>

                <div className="text-3xl sm:text-4xl lg:text-4xl font-manrope font-black tracking-tight text-stone-950 mb-1">
                  <span className={`bg-gradient-to-r ${m.accent} bg-clip-text text-transparent`}>
                    {m.value}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-stone-900 tracking-tight mb-2">
                  {m.label}
                </h3>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed font-sans pt-2 border-t border-stone-100">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
