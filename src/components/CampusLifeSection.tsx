import React from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  ArrowRight,
} from 'lucide-react';
import {
  ScrollHeading,
  ScrollParagraph,
  ScrollEyebrow,
  ScrollAction,
  LUXURY_EASE,
} from './ScrollTypography';

// =========================================================================
// OFFICIAL PLACEMENT PARTNER LOGOS SOURCED DIRECTLY FROM asetcollege.ac.in
// =========================================================================
// Aviation & Logistics Recruiters
import akasaAirLogo from '../assets/images/placement-partners/home-co-akasa.webp';
import spicejetLogo from '../assets/images/placement-partners/home-co-spicejet.webp';
import aisatsLogo from '../assets/images/placement-partners/home-co-ai-sats.webp';
import aiExpressLogo from '../assets/images/placement-partners/home-co-ai-express.webp';
import dhlLogo from '../assets/images/placement-partners/lp-logistics-dhl.png';
import maerskLogo from '../assets/images/placement-partners/lp-logistics-maersk.png';
import mscLogo from '../assets/images/placement-partners/lp-logistics-msc.png';
import dbSchenkerLogo from '../assets/images/placement-partners/lp-logistics-dbschenker.png';
import tvsLogo from '../assets/images/placement-partners/lp-logistics-tvs.png';
import delhiveryLogo from '../assets/images/placement-partners/lg-logo-delhivery.png';
import ntcLogo from '../assets/images/placement-partners/lg-logo-ntc.png';
import galleonLogo from '../assets/images/placement-partners/co-galleon.webp';
import haesokLogo from '../assets/images/placement-partners/home-co-haesok.webp';
import vsaLogo from '../assets/images/placement-partners/lg-co-vsa.webp';

// Enterprise Tech, Safety, Real Estate & Corporate Leaders
import zohoLogo from '../assets/images/placement-partners/fs-logo-zoho.png';
import dlfLogo from '../assets/images/placement-partners/fs-logo-dlf.png';
import casagrandLogo from '../assets/images/placement-partners/fs-logo-casagrand.png';
import ttfLogo from '../assets/images/placement-partners/fs-logo-ttf.png';
import sprLogo from '../assets/images/placement-partners/fs-logo-spr.png';
import swastikLogo from '../assets/images/placement-partners/fs-logo-swastik.png';
import tennecoLogo from '../assets/images/placement-partners/fs-logo-tenneco.png';
import planysLogo from '../assets/images/placement-partners/lg-co-planys.webp';

// Core Statutory & Academic Councils
import aaiLogo from '../assets/images/partners/aai_clean.png';
import kpmgLogo from '../assets/images/partners/kpmg.webp';
import lscLogo from '../assets/images/partners/lsc.png';
import aasscLogo from '../assets/images/partners/aassc.png';
import tharaviationLogo from '../assets/images/partners/tharaviation.png';
import muscatLogo from '../assets/images/partners/muscat.avif';
import naturalsLogo from '../assets/images/partners/naturals.webp';
import campusworldLogo from '../assets/images/partners/campusworld.png';

interface CampusLifeSectionProps {
  onOpenVirtualTour: () => void;
}

// -----------------------------------------------------------------
// Track 1: Aviation, Airlines & Multimodal Logistics Recruiters
// -----------------------------------------------------------------
const PLACEMENT_LOGOS_ROW_1 = [
  { name: 'Akasa Air', logo: akasaAirLogo },
  { name: 'DHL Global Forwarding', logo: dhlLogo },
  { name: 'SpiceJet Airlines', logo: spicejetLogo },
  { name: 'Maersk Line Shipping', logo: maerskLogo },
  { name: 'Air India SATS (AISATS)', logo: aisatsLogo },
  { name: 'MSC Mediterranean Shipping', logo: mscLogo },
  { name: 'Air India Express', logo: aiExpressLogo },
  { name: 'DB Schenker Logistics', logo: dbSchenkerLogo },
  { name: 'TVS Supply Chain Solutions', logo: tvsLogo },
  { name: 'Airports Authority of India (AAI)', logo: aaiLogo },
  { name: 'Delhivery Supply Chain', logo: delhiveryLogo },
  { name: 'Galleon Maritime Logistics', logo: galleonLogo },
  { name: 'NTC Logistics', logo: ntcLogo },
  { name: 'Thar Aviation Academy', logo: tharaviationLogo },
  { name: 'VSA Logistics', logo: vsaLogo },
];

