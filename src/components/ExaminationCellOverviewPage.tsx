import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileCheck,
  FileText,
  GraduationCap,
  HelpCircle,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  ChevronDown,
  Building2,
  Send,
  AlertCircle,
  FileSpreadsheet,
  Briefcase,
  Layers,
  ArrowRight,
  School,
  Check,
  RotateCcw,
} from 'lucide-react';
import { ScrollHeading, ScrollParagraph, ScrollEyebrow } from './ScrollTypography';

// College Building & Campus Imagery
import campusBuildingImg from '../assets/images/campus-building-user.jpg';
import campusModernImg from '../assets/images/aset-campus-modern-full.jpg';
import studentsImg from '../assets/images/aset-aviation-students.png';
import graduatesImg from '../assets/images/aset-graduates-celebration.jpg';

interface ExaminationCellOverviewPageProps {
  onBackToHome?: () => void;
  onOpenAdmissions?: () => void;
  onNavigateToAbout?: (hash?: string) => void;
  onNavigateToCampuses?: (hash?: string) => void;
  onNavigateToLife?: (hash?: string) => void;
  onNavigateToAdmissions?: (hash?: string) => void;
  onNavigateToRequirements?: (hash?: string) => void;
  onNavigateToFeePayment?: (hash?: string) => void;
  onNavigateToApplyOnline?: (hash?: string) => void;
}

