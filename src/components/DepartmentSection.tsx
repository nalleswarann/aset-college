import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { DEPARTMENTS, PROGRAM_MATRIX } from '../data/universityData';
import { Department } from '../types/university';
import {
  BookOpen,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Table,
  CheckCircle2,
  GraduationCap,
  LayoutGrid,
  SlidersHorizontal,
} from 'lucide-react';
import {
  ScrollHeading,
  ScrollParagraph,
  ScrollEyebrow,
  ScrollAction,
} from './ScrollTypography';

interface DepartmentSectionProps {
  onSelectDepartment: (dept: Department) => void;
  onApplyForDepartment: (deptName: string) => void;
}

export const DepartmentSection: React.FC<DepartmentSectionProps> = ({
  onSelectDepartment,
  onApplyForDepartment,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Update scroll metrics on scroll
  const handleScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(Math.min(100, Math.max(0, progress)));

    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);

    // Approximate active card index
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 32
      : clientWidth;
    const currentCard = Math.round(scrollLeft / cardWidth);
    setActiveIdx(Math.min(DEPARTMENTS.length - 1, Math.max(0, currentCard)));
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll, viewMode]);

  // Smooth scroll by distance
  const scrollByAmount = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 32
      : el.clientWidth * 0.8;
    const delta = direction === 'left' ? -cardWidth : cardWidth;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  // Scroll directly to a specific department index
  const scrollToDepartment = (idx: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cards = el.children;
    if (cards[idx]) {
      (cards[idx] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  // Mouse Drag to Scroll handlers (Peachweb fluid drag experience)
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el || viewMode === 'grid') return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftState(el.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = scrollContainerRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed multiplier
    el.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="departments"
      className="relative py-24 sm:py-32 bg-[#faf8f5] text-stone-900 font-manrope overflow-hidden border-b border-stone-200/80"
    >
      {/* Peachweb Warm Subtle Ambient Gradient Glows */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[55vw] max-w-[700px] h-[55vw] max-h-[700px] rounded-full bg-gradient-to-br from-orange-400/10 via-amber-300/8 to-transparent blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/4"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 -left-20 w-[45vw] max-w-[600px] h-[45vw] max-h-[600px] rounded-full bg-gradient-to-tr from-rose-400/8 via-orange-300/6 to-transparent blur-[110px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================= */}
        {/* PEACHWEB-STYLE SECTION HEADER                             */}
        {/* Monospace eyebrow tag, bold display title & description   */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-stone-200/80">
          <div className="space-y-4 max-w-3xl">
            {/* Peachweb Eyebrow Pill */}
            <ScrollEyebrow delay={0.04} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-700 text-xs font-mono uppercase tracking-[0.22em] font-semibold">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>ACADEMIC DISCIPLINES &bull; SIX CORE PATHWAYS</span>
            </ScrollEyebrow>

            {/* Display Headline */}
            <ScrollHeading delay={0.12} className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold tracking-tight text-stone-900 leading-tight">
              Six Core Departments Aligned With{' '}
              <span className="text-gradient-accent">
                High-Growth Industries
              </span>
            </ScrollHeading>

            {/* Subtitle */}
            <ScrollParagraph delay={0.2} className="text-base sm:text-lg text-stone-600 max-w-2xl font-light leading-relaxed">
              ASET College organizes its academic offerings across six core departments
              spanning UG, PG, Diploma, PG Diploma, and international certification pathways.
            </ScrollParagraph>
          </div>

          {/* Interactive Navigation & View Controls (Peachweb Modern Agency Toolbar) */}
          <ScrollAction delay={0.26} className="flex flex-col sm:flex-row sm:items-center gap-4 self-start lg:self-end shrink-0">
            {/* View Mode Toggle: Carousel vs Grid */}
            <div className="inline-flex p-1 bg-white border border-stone-200/90 rounded-2xl shadow-xs">
              <button
                onClick={() => setViewMode('carousel')}
                aria-label="Carousel Scroll View"
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${viewMode === 'carousel'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
                  }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Scroll Showcase</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                aria-label="Grid Overview"
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${viewMode === 'grid'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
                  }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
            </div>

            {/* Carousel Arrow Controls (Visible in Carousel View) */}
            {viewMode === 'carousel' && (
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-stone-500 mr-1 select-none">
                  0{activeIdx + 1} / 0{DEPARTMENTS.length}
                </span>
                <button
                  onClick={() => scrollByAmount('left')}
                  disabled={!canScrollLeft}
                  aria-label="Previous Department"
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all cursor-pointer ${canScrollLeft
                    ? 'bg-white hover:bg-stone-900 hover:text-white border-stone-300 text-stone-800 shadow-xs'
                    : 'bg-stone-100 border-stone-200 text-stone-300 cursor-not-allowed'
                    }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollByAmount('right')}
                  disabled={!canScrollRight}
                  aria-label="Next Department"
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all cursor-pointer ${canScrollRight
                    ? 'bg-white hover:bg-stone-900 hover:text-white border-stone-300 text-stone-800 shadow-xs'
                    : 'bg-stone-100 border-stone-200 text-stone-300 cursor-not-allowed'
                    }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </ScrollAction>
        </div>

        {/* ========================================================= */}
        {/* CAROUSEL VIEW: SEAMLESS HORIZONTAL SMOOTH SCROLLING TRACK */}
        {/* Peachweb Card Stack Showcase with snap, drag & indicators */}
        {/* ========================================================= */}
        {viewMode === 'carousel' ? (
          <div className="mt-10 sm:mt-12">
            {/* Horizontal Scroll Track */}
            <div
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              className={`flex gap-6 sm:gap-8 overflow-x-auto pb-8 pt-2 px-1 snap-x snap-mandatory no-scrollbar cursor-grab ${isDragging ? 'cursor-grabbing select-none' : ''
                }`}
              style={{ scrollBehavior: 'smooth' }}
            >
              {DEPARTMENTS.map((dept, idx) => {
                const formattedNum = String(idx + 1).padStart(2, '0');
                return (
                  <motion.div
                    key={dept.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-[88vw] sm:w-[460px] md:w-[500px] lg:w-[540px] shrink-0 snap-center flex flex-col justify-between bg-white rounded-3xl border border-stone-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_48px_rgba(255,118,0,0.12)] hover:border-orange-500/50 transition-all duration-500 overflow-hidden group"
                  >
                    {/* Top Media Showcase Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                      <img
                        src={dept.image}
                        alt={dept.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 select-none"
                      />
                      {/* Subtle Ambient Shadow Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent pointer-events-none" />

                      {/* Top Corner Floating Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-3 pointer-events-none z-10">
                        {/* Peachweb 01 / 02 Large Index Badge */}
                        <span className="font-mono font-bold text-xs sm:text-sm text-stone-900 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-200 shadow-sm">
                          {formattedNum}
                        </span>

                        {/* Section Code Badge */}
                        <span className="font-mono font-semibold text-xs text-orange-200 bg-black/55 backdrop-blur-md px-3 py-1 rounded-full border border-orange-400/30">
                          Section {dept.code}
                        </span>
                      </div>

                      {/* Bottom Image Info Strip */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-white text-xs font-mono pointer-events-none z-10">
                        <span className="inline-flex items-center gap-1.5 text-stone-300">
                          <GraduationCap className="w-3.5 h-3.5 text-orange-400" />
                          <span>{dept.degrees.length} Programs</span>
                        </span>
                        <span className="text-amber-300 font-semibold bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10 text-right line-clamp-1">
                          {dept.durationSummary}
                        </span>
                      </div>
                    </div>

                    {/* Department Content Body */}
                    <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
                      <div className="space-y-4">
                        {/* Eligibility Summary Eyebrow */}
                        <div className="text-xs text-stone-500 font-mono tracking-wide">
                          <span className="text-orange-600 font-semibold mr-1.5">&bull;</span>
                          <span>Eligibility: {dept.eligibilitySummary}</span>
                        </div>

                        {/* Department Name */}
                        <h3 className="text-2xl sm:text-3xl font-manrope font-bold text-stone-900 group-hover:text-orange-600 transition-colors duration-300 leading-snug">
                          {dept.name}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-stone-600 font-light leading-relaxed line-clamp-3">
                          {dept.description}
                        </p>

                        {/* Programs Offered Box */}
                        <div className="bg-[#fcfbf9] p-4 border border-stone-200/80 rounded-2xl text-xs space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-mono uppercase tracking-wider text-orange-700 font-bold text-[11px] flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                              Programs Offered
                            </span>
                            <span className="text-[10px] font-mono text-stone-400 uppercase">
                              Official Pathways
                            </span>
                          </div>
                          <ul className="text-stone-700 space-y-1.5 pt-1">
                            {dept.degrees.map((deg, degIdx) => (
                              <li key={degIdx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-1.5" />
                                <span className="font-medium text-stone-800">{deg}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Core Focus Areas */}
                        <div className="pt-2 space-y-2 text-xs">
                          <span className="font-mono uppercase text-[11px] font-bold text-stone-900 block tracking-wider">
                            {dept.focusLabel}:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {dept.focusItems.map((item, itemIdx) => (
                              <span
                                key={itemIdx}
                                className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 text-stone-700 text-[11px] font-medium border border-stone-200/70 transition-colors"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
                        <button
                          onClick={() => onSelectDepartment(dept)}
                          className="flex-1 py-3.5 px-4 bg-stone-950 hover:bg-orange-600 text-white text-xs uppercase tracking-wider font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md group/btn"
                        >
                          <BookOpen className="w-3.5 h-3.5 transition-transform group-hover/btn:scale-110" />
                          <span>View Program Details</span>
                        </button>
                        <button
                          onClick={() => onApplyForDepartment(dept.name)}
                          className="py-3.5 px-4 border border-stone-300 hover:border-orange-500 hover:text-orange-600 text-stone-800 text-xs uppercase tracking-wider font-semibold rounded-xl transition-all duration-300 hover:bg-orange-50/50 flex items-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <span>Inquire</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Seamless Interactive Progress Bar & Quick Indicator Track */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200/80">
              {/* Numeric indicator pills to click and jump to any department */}
              <div className="flex items-center gap-2">
                {DEPARTMENTS.map((dept, idx) => (
                  <button
                    key={dept.id}
                    onClick={() => scrollToDepartment(idx)}
                    aria-label={`Jump to department ${idx + 1}`}
                    className={`h-8 px-3 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${activeIdx === idx
                      ? 'bg-orange-600 text-white shadow-xs scale-105'
                      : 'bg-white hover:bg-stone-100 text-stone-600 border border-stone-200'
                      }`}
                  >
                    <span>0{idx + 1}</span>
                    {activeIdx === idx && (
                      <span className="hidden md:inline font-sans font-medium text-[11px] truncate max-w-[120px]">
                        {dept.name.split(',')[0]}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Smooth Dynamic Progress Bar */}
              <div className="flex items-center gap-3 w-full sm:w-64">
                <span className="text-[11px] font-mono font-semibold text-stone-500 shrink-0">
                  SCROLL
                </span>
                <div className="flex-1 h-1.5 bg-stone-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-200"
                    style={{ width: `${Math.max(16, scrollProgress)}%` }}
                  />
                </div>
                <span className="text-[11px] font-mono font-semibold text-orange-600 shrink-0">
                  {Math.round(scrollProgress)}%
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================= */
          /* GRID VIEW: COMPREHENSIVE 2/3 COLUMN DEPARTMENT SHOWCASE   */
          /* ========================================================= */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {DEPARTMENTS.map((dept, idx) => {
              const formattedNum = String(idx + 1).padStart(2, '0');
              return (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex flex-col justify-between bg-white rounded-3xl border border-stone-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_48px_rgba(255,118,0,0.12)] hover:border-orange-500/50 transition-all duration-500 overflow-hidden group"
                >
                  {/* Top Image Showcase */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-3 pointer-events-none z-10">
                      <span className="font-mono font-bold text-xs text-stone-900 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-200 shadow-sm">
                        {formattedNum}
                      </span>
                      <span className="font-mono font-semibold text-xs text-orange-200 bg-black/55 backdrop-blur-md px-3 py-1 rounded-full border border-orange-400/30">
                        Section {dept.code}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-white text-xs font-mono pointer-events-none z-10">
                      <span className="text-amber-300 font-semibold bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10 line-clamp-1">
                        {dept.durationSummary}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-5">
                    <div className="space-y-3.5">
                      <div className="text-xs text-stone-500 font-mono tracking-wide">
                        <span className="text-orange-600 font-semibold mr-1.5">&bull;</span>
                        <span>Eligibility: {dept.eligibilitySummary}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-manrope font-bold text-stone-900 group-hover:text-orange-600 transition-colors duration-300 leading-snug">
                        {dept.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed line-clamp-3">
                        {dept.description}
                      </p>

                      <div className="bg-[#fcfbf9] p-3.5 border border-stone-200/80 rounded-2xl text-xs space-y-1.5">
                        <span className="font-mono uppercase tracking-wider text-orange-700 font-bold text-[11px] block">
                          Programs Offered
                        </span>
                        <ul className="text-stone-700 space-y-1">
                          {dept.degrees.map((deg, degIdx) => (
                            <li key={degIdx} className="flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-1.5" />
                              <span className="font-medium text-stone-800 text-[11px] leading-tight">
                                {deg}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-stone-100 flex items-center gap-2.5">
                      <button
                        onClick={() => onSelectDepartment(dept)}
                        className="flex-1 py-3 px-3 bg-stone-950 hover:bg-orange-600 text-white text-xs uppercase tracking-wider font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>
                      <button
                        onClick={() => onApplyForDepartment(dept.name)}
                        className="py-3 px-3.5 border border-stone-300 hover:border-orange-500 hover:text-orange-600 text-stone-800 text-xs uppercase tracking-wider font-semibold rounded-xl transition-all duration-300 hover:bg-orange-50/50 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Inquire</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* ========================================================= */}
        {/* QUICK-REFERENCE PROGRAM MATRIX (SECTION 3)                */}
        {/* Preserved with all Prospectus data & Peachweb styling     */}
        {/* ========================================================= */}
        <div className="mt-24 pt-16 border-t border-stone-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="space-y-3">
              <ScrollEyebrow delay={0.04} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-mono uppercase tracking-widest font-semibold">
                <Table className="w-3.5 h-3.5 text-amber-600" />
                <span>3. ACADEMIC SPECIFICATION GUIDE</span>
              </ScrollEyebrow>
              <ScrollHeading as="h3" delay={0.12} className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold tracking-tight text-stone-900 leading-tight">
                Program Duration &amp;{' '}
                <span className="text-gradient-accent">Entry Eligibility Guide</span>
              </ScrollHeading>
            </div>
            <ScrollAction delay={0.2} className="self-start md:self-end">
              <p className="text-xs font-mono text-stone-500 bg-white border border-stone-200/90 px-3 py-1.5 rounded-full shadow-2xs">
                2026–2027 Academic Prospectus &bull; Pages 3–4
              </p>
            </ScrollAction>
          </div>

          {/* Matrix Table */}
          <div className="overflow-x-auto border border-stone-200/90 rounded-2xl bg-white shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-stone-950 text-stone-100 font-mono uppercase tracking-wider text-[11px] border-b border-stone-800">
                  <th className="py-4 px-5">Department</th>
                  <th className="py-4 px-5">Representative Programs</th>
                  <th className="py-4 px-5 whitespace-nowrap">Typical Duration</th>
                  <th className="py-4 px-5">Entry Eligibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200/80 font-manrope">
                {PROGRAM_MATRIX.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="hover:bg-orange-50/40 transition-colors group"
                  >
                    <td className="py-4 px-5 font-bold text-stone-900 group-hover:text-orange-700 transition-colors">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <span>{row.department}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-stone-700 leading-relaxed">
                      {row.programs}
                    </td>
                    <td className="py-4 px-5 font-mono text-orange-700 font-semibold whitespace-nowrap">
                      <span className="bg-orange-100/70 border border-orange-200/60 px-2.5 py-1 rounded-md text-xs">
                        {row.duration}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-stone-600 leading-relaxed">
                      {row.eligibility}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
