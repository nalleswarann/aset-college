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
  BadgeCheck,
  Building2,
} from 'lucide-react';

// Authentic Real Student Images from ASET website "Real Success Stories"
import homeStory1 from '../assets/images/home-story-1.jpg'; // Firdhouse Ahamed
import homeStory2 from '../assets/images/home-story-2.jpg'; // Nirmal kumar P
import homeStory3 from '../assets/images/home-story-3.jpg'; // Sushmitha
import homeStory4 from '../assets/images/home-story-4.jpg'; // B. Prasath
import avAlumniAravind from '../assets/images/av-alumni-aravind.webp'; // Kasukurthi Aravind
import avAlumniBrindha from '../assets/images/av-alumni-brindha.webp'; // Brindha
import avAlumniDeva from '../assets/images/av-alumni-deva.webp'; // Deva. P
import avAlumniSyed from '../assets/images/av-alumni-syed.webp'; // Syed Ali Mustafa
import lgAlumniArun from '../assets/images/lg-alumni-arunachalesawaran.webp'; // Arunachalesawaran
import lgAlumniMeharaj from '../assets/images/lg-alumni-meharaj.webp'; // Meharaj S.
import lgAlumniVarsha from '../assets/images/lg-alumni-varsha.webp'; // Varsha M.
import fsAlumniHakkim from '../assets/images/fs-alumni-hakkim.webp'; // Hakkim Mahmood B
import fsAlumniGopinath from '../assets/images/fs-alumni-gopinath.webp'; // Gopinath S
import fsAlumniPratheesh from '../assets/images/fs-alumni-pratheesh.webp'; // S. Pratheesh
import fsAlumniJeeva from '../assets/images/fs-alumni-jeeva.webp'; // J. Jeeva

// Authentic Placement Partner Company Logos
import logoHaesok from '../assets/images/placement-partners/home-co-haesok.webp';
import logoDhl from '../assets/images/placement-partners/lp-logistics-dhl.png';
import logoSpicejet from '../assets/images/placement-partners/home-co-spicejet.webp';
import logoAkasa from '../assets/images/placement-partners/home-co-akasa.webp';
import logoAiSats from '../assets/images/placement-partners/home-co-ai-sats.webp';
import logoAiExpress from '../assets/images/placement-partners/home-co-ai-express.webp';
import logoVsa from '../assets/images/placement-partners/lg-co-vsa.webp';
import logoGalleon from '../assets/images/placement-partners/co-galleon.webp';
import logoPlanys from '../assets/images/placement-partners/lg-co-planys.webp';
import logoSprCity from '../assets/images/placement-partners/fs-co-sprcity.webp';
import logoTenneco from '../assets/images/placement-partners/fs-logo-tenneco.png';
import logoNtc from '../assets/images/placement-partners/lg-logo-ntc.png';
import logoSpr from '../assets/images/placement-partners/fs-logo-spr.png';

import campusVideo from '../assets/videos/sky-video-banner.mp4';