export const ExaminationCellOverviewPage: React.FC<ExaminationCellOverviewPageProps> = ({
  onBackToHome,
  onOpenAdmissions,
  onNavigateToAbout,
  onNavigateToCampuses,
  onNavigateToLife,
  onNavigateToAdmissions,
  onNavigateToRequirements,
  onNavigateToFeePayment,
  onNavigateToApplyOnline,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [queryCategory, setQueryCategory] = useState<string>('Internal Marks Discrepancy');
  const [studentRegNo, setStudentRegNo] = useState<string>('');
  const [studentName, setStudentName] = useState<string>('');
  const [studentMessage, setStudentMessage] = useState<string>('');
  const [isQuerySubmitted, setIsQuerySubmitted] = useState<boolean>(false);

  const semesterTimeline = [
    {
      step: '01',
      title: 'Internal Assessments',
      subtitle: 'Three Continuous Evaluations',
      desc: 'Three internal assessments are conducted every semester to help students monitor academic progress, understand their strengths and identify areas for improvement.',
      badge: '3 Exams / Sem',
      badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
      icon: FileSpreadsheet,
    },
    {
      step: '02',
      title: 'Progress Reports for Parents',
      subtitle: 'Transparent Family Communication',
      desc: 'After assessments, detailed progress reports are prepared and shared with parents to keep families informed about student performance and attendance patterns.',
      badge: 'Parent Outreach',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      icon: Users,
    },
    {
      step: '03',
      title: 'Marks & Attendance Submission',
      subtitle: 'Alagappa University Liaison',
      desc: 'Internal marks and official attendance records are verified and submitted to Alagappa University to meet strict academic requirements and regulatory deadlines.',
      badge: 'University Portal',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
      icon: Building2,
    },
    {
      step: '04',
      title: 'Conduct of Examinations',
      subtitle: 'End-Semester Theory & Practicals',
      desc: 'The cell oversees internal assessments and end-semester theory and practical examinations, maintaining an unwavering emphasis on discipline, integrity and fairness.',
      badge: 'Strict Oversight',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
      icon: ShieldCheck,
    },
    {
      step: '05',
      title: 'Mark Sheets & Degree Certificates',
      subtitle: 'Official University Credentials',
      desc: 'After results are declared by Alagappa University, the cell facilitates prompt, systematic distribution of official mark sheets, provisional certificates and degree certificates.',
      badge: 'Formal Distribution',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
      icon: Award,
    },
  ];

  const coreFunctions = [
    {
      num: '1',
      title: 'University Communication',
      desc: 'Handles all official communication with Alagappa University, including correspondence about examination schedules, hall tickets, confidential materials, and result publishing.',
      icon: Building2,
    },
    {
      num: '2',
      title: 'Student Queries & Grievances',
      desc: 'Addresses student queries and grievances related to results, including requests concerning mark corrections, paper revaluation, retotaling, or attendance discrepancies with prompt fairness.',
      icon: HelpCircle,
    },
    {
      num: '3',
      title: 'Smooth Conduct of Examinations',
      desc: 'Coordinates continuous internal assessments and end-semester theory and practical laboratory examinations, ensuring robust invigilation and strict compliance with university norms.',
      icon: ShieldCheck,
    },
    {
      num: '4',
      title: 'Placement & Career Support',
      desc: 'Verifies and authenticates student marks and academic records when requested by hiring corporate partners, airlines, shipping lines, and industrial training recruiters.',
      icon: Briefcase,
    },
    {
      num: '5',
      title: 'Mark Sheets & Degree Certificates',
      desc: 'Facilitates the safe custody, verification, and timely distribution of university-issued grade cards, consolidated mark sheets, provisional certificates, and convocation degree certificates.',
      icon: Award,
    },
    {
      num: '6',
      title: 'Continued Assistance',
      desc: 'Remains readily accessible to both current students and alumni seeking duplicate grade sheets, transcript attestations for higher education abroad, and academic verifications.',
      icon: UserCheck,
    },
  ];

  const staffMembers = [
    {
      role: 'Chief Examination Superintendent',
      name: 'Prof. Dr. N.V. Suresh',
      phone: '+91 91594 99973',
      designation: 'Institutional Head of Examination Affairs',
      desc: 'Oversees overall examination conduct, university correspondence, and grievance adjudication across Chennai and Coimbatore campuses.',
    },
    {
      role: 'Assistant Staff',
      name: 'Er. Raj Kumar',
      phone: '+91 91594 99973',
      designation: 'Academic Evaluation & Logistics Coordinator',
      desc: 'Coordinates hall tickets, invigilation duty rosters, answer script management, and laboratory practical assessment records.',
    },
    {
      role: 'Examination Cell Section Officer',
      name: 'Mr. Dinesh Kumar',
      phone: '+91 91594 99973',
      designation: 'Student Records & Results Officer',
      desc: 'Manages internal mark uploads, Alagappa University mark sheet distribution, and student query redressal desks.',
    },
  ];

  const faqs = [
    {
      q: '1. How many internal assessments are conducted each semester?',
      a: 'ASET College conducts three internal assessments each semester. These assessments help students monitor their academic grasp continuously, identify focus areas, and accumulate the required internal assessment score for Alagappa University.',
    },
    {
      q: '2. Are internal marks and attendance shared with parents?',
      a: 'Yes. Following each assessment cycle, detailed academic and attendance progress reports are compiled and communicated to parents so families stay updated regarding student performance.',
    },
    {
      q: '3. What university is ASET College affiliated with for examinations?',
      a: 'ASET College operates under academic collaboration and curriculum affiliation with Alagappa University (a reputed State University). All end-semester examinations, syllabi, mark statements, and degree certificates are issued by Alagappa University.',
    },
    {
      q: '4. How can a student apply for mark verification or revaluation?',
      a: 'Students having queries regarding their declared results can submit a formal application at the Examination Cell within the university-stipulated window (typically 10 to 15 days following result declaration). The cell forwards the revaluation / retotaling request to Alagappa University.',
    },
    {
      q: '5. Does the Examination Cell verify academic records for campus placement recruiters?',
      a: 'Yes. The Examination Cell officially verifies candidate marks, semester percentages, and non-arrear statuses whenever requested by airlines, logistics conglomerates, industrial safety employers, and campus recruitment panels.',
    },
  ];

  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !studentRegNo.trim()) return;
    setIsQuerySubmitted(true);
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#faf8f5] text-stone-900 font-sans selection:bg-amber-800 selection:text-white">
      {/* ========================================================= */}
      {/* 1. HERO BANNER WITH COLLEGE BUILDING ARCHITECTURE        */}
      {/* ========================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between pt-28 sm:pt-36 lg:pt-40 pb-0 overflow-hidden bg-stone-950 text-white">
        {/* College Building Image Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src={campusBuildingImg}
            alt="ASET College Architecture"
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.12] scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-black/75" />
          <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-transparent via-stone-950/40 to-stone-950" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 sm:pt-12 pb-12 sm:pb-16 my-auto">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wider text-orange-300 uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>ASET COLLEGE · EXAMINATION CELL &amp; ACADEMIC SUPPORT SYSTEM</span>
          </motion.div>

          {/* Luxury Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif font-semibold tracking-tight text-white mb-6 leading-[1.08] sm:leading-[1.05]"
          >
            Examination Cell &amp; <span className="text-gradient-title font-extrabold">Academic Support</span>
          </motion.h1>

          {/* Subtitle / Overview Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-stone-200 text-sm sm:text-base md:text-lg leading-relaxed font-sans mb-8"
          >
            ASET College’s Examination Cell manages all evaluation processes with an emphasis on efficiency,
            fairness, and transparency. Operating under the guidance of the Principal and supported by
            experienced faculty, it acts as a reliable coordination bridge between students, faculty, and
            Alagappa University across Chennai and Coimbatore campuses.
          </motion.p>

          {/* Action Trigger Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="#semester-cycle"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-500 hover:to-rose-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-orange-600/30 transition-all hover:scale-102 active:scale-98"
            >
              <Calendar className="w-4 h-4" />
              <span>A Semester with Exam Cell</span>
            </a>

            <a
              href="#core-functions"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all hover:scale-102 active:scale-98"
            >
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              <span>Core Division Functions</span>
            </a>

            <a
              href="#staff-directory"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900/80 hover:bg-stone-800 border border-stone-700 text-stone-200 font-semibold text-xs sm:text-sm transition-all"
            >
              <Users className="w-4 h-4 text-amber-400" />
              <span>Staff Directory</span>
            </a>
          </motion.div>
        </div>

        {/* Anchored Metric Strip */}
        <div className="relative z-10 w-full border-t border-white/10 bg-stone-950/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium">Internal Exams</p>
                  <p className="text-xs sm:text-sm font-bold text-white">3 Assessments / Semester</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium">University Partner</p>
                  <p className="text-xs sm:text-sm font-bold text-white">Alagappa University</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium">Campuses Covered</p>
                  <p className="text-xs sm:text-sm font-bold text-white">Chennai &amp; Coimbatore</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium">Exam Helpline</p>
                  <a href="tel:+919159499973" className="text-xs sm:text-sm font-bold text-amber-300 hover:underline">
                    +91 91594 99973
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ABOUT THE EXAMINATION CELL & OBJECTIVES                */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <ScrollEyebrow className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
                <span>ABOUT THE DIVISION &amp; PURPOSE</span>
              </ScrollEyebrow>

              <ScrollHeading className="text-2xl sm:text-4xl font-serif font-semibold text-stone-900 mb-6 leading-tight">
                A System Built on <span className="text-gradient-title font-extrabold">Trust and Transparency</span>
              </ScrollHeading>

              <ScrollParagraph className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                The Examination Cell is presented as more than an administrative unit: it is a dedicated student support system.
                Its structured and student-focused practices allow students to concentrate fully on learning and academic
                excellence without worrying about procedural complexities.
              </ScrollParagraph>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#faf8f5] border border-stone-200">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-900 mb-0.5">What the Examination Cell Does</h5>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      The main objective is to simplify examination processes while maintaining academic integrity.
                      The cell provides thorough guidance on university theory and practical examinations so students stay
                      fully informed and well-prepared.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#faf8f5] border border-stone-200">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-900 mb-0.5">Dual Campus University Coordination</h5>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      Operating under the guidance of the Principal, the cell supports candidates at both Chennai and
                      Coimbatore campuses, serving as the official conduit for Alagappa University evaluations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-stone-200 shadow-2xl bg-stone-950 text-white p-6 sm:p-8">
                <div className="absolute inset-0 z-0 opacity-20">
                  <img src={campusModernImg} alt="Modern Campus" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 space-y-5">
                  <span className="px-3 py-1 rounded-full bg-white/20 text-orange-300 text-xs font-bold uppercase tracking-wider inline-block">
                    Official Guarantee
                  </span>
                  <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    Uncompromising Academic Integrity
                  </h4>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                    From invigilation to script coding and university mark compilation, the ASET Examination Cell
                    ensures absolute fairness, zero bias, and strict adherence to university regulations.
                  </p>

                  <div className="pt-4 border-t border-white/20 grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md">
                      <span className="block text-xl font-extrabold text-orange-400">100%</span>
                      <span className="text-[11px] text-stone-300 uppercase">Transparent Audits</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md">
                      <span className="block text-xl font-extrabold text-emerald-400">Punctual</span>
                      <span className="text-[11px] text-stone-300 uppercase">Result Release</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. A SEMESTER WITH THE EXAMINATION CELL (5 STAGES)        */}
      {/* ========================================================= */}
      <section id="semester-cycle" className="py-16 sm:py-24 bg-[#faf8f5] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <ScrollEyebrow className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wider uppercase mb-3 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
              <span>CHRONOLOGICAL SEMESTER TIMELINE</span>
            </ScrollEyebrow>
            <ScrollHeading className="text-2xl sm:text-4xl font-serif font-semibold text-stone-900 mb-4">
              A Semester with the <span className="text-gradient-title font-extrabold">Examination Cell</span>
            </ScrollHeading>
            <ScrollParagraph className="text-stone-600 text-xs sm:text-sm">
              Discover how our structured evaluation lifecycle supports your academic advancement from Day One
              through graduation.
            </ScrollParagraph>
          </div>

          {/* 5 Milestone Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
            {semesterTimeline.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col justify-between p-5 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-extrabold text-orange-600 tracking-wider">
                        {item.step}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <h4 className="text-base font-serif font-bold text-stone-900 mb-1 leading-snug">
                      {item.title}
                    </h4>

                    <span className="text-[11px] text-stone-400 uppercase tracking-wider block font-semibold mb-2">
                      {item.subtitle}
                    </span>

                    <p className="text-stone-600 text-xs leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-stone-100 text-[11px] text-stone-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>Verified Milestone</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. CORE FUNCTIONS OF THE EXAMINATION DIVISION (6 PILLARS) */}
      {/* ========================================================= */}
      <section id="core-functions" className="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <ScrollEyebrow className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wider uppercase mb-3 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
              <span>DIVISION RESPONSIBILITIES</span>
            </ScrollEyebrow>
            <ScrollHeading className="text-2xl sm:text-4xl font-serif font-semibold text-stone-900 mb-4">
              Core Functions of the <span className="text-gradient-title font-extrabold">Examination Division</span>
            </ScrollHeading>
            <ScrollParagraph className="text-stone-600 text-xs sm:text-sm">
              Comprehensive overview of the administrative and student-support services managed by the department.
            </ScrollParagraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFunctions.map((fn, idx) => {
              const IconComp = fn.icon;
              return (
                <motion.div
                  key={fn.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-6 rounded-3xl bg-[#faf8f5] border border-stone-200 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-orange-600 px-2.5 py-1 rounded-full bg-orange-100">
                      Function 0{fn.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 text-stone-700 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-lg font-serif font-bold text-stone-900 mb-2">
                    {fn.title}
                  </h4>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
                    {fn.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. EXAMINATION CELL STAFF DIRECTORY                       */}
      {/* ========================================================= */}
      <section id="staff-directory" className="py-16 sm:py-24 bg-[#faf8f5] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <ScrollEyebrow className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wider uppercase mb-3 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
              <span>LEADERSHIP &amp; ADMINISTRATION</span>
            </ScrollEyebrow>
            <ScrollHeading className="text-2xl sm:text-4xl font-serif font-semibold text-stone-900 mb-4">
              Examination Cell <span className="text-gradient-title font-extrabold">Staff Directory</span>
            </ScrollHeading>
            <ScrollParagraph className="text-stone-600 text-xs sm:text-sm">
              Connect directly with designated examination officers for queries regarding hall tickets,
              internal marks, and university certificates.
            </ScrollParagraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {staffMembers.map((staff, idx) => (
              <motion.div
                key={staff.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border-2 border-stone-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-[11px] font-bold uppercase tracking-wider">
                      {staff.role}
                    </span>
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                  </div>

                  <h4 className="text-xl font-serif font-bold text-stone-900 mb-1">
                    {staff.name}
                  </h4>

                  <span className="text-xs text-stone-500 font-medium block mb-4">
                    {staff.designation}
                  </span>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                    {staff.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-stone-400 uppercase font-semibold block">Contact Phone:</span>
                      <a href={`tel:${staff.phone.replace(/\s+/g, '')}`} className="font-mono text-sm font-bold text-orange-600 hover:underline">
                        {staff.phone}
                      </a>
                    </div>
                    <a
                      href={`tel:${staff.phone.replace(/\s+/g, '')}`}
                      className="p-2.5 rounded-xl bg-orange-50 text-orange-700 hover:bg-orange-600 hover:text-white transition-colors"
                      title="Call Office"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Official Verification Notice */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Contact Verification Note:</strong> The official page lists the central campus helpline number (+91 91594 99973)
              for all three staff members. For specific appointments or in-person queries, visit the Examination Cell section desk
              during working hours (Mon–Sat, 9:00 AM – 5:30 PM).
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. NEED HELP WITH AN EXAM QUERY? (INTERACTIVE DESK)       */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-stone-900 via-stone-950 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 border border-stone-800 bg-stone-900/60 backdrop-blur-xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-300 text-xs font-semibold uppercase tracking-wider inline-block mb-4">
                  Need Help with an Exam Query?
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-4 leading-tight">
                  Questions about Results, Marks or <span className="text-gradient-title font-extrabold">Certificates?</span>
                </h3>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  Students and parents can contact the Examination Cell directly for guidance on university theory
                  schedules, practical exams, revaluation deadlines, or degree certificate collection.
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
                  <a
                    href="tel:+919159499973"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-500 hover:to-rose-500 text-white font-bold shadow-lg shadow-orange-600/30 transition-all hover:scale-102"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Exam Cell: +91 91594 99973</span>
                  </a>

                  <a
                    href="mailto:contact@asetsafety.ac.in"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all hover:scale-102"
                  >
                    <Mail className="w-4 h-4 text-orange-400" />
                    <span>contact@asetsafety.ac.in</span>
                  </a>
                </div>
              </div>

              {/* Quick Query Box */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  {isQuerySubmitted ? (
                    <div className="text-center py-6">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1">Query Recorded</h4>
                      <p className="text-xs text-stone-300 mb-4">
                        Thank you, {studentName}. The Examination Cell will review your query and contact you within 24 hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setIsQuerySubmitted(false);
                          setStudentName('');
                          setStudentRegNo('');
                          setStudentMessage('');
                        }}
                        className="px-4 py-2 rounded-xl bg-white/10 text-xs font-semibold text-stone-200 hover:bg-white/20"
                      >
                        Submit Another Query
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleQuerySubmit} className="space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-400 block mb-1">
                        Quick Examination Query Ticket
                      </span>
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Student Name"
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder:text-stone-400 focus:outline-none focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Registration / Roll Number"
                          value={studentRegNo}
                          onChange={(e) => setStudentRegNo(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder:text-stone-400 focus:outline-none focus:border-orange-500 font-mono"
                        />
                      </div>
                      <div>
                        <select
                          value={queryCategory}
                          onChange={(e) => setQueryCategory(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-white/20 text-white text-xs focus:outline-none"
                        >
                          <option value="Internal Marks Discrepancy">Internal Marks Discrepancy</option>
                          <option value="University Hall Ticket">University Hall Ticket Query</option>
                          <option value="Revaluation / Retotaling">Revaluation / Retotaling Request</option>
                          <option value="Mark Sheet & Degree Collection">Mark Sheet &amp; Degree Collection</option>
                          <option value="Other Academic Concern">Other Academic Concern</option>
                        </select>
                      </div>
                      <div>
                        <textarea
                          rows={2}
                          placeholder="Brief description of query..."
                          value={studentMessage}
                          onChange={(e) => setStudentMessage(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder:text-stone-400 focus:outline-none focus:border-orange-500"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs transition-colors shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Exam Query</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. FREQUENTLY ASKED QUESTIONS                             */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollEyebrow className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wider uppercase mb-3 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </ScrollEyebrow>
            <ScrollHeading className="text-2xl sm:text-4xl font-serif font-semibold text-stone-900 mb-3">
              Examination &amp; Evaluation <span className="text-gradient-title font-extrabold">FAQs</span>
            </ScrollHeading>
            <ScrollParagraph className="text-stone-600 text-xs sm:text-sm">
              Clear answers regarding continuous assessments, university theory protocols, and degree distribution.
            </ScrollParagraph>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-stone-200 bg-[#faf8f5] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-100/60 transition-colors"
                  >
                    <span className="font-serif font-semibold text-sm sm:text-base text-stone-900">
                      {faq.q}
                    </span>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center bg-stone-200 text-stone-600 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-orange-100 text-orange-700' : ''
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans border-t border-stone-200 pt-4">
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
      {/* 8. BOTTOM ADMISSION & ACADEMIC ROUTING STRIP              */}
      {/* ========================================================= */}
      <section className="py-12 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm">
            <div>
              <h4 className="text-lg font-serif font-bold text-stone-900 mb-1">
                Explore More Student &amp; Academic Services
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-sans">
                Review campus life, admissions requirements, and upcoming academic milestones.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {onNavigateToLife && (
                <button
                  type="button"
                  onClick={() => onNavigateToLife('#life-overview')}
                  className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Users className="w-4 h-4 text-orange-600" />
                  <span>Campus Life</span>
                </button>
              )}

              {onNavigateToApplyOnline && (
                <button
                  type="button"
                  onClick={() => onNavigateToApplyOnline('#apply-online')}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-500 hover:to-rose-500 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 shadow-md shadow-orange-600/20"
                >
                  <span>Apply Online 2026–27</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