// -----------------------------------------------------------------
// Track 2: Enterprise Tech, Industrial Safety, Real Estate & Skill Councils
// -----------------------------------------------------------------
const PLACEMENT_LOGOS_ROW_2 = [
  { name: 'Zoho Corporation', logo: zohoLogo },
  { name: 'DLF Limited', logo: dlfLogo },
  { name: 'KPMG Worldwide', logo: kpmgLogo },
  { name: 'Casagrand Builder', logo: casagrandLogo },
  { name: 'SPR City Infrastructure', logo: sprLogo },
  { name: 'TTF Technologies', logo: ttfLogo },
  { name: 'Tenneco Clean Air', logo: tennecoLogo },
  { name: 'Swastik Corporation', logo: swastikLogo },
  { name: 'Planys Technologies Marine Robotics', logo: planysLogo },
  { name: 'Haesok Global Logistics', logo: haesokLogo },
  { name: 'Logistics Sector Skill Council (LSC)', logo: lscLogo },
  { name: 'Aerospace & Aviation Sector Skill Council (AASSC)', logo: aasscLogo },
  { name: 'Muscat Overseas Logistics', logo: muscatLogo },
  { name: 'Naturals Group', logo: naturalsLogo },
  { name: 'Campus World International', logo: campusworldLogo },
];

// Verified Highlight Metrics
const PLACEMENT_METRICS = [
  { label: 'Placement Record', value: '100%', detail: 'Career support & guidance' },
  { label: 'Recruiting Partners', value: '500+', detail: 'Airlines, ports & enterprise firms' },
  { label: 'Highest International CTC', value: '₹12 LPA', detail: 'Overseas aviation & maritime' },
  { label: 'Training Modules', value: '12 Areas', detail: 'Pre-placement grooming' },
];

