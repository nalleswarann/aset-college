import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Building,
  CheckCircle2,
  Check,
  Calendar,
  CreditCard,
  FileCheck2,
  Globe,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
  UtensilsCrossed,
  Clock,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Compass,
  Download,
  ClipboardList,
  Send,
  QrCode,
  DollarSign,
  Laptop,
  Flame,
  Truck,
  Briefcase,
  FileText,
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
import heroCampusImg from '../assets/images/hero_university_campus_1794469701413.jpg';
import campusBuildingUserImg from '../assets/images/campus-building-user.jpg';
import asetCollegePathway from '../assets/images/aset-college-pathway-sunset.jpg';

// Department & Life imagery
import deptAviation from '../assets/images/departments/pilot-training-aviaition.webp';
import deptLogistics from '../assets/images/departments/dept-logistics.jpg';
import deptSafety from '../assets/images/departments/dept-safety.jpg';
import deptCommerce from '../assets/images/departments/dept-commerce.jpg';
import deptHospitality from '../assets/images/departments/dept-hospitality.jpg';
import laptopGroupImg from '../assets/images/aset-life/home-adm-laptop-group.webp';
import groomingImg from '../assets/images/aset-life/home-adm-grooming.webp';

export interface AdmissionOverviewPageProps {
  onBackToHome: () => void;
  onOpenAdmissions?: () => void;
  onOpenVirtualTour?: () => void;
  onNavigateToAbout?: (targetHash?: string) => void;
  onNavigateToCampuses?: (targetHash?: string) => void;
  onNavigateToLife?: (targetHash?: string) => void;
}

