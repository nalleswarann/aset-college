import React from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  ArrowRight,
  Building2,
  CheckCircle2,
  Plane,
  Ship,
  Flame,
  Award,
  Users,
  ArrowUpRight,
} from 'lucide-react';
import {
  ScrollHeading,
  ScrollParagraph,
  ScrollEyebrow,
  ScrollAction,
  LUXURY_EASE,
} from './ScrollTypography';

// Sector Showcase Images
import sectorAviationImg from '../assets/images/sector-aviation-flight.jpg';
import sectorLogisticsImg from '../assets/images/sector-logistics-maritime.jpg';
import sectorSafetyImg from '../assets/images/sector-safety-engineering.jpg';
import sectorTechImg from '../assets/images/sector-tech-enterprise.jpg';
import sectorHospitalityImg from '../assets/images/departments/dept-hospitality.jpg';

// =========================================================================
// OFFICIAL PLACEMENT & RECRUITING PARTNER LOGOS (Matching Reference Image)
// =========================================================================
import msuLogo from '../assets/images/partners/msu.png';
import sasLogo from '../assets/images/partners/sas.png';
import arrivoLogo from '../assets/images/partners/arrivo_clean.png';
import crestShieldLogo from '../assets/images/partners/crest-shield.png';
import hsuLogo from '../assets/images/partners/hsu_clean.png';
import tharaviationLogo from '../assets/images/partners/tharaviation.png';
import campusworldLogo from '../assets/images/partners/campusworld.png';
import aaiLogo from '../assets/images/partners/aai_clean.png';
import naturalsLogo from '../assets/images/partners/naturals.webp';
import lscLogo from '../assets/images/partners/lsc.png';
import kpmgLogo from '../assets/images/partners/kpmg.webp';
import aasscLogo from '../assets/images/partners/aassc.png';
import shinawatraLogo from '../assets/images/partners/shinawatra.png';
import intiLogo from '../assets/images/partners/inti_clean.png';
import hasanuddinLogo from '../assets/images/partners/hasanuddin.png';
import muscatLogo from '../assets/images/partners/muscat.avif';

interface CampusLifeSectionProps {
  onOpenVirtualTour: () => void;
}

// -----------------------------------------------------------------
// Primary Partners Ribbon (Order matching user's uploaded reference)
// -----------------------------------------------------------------
const PLACEMENT_LOGOS_ROW_1 = [
  { name: 'MSU Management & Science University', logo: msuLogo },
  { name: 'SAS Gas Pvt. Ltd.', logo: sasLogo },
  { name: 'Arrivo Gas Pvt. Ltd.', logo: arrivoLogo },
  { name: 'ASET Institutional Shield', logo: crestShieldLogo },
  { name: 'Health Sciences University (HSU)', logo: hsuLogo },
  { name: 'Thar Aviation Academy', logo: tharaviationLogo },
  { name: 'Campus World International', logo: campusworldLogo },
  { name: 'Airports Authority of India (AAI)', logo: aaiLogo },
  { name: 'Naturals Group', logo: naturalsLogo },
  { name: 'Logistics Sector Skill Council (LSC)', logo: lscLogo },
];

const PLACEMENT_LOGOS_ROW_2 = [
  { name: 'KPMG Worldwide', logo: kpmgLogo },
  { name: 'Aerospace & Aviation Sector Skill Council (AASSC)', logo: aasscLogo },
  { name: 'Shinawatra University', logo: shinawatraLogo },
  { name: 'INTI International University', logo: intiLogo },
  { name: 'Hasanuddin University', logo: hasanuddinLogo },
  { name: 'Muscat Overseas Logistics', logo: muscatLogo },
  { name: 'Airports Authority of India (AAI)', logo: aaiLogo },
  { name: 'Thar Aviation Academy', logo: tharaviationLogo },
  { name: 'MSU Management & Science University', logo: msuLogo },
  { name: 'Logistics Sector Skill Council (LSC)', logo: lscLogo },
];

// Highlight metrics
const PLACEMENT_METRICS = [
  { label: 'Placement Record', value: '100%', detail: 'Career support & guidance' },
  { label: 'Recruiting Partners', value: '500+', detail: 'Domestic & global employers' },
  { label: 'Highest International CTC', value: '₹12 LPA', detail: 'Overseas aviation & maritime' },
  { label: 'Training Modules', value: '12 Areas', detail: 'Pre-placement grooming' },
];

interface SectorShowcaseItem {
  id: string;
  sector: string;
  badge: string;
  tag: string;
  metric: string;
  description: string;
  image: string;
  icon: React.ElementType;
  partners: string[];
}

