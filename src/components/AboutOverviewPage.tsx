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
  Globe,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Play,
  X,
  Volume2,
  VolumeX,
  Quote,
  Target,
  FileCheck2,
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

// International & Skill Partner Logos
import intiLogo from '../assets/images/partners/inti_clean.png';
import msuLogo from '../assets/images/partners/msu.png';
import shinawatraLogo from '../assets/images/partners/shinawatra.png';
import hasanuddinLogo from '../assets/images/partners/hasanuddin.png';
import hsuLogo from '../assets/images/partners/hsu_clean.png';
import aaiLogo from '../assets/images/partners/aai_clean.png';
import aasscLogo from '../assets/images/partners/aassc.png';
import lscLogo from '../assets/images/partners/lsc.png';
import sasLogo from '../assets/images/partners/sas.png';
import kpmgLogo from '../assets/images/partners/kpmg.webp';

// Campus Life Photos
import admHangar from '../assets/images/aset-life/home-adm-hangar.webp';
import admDroneLab from '../assets/images/aset-life/home-adm-drone-lab.webp';
import admFireDrill from '../assets/images/aset-life/home-adm-fire-drill.webp';
import admAirportModel from '../assets/images/aset-life/home-adm-airport-model.webp';
import admCabinCrew from '../assets/images/aset-life/home-adm-cabin-crew.webp';
import admGraduation from '../assets/images/aset-life/home-adm-graduation.webp';
import admPilots from '../assets/images/aset-life/home-adm-pilots.webp';
import admFreshers from '../assets/images/aset-life/home-adm-freshers-quest.webp';

interface AboutOverviewPageProps {
  onBackToHome: () => void;
  onOpenAdmissions: () => void;
  onOpenVirtualTour?: () => void;
  onNavigateToCampuses?: (targetHash?: string) => void;
  onNavigateToLife?: (targetHash?: string) => void;
}

/* -------------------------------------------------------------
 * 5x5 Dot Matrix Grid (Matching home page signature element)
 * ----------------------------------------------------------- */
const DotMatrix: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <div
      aria-hidden="true"
      className="grid grid-cols-5 gap-1.5 p-1 select-none pointer-events-none"
    >
      {Array.from({ length: 25 }).map((_, i) => {
        const row = Math.floor(i / 5);
        const col = i % 5;
        const waveDelay = (row + col) * 0.025;
        return (
          <motion.div
            key={i}
            animate={{
              opacity: isHovered ? (i % 2 === 0 ? 1 : 0.78) : 0.28,
              scale: isHovered ? (i % 2 === 0 ? 1.35 : 1.1) : 1,
              backgroundColor: isHovered
                ? i % 3 === 0
                  ? '#ea580c'
                  : i % 3 === 1
                  ? '#f97316'
                  : '#e1144b'
                : '#d6d3d1',
            }}
            transition={{
              duration: 0.28,
              delay: isHovered ? waveDelay : 0,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-1.5 h-1.5 rounded-full"
          />
        );
      })}
    </div>
  );
};

