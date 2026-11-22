import React, { useRef } from 'react';
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
      className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans"
    >
      {/* 100% Solid Opaque White Card (Zero Opacity, Zero Transparency Bleed) */}
      <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[32px] bg-white border border-stone-200 shadow-xl shadow-stone-900/10 p-4 xs:p-5 sm:p-8 lg:p-10">
        {/* Animated Logistics Container Truck rolling across the top layer/rim */}
        <LogisticsContainerTruck targetRef={sectionRef} />

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-8 lg:gap-0 lg:divide-x divide-stone-200">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col justify-between ${
                  idx > 0 ? 'lg:pl-8 xl:pl-10' : ''
                } ${idx < metrics.length - 1 ? 'lg:pr-8 xl:pr-10' : ''} ${
                  idx > 0 ? 'pt-5 sm:pt-0 border-t sm:border-t-0 border-stone-200' : ''
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                    <Icon className="w-4 h-4 text-amber-700" />
                  </div>
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider font-mono font-bold text-stone-800">
                    {m.sub}
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight tabular-nums text-stone-900 mb-1.5">
                  <span className="text-gradient-title">{m.value}</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans font-normal">
                  {m.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