const SECTOR_SHOWCASE_ITEMS: SectorShowcaseItem[] = [
  {
    id: 'aviation',
    sector: 'Aviation & Airport Services',
    badge: 'Aviation & Ground Operations',
    tag: 'DGCA & IATA Curriculum',
    metric: '100% Airport Prep',
    description:
      'Direct recruitment pathways across domestic and international airlines, ground handling, flight operations, air cargo management, and passenger services.',
    image: sectorAviationImg,
    icon: Plane,
    partners: ['Air India', 'Air India SATS', 'Air India Express', 'Akasa Air', 'SpiceJet', 'AAI'],
  },
  {
    id: 'logistics',
    sector: 'Logistics, Shipping & Supply Chain',
    badge: 'Maritime & Multimodal Freight',
    tag: 'Global Trade Corridor',
    metric: '₹12 LPA Top Global CTC',
    description:
      'End-to-end global supply chain, multimodal container freight forwarding, seaport operations, customs brokerage, and smart 3PL logistics networks.',
    image: sectorLogisticsImg,
    icon: Ship,
    partners: [
      'Maersk',
      'DHL Supply Chain',
      'MSC',
      'DB Schenker',
      'TVS Supply Chain',
      'Delhivery',
      'Haesok Shipping',
      'Vinayak Shipping',
    ],
  },
  {
    id: 'safety',
    sector: 'Industrial Safety & Fire Engineering',
    badge: 'HSE & High-Hazard Engineering',
    tag: 'Zero-Harm HSE Standards',
    metric: 'NEBOSH & IOSH Standards',
    description:
      'Rigorous campus recruitment for certified Safety Officers, HSE Consultants, and Fire Prevention Engineers across industrial mega-projects.',
    image: sectorSafetyImg,
    icon: Flame,
    partners: ['DLF', 'Casagrand', 'SPR Construction', 'Tenneco Clean Air', 'Swastik Corporation'],
  },
  {
    id: 'technology',
    sector: 'Technology & Enterprise Solutions',
    badge: 'Software & Data Architecture',
    tag: 'Digital Transformation',
    metric: 'Fortune 500 Network',
    description:
      'Strategic enterprise technology hiring for full-cycle business analytics, enterprise software development, system audits, and digital transformation.',
    image: sectorTechImg,
    icon: Building2,
    partners: ['Zoho', 'TTF Technologies', 'KPMG', 'Enterprise Tech Hubs'],
  },
  {
    id: 'hospitality',
    sector: 'Hospitality & Luxury Cabin Services',
    badge: '5-Star Consortia & Cabin Crew',
    tag: 'International Hospitality',
    metric: 'Global Service Excellence',
    description:
      'Premier operational placement across elite hotel chains, luxury aviation cabin service, cruise liners, and high-end guest experiences worldwide.',
    image: sectorHospitalityImg,
    icon: Award,
    partners: ['Naturals Group', 'Taj Hotels Consortia', 'Star Alliance Cabin Teams', 'International Flight Consortia'],
  },
];

