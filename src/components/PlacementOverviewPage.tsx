import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  ChevronDown,
  ArrowRight,
  Briefcase,
  Layers,
  Check,
  TrendingUp,
  Target,
  FileCheck2,
  Compass,
  ArrowUpRight,
  Quote,
  Star,
  Plane,
  Truck,
  HardHat,
  Search,
  Filter,
} from 'lucide-react';
import { ScrollHeading, ScrollParagraph, ScrollEyebrow } from './ScrollTypography';

// College Building & Campus Imagery (Banner requirement)
import campusBuildingImg from '../assets/images/campus-building-user.jpg';
import campusModernImg from '../assets/images/aset-campus-modern-clean.png';
import graduatesImg from '../assets/images/aset-graduates-celebration.jpg';
import aviationStudentsImg from '../assets/images/aset-aviation-students.png';

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
import logoSpicejet from '../assets/images/placement-partners/home-co-spicejet.webp';
import logoAkasa from '../assets/images/placement-partners/home-co-akasa.webp';
import logoAiSats from '../assets/images/placement-partners/home-co-ai-sats.webp';
import logoAiExpress from '../assets/images/placement-partners/home-co-ai-express.webp';
import logoDhl from '../assets/images/placement-partners/lp-logistics-dhl.png';
import logoMaersk from '../assets/images/placement-partners/lp-logistics-maersk.png';
import logoMsc from '../assets/images/placement-partners/lp-logistics-msc.png';
import logoDbSchenker from '../assets/images/placement-partners/lp-logistics-dbschenker.png';
import logoTvs from '../assets/images/placement-partners/lp-logistics-tvs.png';
import logoDelhivery from '../assets/images/placement-partners/lg-logo-delhivery.png';
import logoNtc from '../assets/images/placement-partners/lg-logo-ntc.png';
import logoTenneco from '../assets/images/placement-partners/fs-logo-tenneco.png';
import logoSpr from '../assets/images/placement-partners/fs-logo-spr.png';
import logoCasagrand from '../assets/images/placement-partners/fs-logo-casagrand.png';
import logoDlf from '../assets/images/placement-partners/fs-logo-dlf.png';
import logoZoho from '../assets/images/placement-partners/fs-logo-zoho.png';
import logoKpmg from '../assets/images/partners/kpmg.webp';
import logoHaesok from '../assets/images/placement-partners/home-co-haesok.webp';
import logoVsa from '../assets/images/placement-partners/lg-co-vsa.webp';
import logoGalleon from '../assets/images/placement-partners/co-galleon.webp';
import logoPlanys from '../assets/images/placement-partners/lg-co-planys.webp';
import logoSprCity from '../assets/images/placement-partners/fs-co-sprcity.webp';

export interface PlacementOverviewPageProps {
  onBackToHome?: () => void;
  onOpenAdmissions?: () => void;
  onNavigateToAbout?: (hash?: string) => void;
  onNavigateToCampuses?: (hash?: string) => void;
  onNavigateToLife?: (hash?: string) => void;
  onNavigateToAdmissions?: (hash?: string) => void;
  onNavigateToRequirements?: (hash?: string) => void;
  onNavigateToFeePayment?: (hash?: string) => void;
  onNavigateToApplyOnline?: (hash?: string) => void;
  onNavigateToExamCell?: (hash?: string) => void;
  onNavigateToContact?: (hash?: string) => void;
}

