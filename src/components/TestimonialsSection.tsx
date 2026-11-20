import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollHeading, ScrollParagraph, ScrollEyebrow } from './ScrollTypography';
import {
  ArrowLeft,
  ArrowRight,
  Play,
  X,
  Volume2,
  VolumeX,
} from 'lucide-react';

import nirmalPortrait from '../assets/images/testimonial-nirmal-portrait.jpg';
import sophiePortrait from '../assets/images/testimonial-sophie-portrait.jpg';
import meharajPortrait from '../assets/images/testimonial-meharaj-portrait.jpg';
import jeevaPortrait from '../assets/images/testimonial-jeeva-portrait.jpg';
import campusVideo from '../assets/videos/sky-video-banner.mp4';

interface Testimonial {
  id: string;
  brand: string;
  quote: string;
  authorName: string;
  authorRole: string;
  image: string;
  videoUrl?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'nirmal',
    brand: 'DHL Supply Chain Pvt. Ltd.',
    quote:
      'The hands-on learning and career opportunities at ASET gave me the confidence to prepare for my future.',
    authorName: 'Nirmal Kumar P.',
    authorRole: 'DHL Supply Chain Pvt. Ltd.',
    image: nirmalPortrait,
    videoUrl: campusVideo,
  },
  {
    id: 'sushmitha',
    brand: 'SpiceJet Limited',
    quote:
      'ASET provided me with practical knowledge and valuable guidance that prepared me well for the professional world.',
    authorName: 'Sushmitha',
    authorRole: 'SpiceJet Limited',
    image: sophiePortrait,
    videoUrl: campusVideo,
  },
  {
    id: 'meharaj',
    brand: 'Galleon Shipping Agencies Sdn Bhd',
    quote:
      'My MBA in Logistics & Shipping gave me a strong understanding of export processes and documentation. Today, I apply those skills every day in my role as an Export Documentation Executive.',
    authorName: 'Meharaj S.',
    authorRole: 'Export Documentation Executive · Galleon Shipping Agencies Sdn Bhd',
    image: meharajPortrait,
    videoUrl: campusVideo,
  },
  {
    id: 'jeeva',
    brand: 'SPR Construction',
    quote:
      'I have been placed as a Safety Officer at SPR Construction through the campus placement drive. The college fulfilled its commitment by arranging on-campus placement in a reputed company.',
    authorName: 'J. Jeeva',
    authorRole: 'Safety Officer, SPR Construction',
    image: jeevaPortrait,
    videoUrl: campusVideo,
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const current = TESTIMONIALS[currentIndex];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const goToSlide = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Seamless automatic sliding animation
  // Pauses on mouse hover or when modal is opened, resumes on mouse leave
  useEffect(() => {
    if (isPaused || isVideoOpen) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, isVideoOpen, currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isVideoOpen) {
        if (e.key === 'Escape') setIsVideoOpen(false);
        return;
      }
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVideoOpen]);

  // Touch swipe support for responsive mobile experience
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diffX = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diffX > 45) {
      nextSlide();
    } else if (diffX < -45) {
      prevSlide();
    }
    touchStartXRef.current = null;
  };

  // Stylized brand logo glyph matching reference //\ style with signature website gradient accents
  const renderBrandLogo = () => {
    return (
      <div className="flex items-center gap-3 select-none">
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 shrink-0"
          viewBox="0 0 28 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M4 18L10 6H13.5L7.5 18H4Z" className="text-orange-500" opacity="0.65" />
          <path d="M10 18L16 6H19.5L13.5 18H10Z" className="text-amber-500" opacity="0.85" />
          <path d="M16 18L22 6H25.5L19.5 18H16Z" className="text-white" />
        </svg>
        <span className="font-manrope font-extrabold text-xl sm:text-2xl text-white tracking-tight">
          {current.brand}
        </span>
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      className="relative w-full py-20 sm:py-24 lg:py-32 bg-[#faf8f5]/80 backdrop-blur-md text-stone-900 font-manrope overflow-hidden border-b border-stone-200/90 select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Expansive Widescreen Container matching website standard (up to 1440px wide) */}
      <div className="w-full max-w-7xl lg:max-w-[1380px] xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* SECTION HEADER: Title & Paragraph in Website Brand Colors */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 pb-10 sm:pb-12 border-b border-stone-200">
          <div className="space-y-3 max-w-2xl">
            <ScrollEyebrow delay={0.04} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-orange-600">
                VERIFIED PLACEMENTS &amp; CAREER JOURNEYS
              </span>
            </ScrollEyebrow>
            <ScrollHeading delay={0.12} className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold tracking-tight text-stone-900 leading-tight">
              Alumni <span className="text-gradient-title">Success Stories</span>
            </ScrollHeading>
          </div>
          <ScrollParagraph delay={0.2} className="text-sm sm:text-base text-stone-600 max-w-md lg:max-w-lg leading-relaxed font-sans self-start md:self-end">
            Real experiences from ASET graduates placed across leading domestic and international aviation, shipping, and corporate organizations.
          </ScrollParagraph>
        </div>

        {/* ========================================================= */}
        {/* WIDER TESTIMONIAL CARD (Adjusted Height for Optimal Scale) */}
        {/* ========================================================= */}
        <div className="relative rounded-[2.2rem] sm:rounded-[2.8rem] bg-[#141416] border border-stone-800/80 p-3 sm:p-4 lg:p-5 shadow-[0_24px_70px_rgba(0,0,0,0.32)] overflow-hidden">
          <div className="flex flex-col md:flex-row items-stretch md:h-[430px] lg:h-[460px] xl:h-[480px] gap-3.5 sm:gap-4 lg:gap-5">
            {/* ----------------------------------------------------- */}
            {/* LEFT CARD: Vertical Portrait with "Watch Testimonial" */}
            {/* ----------------------------------------------------- */}
            <div className="w-full md:w-[320px] lg:w-[380px] xl:w-[420px] shrink-0 relative rounded-[1.8rem] sm:rounded-[2.2rem] overflow-hidden bg-stone-900 aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:h-full min-h-[260px] md:min-h-0 shadow-inner group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id + '-img'}
                  src={current.image}
                  alt={current.authorName}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover object-top select-none transition-transform duration-700 group-hover:scale-105"
                />
              </AnimatePresence>

              {/* Ambient bottom shadow gradient for pill contrast */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none"
              />

              {/* Frosted Glass Pill Button: "Watch Testimonial ▷" */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 bg-stone-950/65 hover:bg-stone-900/85 backdrop-blur-xl border border-white/20 hover:border-white/40 text-white rounded-full py-2.5 sm:py-3 px-5 sm:px-6 flex items-center justify-between transition-all duration-300 shadow-2xl cursor-pointer select-none group/btn"
                aria-label={`Watch testimonial video of ${current.authorName}`}
              >
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-white/95">
                  Watch Testimonial
                </span>
                <span className="w-7 h-7 rounded-full bg-white/15 group-hover/btn:bg-white/25 flex items-center justify-center transition-all duration-300">
                  <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                </span>
              </motion.button>
            </div>

            {/* ----------------------------------------------------- */}
            {/* RIGHT CARD: Quote Box, Author, Dots & Arrow Controls  */}
            {/* ----------------------------------------------------- */}
            <div className="flex-1 relative rounded-[1.8rem] sm:rounded-[2.2rem] bg-[#18181b] border border-white/5 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between text-white overflow-hidden">
              <div>
                {/* Brand Logo Header */}
                <div className="mb-4 sm:mb-6">{renderBrandLogo()}</div>

                {/* Animated Quote Paragraph with Website Typography */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id + '-quote'}
                    initial={{ opacity: 0, x: direction * 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -16 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="font-manrope text-base sm:text-lg lg:text-[18px] xl:text-[20px] font-normal text-stone-200/95 leading-relaxed tracking-tight select-text">
                      &ldquo;{current.quote}&rdquo;
                    </p>

                    {/* Subtle Divider Line */}
                    <div className="border-t border-white/10 my-4 sm:my-6" />

                    {/* Author Details with Website Brand Accents */}
                    <div>
                      <h4 className="font-manrope font-bold text-white text-base sm:text-lg tracking-tight">
                        — {current.authorName}
                      </h4>
                      <p className="text-xs sm:text-sm font-sans tracking-normal mt-0.5">
                        <span className="text-orange-400 font-medium">{current.authorRole}</span>
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* --------------------------------------------------- */}
              {/* BOTTOM BAR: Dot Indicators (Left) & Arrows (Right) */}
              {/* --------------------------------------------------- */}
              <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-transparent">
                {/* Left: Pagination Dots with Website Orange Glow */}
                <div className="flex items-center gap-2.5">
                  {TESTIMONIALS.map((item, idx) => {
                    const isActive = idx === currentIndex;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => goToSlide(idx)}
                        className="relative flex items-center justify-center p-1 cursor-pointer focus:outline-hidden"
                        aria-label={`Go to slide ${idx + 1}`}
                      >
                        {isActive ? (
                          <div className="relative flex items-center justify-center w-4 h-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-rose-600" />
                            <motion.span
                              layoutId="active-dot-ring-wide"
                              className="absolute inset-0 rounded-full border-2 border-orange-500 shadow-[0_0_8px_rgba(234,88,12,0.6)]"
                              transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                            />
                          </div>
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-stone-600 hover:bg-stone-400 transition-colors" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Right: Circular Arrow Navigation Buttons with Brand Hover */}
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="w-10 sm:w-11 h-10 sm:h-11 rounded-full border border-white/20 hover:border-orange-500 hover:text-orange-400 hover:bg-orange-500/10 flex items-center justify-center text-white transition-all duration-200 active:scale-95 cursor-pointer focus:outline-hidden"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="w-10 sm:w-11 h-10 sm:h-11 rounded-full border border-white/20 hover:border-orange-500 hover:text-orange-400 hover:bg-orange-500/10 flex items-center justify-center text-white transition-all duration-200 active:scale-95 cursor-pointer focus:outline-hidden"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* VIDEO SPOTLIGHT MODAL FOR "WATCH TESTIMONIAL"             */}
      {/* ========================================================= */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#141416] rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-black/40">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-manrope font-bold text-white text-sm sm:text-base">
                    {current.authorName} · Testimonial Spotlight
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.muted = !isMuted;
                        setIsMuted(!isMuted);
                      }
                    }}
                    className="p-1.5 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsVideoOpen(false)}
                    className="p-1.5 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Close video"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Video Player Container */}
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <video
                  ref={videoRef}
                  src={current.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Bottom Summary */}
              <div className="p-4 sm:p-5 bg-stone-950/80 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">{current.authorName}</h4>
                  <p className="text-xs text-stone-400">{current.authorRole}</p>
                </div>
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  {current.brand}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
