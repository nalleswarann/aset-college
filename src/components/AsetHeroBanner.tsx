import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  Compass,
  Building2,
  CheckCircle2,
  Plane,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Award,
} from 'lucide-react';
import asetCampusMainImg from '../assets/images/aset-campus-main-building.webp';
import asetAviationStudents from '../assets/images/aset-aviation-students.png';
import asetGraduates from '../assets/images/aset-graduates-celebration.jpg';
import { ScrollHeading, ScrollParagraph, ScrollEyebrow, ScrollAction } from './ScrollTypography';

interface AsetHeroBannerProps {
  onOpenVirtualTour?: () => void;
  onExploreDepartments?: () => void;
  onOpenAdmissions?: () => void;
}

export const AsetHeroBanner: React.FC<AsetHeroBannerProps> = ({
  onOpenVirtualTour,
  onExploreDepartments,
  onOpenAdmissions,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 overflow-hidden bg-[#faf8f5] text-stone-900 select-none font-manrope"
    >
      {/* ========================================================= */}
      {/* APPLE-STYLE AMBIENT BACKDROP: Soft Warm Atmospheric Glows */}
      {/* ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full bg-gradient-to-b from-orange-200/35 via-rose-100/20 to-transparent blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-32 w-[450px] h-[450px] rounded-full bg-amber-100/30 blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-32 w-[450px] h-[450px] rounded-full bg-rose-100/25 blur-3xl -z-10"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* 1. Curatorial Credential Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-stone-200/90 shadow-xs mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-800">
            Admissions Open 2026–2027
          </span>
          <span className="text-stone-300 font-light">&bull;</span>
          <span className="text-xs font-mono text-orange-700 font-semibold">
            Alagappa University Supported
          </span>
        </motion.div>

        {/* 2. Apple Keynote Monumental Display Headline */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto space-y-2"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-manrope font-black tracking-tight text-stone-950 leading-[1.04]">
            Engineering Leaders.{' '}
            <span className="block mt-1 font-serif italic font-normal text-gradient-title">
              Industry-Ready
            </span>{' '}
            from Day One.
          </h1>
        </motion.div>

        {/* 3. Refined Apple-Style Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-stone-600 font-normal leading-relaxed tracking-tight"
        >
          ASET College of Science &amp; Technology bridges academic excellence with hands-on flight simulators,
          industrial safety drill-fields, and maritime logistics operations across Chennai &amp; Coimbatore.
        </motion.p>

        {/* 4. Action Group: Primary, Secondary & Virtual Tour */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <button
            type="button"
            onClick={onOpenAdmissions}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-rose-600 hover:from-orange-700 hover:to-rose-700 text-white font-semibold text-sm sm:text-base tracking-tight shadow-md hover:shadow-lg shadow-orange-600/20 transition-all active:scale-95 cursor-pointer flex items-center gap-2 group"
          >
            <span>Apply for 2026 Admissions</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo('departments')}
            className="px-6 py-3.5 rounded-full bg-white hover:bg-stone-100 text-stone-900 font-semibold text-sm sm:text-base tracking-tight border border-stone-200/90 shadow-xs hover:shadow-sm transition-all active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <span>Explore Academic Disciplines</span>
          </button>

          {onOpenVirtualTour && (
            <button
              type="button"
              onClick={onOpenVirtualTour}
              className="px-5 py-3.5 rounded-full bg-stone-100/80 hover:bg-stone-200/90 text-stone-700 font-mono text-xs sm:text-sm font-semibold tracking-tight transition-all active:scale-95 cursor-pointer flex items-center gap-2 border border-stone-200/60"
            >
              <Compass className="w-4 h-4 text-orange-600" />
              <span>360&deg; Campus Tour</span>
            </button>
          )}
        </motion.div>

        {/* ========================================================= */}
        {/* 5. APPLE-STYLE HERO BENTO SHOWCASE CENTERPIECE            */}
        {/* High-impact interactive hardware/campus showcase stage     */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16 text-left"
        >
          <div className="relative rounded-[28px] sm:rounded-[36px] bg-white/80 backdrop-blur-2xl border border-stone-200/90 shadow-[0_24px_70px_rgba(0,0,0,0.08)] p-3 sm:p-5 lg:p-6 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
              
              {/* Left 7 Columns: Authentic ASET Campus Building in Cinematic Frame */}
              <div className="lg:col-span-7 relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] bg-stone-900 group shadow-inner">
                <img
                  src={asetCampusMainImg}
                  alt="ASET College Authentic Campus Building"
                  className="w-full h-full object-cover object-center select-none transition-transform duration-700 group-hover:scale-103"
                  loading="eager"
                />
                
                {/* Subtle vignette for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Floating On-Image Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-medium shadow-md">
                    <Building2 className="w-3 h-3 text-orange-400" />
                    <span>Chennai &bull; Kuthambakkam</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-medium shadow-md">
                    <Building2 className="w-3 h-3 text-orange-400" />
                    <span>Coimbatore &bull; Saravanampatti</span>
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-amber-300 font-bold block mb-1">
                      Academic Infrastructure &amp; Approved Assets
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-white drop-shadow-sm font-manrope">
                      Full-Fledged Training Campuses
                    </h3>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-mono font-semibold text-white border border-white/20">
                    Live Simulator On-Site
                  </span>
                </div>
              </div>

              {/* Right 5 Columns: 3 Apple-Style Interactive Bento Tiles */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-3 sm:gap-4">
                
                {/* Tile 1: DGCA Simulator & Aviation Training */}
                <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-stone-50/80 hover:bg-stone-50 border border-stone-200/80 shadow-2xs hover:shadow-md transition-all flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-orange-600/10 border border-orange-600/20 text-orange-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Plane className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-bold">
                        Aviation &amp; Defense
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <h4 className="text-base font-bold text-stone-900 tracking-tight">
                      DGCA Flight Simulator Lab
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans">
                      Advanced flight simulator bays with air traffic control simulation and ground school briefings.
                    </p>
                  </div>
                </div>

                {/* Tile 2: 10,000+ Alumni & Placements */}
                <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-stone-50/80 hover:bg-stone-50 border border-stone-200/80 shadow-2xs hover:shadow-md transition-all flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-rose-600/10 border border-rose-600/20 text-rose-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <TrendingUp className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-rose-600 font-bold">
                        Career Mobility
                      </span>
                      <span className="text-xs font-mono font-bold text-stone-900">100% Placement</span>
                    </div>
                    <h4 className="text-base font-bold text-stone-900 tracking-tight">
                      500+ Active Recruiter Consortium
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans">
                      Verified placement tie-ups across DHL, SpiceJet, KPMG, Airports Authority of India, and port authorities.
                    </p>
                  </div>
                </div>

                {/* Tile 3: Alagappa University Academic Support */}
                <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-stone-50/80 hover:bg-stone-50 border border-stone-200/80 shadow-2xs hover:shadow-md transition-all flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-amber-600/10 border border-amber-600/20 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-amber-700 font-bold">
                        Academic Support
                      </span>
                      <span className="text-xs font-mono font-semibold text-stone-600">NAAC A+</span>
                    </div>
                    <h4 className="text-base font-bold text-stone-900 tracking-tight">
                      Alagappa University Backed
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans">
                      Industry-tailored degrees under UGC regulations, ISO 9001:2015 frameworks, and global degree validity.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
