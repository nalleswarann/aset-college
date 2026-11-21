import React, { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
} from 'motion/react';
import { DEPARTMENTS, PROGRAM_MATRIX } from '../data/universityData';
import { Department } from '../types/university';

// High-resolution authentic imagery
import asetCampusMainImg from '../assets/images/aset-campus-main-building.webp';
import aviationImg from '../assets/images/departments/dept-aviation.jpg';
import logisticsImg from '../assets/images/departments/dept-logistics.jpg';
import safetyImg from '../assets/images/departments/dept-safety.jpg';
import analyticsImg from '../assets/images/departments/dept-analytics.jpg';
import commerceImg from '../assets/images/departments/dept-commerce.jpg';
import hospitalityImg from '../assets/images/departments/dept-hospitality.jpg';

import {
  ChevronLeft,
  ChevronRight,
  Table,
  CheckCircle2,
  Check,
  Zap,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Clock,
  ShieldCheck,
  Search,
} from 'lucide-react';
import {
  ScrollHeading,
  ScrollEyebrow,
  ScrollAction,
} from './ScrollTypography';

interface DepartmentSectionProps {
  onSelectDepartment: (dept: Department) => void;
  onApplyForDepartment: (deptName: string) => void;
}

// Clean, punchy department definitions with signature website gradient title combos
const REFINED_DEPARTMENTS = [
  {
    id: 'aviation-pilot',
    prefix: 'Aviation &',
    highlight: 'Pilot Training',
    fullName: 'Pilot Training, Aviation & Airport Management',
    deptRef: 'Pilot Training, Aviation & Airport Management',
    description:
      'Designed for students aspiring to careers in commercial aviation, airline operations, and airport management. The curriculum combines classroom management principles with in-flight exposure, DGCA flight simulation, and guided airport operations.',
    image: aviationImg,
    objectPosition: 'center 45%',
    tag: 'Aviation Flight Deck & Operations',
  },
  {
    id: 'logistics-shipping',
    prefix: 'Logistics &',
    highlight: 'Shipping',
    fullName: 'Logistics & Shipping',
    deptRef: 'Logistics & Shipping',
    description:
      'Specialized education in multimodal freight transport, maritime shipping, supply chain analytics, and container port logistics, developed in close partnership with international cargo hubs and shipping authorities.',
    image: logisticsImg,
    objectPosition: 'center 50%',
    tag: 'Maritime Port & Global Freight',
  },
  {
    id: 'fire-safety',
    prefix: 'Fire &',
    highlight: 'Industrial Safety',
    fullName: 'Fire & Industrial Safety',
    deptRef: 'Fire & Industrial Safety',
    description:
      'Comprehensive training for safety officers, HSE professionals, and disaster response engineers, integrating live firefighting simulation rigs, hazardous chemical safety protocols, and NEBOSH / IOSH international standards.',
    image: safetyImg,
    objectPosition: 'center 30%',
    tag: 'HSE & Industrial Disaster Safety',
  },
  {
    id: 'business-analytics',
    prefix: 'Business',
    highlight: 'Analytics & Studies',
    fullName: 'Business Analytics & Management Studies',
    deptRef: 'Business Analytics & Management Studies',
    description:
      'Preparing forward-thinking business leaders through advanced predictive analytics, corporate financial modeling, modern management strategy, and digital enterprise systems aligned with high-growth industries.',
    image: analyticsImg,
    objectPosition: 'center 40%',
    tag: 'AI & Data-Driven Management',
  },
  {
    id: 'commerce',
    prefix: 'School of',
    highlight: 'Commerce & Finance',
    fullName: 'School of Commerce (CA / CMA / CS / ACCA + B.Com)',
    deptRef: 'School of Commerce (CA / CMA / CS / ACCA + B.Com)',
    description:
      'Integrates undergraduate commerce education with globally recognized professional accounting, taxation, and corporate governance qualifications, offering accelerated dual pathways in CA, CMA, CS, and ACCA.',
    image: commerceImg,
    objectPosition: 'center 45%',
    tag: 'Chartered Accounting & Global Finance',
  },
  {
    id: 'hospitality',
    prefix: 'Hotel &',
    highlight: 'Hospitality Management',
    fullName: 'Hotel Management',
    deptRef: 'Hotel Management',
    description:
      'World-class hospitality education covering luxury hotel administration, culinary operations, international tourism, and guest relations, delivering hands-on industry exposure across premier global hotel brands.',
    image: hospitalityImg,
    objectPosition: 'center 55%',
    tag: 'Luxury Hotel & Hospitality Administration',
  },
];