export const CampusLifeSection: React.FC<CampusLifeSectionProps> = ({
  onOpenVirtualTour,
}) => {
  return (
    <section
      id="placements"
      className="relative w-full py-20 sm:py-24 lg:py-32 bg-[#faf8f5] text-stone-900 border-b border-stone-200/90 overflow-hidden select-none font-serif font-semibold"
    >
      {/* ========================================================= */}
      {/* ATMOSPHERIC BACKGROUND: Warm Orange to Crimson Glow       */}
      {/* ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-20 w-[45vw] max-w-[550px] h-[45vw] max-h-[550px] rounded-full bg-gradient-to-bl from-orange-400/10 via-rose-400/8 to-transparent blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 -left-20 w-[35vw] max-w-[450px] h-[35vw] max-h-[450px] rounded-full bg-gradient-to-tr from-amber-400/8 via-rose-400/6 to-transparent blur-[100px]"
      />

      <div className="max-w-7xl lg:max-w-[1380px] xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* ========================================================= */}
        {/* 1. CURATORIAL HEADER: Title "Our Placement Partners"      */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-stone-200">
          <div className="space-y-3 max-w-2xl">
            {/* Standard Eyebrow with Pulsing Accent Dot */}
            <ScrollEyebrow delay={0.04} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-orange-600">
                CAREER MOBILITY &amp; CAMPUS RECRUITMENT
              </span>
            </ScrollEyebrow>

            {/* Main Section Heading: Exactly "Our Placement Partners" */}
            <ScrollHeading
              delay={0.12}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-stone-900 leading-tight"
            >
              Our Placement <span className="text-gradient-title font-medium">Partners</span>
            </ScrollHeading>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end gap-5 self-start md:self-end">
            {/* Subtitle Paragraph */}
            <ScrollParagraph
              delay={0.2}
              className="text-sm sm:text-base text-stone-600 max-w-md lg:max-w-lg leading-relaxed font-sans"
            >
              ASET College graduates are recruited across Fortune 500 airlines, multimodal logistics lines, industrial safety directorates, and global corporate enterprises.
            </ScrollParagraph>

            {/* Action CTA Button */}
            <ScrollAction delay={0.24}>
              <button
                onClick={onOpenVirtualTour}
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 bg-stone-900 hover:bg-stone-800 text-stone-50 text-xs uppercase tracking-wider font-semibold rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer shrink-0"
              >
                <span>Explore Campuses 360</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </ScrollAction>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. HIGH-VISIBILITY PARTNER LOGO MARQUEE (WIDE SCREEN, NO BOXES) */}
        {/* Clean edge-to-edge ticker with pure logos on canvas background */}
        {/* ========================================================= */}
        <div className="w-full space-y-4 sm:space-y-6">
          {/* Header Label Row (Unboxed) */}
          <div className="flex items-center justify-between px-1 sm:px-2">
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-stone-500 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-orange-600" />
              <span>Verified Recruitment Networks &amp; Corporate Consortia</span>
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-orange-600 font-bold tracking-wider">
              500+ Active Recruiters
            </span>
          </div>

          {/* Full-bleed Wide Running Marquee (Zero Boxes, Pure Logos) */}
          <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden py-3 sm:py-5 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            
            {/* Track 1: Smooth Left Scrolling Ticker (Aviation & Logistics) */}
            <div className="overflow-hidden relative w-full py-2">
              <div className="animate-marquee-left-seamless flex items-center">
                {[
                  ...PLACEMENT_LOGOS_ROW_1,
                  ...PLACEMENT_LOGOS_ROW_1,
                  ...PLACEMENT_LOGOS_ROW_1,
                  ...PLACEMENT_LOGOS_ROW_1,
                ].map((item, idx) => (
                  <div
                    key={`p1-${item.name}-${idx}`}
                    className="flex items-center justify-center shrink-0 px-4 xs:px-6 sm:px-10 md:px-14 select-none group cursor-default"
                    title={item.name}
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-7 xs:h-8 sm:h-10 md:h-12 w-auto max-w-[110px] xs:max-w-[130px] sm:max-w-[160px] md:max-w-[190px] object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Track 2: Smooth Right Scrolling Ticker (Tech, Safety & Infrastructure) */}
            <div className="overflow-hidden relative w-full py-2">
              <div className="animate-marquee-right-seamless flex items-center">
                {[
                  ...PLACEMENT_LOGOS_ROW_2,
                  ...PLACEMENT_LOGOS_ROW_2,
                  ...PLACEMENT_LOGOS_ROW_2,
                  ...PLACEMENT_LOGOS_ROW_2,
                ].map((item, idx) => (
                  <div
                    key={`p2-${item.name}-${idx}`}
                    className="flex items-center justify-center shrink-0 px-4 xs:px-6 sm:px-10 md:px-14 select-none group cursor-default"
                    title={item.name}
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-7 xs:h-8 sm:h-10 md:h-12 w-auto max-w-[110px] xs:max-w-[130px] sm:max-w-[160px] md:max-w-[190px] object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. KEY PLACEMENT METRICS STRIP                            */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {PLACEMENT_METRICS.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: 0.05 + idx * 0.08,
                ease: LUXURY_EASE,
              }}
              className="p-4 sm:p-6 rounded-2xl bg-white/90 border border-stone-200/80 shadow-xs hover:shadow-md hover:border-orange-500/30 transition-all"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight mb-1">
                <span className="text-gradient-title">{m.value}</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-stone-800 font-serif font-semibold">
                {m.label}
              </div>
              <div className="text-[10px] sm:text-[11px] text-stone-500 font-sans mt-0.5">
                {m.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
