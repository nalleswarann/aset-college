import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DEPARTMENTS, PROGRAM_MATRIX } from '../data/universityData';
import { Department } from '../types/university';

// High-resolution authentic imagery
import aviationImg from '../assets/images/aset-aviation-students.png';
import logisticsImg from '../assets/images/dept_global_business_1794469703130.jpg';
import safetyImg from '../assets/images/dept_biotech_robotics_1794469703091.jpg';
import analyticsImg from '../assets/images/dept_design_architecture_1794469703164.jpg';
import commerceImg from '../assets/images/aset-graduates-wearing-caps.jpg';
import hospitalityImg from '../assets/images/aset-college-pathway-sunset.jpg';

import {
  Table,
  Check,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Clock,
  ShieldCheck,
  Search,
  Plane,
  Flame,
  Ship,
  TrendingUp,
  Building2,
  Award,
} from 'lucide-react';
import {
  ScrollHeading,
  ScrollEyebrow,
  ScrollAction,
} from './ScrollTypography';

interface DepartmentSectionProps {
  onSelectDepartment: (dept: Department) => void;
  onApplyForDepartment: (deptName: string) => void;
}

const SCHOOLS_DATA = [
  {
    id: 'aviation',
    icon: Plane,
    schoolName: 'School of Aviation & Pilot Training',
    tag: 'DGCA Flight Simulators',
    highlight: 'Pilot Training, Aviation & Airport Management',
    description:
      'Engineered for aspiring commercial aviation commanders, airline executives, and airport ground managers. Students train inside DGCA-compliant flight simulator bays with direct airline recruitment pipelines.',
    degrees: ['B.Sc Aviation', 'BBA Airport Management', 'MBA Airline Management', 'Pilot Ground School'],
    careers: ['Commercial Pilot Cadet', 'Airport Operations Manager', 'Airline Customer Executive', 'Flight Dispatcher'],
    image: aviationImg,
    deptRef: 'Pilot Training, Aviation & Airport Management',
  },
  {
    id: 'safety',
    icon: Flame,
    schoolName: 'School of Fire & Industrial Safety',
    tag: 'NEBOSH & IOSH Standards',
    highlight: 'Fire Engineering & Industrial Safety',
    description:
      'Comprehensive professional education for safety directors, environmental officers, and industrial emergency leaders. Features live firefighting drill rigs, hazardous materials simulation, and disaster management drills.',
    degrees: ['B.Sc Fire & Industrial Safety', 'MBA Industrial Safety', 'Postgraduate Diploma in HSE', 'Diploma in Fire & Safety'],
    careers: ['Safety Director', 'HSE Engineer', 'Industrial Risk Auditor', 'Emergency Response Officer'],
    image: safetyImg,
    deptRef: 'Fire & Industrial Safety',
  },
  {
    id: 'logistics',
    icon: Ship,
    schoolName: 'School of Logistics & Shipping',
    tag: 'Maritime Port Hubs',
    highlight: 'Logistics, Shipping & Supply Chain',
    description:
      'Specialized curriculum in multimodal freight, containerized maritime trade, customs clearance, and global supply chain analytics, supported by direct port visits and international logistics alliances.',
    degrees: ['B.Com Logistics & Shipping', 'BBA Supply Chain', 'MBA Logistics & Shipping', 'Diploma in Export Documentation'],
    careers: ['Port Operations Executive', 'Supply Chain Analyst', 'Freight Forwarding Specialist', 'Customs Broker'],
    image: logisticsImg,
    deptRef: 'Logistics & Shipping',
  },
  {
    id: 'analytics',
    icon: TrendingUp,
    schoolName: 'School of Business Analytics & AI',
    tag: 'Predictive Modeling',
    highlight: 'Business Analytics & Management',
    description:
      'Equipping next-generation corporate analysts with predictive modeling, business intelligence dashboards, Python/R analytics labs, and digital transformation strategy.',
    degrees: ['B.Sc Data Analytics', 'BBA Business Analytics', 'MBA Corporate Analytics', 'Professional Certifications'],
    careers: ['Data Strategist', 'Business Intelligence Analyst', 'Market Risk Consultant', 'Digital Operations Lead'],
    image: analyticsImg,
    deptRef: 'Business Analytics & Management Studies',
  },
  {
    id: 'commerce',
    icon: Award,
    schoolName: 'School of Commerce & Finance',
    tag: 'CA / CMA / CS / ACCA',
    highlight: 'Professional Accounting & Finance',
    description:
      'Dual accelerated degree pathways integrating B.Com curriculum with international accounting, auditing, corporate law, and taxation accreditations (CA, CMA, CS, and ACCA).',
    degrees: ['B.Com Professional Accounting', 'B.Com Corporate Secretaryship', 'M.Com Finance', 'Dual ACCA Pathway'],
    careers: ['Chartered Accountant', 'Corporate Auditor', 'Investment Analyst', 'Financial Controller'],
    image: commerceImg,
    deptRef: 'School of Commerce (CA / CMA / CS / ACCA + B.Com)',
  },
  {
    id: 'hospitality',
    icon: Building2,
    schoolName: 'School of Hotel & Hospitality',
    tag: '5-Star Luxury Suites',
    highlight: 'Hotel Management & Culinary Arts',
    description:
      'Premier hospitality training covering luxury guest relations, banquet administration, international cuisine, and food & beverage management with 5-star hotel internships.',
    degrees: ['B.Sc Hospitality & Hotel Admin', 'Diploma in Food Production', 'MBA Hospitality Management'],
    careers: ['Hotel General Manager', 'Executive Chef', 'Banquet Director', 'Luxury Concierge'],
    image: hospitalityImg,
    deptRef: 'Hotel Management',
  },
];