export const DepartmentSection: React.FC<DepartmentSectionProps> = ({
  onSelectDepartment,
  onApplyForDepartment,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [showCampusPhoto, setShowCampusPhoto] = useState(false);
  const [durationMode, setDurationMode] = useState<'standard' | 'lateral'>('standard');
  const [isMatrixDrawerOpen, setIsMatrixDrawerOpen] = useState(false);
  const [matrixFilter, setMatrixFilter] = useState('');

  const activeItem = REFINED_DEPARTMENTS[activeIdx] || REFINED_DEPARTMENTS[0];
  const matchedFullDept =
    DEPARTMENTS.find((d) => d.name === activeItem.deptRef) || DEPARTMENTS[activeIdx];

  const handlePrev = () => {
    setShowCampusPhoto(false);
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : REFINED_DEPARTMENTS.length - 1));
  };

  const handleNext = () => {
    setShowCampusPhoto(false);
    setActiveIdx((prev) => (prev < REFINED_DEPARTMENTS.length - 1 ? prev + 1 : 0));
  };

  const handleSelectDept = (idx: number) => {
    setShowCampusPhoto(false);
    setActiveIdx(idx);
  };

  const handleOpenCurriculum = () => {
    if (matchedFullDept) {
      onSelectDepartment(matchedFullDept);
    }
  };

  const handleOpenApply = () => {
    onApplyForDepartment(activeItem.fullName);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx]);

  return (
    <section id="departments" className="relative bg-[#faf8f5] text-stone-900 font-manrope">
      {/* ========================================================================= */}
      {/* EDITORIAL DEPARTMENT SHOWCASE (Matching Reference Layout Image 3)         */}
      {/* 1. Large prominent headline across the top in NewGrotesk                  */}
      {/* 2. Left side: Authentic ASET College image & Department Labs              */}
      {/* 3. Right side: Editorial text, horizontal divider, numbered highlight    */}
      {/* 4. Natural scroll flow: zero sticky lock, instant 120Hz smooth scrolling  */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20">
        
        {/* Top Eyebrow + Accreditation Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-stone-500">
            <span className="font-bold text-orange-600">02</span>
            <span className="w-8 h-px bg-stone-300" />
            <h2 className="font-semibold text-stone-900 tracking-[0.22em]">OUR DEPARTMENTS</h2>
          </div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-orange-100/70 text-orange-800 border border-orange-200/70">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
            <span>Affiliated with Alagappa University · Admissions 2026–2027</span>
          </span>
        </div>

        {/* Large Prominent Headline (Directly matching Image 3) */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-[#111111] leading-[1.12] font-heading">
            We provide specialized academic excellence and a{' '}
            <span className="text-gradient-title font-bold">hands-on approach.</span>
          </h2>
        </div>

        {/* Two-Column Swiss Grid (Left: Visual Showcase, Right: Editorial Content) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Visual Media */}
          <div className="lg:col-span-6 w-full space-y-4">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-stone-900 border border-stone-200/80 shadow-xl group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={showCampusPhoto ? 'campus' : activeItem.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative"
                >
                  <img
                    src={showCampusPhoto ? asetCampusMainImg : activeItem.image}
                    alt={showCampusPhoto ? 'ASET College Flagship Campus Building' : activeItem.fullName}
                    style={{ objectPosition: showCampusPhoto ? 'center 40%' : activeItem.objectPosition }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle vignette gradient for high contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/30 pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Top-Left Image Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-mono tracking-wider border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  <span>
                    {showCampusPhoto
                      ? 'Flagship Campus · Chennai & Coimbatore'
                      : `0${activeIdx + 1} / 0${REFINED_DEPARTMENTS.length} · ${activeItem.tag}`}
                  </span>
                </span>
              </div>

              {/* Bottom Image Controls */}
              <div className="absolute bottom-4 inset-x-4 z-10 flex items-center justify-between gap-3">
                {/* Toggle between Campus View & Department Lab */}
                <div className="inline-flex items-center p-1 rounded-xl bg-black/75 backdrop-blur-md border border-white/20 text-xs font-mono">
                  <button
                    onClick={() => setShowCampusPhoto(false)}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      !showCampusPhoto
                        ? 'bg-orange-600 text-white font-semibold shadow-xs'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    Department Lab
                  </button>
                  <button
                    onClick={() => setShowCampusPhoto(true)}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      showCampusPhoto
                        ? 'bg-orange-600 text-white font-semibold shadow-xs'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    Campus Building
                  </button>
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Department"
                    className="w-9 h-9 rounded-full bg-black/75 hover:bg-black text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Department"
                    className="w-9 h-9 rounded-full bg-black/75 hover:bg-black text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Department Quick Switcher Strip Below Image */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-2">
              {REFINED_DEPARTMENTS.map((dept, idx) => (
                <button
                  key={dept.id}
                  onClick={() => handleSelectDept(idx)}
                  className={`px-2.5 py-2 rounded-xl text-left transition-all border cursor-pointer ${
                    activeIdx === idx && !showCampusPhoto
                      ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                      : 'bg-white/80 hover:bg-white text-stone-700 border-stone-200/80 hover:border-stone-300'
                  }`}
                >
                  <span className={`block text-[10px] font-mono font-bold ${activeIdx === idx && !showCampusPhoto ? 'text-orange-400' : 'text-stone-400'}`}>
                    0{idx + 1}
                  </span>
                  <span className="block text-xs font-semibold truncate mt-0.5">
                    {dept.prefix} {dept.highlight}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Editorial Narrative & Numbered Features (Directly matching Image 3) */}
          <div className="lg:col-span-6 w-full flex flex-col justify-between space-y-6">
            
            {/* Top Paragraph: Institutional Philosophy (Matching Image 3 & Image 2) */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-stone-800 leading-relaxed font-body">
                Underpinning all of our disciplines is an understanding of industry demand, student potential, and experiential training, so that academic pathways and degrees remain meaningful and relevant over time.
              </p>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-body">
                From DGCA-approved flight simulation bays and industrial safety drill-fields to maritime shipping hubs and digital analytics laboratories, our specialized departments combine rigorous academic curriculum with hands-on industry competence.
              </p>
            </div>

            {/* Subtle Divider Line (Directly matching Image 3's horizontal line) */}
            <div className="w-full h-px bg-stone-300/80 my-2" />

            {/* Active Department Numbered Feature (Directly matching Image 3's "01 Connect and disconnect...") */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="flex items-baseline gap-3 sm:gap-4">
                  <span className="text-lg sm:text-xl font-mono font-bold text-orange-600 shrink-0">
                    0{activeIdx + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-stone-900 font-heading">
                    {activeItem.prefix}{' '}
                    <span className="text-gradient-title">{activeItem.highlight}</span>
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-body pl-7 sm:pl-9 border-l-2 border-orange-500/40">
                  {activeItem.description}
                </p>

                {/* Practical Mastery Tag */}
                <div className="pl-7 sm:pl-9 pt-1 flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-stone-100 text-stone-700 border border-stone-200">
                    Focus: {activeItem.tag}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-orange-50 text-orange-800 border border-orange-200/60">
                    Degree Conferred by Alagappa University
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Action Buttons Row */}
            <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-stone-200/80">
              <button
                onClick={handleOpenApply}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-black hover:bg-stone-800 text-white text-xs sm:text-sm font-mono font-semibold tracking-wide shadow-lg transition-all duration-200 cursor-pointer active:scale-95 border border-white/10"
              >
                <span className="text-orange-400 text-sm leading-none">❖</span>
                <span>Apply for Department</span>
              </button>

              <button
                onClick={handleOpenCurriculum}
                className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-stone-900 hover:text-orange-600 transition-colors cursor-pointer group"
              >
                <span>Explore Syllabus &amp; Degrees</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-orange-600" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* SECTION 4: PROGRAM DURATION & ENTRY ELIGIBILITY GUIDE (3-CARD PRICING CLONE) */}
      {/* Warm Cream (#faf8f5) Backdrop, Curated 3-Card Layout & Full Specification Matrix */}
      {/* ========================================================================= */}
      <div className="bg-[#faf8f5] text-stone-900 px-4 sm:px-8 lg:px-16 py-20 sm:py-24 lg:py-32 border-t border-stone-200/80 relative overflow-hidden">
        {/* Soft atmospheric gradient glow behind the cards using website warm palette */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-r from-orange-100/40 via-amber-100/30 to-stone-200/20 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Centered Top Eyebrow Badge */}
          <div className="flex justify-center mb-3">
            <ScrollEyebrow delay={0.04}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50/90 border border-orange-200/70 text-orange-800 text-xs font-semibold shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>Academic Pathways &amp; Eligibility</span>
              </span>
            </ScrollEyebrow>
          </div>

          {/* Centered Main Title */}
          <ScrollHeading
            as="h3"
            delay={0.08}
            className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-extrabold tracking-tight text-stone-900 text-center leading-tight"
          >
            Program Duration &amp;{' '}
            <span className="text-gradient-title font-medium">
              Entry Eligibility Guide
            </span>
          </ScrollHeading>

          {/* Centered Subtitle */}
          <ScrollAction delay={0.14} className="mt-4 max-w-2xl mx-auto text-center px-4">
            <p className="text-sm sm:text-base text-stone-600 font-manrope leading-relaxed">
              Explore industry-certified undergraduate, postgraduate, and fast-track diploma specifications affiliated with{' '}
              <strong className="text-stone-900 font-semibold">Alagappa University</strong>{' '}
              designed for high-growth global careers.
            </p>
          </ScrollAction>

          {/* Centered Segmented Toggle Pill (Cloned from Monthly | Yearly Save 16%) */}
          <div className="flex justify-center mt-8 mb-12 sm:mb-14">
            <div className="inline-flex items-center p-1 rounded-full bg-stone-200/70 border border-stone-300/60 shadow-inner">
              <button
                type="button"
                onClick={() => setDurationMode('standard')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  durationMode === 'standard'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Standard Degree Pathways
              </button>
              <button
                type="button"
                onClick={() => setDurationMode('lateral')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  durationMode === 'lateral'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span>Fast-Track &amp; Lateral Entry</span>
                <span className="bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs">
                  Save 1 Yr
                </span>
              </button>
            </div>
          </div>

          {/* 3-Card Curated Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
            {/* CARD 1: Diploma & Fast-Track */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="bg-white rounded-3xl border border-stone-200/90 p-7 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-bold font-manrope text-stone-900">
                  Diploma &amp; Fast-Track
                </h4>

                <div className="mt-4 mb-3 flex items-baseline">
                  <span className="text-5xl sm:text-6xl font-extrabold text-stone-900 tracking-tight font-manrope">
                    {durationMode === 'standard' ? '1–3' : '1'}
                  </span>
                  <span className="text-stone-500 font-medium text-xs sm:text-sm ml-2">
                    {durationMode === 'standard' ? '/ Years' : '/ Year Fast-Track'}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-500 font-manrope leading-relaxed min-h-[40px]">
                  Ideal for 10th &amp; 12th pass students seeking immediate vocational readiness and DGCA/industrial credentials.
                </p>

                <button
                  type="button"
                  onClick={() => onApplyForDepartment('Diploma in Fire & Safety / Shipping & Logistics')}
                  className="w-full mt-6 py-3.5 px-5 rounded-2xl bg-stone-100 hover:bg-stone-200/90 text-stone-900 font-semibold text-xs sm:text-sm transition-all border border-stone-200/90 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Explore Diploma Programs</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-700 transition-transform group-hover:translate-x-0.5" />
                </button>

                <div className="mt-8 pt-6 border-t border-stone-100 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>10th Std / SSLC or 12th Std (HSC) Pass</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>Fire &amp; Industrial Safety Operations (1 &amp; 3 Yrs)</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>Shipping, Logistics &amp; Cargo Operations (1 Yr)</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>Aviation Ground Operations &amp; Pilot Ground School</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>DGCA Simulator Flight Training Lab Access</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>Direct Airport &amp; Seaport Apprenticeship Pipeline</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>Eligible for Lateral Entry into 2nd Year UG Degrees</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: Undergraduate Degrees (Highlighted with clean website gradient line, no banner text) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="relative bg-white rounded-3xl border-2 border-orange-500/40 shadow-xl shadow-orange-500/5 flex flex-col justify-between overflow-hidden lg:-translate-y-2 z-10"
            >
              {/* Sleek signature website gradient top highlight line */}
              <div className="h-1.5 w-full bg-gradient-to-r from-orange-600 via-amber-500 to-rose-600" />

              <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-xl font-bold font-manrope text-stone-900">
                    Undergraduate Degrees (UG)
                  </h4>

                  <div className="mt-4 mb-3 flex items-baseline">
                    <span className="text-5xl sm:text-6xl font-extrabold text-stone-900 tracking-tight font-manrope">
                      {durationMode === 'standard' ? '3' : '2'}
                    </span>
                    <span className="text-stone-500 font-medium text-xs sm:text-sm ml-2">
                      {durationMode === 'standard' ? '/ Years (6 Sems)' : '/ Years (LE Track)'}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-500 font-manrope leading-relaxed min-h-[40px]">
                    Flagship bachelor curricula affiliated with Alagappa University for high-demand corporate and technical careers.
                  </p>

                  <button
                    type="button"
                    onClick={() => onApplyForDepartment('Pilot Training, Aviation & Airport Management')}
                    className="w-full mt-6 py-3.5 px-5 rounded-2xl bg-stone-900 hover:bg-orange-600 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-stone-900/15 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Apply for UG Programs</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <div className="mt-8 pt-6 border-t border-orange-100 space-y-3">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-manrope leading-relaxed">
                      <div className="w-4 h-4 rounded-full border border-orange-400 bg-orange-50 text-orange-600 shrink-0 mt-0.5 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>12th Std (HSC) Pass in Any Stream / Group</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-manrope leading-relaxed">
                      <div className="w-4 h-4 rounded-full border border-orange-400 bg-orange-50 text-orange-600 shrink-0 mt-0.5 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span className="font-semibold text-stone-900">Conferred by Alagappa University</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-manrope leading-relaxed">
                      <div className="w-4 h-4 rounded-full border border-orange-400 bg-orange-50 text-orange-600 shrink-0 mt-0.5 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>B.Sc. Aviation &amp; BBA Airline Management</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-manrope leading-relaxed">
                      <div className="w-4 h-4 rounded-full border border-orange-400 bg-orange-50 text-orange-600 shrink-0 mt-0.5 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>B.Sc. Fire &amp; Industrial Safety (LE Available)</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-manrope leading-relaxed">
                      <div className="w-4 h-4 rounded-full border border-orange-400 bg-orange-50 text-orange-600 shrink-0 mt-0.5 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>BBA Shipping &amp; Logistics Management</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-manrope leading-relaxed">
                      <div className="w-4 h-4 rounded-full border border-orange-400 bg-orange-50 text-orange-600 shrink-0 mt-0.5 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>Integrated B.Com + CA / CMA / CS / ACCA (UK)</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-manrope leading-relaxed">
                      <div className="w-4 h-4 rounded-full border border-orange-400 bg-orange-50 text-orange-600 shrink-0 mt-0.5 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>B.Sc. Artificial Intelligence &amp; Analytics</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-manrope leading-relaxed">
                      <div className="w-4 h-4 rounded-full border border-orange-400 bg-orange-50 text-orange-600 shrink-0 mt-0.5 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>100% Placement Guarantee &amp; Internships</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 3: Postgraduate & MBA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="bg-white rounded-3xl border border-stone-200/90 p-7 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-bold font-manrope text-stone-900">
                  Postgraduate &amp; MBA (PG)
                </h4>

                <div className="mt-4 mb-3 flex items-baseline">
                  <span className="text-5xl sm:text-6xl font-extrabold text-stone-900 tracking-tight font-manrope">
                    {durationMode === 'standard' ? '2' : '1'}
                  </span>
                  <span className="text-stone-500 font-medium text-xs sm:text-sm ml-2">
                    {durationMode === 'standard' ? '/ Years (4 Sems)' : '/ Year PG Diploma'}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-500 font-manrope leading-relaxed min-h-[40px]">
                  Master's degree curricula for graduates and professionals targeting corporate leadership and industrial oversight.
                </p>

                <button
                  type="button"
                  onClick={() => onApplyForDepartment('Management & Business Analytics (MBA)')}
                  className="w-full mt-6 py-3.5 px-5 rounded-2xl bg-stone-100 hover:bg-stone-200/90 text-stone-900 font-semibold text-xs sm:text-sm transition-all border border-stone-200/90 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Apply for PG / MBA</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-700 transition-transform group-hover:translate-x-0.5" />
                </button>

                <div className="mt-8 pt-6 border-t border-stone-100 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>Any Recognized Undergraduate Degree (UG)</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span className="font-semibold text-stone-900">Conferred by Alagappa University</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>MBA Business Analytics &amp; Quantitative BI</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>MBA Airline, Airport &amp; Aviation Operations</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>MBA Shipping &amp; Global Port Logistics</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>M.Sc. Industrial Safety &amp; Hygiene (B.E./B.Sc.)</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>1 Major Project + 2 Capstone Mini-Projects</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-manrope leading-relaxed">
                    <div className="w-4 h-4 rounded-full border border-stone-300 text-stone-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>Corporate Placement Access (Zoho, KPMG, TTF)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Specification Matrix Drawer */}
          <div className="mt-12 sm:mt-16 max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center shrink-0 border border-orange-200/70">
                  <Table className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-stone-900 font-manrope">
                    Detailed Department-by-Department Matrix
                  </h4>
                  <p className="text-xs text-stone-500">
                    Official 2026–2027 Academic Prospectus &bull; Conferred by Alagappa University
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsMatrixDrawerOpen(!isMatrixDrawerOpen)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200/80 text-stone-800 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                <span>{isMatrixDrawerOpen ? 'Collapse Detailed Table' : 'View Full Program Specifications'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMatrixDrawerOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Expandable Table Drawer */}
            <AnimatePresence>
              {isMatrixDrawerOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-4">
                    {/* Search filter input */}
                    <div className="mb-4 flex items-center gap-2 bg-white border border-stone-200 rounded-xl px-4 py-2.5 shadow-2xs">
                      <Search className="w-4 h-4 text-stone-400 shrink-0" />
                      <input
                        type="text"
                        value={matrixFilter}
                        onChange={(e) => setMatrixFilter(e.target.value)}
                        placeholder="Search by department, degree name, or eligibility (e.g. Aviation, Fire, MBA, 12th Std)..."
                        className="w-full text-xs sm:text-sm text-stone-800 placeholder-stone-400 bg-transparent focus:outline-hidden"
                      />
                      {matrixFilter && (
                        <button
                          type="button"
                          onClick={() => setMatrixFilter('')}
                          className="text-xs text-stone-400 hover:text-stone-600 font-mono"
                        >
                          Clear
                        </button>
                      )}
                    </div>

                    <div className="overflow-x-auto border border-stone-200/90 rounded-2xl bg-white shadow-xs">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-stone-950 text-stone-100 font-mono uppercase tracking-wider text-[11px] border-b border-stone-800">
                            <th className="py-4 px-5">Department</th>
                            <th className="py-4 px-5">Representative Programs</th>
                            <th className="py-4 px-5 whitespace-nowrap">Typical Duration</th>
                            <th className="py-4 px-5">Entry Eligibility</th>
                            <th className="py-4 px-5 text-right">Apply</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200/80 font-manrope">
                          {PROGRAM_MATRIX.filter((row) => {
                            if (!matrixFilter.trim()) return true;
                            const q = matrixFilter.toLowerCase();
                            return (
                              row.department.toLowerCase().includes(q) ||
                              row.programs.toLowerCase().includes(q) ||
                              row.eligibility.toLowerCase().includes(q) ||
                              row.duration.toLowerCase().includes(q)
                            );
                          }).map((row, idx) => (
                            <tr
                              key={idx}
                              className="hover:bg-orange-50/40 transition-colors group"
                            >
                              <td className="py-4 px-5 font-bold text-stone-900 group-hover:text-orange-700 transition-colors whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                                  <span>{row.department}</span>
                                </div>
                              </td>
                              <td className="py-4 px-5 text-stone-700 leading-relaxed font-medium">
                                {row.programs}
                              </td>
                              <td className="py-4 px-5 font-mono text-orange-700 font-semibold whitespace-nowrap">
                                <span className="bg-orange-50 border border-orange-200/70 px-2.5 py-1 rounded-md text-xs">
                                  {row.duration}
                                </span>
                              </td>
                              <td className="py-4 px-5 text-stone-600 leading-relaxed text-xs">
                                {row.eligibility}
                              </td>
                              <td className="py-4 px-5 text-right whitespace-nowrap">
                                <button
                                  type="button"
                                  onClick={() => onApplyForDepartment(row.department)}
                                  className="text-xs font-semibold text-orange-600 hover:text-orange-800 underline hover:no-underline cursor-pointer"
                                >
                                  Apply &rarr;
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