export interface Testimonial {
  id: string;
  brand: string;
  brandLogo: string;
  quote: string;
  authorName: string;
  authorRole: string;
  department: string;
  image: string;
  videoUrl?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'firdhouse',
    brand: 'Haesok Shipping Private Limited',
    brandLogo: logoHaesok,
    quote:
      'ASET gave me the right guidance and practical exposure to build my confidence and take the next step in my career.',
    authorName: 'Firdhouse Ahamed',
    authorRole: 'Logistics Operations · Haesok Shipping Private Limited',
    department: 'Logistics & Shipping',
    image: homeStory1,
    videoUrl: campusVideo,
  },
  {
    id: 'nirmal',
    brand: 'DHL Supply Chain Pvt. Ltd.',
    brandLogo: logoDhl,
    quote:
      'The hands-on learning and career opportunities at ASET gave me the confidence to prepare for my future.',
    authorName: 'Nirmal Kumar P.',
    authorRole: 'Supply Chain Operations · DHL Supply Chain Pvt. Ltd.',
    department: 'Logistics & Shipping',
    image: homeStory2,
    videoUrl: campusVideo,
  },
  {
    id: 'sushmitha',
    brand: 'SpiceJet Limited',
    brandLogo: logoSpicejet,
    quote:
      'ASET provided me with practical knowledge and valuable guidance that prepared me well for the professional world.',
    authorName: 'Sushmitha',
    authorRole: 'Airport Passenger & Operations · SpiceJet Limited',
    department: 'Aviation Management',
    image: homeStory3,
    videoUrl: campusVideo,
  },
  {
    id: 'prasath',
    brand: 'Akasa Air',
    brandLogo: logoAkasa,
    quote:
      'My journey at ASET has been truly rewarding. The faculty and learning environment helped me grow with confidence.',
    authorName: 'B. Prasath',
    authorRole: 'Commercial Airline Services · Akasa Air',
    department: 'Aviation Management',
    image: homeStory4,
    videoUrl: campusVideo,
  },
  {
    id: 'aravind',
    brand: 'Air India SATS',
    brandLogo: logoAiSats,
    quote:
      'My journey in aviation began with the strong foundation I received from my professional degree at ASET.',
    authorName: 'Kasukurthi Aravind',
    authorRole: 'Airport Ground Operations · Air India SATS',
    department: 'Aviation Management',
    image: avAlumniAravind,
    videoUrl: campusVideo,
  },
  {
    id: 'brindha',
    brand: 'Air India Express',
    brandLogo: logoAiExpress,
    quote:
      'ASET gave me the foundation, and Air India Express gave me the opportunity to grow in aviation.',
    authorName: 'Brindha',
    authorRole: 'Cabin & In-Flight Operations · Air India Express',
    department: 'Aviation Management',
    image: avAlumniBrindha,
    videoUrl: campusVideo,
  },
  {
    id: 'deva',
    brand: 'Air India SATS',
    brandLogo: logoAiSats,
    quote:
      'My educational journey gave me the foundation, and my experience with Air India SATS is helping me grow with confidence in the aviation industry.',
    authorName: 'Deva. P',
    authorRole: 'Aviation Ground Services · Air India SATS',
    department: 'Aviation Management',
    image: avAlumniDeva,
    videoUrl: campusVideo,
  },
  {
    id: 'syed',
    brand: 'Air India SATS',
    brandLogo: logoAiSats,
    quote:
      'My time at academic learning for the aviation industry, and working in cargo security is giving me the opportunity to apply what I learned in a real-world environment.',
    authorName: 'Syed Ali Mustafa',
    authorRole: 'Aviation Cargo Security Specialist · Air India SATS',
    department: 'Aviation Management',
    image: avAlumniSyed,
    videoUrl: campusVideo,
  },
  {
    id: 'arunachalesawaran',
    brand: 'Vinayak Shipping Agencies',
    brandLogo: logoVsa,
    quote:
      'My MBA in Logistics & Shipping helped me understand the shipping industry from both operational and business perspectives. It strengthened my communication and industry knowledge, which are essential when working with clients.',
    authorName: 'Arunachalesawaran',
    authorRole: 'Shipping & Operations Executive · Vinayak Shipping Agencies',
    department: 'Logistics & Shipping (MBA)',
    image: lgAlumniArun,
    videoUrl: campusVideo,
  },
  {
    id: 'meharaj',
    brand: 'Galleon Shipping Agencies Sdn Bhd',
    brandLogo: logoGalleon,
    quote:
      'My MBA in Logistics & Shipping gave me a strong understanding of export processes and documentation. It helped me build confidence in handling shipping documents with greater accuracy and responsibility. Today, I apply those skills every day in my role as an Export Documentation Executive.',
    authorName: 'Meharaj S.',
    authorRole: 'Export Documentation Executive · Galleon Shipping Agencies Sdn Bhd',
    department: 'Logistics & Shipping (MBA)',
    image: lgAlumniMeharaj,
    videoUrl: campusVideo,
  },
  {
    id: 'varsha',
    brand: 'Planys Technology',
    brandLogo: logoPlanys,
    quote:
      'My MBA in Logistics & Shipping gave me a clear understanding of how procurement and logistics work together. The course helped me develop a practical approach to sourcing, coordination, and movement of materials. These skills have been valuable in my current role as a Procurement & Logistics Executive.',
    authorName: 'Varsha M.',
    authorRole: 'Procurement & Logistics Executive · Planys Technology',
    department: 'Logistics & Shipping (MBA)',
    image: lgAlumniVarsha,
    videoUrl: campusVideo,
  },
  {
    id: 'hakkim',
    brand: 'SPR City',
    brandLogo: logoSprCity,
    quote:
      'I believe this is a very good institution for students to update their knowledge and settle well in their future career. I would personally like to thank all the faculty members and the placement team for the wonderful support, guidance, and drive provided throughout my studies.',
    authorName: 'Hakkim Mahmood B.',
    authorRole: 'Safety Engineer · SPR City',
    department: 'Fire & Industrial Safety',
    image: fsAlumniHakkim,
    videoUrl: campusVideo,
  },
  {
    id: 'gopinath',
    brand: 'Tenneco Clean Air India Limited',
    brandLogo: logoTenneco,
    quote:
      'ASET College has created a wonderful opportunity for me. I have grown academically through industrial visits and various training programs. I sincerely thank the college management for providing this great opportunity. I am proud to study at this college.',
    authorName: 'Gopinath S.',
    authorRole: 'Industrial Safety Officer · Tenneco Clean Air India Limited',
    department: 'Fire & Industrial Safety',
    image: fsAlumniGopinath,
    videoUrl: campusVideo,
  },
  {
    id: 'pratheesh',
    brand: 'NTC Logistics Pvt Limited',
    brandLogo: logoNtc,
    quote:
      'The placement opportunities at our college are quite impressive and improve every year. ASET provided me with direct campus placement support into specialized logistics operations.',
    authorName: 'S. Pratheesh',
    authorRole: 'Logistics Operations Officer · NTC Logistics Pvt Limited',
    department: 'Logistics & Shipping',
    image: fsAlumniPratheesh,
    videoUrl: campusVideo,
  },
  {
    id: 'jeeva',
    brand: 'SPR Construction',
    brandLogo: logoSpr,
    quote:
      'I have been placed as a Safety Officer at SPR Construction through the campus placement drive. The college fulfilled its commitment by arranging on-campus placement in a reputed company with a good salary for freshers. I sincerely thank all the faculty members and the placement team for their continuous support and guidance.',
    authorName: 'J. Jeeva',
    authorRole: 'Safety Officer · SPR Construction',
    department: 'Fire & Industrial Safety',
    image: fsAlumniJeeva,
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

  // Seamless automatic sliding animation (pauses on hover or modal)
  useEffect(() => {
    if (isPaused || isVideoOpen) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [isPaused, isVideoOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isVideoOpen) {
        if (e.key === 'Escape') setIsVideoOpen(false);
        return;
      }
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
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

  return (
    <section
      id="testimonials"
      className="relative w-full py-16 sm:py-20 lg:py-28 bg-[#faf8f5] text-stone-900 font-manrope overflow-hidden border-b border-stone-200/90 select-none"
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-stone-200">
          <div className="space-y-3 max-w-2xl">
            <ScrollEyebrow delay={0.04} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-orange-600">
                VERIFIED PLACEMENTS &amp; CAREER JOURNEYS
              </span>
            </ScrollEyebrow>
            <ScrollHeading delay={0.12} className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold tracking-tight text-stone-900 leading-tight">
              Alumni <span className="text-gradient-title font-medium">Success Stories</span>
            </ScrollHeading>
          </div>
          <ScrollParagraph delay={0.2} className="text-sm sm:text-base text-stone-600 max-w-md lg:max-w-lg leading-relaxed font-sans self-start md:self-end">
            Real experiences from ASET graduates placed across leading domestic and international aviation, shipping, logistics, and industrial safety organizations.
          </ScrollParagraph>
        </div>

        {/* ========================================================= */}
        {/* MAIN TESTIMONIAL CARD (Responsive for all screen sizes)   */}
        {/* ========================================================= */}
        <div className="relative rounded-[2rem] sm:rounded-[2.6rem] bg-[#141416] border border-stone-800/80 p-3.5 sm:p-5 lg:p-6 shadow-[0_24px_70px_rgba(0,0,0,0.32)] overflow-hidden">
          <div className="flex flex-col md:flex-row items-stretch md:min-h-[440px] lg:min-h-[470px] xl:min-h-[500px] gap-4 sm:gap-5 lg:gap-6">
            
            {/* ----------------------------------------------------- */}
            {/* LEFT CARD: Vertical Student Portrait & Watch Pill     */}
            {/* ----------------------------------------------------- */}
            <div className="w-full md:w-[310px] lg:w-[370px] xl:w-[410px] shrink-0 relative rounded-[1.6rem] sm:rounded-[2rem] overflow-hidden bg-stone-900 aspect-[4/5] xs:aspect-[4/5] sm:aspect-[16/11] md:aspect-auto md:h-auto min-h-[300px] xs:min-h-[350px] md:min-h-0 shadow-inner group">
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

              {/* Department Badge Top Left */}
              <div className="absolute top-3.5 sm:top-4 left-3.5 sm:left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-950/75 backdrop-blur-md border border-white/15 text-white shadow-lg">
                <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-semibold tracking-wide">
                  {current.department}
                </span>
              </div>

              {/* Ambient bottom shadow gradient for contrast */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"
              />

              {/* Frosted Glass Pill Button: "Watch Testimonial ▷" */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="absolute bottom-3.5 sm:bottom-4 left-3.5 sm:left-4 right-3.5 sm:right-4 bg-stone-950/75 hover:bg-stone-900/90 backdrop-blur-xl border border-white/20 hover:border-white/40 text-white rounded-full py-2.5 sm:py-3 px-4 sm:px-5 flex items-center justify-between transition-all duration-300 shadow-2xl cursor-pointer select-none group/btn"
                aria-label={`Watch testimonial video of ${current.authorName}`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-white/95">
                    Watch Testimonial
                  </span>
                </div>
                <span className="w-7 h-7 rounded-full bg-white/15 group-hover/btn:bg-white/25 flex items-center justify-center transition-all duration-300">
                  <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                </span>
              </motion.button>
            </div>

            {/* ----------------------------------------------------- */}
            {/* RIGHT CARD: Quote Box, Author, Company Logo & Controls*/}
            {/* ----------------------------------------------------- */}
            <div className="flex-1 relative rounded-[1.6rem] sm:rounded-[2rem] bg-[#18181b] border border-white/5 p-5 sm:p-7 lg:p-9 xl:p-10 flex flex-col justify-between text-white overflow-hidden">
              <div className="space-y-4 sm:space-y-6">
                
                {/* Brand / Partner Company Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="h-9 sm:h-11 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center">
                      <img
                        src={current.brandLogo}
                        alt={`${current.brand} logo`}
                        className="h-6 sm:h-8 w-auto max-w-[130px] sm:max-w-[160px] object-contain brightness-105"
                      />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-orange-400 uppercase tracking-wider font-bold">
                        Hiring Partner
                      </div>
                      <div className="text-sm sm:text-base font-extrabold text-white tracking-tight">
                        {current.brand}
                      </div>
                    </div>
                  </div>

                  {/* Verified Placement Badge */}
                  <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Campus Placement Drive</span>
                  </div>
                </div>

                {/* Animated Quote Paragraph with Website Typography */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id + '-quote'}
                    initial={{ opacity: 0, x: direction * 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -16 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4"
                  >
                    <p className="text-base sm:text-lg lg:text-xl xl:text-[21px] font-normal text-stone-100 leading-relaxed tracking-normal select-text">
                      &ldquo;{current.quote}&rdquo;
                    </p>

                    {/* Author Details with Website Brand Accents */}
                    <div className="pt-2">
                      <h4 className="font-manrope font-bold text-white text-lg sm:text-xl tracking-tight flex items-center gap-2">
                        <span>— {current.authorName}</span>
                        <BadgeCheck className="w-4 h-4 text-orange-500 inline-block" />
                      </h4>
                      <p className="text-xs sm:text-sm font-sans tracking-normal mt-0.5 text-stone-300">
                        <span className="text-orange-400 font-semibold">{current.authorRole}</span>
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* --------------------------------------------------- */}
              {/* BOTTOM BAR: Slide Counter (Left) & Controls (Right) */}
              {/* --------------------------------------------------- */}
              <div className="flex items-center justify-between pt-6 mt-4 border-t border-white/10">
                {/* Left: Slide Progress Counter & Quick Track */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs sm:text-sm font-bold text-stone-400 tracking-wider">
                    <span className="text-white text-sm sm:text-base font-extrabold">
                      {String(currentIndex + 1).padStart(2, '0')}
                    </span>
                    <span className="text-stone-600 mx-1">/</span>
                    <span>{String(TESTIMONIALS.length).padStart(2, '0')}</span>
                  </span>

                  {/* Mini progress bar */}
                  <div className="w-16 sm:w-28 h-1.5 rounded-full bg-white/10 overflow-hidden hidden xs:block">
                    <motion.div
                      className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 rounded-full"
                      initial={false}
                      animate={{
                        width: `${((currentIndex + 1) / TESTIMONIALS.length) * 100}%`,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Right: Circular Arrow Navigation Buttons with Brand Hover */}
                <div className="flex items-center gap-2 sm:gap-3">
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
                    {current.authorName} · Verified Alumni Spotlight
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
                <div className="flex items-center gap-3">
                  <img
                    src={current.image}
                    alt={current.authorName}
                    className="w-10 h-10 rounded-full object-cover object-top border border-white/20"
                  />
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">{current.authorName}</h4>
                    <p className="text-xs text-stone-400">{current.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={current.brandLogo}
                    alt={current.brand}
                    className="h-6 w-auto max-w-[100px] object-contain brightness-105"
                  />
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                    {current.brand}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