export const PlacementOverviewPage: React.FC<PlacementOverviewPageProps> = ({
  onBackToHome,
  onOpenAdmissions,
  onNavigateToAbout,
  onNavigateToCampuses,
  onNavigateToLife,
  onNavigateToAdmissions,
  onNavigateToRequirements,
  onNavigateToFeePayment,
  onNavigateToApplyOnline,
  onNavigateToContact,
}) => {
  const [selectedStoryCategory, setSelectedStoryCategory] = useState<'all' | 'aviation' | 'logistics' | 'safety'>('all');
  const [selectedProcessStep, setSelectedProcessStep] = useState<number>(1);
  const [activeRecruiterCategory, setActiveRecruiterCategory] = useState<'all' | 'aviation' | 'logistics' | 'safety' | 'tech'>('all');

  const scrollToAnchor = (id: string) => {
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

  // 18 Official Recruiters from Document
  const recruiters = [
    { name: 'IndiGo', category: 'aviation', domain: 'Aviation & Airline Operations', logo: null, badge: 'Aviation Leader' },
    { name: 'SpiceJet Limited', category: 'aviation', domain: 'Commercial Aviation', logo: logoSpicejet, badge: 'Airlines' },
    { name: 'Akasa Air', category: 'aviation', domain: 'Aviation & Flight Operations', logo: logoAkasa, badge: 'Airlines' },
    { name: 'Air India SATS', category: 'aviation', domain: 'Airport Ground & Cargo Handling', logo: logoAiSats, badge: 'Ground Handling' },
    { name: 'DHL Supply Chain', category: 'logistics', domain: 'Global Express Logistics & 3PL', logo: logoDhl, badge: 'Global Logistics' },
    { name: 'Maersk Line', category: 'logistics', domain: 'Ocean Shipping & Container Fleet', logo: logoMaersk, badge: 'Maritime Shipping' },
    { name: 'MSC Mediterranean', category: 'logistics', domain: 'Global Container Shipping', logo: logoMsc, badge: 'Container Lines' },
    { name: 'DB Schenker', category: 'logistics', domain: 'Integrated Freight & Supply Chain', logo: logoDbSchenker, badge: 'Freight Forwarding' },
    { name: 'TVS Supply Chain Solutions', category: 'logistics', domain: 'End-to-End Enterprise Logistics', logo: logoTvs, badge: 'Supply Chain' },
    { name: 'NTC Logistics', category: 'logistics', domain: 'Heavy Over-Dimensional Transport', logo: logoNtc, badge: 'Specialized Freight' },
    { name: 'Delhivery', category: 'logistics', domain: 'Automated E-Commerce Logistics', logo: logoDelhivery, badge: 'Express Parcel' },
    { name: 'Tenneco Clean Air', category: 'safety', domain: 'Automotive Emission Systems', logo: logoTenneco, badge: 'Industrial Safety' },
    { name: 'SPR Group', category: 'safety', domain: 'High-Rise Construction & Infrastructure', logo: logoSpr, badge: 'Civil Safety' },
    { name: 'Casagrand Builder', category: 'safety', domain: 'Real Estate & Construction Safety', logo: logoCasagrand, badge: 'Infrastructure' },
    { name: 'DLF Limited', category: 'safety', domain: 'Commercial Real Estate Development', logo: logoDlf, badge: 'Real Estate' },
    { name: 'Zoho Corporation', category: 'tech', domain: 'Enterprise Software & Cloud Platforms', logo: logoZoho, badge: 'Technology' },
    { name: 'KPMG India', category: 'tech', domain: 'Advisory, Audit & Risk Management', logo: logoKpmg, badge: 'Global Advisory' },
    { name: 'Coca-Cola', category: 'tech', domain: 'Global FMCG & Supply Operations', logo: null, badge: 'Global FMCG' },
  ];

  const filteredRecruiters = activeRecruiterCategory === 'all'
    ? recruiters
    : recruiters.filter((r) => r.category === activeRecruiterCategory);

  // Structured 6-Step Placement Process from Document
  const placementSteps = [
    {
      step: 1,
      title: 'Company Invitations',
      desc: 'Leading companies and organizations are invited for on-campus recruitment through official communication and placement registration procedures.',
      highlights: ['Formal recruitment invitation mailings', 'Recruiter calendar scheduling', 'Corporate relationship facilitation'],
      icon: Mail,
      accent: 'border-orange-500/80 text-orange-600 bg-orange-50',
    },
    {
      step: 2,
      title: 'Recruitment Coordination',
      desc: 'Companies share their recruitment requirements, eligibility criteria, and job details with the Placement & Training Department.',
      highlights: ['Job profile & salary packaging details', 'Eligibility benchmarking & criteria setup', 'Departmental pre-screening coordination'],
      icon: FileCheck2,
      accent: 'border-blue-500/80 text-blue-600 bg-blue-50',
    },
    {
      step: 3,
      title: 'Student Registration',
      desc: 'Interested students register with the department after receiving company details and placement information.',
      highlights: ['Transparent candidate sign-ups', 'Verification of academic criteria', 'Enrollment into specific company tracks'],
      icon: Users,
      accent: 'border-emerald-500/80 text-emerald-600 bg-emerald-50',
    },
    {
      step: 4,
      title: 'Shortlisting Process',
      desc: 'If required, student resumes are shared with companies for preliminary shortlisting before interviews.',
      highlights: ['Standardized professional ASET resume packs', 'Corporate recruiter profile review', 'Preliminary screening confirmation'],
      icon: CheckCircle2,
      accent: 'border-purple-500/80 text-purple-600 bg-purple-50',
    },
    {
      step: 5,
      title: 'Campus Recruitment Drive',
      desc: 'Companies visit ASET College to conduct presentations, aptitude tests, technical rounds, group discussions, and personal interviews.',
      highlights: ['Pre-placement corporate talk (PPT)', 'Aptitude, technical & GD evaluations', 'One-on-one personal HR rounds'],
      icon: Building2,
      accent: 'border-red-500/80 text-red-600 bg-red-50',
    },
    {
      step: 6,
      title: 'Final Selection',
      desc: 'Selected candidates are announced by the company after completion of the recruitment process.',
      highlights: ['Official offer letter announcements', 'Corporate onboarding timelines', 'Alumni network integration'],
      icon: Award,
      accent: 'border-amber-500/80 text-amber-600 bg-amber-50',
    },
  ];

  // All 30 Alumni Testimonials from Document verbatim
  const alumniStories = [
    // Aviation
    {
      name: 'SUSHMITHA',
      company: 'SpiceJet Limited',
      category: 'aviation',
      program: 'Aviation Operations',
      image: homeStory3,
      quote: 'ASET provided me with practical knowledge and valuable guidance that prepared me well for the professional world.',
    },
    {
      name: 'B. PRASATH',
      company: 'Akasa Air',
      category: 'aviation',
      program: 'Aviation Management',
      image: homeStory4,
      quote: 'My journey at ASET has been truly rewarding. The faculty and learning environment helped me grow with confidence.',
    },
    {
      name: 'KASUKURTHI ARAVIND',
      company: 'Air India SATS',
      category: 'aviation',
      program: 'Aviation & Airport Operations',
      image: avAlumniAravind,
      quote: 'My journey in aviation began with the strong foundation I received from my professional degree.',
    },
    {
      name: 'BRINDHA',
      company: 'Air India Express',
      category: 'aviation',
      program: 'Aviation & Airport Service',
      image: avAlumniBrindha,
      quote: 'ASET gave me the foundation, and Air India Express gave me the opportunity to grow in aviation.',
    },
    {
      name: 'DEVA. P',
      company: 'Air India SATS',
      category: 'aviation',
      program: 'Aviation Cargo & Ground Support',
      image: avAlumniDeva,
      quote: 'My educational journey gave me the foundation, and my experience with Air India SATS is helping me grow with confidence in the aviation industry.',
    },
    {
      name: 'SYED ALI MUSTAFA',
      company: 'Air India SATS',
      category: 'aviation',
      program: 'Cargo & Aviation Security',
      image: avAlumniSyed,
      quote: 'My time at academic learning for the aviation industry, and working in cargo security is giving me the opportunity to apply what I learned in a real-world environment.',
    },
    {
      name: 'C. SAINATH',
      company: 'IndiGo',
      category: 'aviation',
      program: 'MBA (Aviation), 2022–23',
      image: null,
      quote: 'The college has a strong focus on hands-on learning, which has been incredibly beneficial in preparing me for the workforce.',
    },

    // Logistics & Shipping
    {
      name: 'ARUNACHALESAWARAN',
      company: 'Vinayak Shipping Agencies',
      category: 'logistics',
      program: 'MBA in Logistics & Shipping',
      image: lgAlumniArun,
      quote: 'My MBA in Logistics & Shipping helped me understand the shipping industry from both operational and business perspectives. It strengthened my communication and industry knowledge, which are essential when working with clients.',
    },
    {
      name: 'MEHARAJ S.',
      company: 'Galleon Shipping Agencies Sdn Bhd',
      category: 'logistics',
      program: 'MBA in Logistics & Shipping (Export Documentation Executive)',
      image: lgAlumniMeharaj,
      quote: 'My MBA in Logistics & Shipping gave me a strong understanding of export processes and documentation. It helped me build confidence in handling shipping documents with greater accuracy and responsibility. Today, I apply those skills every day in my role as an Export Documentation Executive.',
    },
    {
      name: 'NIRMAL KUMAR P',
      company: 'DHL Supply Chain Pvt Ltd',
      category: 'logistics',
      program: 'Logistics & Supply Chain Operations',
      image: homeStory2,
      quote: 'The hands-on learning and career opportunities at ASET gave me the confidence to prepare for my future.',
    },
    {
      name: 'FIRDHOUSE AHAMED',
      company: 'Haesok Shipping Private Limited',
      category: 'logistics',
      program: 'Freight Forwarding & Shipping',
      image: homeStory1,
      quote: 'ASET gave me the right guidance and practical exposure to build my confidence and take the next step in my career.',
    },
    {
      name: 'VARSHA M.',
      company: 'Planys Technology',
      category: 'logistics',
      program: 'MBA in Logistics & Shipping (Procurement & Logistics Executive)',
      image: lgAlumniVarsha,
      quote: 'My MBA in Logistics & Shipping gave me a clear understanding of how procurement and logistics work together. The course helped me develop a practical approach to sourcing, coordination, and movement of materials. These skills have been valuable in my current role as a Procurement & Logistics Executive.',
    },
    {
      name: 'T. SHAJAHAN',
      company: 'Classic Manpower Operations Pvt Ltd',
      category: 'logistics',
      program: 'MBA (L&S), 2019–22',
      image: null,
      quote: 'I am thankful to all my faculties and management staffs for leading me and setting a great example.',
    },
    {
      name: 'B. KOUSALYA',
      company: 'NRK Freight Forwarder',
      category: 'logistics',
      program: 'MBA (L&S), 2019–22',
      image: null,
      quote: 'ASET College has been a game-changer for me. The learning environment is excellent, and the facilities are state-of-the-art.',
    },

    // Industrial Safety
    {
      name: 'HAKKIM MAHMOOD B',
      company: 'SPR City',
      category: 'safety',
      program: 'Industrial Safety Engineering',
      image: fsAlumniHakkim,
      quote: 'I believe this is a very good institution, for students to update their knowledge and settle well in their future career. I would personally like to thank all the faculty members and the placement team for the wonderful support, guidance, and drive provided throughout my studies. Once again, thank you very much.',
    },
    {
      name: 'GOPINATH S',
      company: 'Tenneco Clean Air India Limited',
      category: 'safety',
      program: 'Fire & Industrial Safety Management',
      image: fsAlumniGopinath,
      quote: 'ASET College has created a wonderful opportunity for me. I have grown academically through industrial visits and various training programs. I sincerely thank the college management for providing this great opportunity. I am proud to study at this college.',
    },
    {
      name: 'S. PRATHEESH',
      company: 'NTC Logistics Pvt Limited',
      category: 'safety',
      program: 'Industrial Safety & Logistics',
      image: fsAlumniPratheesh,
      quote: 'The placement opportunities at our college are quite impressive and improve every year.',
    },
    {
      name: 'J. JEEVA',
      company: 'SPR Construction',
      category: 'safety',
      program: 'Safety Officer, Campus Placement',
      image: fsAlumniJeeva,
      quote: 'I have been placed as a Safety Officer at SPR Construction through the campus placement drive. The college fulfilled its commitment by arranging on-campus placement in a reputed company with a good salary for freshers. I sincerely thank all the faculty members and the placement team for their continuous support and guidance.',
    },
    {
      name: 'SANTHOSH KUMAR',
      company: 'Green Wats Construction',
      category: 'safety',
      program: 'B.Sc F&ISM, 2019–22',
      image: null,
      quote: 'This is one of the best college for learning safety. The teaching is good. Best classes and good infrastructure. And I get a job before completed my degree.',
    },
    {
      name: 'V. CHIDAMBARAM',
      company: 'JK Tyres',
      category: 'safety',
      program: 'PG EHSM, 2017–18',
      image: null,
      quote: 'This program provides a unique opportunity to learn various aspects of safety management and apply or observe them practically in the workplace.',
    },
    {
      name: 'AASHIL MOHAMMED',
      company: 'Sri Pondy Fire & Safety Equipments',
      category: 'safety',
      program: 'MBA (E&IS), 2019–22',
      image: null,
      quote: 'The faculty members were knowledgeable and supportive, and the curriculum was challenging and engaging.',
    },
    {
      name: 'D. JAIGANESH',
      company: 'Hyundai Glovis',
      category: 'safety',
      program: 'PG DEH & SM, 2017–18',
      image: null,
      quote: 'This college gave me sweet memories, faithful friends and a sense of confidence to face the challenges and turbulence in life.',
    },
    {
      name: 'S. SUNDAR',
      company: 'Hariharan Const.',
      category: 'safety',
      program: 'CC F&ISM, 2017–18',
      image: null,
      quote: 'The relationship between faculties and student is very cordial, which gave me an opportunity to excel in my area of interest.',
    },
    {
      name: 'V. AMRITHRAM',
      company: 'ACT Fibre Net',
      category: 'safety',
      program: 'B.Sc F&ISM, 2017–18',
      image: null,
      quote: "Studying professional safety curriculum in ASET has widened my perspective and has given me an idea of the importance of Safety in today's day and age.",
    },
    {
      name: 'N. GOPINATH',
      company: 'Asendas IT Park',
      category: 'safety',
      program: 'PG & EHSM, 2017–18',
      image: null,
      quote: 'I like the friendly atmosphere here and the fact the Lecturers are really close to the students. They are also very motivational.',
    },
    {
      name: 'E. SATHISH KUMAR',
      company: 'Royal Enfield',
      category: 'safety',
      program: 'PG EHSM, 2017–18',
      image: null,
      quote: 'All Two years were golden days that I will cherish throughout of my life because it gave me so many friends and best teachers.',
    },
    {
      name: 'B. GIRI SHARAMA',
      company: 'Tech India Ltd.',
      category: 'safety',
      program: 'CC F&ISM, 2017–18',
      image: null,
      quote: 'I had a great support from ASET faculty, both moral and strategic support. Practical labs with best assistants were always at the support for the student.',
    },
    {
      name: 'G.B. GANESH',
      company: 'KGS Enterprises',
      category: 'safety',
      program: 'CC F&ISM, 2017–18',
      image: null,
      quote: "The hands-on nature of the programs makes learning very accessible. It's a friendly atmosphere on campus and everyone has welcomed me with open arms.",
    },
    {
      name: 'RAGURAJAN',
      company: 'Apollo Tyres',
      category: 'safety',
      program: 'CC F&ISM, 2017–18',
      image: null,
      quote: "I've felt at home at ASET College from the start and I'm happy I made the decision to come.",
    },
    {
      name: 'S. SIVASAMY',
      company: 'Royal Enfield',
      category: 'safety',
      program: 'PG EHSM, 2017–18',
      image: null,
      quote: 'During my study period I found the college to be the best for me as the trainers were able to deliver the best of education. Staff members were always ready to help.',
    },
  ];

  const filteredStories = selectedStoryCategory === 'all'
    ? alumniStories
    : alumniStories.filter((s) => s.category === selectedStoryCategory);

  // 9 Activities Organized by the Department from Document
  const departmentActivities = [
    { title: 'On-Campus Recruitment Drives', desc: 'Pre-scheduled annual and semester-end placement sessions hosting premier international and domestic corporate talent partners on campus.', icon: Building2 },
    { title: 'Off-Campus Placement Opportunities', desc: 'Direct corporate referrals and pooled drives organized through ASET industrial network for wider student exposure.', icon: ExternalLink },
    { title: 'Industry Interaction Sessions', desc: 'Executive guest lectures, leadership roundtables, and technical masterclasses conducted by practising industry directors.', icon: Users },
    { title: 'Career Guidance Programs', desc: 'One-on-one professional counseling and sector mapping tailored to student aspirations, strengths, and market demands.', icon: Compass },
    { title: 'Aptitude & Reasoning Training', desc: 'Systematic quantitative, logical, verbal, and problem-solving coaching built into the academic timetable from early semesters.', icon: TrendingUp },
    { title: 'Group Discussions & Mock Interviews', desc: 'Intensive interview simulations chaired by corporate HRs and experienced faculty with actionable feedback rubrics.', icon: MessageSquareIcon },
    { title: 'Presentation & Communication Skills', desc: 'Corporate communication labs, boardroom presentation grooming, technical reporting, and corporate articulation workshops.', icon: Award },
    { title: 'Personality Enhancement Sessions', desc: 'Executive etiquette, corporate diplomacy, confidence conditioning, and emotional intelligence development modules.', icon: Sparkles },
    { title: 'Internship Opportunities with Industries', desc: 'Mandatory practical internships with leading airline, maritime, port terminal, and manufacturing organizations.', icon: Briefcase },
  ];

  // 10 Objectives from Document
  const departmentObjectives = [
    { num: '01', title: 'Enhancing Employability Skills', desc: 'Cultivating job-ready aptitude, analytical thinking, and workplace professionalism across all student batches.' },
    { num: '02', title: 'Industry-Focused Training', desc: 'Aligning classroom learning with contemporary corporate workflows, safety protocols, and operational technologies.' },
    { num: '03', title: 'Seminars & Development Workshops', desc: 'Organizing frequent technical symposiums and skill bootcamps with industry leaders and regulatory practitioners.' },
    { num: '04', title: 'Aptitude, Mocks & Group Discussions', desc: 'Conducting rigorous simulation sessions to prepare students for multi-stage corporate screening assessments.' },
    { num: '05', title: 'Communication & Presentation Abilities', desc: 'Empowering students to articulate complex operational and management ideas with clarity and confidence.' },
    { num: '06', title: 'Confidence & Leadership Qualities', desc: 'Fostering proactive problem-solving, team cohesion, and ethical decision-making under high-demand environments.' },
    { num: '07', title: 'Career Guidance on Industry Trends', desc: 'Tracking shifts in global aviation, maritime shipping, and occupational health legislation to guide student career paths.' },
    { num: '08', title: 'Internship & Placement Opportunities', desc: 'Securing high-impact internships that convert into pre-placement offers (PPOs) and full-time employment.' },
    { num: '09', title: 'Alumni & Recruiter Connectivity', desc: 'Leveraging our 5,000+ alumni network in India and abroad for mentorship, referrals, and campus recruitment.' },
    { num: '10', title: 'Holistic Personality Development', desc: 'Shaping industry-ready professionals with strong technical knowledge, personal integrity, and professional ethics.' },
  ];

  return (
    <div className="w-full bg-[#faf8f5] text-stone-900 font-sans selection:bg-amber-800 selection:text-white">
      {/* ========================================================= */}
      {/* 1. CINEMATIC HERO BANNER (College Building Architecture)   */}
      {/* ========================================================= */}
      <section className="relative min-h-[75vh] lg:min-h-[82vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white">
        {/* College Building Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={campusBuildingImg}
            alt="ASET College Placement & Training Department Architecture"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-[1.08]"
          />
          {/* Subtle brand gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent" />
          <div className="absolute inset-0 bg-radial-[at_center_center] from-transparent via-stone-950/40 to-stone-950" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/95 text-xs font-mono font-semibold tracking-wide mb-6 shadow-md"
          >
            <span>PLACEMENT &amp; TRAINING DEPARTMENT · CHENNAI &amp; COIMBATORE</span>
          </motion.div>

          <ScrollHeading
            as="h1"
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12] max-w-4xl mx-auto"
          >
            Our Placement Cell &amp;{' '}
            <span className="text-gradient-title font-extrabold">Corporate Career Launchpad</span>
          </ScrollHeading>

          <ScrollParagraph className="mt-5 text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed font-sans">
            Shaping students into confident professionals equipped with industry-aligned technical mastery, leadership training, and direct recruitment access across aviation, maritime logistics, industrial safety, and enterprise management.
          </ScrollParagraph>

          {/* Quick Anchor Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => scrollToAnchor('placement-process')}
              className="px-6 py-3.5 rounded-xl bg-[#991b1b] hover:bg-[#851117] text-white font-bold text-xs sm:text-sm tracking-wide shadow-xl border border-red-400/30 transition-all cursor-pointer flex items-center gap-2 group"
            >
              <span>Explore 6-Step Placement Process</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              type="button"
              onClick={() => scrollToAnchor('recruiters')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm tracking-wide border border-white/25 backdrop-blur-md transition-all cursor-pointer flex items-center gap-2"
            >
              <span>View Recruiter Network</span>
              <Building2 className="w-4 h-4 text-amber-300" />
            </button>
            <button
              type="button"
              onClick={() => scrollToAnchor('alumni-stories')}
              className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/15 text-stone-200 hover:text-white font-semibold text-xs sm:text-sm tracking-wide border border-white/15 backdrop-blur-md transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Alumni Stories ({alumniStories.length})</span>
              <Star className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Key Placement Highlights Strip */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-amber-400">99%</div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1">Placement Records</div>
              <div className="text-[11px] text-stone-300 mt-0.5">Across all core programs</div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-white">5,000+</div>
              <div className="text-xs sm:text-sm font-semibold text-amber-400 mt-1">Alumni Network</div>
              <div className="text-[11px] text-stone-300 mt-0.5">Thriving in India &amp; abroad</div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-white">18+</div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1">Tier-1 Recruiters</div>
              <div className="text-[11px] text-stone-300 mt-0.5">Global airlines, shipping &amp; safety</div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-emerald-400">2027–28</div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1">Admissions Open</div>
              <div className="text-[11px] text-stone-300 mt-0.5">Dual campus recruitment drives</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. DEPARTMENT OVERVIEW & HOW CAREERS ARE BUILT            */}
      {/* ========================================================= */}
      <section id="about-department" className="py-16 sm:py-24 bg-white border-b border-stone-200/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollEyebrow>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                  DEPARTMENT OF PLACEMENT &amp; TRAINING
                </span>
              </ScrollEyebrow>

              <ScrollHeading className="text-2xl sm:text-4xl font-serif font-semibold text-stone-900 tracking-tight leading-snug">
                Building Careers Through <span className="text-gradient-title font-medium">Practical Excellence &amp; Industry Trust</span>
              </ScrollHeading>

              <ScrollParagraph className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                The Department of Placement &amp; Training at ASET College plays a vital role in shaping students into confident professionals ready to meet today’s industry expectations. With a strong focus on career development, skill enhancement, and industry interaction, ASET College provides students with the right guidance, training, and opportunities to build successful careers.
              </ScrollParagraph>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#faf8f5] border border-stone-200/90 space-y-3">
                <h3 className="text-base sm:text-lg font-serif font-semibold text-stone-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>How the Department Builds Careers</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                  At ASET College, the Placement &amp; Training Department is committed to helping students improve their employability through practical and result-oriented training methods. Modern training facilities, innovative learning approaches, and continuous career support help students gain confidence and prepare for real-world corporate environments.
                </p>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                  The department works closely with leading industries, companies, and organizations to create strong connections between students and employers. Through regular interaction with recruiters, students receive valuable exposure to industry standards, recruitment expectations, and professional work culture.
                </p>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                  A dedicated placement committee actively supports students in developing essential career skills such as communication, aptitude, leadership, interview handling, and professional decision-making. Students are guided with resume preparation, application support, mock interviews, group discussions, and personality development activities to prepare for placement opportunities.
                </p>
              </div>

              {/* Highlights pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-orange-50 border border-orange-200/70">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-stone-800">99% Placement Track Record</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/70">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-stone-800">5,000+ Alumni Across the Globe</span>
                </div>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
                <img
                  src={graduatesImg}
                  alt="ASET College Graduates Celebrating Placement Success"
                  className="w-full h-72 sm:h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                    Industry Placement Records
                  </div>
                  <div className="text-lg font-serif font-bold text-white mt-1">
                    Connecting Talent to Fortune 500 Leaders
                  </div>
                  <div className="text-xs text-stone-300 mt-1 font-sans">
                    Chennai &amp; Coimbatore Dual Campus Placement Units
                  </div>
                </div>
              </div>

              {/* Committee Card */}
              <div className="p-5 rounded-2xl bg-stone-900 text-white space-y-2 border border-stone-800 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                    DEDICATED PLACEMENT COMMITTEE
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-xs text-stone-300 leading-relaxed font-sans">
                  Active faculty members and industry liaison officers guiding mock interviews, corporate resume tailoring, and salary negotiations for final-year candidates.
                </p>
                <div className="pt-2 flex items-center justify-between text-xs text-stone-400 border-t border-stone-800">
                  <span>Admissions Helpline</span>
                  <a href="tel:+919159499973" className="text-amber-300 font-bold hover:underline">
                    +91 91594 99973
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. ACTIVITIES ORGANIZED BY THE DEPARTMENT                 */}
      {/* ========================================================= */}
      <section id="activities" className="py-16 sm:py-24 bg-[#faf8f5] border-b border-stone-200/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <ScrollEyebrow className="flex items-center justify-center">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                CAREER ENHANCEMENT &amp; TRAINING SUITE
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900 tracking-tight mt-2">
              Activities Organized by <span className="text-gradient-title font-medium">the Department</span>
            </ScrollHeading>
            <ScrollParagraph className="text-sm sm:text-base text-stone-600 mt-3 font-sans">
              A comprehensive spectrum of corporate engagements, technical mock drills, and structured internships conducted throughout the academic calendar.
            </ScrollParagraph>
          </div>

          {/* 9 Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {departmentActivities.map((act, idx) => {
              const IconComp = act.icon;
              return (
                <motion.div
                  key={act.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04, duration: 0.4 }}
                  className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md hover:border-orange-300 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/70 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-mono font-bold text-stone-400">
                      ACTIVITY {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-base sm:text-lg font-serif font-semibold text-stone-900 leading-snug">
                      {act.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                      {act.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center text-xs font-bold text-orange-700 group-hover:translate-x-1 transition-transform">
                    <span>ASET Quality Assurance</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Special Deep-Dive Callout from Document: Mock Interviews & Career Guidance Cell */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>REGULAR MOCK INTERVIEWS &amp; GD EVALUATION</span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-stone-900">
                  Continuous Feedback &amp; Performance Review
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                  Regular mock interviews and group discussion sessions help final-year and pre-final-year students understand recruitment challenges and improve their performance with confidence. After every placement drive, the department evaluates student performance and provides guidance for continuous improvement.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-stone-100 text-xs text-stone-500 font-mono">
                Continuous Performance Tracking · Pre-Final &amp; Final Year Batches
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold">
                  <Users className="w-3.5 h-3.5" />
                  <span>CAREER GUIDANCE CELL LEADERSHIP</span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-stone-900">
                  Management &amp; Experienced Faculty Guidance
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                  The Career Guidance Cell functions under the leadership of the institution’s management and experienced faculty members. Professors and trainers work together to guide students toward suitable career opportunities based on current industry trends and future employment demands.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-stone-100 text-xs text-stone-500 font-mono">
                Executive Leadership · Industry Alignment · Future Workforce Demands
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. OBJECTIVES OF THE PLACEMENT & TRAINING DEPARTMENT      */}
      {/* ========================================================= */}
      <section id="objectives" className="py-16 sm:py-24 bg-white border-b border-stone-200/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <ScrollEyebrow className="flex items-center justify-center">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                STRATEGIC PLACEMENT OBJECTIVES
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900 tracking-tight mt-2">
              Objectives of the <span className="text-gradient-title font-medium">Placement &amp; Training Department</span>
            </ScrollHeading>
            <ScrollParagraph className="text-sm sm:text-base text-stone-600 mt-3 font-sans">
              The primary objective is to ensure students are equipped with the knowledge, confidence, and professional skills required for successful careers.
            </ScrollParagraph>
          </div>

          {/* 10 Objectives Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {departmentObjectives.map((obj, i) => (
              <motion.div
                key={obj.num}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.35 }}
                className="p-5 rounded-2xl bg-[#faf8f5] border border-stone-200/90 hover:border-orange-400 hover:bg-orange-50/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xl font-mono font-extrabold text-orange-600/80 mb-2">
                    {obj.num}
                  </div>
                  <h4 className="text-sm font-serif font-semibold text-stone-900 leading-snug">
                    {obj.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed font-sans">
                    {obj.desc}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-stone-700">
                  <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Strategic Goal</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Comprehensive Philosophy Banner from Document */}
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-stone-900 text-white relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
                ASET EDUCATIONAL BELIEF
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
                Career Development Beyond Academics Alone
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                ASET College believes that career development is not limited to academics alone. The institution focuses on the overall personality development of students, helping them become industry-ready professionals with strong technical knowledge and professional ethics.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-10 translate-y-10">
              <Award className="w-80 h-80 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. 6-STEP PLACEMENT PROCESS (ROADMAP)                     */}
      {/* ========================================================= */}
      <section id="placement-process" className="py-16 sm:py-24 bg-[#faf8f5] border-b border-stone-200/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <ScrollEyebrow className="flex items-center justify-center">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                6-STAGE RECRUITMENT WORKFLOW
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900 tracking-tight mt-2">
              Placement Process at <span className="text-gradient-title font-medium">ASET College</span>
            </ScrollHeading>
            <ScrollParagraph className="text-sm sm:text-base text-stone-600 mt-3 font-sans">
              The placement process is designed to ensure smooth coordination between recruiters and students through a transparent 6-stage lifecycle.
            </ScrollParagraph>
          </div>

          {/* Interactive Steps Roadmap */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placementSteps.map((st) => {
              const StepIcon = st.icon;
              const isSelected = selectedProcessStep === st.step;
              return (
                <div
                  key={st.step}
                  onClick={() => setSelectedProcessStep(st.step)}
                  className={`p-6 sm:p-7 rounded-3xl border transition-all cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'bg-white border-orange-500 shadow-xl ring-2 ring-orange-500/20'
                      : 'bg-white/80 border-stone-200/90 hover:border-stone-400 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-stone-100 text-stone-800">
                      STEP {st.step}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${st.accent}`}>
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-serif font-semibold text-stone-900 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans mb-4">
                    {st.desc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-stone-100">
                    {st.highlights.map((hl) => (
                      <div key={hl} className="flex items-center gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {isSelected && (
                    <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                      <div className="absolute transform rotate-45 bg-orange-600 text-white text-[9px] font-bold py-0.5 right-[-35px] top-[18px] w-[120px] text-center shadow-xs">
                        ACTIVE
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Flow Connector Banner */}
          <div className="mt-8 p-5 rounded-2xl bg-white border border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-600">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Full compliance with university guidelines &amp; recruiter non-disclosure frameworks.</span>
            </div>
            <button
              type="button"
              onClick={onOpenAdmissions}
              className="text-orange-700 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Enroll for 2027–2028 Placements</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. OFFICIAL RECRUITER NETWORK (18 COMPANIES)              */}
      {/* ========================================================= */}
      <section id="recruiters" className="py-16 sm:py-24 bg-white border-b border-stone-200/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <ScrollEyebrow className="flex items-center justify-center">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                CORPORATE RECRUITER NETWORK
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900 tracking-tight mt-2">
              18 Leading Corporate <span className="text-gradient-title font-medium">Recruiters &amp; Organizations</span>
            </ScrollHeading>
            <ScrollParagraph className="text-sm sm:text-base text-stone-600 mt-3 font-sans">
              Our placement page lists world-class airlines, ocean carriers, global freight forwarders, safety corporations, and enterprise consultancies recruiting ASET talent.
            </ScrollParagraph>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: 'all', label: 'All Recruiters (18)' },
              { id: 'aviation', label: 'Aviation & Airlines' },
              { id: 'logistics', label: 'Logistics & Shipping' },
              { id: 'safety', label: 'Industrial Safety' },
              { id: 'tech', label: 'Enterprise & IT' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveRecruiterCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeRecruiterCategory === cat.id
                    ? 'bg-stone-900 text-white shadow-md'
                    : 'bg-[#faf8f5] text-stone-600 hover:bg-stone-200/70 border border-stone-200/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Recruiters Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {filteredRecruiters.map((rec, i) => (
              <motion.div
                key={rec.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: i * 0.02 }}
                className="p-4 rounded-2xl bg-[#faf8f5] border border-stone-200/90 hover:border-orange-400 hover:shadow-lg transition-all flex flex-col items-center justify-between text-center min-h-[170px] group"
              >
                <div className="w-full flex justify-end">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white border border-stone-200 text-stone-500">
                    {rec.badge}
                  </span>
                </div>

                {/* Recruiter Logo or Styled Monogram */}
                <div className="my-2 h-14 flex items-center justify-center w-full">
                  {rec.logo ? (
                    <img
                      src={rec.logo}
                      alt={`${rec.name} Official Recruiter`}
                      className="max-h-12 max-w-[110px] object-contain filter contrast-125 group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-stone-900 text-white font-serif font-bold text-lg flex items-center justify-center shadow-md">
                      {rec.name.charAt(0)}
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-serif font-bold text-stone-900 leading-tight">
                    {rec.name}
                  </h4>
                  <div className="text-[11px] text-stone-500 leading-tight mt-0.5 font-sans">
                    {rec.domain}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Notice */}
          <div className="mt-8 text-center text-xs text-stone-500 font-mono">
            Direct on-campus and off-campus recruitment drives held annually for undergraduate and postgraduate graduating cohorts.
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. ALUMNI SUCCESS STORIES & TESTIMONIALS (FILTERABLE)     */}
      {/* ========================================================= */}
      <section id="alumni-stories" className="py-16 sm:py-24 bg-[#faf8f5] border-b border-stone-200/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <ScrollEyebrow className="flex items-center justify-center">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                ALUMNI SUCCESS STORIES &amp; EMPLOYER ROSTER
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900 tracking-tight mt-2">
              Real Alumni Voices &amp; <span className="text-gradient-title font-medium">Career Testimonials</span>
            </ScrollHeading>
            <ScrollParagraph className="text-sm sm:text-base text-stone-600 mt-3 font-sans">
              Authentic alumni testimonials and employer details presented directly from our official placement page, categorized across Aviation, Logistics &amp; Shipping, and Industrial Safety.
            </ScrollParagraph>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            <button
              type="button"
              onClick={() => setSelectedStoryCategory('all')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedStoryCategory === 'all'
                  ? 'bg-[#991b1b] text-white shadow-lg'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <span>All Disciplines</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-black/20 text-white font-mono">
                {alumniStories.length}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedStoryCategory('aviation')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedStoryCategory === 'aviation'
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Plane className="w-4 h-4" />
              <span>Aviation</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-black/20 text-white font-mono">
                {alumniStories.filter((s) => s.category === 'aviation').length}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedStoryCategory('logistics')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedStoryCategory === 'logistics'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>Logistics &amp; Shipping</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-black/20 text-white font-mono">
                {alumniStories.filter((s) => s.category === 'logistics').length}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedStoryCategory('safety')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedStoryCategory === 'safety'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <HardHat className="w-4 h-4" />
              <span>Industrial Safety</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-black/20 text-white font-mono">
                {alumniStories.filter((s) => s.category === 'safety').length}
              </span>
            </button>
          </div>

          {/* Stories Card Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredStories.map((story) => (
                <motion.div
                  key={`${story.name}-${story.company}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Header: Photo / Monogram + Info */}
                    <div className="flex items-center gap-3.5">
                      {story.image ? (
                        <div className="w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-orange-500/30 shadow-md shrink-0 bg-stone-900">
                          <img
                            src={story.image}
                            alt={`${story.name} ASET Alumnus at ${story.company}`}
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500 ease-out"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-stone-800 to-stone-950 text-white font-serif font-bold text-lg flex items-center justify-center border-2 border-stone-700 shadow-md shrink-0">
                          {story.name.charAt(0)}
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm sm:text-base font-serif font-bold text-stone-900 truncate">
                          {story.name}
                        </h4>
                        <div className="text-xs font-semibold text-orange-700 truncate">
                          {story.company}
                        </div>
                        <div className="text-[11px] text-stone-500 truncate font-mono">
                          {story.program}
                        </div>
                      </div>
                    </div>

                    {/* Verbatim Quote from Document */}
                    <div className="relative pt-1">
                      <Quote className="w-5 h-5 text-stone-300 mb-1" />
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans italic">
                        &ldquo;{story.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-500">
                    <span className="capitalize">{story.category} Sector</span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Alumni</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. CAREER GUIDANCE & CONTACT INFORMATION                  */}
      {/* ========================================================= */}
      <section id="contact-placement" className="py-16 sm:py-24 bg-white border-b border-stone-200/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <ScrollEyebrow className="flex items-center justify-center">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                CAREER GUIDANCE &amp; CONTACT DESK
              </span>
            </ScrollEyebrow>
            <ScrollHeading className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900 tracking-tight mt-2">
              Career Guidance &amp; <span className="text-gradient-title font-medium">Placement Desk</span>
            </ScrollHeading>
            <ScrollParagraph className="text-sm sm:text-base text-stone-600 mt-3 font-sans">
              Through continuous training, industry exposure, and placement support, ASET College remains committed to helping students transform their academic journey into successful professional careers.
            </ScrollParagraph>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Phone Desk */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/70 flex items-center justify-center text-orange-600">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                Placement &amp; Admissions Phone
              </h4>
              <p className="text-xs text-stone-600 font-sans">
                Speak directly with placement officers and admission counselors:
              </p>
              <div className="pt-2">
                <a
                  href="tel:+919159499973"
                  className="text-base sm:text-lg font-mono font-bold text-red-700 hover:underline block"
                >
                  +91 91594 99973
                </a>
                <span className="text-xs text-stone-500 font-mono">
                  WhatsApp Available on Mobile
                </span>
              </div>
            </div>

            {/* Email Desk */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-blue-600">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                Official Placement Email
              </h4>
              <p className="text-xs text-stone-600 font-sans">
                Corporate recruiters, MoU enquiries, and candidate verification:
              </p>
              <div className="pt-2">
                <a
                  href="mailto:contact@asetsafety.ac.in"
                  className="text-sm sm:text-base font-mono font-bold text-stone-900 hover:text-red-700 hover:underline break-all block"
                >
                  contact@asetsafety.ac.in
                </a>
                <span className="text-xs text-stone-500 font-mono">
                  Official ASET Response Desk
                </span>
              </div>
            </div>

            {/* Dual Campuses */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-600">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                Campuses &amp; Facilities
              </h4>
              <p className="text-xs text-stone-600 font-sans">
                Integrated placement training wings located across both flagship campuses:
              </p>
              <div className="pt-2 text-xs font-semibold text-stone-800 space-y-1">
                <p>📍 Chennai: Irulapalayam, Kuthambakkam</p>
                <p>📍 Coimbatore: Saravanampatti</p>
              </div>
            </div>
          </div>

          {/* Quick Route Strip to Other Overviews */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-stone-100 border border-stone-200/80 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-stone-700 font-sans">
              <strong>Looking for related admission and curriculum details?</strong> Explore our official guides:
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {onNavigateToAdmissions && (
                <button
                  type="button"
                  onClick={() => onNavigateToAdmissions()}
                  className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 hover:border-orange-500 transition-colors cursor-pointer"
                >
                  Admissions 2027–28
                </button>
              )}
              {onNavigateToRequirements && (
                <button
                  type="button"
                  onClick={() => onNavigateToRequirements()}
                  className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 hover:border-orange-500 transition-colors cursor-pointer"
                >
                  Document Checklist
                </button>
              )}
              {onNavigateToFeePayment && (
                <button
                  type="button"
                  onClick={() => onNavigateToFeePayment()}
                  className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 hover:border-orange-500 transition-colors cursor-pointer"
                >
                  Fee Payment Desk
                </button>
              )}
              {onNavigateToApplyOnline && (
                <button
                  type="button"
                  onClick={() => onNavigateToApplyOnline()}
                  className="px-3 py-1.5 rounded-lg bg-red-700 text-white font-semibold hover:bg-red-800 transition-colors cursor-pointer"
                >
                  Apply Online
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. BOTTOM MONUMENTAL CTA DOCK                             */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 bg-stone-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
            LAUNCH YOUR CAREER WITH 99% PLACEMENT ASSURANCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight">
            Ready to Build a High-Growth <span className="text-gradient-title font-bold">Global Career?</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Connect with our admissions desk to explore industry-aligned degrees, placement track records, and scholarship opportunities for the academic year 2027–2028.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={onOpenAdmissions}
              className="px-9 py-4 rounded-2xl bg-[#991b1b] hover:bg-[#851117] text-white font-bold text-sm tracking-wide shadow-xl border border-red-500/30 transition-all cursor-pointer"
            >
              Apply for Admissions 2027–28
            </button>
            {onNavigateToContact && (
              <button
                type="button"
                onClick={() => onNavigateToContact()}
                className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-wide border border-white/20 transition-all cursor-pointer"
              >
                Contact Placement Cell
              </button>
            )}
            {onBackToHome && (
              <button
                type="button"
                onClick={onBackToHome}
                className="px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/15 text-stone-300 hover:text-white font-semibold text-sm transition-all cursor-pointer"
              >
                ← Back to Home
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper icon component
function MessageSquareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
