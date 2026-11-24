import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronDown,
  Building2,
  Calendar,
  CreditCard,
  UserCheck,
  ShieldAlert,
  ArrowRight,
  Download,
  School,
  IdCard,
  Camera,
  Layers,
  Sparkles,
  BookOpen,
  ArrowUpRight,
} from 'lucide-react';
import { ScrollHeading, ScrollParagraph, ScrollEyebrow } from './ScrollTypography';

// Authentic Imagery
import campusHeroImg from '../assets/images/hero_university_campus_1794469701413.jpg';
import campusSunsetImg from '../assets/images/aset-college-pathway-sunset.jpg';
import studentsImg from '../assets/images/aset-aviation-students.png';
import buildingImg from '../assets/images/campus-building-user.jpg';

interface RequirementOverviewPageProps {
  onBackToHome?: () => void;
  onOpenAdmissions?: () => void;
  onOpenVirtualTour?: () => void;
  onNavigateToAbout?: (hash?: string) => void;
  onNavigateToCampuses?: (hash?: string) => void;
  onNavigateToLife?: (hash?: string) => void;
  onNavigateToAdmissions?: (hash?: string) => void;
  onNavigateToApplyOnline?: (hash?: string) => void;
}

export const RequirementOverviewPage: React.FC<RequirementOverviewPageProps> = ({
  onBackToHome,
  onOpenAdmissions,
  onOpenVirtualTour,
  onNavigateToAbout,
  onNavigateToCampuses,
  onNavigateToLife,
  onNavigateToAdmissions,
  onNavigateToApplyOnline,
}) => {
  const [activeTab, setActiveTab] = useState<'ug' | 'pg'>('ug');
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleDoc = (id: string) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const ugDocuments = [
    {
      id: 'ug-1',
      title: '11th & 12th Mark Sheets',
      desc: 'Mark sheets of the qualifying examination (+2 / Higher Secondary) or equivalent recognized board.',
      mandatory: true,
      category: 'Academic Qualification',
      icon: FileText,
    },
    {
      id: 'ug-2',
      title: 'NIOS Equivalent Board Certificate',
      desc: 'National Institute of Open Schooling (NIOS) or other recognized equivalent board certificate, if applicable.',
      mandatory: false,
      category: 'Equivalence',
      icon: School,
    },
    {
      id: 'ug-3',
      title: '10th Standard Mark Sheet',
      desc: 'Secondary School Leaving Certificate (SSLC) / 10th standard mark statement as date of birth proof.',
      mandatory: true,
      category: 'Academic Qualification',
      icon: FileText,
    },
    {
      id: 'ug-4',
      title: 'Transfer & Conduct Certificates',
      desc: 'Original Transfer Certificate (TC) and Conduct / Character Certificate issued by the institution last attended.',
      mandatory: true,
      category: 'Institutional Record',
      icon: UserCheck,
    },
    {
      id: 'ug-5',
      title: 'Community Certificate',
      desc: 'Permanent Community Certificate card issued by the competent revenue authority (if applicable).',
      mandatory: false,
      category: 'Reservation / Category',
      icon: IdCard,
    },
    {
      id: 'ug-6',
      title: 'Migration Certificate',
      desc: 'Mandatory for candidates qualifying from boards other than the Tamil Nadu State Board (CBSE, ICSE, Other States).',
      mandatory: false,
      category: 'Interstate / Board Clearance',
      icon: Layers,
    },
    {
      id: 'ug-7',
      title: 'Photographs (10 Passport + 2 Stamp)',
      desc: 'Ten recent identical passport-size colour photographs and two stamp-size photographs of the applicant.',
      mandatory: true,
      category: 'Identity Documentation',
      icon: Camera,
    },
    {
      id: 'ug-8',
      title: 'Aadhaar Card Copy',
      desc: 'Clear photocopy of the applicant’s Government-issued Aadhaar Card for biometric & identity verification.',
      mandatory: true,
      category: 'National Identity Proof',
      icon: IdCard,
    },
  ];

  const pgDocuments = [
    {
      id: 'pg-1',
      title: 'Consolidated UG Mark Sheet',
      desc: 'Consolidated statement of marks covering all semesters / years of the Undergraduate degree programme.',
      mandatory: true,
      category: 'Degree Records',
      icon: FileText,
    },
    {
      id: 'pg-2',
      title: 'UG Provisional Certificate',
      desc: 'Provisional Degree Certificate issued by the qualifying recognized University.',
      mandatory: true,
      category: 'Degree Records',
      icon: FileText,
    },
    {
      id: 'pg-3',
      title: 'UG Degree Certificate',
      desc: 'Original Convocation / Degree Certificate awarded by the University (or bonafide course completion certificate).',
      mandatory: true,
      category: 'Degree Records',
      icon: School,
    },
    {
      id: 'pg-4',
      title: '+2 / Qualifying Examination Mark Sheet',
      desc: 'Higher Secondary (+2) or equivalent pre-university mark sheet statement.',
      mandatory: true,
      category: 'Academic Qualification',
      icon: FileText,
    },
    {
      id: 'pg-5',
      title: '10th Standard Mark Statement',
      desc: '10th standard / SSLC mark statement verifying student name, parent names, and date of birth.',
      mandatory: true,
      category: 'Academic Qualification',
      icon: FileText,
    },
    {
      id: 'pg-6',
      title: 'Transfer & Conduct Certificates',
      desc: 'Transfer Certificate (TC) and Conduct Certificate from the college / university last attended.',
      mandatory: true,
      category: 'Institutional Record',
      icon: UserCheck,
    },
    {
      id: 'pg-7',
      title: 'Community Certificate',
      desc: 'Permanent Community Certificate issued by the designated revenue authority (if applicable).',
      mandatory: false,
      category: 'Reservation / Category',
      icon: IdCard,
    },
    {
      id: 'pg-8',
      title: 'Migration Certificate',
      desc: 'Required for students whose qualifying degree was granted by an institution outside Tamil Nadu State Board / Universities.',
      mandatory: false,
      category: 'Inter-University Clearance',
      icon: Layers,
    },
    {
      id: 'pg-9',
      title: 'Photographs (10 Passport + 2 Stamp)',
      desc: 'Ten recent identical passport-size colour photographs and two stamp-size photographs of the applicant.',
      mandatory: true,
      category: 'Identity Documentation',
      icon: Camera,
    },
    {
      id: 'pg-10',
      title: 'Aadhaar Card Copy',
      desc: 'Self-attested photocopy of Government-issued Aadhaar Card for identity and address verification.',
      mandatory: true,
      category: 'National Identity Proof',
      icon: IdCard,
    },
  ];

  const currentDocs = activeTab === 'ug' ? ugDocuments : pgDocuments;
  const totalCount = currentDocs.length;
  const checkedCount = currentDocs.filter((d) => checkedDocs[d.id]).length;
  const progressPercent = Math.round((checkedCount / totalCount) * 100);

  const applicationSteps = [
    {
      step: 'Step 1',
      title: 'Collect the Prospectus',
      subtitle: 'Chennai or Coimbatore Campus Desk & Online Portal',
      desc: 'The official prospectus and application form for the various programmes can be collected directly from ASET College of Science & Technology at the Chennai or Coimbatore campus. Parents and applicants are strongly encouraged to apply early in the preceding academic year to guarantee placement.',
      badge: 'Early Application Advised',
      accent: 'border-red-600',
    },
    {
      step: 'Step 2',
      title: 'Submit Application with Booking Fee',
      subtitle: 'Seat Reservation & Advance Confirmation',
      desc: 'Submit the completed application form to the admissions office along with the admission booking fee. Note that certain specialized programs carry a minimum advance reservation amount at the time of submission. Applicants should contact the admissions desk to confirm the exact amount for their chosen course.',
      badge: 'Advance Seat Lock',
      accent: 'border-amber-600',
    },
    {
      step: 'Step 3',
      title: 'Enclose Required Documents',
      subtitle: 'Photocopies of Applicable Testimonials',
      desc: 'Attach photocopies of the applicable testimonials listed below along with the completed application form. Ensure all copies are clean, legible, and properly signed. Original certificates will be verified during the final admission confirmation desk.',
      badge: 'Mandatory Submission',
      accent: 'border-stone-900',
    },
  ];

  const faqs = [
    {
      question: '1. Who can apply to ASET?',
      answer:
        'Qualified students are welcome to apply for programmes ranging from Undergraduate (UG) to Postgraduate (PG) levels. The college also accepts students for boarding and on-campus residential accommodation at both Chennai and Coimbatore campuses.',
    },
    {
      question: '2. Where can I collect the prospectus and application?',
      answer:
        'The prospectus and application for various programmes can be collected in person from the ASET College Chennai or Coimbatore campus admissions office. Online application is also available directly through the college portal.',
    },
    {
      question: '3. Which documents should I submit with the application?',
      answer:
        'Submit clear photocopies of the documents listed for your relevant UG or PG programme (qualifying mark sheets, TC, conduct, Aadhaar, photographs, etc.). All original certificates must be presented in person at the time of official admission confirmation.',
    },
    {
      question: '4. How does the admission booking fee work?',
      answer:
        'A booking fee is submitted along with your filled application form. Certain courses have a designated minimum advance reservation amount to guarantee your seat before class capacity is reached. Contact the admissions office to confirm the exact fee for your specific stream.',
    },
    {
      question: '5. Are candidates from other states or NIOS boards eligible?',
      answer:
        'Yes. Students from other states and recognized boards such as NIOS, CBSE, or ICSE are welcome. Candidates from boards or universities outside Tamil Nadu must enclose an official Migration Certificate alongside their mark statements.',
    },
    {
      question: '6. What rules govern final admission confirmation?',
      answer:
        'Admission confirmation is carried out strictly in accordance with the regulatory criteria established by the Tamil Nadu Government and affiliated state university frameworks. Admitted students must adhere to the institution’s current management rules and regulations.',
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#faf8f5] text-stone-900 font-sans selection:bg-amber-800 selection:text-white">
      {/* ========================================================= */}
      {/* 1. HERO BANNER WITH ANCHORED RED TRI-PANEL DOCK           */}
      {/* Reference Design: Architectural backdrop & 3 Dock Pillars */}
      {/* ========================================================= */}
      <section className="relative min-h-[90vh] lg:min-h-[94vh] flex flex-col justify-between pt-28 sm:pt-36 lg:pt-40 pb-0 overflow-hidden bg-stone-950 text-white">
        {/* Cinematic College Building Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={campusHeroImg}
            alt="ASET College Building Architecture"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.08] scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-black/75" />
          <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-transparent via-stone-950/40 to-stone-950" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-14 pb-12 sm:pb-16 my-auto">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wider text-orange-300 uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>ASET COLLEGE · ADMISSION REQUIREMENTS · 2026–27 &amp; 2027–28</span>
          </motion.div>

          {/* Luxury Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif font-semibold tracking-tight text-white mb-6 leading-[1.08] sm:leading-[1.05]"
          >
            Admission Requirements &amp; <span className="text-gradient-title font-extrabold">Document Guidelines</span>
          </motion.h1>

          {/* Subtitle / Overview Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-stone-200 text-sm sm:text-base md:text-lg leading-relaxed font-sans mb-8"
          >
            Applications are welcome from qualified candidates for Undergraduate (UG) to
            Postgraduate (PG) programmes. The college also accepts boarding students. Follow our
            3-step application procedure and prepare your attested testimonials for smooth verification.
          </motion.p>

          {/* Action Trigger Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="#documents-checklist"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] active:scale-95 text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-red-700/30 transition-all cursor-pointer"
            >
              <span>View Document Checklist</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#application-procedure"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md border border-white/20 transition-all cursor-pointer"
            >
              <span>3-Step Application Guide</span>
            </a>

            {onNavigateToApplyOnline ? (
              <button
                type="button"
                onClick={() => onNavigateToApplyOnline('#apply-online')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-stone-950 hover:bg-stone-100 active:scale-95 text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer shadow-md"
              >
                <span>Apply Online 2026–27</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            ) : onOpenAdmissions ? (
              <button
                type="button"
                onClick={onOpenAdmissions}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-stone-950 hover:bg-stone-100 active:scale-95 text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer shadow-md"
              >
                <span>Apply Online 2026–27</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            ) : null}
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM RED TRI-PANEL DOCK (3 Core Pillars from Document)   */}
        {/* ========================================================= */}
        <div className="relative z-10 w-full bg-[#991b1b]/95 backdrop-blur-xl border-t border-red-500/30 text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-red-800/60">
            {/* Dock 1 */}
            <div className="p-5 sm:p-6 lg:p-7 flex items-start gap-4 hover:bg-red-900/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold tracking-widest text-red-200 uppercase">
                  STEP 1 · PROSPECTUS
                </span>
                <h2 className="text-base sm:text-lg font-bold leading-snug">
                  Collect from Campuses
                </h2>
                <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed font-sans">
                  Available at Chennai &amp; Coimbatore campuses or via online portal. Early applications advised.
                </p>
              </div>
            </div>

            {/* Dock 2 */}
            <div className="p-5 sm:p-6 lg:p-7 flex items-start gap-4 hover:bg-red-900/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold tracking-widest text-red-200 uppercase">
                  STEP 2 · BOOKING FEE
                </span>
                <h2 className="text-base sm:text-lg font-bold leading-snug">
                  Course Seat Reservation
                </h2>
                <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed font-sans">
                  Submit with advance booking fee to lock allocation. Confirm stream fee with admissions desk.
                </p>
              </div>
            </div>

            {/* Dock 3 */}
            <div className="p-5 sm:p-6 lg:p-7 flex items-start gap-4 hover:bg-red-900/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold tracking-widest text-red-200 uppercase">
                  STEP 3 · ENCLOSURES
                </span>
                <h2 className="text-base sm:text-lg font-bold leading-snug">
                  Enclose Attested Docs
                </h2>
                <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed font-sans">
                  UG: 10th, 12th, TC, Aadhaar, Photos. PG: Consolidated UG Marksheet, Degree &amp; Migration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. AT A GLANCE METRIC STRIP                               */}
      {/* ========================================================= */}
      <section className="py-8 bg-white border-b border-stone-200/90 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif font-semibold">2 Campuses</div>
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Chennai &amp; Coimbatore</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif font-semibold">UG &amp; PG</div>
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">All Academic Levels</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif font-semibold">Boarding</div>
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Residential Facilities</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif font-semibold">TN Govt.</div>
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Affiliation Norms</div>
            </div>
            <div className="space-y-1 col-span-2 md:col-span-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-red-700 font-serif font-semibold">2026–28</div>
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Admissions Open</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. 3-STEP APPLICATION PROCEDURE INTERACTIVE JOURNEY       */}
      {/* ========================================================= */}
      <section id="application-procedure" className="py-20 sm:py-28 bg-[#faf8f5] border-b border-stone-200/90 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <ScrollEyebrow delay={0.05} className="text-[#dc2626] font-bold font-mono tracking-widest uppercase mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#dc2626]" />
              <span>OFFICIAL APPLICATION PROCESS</span>
            </ScrollEyebrow>

            <ScrollHeading
              as="h2"
              delay={0.1}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight"
            >
              How to Apply for <span className="text-gradient-title font-bold">College Admission</span>
            </ScrollHeading>

            <ScrollParagraph
              delay={0.16}
              className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed font-sans"
            >
              Students wishing to apply are advised to follow the sequential steps outlined below.
              The college requests applicants to submit the completed dossier to the admissions office.
              Parents are encouraged to apply early in the preceding academic year.
            </ScrollParagraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {applicationSteps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative bg-white rounded-3xl p-7 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-2xl bg-stone-900 text-white font-serif font-semibold text-lg flex items-center justify-center shadow-md group-hover:bg-red-700 transition-colors">
                      {idx + 1}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-stone-100 text-stone-700 tracking-wider uppercase border border-stone-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2 font-serif font-semibold">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-red-700 mb-4 font-mono tracking-wide">
                    {item.subtitle}
                  </div>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-500">
                  <span>Requirement Guideline</span>
                  <span className="text-red-700 flex items-center gap-1 font-bold">
                    Official Step <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. INTERACTIVE DOCUMENT CHECKLIST (UG & PG)               */}
      {/* ========================================================= */}
      <section id="documents-checklist" className="py-20 sm:py-28 bg-white border-b border-stone-200/90 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <ScrollEyebrow delay={0.05} className="text-[#dc2626] font-bold font-mono tracking-widest uppercase mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#dc2626]" />
                <span>DOCUMENTS TO ENCLOSE WITH APPLICATION</span>
              </ScrollEyebrow>

              <ScrollHeading
                as="h2"
                delay={0.1}
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight"
              >
                Required Testimonials &amp; <span className="text-gradient-title font-bold">Certificates</span>
              </ScrollHeading>

              <ScrollParagraph
                delay={0.16}
                className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed font-sans"
              >
                Applicants should attach clean photocopies of the relevant testimonials listed below.
                Click on any document card to track your verification readiness.
              </ScrollParagraph>
            </div>

            {/* Segmented Switcher & Live Progress Indicator */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
              {/* UG vs PG Toggle */}
              <div className="p-1.5 rounded-full bg-stone-100 border border-stone-200 flex items-center shadow-inner">
                <button
                  type="button"
                  onClick={() => setActiveTab('ug')}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'ug'
                      ? 'bg-stone-950 text-white shadow-md'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Undergraduate (UG Courses)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('pg')}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'pg'
                      ? 'bg-stone-950 text-white shadow-md'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Postgraduate (PG Courses)
                </button>
              </div>

              {/* Live Checklist Badge */}
              <div className="px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center">
                  {checkedCount}
                </div>
                <div className="text-left text-xs">
                  <div className="font-bold text-stone-900">{checkedCount} of {totalCount} Marked</div>
                  <div className="text-stone-500">{progressPercent}% Ready for Verification</div>
                </div>
              </div>
            </div>
          </div>

          {/* Document Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            <AnimatePresence mode="wait">
              {currentDocs.map((doc, idx) => {
                const isChecked = !!checkedDocs[doc.id];
                const IconComponent = doc.icon;

                return (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    onClick={() => toggleDoc(doc.id)}
                    className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer select-none flex items-start gap-4 ${
                      isChecked
                        ? 'bg-emerald-50/60 border-emerald-300 shadow-sm'
                        : 'bg-[#faf8f5] hover:bg-stone-50 border-stone-200/90 hover:border-stone-300 shadow-xs'
                    }`}
                  >
                    {/* Interactive Checkbox */}
                    <div
                      className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                        isChecked
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                          : 'bg-white border-stone-300 text-transparent hover:border-stone-400'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-stone-500 uppercase tracking-wider font-mono">
                          {doc.category}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                            doc.mandatory
                              ? 'bg-red-100 text-red-800 border border-red-200'
                              : 'bg-stone-100 text-stone-600 border border-stone-200'
                          }`}
                        >
                          {doc.mandatory ? 'Mandatory' : 'If Applicable'}
                        </span>
                      </div>

                      <h3
                        className={`text-base font-bold transition-colors font-serif font-semibold ${
                          isChecked ? 'text-emerald-950' : 'text-stone-900'
                        }`}
                      >
                        {idx + 1}. {doc.title}
                      </h3>

                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
                        {doc.desc}
                      </p>

                      <div className="pt-2 text-[11px] font-semibold text-stone-400 flex items-center gap-1.5">
                        {isChecked ? (
                          <span className="text-emerald-700 font-bold flex items-center gap-1">
                            ✓ Ready for Submission
                          </span>
                        ) : (
                          <span>Tap to mark as ready</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Original Certificates Physical Verification Callout */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-stone-900 text-white border border-stone-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center shrink-0">
                <AlertCircle className="w-6 h-6 text-amber-400" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-serif font-semibold text-white">
                  Mandatory Original Certificate Verification
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm font-sans max-w-2xl leading-relaxed">
                  All original certificates listed above must be presented at the time of admission
                  confirmation. Confirmation will be carried out in accordance with the regulatory criteria
                  set by the Tamil Nadu Government.
                </p>
              </div>
            </div>

            {onOpenAdmissions && (
              <button
                type="button"
                onClick={onOpenAdmissions}
                className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md shrink-0 cursor-pointer"
              >
                Proceed to Online Application
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. RULES & REGULATIONS FOR ADMISSION CONFIRMATION         */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-[#faf8f5] border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <ScrollEyebrow delay={0.05} className="text-[#dc2626] font-bold font-mono tracking-widest uppercase mb-2 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#dc2626]" />
              <span>REGULATORY &amp; INSTITUTIONAL FRAMEWORK</span>
            </ScrollEyebrow>

            <ScrollHeading
              as="h2"
              delay={0.1}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight"
            >
              Admission Confirmation &amp; <span className="text-gradient-title font-bold">Campus Rules</span>
            </ScrollHeading>

            <ScrollParagraph
              delay={0.16}
              className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed font-sans"
            >
              Final enrolment is subject to state governmental eligibility criteria and compliance
              with college management policies.
            </ScrollParagraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rule 1: Original Certificates */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-700">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-stone-900">
                Original Certificates Presentation
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
                All original certificates listed in the prospectus must be presented in person at the time
                of admission confirmation. The official verification desk will validate original mark sheets,
                transfer certificates, and category documents against state standards.
              </p>
              <div className="pt-2 text-xs font-semibold text-stone-500 border-t border-stone-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Tamil Nadu Government Criteria Verified</span>
              </div>
            </div>

            {/* Rule 2: Management Rules */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-stone-900">
                Management Rules &amp; Regulations
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
                Students admitted to ASET College of Science &amp; Technology are expected to accept
                and strictly observe the management’s current rules and regulations, including institutional
                guidelines that may be introduced or updated from time to time.
              </p>
              <div className="pt-2 text-xs font-semibold text-stone-500 border-t border-stone-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Campus Discipline, Safety Norms &amp; Minimum 75% Attendance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. IMPORTANT OFFICIAL NOTES & DISCLAIMERS                */}
      {/* ========================================================= */}
      <section className="py-14 bg-amber-50/60 border-b border-amber-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-amber-300/80 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-amber-800 font-bold text-sm sm:text-base font-serif font-semibold">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <span>Important Admissions Notices &amp; Notes</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                <span>
                  <strong>Academic Year Guidance:</strong> The official requirements page lists
                  “Admission Open for 2027–28”, with sections noting “Admission Open for 2026–27”.
                  Confirm the exact target academic cycle directly with the admissions office.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                <span>
                  <strong>Booking Fee Amount:</strong> The webpage notes that certain courses require
                  a minimum advance reservation fee when the application is submitted. Confirm the current
                  seat reservation amount for your chosen course stream with the admissions desk.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                <span>
                  <strong>Checklist Verification:</strong> Applicants should verify the latest
                  department-specific eligibility conditions and documents before final submission.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. FREQUENTLY ASKED QUESTIONS (FAQS) ACCORDION            */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/90">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <ScrollEyebrow delay={0.05} className="text-[#dc2626] font-bold font-mono tracking-widest uppercase mb-2 flex items-center justify-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#dc2626]" />
              <span>COMMON INQUIRIES</span>
            </ScrollEyebrow>

            <ScrollHeading
              as="h2"
              delay={0.1}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight"
            >
              Frequently Asked <span className="text-gradient-title font-bold">Questions</span>
            </ScrollHeading>

            <ScrollParagraph
              delay={0.16}
              className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed font-sans"
            >
              Official answers from the ASET Admissions &amp; Requirements Guide.
            </ScrollParagraph>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-200/90 overflow-hidden bg-[#faf8f5] transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-stone-900 hover:text-red-700 transition-colors cursor-pointer text-sm sm:text-base font-serif font-semibold"
                  >
                    <span>{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="p-1 rounded-full bg-white text-stone-700 border border-stone-200 shrink-0"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 sm:px-6 pb-6 text-stone-600 text-xs sm:text-sm leading-relaxed font-sans border-t border-stone-200/60 pt-3"
                      >
                        {faq.answer}
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
      {/* 8. ADMISSIONS OFFICE CONTACT DESKS                        */}
      {/* ========================================================= */}
      <section id="requirements-contact" className="py-20 sm:py-28 bg-[#0c0d0f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-red-500 font-bold font-mono tracking-widest uppercase mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4 text-red-500" />
              <span>ADMISSIONS DIRECTORATE HELPLINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight">
              Admissions Office <span className="text-gradient-title font-bold">Contact Details</span>
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-3 leading-relaxed font-sans">
              Connect directly with our admissions counsellors at Chennai and Coimbatore campuses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Contact Card 1: Direct Landline */}
            <div className="p-7 rounded-3xl bg-stone-900/90 border border-stone-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider block">
                Admissions Director – Direct
              </span>
              <a
                href="tel:04426810078"
                className="text-xl sm:text-2xl font-bold text-white hover:text-red-400 transition-colors block font-serif font-semibold"
              >
                (91) 44 2681 0078
              </a>
              <p className="text-xs text-stone-400 leading-relaxed font-sans">
                Official landline for admissions verification and prospectus collection.
              </p>
            </div>

            {/* Contact Card 2: Mobile Helplines */}
            <div className="p-7 rounded-3xl bg-stone-900/90 border border-stone-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-600/20 text-orange-400 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider block">
                Admissions Mobile Helplines
              </span>
              <div className="space-y-1">
                <a
                  href="tel:+919159499973"
                  className="text-base sm:text-lg font-bold text-white hover:text-orange-400 transition-colors block font-serif font-semibold"
                >
                  +91 91594 99973
                </a>
                <a
                  href="tel:+919159499974"
                  className="text-base sm:text-lg font-bold text-white hover:text-orange-400 transition-colors block font-serif font-semibold"
                >
                  +91 91594 99974
                </a>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed font-sans">
                Direct WhatsApp and call support for seat reservation and booking fees.
              </p>
            </div>

            {/* Contact Card 3: Email & Web */}
            <div className="p-7 rounded-3xl bg-stone-900/90 border border-stone-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider block">
                Central Admissions Email
              </span>
              <a
                href="mailto:contact@asetsafety.ac.in"
                className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors block font-serif font-semibold break-all"
              >
                contact@asetsafety.ac.in
              </a>
              <div className="pt-1">
                <a
                  href="https://www.asetcollege.ac.in/admission/requirements"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-red-400 hover:text-red-300 inline-flex items-center gap-1.5"
                >
                  <span>Official Requirements Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-red-500 shrink-0" />
              <span className="text-stone-300 text-xs sm:text-sm">
                ASET Campuses in <strong>Chennai</strong> &amp; <strong>Coimbatore</strong> · Tamil Nadu
              </span>
            </div>

            <div className="flex items-center gap-3">
              {onBackToHome && (
                <button
                  type="button"
                  onClick={onBackToHome}
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                >
                  Back to Home
                </button>
              )}
              {onNavigateToAdmissions && (
                <button
                  type="button"
                  onClick={() => onNavigateToAdmissions('#admission-overview')}
                  className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-md"
                >
                  Admission Overview Guide ↗
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
