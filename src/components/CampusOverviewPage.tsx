import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Building,
  CheckCircle2,
  ChevronDown,
  Compass,
  FileCheck2,
  Globe,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Plane,
  Play,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  UtensilsCrossed,
  Volume2,
  VolumeX,
  X,
  Bus,
  Home,
  Wrench,
  HelpCircle,
  Calendar,
  MessageSquareQuote,
  Clock,
  Layers,
  Check,
} from 'lucide-react';

import {
  ScrollHeading,
  ScrollParagraph,
  ScrollEyebrow,
  ScrollAction,
  LUXURY_EASE,
} from './ScrollTypography';

// Brand & Visual Assets
import asetLogo from '../assets/images/aset-logo.png';
import asetCampusMain from '../assets/images/aset-campus-main-building.webp';
import asetCampusModern from '../assets/images/aset-campus-modern-clean.png';
import asetAeroplane from '../assets/images/aset-aeroplane.png';
import asetGraduates from '../assets/images/aset-graduates-celebration.jpg';
import campusVideo from '../assets/videos/sky-video-banner.mp4';
import heroCampusImg from '../assets/images/hero_university_campus_1794469701413.jpg';
import campusBuildingUserImg from '../assets/images/campus-building-user.jpg';
import asetCollegePathway from '../assets/images/aset-college-pathway-sunset.jpg';
import deptHospitalityImg from '../assets/images/departments/dept-hospitality.jpg';
import deptAviationImg from '../assets/images/departments/pilot-training-aviaition.webp';
import deptSafetyImg from '../assets/images/departments/dept-safety.jpg';
import classImg from '../assets/images/aset-life/mg-ca-class.jpg';
import laptopGroupImg from '../assets/images/aset-life/home-adm-laptop-group.webp';
import portVisitImg from '../assets/images/aset-life/lg-port-visit.jpg';

export interface CampusOverviewPageProps {
  onBackToHome: () => void;
  onOpenAdmissions?: () => void;
  onOpenVirtualTour?: () => void;
  onNavigateToAbout?: (targetHash?: string) => void;
  onNavigateToLife?: (targetHash?: string) => void;
}

