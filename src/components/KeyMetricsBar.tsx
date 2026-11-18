import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Users, BookOpen, Compass, MapPin } from 'lucide-react';
import { LogisticsContainerTruck } from './LogisticsContainerTruck';

export const KeyMetricsBar: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const metrics = [
    {
      icon: Users,
      value: '10,000+',
      sub: 'Student Community',
      label: 'Enrolled across career disciplines, with 6,000+ Fire & Safety alumni globally',
    },
    {
      icon: BookOpen,
      value: '120+',
      sub: 'Academic Breadth',
      label: 'Programs across 60+ disciplines spanning UG, PG, Diploma & Certifications',
    },
    {
      icon: Compass,
      value: '12 Areas',
      sub: 'Practical Pedagogy',
      label: 'Practical simulations, monthly industrial visits & mandatory internships',
    },
    {
      icon: MapPin,
      value: '2 Campuses',
      sub: 'Chennai & Coimbatore',
      label: 'Full-fledged training campuses in Kuthambakkam & Saravanampatti',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative -mt-12 sm:-mt-16 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-manrope"
    >
      {/* Floating Frosted Glass Card with Ambient Under-Glow */}
      <div className="relative rounded-[28px] sm:rounded-[32px] bg-white/78 backdrop-blur-2xl border border-white/80 shadow-[0_24px_50px_-12px_rgba(0,10,28,0.12)] p-7 sm:p-9 lg:p-11">
        {/* Animated Logistics Container Truck rolling across the top layer/rim */}
        <LogisticsContainerTruck targetRef={sectionRef} />

        {/* Soft glowing ambient orbs under frosted glass clipped to card radius */}
        <div className="absolute inset-0 rounded-[28px] sm:rounded-[32px] overflow-hidden pointer-events-none">
          <div
            aria-hidden="true"
            className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-gradient-to-br from-orange-500/20 via-rose-500/15 to-transparent blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-gradient-to-tl from-rose-500/18 via-orange-400/14 to-transparent blur-3xl pointer-events-none"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-stone-200/80">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`flex flex-col justify-between ${idx > 0 ? 'sm:pl-8 lg:pl-10 pt-6 sm:pt-0' : ''
                  }`}
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-700">
                    <Icon className="w-4 h-4 text-amber-600" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-stone-500">
                    {m.sub}
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-manrope font-extrabold tracking-tight tabular-nums text-stone-900 mb-1">
                  <span className="text-gradient-title">{m.value}</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-manrope">
                  {m.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
