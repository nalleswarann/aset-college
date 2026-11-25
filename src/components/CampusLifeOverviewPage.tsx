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
  Music,
  Camera,
  Video,
  Flame,
  PartyPopper,
  Trophy,
  Coffee,
  Library,
  Cpu,
  Monitor,
  HardHat,
  Eye,
  Ear,
  Wind,
  Footprints,
  Briefcase,
  SlidersHorizontal,
  ExternalLink,
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

// Authentic Campus Life Photos
import admWelcomeStage from '../assets/images/aset-life/home-adm-welcome-stage.webp';
import admFreshersQuest from '../assets/images/aset-life/home-adm-freshers-quest.webp';
import admFreshersStage from '../assets/images/aset-life/home-adm-freshers-stage.webp';
import admDance from '../assets/images/aset-life/home-adm-dance.webp';
import admPilots from '../assets/images/aset-life/home-adm-pilots.webp';
import admCabinCrew from '../assets/images/aset-life/home-adm-cabin-crew.webp';
import admHangar from '../assets/images/aset-life/home-adm-hangar.webp';
import admDroneLab from '../assets/images/aset-life/home-adm-drone-lab.webp';
import admFireDrill from '../assets/images/aset-life/home-adm-fire-drill.webp';
import admSafetyTeam from '../assets/images/aset-life/home-adm-safety-team.webp';
import admAirportModel from '../assets/images/aset-life/home-adm-airport-model.webp';
import admGraduation from '../assets/images/aset-life/home-adm-graduation.webp';
import admGrooming from '../assets/images/aset-life/home-adm-grooming.webp';
import admLaptopGroup from '../assets/images/aset-life/home-adm-laptop-group.webp';
import admLotusTemple from '../assets/images/aset-life/home-adm-lotus-temple.webp';
import admClass from '../assets/images/aset-life/mg-ca-class.jpg';
import portVisitImg from '../assets/images/aset-life/lg-port-visit.jpg';
import photo1 from '../assets/images/aset-life/home-adm-1.jpg';
import photo2 from '../assets/images/aset-life/home-adm-2.jpg';
import photo3 from '../assets/images/aset-life/home-adm-3.jpg';
import photo4 from '../assets/images/aset-life/home-adm-4.jpg';
import photo6 from '../assets/images/aset-life/home-adm-6.jpg';

export interface CampusLifeOverviewPageProps {
  onBackToHome: () => void;
  onOpenAdmissions?: () => void;
  onOpenVirtualTour?: () => void;
  onNavigateToAbout?: (targetHash?: string) => void;
  onNavigateToCampuses?: (targetHash?: string) => void;
}