export const DepartmentSection: React.FC<DepartmentSectionProps> = ({
  onSelectDepartment,
  onApplyForDepartment,
}) => {
  const [selectedSchoolId, setSelectedSchoolId] = useState('aviation');
  const [durationMode, setDurationMode] = useState<'standard' | 'lateral'>('standard');
  const [isMatrixDrawerOpen, setIsMatrixDrawerOpen] = useState(false);
  const [matrixFilter, setMatrixFilter] = useState('');

  const activeSchool = SCHOOLS_DATA.find((s) => s.id === selectedSchoolId) || SCHOOLS_DATA[0];
  const matchedFullDept = DEPARTMENTS.find((d) => d.name === activeSchool.deptRef);

  return (
    <section id="departments" className="relative w-full bg-[#faf8f5] text-stone-900 font-manrope select-none py-16 sm:py-20 lg:py-24 border-b border-stone-200/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* 1. APPLE-STYLE SECTION HEADER                             */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <ScrollEyebrow delay={0.04} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-orange-800 text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
            <span>Academic Disciplines &bull; Alagappa University Supported</span>
          </ScrollEyebrow>

          <ScrollHeading delay={0.1} className="text-3xl sm:text-5xl lg:text-[54px] font-manrope font-extrabold tracking-tight text-stone-950 leading-[1.08]">
            Six Specialized Schools.{' '}
            <span className="font-serif italic font-normal text-gradient-title block sm:inline">
              Built for Industry.
            </span>
          </ScrollHeading>

          <ScrollParagraph delay={0.16} className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed font-sans">
            Every degree combines rigorous university academics with DGCA-compliant flight simulators, industrial safety rigs, and active seaport logistics apprenticeships across Chennai &amp; Coimbatore.
          </ScrollParagraph>
        </div>

        {/* ========================================================= */}
        {/* 2. SEGMENTED DISCIPLINE SWITCHER PILLS                    */}
        {/* ========================================================= */}
        <div className="flex justify-start sm:justify-center overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
          <div className="inline-flex items-center p-1 rounded-full bg-stone-200/70 border border-stone-300/60 shadow-inner shrink-0">
            {SCHOOLS_DATA.map((school) => {
              const Icon = school.icon;
              const isSelected = school.id === selectedSchoolId;
              return (
                <button
                  key={school.id}
                  onClick={() => setSelectedSchoolId(school.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-white text-stone-950 shadow-xs'
                      : 'text-stone-600 hover:text-stone-950'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-orange-600' : 'text-stone-400'}`} />
                  <span>{school.schoolName.replace('School of ', '')}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. ACTIVE SCHOOL BENTO FEATURE STAGE                      */}
        {/* ========================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSchool.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[32px] bg-white border border-stone-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-6 sm:p-8 lg:p-10 mb-20 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: School Curriculum & Info (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-bold px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70">
                    {activeSchool.tag}
                  </span>
                  <span className="text-xs font-mono text-stone-500 font-semibold">
                    Academically Supported by Alagappa University
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-950 tracking-tight leading-tight">
                    {activeSchool.schoolName}
                  </h3>
                  <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
                    {activeSchool.description}
                  </p>
                </div>

                {/* Available Degrees Pills */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold mb-2.5">
                    Offered Degree &amp; Diploma Pathways:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeSchool.degrees.map((deg, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200/70 text-stone-800 text-xs font-semibold border border-stone-200/80 transition-colors"
                      >
                        <Check className="w-3.5 h-3.5 text-orange-600" />
                        <span>{deg}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Career Pathways */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold mb-2">
                    Key Graduate Career Roles:
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 font-medium font-sans">
                    {activeSchool.careers.join(' &bull; ')}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => matchedFullDept && onSelectDepartment(matchedFullDept)}
                    className="px-5 py-3 rounded-full bg-stone-900 hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-tight shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    <GraduationCap className="w-4 h-4 text-orange-400" />
                    <span>Explore Syllabus &amp; Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onApplyForDepartment(activeSchool.highlight)}
                    className="px-5 py-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-semibold tracking-tight shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95"
                  >
                    <span>Apply for {activeSchool.schoolName.replace('School of ', '')}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: High-Res Department Image (5 cols) */}
              <div className="lg:col-span-5 relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[4/5] bg-stone-900 shadow-xl group">
                <img
                  src={activeSchool.image}
                  alt={activeSchool.schoolName}
                  className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold block mb-1">
                    Hands-On Facility
                  </span>
                  <h4 className="text-lg font-bold tracking-tight text-white font-manrope">
                    {activeSchool.highlight}
                  </h4>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* ========================================================= */}
        {/* 4. PROGRAM DURATION & ENTRY ELIGIBILITY GUIDE             */}
        {/* Curated 3-Card Pricing-Style Layout                       */}
        {/* ========================================================= */}
        <div id="eligibility" className="pt-8 border-t border-stone-200">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-orange-800 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Program Duration &amp; Entry Guide</span>
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
              Curated Academic{' '}
              <span className="font-serif italic font-normal text-gradient-title">
                Entry Pathways
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
              Explore undergraduate, lateral-entry, and fast-track diploma specifications affiliated with{' '}
              <strong className="text-stone-900 font-semibold">Alagappa University</strong>.
            </p>
          </div>

          {/* Segmented Toggle: Standard vs Lateral */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center p-1 rounded-full bg-stone-200/70 border border-stone-300/60 shadow-inner">
              <button
                type="button"
                onClick={() => setDurationMode('standard')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  durationMode === 'standard'
                    ? 'bg-white text-stone-950 shadow-xs'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                Standard Degree Pathways
              </button>
              <button
                type="button"
                onClick={() => setDurationMode('lateral')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  durationMode === 'lateral'
                    ? 'bg-white text-stone-950 shadow-xs'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <span>Fast-Track &amp; Lateral Entry</span>
                <span className="bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs">
                  Save 1 Yr
                </span>
              </button>
            </div>
          </div>

          {/* 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            
            {/* Card 1: Standard Undergraduate */}
            <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">
                  Undergraduate Degrees
                </span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-stone-950 tracking-tight font-manrope">3</span>
                  <span className="text-sm font-semibold text-stone-500">Years Full-Time</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                  Ideal for 12th standard (HSC) school-leavers seeking comprehensive academic foundation with hands-on labs.
                </p>

                <button
                  type="button"
                  onClick={() => onApplyForDepartment('B.Sc / BBA Undergraduate Degree')}
                  className="w-full mt-6 py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 font-semibold text-xs sm:text-sm transition-all border border-stone-200/80 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply for UG Degrees</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="mt-6 pt-5 border-t border-stone-100 space-y-2.5">
                  {[
                    '12th Std (HSC) Pass in any stream',
                    'Alagappa University Affiliated Degree',
                    '100% Practical Simulator & Lab Access',
                    'Monthly Industrial & Airport Exposure',
                    'Dedicated Campus Placement Assurance',
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-600">
                      <Check className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2: Lateral Entry / Post Graduate (Highlighted) */}
            <div className="p-7 rounded-3xl bg-white border-2 border-orange-500 shadow-md flex flex-col justify-between hover:shadow-xl transition-all relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-600 to-rose-600 text-white text-[10px] font-mono font-bold uppercase tracking-widest shadow-sm">
                Fast-Track Pathway
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                  Lateral Entry &bull; Direct 2nd Year
                </span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-stone-950 tracking-tight font-manrope">2</span>
                  <span className="text-sm font-semibold text-stone-500">Years Accelerated</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                  For 3-year diploma holders or degree aspirants seeking direct second-year admissions, saving a full academic year.
                </p>

                <button
                  type="button"
                  onClick={() => onApplyForDepartment('Lateral Entry Degree Program')}
                  className="w-full mt-6 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-rose-600 hover:from-orange-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply for Lateral Entry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="mt-6 pt-5 border-t border-stone-100 space-y-2.5">
                  {[
                    '3-Year Recognized Diploma or Equivalent',
                    'Direct Admission into 2nd Year B.Sc/BBA',
                    'Save 1 Full Academic Year & Tuition',
                    'Mandatory 6-Month Corporate Internship',
                    'Executive Soft-Skill & Interview Training',
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700 font-medium">
                      <Check className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3: Professional Diplomas */}
            <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">
                  Professional Diplomas
                </span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-stone-950 tracking-tight font-manrope">1 &bull; 3</span>
                  <span className="text-sm font-semibold text-stone-500">Year Tracks</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                  Fast-track vocational certificates and 3-year technical diplomas in Fire &amp; Safety, Airport Handling, and Shipping.
                </p>

                <button
                  type="button"
                  onClick={() => onApplyForDepartment('Diploma in Fire & Safety / Logistics')}
                  className="w-full mt-6 py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 font-semibold text-xs sm:text-sm transition-all border border-stone-200/80 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Diploma Options</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="mt-6 pt-5 border-t border-stone-100 space-y-2.5">
                  {[
                    '10th Std (SSLC) or 12th Std (HSC) Pass',
                    'Fire & Industrial Safety Operations',
                    'Shipping, Logistics & Cargo Procedures',
                    'Airport Ramp & Ground Staff Training',
                    'Eligible for Lateral Degree Entry After 3 Yrs',
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-600">
                      <Check className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Matrix Drawer Trigger */}
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setIsMatrixDrawerOpen(!isMatrixDrawerOpen)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200/80 text-stone-800 text-xs font-mono font-semibold transition-all border border-stone-200/90 cursor-pointer"
            >
              <Table className="w-3.5 h-3.5 text-orange-600" />
              <span>{isMatrixDrawerOpen ? 'Hide Full Eligibility Matrix' : 'View Full Program Duration & Eligibility Matrix'}</span>
              {isMatrixDrawerOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Expandable Matrix Drawer */}
          <AnimatePresence>
            {isMatrixDrawerOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden mt-6"
              >
                <div className="p-5 sm:p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-600">
                      Complete Specification Matrix (All Disciplines)
                    </span>
                    <div className="relative w-full sm:w-64">
                      <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={matrixFilter}
                        onChange={(e) => setMatrixFilter(e.target.value)}
                        placeholder="Filter programs..."
                        className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-hidden focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-sans">
                      <thead className="bg-stone-50 border-b border-stone-200 font-mono text-[11px] uppercase tracking-wider text-stone-600">
                        <tr>
                          <th className="py-2.5 px-3">Discipline &bull; Program</th>
                          <th className="py-2.5 px-3">Awarded Degree</th>
                          <th className="py-2.5 px-3">Standard Duration</th>
                          <th className="py-2.5 px-3">Entry Eligibility</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-700">
                        {PROGRAM_MATRIX.filter((item) =>
                          matrixFilter ? item.program.toLowerCase().includes(matrixFilter.toLowerCase()) || item.dept.toLowerCase().includes(matrixFilter.toLowerCase()) : true
                        ).map((row, idx) => (
                          <tr key={idx} className="hover:bg-orange-50/40 transition-colors">
                            <td className="py-2.5 px-3 font-semibold text-stone-900">{row.program}</td>
                            <td className="py-2.5 px-3 font-mono text-[11px]">{row.degree}</td>
                            <td className="py-2.5 px-3 font-mono text-[11px]">{row.duration}</td>
                            <td className="py-2.5 px-3 text-stone-600">{row.eligibility}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