export const AboutOverviewPage: React.FC<AboutOverviewPageProps> = ({
  onBackToHome,
  onOpenAdmissions,
  onOpenVirtualTour,
  onNavigateToCampuses,
  onNavigateToLife,
}) => {
  // Leadership message tab
  const [activeLeaderTab, setActiveLeaderTab] = useState<'ceo' | 'principal' | 'director'>('ceo');

  // Department active tab
  const [activeDeptTab, setActiveDeptTab] = useState<number>(0);

  // FAQ accordion open states
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0]);

  // Hover state for Why ASET pillar cards
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  // Video modal state
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

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

  // 16 FAQs extracted from the official document
  const faqs = [
    {
      q: '01. What courses does ASET College offer?',
      a: 'ASET offers programmes in Aviation and Pilot Training, Industrial Safety, Shipping & Logistics, Management Studies, ASET School of Commerce (CA / CMA / CS / ACCA + B.Com), Hotel Management and Information Technology, from certificate and diploma to undergraduate and postgraduate levels, at the Chennai and Coimbatore campuses.',
    },
    {
      q: '02. Why choose ASET as a fire and safety institute in Chennai and Coimbatore?',
      a: 'ASET offers fire and safety education with practical training, industrial visits, workshops, experienced mentors and placement support.',
    },
    {
      q: '03. What fire and safety courses does ASET offer in Chennai and Coimbatore?',
      a: 'Courses include Certificate, Diploma in Fire & Industrial Safety, B.Sc Fire & Industrial Safety Management (including lateral entry), PG Diploma, M.Sc Industrial Safety & Hygiene and MBA in Environment & Industrial Safety. Short courses such as NEBOSH, IOSH and Lead Auditor are also offered.',
    },
    {
      q: '04. What is the fire and safety course fee in Chennai and Coimbatore?',
      a: 'The fee depends on the programme and its duration. Contact the admissions team for the current fee structure. Education loans and hostel facilities are available.',
    },
    {
      q: '05. How do I apply for fire and safety admission in Chennai and Coimbatore?',
      a: "Eligibility depends on the programme, from SSLC for some diplomas to HSC or a degree for others. Contact the admissions team or scan the 'To Apply' QR code on the brochure.",
    },
    {
      q: '06. Does ASET offer fire and safety courses in Chennai and Coimbatore with placement?',
      a: 'Yes. ASET provides continuous career guidance, industry interaction and recruitment opportunities. The website states 99% placement records across its programmes.',
    },
    {
      q: '07. What jobs and salary can fire and safety graduates expect?',
      a: 'Graduates find roles in construction, oil & gas, manufacturing, shipping, aviation and power plants, in India and Gulf countries. Salaries vary with role, industry, certifications and location.',
    },
    {
      q: '08. Can I study an MBA in industrial safety management at ASET?',
      a: 'Yes. ASET offers an MBA in Environment & Industrial Safety, blending management skills with workplace safety.',
    },
    {
      q: '09. Can students from Pondicherry or other parts of Tamil Nadu join?',
      a: 'Yes. ASET welcomes students from Pondicherry and across Tamil Nadu. Hostel and transport facilities are available.',
    },
    {
      q: '10. Which aviation courses are available at ASET?',
      a: 'ASET offers B.Sc Aviation, BBA in Airline & Airport Management, MBA in Airline & Airport Management and Pilot Training.',
    },
    {
      q: '11. What can I do with an MBA in airline and airport management?',
      a: 'It prepares students for leadership roles in airline operations, airport management, cargo and ground services, and customer experience.',
    },
    {
      q: '12. Does ASET have its own flying school for pilot training?',
      a: 'Yes. ASET has its own flying school at Thoothukudi. Pilot training students study theory papers at the Chennai campus and take flight training at Thoothukudi. B.Sc Aviation students also visit Thoothukudi for industrial visits and hands-on maintenance training.',
    },
    {
      q: '13. Which are the best colleges for BBA or MBA in logistics in Chennai and Coimbatore?',
      a: 'ASET offers BBA Shipping & Logistics and MBA Shipping & Logistics programmes with tie-ups with the Logistics Sector Skill Council and recruiters such as DHL, Flipkart and Maersk.',
    },
    {
      q: '14. What does the MBA in Business Analytics cover?',
      a: 'The programme covers data science, business intelligence and predictive analytics, with collaborations with SAS and KPMG.',
    },
    {
      q: '15. Does ASET offer Hotel Management and CA, CMA, CS or ACCA with B.Com?',
      a: 'Yes. ASET School of Commerce offers CA / CMA / CS / ACCA + B.Com. ASET also offers a Hotel Management programme for careers in hospitality.',
    },
    {
      q: '16. Is ASET College recognised?',
      a: 'ASET College of Science & Technology is approved by Alagappa University (AU/DCP/799/897), which holds a NAAC A++ grade, and has 13 years of experience in professional education.',
    },
  ];

  // 6 Departments from document
  const departments = [
    {
      number: '01',
      title: 'Aviation & Pilot Training',
      programmes: [
        'B.Sc Aviation',
        'BBA Airline & Airport Management',
        'MBA Airline & Airport Management',
        'Commercial Pilot License (CPL)',
        'DGCA Ground Classes',
      ],
      desc: "ASET's aviation management courses combine classroom learning with an MoU with the Airport Authority of India for internships, in-flight training, and visits to Chennai International Airport, ISRO and Air Traffic Control. Graduates are placed with airlines such as SpiceJet, IndiGo and Akasa Air.",
      badge: 'AAI & DGCA Aligned',
      recruiters: 'SpiceJet, IndiGo, Akasa Air, Air India Express, AI SATS',
    },
    {
      number: '02',
      title: 'Industrial Safety',
      programmes: [
        'Certificate in Safety',
        'Diploma in Fire & Industrial Safety',
        'B.Sc Fire & Industrial Safety Management (and Lateral Entry)',
        'PG Diploma in Industrial Safety',
        'M.Sc Industrial Safety & Hygiene',
        'MBA Environment & Industrial Safety',
      ],
      desc: 'ASET offers a pathway of fire and safety courses from certificate to postgraduate level, with industrial visits, workshops and seminars. Programmes prepare freshers for safety roles in construction, manufacturing, oil & gas, shipping and aviation.',
      badge: 'Alagappa University AU/DCP/799/897',
      recruiters: 'SPR Construction, Tenneco, Welspun, L&T, Gulf EPCs',
    },
    {
      number: '03',
      title: 'Shipping & Logistics',
      programmes: [
        'BBA Shipping & Logistics',
        'MBA Shipping & Logistics',
        'Diploma in Shipping & Logistics',
      ],
      desc: 'Collaborations with the Logistics Sector Skill Council and companies such as DHL and Maersk give students practical exposure to freight forwarding, supply chain and port logistics. ASET is recognized among leading logistics institutes in Chennai and Coimbatore.',
      badge: 'LSSC Skill Partner',
      recruiters: 'DHL, Maersk, MSC, TVS Supply Chain, DB Schenker',
    },
    {
      number: '04',
      title: 'Management Studies & Analytics',
      programmes: [
        'BBA (General & Digital Business)',
        'MBA (Dual Specialisation)',
        'MBA Business Analytics',
      ],
      desc: 'The MBA Business Analytics programme combines data science, business intelligence and predictive analytics, supported by collaborations with SAS and KPMG. Students prepare for careers in business intelligence, finance and consultancy.',
      badge: 'KPMG & SAS Industry Certifications',
      recruiters: 'KPMG, Zoho, Planys Technologies, Galleon, VSA',
    },
    {
      number: '05',
      title: 'ASET School of Commerce',
      programmes: [
        'B.Com + CA (Chartered Accountancy)',
        'B.Com + CMA (Cost & Management Accounting)',
        'B.Com + CS (Company Secretaryship)',
        'B.Com + ACCA (Association of Chartered Certified Accountants)',
      ],
      desc: 'Commerce students can study for professional qualifications (CA, CMA, CS or ACCA) alongside their B.Com degree. Experienced mentors and systematic coaching help students work towards Indian and international credentials simultaneously.',
      badge: 'Integrated Professional Honours',
      recruiters: 'Deloitte, EY, PwC, Grant Thornton, Corporate Banking',
    },
    {
      number: '06',
      title: 'International Hotel Management',
      programmes: [
        'Diploma in Hotel & Tourism Management',
        'B.Sc Hotel & Catering Management',
        'MBA International Hospitality',
      ],
      desc: 'Practical training in food production, front office, housekeeping and hospitality management prepares students for careers in hotels, resorts, airlines and event management.',
      badge: 'Global Hospitality Pathways',
      recruiters: 'Taj Hotels, Marriott, Hyatt, ITC Grand Chola, Cruise Liners',
    },
  ];

  // 9 Foundational Pillars (Section 7)
  const pillars = [
    {
      num: '01',
      title: 'First of Its Kind',
      desc: "South India's first institute offering a recognised Non-Conventional Programme.",
      icon: Star,
    },
    {
      num: '02',
      title: 'Industry Mentors',
      desc: 'Expert mentors from industry and academia guide projects and career choices.',
      icon: Users,
    },
    {
      num: '03',
      title: 'Hands-On Learning',
      desc: 'Industrial visits, workshops, seminars and internships turn theory into practical skill.',
      icon: BookOpen,
    },
    {
      num: '04',
      title: 'Placement Support',
      desc: 'Continuous career support, with 99% placement records and recruiters across aviation, logistics, e-commerce and manufacturing.',
      icon: Award,
    },
    {
      num: '05',
      title: 'Global Exposure',
      desc: 'Collaborations with universities in Malaysia, Thailand, Indonesia and London, plus student exchange programmes.',
      icon: Globe,
    },
    {
      num: '06',
      title: 'Proven Academics',
      desc: '100+ rank holders in the last 10 years and university gold medals since early batches.',
      icon: GraduationCap,
    },
    {
      num: '07',
      title: 'Campus & Facilities',
      desc: 'A multicultural, green campus with modern classrooms, hostel and transport facilities.',
      icon: Building,
    },
    {
      num: '08',
      title: 'Easy Education Loans',
      desc: 'Support with education loans so finances do not stand between students and their careers.',
      icon: HeartHandshake,
    },
    {
      num: '09',
      title: '5,000+ Alumni Network',
      desc: 'Graduates working across India and abroad, supporting the next generation of ASET students.',
      icon: Users,
    },
  ];

  // IQAC 6 wings
  const iqacWings = [
    {
      title: 'Academic Quality',
      desc: 'Review curriculum; monitor teaching; assess outcomes across all programmes.',
    },
    {
      title: 'Feedback & Improvement',
      desc: 'Collect stakeholder feedback; analyse findings; continuously enhance student services.',
    },
    {
      title: 'Faculty Development',
      desc: 'Identify pedagogical needs; organise faculty training; share advanced teaching practices.',
    },
    {
      title: 'Industry & Academic Linkages',
      desc: 'Build global partnerships; enable practical workplace exposure; review industry engagement.',
    },
    {
      title: 'Student Support & Outcomes',
      desc: 'Support student mentoring; track academic progress; review placement and career outcomes.',
    },
    {
      title: 'Documentation & Compliance',
      desc: 'Maintain transparent records; prepare annual compliance reports; review institutional quality.',
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#faf8f5] text-stone-900 font-sans selection:bg-amber-800 selection:text-white">
      {/* ========================================================= */}
      {/* ATMOSPHERIC BACKGROUND GLOWS (Matching home page system)   */}
      {/* ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-orange-500/10 via-rose-500/8 to-transparent blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-20 w-[450px] h-[450px] rounded-full bg-orange-500/8 blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -right-20 w-[480px] h-[480px] rounded-full bg-rose-500/8 blur-3xl -z-10"
      />

      {/* ========================================================= */}
      {/* 1. HERO / BANNER SECTION (Faithfully matching reference)  */}
      {/* Architectural Campus Background + Centered Heading +       */}
      {/* Centered 'Take a Tour' Button + Bottom Crimson Red Dock   */}
      {/* ========================================================= */}
      <section
        id="hero"
        className="relative w-full min-h-[90vh] lg:min-h-[94vh] flex flex-col justify-between overflow-hidden pt-28 sm:pt-36 lg:pt-40 bg-stone-950 text-white select-none"
      >
        {/* Background Image: Architectural College Building with Cinematic Vignette */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            src={heroCampusImg}
            alt="ASET College Building Architecture"
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
            <span>Alagappa University AU/DCP/799/897 · NAAC A++ Accredited</span>
          </motion.div>

          {/* Monumental Headline matching reference image exactly */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: LUXURY_EASE }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-white tracking-tight leading-[1.08] sm:leading-[1.05] max-w-4xl"
          >
            Good Education to Build <span className="text-gradient-title font-extrabold">A Better Future</span>
          </motion.h1>

          {/* Subtext Paragraph matching reference structure & ASET content */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: LUXURY_EASE }}
            className="mt-5 text-sm sm:text-base md:text-lg text-stone-200/95 leading-relaxed max-w-3xl font-sans font-normal"
          >
            We offer a quality education that provides not only lessons but also real experience in every field.
            Embrace the future with our specialized higher education in Aviation, Industrial Safety, Logistics &amp; Shipping,
            Commerce and Management, where lessons come to life through immersive training at Chennai, Coimbatore, and our Thoothukudi Flying School.
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
                  scrollToSection('campuses');
                }
              }}
              className="px-9 sm:px-11 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-[#991b1b] hover:bg-[#851117] active:bg-[#7f1d1d] text-white font-semibold text-sm sm:text-base tracking-wide shadow-xl shadow-black/50 border border-red-500/30 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Take a Tour</span>
              <ArrowUpRight className="w-4 h-4 text-white/80" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="button"
              onClick={onOpenAdmissions}
              className="px-7 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white font-semibold text-sm sm:text-base tracking-wide backdrop-blur-md border border-white/25 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Apply Now 2027–28</span>
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
              
              {/* Panel 1: Quality */}
              <div className="p-6 sm:p-7 lg:p-8 space-y-2 hover:bg-white/5 transition-colors text-left">
                <div className="flex items-center gap-2.5 text-white">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-amber-300">
                    <Award className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg tracking-tight">
                    Quality
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed font-sans">
                  Experience a world-class education with Alagappa University NAAC A++ approved degree recognition (AU/DCP/799/897) and unlock your potential.
                </p>
              </div>

              {/* Panel 2: Leadership */}
              <div className="p-6 sm:p-7 lg:p-8 space-y-2 hover:bg-white/5 transition-colors text-left">
                <div className="flex items-center gap-2.5 text-white">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-amber-300">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg tracking-tight">
                    Leadership
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed font-sans">
                  Guided by visionary leadership under CEO Dr. A. Mohamed Rizwan and master industry mentors, inspiring growth and shaping future leaders.
                </p>
              </div>

              {/* Panel 3: Experience */}
              <div className="p-6 sm:p-7 lg:p-8 space-y-2 hover:bg-white/5 transition-colors text-left">
                <div className="flex items-center gap-2.5 text-white">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-amber-300">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg tracking-tight">
                    Experience
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed font-sans">
                  Embark on a transformative journey with flight simulator labs, live fire &amp; safety drills, port logistics and our Thoothukudi Flying School.
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 5 HIGHLIGHTS METRIC STRIP (Preserving all document metrics) */}
      {/* Styled directly from KeyMetricsBar on home page           */}
      {/* ========================================================= */}
      <section className="relative z-20 py-8 sm:py-12 bg-[#faf8f5] border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl bg-white border border-stone-200 shadow-xl shadow-stone-900/10 p-4 xs:p-5 sm:p-7 lg:p-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 lg:divide-x divide-stone-200">
            
            <div className="flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-stone-600">
                  Heritage
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums text-stone-950 font-mono">
                13+
              </div>
              <div className="text-xs text-stone-600 font-sans mt-0.5">
                Years of Academic Excellence
              </div>
            </div>

            <div className="flex flex-col justify-between lg:pl-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                  <Building className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-stone-600">
                  Campuses
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums text-stone-950 font-mono">
                2
              </div>
              <div className="text-xs text-stone-600 font-sans mt-0.5">
                Chennai &amp; Coimbatore
              </div>
            </div>

            <div className="flex flex-col justify-between lg:pl-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-stone-600">
                  Network
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums text-stone-950 font-mono">
                5,000+
              </div>
              <div className="text-xs text-stone-600 font-sans mt-0.5">
                Alumni in India &amp; Abroad
              </div>
            </div>

            <div className="flex flex-col justify-between lg:pl-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-stone-600">
                  Assurance
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums text-[#dc2626] font-mono">
                99%
              </div>
              <div className="text-xs text-stone-600 font-sans mt-0.5">
                Placement Support Record
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex flex-col justify-between lg:pl-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-stone-600">
                  Linkages
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums text-stone-950 font-mono">
                200+
              </div>
              <div className="text-xs text-stone-600 font-sans mt-0.5">
                MoUs &amp; Industrial Ties
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. LIFE AT ASET (PHOTOS AND VIDEOS)                       */}
      {/* Exact Document Content with Home Page Aesthetics          */}
      {/* ========================================================= */}
      <section id="life-at-aset" className="py-20 sm:py-28 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-3xl">
              <ScrollEyebrow delay={0.05} className="text-[#dc2626] font-bold font-mono tracking-widest uppercase mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
                <span>SECTION 02 · CAMPUS IMMERSION &amp; CULTURE</span>
              </ScrollEyebrow>

              <ScrollHeading
                as="h2"
                delay={0.1}
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight"
              >
                Life at ASET: <span className="text-gradient-title font-medium">Learning Beyond Classroom</span>
              </ScrollHeading>

              <ScrollParagraph
                delay={0.16}
                className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed font-sans"
              >
                At ASET College, education goes beyond textbooks and lecture halls. Life on campus is a
                blend of rigorous practical training, vibrant student clubs, cultural festivals, sports
                tournaments and industry visits. From hands-on flight simulator sessions and firefighting
                drills to technical symposiums and international exchange programmes, students build
                memories and friendships that last a lifetime.
              </ScrollParagraph>
            </div>

            {/* Red Button: Watch Campus Life Video Lightbox */}
            <ScrollAction delay={0.2} className="shrink-0">
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] active:scale-95 text-white font-semibold text-xs sm:text-sm shadow-md shadow-red-600/25 transition-all cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-white text-red-600 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Watch Campus Life Video</span>
              </button>

              {onNavigateToLife && (
                <button
                  type="button"
                  onClick={() => onNavigateToLife('#life-overview')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-stone-100 text-stone-900 font-semibold text-xs sm:text-sm border border-stone-200 shadow-xs transition-colors cursor-pointer"
                >
                  <span>Explore Dedicated Campus Life Page</span>
                  <ArrowUpRight className="w-4 h-4 text-red-700" />
                </button>
              )}
            </ScrollAction>
          </div>

          {/* Genuine Authentic Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200 shadow-sm"
            >
              <img
                src={admHangar}
                alt="Aviation Aircraft Hangar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono text-orange-400 font-bold uppercase tracking-wider block">
                  Aviation Engineering
                </span>
                <span className="font-bold text-sm">Aircraft Hangar &amp; Maintenance</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200 shadow-sm"
            >
              <img
                src={admDroneLab}
                alt="Drone Tech Lab"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono text-orange-400 font-bold uppercase tracking-wider block">
                  Emerging Technologies
                </span>
                <span className="font-bold text-sm">Drone Research &amp; Flight Labs</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200 shadow-sm"
            >
              <img
                src={admFireDrill}
                alt="Fire Safety Drills"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono text-orange-400 font-bold uppercase tracking-wider block">
                  Industrial Safety
                </span>
                <span className="font-bold text-sm">Live Fire Drills &amp; Hazard Simulation</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200 shadow-sm"
            >
              <img
                src={admAirportModel}
                alt="Miniature Airport Simulation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono text-orange-400 font-bold uppercase tracking-wider block">
                  Airport Operations
                </span>
                <span className="font-bold text-sm">Terminal &amp; ATC Simulation Models</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200 shadow-sm"
            >
              <img
                src={admCabinCrew}
                alt="Cabin Crew Mockup Training"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono text-orange-400 font-bold uppercase tracking-wider block">
                  Cabin Service Training
                </span>
                <span className="font-bold text-sm">Aircraft Fuselage Simulation Cabin</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200 shadow-sm"
            >
              <img
                src={admGraduation}
                alt="Convocation Ceremony"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono text-orange-400 font-bold uppercase tracking-wider block">
                  Convocation Day
                </span>
                <span className="font-bold text-sm">Honouring University Rank Holders</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200 shadow-sm"
            >
              <img
                src={admPilots}
                alt="Pilot Training Cadets"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono text-orange-400 font-bold uppercase tracking-wider block">
                  Flight Deck Cadets
                </span>
                <span className="font-bold text-sm">Commercial Pilot License Trainees</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200 shadow-sm"
            >
              <img
                src={admFreshers}
                alt="Student Cultural Celebrations"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono text-orange-400 font-bold uppercase tracking-wider block">
                  Cultural Festivities
                </span>
                <span className="font-bold text-sm">Campus Freshers Quest &amp; Sports</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. ABOUT ASET (Why ASET is One of South India's Top...)   */}
      {/* Exact Document Content with 7 Distinct Points             */}
      {/* ========================================================= */}
      <section id="about-overview" className="py-20 sm:py-28 bg-[#faf8f5] border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 sm:mb-16">
            <ScrollEyebrow delay={0.05} className="text-[#dc2626] font-bold font-mono tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
              <span>SECTION 03 · INSTITUTIONAL EXCELLENCE</span>
            </ScrollEyebrow>

            <ScrollHeading
              as="h2"
              delay={0.1}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight"
            >
              Why ASET is One of <span className="text-gradient-title font-medium">South India&apos;s Top Institutions</span>
            </ScrollHeading>

            <ScrollParagraph
              delay={0.16}
              className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed font-sans"
            >
              ASET College of Science &amp; Technology was established to fill the gap between traditional
              university education and the practical demands of modern industries. Approved by Alagappa
              University (AU/DCP/799/897), which holds an esteemed NAAC A++ accreditation, ASET has spent
              over 13 years building specialized programmes that combine academic rigor with practical,
              industry-aligned training.
            </ScrollParagraph>
          </div>

          {/* 7 Distinct Points Grid from Document */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 font-mono font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-base text-stone-900">
                13+ Years of Specialised Education
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                A proven track record in non-conventional, high-demand fields like Aviation, Fire &amp; Safety, and Shipping &amp; Logistics.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 font-mono font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-base text-stone-900">
                Dual Flagship Campuses
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Fully equipped campuses in Chennai and Coimbatore, plus our own Flying School at Thoothukudi for flight training.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 font-mono font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-base text-stone-900">
                Alagappa University Approval
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Degrees and diplomas awarded under approval AU/DCP/799/897 by Alagappa University (NAAC A++ Grade).
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 font-mono font-bold text-sm">
                04
              </div>
              <h3 className="font-bold text-base text-stone-900">
                Industry-Driven Curriculum
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Courses designed and updated with inputs from industry leaders, ensuring graduates are workforce-ready from Day 1.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 font-mono font-bold text-sm">
                05
              </div>
              <h3 className="font-bold text-base text-stone-900">
                99% Placement Support
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Dedicated placement cells at both campuses with tie-ups across airlines, logistics firms, manufacturing plants and corporate giants.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 font-mono font-bold text-sm">
                06
              </div>
              <h3 className="font-bold text-base text-stone-900">
                Global Academic Collaborations
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Active partnerships with universities in Malaysia, Thailand, Indonesia and London, enabling student exchange programmes.
              </p>
            </div>

            <div className="col-span-1 md:col-span-2 lg:col-span-3 p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 font-mono font-bold text-sm">
                07
              </div>
              <h3 className="font-bold text-base text-stone-900">
                Experienced Faculty &amp; Industry Mentors
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans max-w-4xl">
                Classes taught by seasoned educators and practicing professionals, giving students real-world insights alongside theory.
              </p>
            </div>

          </div>

          {/* High-Contrast Motto Card: Matching InstitutionalGradeSection on home page */}
          <div className="mt-12 sm:mt-16 rounded-[2.2rem] bg-stone-950 text-white p-8 sm:p-12 border border-stone-800 shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400">
                  Institutional Commitments
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  &ldquo;Your Career. Our Commitment.&rdquo;
                </h3>
                <p className="text-sm text-stone-400 font-sans">
                  At ASET, we don&apos;t just grant degrees; we build lifelong career pathways with hands-on skill verification.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <span className="px-5 py-2.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-stone-200">
                  Learn. Lead. Succeed.
                </span>
                <button
                  type="button"
                  onClick={onOpenAdmissions}
                  className="px-6 py-2.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold tracking-wide shadow-md transition-all cursor-pointer"
                >
                  Join 2027 Batch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. LEADERSHIP & GOVERNANCE                                */}
      {/* Exact Document Content: CEO Dr. A. Mohamed Rizwan Quote   */}
      {/* ========================================================= */}
      <section id="leadership" className="py-20 sm:py-28 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <ScrollEyebrow delay={0.05} className="text-[#dc2626] font-bold font-mono tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
              <span>SECTION 04 · LEADERSHIP &amp; VISION</span>
            </ScrollEyebrow>

            <ScrollHeading
              as="h2"
              delay={0.1}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight"
            >
              Guided by Experience. <span className="text-gradient-title font-medium">Driven by Purpose.</span>
            </ScrollHeading>
          </div>

          {/* Interactive Leader Tabs: Styled like home page pill controls */}
          <div className="flex items-center gap-2 mb-8 bg-stone-100 p-1.5 rounded-full w-fit max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveLeaderTab('ceo')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeLeaderTab === 'ceo'
                  ? 'bg-stone-950 text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              CEO &amp; Founder
            </button>
            <button
              type="button"
              onClick={() => setActiveLeaderTab('principal')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeLeaderTab === 'principal'
                  ? 'bg-stone-950 text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Principal&apos;s Message
            </button>
            <button
              type="button"
              onClick={() => setActiveLeaderTab('director')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeLeaderTab === 'director'
                  ? 'bg-stone-950 text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Director of Placements
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Leadership Message Card */}
            <div className="lg:col-span-8 p-8 sm:p-10 rounded-[2rem] bg-[#faf8f5] border border-stone-200/90 shadow-sm space-y-6">
              {activeLeaderTab === 'ceo' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-orange-600 text-white font-extrabold flex items-center justify-center font-mono text-xl shadow-md shadow-orange-600/30">
                      MR
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-stone-950">
                        Dr. A. Mohamed Rizwan
                      </h3>
                      <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                        CEO &amp; Founder, ASET College of Science &amp; Technology
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-stone-200/80 text-stone-800 text-sm sm:text-base leading-relaxed font-sans">
                    <Quote className="w-5 h-5 text-orange-500 mb-2 inline-block mr-1 opacity-70" />
                    &ldquo;ASET was founded with a single goal: to provide world-class, career-focused education in fields where the industry needs skilled professionals most. Every programme we offer is built around what employers actually look for. When students graduate from ASET, they don&apos;t just hold a degree — they step into their careers with confidence.&rdquo;
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                    Under his leadership, ASET has expanded from a specialized safety institute into a multi-campus institution offering 120+ courses across Aviation, Fire &amp; Safety, Logistics, Management, Commerce and Hotel Management, with its own DGCA-aligned Flying School at Thoothukudi.
                  </p>
                </div>
              )}

              {activeLeaderTab === 'principal' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-stone-900 text-white font-extrabold flex items-center justify-center font-mono text-xl shadow-md">
                      AC
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-stone-950">
                        Academic Directorate &amp; Principal
                      </h3>
                      <div className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider">
                        Office of Academic Affairs &amp; University Relations
                      </div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                    &ldquo;Our focus is rigorous academic delivery adhering to Alagappa University standards (AU/DCP/799/897). We pair classroom syllabus with mandatory industrial internships, simulator lab hours, and research symposiums, consistently producing 100+ university rank holders.&rdquo;
                  </p>
                </div>
              )}

              {activeLeaderTab === 'director' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-red-600 text-white font-extrabold flex items-center justify-center font-mono text-xl shadow-md shadow-red-600/30">
                      CR
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-stone-950">
                        Corporate Relations &amp; Placement Directorate
                      </h3>
                      <div className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
                        Industry Tie-Ups &amp; Career Cell
                      </div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                    &ldquo;With over 200 corporate tie-ups spanning airlines, international shipping consortiums, e-commerce giants, and Fortune 500 safety departments, our students receive verified recruitment pipelines and interview preparation from day one.&rdquo;
                  </p>
                </div>
              )}
            </div>

            {/* Our Vision Card */}
            <div className="lg:col-span-4 p-8 rounded-[2rem] bg-gradient-to-br from-amber-50 to-orange-50/60 border border-orange-200/80 text-stone-900 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-orange-600 text-white flex items-center justify-center shadow-md shadow-orange-600/30">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-extrabold text-stone-950 font-serif font-semibold">
                Our Institutional Vision
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                To be recognised as South India&apos;s most respected vocational and professional higher education institution — empowering students from all backgrounds with skill-based, employment-ready education that creates leaders in industry and society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. ACADEMIC DEPARTMENTS                                   */}
      {/* Exact Document Content: All 6 Departments & Courses       */}
      {/* ========================================================= */}
      <section id="departments" className="py-20 sm:py-28 bg-[#faf8f5] border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-14">
            <ScrollEyebrow delay={0.05} className="text-[#dc2626] font-bold font-mono tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
              <span>SECTION 05 · ACADEMIC DISCIPLINES</span>
            </ScrollEyebrow>

            <ScrollHeading
              as="h2"
              delay={0.1}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight"
            >
              Academic Departments <span className="text-gradient-title font-medium">at ASET</span>
            </ScrollHeading>
            <ScrollParagraph
              delay={0.16}
              className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed font-sans"
            >
              Each department at ASET is built around a dedicated career path, with dedicated labs,
              experienced faculty and strong industry connections.
            </ScrollParagraph>
          </div>

          {/* Department Tabs: Horizontal scrollable pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
            {departments.map((dept, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveDeptTab(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeDeptTab === idx
                    ? 'bg-stone-950 text-white shadow-md'
                    : 'bg-white hover:bg-stone-100 text-stone-700 hover:text-stone-950 border border-stone-200'
                }`}
              >
                <span>{dept.number}. {dept.title}</span>
              </button>
            ))}
          </div>

          {/* Department Detail Card */}
          <motion.div
            key={activeDeptTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: LUXURY_EASE }}
            className="p-8 sm:p-12 rounded-[2rem] bg-white border border-stone-200 shadow-xl shadow-stone-900/5 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* Left: Department narrative & recruiters */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-mono font-bold">
                <span>{departments[activeDeptTab].badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 font-serif font-semibold">
                {departments[activeDeptTab].title}
              </h3>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
                {departments[activeDeptTab].desc}
              </p>

              <div className="pt-2 border-t border-stone-100 space-y-2">
                <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest block">
                  Key Recruiter Network:
                </span>
                <span className="text-xs sm:text-sm font-bold text-stone-800">
                  {departments[activeDeptTab].recruiters}
                </span>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={onOpenAdmissions}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] active:scale-95 text-white font-semibold text-xs sm:text-sm shadow-md shadow-red-600/25 transition-all cursor-pointer"
                >
                  <span>Apply for this Department</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Offered Programmes List */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-stone-500">
                  Approved Programmes
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  2027–28 Open
                </span>
              </div>

              <ul className="space-y-3">
                {departments[activeDeptTab].programmes.map((prog, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{prog}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. PILOT TRAINING WITH ASET FLYING SCHOOL, THOOTHUKUDI    */}
      {/* High-Contrast Dark Canvas matching Institutional Grade   */}
      {/* ========================================================= */}
      <section id="flying-school" className="py-20 sm:py-28 bg-gradient-to-br from-stone-950 via-[#0a1224] to-stone-950 text-white border-b border-stone-800 relative overflow-hidden">
        {/* Glow & Atmosphere */}
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-orange-600/10 blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <ScrollEyebrow delay={0.05} className="text-orange-400 font-bold font-mono tracking-widest uppercase mb-2 flex items-center gap-2">
              <Plane className="w-4 h-4 text-orange-400" />
              <span>SECTION 06 · AVIATION FLIGHT TRAINING BASE</span>
            </ScrollEyebrow>

            <ScrollHeading
              as="h2"
              delay={0.1}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight"
            >
              Pilot Training with <span className="text-gradient-title font-medium">ASET Flying School</span>
            </ScrollHeading>

            <ScrollParagraph
              delay={0.16}
              className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed font-sans"
            >
              ASET is one of the few institutions in South India with its own dedicated flying school.
              Located at Thoothukudi, the ASET Flying School provides flight training for aspiring
              commercial pilots, while students complete ground classes and theory papers at the Chennai
              campus.
            </ScrollParagraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3 hover:bg-white/10 transition-all">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-lg text-white">
                Dual-Hub Training Architecture
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                DGCA ground classes, navigation and meteorology are taught at the Chennai campus. Flight training, simulator hours and solo flights are conducted at Thoothukudi.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3 hover:bg-white/10 transition-all">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-lg text-white">
                Maintenance Visits for B.Sc Aviation
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                B.Sc Aviation students visit the Thoothukudi base for hands-on maintenance training, pre-flight inspection workshops and airframe demonstrations.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3 hover:bg-white/10 transition-all">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-lg text-white">
                Commercial Pilot License (CPL) Pathway
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                Graduates move towards airline cadet programmes, charter flying, corporate aviation and commercial pilot careers across leading Indian and global carriers.
              </p>
            </div>

          </div>

          <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-stone-300">
              <span className="font-bold text-white block text-sm sm:text-base">Ready to earn your wings?</span>
              Enquire today about CPL ground class schedules and flying hour allocations for 2027–28.
            </div>
            <button
              type="button"
              onClick={onOpenAdmissions}
              className="px-6 py-3 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shrink-0 cursor-pointer shadow-md shadow-red-600/30"
            >
              Enquire Pilot Training
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. WHY STUDENTS CHOOSE ASET (9 Foundational Pillars)      */}
      {/* Complete with Home Page Dot Matrix Interaction            */}
      {/* ========================================================= */}
      <section id="why-aset" className="py-20 sm:py-28 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 sm:mb-16">
            <ScrollEyebrow delay={0.05} className="text-[#dc2626] font-bold font-mono tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
              <span>SECTION 07 · INSTITUTIONAL PILLARS</span>
            </ScrollEyebrow>

            <ScrollHeading
              as="h2"
              delay={0.1}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight"
            >
              Why Students <span className="text-gradient-title font-medium">Choose ASET</span>
            </ScrollHeading>

            <ScrollParagraph
              delay={0.16}
              className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed font-sans"
            >
              Nine foundational pillars that make ASET College the preferred destination for thousands of ambitious students.
            </ScrollParagraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isHovered = hoveredPillar === idx;

              return (
                <motion.div
                  key={idx}
                  onMouseEnter={() => setHoveredPillar(idx)}
                  onMouseLeave={() => setHoveredPillar(null)}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.28, ease: LUXURY_EASE }}
                  className="p-7 sm:p-8 rounded-[2rem] bg-[#faf8f5] border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                        <Icon className="w-5 h-5" />
                      </div>
                      {/* Interactive Dot Matrix from home page */}
                      <DotMatrix isHovered={isHovered} />
                    </div>

                    <div className="text-xs font-mono font-bold text-orange-600 mb-1">
                      Pillar {pillar.num}
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-stone-950 mb-2 font-serif font-semibold">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. PARTNERSHIPS AND RECOGNITION                           */}
      {/* Exact Document Content: MoUs, Skill Councils & Recruiter  */}
      {/* ========================================================= */}
      <section id="partnerships" className="py-20 sm:py-28 bg-[#faf8f5] border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-14">
            <ScrollEyebrow delay={0.05} className="text-[#dc2626] font-bold font-mono tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
              <span>SECTION 08 · GLOBAL &amp; INDUSTRIAL ALLIANCES</span>
            </ScrollEyebrow>

            <ScrollHeading
              as="h2"
              delay={0.1}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight"
            >
              Partnerships, Recognition <span className="text-gradient-title font-medium">&amp; Global Awards</span>
            </ScrollHeading>

            <ScrollParagraph
              delay={0.16}
              className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed font-sans"
            >
              ASET maintains strong partnerships with international universities, industry councils and
              corporate recruiters to provide students with global exposure, recognized certifications
              and assured placement pipelines.
            </ScrollParagraph>
          </div>

          {/* International MoUs Grid */}
          <div className="mb-12">
            <h3 className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest mb-4">
              International Partner Universities:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              
              <div className="p-5 rounded-2xl bg-white border border-stone-200 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md transition-all">
                <img src={intiLogo} alt="INTI International University, Malaysia" className="h-10 sm:h-12 w-auto object-contain mb-2.5" />
                <span className="text-xs font-bold text-stone-800">INTI International Univ.</span>
                <span className="text-[10px] text-stone-500 font-mono">Malaysia</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md transition-all">
                <img src={msuLogo} alt="Management & Science University, Malaysia" className="h-10 sm:h-12 w-auto object-contain mb-2.5" />
                <span className="text-xs font-bold text-stone-800">Management &amp; Science Univ.</span>
                <span className="text-[10px] text-stone-500 font-mono">Malaysia</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md transition-all">
                <img src={shinawatraLogo} alt="Shinawatra University, Thailand" className="h-10 sm:h-12 w-auto object-contain mb-2.5" />
                <span className="text-xs font-bold text-stone-800">Shinawatra University</span>
                <span className="text-[10px] text-stone-500 font-mono">Thailand</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md transition-all">
                <img src={hasanuddinLogo} alt="Hasanuddin University, Indonesia" className="h-10 sm:h-12 w-auto object-contain mb-2.5" />
                <span className="text-xs font-bold text-stone-800">Hasanuddin University</span>
                <span className="text-[10px] text-stone-500 font-mono">Indonesia</span>
              </div>

              <div className="col-span-2 sm:col-span-1 p-5 rounded-2xl bg-white border border-stone-200 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md transition-all">
                <img src={hsuLogo} alt="HSU London" className="h-10 sm:h-12 w-auto object-contain mb-2.5" />
                <span className="text-xs font-bold text-stone-800">HSU London</span>
                <span className="text-[10px] text-stone-500 font-mono">United Kingdom</span>
              </div>

            </div>
          </div>

          {/* Skill & Corporate Councils */}
          <div className="mb-12">
            <h3 className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest mb-4">
              Skill &amp; Corporate Councils:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              
              <div className="p-4 rounded-2xl bg-white border border-stone-200 flex flex-col items-center justify-center text-center shadow-xs">
                <img src={aaiLogo} alt="Airport Authority of India" className="h-10 w-auto object-contain mb-2" />
                <span className="text-xs font-bold text-stone-800">Airport Authority of India</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200 flex flex-col items-center justify-center text-center shadow-xs">
                <img src={aasscLogo} alt="Aerospace & Aviation Sector Skill Council" className="h-10 w-auto object-contain mb-2" />
                <span className="text-xs font-bold text-stone-800">Aerospace Skill Council</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200 flex flex-col items-center justify-center text-center shadow-xs">
                <img src={lscLogo} alt="Logistics Sector Skill Council" className="h-10 w-auto object-contain mb-2" />
                <span className="text-xs font-bold text-stone-800">Logistics Skill Council</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200 flex flex-col items-center justify-center text-center shadow-xs">
                <img src={sasLogo} alt="SAS Institute" className="h-10 w-auto object-contain mb-2" />
                <span className="text-xs font-bold text-stone-800">SAS Analytics</span>
              </div>

              <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-white border border-stone-200 flex flex-col items-center justify-center text-center shadow-xs">
                <img src={kpmgLogo} alt="KPMG" className="h-10 w-auto object-contain mb-2" />
                <span className="text-xs font-bold text-stone-800">KPMG Professional</span>
              </div>

            </div>
          </div>

          {/* Recruiters Strip */}
          <div className="p-6 sm:p-8 rounded-[2rem] bg-stone-950 text-white mb-8">
            <h3 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest mb-3">
              Official Recruiter Network:
            </h3>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
              IndiGo, SpiceJet, Akasa Air, Qatar Airways, Maersk, DHL, Flipkart, Amazon, Larsen &amp; Toubro, Tata and Hyundai Glovis.
            </p>
          </div>

          {/* Awards Card */}
          <div className="p-6 sm:p-8 rounded-[2rem] bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200 text-stone-900 space-y-2 shadow-xs">
            <div className="text-xs font-mono font-bold text-orange-700 uppercase tracking-widest">
              Statewide Accolade
            </div>
            <h4 className="text-lg sm:text-xl font-extrabold text-stone-900">
              Times of India Trailblazers Tamil Nadu Award 2026
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
              Winner of the Times of India Trailblazers Tamil Nadu Award 2026 for excellence and innovation in education, and a QS I-GAUGE collaborator in the National Summit on AI in Indian Education.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. WHERE ASET GRADUATES BUILD CAREERS                     */}
      {/* Exact Document Content: 6 Sector Career Maps              */}
      {/* ========================================================= */}
      <section id="career-outcomes" className="py-20 sm:py-28 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-14">
            <ScrollEyebrow delay={0.05} className="text-[#dc2626] font-bold font-mono tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
              <span>SECTION 09 · PLACEMENT DESTINATIONS</span>
            </ScrollEyebrow>

            <ScrollHeading
              as="h2"
              delay={0.1}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight"
            >
              Where ASET Graduates <span className="text-gradient-title font-medium">Build Careers</span>
            </ScrollHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 sm:p-7 rounded-2xl bg-[#faf8f5] border border-stone-200/80 shadow-xs hover:shadow-md transition-all space-y-2.5">
              <span className="font-bold text-base text-orange-600 block">
                Aviation &amp; Pilot Training
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Airlines, airport operations, cabin crew, ground handling, cargo, customer service and airport management. Pilot pathway students move towards commercial pilot careers.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#faf8f5] border border-stone-200/80 shadow-xs hover:shadow-md transition-all space-y-2.5">
              <span className="font-bold text-base text-orange-600 block">
                Industrial Safety
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Safety and fire officer roles in construction, oil &amp; gas, manufacturing, shipping, aviation and power plants, in India and Gulf countries.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#faf8f5] border border-stone-200/80 shadow-xs hover:shadow-md transition-all space-y-2.5">
              <span className="font-bold text-base text-orange-600 block">
                Shipping &amp; Logistics
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Logistics executive, shipping coordinator, supply chain executive, warehouse supervisor and freight forwarding roles with port, cargo and e-commerce companies.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#faf8f5] border border-stone-200/80 shadow-xs hover:shadow-md transition-all space-y-2.5">
              <span className="font-bold text-base text-orange-600 block">
                Management &amp; Analytics
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                HR, marketing and finance executives, business analyst, data analyst and business intelligence roles in IT, banking, finance and consulting.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#faf8f5] border border-stone-200/80 shadow-xs hover:shadow-md transition-all space-y-2.5">
              <span className="font-bold text-base text-orange-600 block">
                Commerce
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Chartered accountancy, cost and management accountancy, company secretaryship and ACCA careers in audit, tax, finance and corporate compliance.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#faf8f5] border border-stone-200/80 shadow-xs hover:shadow-md transition-all space-y-2.5">
              <span className="font-bold text-base text-orange-600 block">
                Hotel Management
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Front office, food and beverage, housekeeping, events and guest relations roles in hotels, resorts, airlines and tourism.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. INTERNAL QUALITY ASSURANCE CELL (IQAC) & JOURNAL      */}
      {/* Exact Document Content: 6 Institutional Wings & Research  */}
      {/* ========================================================= */}
      <div id="journal" className="scroll-mt-24" />
      <section id="iqac" className="py-20 sm:py-28 bg-[#faf8f5] border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-14">
            <ScrollEyebrow delay={0.05} className="text-[#dc2626] font-bold font-mono tracking-widest uppercase mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#dc2626]" />
              <span>SECTION 10 · QUALITY, AUDIT &amp; RESEARCH JOURNAL</span>
            </ScrollEyebrow>

            <ScrollHeading
              as="h2"
              delay={0.1}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight"
            >
              Internal Quality Assurance Cell <span className="text-gradient-title font-medium">(IQAC) &amp; Research</span>
            </ScrollHeading>

            <ScrollParagraph
              delay={0.16}
              className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed font-sans"
            >
              The Internal Quality Assurance Cell (IQAC) at ASET College drives continuous
              improvement in teaching, research publications, peer-reviewed journals, and student support. It works with management, faculty,
              students, alumni and industry partners to plan, monitor and review academic and
              administrative quality.
            </ScrollParagraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iqacWings.map((wing, idx) => (
              <div key={idx} className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:shadow-md transition-all space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-base">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{wing.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  {wing.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. OUR CAMPUSES & FACILITIES                             */}
      {/* Exact Document Content: Chennai, Coimbatore & Flying Base */}
      {/* ========================================================= */}
      <section id="campuses" className="py-20 sm:py-28 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-14">
            <ScrollEyebrow delay={0.05} className="text-[#dc2626] font-bold font-mono tracking-widest uppercase mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#dc2626]" />
              <span>SECTION 11 · LOCATIONS &amp; INFRASTRUCTURE</span>
            </ScrollEyebrow>

            <ScrollHeading
              as="h2"
              delay={0.1}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight"
            >
              Our Dual Campuses <span className="text-gradient-title font-medium">&amp; Facilities</span>
            </ScrollHeading>

            {onNavigateToCampuses && (
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => onNavigateToCampuses('#campuses-overview')}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-red-700 hover:text-red-800 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-full border border-red-200/80 transition-colors cursor-pointer"
                >
                  <span>Explore Dedicated Campuses &amp; Facilities Page</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Chennai Campus */}
            <div className="rounded-[2rem] bg-[#faf8f5] border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="p-6 sm:p-8 space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-stone-950 text-white flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-stone-950 font-serif font-semibold">
                  Chennai Campus
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  Irulapalayam, Kuthambakkam, Poonamallee, Chennai – 600124, Tamil Nadu.
                </p>
                <div className="space-y-1.5 pt-2 text-xs font-mono">
                  <div className="text-stone-700">Phone: <a href="tel:+919159499973" className="font-bold text-orange-600 hover:underline">+91 91594 99973</a></div>
                  <div className="text-stone-700">Email: <a href="mailto:contact@asetsafety.ac.in" className="font-bold text-stone-900 hover:underline">contact@asetsafety.ac.in</a></div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  href="https://maps.google.com/?q=ASET+College+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-white hover:bg-stone-100 text-stone-900 text-xs font-bold border border-stone-200 transition-colors"
                >
                  <span>View on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Coimbatore Campus */}
            <div className="rounded-[2rem] bg-[#faf8f5] border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="p-6 sm:p-8 space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-stone-950 text-white flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-xl font-extrabold text-stone-950 font-serif font-semibold">
                  Coimbatore Campus
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  Sathy Main Road, Saravanampatti, Coimbatore – 641035, Tamil Nadu.
                </p>
                <div className="space-y-1.5 pt-2 text-xs font-mono">
                  <div className="text-stone-700">Phone: <a href="tel:+919159499973" className="font-bold text-orange-600 hover:underline">+91 91594 99973</a></div>
                  <div className="text-stone-700">Email: <a href="mailto:contact@asetsafety.ac.in" className="font-bold text-stone-900 hover:underline">contact@asetsafety.ac.in</a></div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  href="https://maps.google.com/?q=ASET+College+Coimbatore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-white hover:bg-stone-100 text-stone-900 text-xs font-bold border border-stone-200 transition-colors"
                >
                  <span>View on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Thoothukudi Flying School */}
            <div className="rounded-[2rem] bg-[#faf8f5] border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="p-6 sm:p-8 space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-600 text-white flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-xl font-extrabold text-stone-950 font-serif font-semibold">
                  Thoothukudi Flight Base
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  ASET Flying School Airport Facility, Thoothukudi Airport Operational Zone, Tamil Nadu.
                </p>
                <div className="space-y-1.5 pt-2 text-xs font-mono">
                  <div className="text-stone-700">Training: <span className="font-bold text-stone-900">Commercial Pilot Flight Base</span></div>
                  <div className="text-stone-700">Admissions: <a href="tel:+919159499973" className="font-bold text-orange-600 hover:underline">+91 91594 99973</a></div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={onOpenAdmissions}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-stone-950 hover:bg-stone-900 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>Enquire Flight Training</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 12. FREQUENTLY ASKED QUESTIONS (16 Questions)             */}
      {/* Complete Document Fidelity with Spring Accordions         */}
      {/* ========================================================= */}
      <section id="faqs" className="py-20 sm:py-28 bg-[#faf8f5] border-b border-stone-200/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <ScrollEyebrow delay={0.05} className="text-[#dc2626] font-bold font-mono tracking-widest uppercase mb-2 flex items-center justify-center gap-2">
              <span>SECTION 12 · ADMISSIONS GUIDANCE</span>
            </ScrollEyebrow>

            <ScrollHeading
              as="h2"
              delay={0.1}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight"
            >
              Frequently Asked <span className="text-gradient-title font-medium">Questions</span>
            </ScrollHeading>

            <ScrollParagraph
              delay={0.16}
              className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed font-sans"
            >
              Got questions? Here are comprehensive answers about courses, recognitions, placements and facilities.
            </ScrollParagraph>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndices.includes(idx);
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-stone-200/90 shadow-xs overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-extrabold text-sm sm:text-base text-stone-900 leading-snug">
                      {faq.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen ? 'bg-orange-600 text-white rotate-180' : 'bg-stone-100 text-stone-700'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: LUXURY_EASE }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans border-t border-stone-100 pt-3">
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
      {/* 13. FINAL ADMISSIONS BANNER (Home page matching system)   */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] bg-gradient-to-r from-stone-950 via-[#141624] to-stone-950 text-white p-8 sm:p-14 lg:p-16 border border-white/10 shadow-2xl overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Atmospheric glow inside banner */}
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-red-600/20 blur-3xl pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-orange-600/20 blur-3xl pointer-events-none"
            />

            <div className="relative z-10 max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider">
                <span>Admissions 2027–2028 Open</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight">
                Your Career Starts Here.
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
                Take the first step toward a global career in aviation, safety, logistics, commerce or management. Secure your merit seat for the upcoming academic year.
              </p>
            </div>

            <div className="relative z-10 shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="tel:+919159499973"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold transition-all"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call +91 91594 99973</span>
              </a>

              <button
                type="button"
                onClick={onOpenAdmissions}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] active:scale-95 text-white text-sm font-bold shadow-lg shadow-red-600/30 transition-all cursor-pointer"
              >
                <span>Apply Online ↗</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* VIDEO LIGHTBOX MODAL FOR "SEE CAMPUS LIFE"                */}
      {/* ========================================================= */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#141416] rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-black/40">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-bold text-white text-sm sm:text-base">
                    ASET College Campus Life &amp; Facilities
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
                    onClick={() => setIsVideoModalOpen(false)}
                    className="p-1.5 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Close video"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative aspect-video bg-black flex items-center justify-center">
                <video
                  ref={videoRef}
                  src={campusVideo}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