export const CampusOverviewPage: React.FC<CampusOverviewPageProps> = ({
  onBackToHome,
  onOpenAdmissions,
  onOpenVirtualTour,
  onNavigateToAbout,
  onNavigateToLife,
}) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -90, duration: 1.15 });
      } else {
        const y = el.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  // 7 Document FAQs from official PDF
  const campusFaqs = [
    {
      q: '1. Where are the ASET College campuses located?',
      a: 'ASET College has two career-focused campuses: Chennai at No. 28, Irulapalayam, Bangalore Highway, Kuthambakkam, Chennai – 600124, and Coimbatore at Varathaiyangar Palayam, Saravanampatti, Coimbatore – 641110. ASET Flying School is located at Thoothukudi, Tamil Nadu.',
    },
    {
      q: '2. What are the contact numbers for admissions?',
      a: 'For Chennai, call +91 91594 99973 or +91 91594 99974 (landline 044 26810078). For Coimbatore, call +91 91594 99975 or +91 91594 99977 (landline 0422 714 0772). WhatsApp is available on all mobile contact numbers.',
    },
    {
      q: '3. Are hostel and transport facilities available?',
      a: 'Yes. Safe and well-maintained hostel accommodation is provided for outstation students, and an extensive college bus transport fleet operates for day scholars across major city routes. Contact our admissions team for specific route details for your campus.',
    },
    {
      q: '4. Where do pilot trainees study and train?',
      a: 'Pilot trainees study theory papers, including DGCA ground classes, RTR exam preparation, and DGCA exam preparation, at the Chennai campus for 6 months, and then take hands-on flight training for their Commercial Pilot License (CPL) at ASET Flying School in Thoothukudi for 18 months.',
    },
    {
      q: '5. Do B.Sc Aviation students visit the flying school?',
      a: 'Yes. B.Sc Aviation students are taken to our Thoothukudi Flying School for industrial visits, apron inspections, and hands-on aircraft maintenance experience alongside certified flight instructors and engineers.',
    },
    {
      q: '6. Which campus should I choose?',
      a: 'Programme availability can vary by campus. For example, DGCA Ground Classes and Aviation theory are based in Chennai, while specialized Hospitality practical labs (training kitchen, bar, front office) are hosted in Coimbatore. Call the admissions team of the campus nearest to you; an academic counsellor will help you choose the best programme and campus.',
    },
    {
      q: '7. Can I visit the campus before applying?',
      a: 'Yes! Prospective students and parents are strongly encouraged to book a campus visit by calling or messaging on WhatsApp. Our admissions counsellors will arrange a guided tour to show you the modern classrooms, labs, hostels, and answer all your questions.',
    },
  ];

  return (
    <div className="relative w-full bg-[#faf8f5] text-stone-900 font-sans selection:bg-[#991b1b] selection:text-white overflow-x-hidden">
      {/* Decorative ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -left-20 w-[520px] h-[520px] rounded-full bg-red-600/10 blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-20 w-[480px] h-[480px] rounded-full bg-amber-500/10 blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -left-20 w-[480px] h-[480px] rounded-full bg-orange-500/8 blur-3xl -z-10"
      />

      {/* ========================================================= */}
      {/* 1. HERO / BANNER SECTION (Designed identically to About)  */}
      {/* Architectural Campus Background + Centered Heading +       */}
      {/* Centered 'Take a Tour' Button + Bottom Crimson Red Dock   */}
      {/* ========================================================= */}
      <section
        id="hero"
        className="relative w-full min-h-[90vh] lg:min-h-[94vh] flex flex-col justify-between overflow-hidden pt-28 sm:pt-36 lg:pt-40 bg-stone-950 text-white select-none"
      >
        {/* Background Image: Authentic ASET College Building with Cinematic Vignette */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            src={asetCampusMain}
            alt="ASET College Campus Building"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.08]"
          />
          {/* Filmic Cinematic Dark Overlay matching reference screenshot */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/75 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/80 pointer-events-none" />
        </div>

        {/* Center Content Stage */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-8 sm:py-12 relative z-10 flex flex-col items-center">
          
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-mono font-semibold tracking-wide mb-6 shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>ASET COLLEGE · CAMPUSES &amp; FACILITIES · CHENNAI • COIMBATORE • THOOTHUKUDI</span>
          </motion.div>

          {/* Monumental Headline matching reference screenshot */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: LUXURY_EASE }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-white tracking-tight leading-[1.08] sm:leading-[1.05] max-w-4xl"
          >
            Campuses &amp; Facilities Built for <span className="text-gradient-title font-extrabold">Real-World Careers</span>
          </motion.h1>

          {/* Subtext Paragraph matching reference structure & ASET content */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: LUXURY_EASE }}
            className="mt-5 text-sm sm:text-base md:text-lg text-stone-200/95 leading-relaxed max-w-3xl font-sans font-normal"
          >
            ASET has two career-focused campuses in Chennai and Coimbatore, along with its own flying school at Thoothukudi for commercial pilot training.
            Featuring modern smart classrooms, specialized hands-on industry labs, comprehensive hostel and transport facilities, and personalized admissions guidance.
          </motion.p>

          {/* Center Call to Action Button: 'Take a Tour' matching reference button style */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease: LUXURY_EASE }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="button"
              onClick={() => {
                if (onOpenVirtualTour) {
                  onOpenVirtualTour();
                } else {
                  scrollToSection('find-campus');
                }
              }}
              className="px-9 sm:px-11 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-[#991b1b] hover:bg-[#851117] active:bg-[#7f1d1d] text-white font-semibold text-sm sm:text-base tracking-wide shadow-xl shadow-black/50 border border-red-500/30 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Explore Campuses</span>
              <ArrowUpRight className="w-4 h-4 text-white/80" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="button"
              onClick={() => scrollToSection('visit-admissions')}
              className="px-7 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white font-semibold text-sm sm:text-base tracking-wide backdrop-blur-md border border-white/25 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Book Campus Visit</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Inset Crimson Red Tri-Panel Feature Dock (Exact Match to Reference Screenshot) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: LUXURY_EASE }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="rounded-t-2xl sm:rounded-t-3xl bg-gradient-to-r from-[#991b1b]/95 via-[#851117]/95 to-[#7f1d1d]/95 backdrop-blur-xl border-t border-x border-red-400/25 shadow-2xl shadow-black/60 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-red-400/20">
              
              {/* Panel 1: Chennai Campus */}
              <div
                onClick={() => scrollToSection('chennai-campus')}
                className="p-6 sm:p-7 lg:p-8 space-y-2 hover:bg-white/5 transition-colors text-left cursor-pointer group"
              >
                <div className="flex items-center gap-2.5 text-white">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-amber-300">
                    <Building className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg tracking-tight group-hover:text-amber-200 transition-colors">
                    Chennai Campus
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed font-sans">
                  Bangalore Highway campus hosting DGCA ground classes, aviation theory, industrial safety labs, modern hostels, and bus routes.
                </p>
              </div>

              {/* Panel 2: Coimbatore Campus */}
              <div
                onClick={() => scrollToSection('coimbatore-campus')}
                className="p-6 sm:p-7 lg:p-8 space-y-2 hover:bg-white/5 transition-colors text-left cursor-pointer group"
              >
                <div className="flex items-center gap-2.5 text-white">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-amber-300">
                    <UtensilsCrossed className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg tracking-tight group-hover:text-amber-200 transition-colors">
                    Coimbatore Campus
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed font-sans">
                  Saravanampatti campus with specialized hospitality training kitchen, front office lab, bar, bakery, hostel and transport facilities.
                </p>
              </div>

              {/* Panel 3: ASET Flying School */}
              <div
                onClick={() => scrollToSection('thoothukudi-flying-school')}
                className="p-6 sm:p-7 lg:p-8 space-y-2 hover:bg-white/5 transition-colors text-left cursor-pointer group"
              >
                <div className="flex items-center gap-2.5 text-white">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-amber-300">
                    <Plane className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg tracking-tight group-hover:text-amber-200 transition-colors">
                    Thoothukudi Flying School
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed font-sans">
                  Institution&apos;s own flying school built on discipline, knowledge &amp; skills for 18-month CPL flight training and aircraft maintenance.
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 2. AT A GLANCE QUANTITATIVE METRICS STRIP                 */}
      {/* ========================================================= */}
      <section id="at-a-glance" className="relative z-20 py-10 sm:py-14 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-700">
              CAMPUS HIGHLIGHTS AT A GLANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mt-1 font-serif font-semibold">
              Built Across <span className="text-gradient-title font-bold">3 Prime Locations</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-5">
            <div className="bg-[#faf8f5] p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col justify-between">
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">2</span>
              <div className="mt-3">
                <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Campuses</p>
                <p className="text-xs text-stone-600 mt-0.5">Chennai &amp; Coimbatore</p>
              </div>
            </div>

            <div className="bg-[#faf8f5] p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col justify-between">
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">1</span>
              <div className="mt-3">
                <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Own Flying School</p>
                <p className="text-xs text-stone-600 mt-0.5">Thoothukudi Flight Base</p>
              </div>
            </div>

            <div className="bg-[#faf8f5] p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col justify-between">
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">13+</span>
              <div className="mt-3">
                <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Years of Excellence</p>
                <p className="text-xs text-stone-600 mt-0.5">Established Heritage</p>
              </div>
            </div>

            <div className="bg-[#faf8f5] p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col justify-between">
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">3,000+</span>
              <div className="mt-3">
                <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Alumni Network</p>
                <p className="text-xs text-stone-600 mt-0.5">India &amp; International</p>
              </div>
            </div>

            <div className="bg-[#faf8f5] p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col justify-between col-span-2 lg:col-span-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">100%</span>
              <div className="mt-3">
                <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Practical Training</p>
                <p className="text-xs text-stone-600 mt-0.5">Hands-On Practice Labs</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. FIND YOUR CAMPUS OVERVIEW CARDS                        */}
      {/* ========================================================= */}
      <section id="find-campus" className="py-16 sm:py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <ScrollEyebrow className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-700 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                FIND YOUR CAMPUS
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight mt-3">
              Three Strategic Locations <span className="text-gradient-title font-medium">Tailored for Industry Focus</span>
            </ScrollHeading>
            <ScrollParagraph className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed font-sans">
              Whether you are preparing for DGCA commercial pilot theory on Bangalore Highway in Chennai, mastering specialized hospitality practical training in Coimbatore, or taking flight training at our own Thoothukudi Flying School, ASET delivers dedicated facilities tailored to each discipline.
            </ScrollParagraph>
          </div>

          {/* Quick Contact Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            
            {/* Chennai Card */}
            <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Building className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-red-700 uppercase tracking-wider">
                  Campus 01
                </span>
                <h3 className="text-xl font-bold text-stone-900 mt-1 font-serif font-semibold">
                  Chennai Campus
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                  Bangalore Highway campus, where pilot trainees complete DGCA theory papers before flight training. Modern labs, hostel &amp; transport.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 space-y-3">
                <div className="flex items-center gap-2 text-sm text-stone-800 font-semibold">
                  <Phone className="w-4 h-4 text-red-700 shrink-0" />
                  <span>+91 91594 99973 / 74</span>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToSection('chennai-campus')}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-950 hover:bg-stone-800 text-white text-xs font-bold tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View Chennai Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Coimbatore Card */}
            <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">
                  Campus 02
                </span>
                <h3 className="text-xl font-bold text-stone-900 mt-1 font-serif font-semibold">
                  Coimbatore Campus
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                  Saravanampatti campus with specialized hospitality training kitchen, front office, bar, bakery, hostel and transport facilities.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 space-y-3">
                <div className="flex items-center gap-2 text-sm text-stone-800 font-semibold">
                  <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>+91 91594 99975 / 77</span>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToSection('coimbatore-campus')}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-950 hover:bg-stone-800 text-white text-xs font-bold tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View Coimbatore Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Thoothukudi Flying School Card */}
            <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Plane className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">
                  Flight Base 03
                </span>
                <h3 className="text-xl font-bold text-stone-900 mt-1 font-serif font-semibold">
                  ASET Flying School
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                  Thoothukudi flying school for pilot flight training, Commercial Pilot License (CPL) programme, and aircraft maintenance exposure.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 space-y-3">
                <div className="flex items-center gap-2 text-sm text-stone-800 font-semibold">
                  <Phone className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>+91 95970 80844 / 22</span>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToSection('thoothukudi-flying-school')}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-950 hover:bg-stone-800 text-white text-xs font-bold tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View Flying School</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. DEEP DIVE: ASET COLLEGE, CHENNAI                       */}
      {/* ========================================================= */}
      <section id="chennai-campus" className="py-16 sm:py-24 bg-white border-y border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Visual Showcase Left */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200 aspect-[4/3] group">
                <img
                  src={asetCampusMain}
                  alt="ASET College Chennai Campus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                    Bangalore Highway · Kuthambakkam
                  </span>
                  <h4 className="text-xl font-serif font-semibold">Chennai Campus Infrastructure</h4>
                </div>
              </div>

              {/* Secondary Campus Life Collage */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-stone-200 shadow-sm">
                  <img
                    src={classImg}
                    alt="Chennai Campus Modern Classrooms"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-stone-200 shadow-sm">
                  <img
                    src={asetCollegePathway}
                    alt="Chennai Campus Green Walkway"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content Details Right */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollEyebrow className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-700" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                  CAMPUS PROFILE 01
                </span>
              </ScrollEyebrow>

              <ScrollHeading className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900 tracking-tight">
                ASET College, <span className="text-gradient-title font-bold">Chennai Campus</span>
              </ScrollHeading>

              <ScrollParagraph className="text-base text-stone-700 leading-relaxed font-sans">
                The Chennai campus is located at <strong>Kuthambakkam on Bangalore Highway</strong>. It is described as a green, multicultural campus with modern classrooms and hands-on training. Learning opportunities include industry-driven teaching, industrial visits, workshops, seminars, and internships.
              </ScrollParagraph>

              <div className="bg-red-50/80 p-5 rounded-2xl border border-red-200/80 space-y-2">
                <div className="flex items-center gap-2 text-red-900 font-bold text-sm">
                  <Plane className="w-4 h-4 text-red-700 shrink-0" />
                  <span>Aviation &amp; Pilot Theory Pathway</span>
                </div>
                <p className="text-xs sm:text-sm text-red-800 leading-relaxed font-sans">
                  Aspiring pilots study theory papers at Chennai, including <strong>DGCA ground classes</strong>, <strong>RTR exam preparation</strong>, and <strong>DGCA exam preparation</strong>, before moving to ASET Flying School in Thoothukudi for flight training.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold text-stone-500 uppercase tracking-widest">
                  Campus Facilities &amp; Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Green, Multicultural Campus Environment',
                    'Modern Air-Conditioned Classrooms',
                    'DGCA Ground Theory Preparation Center',
                    'Industry Visits, Workshops & Seminars',
                    'Hostel Facilities for Outstation Students',
                    'Dedicated Bus Transport for Day Scholars',
                  ].map((facility) => (
                    <div key={facility} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Address Box */}
              <div className="p-5 rounded-2xl bg-stone-900 text-white space-y-3 shadow-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-sm text-white">Campus Address</h5>
                    <p className="text-xs sm:text-sm text-stone-300 mt-0.5 leading-relaxed">
                      ASET College, No. 28, Irulapalayam, Bangalore Highway, Kuthambakkam, Chennai – 600124, Tamil Nadu
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-stone-800 text-xs">
                  <div>
                    <span className="text-stone-400 block font-mono">Mobile / WhatsApp:</span>
                    <a href="tel:+919159499973" className="font-bold text-amber-300 hover:underline">
                      +91 91594 99973 / 74
                    </a>
                  </div>
                  <div>
                    <span className="text-stone-400 block font-mono">Landline:</span>
                    <a href="tel:04426810078" className="font-bold text-stone-200 hover:underline">
                      044 26810078
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <a
                    href="https://wa.me/919159499973"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => scrollToSection('visit-admissions')}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Schedule Campus Visit</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. DEEP DIVE: ASET COLLEGE, COIMBATORE                    */}
      {/* ========================================================= */}
      <section id="coimbatore-campus" className="py-16 sm:py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Content Details Left */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <ScrollEyebrow className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-amber-700">
                  CAMPUS PROFILE 02
                </span>
              </ScrollEyebrow>

              <ScrollHeading className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900 tracking-tight">
                ASET College, <span className="text-gradient-title font-bold">Coimbatore Campus</span>
              </ScrollHeading>

              <ScrollParagraph className="text-base text-stone-700 leading-relaxed font-sans">
                The Coimbatore campus is located at <strong>Varathaiyangar Palayam, Saravanampatti</strong>, a well-connected and prominent educational hub of the city. Students benefit from industry-driven training, specialist practice facilities, regular industrial visits, seminars, and comprehensive placement support.
              </ScrollParagraph>

              {/* Hospitality Practice Spaces Grid */}
              <div className="bg-amber-50/80 p-5 rounded-2xl border border-amber-200/80 space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <UtensilsCrossed className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Hospitality Practical Training Facilities</span>
                </div>
                <p className="text-xs text-amber-900/90 leading-relaxed font-sans">
                  Hospitality and catering students have access to six purpose-built practical training environments mirroring 5-star hotel operational standards:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  {[
                    'Training Kitchen',
                    'Front Office Lab',
                    'Training Bar',
                    'Training Restaurant',
                    'Bakery & Confectionery Unit',
                    'Housekeeping Lab & Guest Room',
                  ].map((lab) => (
                    <div
                      key={lab}
                      className="p-2.5 rounded-xl bg-white border border-amber-200/70 text-xs font-semibold text-stone-800 shadow-2xs text-center"
                    >
                      {lab}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold text-stone-500 uppercase tracking-widest">
                  Key Campus Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Prime Saravanampatti Connectivity',
                    'Specialist Logistics & Safety Labs',
                    'Hostel Facilities for Men & Women',
                    'Extensive Bus Transport Across City',
                    'Industry Visits to Ports & Manufacturing Hubs',
                    'Active On-Campus Placement Assistance',
                  ].map((facility) => (
                    <div key={facility} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium">
                      <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Address Box */}
              <div className="p-5 rounded-2xl bg-stone-900 text-white space-y-3 shadow-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-sm text-white">Campus Address</h5>
                    <p className="text-xs sm:text-sm text-stone-300 mt-0.5 leading-relaxed">
                      ASET College, Varathaiyangar Palayam, Saravanampatti, Coimbatore – 641110, Tamil Nadu
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-stone-800 text-xs">
                  <div>
                    <span className="text-stone-400 block font-mono">Mobile / WhatsApp:</span>
                    <a href="tel:+919159499975" className="font-bold text-amber-300 hover:underline">
                      +91 91594 99975 / 77
                    </a>
                  </div>
                  <div>
                    <span className="text-stone-400 block font-mono">Landline:</span>
                    <a href="tel:04227140772" className="font-bold text-stone-200 hover:underline">
                      0422 714 0772
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <a
                    href="https://wa.me/919159499975"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => scrollToSection('visit-admissions')}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Schedule Campus Visit</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Visual Showcase Right */}
            <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200 aspect-[4/3] group">
                <img
                  src={campusBuildingUserImg}
                  alt="ASET College Coimbatore Campus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                    Saravanampatti · Coimbatore
                  </span>
                  <h4 className="text-xl font-serif font-semibold">Coimbatore Campus Infrastructure</h4>
                </div>
              </div>

              {/* Hospitality Practice Collage */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-stone-200 shadow-sm">
                  <img
                    src={deptHospitalityImg}
                    alt="Hospitality Practical Training Kitchen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-stone-200 shadow-sm">
                  <img
                    src={laptopGroupImg}
                    alt="Student Collaboration & Seminars"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. DEEP DIVE: ASET FLYING SCHOOL, THOOTHUKUDI              */}
      {/* ========================================================= */}
      <section id="thoothukudi-flying-school" className="py-16 sm:py-24 bg-stone-950 text-white relative overflow-hidden">
        {/* Aeroplane background watermark */}
        <div className="absolute -right-20 top-1/4 opacity-10 pointer-events-none max-w-2xl select-none">
          <img src={asetAeroplane} alt="Aviation Background" className="w-full h-auto" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <ScrollEyebrow className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-sky-400">
                OWN PILOT FLIGHT TRAINING BASE
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight mt-3">
              ASET Flying School, <span className="text-gradient-title font-bold">Thoothukudi Base</span>
            </ScrollHeading>
            <ScrollParagraph className="text-base sm:text-lg text-stone-300 mt-4 leading-relaxed font-sans">
              ASET Flying School is the institution&apos;s own flying school at Thoothukudi, built around three foundational values: <strong>discipline, knowledge, and skills</strong>. Aspiring pilots complete their theory papers at the Chennai campus and then undertake hands-on flight training at Thoothukudi, all within the same institution.
            </ScrollParagraph>
          </div>

          {/* 3-Step Pilot Training Pathway */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Step 1 */}
            <div className="p-7 rounded-3xl bg-stone-900 border border-stone-800 space-y-4 hover:border-sky-500/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h4 className="text-lg font-bold text-white font-serif font-semibold">1. Theory in Chennai</h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                DGCA ground classes, RTR exam preparation, and DGCA exam preparation at the Chennai campus.
              </p>
              <div className="pt-3 border-t border-stone-800 text-xs space-y-1 font-mono text-stone-400">
                <p><strong className="text-sky-300">Duration:</strong> 6 months</p>
                <p><strong className="text-sky-300">Eligibility:</strong> PCM in HSC (Physics, Chemistry, Maths)</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-7 rounded-3xl bg-stone-900 border border-sky-500/40 space-y-4 shadow-xl shadow-sky-950/40 relative">
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 text-[10px] font-mono font-bold uppercase">
                Core Flight Hours
              </div>
              <div className="w-10 h-10 rounded-full bg-sky-400 text-stone-950 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h4 className="text-lg font-bold text-white font-serif font-semibold">2. Flight Training in Thoothukudi</h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                Hands-on flight training at ASET Flying School for Commercial Pilot License (CPL).
              </p>
              <div className="pt-3 border-t border-stone-800 text-xs space-y-1 font-mono text-stone-400">
                <p><strong className="text-sky-300">CPL Duration:</strong> 18 months</p>
                <p><strong className="text-sky-300">Eligibility:</strong> PCM in HSC</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-7 rounded-3xl bg-stone-900 border border-stone-800 space-y-4 hover:border-sky-500/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h4 className="text-lg font-bold text-white font-serif font-semibold">3. B.Sc Aviation Visits</h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                B.Sc Aviation students are taken to Thoothukudi for regular industrial visits, apron inspections, and hands-on aircraft maintenance experience.
              </p>
              <div className="pt-3 border-t border-stone-800 text-xs space-y-1 font-mono text-stone-400">
                <p><strong className="text-sky-300">Exposure:</strong> Aircraft Maintenance &amp; Hangars</p>
                <p><strong className="text-sky-300">Benefit:</strong> Practical Airline Readiness</p>
              </div>
            </div>

          </div>

          {/* Flying School Contact & Location Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-stone-900 to-stone-800 border border-stone-700/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-sky-400" />
                <h5 className="font-bold text-lg text-white font-serif font-semibold">Location: ASET Flying School, Thoothukudi, Tamil Nadu</h5>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 font-sans">
                Direct admissions guidance for CPL and DGCA ground classes available through our pilot training counsellors.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="text-left md:text-right">
                <span className="text-xs font-mono text-stone-400 block">Admissions Call:</span>
                <a href="tel:+919597080844" className="text-sm font-bold text-sky-300 hover:underline">
                  +91 95970 80844 / 22
                </a>
              </div>
              <a
                href="https://wa.me/919159499973"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-stone-950 font-bold text-xs tracking-wide transition-all inline-flex items-center gap-1.5"
              >
                <span>WhatsApp Pilot Desk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. LIFE AND LEARNING AT ASET: FACILITIES & LABS           */}
      {/* ========================================================= */}
      <section id="facilities" className="py-16 sm:py-24 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <ScrollEyebrow className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-700" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                LIFE AND LEARNING AT ASET
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight mt-3">
              Comprehensive Infrastructure for <span className="text-gradient-title font-medium">Holistic Growth</span>
            </ScrollHeading>
            <ScrollParagraph className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed font-sans">
              From advanced simulators and practice kitchens to comfortable hostel life and safe transport, ASET ensures an enriching and productive campus experience every day.
            </ScrollParagraph>
          </div>

          {/* 6 Core Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Modern Classrooms */}
            <div className="p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 text-red-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-2xs">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 font-serif font-semibold">Modern Classrooms</h4>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                  Comfortable, well-equipped, air-conditioned lecture halls with audio-visual learning aids, experienced faculty members, and regular industry mentors.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200/70 text-xs font-semibold text-red-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Interactive Smart Learning Spaces</span>
              </div>
            </div>

            {/* 2. Hands-On Training Labs */}
            <div className="p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 text-red-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-2xs">
                  <Wrench className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 font-serif font-semibold">Hands-On Training Labs</h4>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                  Specialized practice facilities for aviation, industrial safety, and hospitality programmes that actively turn abstract textbook theory into tangible professional skill.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200/70 text-xs font-semibold text-red-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Industry Grade Simulators &amp; Tools</span>
              </div>
            </div>

            {/* 3. Hostel Facilities */}
            <div className="p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 text-red-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-2xs">
                  <Home className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 font-serif font-semibold">Hostel Facilities</h4>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                  Safe, hygienic, and well-furnished hostel accommodation for outstation male and female students with 24/7 security, Wi-Fi, and wholesome nutritious dining.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200/70 text-xs font-semibold text-red-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Comfortable Residential Campus Life</span>
              </div>
            </div>

            {/* 4. Transport Facilities */}
            <div className="p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 text-red-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-2xs">
                  <Bus className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 font-serif font-semibold">Transport Facilities</h4>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                  A dependable fleet of college buses operating across all key city junctions and transit centers in Chennai and Coimbatore for day scholars.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200/70 text-xs font-semibold text-red-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Punctual Daily Commute Coverage</span>
              </div>
            </div>

            {/* 5. Industrial Visits & Internships */}
            <div className="p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 text-red-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-2xs">
                  <Globe className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 font-serif font-semibold">Industrial Visits &amp; Internships</h4>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                  Structured industrial visits to international airports, commercial seaports, mega-construction infrastructure sites, and 5-star hotel properties.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200/70 text-xs font-semibold text-red-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Direct Corporate Field Exposure</span>
              </div>
            </div>

            {/* 6. Education Loan Support */}
            <div className="p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 text-red-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-2xs">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 font-serif font-semibold">Education Loan Support</h4>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                  Dedicated loan facilitation desk offering documentation assistance and tie-ups with leading nationalized and private banks to ensure seamless financing.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200/70 text-xs font-semibold text-red-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Financial Guidance for All Aspirants</span>
              </div>
            </div>

          </div>

          {onNavigateToLife && (
            <div className="mt-12 text-center">
              <button
                onClick={() => onNavigateToLife('#life-overview')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-red-700 hover:bg-red-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all group cursor-pointer"
              >
                <span>Explore Dedicated Campus Life, Activities & Facilities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. CAMPUS VISIT & ADMISSIONS BOOKING DESK                  */}
      {/* ========================================================= */}
      <section id="visit-admissions" className="py-16 sm:py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900 to-[#7f1d1d] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-stone-800">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
                CAMPUS VISIT &amp; ADMISSIONS GUIDANCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight mt-2">
                Book a Campus Visit &amp; <span className="text-gradient-title font-bold">Experience ASET</span>
              </h2>
              <p className="text-sm sm:text-base text-stone-300 mt-4 leading-relaxed font-sans">
                Prospective students and parents can book an in-person campus visit by calling or messaging our admissions team on WhatsApp. Our academic counsellors will arrange a guided tour, introduce you to the department labs, and answer all questions regarding eligibility, fees, hostels, and placements.
              </p>
            </div>

            {/* Direct Contact Grids */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
              
              {/* Chennai Contacts */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-base font-serif font-semibold">
                  <Building className="w-5 h-5" />
                  <span>Chennai Campus</span>
                </div>
                <div className="text-xs text-stone-300 space-y-1 font-mono">
                  <p>Mobile: <a href="tel:+919159499973" className="text-white font-bold hover:underline">+91 91594 99973</a></p>
                  <p>Alt: <a href="tel:+919159499974" className="text-white font-bold hover:underline">+91 91594 99974</a></p>
                  <p>Landline: 044 26810078</p>
                </div>
                <a
                  href="https://wa.me/919159499973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors inline-flex items-center justify-center gap-1.5 mt-2"
                >
                  <span>WhatsApp Chennai Desk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Coimbatore Contacts */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-base font-serif font-semibold">
                  <UtensilsCrossed className="w-5 h-5" />
                  <span>Coimbatore Campus</span>
                </div>
                <div className="text-xs text-stone-300 space-y-1 font-mono">
                  <p>Mobile: <a href="tel:+919159499975" className="text-white font-bold hover:underline">+91 91594 99975</a></p>
                  <p>Alt: <a href="tel:+919159499977" className="text-white font-bold hover:underline">+91 91594 99977</a></p>
                  <p>Landline: 0422 714 0772</p>
                </div>
                <a
                  href="https://wa.me/919159499975"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors inline-flex items-center justify-center gap-1.5 mt-2"
                >
                  <span>WhatsApp Coimbatore Desk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Flying School Contacts */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-sky-300 font-bold text-base font-serif font-semibold">
                  <Plane className="w-5 h-5" />
                  <span>Thoothukudi Flying School</span>
                </div>
                <div className="text-xs text-stone-300 space-y-1 font-mono">
                  <p>Pilot Desk: <a href="tel:+919597080844" className="text-white font-bold hover:underline">+91 95970 80844</a></p>
                  <p>Flight Base: <a href="tel:+919597080822" className="text-white font-bold hover:underline">+91 95970 80822</a></p>
                  <p>Email: contact@asetsafety.ac.in</p>
                </div>
                <a
                  href="https://wa.me/919159499973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-stone-950 text-xs font-bold transition-colors inline-flex items-center justify-center gap-1.5 mt-2"
                >
                  <span>WhatsApp Pilot Wing</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* General Enquiries Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Central Admissions Email: <strong>contact@asetsafety.ac.in</strong></span>
              </div>
              <button
                type="button"
                onClick={onOpenAdmissions}
                className="px-6 py-3 rounded-xl bg-[#991b1b] hover:bg-[#851117] text-white font-bold text-xs tracking-wide shadow-lg border border-red-400/30 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Apply for Admissions 2027–28</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. FREQUENTLY ASKED QUESTIONS (ACCORDION)                */}
      {/* ========================================================= */}
      <section id="campus-faqs" className="py-16 sm:py-24 bg-white border-t border-stone-200/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <ScrollEyebrow className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-700" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900 tracking-tight mt-2">
              Campuses &amp; Facilities <span className="text-gradient-title font-medium">Inquiries &amp; FAQs</span>
            </ScrollHeading>
            <ScrollParagraph className="text-sm sm:text-base text-stone-600 mt-3 font-sans">
              Find answers to the most common questions regarding our campus locations, hostels, flying school, and admissions visits.
            </ScrollParagraph>
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5">
            {campusFaqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-stone-200/90 bg-[#faf8f5] overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif font-semibold text-stone-900 text-base sm:text-lg hover:text-red-700 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-8 h-8 rounded-full bg-white border border-stone-200/80 flex items-center justify-center text-stone-600 shrink-0"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-stone-700 leading-relaxed font-sans border-t border-stone-200/60">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. BOTTOM MONUMENTAL CTA DOCK                            */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 bg-stone-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
            TAKE THE NEXT STEP IN YOUR EDUCATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight">
            Ready to Tour ASET Campuses <span className="text-gradient-title font-bold">in Person?</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Connect with our admissions desk to schedule a personalized campus walkthrough, speak with experienced faculty, and explore laboratory facilities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={onOpenAdmissions}
              className="px-9 py-4 rounded-2xl bg-[#991b1b] hover:bg-[#851117] text-white font-bold text-sm tracking-wide shadow-xl border border-red-500/30 transition-all cursor-pointer"
            >
              Apply for Admissions 2027–28
            </button>
            <button
              type="button"
              onClick={() => {
                if (onOpenVirtualTour) {
                  onOpenVirtualTour();
                } else {
                  scrollToSection('find-campus');
                }
              }}
              className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-wide border border-white/20 transition-all cursor-pointer"
            >
              360° Virtual Campus Tour
            </button>
            <button
              type="button"
              onClick={onBackToHome}
              className="px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/15 text-stone-300 hover:text-white font-semibold text-sm transition-all cursor-pointer"
            >
              ← Back to Home
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