export const AdmissionOverviewPage: React.FC<AdmissionOverviewPageProps> = ({
  onBackToHome,
  onOpenAdmissions,
  onOpenVirtualTour,
  onNavigateToAbout,
  onNavigateToCampuses,
  onNavigateToLife,
}) => {
  // Document checklists state
  const [activeChecklistTab, setActiveChecklistTab] = useState<'ug' | 'pg'>('ug');
  const [checkedUgItems, setCheckedUgItems] = useState<number[]>([]);
  const [checkedPgItems, setCheckedPgItems] = useState<number[]>([]);

  // 4-Stage Application Wizard state
  const [activeStage, setActiveStage] = useState<number>(1);

  // FAQ accordion state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // UG Checklist from Document
  const ugDocuments = [
    { id: 1, title: 'Class 12 (+2) Mark Sheet', desc: 'Original & attested copies of your Higher Secondary (+2) or equivalent examination.' },
    { id: 2, title: 'Class 10 Mark Sheet', desc: 'Proof of date of birth, identity, and foundational secondary academic record.' },
    { id: 3, title: 'Transfer & Conduct Certificate', desc: 'Issued by the institution last attended, verifying good character and clearance.' },
    { id: 4, title: 'Aadhaar Card Copy', desc: 'Government photo identification document with clear demographic details.' },
    { id: 5, title: 'Passport-Size Photographs', desc: '10 recent passport-size and 2 stamp-size color photographs with white background.' },
    { id: 6, title: 'Community Certificate (if applicable)', desc: 'Required for state reservation criteria and scholarship verification.' },
    { id: 7, title: 'Migration Certificate', desc: 'Mandatory for students completing 10+2 examinations outside Tamil Nadu.' },
    { id: 8, title: 'NIOS Equivalent Board Certificate', desc: 'Equivalency recognition certificate if passing through National Institute of Open Schooling.' },
    { id: 9, title: 'Other Supporting Documents', desc: 'Special category certificates (sports, defense, NCC, or merit awards if claiming quotas).' },
  ];

  // PG Checklist from Document
  const pgDocuments = [
    { id: 1, title: 'Consolidated UG Mark Sheet / All Semesters', desc: 'Official transcripts or semester-wise mark sheets of your qualifying undergraduate degree.' },
    { id: 2, title: 'UG Provisional Certificate', desc: 'Temporary degree completion certificate issued by your graduating university.' },
    { id: 3, title: 'UG Degree Certificate', desc: 'Convocation parchment or official original degree award (if already conferred).' },
    { id: 4, title: 'Class 12 (+2) Mark Sheet or Equivalent', desc: 'Senior secondary mark sheet verifying higher secondary eligibility.' },
    { id: 5, title: 'Class 10 Mark Statement', desc: 'Secondary school examination certificate certifying date of birth.' },
    { id: 6, title: 'Transfer & Conduct Certificate', desc: 'TC from your undergraduate college certifying conduct and honorable exit.' },
    { id: 7, title: 'Community Certificate (if applicable)', desc: 'Valid government caste/community certificate for scholarship & quota processing.' },
    { id: 8, title: 'Migration Certificate (if applicable)', desc: 'Required if your graduating undergraduate university was outside Tamil Nadu.' },
    { id: 9, title: 'Passport-Size Photographs', desc: '10 passport-size and 2 stamp-size photographs for student ID and university enrollment.' },
    { id: 10, title: 'Aadhaar Card Copy', desc: 'Clear legible photocopy of Aadhaar Card for biometric & university portal registration.' },
    { id: 11, title: 'Other Supporting Documents', desc: 'Any professional certifications, internships, or work experience letters if applicable.' },
  ];

  const toggleUgCheck = (id: number) => {
    setCheckedUgItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const togglePgCheck = (id: number) => {
    setCheckedPgItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // 4 Stages from Official Document
  const applicationStages = [
    {
      stage: 1,
      title: 'Applicant Details',
      subtitle: 'Personal Identity & Family Background',
      details: [
        'Candidate Full Name (as per Class 10 Certificate)',
        "Parents' / Guardian's Full Name & Occupation",
        'Date of Birth, Gender & Blood Group',
        'Nationality & Religion / Community Classification',
      ],
      checklist: ['Candidate Full Name', "Parents' Names", 'Date of Birth', 'Gender'],
      tag: 'Step 01 / 04',
    },
    {
      stage: 2,
      title: 'Contact & ID Details',
      subtitle: 'Communication Channels & Residential Records',
      details: [
        'Active Student Mobile Number & WhatsApp Desk',
        'Valid Primary Email Address for Admissions Letters',
        'Permanent & Current Residential Communication Address',
        '12-Digit Government Aadhaar Card Number & Scanned Copy',
      ],
      checklist: ['Email Address', 'Mobile Number', 'Residential Address', 'Aadhaar Details'],
      tag: 'Step 02 / 04',
    },
    {
      stage: 3,
      title: 'Education & Course Details',
      subtitle: 'Marks Verification & Academic Credentials',
      details: [
        'SSLC (Class 10) Board, School Name, Year & Aggregate %',
        'HSC (Class 12) Group, Roll Number, Passing Year & Subject Marks',
        'Undergraduate Degree Details & CGPA (for PG applicants)',
        'Selection of Academic Programme, Campus Preference & Hostel Choice',
      ],
      checklist: ['SSLC Details', 'HSC Details', 'UG/PG Details', 'Selected Course'],
      tag: 'Step 03 / 04',
    },
    {
      stage: 4,
      title: 'Review & Submission',
      subtitle: 'Document Upload & Final Confirmation',
      details: [
        'Upload Recent Color Passport-Size Photograph (White Background)',
        'Scanned Mark Sheets & Identity Document Verification',
        'Comprehensive Review of Form Information & Declarations',
        'Instant Application ID Generation & SMS/Email Confirmation',
      ],
      checklist: ['Passport Photo', 'Declaration', 'Final Review', 'Submission'],
      tag: 'Step 04 / 04',
    },
  ];

  // 6 Courses Offered from Official Document
  const coursesOffered = [
    {
      title: 'Aviation & Pilot Training',
      badge: 'Commercial Pilot & Airport Ops',
      desc: 'B.Sc Aviation, DGCA Ground Classes, RTR exam training, cabin crew practical flight immersion, and 18-month CPL flight training at Thoothukudi Flying School.',
      campus: 'Chennai & Thoothukudi',
      icon: Plane,
      image: deptAviation,
    },
    {
      title: 'Logistics & Shipping',
      badge: 'Global Supply Chain & Cargo',
      desc: 'B.Sc & MBA Logistics & Shipping Management. Comprehensive port terminal tours, freight forwarding, customs clearance, and warehouse analytics.',
      campus: 'Chennai & Coimbatore',
      icon: Truck,
      image: deptLogistics,
    },
    {
      title: 'Fire & Industrial Safety',
      badge: 'Industrial Safety Engineering',
      desc: 'B.Sc Fire & Industrial Safety, DIS, and Advanced Safety Diplomas. Real-life fire demonstration arena, 8-zone PPE lab, and offshore safety training.',
      campus: 'Chennai & Coimbatore',
      icon: Flame,
      image: deptSafety,
    },
    {
      title: 'Management Studies',
      badge: 'Corporate Leadership & Analytics',
      desc: 'BBA & MBA programmes with specialized industry certifications, live corporate consulting, Bloomberg terminals, and strategic business simulation labs.',
      campus: 'Chennai & Coimbatore',
      icon: Briefcase,
      image: laptopGroupImg,
    },
    {
      title: 'School of Commerce',
      badge: 'Chartered & Global Accounting',
      desc: 'B.Com integrated with professional CA, CMA, CS, and ACCA tracks. Advanced forensic accounting, taxation software, and corporate finance desks.',
      campus: 'Chennai & Coimbatore',
      icon: Building,
      image: deptCommerce,
    },
    {
      title: 'Hotel Management',
      badge: 'Culinary Arts & 5-Star Hospitality',
      desc: 'B.Sc Hospitality & Hotel Administration. Industrial training kitchens, beverage service lab, front office suite, and international luxury hotel internships.',
      campus: 'Coimbatore & Chennai',
      icon: UtensilsCrossed,
      image: deptHospitality,
    },
  ];

  // Official Admission FAQs
  const admissionFaqs = [
    {
      q: '1. What are the key eligibility requirements for Undergraduate (UG) programmes?',
      a: 'Candidates must have successfully passed their Higher Secondary Examination (Class 12 / +2) conducted by the Government of Tamil Nadu, CBSE, ICSE, or an equivalent recognized board. NIOS certificate holders are also eligible upon verification of equivalency.',
    },
    {
      q: '2. What are the payment methods accepted for fee submission?',
      a: 'ASET College accepts Cash, NEFT, RTGS, IMPS, and UPI at both Chennai and Coimbatore admissions finance desks. Official receipts are issued immediately upon transaction confirmation.',
    },
    {
      q: '3. What are the semester fee payment deadlines?',
      a: 'First semester fees are payable as specified in your official provisional admission letter. For continuing semesters, Odd Semester fees are due on July 15, and Even Semester fees are due on December 1.',
    },
    {
      q: '4. When must original certificates be submitted?',
      a: 'Original certificates (Class 10, Class 12, TC, Conduct, Community, and UG degree certificates for PG) must be presented in person at the admissions office during the final admission confirmation and enrollment verification process.',
    },
    {
      q: '5. Are hostel and boarding facilities available for outstation students?',
      a: 'Yes. ASET College provides secure, hygienic, and well-furnished separate hostels for male and female students with 24/7 security, Wi-Fi, and a wholesome South Indian buffet mess at both Chennai and Coimbatore campuses.',
    },
    {
      q: '6. How does the 4-stage online application process work?',
      a: 'The application is divided into: 1) Applicant personal details, 2) Contact and ID details, 3) Education and course details, and 4) Document upload and review. Once submitted, our academic counsellors will contact you within 24 hours to guide you through seat allotment.',
    },
    {
      q: '7. Can students outside Tamil Nadu apply?',
      a: 'Yes! ASET College welcomes students from all states across India. Outstation applicants must submit a Migration Certificate issued by their respective state educational board or university.',
    },
  ];

  return (
    <div className="relative w-full bg-[#faf8f5] text-stone-900 font-sans selection:bg-[#991b1b] selection:text-white overflow-x-hidden">
      {/* ========================================================= */}
      {/* 1. HERO / BANNER SECTION (Faithfully matching Reference)  */}
      {/* Architectural Campus Background + Centered Heading +       */}
      {/* Action Buttons + Bottom Crimson Red Tri-Panel Dock         */}
      {/* ========================================================= */}
      <section className="relative w-full min-h-[90vh] lg:min-h-[94vh] flex flex-col justify-between overflow-hidden bg-stone-950 text-white pt-28 sm:pt-36 lg:pt-40">
        {/* College Building Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={campusBuildingUserImg}
            alt="ASET College Academic Building"
            className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.08] transform scale-105 animate-pulse-slow"
          />
          {/* Cinematic Vignette Overlays matching reference */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/75" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/85" />
        </div>

        {/* Ambient Warm Atmosphere Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-700/20 blur-[130px] rounded-full z-0"
        />

        {/* Centered Luxury Hero Typography */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-12 sm:py-16">
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/95 text-xs font-mono uppercase tracking-widest mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>ASET COLLEGE · ADMISSIONS &amp; APPLICATION GUIDE · ACADEMIC YEAR 2026–27</span>
          </motion.div>

          {/* Majestic Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: LUXURY_EASE }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-white tracking-tight leading-[1.08] sm:leading-[1.05]"
          >
            Admissions &amp; Application <span className="text-gradient-title font-extrabold">Guide 2026–27</span>
          </motion.h1>

          {/* Subtitle from Official Document */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: LUXURY_EASE }}
            className="mt-5 text-base sm:text-lg md:text-xl text-stone-200 max-w-3xl mx-auto font-sans leading-relaxed text-balance"
          >
            Admission Information • Eligibility Documents • Fee Payment • 4-Stage Online Application.
            ASET College invites applications from eligible students for Undergraduate (UG) and Postgraduate (PG) programmes at Chennai &amp; Coimbatore campuses.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: LUXURY_EASE }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              type="button"
              onClick={onOpenAdmissions}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#991b1b] hover:bg-[#b91c1c] text-white text-sm font-bold tracking-wide uppercase shadow-lg shadow-red-950/40 hover:shadow-red-900/60 transition-all duration-300 group cursor-pointer"
            >
              <span>Apply Online 2026–27</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#documents-required"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold tracking-wide border border-white/25 backdrop-blur-md transition-all duration-300 cursor-pointer"
            >
              <FileCheck2 className="w-4 h-4 text-amber-400" />
              <span>Check Required Documents</span>
            </a>

            <a
              href="#fee-payment"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold tracking-wide border border-white/25 backdrop-blur-md transition-all duration-300 cursor-pointer"
            >
              <CreditCard className="w-4 h-4 text-emerald-400" />
              <span>Fee Payment Methods</span>
            </a>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM CRIMSON RED TRI-PANEL DOCK (Exact Reference Design) */}
        {/* ========================================================= */}
        <div className="relative z-10 w-full mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-red-900/40 divide-y md:divide-y-0 md:divide-x divide-red-900/50 bg-[#7f1d1d]/90 backdrop-blur-xl">
              
              {/* Dock Card 1 */}
              <div className="p-6 sm:p-7 flex flex-col justify-between group hover:bg-[#991b1b]/90 transition-colors">
                <div>
                  <div className="flex items-center gap-3 text-amber-300 mb-3">
                    <FileCheck2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <h2 className="text-lg font-serif font-semibold text-white tracking-wide">
                      1. Admission Requirements
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed font-sans">
                    Check eligibility, admission procedures, required documents, community certs, and applicable rules for UG &amp; PG.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-red-800/60 flex items-center justify-between text-xs text-amber-200/90 font-medium font-mono">
                  <span>Class 10, +2, UG &amp; TC</span>
                  <a href="#documents-required" className="hover:underline flex items-center gap-1">
                    <span>View Docs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Dock Card 2 */}
              <div className="p-6 sm:p-7 flex flex-col justify-between group hover:bg-[#991b1b]/90 transition-colors">
                <div>
                  <div className="flex items-center gap-3 text-amber-300 mb-3">
                    <CreditCard className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <h2 className="text-lg font-serif font-semibold text-white tracking-wide">
                      2. Fee Payment Methods
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed font-sans">
                    Complete fee submission via Cash, NEFT, RTGS, IMPS, or UPI for Chennai and Coimbatore campuses with clear semester deadlines.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-red-800/60 flex items-center justify-between text-xs text-amber-200/90 font-medium font-mono">
                  <span>Due: July 15 &amp; Dec 1</span>
                  <a href="#fee-payment" className="hover:underline flex items-center gap-1">
                    <span>Payment Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Dock Card 3 */}
              <div className="p-6 sm:p-7 flex flex-col justify-between group hover:bg-[#991b1b]/90 transition-colors">
                <div>
                  <div className="flex items-center gap-3 text-amber-300 mb-3">
                    <Laptop className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <h2 className="text-lg font-serif font-semibold text-white tracking-wide">
                      3. Online Application
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed font-sans">
                    Submit personal details, academic marks, a passport-size photograph, and selected course details in 4 intuitive steps.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-red-800/60 flex items-center justify-between text-xs text-amber-200/90 font-medium font-mono">
                  <span>Academic Year 2026–27</span>
                  <a href="#online-application" className="hover:underline flex items-center gap-1">
                    <span>4 Stages</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ADMISSION OVERVIEW & AT A GLANCE METRICS STRIP         */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <div className="lg:col-span-8">
              <ScrollEyebrow className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-700 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                  OFFICIAL ADMISSIONS PORTAL · ACADEMIC YEAR 2026–27
                </span>
              </ScrollEyebrow>

              <ScrollHeading
                as="h2"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight mt-2 leading-tight"
              >
                Welcome to ASET <span className="text-gradient-title font-bold">College Admissions</span>
              </ScrollHeading>

              <ScrollParagraph className="text-stone-600 text-sm sm:text-base mt-4 leading-relaxed font-sans">
                ASET College invites applications from eligible students for Undergraduate (UG) and Postgraduate (PG) programmes at its Chennai and Coimbatore campuses. Modern boarding and transport facilities are available. Prospective candidates can review eligibility criteria, submit required certificates, complete fee payments, and fill out the online admission form directly.
              </ScrollParagraph>
            </div>

            <div className="lg:col-span-4 bg-[#faf8f5] p-6 rounded-3xl border border-stone-200 flex flex-col justify-between">
              <div className="flex items-center gap-3 text-red-700 mb-3">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Important Year Notice</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                The main admission portal displays <strong>Academic Year 2026–27</strong>. Please confirm your current admission year, course availability, document checklist, and fee structure directly with the admissions counsellors.
              </p>
              <div className="mt-4 pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs font-bold text-stone-800">
                <span>Admissions Helpline:</span>
                <a href="tel:+919159499973" className="text-red-700 hover:underline font-mono">+91 91594 99973</a>
              </div>
            </div>
          </div>

          {/* 5-Metric At a Glance Strip */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-[#faf8f5] p-5 rounded-2xl border border-stone-200/90 shadow-2xs">
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">2</span>
              <p className="text-xs font-bold text-red-700 uppercase tracking-wider mt-2">Campuses</p>
              <p className="text-xs text-stone-500 mt-0.5">Chennai &amp; Coimbatore</p>
            </div>

            <div className="bg-[#faf8f5] p-5 rounded-2xl border border-stone-200/90 shadow-2xs">
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">UG &amp; PG</span>
              <p className="text-xs font-bold text-red-700 uppercase tracking-wider mt-2">Programmes</p>
              <p className="text-xs text-stone-500 mt-0.5">Degree &amp; Diplomas</p>
            </div>

            <div className="bg-[#faf8f5] p-5 rounded-2xl border border-stone-200/90 shadow-2xs">
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">6</span>
              <p className="text-xs font-bold text-red-700 uppercase tracking-wider mt-2">High-Growth Schools</p>
              <p className="text-xs text-stone-500 mt-0.5">Aviation to Safety</p>
            </div>

            <div className="bg-[#faf8f5] p-5 rounded-2xl border border-stone-200/90 shadow-2xs">
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">5 Modes</span>
              <p className="text-xs font-bold text-red-700 uppercase tracking-wider mt-2">Fee Payment</p>
              <p className="text-xs text-stone-500 mt-0.5">Cash, UPI, NEFT, IMPS</p>
            </div>

            <div className="bg-[#faf8f5] p-5 rounded-2xl border border-stone-200/90 shadow-2xs col-span-2 md:col-span-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">4 Stages</span>
              <p className="text-xs font-bold text-red-700 uppercase tracking-wider mt-2">Online Application</p>
              <p className="text-xs text-stone-500 mt-0.5">Fast Digital Verification</p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. 3-STEP ADMISSION PROCESS WALKTHROUGH                   */}
      {/* ========================================================= */}
      <section id="admissions-process" className="py-16 sm:py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <ScrollEyebrow className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-700" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                CLEAR &amp; TRANSPARENT ADMISSION FLOW
              </span>
            </ScrollEyebrow>

            <ScrollHeading
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight mt-2"
            >
              The 3-Step Simple <span className="text-gradient-title font-bold">Admission Process</span>
            </ScrollHeading>

            <ScrollParagraph className="text-stone-600 text-sm sm:text-base mt-4 font-sans">
              Joining ASET College is organized into three straightforward, transparent steps ensuring you have complete guidance from eligibility check to course enrollment.
            </ScrollParagraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-serif font-semibold text-stone-300 group-hover:text-red-700 transition-colors">01</span>
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-700 flex items-center justify-center font-bold">
                    <FileCheck2 className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-stone-900">
                  Admission Requirements
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                  Check eligibility criteria, required documents, community certificates, and applicable academic rules. Review programme choices across Chennai and Coimbatore.
                </p>
                <ul className="mt-5 space-y-2 text-xs text-stone-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Eligibility verification (10+2 / UG degree)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Original certificate presentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>One-on-one academic counselling</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-stone-100">
                <a
                  href="#documents-required"
                  className="text-xs font-bold text-red-700 hover:text-red-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>See Required Documents</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-serif font-semibold text-stone-300 group-hover:text-red-700 transition-colors">02</span>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                    <CreditCard className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-stone-900">
                  Fee Payment
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                  Complete required tuition and enrollment payments using flexible methods: Cash, NEFT, RTGS, IMPS, or UPI. Comply with semester deadlines.
                </p>
                <ul className="mt-5 space-y-2 text-xs text-stone-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Semester 1: As per Admission Letter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Odd Semester: July 15</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Even Semester: December 1</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-stone-100">
                <a
                  href="#fee-payment"
                  className="text-xs font-bold text-red-700 hover:text-red-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>View Payment Deadlines</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-serif font-semibold text-stone-300 group-hover:text-red-700 transition-colors">03</span>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                    <Laptop className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-stone-900">
                  Online Application
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                  Submit personal details, academic marks, a passport-size photograph, and selected course details through our streamlined 4-stage portal.
                </p>
                <ul className="mt-5 space-y-2 text-xs text-stone-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Stage 1: Applicant Details</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Stage 2: Contact &amp; ID Details</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Stage 3 &amp; 4: Education &amp; Review</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-stone-100">
                <button
                  type="button"
                  onClick={onOpenAdmissions}
                  className="text-xs font-bold text-red-700 hover:text-red-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                >
                  <span>Start Online Application</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. DOCUMENTS REQUIRED CHECKLIST (UG & PG TABS)            */}
      {/* ========================================================= */}
      <section id="documents-required" className="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <ScrollEyebrow className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-700" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                  ELIGIBILITY &amp; VERIFICATION CHECKLIST
                </span>
              </ScrollEyebrow>

              <ScrollHeading
                as="h2"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight mt-2"
              >
                Documents Required <span className="text-gradient-title font-bold">for Admission</span>
              </ScrollHeading>

              <ScrollParagraph className="text-stone-600 text-sm sm:text-base mt-3 max-w-2xl font-sans">
                Review the document checklist for Undergraduate (UG) and Postgraduate (PG) applicants. Tap each document to mark your readiness before visiting the admissions office.
              </ScrollParagraph>
            </div>

            {/* UG vs PG Toggle Buttons */}
            <div className="inline-flex p-1.5 rounded-2xl bg-stone-100 border border-stone-200 shrink-0 self-start md:self-end">
              <button
                type="button"
                onClick={() => setActiveChecklistTab('ug')}
                className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeChecklistTab === 'ug'
                    ? 'bg-stone-950 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                Undergraduate (UG)
              </button>
              <button
                type="button"
                onClick={() => setActiveChecklistTab('pg')}
                className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeChecklistTab === 'pg'
                    ? 'bg-stone-950 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                Postgraduate (PG)
              </button>
            </div>
          </div>

          {/* Interactive Checklist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeChecklistTab === 'ug'
              ? ugDocuments.map((doc) => {
                  const isChecked = checkedUgItems.includes(doc.id);
                  return (
                    <div
                      key={doc.id}
                      onClick={() => toggleUgCheck(doc.id)}
                      className={`p-6 rounded-2xl border transition-all cursor-pointer select-none flex flex-col justify-between ${
                        isChecked
                          ? 'bg-emerald-50/70 border-emerald-300 shadow-xs'
                          : 'bg-[#faf8f5] hover:bg-stone-50 border-stone-200'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-mono font-bold text-stone-400">UG DOC {doc.id < 10 ? `0${doc.id}` : doc.id}</span>
                          <div
                            className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${
                              isChecked
                                ? 'bg-emerald-600 border-emerald-600 text-white'
                                : 'border-stone-300 bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>
                        <h4 className="text-base font-serif font-semibold text-stone-900">{doc.title}</h4>
                        <p className="text-xs text-stone-600 mt-2 leading-relaxed font-sans">{doc.desc}</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] font-semibold text-stone-500">
                        {isChecked ? (
                          <span className="text-emerald-700 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Ready for Verification</span>
                          </span>
                        ) : (
                          <span>Click to mark as ready</span>
                        )}
                      </div>
                    </div>
                  );
                })
              : pgDocuments.map((doc) => {
                  const isChecked = checkedPgItems.includes(doc.id);
                  return (
                    <div
                      key={doc.id}
                      onClick={() => togglePgCheck(doc.id)}
                      className={`p-6 rounded-2xl border transition-all cursor-pointer select-none flex flex-col justify-between ${
                        isChecked
                          ? 'bg-emerald-50/70 border-emerald-300 shadow-xs'
                          : 'bg-[#faf8f5] hover:bg-stone-50 border-stone-200'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-mono font-bold text-stone-400">PG DOC {doc.id < 10 ? `0${doc.id}` : doc.id}</span>
                          <div
                            className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${
                              isChecked
                                ? 'bg-emerald-600 border-emerald-600 text-white'
                                : 'border-stone-300 bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>
                        <h4 className="text-base font-serif font-semibold text-stone-900">{doc.title}</h4>
                        <p className="text-xs text-stone-600 mt-2 leading-relaxed font-sans">{doc.desc}</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] font-semibold text-stone-500">
                        {isChecked ? (
                          <span className="text-emerald-700 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Ready for Verification</span>
                          </span>
                        ) : (
                          <span>Click to mark as ready</span>
                        )}
                      </div>
                    </div>
                  );
                })}
          </div>

          {/* Official Verification Notice Card */}
          <div className="mt-8 p-6 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-amber-900">
                  Mandatory Verification of Original Certificates
                </p>
                <p className="text-xs text-amber-800/90 mt-1 leading-relaxed">
                  Original certificates must be presented during admission confirmation. Please verify the final checklist with the admissions office before visiting the campus.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onOpenAdmissions}
              className="px-5 py-2.5 rounded-xl bg-amber-900 hover:bg-amber-950 text-white text-xs font-bold shrink-0 transition-colors cursor-pointer"
            >
              Verify Checklist With Counsellor
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. FEE PAYMENT METHODS & SEMESTER DEADLINES               */}
      {/* ========================================================= */}
      <section id="fee-payment" className="py-16 sm:py-24 bg-[#faf8f5] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <ScrollEyebrow className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-700" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                FINANCIAL INFORMATION &amp; SCHEDULES
              </span>
            </ScrollEyebrow>

            <ScrollHeading
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight mt-2"
            >
              Fee Payment Methods <span className="text-gradient-title font-bold">&amp; Deadlines</span>
            </ScrollHeading>

            <ScrollParagraph className="text-stone-600 text-sm sm:text-base mt-4 font-sans">
              The college lists Cash, NEFT, RTGS, IMPS, and UPI as approved payment methods for Chennai and Coimbatore campuses. Review the semester fee deadlines below.
            </ScrollParagraph>
          </div>

          {/* Payment Methods Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-700 flex items-center justify-center mb-4">
                <Building className="w-6 h-6" />
              </div>
              <h4 className="text-base font-serif font-semibold text-stone-900">Cash Payment</h4>
              <p className="text-xs text-stone-500 mt-1">Directly at Campus Accounts Desk</p>
              <span className="mt-4 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Instant Receipt</span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h4 className="text-base font-serif font-semibold text-stone-900">NEFT Transfer</h4>
              <p className="text-xs text-stone-500 mt-1">National Electronic Funds Transfer</p>
              <span className="mt-4 text-[11px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">All Banks</span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="text-base font-serif font-semibold text-stone-900">RTGS</h4>
              <p className="text-xs text-stone-500 mt-1">Real Time Gross Settlement</p>
              <span className="mt-4 text-[11px] font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">High Value</span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-base font-serif font-semibold text-stone-900">IMPS</h4>
              <p className="text-xs text-stone-500 mt-1">Immediate Payment Service</p>
              <span className="mt-4 text-[11px] font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">24/7 Instant</span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <QrCode className="w-6 h-6" />
              </div>
              <h4 className="text-base font-serif font-semibold text-stone-900">UPI / QR</h4>
              <p className="text-xs text-stone-500 mt-1">GPay, PhonePe, Paytm, BHIM</p>
              <span className="mt-4 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Zero Friction</span>
            </div>

          </div>

          {/* Fee Payment Deadlines Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* First Semester */}
            <div className="p-7 rounded-3xl bg-white border-2 border-red-700/30 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-700 text-white text-[10px] font-mono font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                New Admissions
              </div>
              <span className="text-xs font-mono font-bold text-red-700 uppercase tracking-widest">
                SEMESTER 01
              </span>
              <h3 className="text-2xl font-serif font-semibold text-stone-900 mt-1">
                First Semester Deadline
              </h3>
              <p className="text-sm font-semibold text-stone-800 mt-3 font-sans">
                As specified in your official Admission Letter
              </p>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed font-sans">
                Payable upon receiving your provisional seat allotment letter to secure enrollment and batch registration.
              </p>
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-700">
                <span>Receipt Issuance:</span>
                <span className="text-emerald-700">Instant Digital &amp; Physical</span>
              </div>
            </div>

            {/* Odd Semester */}
            <div className="p-7 rounded-3xl bg-white border border-stone-200 shadow-xs">
              <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest">
                REGULAR SCHEDULE
              </span>
              <h3 className="text-2xl font-serif font-semibold text-stone-900 mt-1">
                Odd Semester Deadline
              </h3>
              <div className="mt-3 flex items-center gap-2 text-2xl font-serif font-semibold text-red-700">
                <Calendar className="w-6 h-6" />
                <span>July 15</span>
              </div>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed font-sans">
                Applicable for Semesters 3 and 5. Early fee submission ensures uninterrupted academic access, lab bookings, and library cards.
              </p>
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-700">
                <span>Late Fee Grace Period:</span>
                <span className="text-stone-500">Subject to Academic Cell</span>
              </div>
            </div>

            {/* Even Semester */}
            <div className="p-7 rounded-3xl bg-white border border-stone-200 shadow-xs">
              <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest">
                REGULAR SCHEDULE
              </span>
              <h3 className="text-2xl font-serif font-semibold text-stone-900 mt-1">
                Even Semester Deadline
              </h3>
              <div className="mt-3 flex items-center gap-2 text-2xl font-serif font-semibold text-red-700">
                <Calendar className="w-6 h-6" />
                <span>December 1</span>
              </div>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed font-sans">
                Applicable for Semesters 2, 4, and 6. Required before commencement of semester practical exam registrations.
              </p>
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-700">
                <span>Payment Support:</span>
                <span className="text-emerald-700">Education Loan Desk Available</span>
              </div>
            </div>

          </div>

          {/* Document Note on Fee Revision */}
          <div className="mt-8 p-5 rounded-2xl bg-stone-100/80 border border-stone-200 text-xs text-stone-600 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Official Notice on Fee Structure:</strong> The college may revise its fee structure with prior notification. Always confirm the exact fee amount, official bank account details, and payment due dates directly with the admissions office before making any payments.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. 4-STAGE ONLINE APPLICATION WIZARD (Interactive)       */}
      {/* ========================================================= */}
      <section id="online-application" className="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <ScrollEyebrow className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-700" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                STREAMLINED DIGITAL PORTAL
              </span>
            </ScrollEyebrow>

            <ScrollHeading
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight mt-2"
            >
              Step-by-Step Online <span className="text-gradient-title font-bold">Application Process</span>
            </ScrollHeading>

            <ScrollParagraph className="text-stone-600 text-sm sm:text-base mt-4 font-sans">
              The online application is organised into four structured stages. Step through the stages below to see how each step works and keep your details prepared.
            </ScrollParagraph>
          </div>

          {/* 4-Stage Stepper Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {applicationStages.map((stage) => {
              const isActive = activeStage === stage.stage;
              return (
                <button
                  key={stage.stage}
                  type="button"
                  onClick={() => setActiveStage(stage.stage)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-stone-950 text-white border-stone-950 shadow-md scale-[1.02]'
                      : 'bg-[#faf8f5] hover:bg-stone-100 text-stone-800 border-stone-200'
                  }`}
                >
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${isActive ? 'text-amber-400' : 'text-stone-400'}`}>
                    {stage.tag}
                  </span>
                  <p className="text-sm font-serif font-semibold mt-1">{stage.title}</p>
                </button>
              );
            })}
          </div>

          {/* Active Stage Interactive View */}
          {applicationStages.map((stage) => {
            if (stage.stage !== activeStage) return null;
            return (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl bg-[#faf8f5] border border-stone-200 p-8 sm:p-12 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Stage Explanation */}
                  <div className="lg:col-span-7">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-700">
                      STAGE 0{stage.stage} OF 04
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-stone-900 mt-1">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-stone-500 font-sans mt-1">
                      {stage.subtitle}
                    </p>

                    <div className="mt-6 space-y-3">
                      <p className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
                        What you submit in this stage:
                      </p>
                      {stage.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-stone-200/80">
                          <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-stone-700 font-sans">{detail}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={onOpenAdmissions}
                        className="px-6 py-3 rounded-full bg-red-700 hover:bg-red-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wide shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
                      >
                        <span>Open Application Form</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      {stage.stage < 4 ? (
                        <button
                          type="button"
                          onClick={() => setActiveStage(stage.stage + 1)}
                          className="px-5 py-3 rounded-full bg-white hover:bg-stone-100 text-stone-800 text-xs sm:text-sm font-bold border border-stone-200 transition-all cursor-pointer"
                        >
                          Next: Stage {stage.stage + 1} →
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setActiveStage(1)}
                          className="px-5 py-3 rounded-full bg-white hover:bg-stone-100 text-stone-800 text-xs sm:text-sm font-bold border border-stone-200 transition-all cursor-pointer"
                        >
                          ← Back to Stage 1
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Right Column: "Keep These Details Ready" Checklist Box */}
                  <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-2xs">
                    <div className="flex items-center gap-2 text-stone-900 mb-4 pb-3 border-b border-stone-100">
                      <ClipboardList className="w-5 h-5 text-red-700" />
                      <h4 className="text-base font-serif font-semibold">Keep These Details Ready</h4>
                    </div>

                    <p className="text-xs text-stone-600 mb-4 leading-relaxed font-sans">
                      Ensure you have the following information and documents ready in digital format (JPG / PDF under 2MB) before beginning:
                    </p>

                    <ul className="space-y-2.5 text-xs text-stone-700 font-sans">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
                        <span>Applicant and parents&apos; names</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
                        <span>Date of birth and gender</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
                        <span>Email address and active mobile number</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
                        <span>Residential address and Aadhaar details</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
                        <span>Passport-size photograph (clean white background)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
                        <span>SSLC and HSC academic marks details</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
                        <span>UG and PG academic details (if applicable)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
                        <span>Selected course and campus preference</span>
                      </li>
                    </ul>

                    <div className="mt-6 pt-4 border-t border-stone-100 bg-[#faf8f5] p-3 rounded-xl flex items-center justify-between text-xs font-semibold text-stone-600">
                      <span>Need help filling?</span>
                      <a href="https://wa.me/919159499973" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline font-bold">
                        WhatsApp Counsellor
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. COURSES OFFERED (6 HIGH-GROWTH CAREER STREAMS)         */}
      {/* ========================================================= */}
      <section id="courses-offered" className="py-16 sm:py-24 bg-[#faf8f5] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <ScrollEyebrow className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-700" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                  CAREER-ORIENTED DEGREE &amp; DIPLOMA DISCIPLINES
                </span>
              </ScrollEyebrow>

              <ScrollHeading
                as="h2"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight mt-2"
              >
                Programmes Offered <span className="text-gradient-title font-bold">for 2026–27</span>
              </ScrollHeading>

              <ScrollParagraph className="text-stone-600 text-sm sm:text-base mt-3 max-w-2xl font-sans">
                ASET College offers specialized industry-integrated programmes designed with corporate employers across six core professional disciplines.
              </ScrollParagraph>
            </div>

            <button
              type="button"
              onClick={onOpenAdmissions}
              className="px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-950 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shrink-0 transition-all cursor-pointer self-start md:self-end"
            >
              Apply for Any Course
            </button>
          </div>

          {/* 6 Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesOffered.map((course, idx) => {
              const IconComp = course.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 w-full overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-stone-800 uppercase tracking-wider">
                        {course.campus}
                      </div>
                      <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                        <div className="w-8 h-8 rounded-lg bg-red-700 text-white flex items-center justify-center">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-semibold text-amber-300 font-mono">{course.badge}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-serif font-semibold text-stone-900">
                        {course.title}
                      </h3>
                      <p className="text-xs text-stone-600 mt-2.5 leading-relaxed font-sans">
                        {course.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      type="button"
                      onClick={onOpenAdmissions}
                      className="w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-red-700 text-stone-800 hover:text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Apply for {course.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. ADMISSIONS CONTACT DESK & OFFICIAL LINKS               */}
      {/* ========================================================= */}
      <section id="admissions-contact" className="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900 to-[#7f1d1d] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-stone-800">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
                DIRECT ADMISSIONS COUNSELLING &amp; CAMPUS VISIT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight mt-2">
                ASET College <span className="text-gradient-title font-bold">Admissions Office</span>
              </h2>
              <p className="text-sm sm:text-base text-stone-300 mt-4 leading-relaxed font-sans">
                Prospective students and parents can contact our dedicated admissions counsellors directly or book an in-person campus walkthrough to explore the laboratories, flight simulators, hostels, and student amenities.
              </p>
            </div>

            {/* Direct Contacts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
              
              {/* Chennai Office */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-base font-serif font-semibold">
                  <Building className="w-5 h-5" />
                  <span>Chennai Admissions Desk</span>
                </div>
                <div className="text-xs text-stone-300 space-y-1 font-mono">
                  <p>Mobile: <a href="tel:+919159499973" className="text-white font-bold hover:underline">+91 91594 99973</a></p>
                  <p>Alt: <a href="tel:+919159499974" className="text-white font-bold hover:underline">+91 91594 99974</a></p>
                  <p>Landline: 044 2681 0078</p>
                </div>
                <p className="text-xs text-stone-400">
                  No. 28, Irulapalayam, Bangalore Highway, Kuthambakkam, Chennai – 600124
                </p>
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

              {/* Coimbatore Office */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-base font-serif font-semibold">
                  <Building className="w-5 h-5" />
                  <span>Coimbatore Admissions Desk</span>
                </div>
                <div className="text-xs text-stone-300 space-y-1 font-mono">
                  <p>Mobile: <a href="tel:+919159499975" className="text-white font-bold hover:underline">+91 91594 99975</a></p>
                  <p>Alt: <a href="tel:+919159499977" className="text-white font-bold hover:underline">+91 91594 99977</a></p>
                  <p>Landline: 0422 714 0772</p>
                </div>
                <p className="text-xs text-stone-400">
                  Varathaiyangar Palayam, Saravanampatti, Coimbatore – 641110
                </p>
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

              {/* Email & Central Office */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-base font-serif font-semibold">
                  <Mail className="w-5 h-5" />
                  <span>Central Admissions Email</span>
                </div>
                <div className="text-xs text-stone-300 space-y-1 font-mono">
                  <p>Email: <a href="mailto:contact@asetsafety.ac.in" className="text-white font-bold hover:underline">contact@asetsafety.ac.in</a></p>
                  <p>Website: <a href="https://www.asetcollege.ac.in" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline">asetcollege.ac.in</a></p>
                </div>
                <p className="text-xs text-stone-400">
                  Open Monday to Saturday: 9:00 AM – 6:00 PM (IST) for counseling and queries.
                </p>
                <button
                  type="button"
                  onClick={onOpenAdmissions}
                  className="w-full py-2 px-3 rounded-xl bg-red-700 hover:bg-red-600 text-white text-xs font-bold transition-colors inline-flex items-center justify-center gap-1.5 mt-2 cursor-pointer"
                >
                  <span>Apply Now Online</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Official Admission Links Grid */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-300 block mb-4">
                OFFICIAL ONLINE ADMISSION LINKS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <a
                  href="https://www.asetcollege.ac.in/admission"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors flex items-center justify-between"
                >
                  <span>Admission Overview</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                </a>
                <a
                  href="https://www.asetcollege.ac.in/admission/requirements"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors flex items-center justify-between"
                >
                  <span>Requirements &amp; Rules</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                </a>
                <a
                  href="https://www.asetcollege.ac.in/admission/fee-payment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors flex items-center justify-between"
                >
                  <span>Fee Payment Desk</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                </a>
                <a
                  href="https://www.asetcollege.ac.in/admission/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors flex items-center justify-between"
                >
                  <span>Direct Online Apply</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. FREQUENTLY ASKED ADMISSIONS FAQS                       */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <ScrollEyebrow className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-700" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-700">
                GOT QUESTIONS? WE ARE HERE TO HELP
              </span>
            </ScrollEyebrow>

            <ScrollHeading
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight mt-2"
            >
              Frequently Asked <span className="text-gradient-title font-bold">Questions</span>
            </ScrollHeading>

            <ScrollParagraph className="text-stone-600 text-sm sm:text-base mt-3 font-sans">
              Answers to the most common queries regarding ASET College admissions, documents, payments, and campus life.
            </ScrollParagraph>
          </div>

          <div className="space-y-3">
            {admissionFaqs.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-stone-200/90 shadow-2xs overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-serif font-semibold text-stone-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-red-700' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans border-t border-stone-100 bg-stone-50/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Callout & Back to Home */}
          <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onBackToHome}
              className="px-6 py-3 rounded-full bg-white hover:bg-stone-100 text-stone-700 font-bold text-xs uppercase tracking-wider border border-stone-300 transition-colors cursor-pointer"
            >
              ← Back to Home
            </button>
            <button
              type="button"
              onClick={() => onNavigateToCampuses && onNavigateToCampuses('#campuses-overview')}
              className="px-6 py-3 rounded-full bg-white hover:bg-stone-100 text-stone-700 font-bold text-xs uppercase tracking-wider border border-stone-300 transition-colors cursor-pointer"
            >
              Explore Campuses &amp; Facilities →
            </button>
            <button
              type="button"
              onClick={onOpenAdmissions}
              className="px-7 py-3 rounded-full bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer"
            >
              Apply Online 2026–27 ↗
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