export const CampusLifeOverviewPage: React.FC<CampusLifeOverviewPageProps> = ({
  onBackToHome,
  onOpenAdmissions,
  onOpenVirtualTour,
  onNavigateToAbout,
  onNavigateToCampuses,
}) => {
  const [activeGalleryFilter, setActiveGalleryFilter] = useState<string>('all');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoModalTitle, setVideoModalTitle] = useState('ASET Campus Life & Student Highlights');
  const [isMuted, setIsMuted] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string; category: string } | null>(null);
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

  const openVideoWithTopic = (title: string) => {
    setVideoModalTitle(title);
    setIsVideoModalOpen(true);
  };

  // Gallery Data representing the 7 categories from PDF document
  const galleryItems = [
    {
      id: 1,
      title: "Rhythm Art Fest & Cultural Performances",
      category: 'fests',
      categoryLabel: 'Fests & Events',
      image: admDance,
    },
    {
      id: 2,
      title: "Orientation Day & Freshers' Welcome Ceremony",
      category: 'fests',
      categoryLabel: 'Fests & Events',
      image: admWelcomeStage,
    },
    {
      id: 3,
      title: "Fresher's Quest & Talent Showcase",
      category: 'fests',
      categoryLabel: 'Fests & Events',
      image: admFreshersQuest,
    },
    {
      id: 4,
      title: "Onam Celebrations & Traditional Festivities",
      category: 'festivals',
      categoryLabel: 'Festivals',
      image: photo1,
    },
    {
      id: 5,
      title: "Margazhi Utsavam & Cultural Traditions",
      category: 'festivals',
      categoryLabel: 'Festivals',
      image: photo2,
    },
    {
      id: 6,
      title: "Commercial Pilot Training & Flight Deck Briefing",
      category: 'airport',
      categoryLabel: 'Airport & In-Flight',
      image: admPilots,
    },
    {
      id: 7,
      title: "Cabin Crew Practical In-Flight Training",
      category: 'airport',
      categoryLabel: 'Airport & In-Flight',
      image: admCabinCrew,
    },
    {
      id: 8,
      title: "Aircraft Hangar & Engineering Exploration",
      category: 'airport',
      categoryLabel: 'Airport & In-Flight',
      image: admHangar,
    },
    {
      id: 9,
      title: "Industrial Port Visit to Commercial Seaports",
      category: 'visits',
      categoryLabel: 'Industrial Visits & Trips',
      image: portVisitImg,
    },
    {
      id: 10,
      title: "Student Outbound Trip & Educational Tours",
      category: 'visits',
      categoryLabel: 'Industrial Visits & Trips',
      image: admLotusTemple,
    },
    {
      id: 11,
      title: "Annual Sports Day & Athletics Competition",
      category: 'sports',
      categoryLabel: 'Sports',
      image: photo3,
    },
    {
      id: 12,
      title: "Inter-Campus Cricket Tournament",
      category: 'sports',
      categoryLabel: 'Sports',
      image: photo4,
    },
    {
      id: 13,
      title: "9th Annual Graduation Ceremony",
      category: 'ceremonies',
      categoryLabel: 'Ceremonies & Placements',
      image: admGraduation,
    },
    {
      id: 14,
      title: "Campus Placement Drives & Corporate Offers",
      category: 'ceremonies',
      categoryLabel: 'Ceremonies & Placements',
      image: asetGraduates,
    },
    {
      id: 15,
      title: "Modern Air-Conditioned Lecture Hall",
      category: 'classroom',
      categoryLabel: 'Campus & Classroom',
      image: admClass,
    },
    {
      id: 16,
      title: "Hands-on Drone & RC Aircraft Practice",
      category: 'classroom',
      categoryLabel: 'Campus & Classroom',
      image: admDroneLab,
    },
    {
      id: 17,
      title: "Fire Safety Drill & Emergency Simulation",
      category: 'classroom',
      categoryLabel: 'Campus & Classroom',
      image: admFireDrill,
    },
    {
      id: 18,
      title: "Student Technology & Collaborative Projects",
      category: 'classroom',
      categoryLabel: 'Campus & Classroom',
      image: admLaptopGroup,
    },
  ];

  const filteredGallery =
    activeGalleryFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeGalleryFilter);

  // 12 Video Topics from Document
  const videoTopics = [
    { title: '9th Annual Graduation Day', tag: 'Ceremony', desc: 'Conferring degrees upon our graduating batches.' },
    { title: 'AEDEX and Airport Expo in Delhi', tag: 'Aviation Expo', desc: 'Students visiting international aviation exhibitions.' },
    { title: 'Student Council Elections', tag: 'Leadership', desc: 'Democratic student elections fostering leadership.' },
    { title: 'Vaayusastra Aerospace Workshop', tag: 'Aerospace', desc: 'Hands-on rocketry and aerospace aerodynamics.' },
    { title: 'Rhythm Art Fest 2K26', tag: 'Cultural Fest', desc: 'Annual extravaganza of dance, music and drama.' },
    { title: 'Chennai ATC (Air Traffic Control) Visit', tag: 'Aviation', desc: 'Observing live radar operations and ground control.' },
    { title: 'Zero to Cockpit Programme', tag: 'Pilot Training', desc: 'From DGCA ground theory to multi-engine flying.' },
    { title: 'Thailand Student Mobility Programme', tag: 'Global Exchange', desc: 'International academic exchange and cultural immersion.' },
    { title: 'Annual Sports Day & Athletics', tag: 'Sports', desc: 'Field events, track races and team championships.' },
    { title: 'Margazhi Utsavam Festivities', tag: 'Traditions', desc: 'Classical music, dance traditions and community unity.' },
    { title: 'Wings India 2026 Aviation Summit', tag: 'Aviation', desc: 'Representing ASET at Asia’s largest civil aviation show.' },
    { title: 'Pondicherry Airport & In-Flight Training', tag: 'Flight Ops', desc: 'Real-world flight dispatch and passenger service.' },
  ];

  // 8 PPE Lab Categories from Document
  const ppeCategories = [
    {
      title: 'Head Protection',
      icon: HardHat,
      examples: 'Industrial safety helmets, protective bump caps, safety hoods, hard hats',
      desc: 'Tested against falling object impacts, electrical contact, and chemical splashes in industrial zones.',
    },
    {
      title: 'Eye & Face Protection',
      icon: Eye,
      examples: 'Safety goggles, face shields, welding masks, UV protective visors',
      desc: 'Guarding against flying debris, radiant heat, chemical vapours, and welding flash.',
    },
    {
      title: 'Hearing Protection',
      icon: Ear,
      examples: 'Noise-attenuating earmuffs, silicone earplugs, banded protectors',
      desc: 'Protecting against high decibel exposure around jet aprons, heavy plant machinery, and boilers.',
    },
    {
      title: 'Respiratory Protection',
      icon: Wind,
      examples: 'Dust respirators, chemical cartridge masks, Self-Contained Breathing Apparatus (SCBA)',
      desc: 'Essential for toxic vapour response, confined space entry, and industrial firefighting drills.',
    },
    {
      title: 'Hand & Arm Protection',
      icon: ShieldCheck,
      examples: 'Kevlar cut-resistant gloves, chemical neoprene gauntlets, cryogenic & high-heat mittens',
      desc: 'Hands-on practice ensuring tactile dexterity while preventing severe mechanical and thermal injuries.',
    },
    {
      title: 'Body Protection',
      icon: Users,
      examples: 'High-visibility reflective jackets, fire-retardant suits, anti-static boiler suits',
      desc: 'Full-body protection designed for refinery operations, airport aprons, and dockyard logistics.',
    },
    {
      title: 'Work at Height Equipment',
      icon: Layers,
      examples: 'Full body safety harnesses, shock-absorbing lanyards, rope grab fall arresters',
      desc: 'Rigorous scaffold climbing and elevated platform anchoring drills.',
    },
    {
      title: 'Foot Protection',
      icon: Footprints,
      examples: 'Steel-toe safety shoes, puncture-resistant midsoles, chemical-resistant gumboots',
      desc: 'Protection against heavy crush hazards, slippery oil surfaces, and high voltage step potentials.',
    },
  ];

  return (
    <div className="relative w-full bg-[#faf8f5] text-stone-900 font-sans selection:bg-[#991b1b] selection:text-white overflow-x-hidden">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -left-20 w-[520px] h-[520px] rounded-full bg-orange-600/10 blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-20 w-[480px] h-[480px] rounded-full bg-amber-500/10 blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -left-20 w-[480px] h-[480px] rounded-full bg-red-600/8 blur-3xl -z-10"
      />

      {/* ========================================================= */}
      {/* 1. HERO / BANNER SECTION (Designed Identical to About Page)*/}
      {/* Architectural Campus Background + Centered Heading +       */}
      {/* Centered Buttons + Bottom Crimson Red Tri-Panel Dock      */}
      {/* ========================================================= */}
      <section
        id="hero"
        className="relative w-full min-h-[90vh] lg:min-h-[94vh] flex flex-col justify-between overflow-hidden pt-28 sm:pt-36 lg:pt-40 bg-stone-950 text-white select-none"
      >
        {/* Background Image: College Campus Building Architecture with Cinematic Vignette */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            src={asetCollegePathway}
            alt="ASET College Campus Building Pathway"
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
            <span>ASET COLLEGE · CAMPUS LIFE · STUDENT EXPERIENCES &amp; ACTIVITIES</span>
          </motion.div>

          {/* Monumental Headline matching reference screenshot */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: LUXURY_EASE }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-white tracking-tight leading-[1.08] sm:leading-[1.05] max-w-4xl"
          >
            Life at ASET: Where <span className="text-gradient-title font-extrabold">Learning Feels Alive</span>
          </motion.h1>

          {/* Subtext Paragraph matching reference structure & ASET content */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: LUXURY_EASE }}
            className="mt-5 text-sm sm:text-base md:text-lg text-stone-200/95 leading-relaxed max-w-3xl font-sans font-normal"
          >
            At ASET, college life goes beyond attending classes and writing examinations. Students discover their abilities, build lifelong friendships, explore global career interests and learn through vibrant experiences, inspiring people and memorable moments across Chennai and Coimbatore.
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
              onClick={() => scrollToSection('gallery')}
              className="px-9 sm:px-11 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-[#991b1b] hover:bg-[#851117] active:bg-[#7f1d1d] text-white font-semibold text-sm sm:text-base tracking-wide shadow-xl shadow-black/50 border border-red-500/30 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Explore Student Gallery</span>
              <ArrowUpRight className="w-4 h-4 text-white/80" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="button"
              onClick={() => openVideoWithTopic('Campus Highlights & Student Experience')}
              className="px-7 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white font-semibold text-sm sm:text-base tracking-wide backdrop-blur-md border border-white/25 transition-all cursor-pointer flex items-center gap-2"
            >
              <Play className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span>Watch Video Tour</span>
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
              
              {/* Panel 1: Cultural & Fests */}
              <div
                onClick={() => scrollToSection('talent-stage')}
                className="p-6 sm:p-7 lg:p-8 space-y-2 hover:bg-white/5 transition-colors text-left cursor-pointer group"
              >
                <div className="flex items-center gap-2.5 text-white">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-amber-300">
                    <Music className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg tracking-tight group-hover:text-amber-200 transition-colors">
                    Fests &amp; Celebrations
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed font-sans">
                  Annual Rhythm Art Fest, Entbiz Art Fest, Margazhi Utsavam, Onam celebrations, talent shows, and fresher welcome parties.
                </p>
              </div>

              {/* Panel 2: Industry & Outbound */}
              <div
                onClick={() => scrollToSection('memorable-experiences')}
                className="p-6 sm:p-7 lg:p-8 space-y-2 hover:bg-white/5 transition-colors text-left cursor-pointer group"
              >
                <div className="flex items-center gap-2.5 text-white">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-amber-300">
                    <Plane className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg tracking-tight group-hover:text-amber-200 transition-colors">
                    In-Flight &amp; Outbound Trips
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed font-sans">
                  In-flight training flights to Goa and Bengaluru, Chennai ATC radar room visits, airport expos, and outbound study trips.
                </p>
              </div>

              {/* Panel 3: Residential Living & Labs */}
              <div
                onClick={() => scrollToSection('hostel-facilities')}
                className="p-6 sm:p-7 lg:p-8 space-y-2 hover:bg-white/5 transition-colors text-left cursor-pointer group"
              >
                <div className="flex items-center gap-2.5 text-white">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-amber-300">
                    <Home className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg tracking-tight group-hover:text-amber-200 transition-colors">
                    Hostel &amp; Specialized Labs
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed font-sans">
                  Shared student hostels, South Indian buffet mess, 24/7 security, group medical insurance, and specialized PPE / aviation labs.
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 2. AT A GLANCE HIGHLIGHTS STRIP                           */}
      {/* ========================================================= */}
      <section id="at-a-glance" className="relative z-20 py-10 sm:py-14 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-700">
              CAMPUS LIFE AT A GLANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mt-1 font-serif font-semibold">
              An Enriching Ecosystem <span className="text-gradient-title font-bold">Beyond the Classroom</span>
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
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">2+</span>
              <div className="mt-3">
                <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Annual Fests</p>
                <p className="text-xs text-stone-600 mt-0.5">Rhythm &amp; Entbiz Art Fests</p>
              </div>
            </div>

            <div className="bg-[#faf8f5] p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col justify-between">
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">100%</span>
              <div className="mt-3">
                <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Practical Labs</p>
                <p className="text-xs text-stone-600 mt-0.5">Drones &amp; Jet Engine Models</p>
              </div>
            </div>

            <div className="bg-[#faf8f5] p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col justify-between">
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">12+</span>
              <div className="mt-3">
                <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Annual Events</p>
                <p className="text-xs text-stone-600 mt-0.5">Expos, Fests &amp; Elections</p>
              </div>
            </div>

            <div className="bg-[#faf8f5] p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col justify-between col-span-2 lg:col-span-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">3,000+</span>
              <div className="mt-3">
                <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Alumni Network</p>
                <p className="text-xs text-stone-600 mt-0.5">Lifelong Friendships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. IT STARTS FROM DAY ONE                                 */}
      {/* ========================================================= */}
      <section id="day-one" className="py-16 sm:py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <ScrollEyebrow className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-700 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                FIRST STEPS ON CAMPUS
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight mt-3">
              It Starts <span className="text-gradient-title font-bold">From Day One</span>
            </ScrollHeading>
            <ScrollParagraph className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed font-sans">
              From the moment you step onto our Chennai or Coimbatore campus, you are welcomed into a vibrant community designed to help you settle in, find your mentors, and build connections that last a lifetime.
            </ScrollParagraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1: Orientation */}
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-red-700 uppercase tracking-wider">
                  Step 01 · Induction
                </span>
                <h3 className="text-xl font-bold text-stone-900 mt-1 font-serif font-semibold">
                  Orientation &amp; Welcome
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                  A welcoming orientation introduces students to the campus infrastructure, department mentors, semester courses, and career opportunities ahead.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Academic &amp; Hostel Guidance</span>
              </div>
            </div>

            {/* Card 2: Fresher's Party */}
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <PartyPopper className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">
                  Step 02 · Celebration
                </span>
                <h3 className="text-xl font-bold text-stone-900 mt-1 font-serif font-semibold">
                  Fresher&apos;s Party
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                  A lively celebration for new entrants to meet senior students, showcase informal talents, break the ice, and begin building enduring friendships.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Music, Games &amp; Senior Interactions</span>
              </div>
            </div>

            {/* Card 3: Campus Community */}
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">
                  Step 03 · Belonging
                </span>
                <h3 className="text-xl font-bold text-stone-900 mt-1 font-serif font-semibold">
                  Campus Community
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                  Year-round activities, celebrations, sports leagues, and shared community experiences bring the multicultural campus community together.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Multicultural Cohesion</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. PHOTOS, VIDEOS AND STUDENT MEMORIES (GALLERY)          */}
      {/* ========================================================= */}
      <section id="gallery" className="py-16 sm:py-24 bg-white border-y border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <ScrollEyebrow className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-700" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                PHOTOS, VIDEOS &amp; STUDENT MEMORIES
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight mt-3">
              Explore Our Living <span className="text-gradient-title font-bold">Campus Gallery</span>
            </ScrollHeading>
            <ScrollParagraph className="text-base text-stone-600 mt-3 font-sans">
              The campus gallery features freshers’ celebrations, aviation training, Onam and other festivals, graduation ceremonies, sports competitions, airport visits, industrial trips, blood donation camps, international exchange activities, grooming sessions, fire-safety demonstrations, and guest lectures.
            </ScrollParagraph>
          </div>

          {/* Gallery Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'fests', label: 'Fests & Events' },
              { id: 'festivals', label: 'Festivals' },
              { id: 'airport', label: 'Airport & In-Flight' },
              { id: 'visits', label: 'Industrial Visits & Trips' },
              { id: 'sports', label: 'Sports' },
              { id: 'ceremonies', label: 'Ceremonies & Placements' },
              { id: 'classroom', label: 'Campus & Classroom' },
            ].map((filter) => {
              const isSelected = activeGalleryFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveGalleryFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-[#991b1b] text-white shadow-sm'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* Filtered Gallery Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredGallery.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedPhoto({ src: item.image, title: item.title, category: item.categoryLabel })}
                  className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-stone-900 border border-stone-200 shadow-sm hover:shadow-xl transition-all cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity pointer-events-none" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-stone-950/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-semibold">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-sm sm:text-base font-serif font-semibold leading-snug">
                      {item.title}
                    </h4>
                    <span className="text-xs text-amber-300 font-semibold flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Click to view full photo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. CAMPUS LIFE ON VIDEO (FEATURED TOPICS)                 */}
      {/* ========================================================= */}
      <section id="videos" className="py-16 sm:py-24 bg-stone-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <ScrollEyebrow className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-400">
                CAMPUS LIFE ON VIDEO
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight mt-3">
              Watch Our Memorable Moments <span className="text-gradient-title font-bold">Come to Life</span>
            </ScrollHeading>
            <ScrollParagraph className="text-base sm:text-lg text-stone-300 mt-4 leading-relaxed font-sans">
              Featured YouTube and Instagram topics covering academic summits, aviation workshops, cultural arts festivals, and student flight training.
            </ScrollParagraph>
          </div>

          {/* Featured Video Stage */}
          <div className="rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 shadow-2xl mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
              <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-video bg-black group">
                <video
                  src={campusVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors pointer-events-none" />
                <button
                  type="button"
                  onClick={() => openVideoWithTopic('Campus Highlights: ASET Life in Action')}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#991b1b] hover:bg-[#851117] text-white flex items-center justify-center shadow-xl border border-red-400/30 transition-transform group-hover:scale-110 cursor-pointer"
                  aria-label="Play Video"
                >
                  <Play className="w-6 h-6 fill-white ml-1" />
                </button>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  Featured Stream
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-white">
                  A Day in the Life of an ASET Student
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed font-sans">
                  Experience morning lectures in smart classrooms, practical aviation and safety simulation drills, afternoon flight simulator sessions, and evening hostel recreation.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => openVideoWithTopic('A Day in the Life of an ASET Student')}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-wide border border-white/20 transition-all cursor-pointer inline-flex items-center gap-2"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Watch Full Showcase</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 12 Document Video Topics Grid */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest">
              Explore 12 Featured Campus Video Topics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {videoTopics.map((topic) => (
                <div
                  key={topic.title}
                  onClick={() => openVideoWithTopic(topic.title)}
                  className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-red-500/50 hover:bg-stone-900 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-2">
                      {topic.tag}
                    </span>
                    <h5 className="font-bold text-base text-white group-hover:text-amber-200 transition-colors font-serif font-semibold">
                      {topic.title}
                    </h5>
                    <p className="text-xs text-stone-400 mt-1.5 leading-relaxed font-sans">
                      {topic.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs font-semibold text-stone-300 group-hover:text-white">
                    <span className="flex items-center gap-1.5 text-red-400">
                      <Play className="w-3.5 h-3.5 fill-red-400" />
                      <span>Watch Topic</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. A CAMPUS THAT NEVER FEELS ROUTINE                      */}
      {/* ========================================================= */}
      <section id="campus-routine" className="py-16 sm:py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <ScrollEyebrow className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-amber-700">
                DYNAMIC LEARNING CALENDAR
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight mt-3">
              A Campus Routine That <span className="text-gradient-title font-bold">Never Feels Routine</span>
            </ScrollHeading>
            <ScrollParagraph className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed font-sans">
              Routine is replaced with dynamic engagement. Every week brings industry visitors, port and hangar tours, or colourful festival celebrations that unite our multicultural student body.
            </ScrollParagraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Expert Lectures */}
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 font-serif font-semibold">Expert Lectures</h4>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                  Industry professionals, airline captains, senior safety auditors, and port logistics directors share real-world career insights and practical knowledge directly in our lecture halls.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Weekly Masterclasses</span>
              </div>
            </div>

            {/* Industrial Visits */}
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 font-serif font-semibold">Industrial Visits</h4>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                  Students observe real industry operations first-hand, connecting classroom textbook theory with actual workplace practices at airports, seaports, and industrial complexes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Monthly Field Operations</span>
              </div>
            </div>

            {/* Festival Celebrations */}
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <PartyPopper className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 font-serif font-semibold">Festival Celebrations</h4>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                  Cultural celebrations bring students together through traditions, colour, and shared culinary experiences, celebrating Onam, Pongal, Diwali, Christmas, and Margazhi Utsavam.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pan-Indian Harmony</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. WHERE TALENT FINDS ITS STAGE                           */}
      {/* ========================================================= */}
      <section id="talent-stage" className="py-16 sm:py-24 bg-white border-y border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Visual Collage Left */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200 aspect-[4/3] group">
                <img
                  src={admDance}
                  alt="Rhythm Art Cultural Fest at ASET"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                    Annual Cultural Extravaganza
                  </span>
                  <h4 className="text-xl font-serif font-semibold">Rhythm Art Fest &amp; Entbiz Stage</h4>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-stone-200 shadow-sm">
                  <img src={admFreshersStage} alt="Stage Performance" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-stone-200 shadow-sm">
                  <img src={photo6} alt="Student Celebrations" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Content Details Right */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollEyebrow className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-700" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                  CREATIVITY &amp; EXPRESSION
                </span>
              </ScrollEyebrow>

              <ScrollHeading className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900 tracking-tight">
                Where Student Talent <span className="text-gradient-title font-bold">Finds Its Stage</span>
              </ScrollHeading>

              <ScrollParagraph className="text-base text-stone-700 leading-relaxed font-sans">
                Every student possesses unique talents beyond their technical studies. ASET provides high-profile institutional platforms where musical, theatrical, choreographic, and intellectual abilities can flourish in front of peers and industry guests.
              </ScrollParagraph>

              <div className="space-y-4 pt-2">
                
                {/* 1. Rhythm Art Cultural Fest */}
                <div className="p-5 rounded-2xl bg-[#faf8f5] border border-stone-200/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-red-800 font-bold text-base font-serif font-semibold">
                    <Music className="w-4 h-4 text-red-700" />
                    <span>Rhythm Art Cultural Fest &amp; Entbiz Art Fest</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                    A celebrated platform for music, dance, dramatic arts, fashion, and stage performances that draws talent from across both campuses.
                  </p>
                </div>

                {/* 2. Quiz Competitions */}
                <div className="p-5 rounded-2xl bg-[#faf8f5] border border-stone-200/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-base font-serif font-semibold">
                    <Trophy className="w-4 h-4 text-amber-700" />
                    <span>Quiz Competitions &amp; Hackathons</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                    Activities that encourage broad domain knowledge, quick reasoning, and friendly academic competition across colleges.
                  </p>
                </div>

                {/* 3. Talent Shows & Student Events */}
                <div className="p-5 rounded-2xl bg-[#faf8f5] border border-stone-200/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-sky-800 font-bold text-base font-serif font-semibold">
                    <Sparkles className="w-4 h-4 text-sky-700" />
                    <span>Talent Shows &amp; Student Events</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                    Regular opportunities to showcase creative writing, fine arts, photography, public speaking, and innovative project ideas.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. BEYOND FUN: REAL GROWTH HAPPENS HERE                   */}
      {/* ========================================================= */}
      <section id="real-growth" className="py-16 sm:py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <ScrollEyebrow className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-700" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                HOLISTIC DEVELOPMENT
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight mt-3">
              Beyond Fun: <span className="text-gradient-title font-bold">Real Growth Happens Here</span>
            </ScrollHeading>
            <ScrollParagraph className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed font-sans">
              ASET highlights co-curricular and professional activities that cultivate confidence, civic responsibility, global awareness, and hands-on operational leadership.
            </ScrollParagraph>
          </div>

          {/* 10 Core Growth Pillars from Document */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {[
              {
                title: 'Career Counselling and Career Planning',
                desc: 'One-on-one professional guidance mapping individual student strengths to airline, logistics, safety, and business corporate pathways.',
              },
              {
                title: 'Internships and Industry Exposure',
                desc: 'Curricular internships providing hands-on operational training with recognized domestic and international placement partners.',
              },
              {
                title: 'Leadership Activities & Annual Student Council Elections',
                desc: 'Democratic student council campaigns and elections teaching governance, team leadership, and event execution.',
              },
              {
                title: 'Blood Donation Camps & Social Responsibility',
                desc: 'Annual community service programmes, civic sensitization, disaster response training, and voluntary health camps.',
              },
              {
                title: 'Aviation Expos, Aerospace Events & Industry Visits',
                desc: 'Exclusive delegations to Wings India, AEDEX Expo Delhi, airport air traffic control facilities, and aircraft maintenance hangars.',
              },
              {
                title: 'International Summits and Global Delegations',
                desc: 'Student delegations participating in cross-border youth summits and international academic conferences.',
              },
              {
                title: 'HR Summits, Industry Conferences and AI Events',
                desc: 'Direct interaction with chief human resource officers and industry heads discussing the future of AI and logistics automation.',
              },
              {
                title: 'Guest Lectures, Seminars & Knowledge-Sharing',
                desc: 'Continuous interactive knowledge exchange with industry practitioners, DGCA officials, and seasoned corporate directors.',
              },
              {
                title: 'Entrepreneurship, Innovation & Problem-Solving',
                desc: 'Incubation mentorship, business case competitions, and start-up pitch forums that transform ideas into scalable solutions.',
              },
              {
                title: 'Personality Development & Workplace Communication',
                desc: 'Intensive grooming labs covering corporate etiquette, interview presentation, bilingual fluency, and executive conduct.',
              },
            ].map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-red-50 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif font-semibold">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. MEMORABLE STUDENT EXPERIENCES                         */}
      {/* ========================================================= */}
      <section id="memorable-experiences" className="py-16 sm:py-24 bg-white border-y border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <ScrollEyebrow className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-700" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                SIGNATURE EXPERIENCES
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight mt-3">
              Memorable Moments &amp; <span className="text-gradient-title font-bold">Student Experiences</span>
            </ScrollHeading>
            <ScrollParagraph className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed font-sans">
              Three standout experiential milestones that define the ASET student journey and create unforgettable memories.
            </ScrollParagraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* 1. Cricket Tournaments */}
            <div className="bg-[#faf8f5] p-7 sm:p-8 rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 text-red-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-2xs">
                  <Trophy className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 font-serif font-semibold">Cricket Tournaments</h4>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                  High-energy annual inter-department and inter-campus cricket championships that build team camaraderie, sportsmanship, and tactical focus.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200/70 text-xs font-semibold text-red-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Inter-Campus Premier League</span>
              </div>
            </div>

            {/* 2. Student Trips */}
            <div className="bg-[#faf8f5] p-7 sm:p-8 rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 text-amber-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-2xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 font-serif font-semibold">Student Trips</h4>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                  Shared outbound training and educational expeditions to heritage sites, national industrial hubs, and aerospace technology clusters.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200/70 text-xs font-semibold text-amber-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Outbound Learning Expeditions</span>
              </div>
            </div>

            {/* 3. In-flight Training */}
            <div className="bg-[#faf8f5] p-7 sm:p-8 rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 text-sky-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-2xs">
                  <Plane className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 font-serif font-semibold">In-Flight Training</h4>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                  The curriculum highlights live in-flight passenger handling and flight dispatch training from Chennai airport to top destinations including Goa and Bengaluru.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200/70 text-xs font-semibold text-sky-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Chennai to Goa &amp; Bengaluru Flights</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. CLASSROOMS, COMPUTER LAB & CENTRE FOR EXCELLENCE       */}
      {/* ========================================================= */}
      <section id="learning-spaces" className="py-16 sm:py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <ScrollEyebrow className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-700" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                LEARNING ENVIRONMENTS
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight mt-3">
              Classrooms, Labs &amp; <span className="text-gradient-title font-bold">Centre for Excellence</span>
            </ScrollHeading>
            <ScrollParagraph className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed font-sans">
              ASET describes its classrooms as well-furnished, airy and equipped with smart boards, e-learning tools and audio-visual teaching aids. Separate lecture halls are designated for departments, with scheduling coordinated by the academic department.
            </ScrollParagraph>
          </div>

          {/* 8 Classroom Features Grid */}
          <div className="mb-14">
            <h4 className="text-xs font-mono font-bold text-stone-500 uppercase tracking-widest mb-4">
              Key Classroom Features
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                'Motivated Faculty Mentors',
                'Technology-Enabled Learning',
                'Air-Conditioned Classrooms',
                'English & Hindi Support',
                'Curated Study Materials',
                'Modern Infrastructure',
                'Knowledge Enrichment Talks',
                'Grooming & Professionalism',
              ].map((feat) => (
                <div key={feat} className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs text-xs sm:text-sm font-semibold text-stone-800 flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3 Specialized Space Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Computer Lab */}
            <div className="p-7 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
                <Monitor className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-stone-900 font-serif font-semibold">Computer Lab</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Computer classrooms help students develop business software expertise and technology skills. Students learn how software supports gathering, analysing and presenting information for effective corporate decisions.
              </p>
            </div>

            {/* Centre for Excellence */}
            <div className="p-7 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-stone-900 font-serif font-semibold">Centre for Excellence</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Dedicated focus areas include workplace safety awareness, personal development, business etiquette, professional grooming, presentation delivery, workplace conduct, and public safety awareness.
              </p>
            </div>

            {/* Case Studies */}
            <div className="p-7 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-stone-900 font-serif font-semibold">Case Studies Methodology</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Faculty use real-world industry case studies to help students analyse complex challenges in simulated workplace situations, teaching structured analysis that allows several innovative solutions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 12. LIBRARY AND DIGITAL RESOURCES                         */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#faf8f5] border border-stone-200 shadow-xs">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-700">
                KNOWLEDGE REPOSITORY
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-stone-900 mt-2">
                Library and Digital Resources
              </h3>
              <p className="text-sm sm:text-base text-stone-600 mt-3 font-sans">
                All ASET students are registered library members upon admission. The library is open from <strong>10:00 AM to 4:00 PM</strong> on all working days.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-200">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-base font-serif font-semibold">
                  <Library className="w-5 h-5 text-red-700" />
                  <span>Books &amp; Non-Book Material</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  Registered members can borrow textbooks, national and international journals, aviation charts, safety standards, and learning materials for prescribed lending periods.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-base font-serif font-semibold">
                  <Globe className="w-5 h-5 text-red-700" />
                  <span>Digital Library &amp; Internet</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  Dedicated computer terminals provide high-speed internet access, institutional e-journal subscriptions, with safe content filtering and an acceptable-use policy.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-base font-serif font-semibold">
                  <Coffee className="w-5 h-5 text-red-700" />
                  <span>Quiet Study Space</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  A silent, meticulously organised environment providing comfortable reading carrels for focused revision, exam preparation, and group research papers.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 13. HOSTEL FACILITIES: A HOME AWAY FROM HOME              */}
      {/* ========================================================= */}
      <section id="hostel-facilities" className="py-16 sm:py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <ScrollEyebrow className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-700" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                RESIDENTIAL LIVING
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight mt-3">
              Hostel Living: <span className="text-gradient-title font-bold">A Home Away from Home</span>
            </ScrollHeading>
            <ScrollParagraph className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed font-sans">
              ASET provides separate hostels for male and female students. Many residents share rooms with peers, encouraging community living, lifelong friendship, and social skills in a structured, peaceful environment.
            </ScrollParagraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Shared Rooms */}
            <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center">
                <Home className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-stone-900 font-serif font-semibold">Shared Rooms</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Shared accommodation encourages active peer interaction, mutual learning, and community living, welcoming students from different states of India into one cohesive family.
              </p>
            </div>

            {/* Mess & Meals */}
            <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-stone-900 font-serif font-semibold">Mess &amp; Wholesome Meals</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Wholesome South Indian vegetarian and non-vegetarian food is prepared in modern hygienic kitchens and served buffet-style in the spacious hostel dining hall.
              </p>
            </div>

            {/* Group Medical Insurance */}
            <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-stone-900 font-serif font-semibold">Group Medical Insurance</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Mandatory for all hostel residents, arranged centrally as a comprehensive group policy through <strong>New India Assurance Co. Ltd.</strong> for complete peace of mind.
              </p>
            </div>

            {/* Medical Support */}
            <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-stone-900 font-serif font-semibold">Medical Support</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Institutional tie-ups with reputable multispeciality hospitals nearby guarantee immediate 24/7 medical response, ambulance support, and physician visits whenever needed.
              </p>
            </div>

            {/* Visitors Policy */}
            <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-stone-900 font-serif font-semibold">Authorized Visitors</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Parents provide an authorized visitor list during admission. Visitors are warmly welcomed on holidays from <strong>11:00 AM to 6:00 PM</strong> in designated guest areas.
              </p>
            </div>

            {/* Hostel Rules */}
            <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-stone-900 font-serif font-semibold">Structured Environment</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Hostel guidelines balance local culture, discipline, and study hours to foster peaceful co-existence, security, and focus. Full details are shared upon admission.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 14. HANDS-ON LABS: WHERE THEORY MEETS PRACTICE            */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-white border-t border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <ScrollEyebrow className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-700" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                PRACTICAL FACILITIES
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight mt-3">
              Hands-On Labs: Where <span className="text-gradient-title font-bold">Theory Meets Practice</span>
            </ScrollHeading>
            <ScrollParagraph className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed font-sans">
              ASET highlights practical learning through industry-grade equipment, working scale models, and specialized simulation facilities. Aviation students work with aircraft-related models and engineering equipment, while logistics students learn using scale models of warehouses and tankers.
            </ScrollParagraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Aviation & Engineering Lab */}
            <div className="p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-800 flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h4 className="text-lg font-bold text-stone-900 font-serif font-semibold">Aviation &amp; Engineering Lab</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Equipped with aircraft engines, aero-engineering cutaways, turbine components, and detailed airport model layouts.
              </p>
            </div>

            {/* 2. Drone & RC Aircraft Zone */}
            <div className="p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h4 className="text-lg font-bold text-stone-900 font-serif font-semibold">Drone &amp; RC Aircraft Zone</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Training multi-rotor drones, telemetry systems, flight controllers, and remote-controlled fixed-wing aircraft models.
              </p>
            </div>

            {/* 3. 3D Printing & Prototyping */}
            <div className="p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h4 className="text-lg font-bold text-stone-900 font-serif font-semibold">3D Printing &amp; Prototyping</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Engineering prototypes, rapid design modeling, CAD slicing, and scale aerodynamic fabrication using precision 3D printing.
              </p>
            </div>

            {/* 4. Measurement & Electrical Instruments */}
            <div className="p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                04
              </div>
              <h4 className="text-lg font-bold text-stone-900 font-serif font-semibold">Measurement &amp; Electrical Instruments</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Calibration benches, precision measurement tools, electrical circuit testers, multimeters, and avionics sensor testing boards.
              </p>
            </div>

            {/* 5. Logistics Miniatures */}
            <div className="p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xs">
                05
              </div>
              <h4 className="text-lg font-bold text-stone-900 font-serif font-semibold">Logistics Miniatures</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Scale working models of automated warehouses, cross-docking facilities, ocean container tankers, and supply chain hubs.
              </p>
            </div>

            {/* 6. Fire & Safety Equipment */}
            <div className="p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xs">
                06
              </div>
              <h4 className="text-lg font-bold text-stone-900 font-serif font-semibold">Fire &amp; Safety Equipment</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Practical exposure to Class A-F fire extinguishers, hydrant lines, sprinkler risers, breathing gear, and protective emergency shields.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 15. PERSONAL PROTECTIVE EQUIPMENT (PPE) LABORATORY        */}
      {/* ========================================================= */}
      <section id="ppe-laboratory" className="py-16 sm:py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <ScrollEyebrow className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-700" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                SAFETY SPECIALIZATION
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight mt-3">
              Personal Protective Equipment <span className="text-gradient-title font-bold">(PPE) Laboratory</span>
            </ScrollHeading>
            <ScrollParagraph className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed font-sans">
              The PPE Laboratory is presented as an industry-oriented facility for practical training in workplace safety and hazard protection. Students learn hazard identification, risk assessment, and the correct selection and maintenance of certified personal protective equipment.
            </ScrollParagraph>
            <p className="text-xs sm:text-sm text-stone-500 mt-2 font-mono">
              Training examples cover construction, manufacturing, oil &amp; gas, firefighting, chemical processing, electrical maintenance, welding, and confined-space operations.
            </p>
          </div>

          {/* 8 PPE Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ppeCategories.map((ppe) => {
              const Icon = ppe.icon;
              return (
                <div
                  key={ppe.title}
                  className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-base text-stone-900 font-serif font-semibold">{ppe.title}</h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans">{ppe.desc}</p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] font-mono text-red-800">
                    <strong className="block text-stone-500">Gear Examples:</strong>
                    <span>{ppe.examples}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 16. COME AND EXPERIENCE ASET (VISIT & CONTACT)            */}
      {/* ========================================================= */}
      <section id="visit-experience" className="py-16 sm:py-24 bg-white border-t border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900 to-[#7f1d1d] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-stone-800">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
                IN-PERSON CAMPUS EXPERIENCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight mt-2">
                Come and <span className="text-gradient-title font-bold">Experience ASET</span>
              </h2>
              <p className="text-sm sm:text-base text-stone-300 mt-4 leading-relaxed font-sans">
                Prospective students and parents are invited to visit the Chennai or Coimbatore campus, meet active students and admissions counsellors, and explore the labs, library, and hostel facilities in person.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              
              {/* Chennai */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-base font-serif font-semibold">
                  <Building className="w-5 h-5" />
                  <span>Chennai Campus Visit Desk</span>
                </div>
                <div className="text-xs text-stone-300 space-y-1 font-mono">
                  <p>Admissions Call: <a href="tel:+919159499973" className="text-white font-bold hover:underline">+91 91594 99973 / 74</a></p>
                  <p>Location: Bangalore Highway, Kuthambakkam, Chennai</p>
                </div>
                <div className="pt-2 flex flex-wrap gap-2">
                  <a
                    href="https://wa.me/919159499973"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>WhatsApp Chennai Desk</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      if (onNavigateToCampuses) onNavigateToCampuses('#chennai-campus');
                    }}
                    className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Campus Details</span>
                  </button>
                </div>
              </div>

              {/* Coimbatore */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-base font-serif font-semibold">
                  <UtensilsCrossed className="w-5 h-5" />
                  <span>Coimbatore Campus Visit Desk</span>
                </div>
                <div className="text-xs text-stone-300 space-y-1 font-mono">
                  <p>Admissions Call: <a href="tel:+919159499975" className="text-white font-bold hover:underline">+91 91594 99975 / 77</a></p>
                  <p>Location: Varathaiyangar Palayam, Saravanampatti, Coimbatore</p>
                </div>
                <div className="pt-2 flex flex-wrap gap-2">
                  <a
                    href="https://wa.me/919159499975"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>WhatsApp Coimbatore Desk</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      if (onNavigateToCampuses) onNavigateToCampuses('#coimbatore-campus');
                    }}
                    className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Campus Details</span>
                  </button>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-stone-300 font-mono">
                Website: <a href="https://www.asetcollege.ac.in/about/campus-life" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">https://www.asetcollege.ac.in/about/campus-life</a> · Email: contact@asetsafety.ac.in
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
      {/* 17. BOTTOM MONUMENTAL CTA DOCK                            */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 bg-stone-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
            DISCOVER YOUR TALENTS AT ASET
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight">
            Ready to Begin Your <span className="text-gradient-title font-bold">Campus Life Journey?</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Connect with our admissions desk to schedule a personalized campus walkthrough, speak with current student ambassadors, and experience our learning facilities.
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
                  scrollToSection('gallery');
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

      {/* ========================================================= */}
      {/* MODAL: VIDEO TOPIC VIEWER                                 */}
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
              className="relative w-full max-w-4xl bg-[#141416] rounded-3xl overflow-hidden border border-white/15 shadow-2xl text-white"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-black/40">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-serif font-semibold text-white text-sm sm:text-base">
                    {videoModalTitle}
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

              {/* Video Player Container */}
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

              <div className="p-4 sm:p-5 bg-stone-950/80 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
                <span>ASET Official Campus Archive</span>
                <span className="text-amber-400 font-mono">HD 1080p Stream</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* MODAL: PHOTO GALLERY LIGHTBOX                             */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden border border-white/15 bg-black text-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 bg-stone-950/90 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider">
                    {selectedPhoto.category}
                  </span>
                  <h4 className="font-bold text-sm sm:text-base font-serif font-semibold">{selectedPhoto.title}</h4>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-hidden flex items-center justify-center bg-black">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
