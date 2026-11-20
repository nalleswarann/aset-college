import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Users, BookOpen, Compass, MapPin } from 'lucide-react';
import { LogisticsContainerTruck } from './LogisticsContainerTruck';
import { LUXURY_EASE } from './ScrollTypography';

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
      className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6 sm:pb-8 font-sans"
    >
      {/* Floating High-Contrast Glass Card with Ambient Under-Glow */}
      <div className="relative rounded-[28px] sm:rounded-[32px] bg-white/95 backdrop-blur-2xl border border-stone-200/90 shadow-[0_20px_50px_-12px_rgba(0,10,28,0.14)] p-6 sm:p-8 lg:p-10">
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

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-stone-200/90">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.06,
                  ease: LUXURY_EASE,
                }}
                style={{
                  willChange: 'transform, opacity',
                  transform: 'translate3d(0, 0, 0)',
                }}
                className={`flex flex-col justify-between ${idx > 0 ? 'sm:pl-8 lg:pl-10 pt-6 sm:pt-0' : ''
                  }`}
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-800 shrink-0 shadow-2xs">
                    <Icon className="w-4 h-4 text-amber-700" />
                  </div>
                  <span className="text-[12px] sm:text-[13px] uppercase tracking-wider font-bold text-stone-900 font-sans select-text">
                    {m.sub}
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight tabular-nums text-stone-900 my-1">
                  <span className="text-gradient-title text-orange-600 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-rose-600 to-amber-600 select-text">
                    {m.value}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-stone-700 leading-relaxed font-sans font-medium select-text">
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