export const CampusLifeSection: React.FC<CampusLifeSectionProps> = ({
  onOpenVirtualTour,
}) => {
  return (
    <section
      id="placements"
      className="relative w-full py-20 sm:py-24 lg:py-32 bg-[#faf8f5] text-stone-900 border-b border-stone-200/90 overflow-hidden select-none font-manrope"
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
              className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold tracking-tight text-stone-900 leading-tight"
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
            {/* Track 1: Smooth Left Scrolling Ticker */}
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
                    className="flex items-center justify-center shrink-0 px-6 sm:px-10 md:px-14 select-none group cursor-default"
                    title={item.name}
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-8 sm:h-10 md:h-12 w-auto max-w-[130px] sm:max-w-[160px] md:max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Track 2: Smooth Right Scrolling Ticker */}
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
                    className="flex items-center justify-center shrink-0 px-6 sm:px-10 md:px-14 select-none group cursor-default"
                    title={item.name}
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-8 sm:h-10 md:h-12 w-auto max-w-[130px] sm:max-w-[160px] md:max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-105"
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
              className="p-5 sm:p-6 rounded-2xl bg-white/90 border border-stone-200/80 shadow-xs hover:shadow-md hover:border-orange-500/30 transition-all"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight mb-1">
                <span className="text-gradient-title">{m.value}</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-stone-800 font-manrope">
                {m.label}
              </div>
              <div className="text-[11px] text-stone-500 font-sans mt-0.5">
                {m.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* 4. INDUSTRY-WISE RECRUITMENT SECTORS (Modern Continuous Stream) */}
        {/* ========================================================= */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-orange-600">
                  Career Mobility Sectors
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-stone-900 tracking-tight">
                Industry-Wise Recruitment Sectors
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans mt-1 max-w-2xl leading-relaxed">
                Dedicated training tracks tailored to direct on-campus hiring requirements, multinational placements, and specialized domain competencies.
              </p>
            </div>

            {/* Continuous Stream Live Status Badge */}
            <div className="flex items-center gap-2 self-start md:self-end">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-mono shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-semibold text-stone-800">Continuous Non-Stop Stream</span>
                <span className="text-stone-300 hidden sm:inline">•</span>
                <span className="text-stone-500 hidden sm:inline">5 Key Industry Tracks</span>
              </div>
            </div>
          </div>

          {/* Full-width Seamless Scrolling Marquee Container */}
          <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-3 sm:py-5">
            {/* Left Edge Gradient Fade */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-24 md:w-36 bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/85 to-transparent z-20"
            />
            {/* Right Edge Gradient Fade */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-24 md:w-36 bg-gradient-to-l from-[#faf8f5] via-[#faf8f5]/85 to-transparent z-20"
            />

            {/* Continuous Scrolling Without Stopping - 4 Synchronized Tracks */}
            <div className="flex w-max select-none touch-pan-y">
              {[0, 1, 2, 3].map((trackIdx) => (
                <div
                  key={`sector-track-${trackIdx}`}
                  className="animate-marquee-sectors-seamless flex shrink-0 gap-4 sm:gap-6 pr-4 sm:pr-6"
                  aria-hidden={trackIdx > 0}
                >
                  {SECTOR_SHOWCASE_ITEMS.map((sector, idx) => {
                    const SectorIcon = sector.icon;

                    return (
                      <div
                        key={`${sector.id}-${trackIdx}-${idx}`}
                        className="w-[280px] sm:w-[340px] md:w-[385px] lg:w-[415px] shrink-0 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-orange-500/40 transition-all duration-300 overflow-hidden flex flex-col group/card"
                      >
                        {/* TOP HALF: Cinematic Sector Imagery */}
                        <div className="h-44 sm:h-52 md:h-56 relative overflow-hidden bg-stone-900">
                          <img
                            src={sector.image}
                            alt={sector.sector}
                            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover/card:scale-108"
                            loading="lazy"
                          />
                          {/* Cinematic Vignette */}
                          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-black/20" />

                          {/* Top Badges Bar */}
                          <div className="absolute top-3 inset-x-3 sm:top-3.5 sm:inset-x-3.5 flex items-center justify-between gap-2 z-10">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/75 backdrop-blur-md border border-white/20 text-[11px] font-mono font-medium text-white shadow-xs">
                              <SectorIcon className="w-3.5 h-3.5 text-amber-400" />
                              <span>{sector.tag}</span>
                            </span>
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-orange-600/95 backdrop-blur-md text-[10px] font-mono font-bold text-white tracking-wide shadow-xs">
                              {sector.metric}
                            </span>
                          </div>

                          {/* Bottom Title Bar */}
                          <div className="absolute bottom-3 inset-x-3 sm:bottom-3.5 sm:inset-x-3.5 z-10 space-y-1">
                            <div className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold">
                              {sector.badge}
                            </div>
                            <h4 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                              {sector.sector}
                            </h4>
                          </div>
                        </div>

                        {/* BOTTOM HALF: Sector Content & Recruiting Partners */}
                        <div className="p-4 sm:p-6 flex flex-col justify-between flex-1 space-y-4 bg-white">
                          <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed line-clamp-3">
                            {sector.description}
                          </p>

                          {/* Recruiting Partners */}
                          <div className="space-y-2 pt-1">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-stone-400">
                                Top Campus Recruiters
                              </span>
                              <span className="text-[11px] font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                                {sector.partners.length} Key Partners
                              </span>
                            </div>

                            <div className="flex flex-wrap gap-1.5 pt-0.5">
                              {sector.partners.map((partner) => (
                                <span
                                  key={partner}
                                  className="px-2.5 py-1 bg-stone-100/90 hover:bg-orange-50 border border-stone-200/80 hover:border-orange-300 rounded-full text-[11px] sm:text-xs font-medium text-stone-800 transition-colors"
                                >
                                  {partner}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Card Footer */}
                          <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-500">
                            <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                              <span>Annual On-Campus Drives</span>
                            </div>
                            <span className="text-stone-400 flex items-center gap-0.5 group-hover/card:text-orange-600 transition-colors">
                              <span>Placement Track</span>
                              <ArrowUpRight className="w-3 h-3 transition-transform group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
