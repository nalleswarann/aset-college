import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Check,
  Building2,
  GraduationCap,
  Clock,
  Send,
  Globe,
  User,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  FileCheck,
  Compass,
  PhoneCall,
  Navigation,
  School,
  Plane,
  Truck,
  Flame,
  BarChart3,
  BookOpen,
  Coffee,
} from 'lucide-react';
import { ScrollHeading, ScrollParagraph, ScrollEyebrow } from './ScrollTypography';

// Campus & Facility Imagery
import roboticsTechImg from '../assets/images/contact.webp';

interface ContactOverviewPageProps {
  onBackToHome?: () => void;
  onOpenAdmissions?: () => void;
  onNavigateToAbout?: (hash?: string) => void;
  onNavigateToCampuses?: (hash?: string) => void;
  onNavigateToLife?: (hash?: string) => void;
  onNavigateToAdmissions?: (hash?: string) => void;
  onNavigateToRequirements?: (hash?: string) => void;
  onNavigateToFeePayment?: (hash?: string) => void;
  onNavigateToApplyOnline?: (hash?: string) => void;
  initialDepartment?: string;
}

// Official Departments from PDF
const DEPARTMENTS_LIST = [
  {
    id: 'aviation',
    name: 'Aviation',
    icon: Plane,
    tagline: 'Pilot Training, Cabin Crew & Airport Operations',
  },
  {
    id: 'logistics',
    name: 'Logistics & Shipping',
    icon: Truck,
    tagline: 'Supply Chain, Air Cargo & Port Logistics',
  },
  {
    id: 'fire-safety',
    name: 'Fire & Industrial Safety',
    icon: Flame,
    tagline: 'HSE Engineering, NEBOSH & Disaster Management',
  },
  {
    id: 'management',
    name: 'Management Studies',
    icon: BarChart3,
    tagline: 'Global Business, Analytics & Financial Leadership',
  },
  {
    id: 'commerce',
    name: 'School of Commerce',
    icon: BookOpen,
    tagline: 'Professional Accounting, Taxation & FinTech',
  },
  {
    id: 'hotel-management',
    name: 'Hotel Management',
    icon: Coffee,
    tagline: 'Hospitality Administration & Culinary Arts',
  },
];

// Official Campuses from PDF
const CAMPUSES_OFFICIAL = [
  {
    id: 'chennai',
    title: 'Chennai Campus',
    institution: 'ASET Group of Institutions',
    address: 'No. 28, Irulapalayam, Kuthambakkam, Chennai – 600124, Tamil Nadu',
    mobile: '+91 91594 99973 / 74',
    mobileTel: ['+919159499973', '+919159499974'],
    landline: '044 2681 0078',
    landlineTel: '04426810078',
    email: 'contact@asetsafety.ac.in',
    badge: 'Flagship Campus',
    mapLink: 'https://maps.google.com/?q=ASET+College+of+Science+and+Technology+Chennai',
  },
  {
    id: 'coimbatore',
    title: 'Coimbatore Campus',
    institution: 'ASET Group of Institutions',
    address: 'Varathaiyangar Palayam, Saravanampatti, Coimbatore – 641110, Tamil Nadu',
    mobile: '+91 91594 99975 / 77',
    mobileTel: ['+919159499975', '+919159499977'],
    landline: '0422 714 0772',
    landlineTel: '04227140772',
    email: 'contact@asetsafety.ac.in',
    badge: 'Regional Hub',
    mapLink: 'https://maps.google.com/?q=ASET+College+Coimbatore',
  },
];

// Official Offices Abroad from PDF
const OFFICES_ABROAD = [
  {
    country: 'Singapore',
    person: 'R. Prasana Vengatesh',
    address: 'Blk 186 #11-76 Pasir Ris, Street 11, Singapore.',
    email: 'contact@asetsafety.ac.in',
    flag: '🇸🇬',
    phone: null,
  },
  {
    country: 'Saudi Arabia',
    person: 'Mr. Nizam',
    address: 'Malaz St, Malaz, Riyadh, Saudi Arabia.',
    contact: '+966 53 085 6626',
    contactTel: '+966530856626',
    email: 'contact@asetsafety.ac.in',
    flag: '🇸🇦',
    phone: '+966 53 085 6626',
  },
  {
    country: 'Malaysia',
    person: 'Mr. Muzamil',
    address: 'No. 48 Jalan Teratai, Taman Johor Jaya, 81100 Johor Bahru, Johor, Malaysia.',
    email: 'contact@asetsafety.ac.in',
    flag: '🇲🇾',
    phone: null,
  },
];

export const ContactOverviewPage: React.FC<ContactOverviewPageProps> = ({
  onBackToHome,
  onOpenAdmissions,
  onNavigateToAbout,
  onNavigateToCampuses,
  onNavigateToLife,
  onNavigateToAdmissions,
  onNavigateToRequirements,
  onNavigateToFeePayment,
  onNavigateToApplyOnline,
  initialDepartment = '',
}) => {
  const defaultDept = DEPARTMENTS_LIST[0].name;

  // Form State (Matching Document: Name, email address, phone number, department/course, preferred campus, message)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: initialDepartment || defaultDept,
    campus: CAMPUSES_OFFICIAL[0].title,
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  // Dropdown open states
  const [isDeptOpen, setIsDeptOpen] = useState(false);
  const [isCampusOpen, setIsCampusOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for click outside handling
  const deptRef = useRef<HTMLDivElement>(null);
  const campusRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Live real-time clock
  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Update initial department if prop changes
  useEffect(() => {
    if (initialDepartment) {
      setFormData((prev) => ({ ...prev, department: initialDepartment }));
    }
  }, [initialDepartment]);

  // Click outside listener for all custom dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (deptRef.current && !deptRef.current.contains(e.target as Node)) {
        setIsDeptOpen(false);
      }
      if (campusRef.current && !campusRef.current.contains(e.target as Node)) {
        setIsCampusOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s\-()]{7,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid phone number';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please share your academic background or message';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = `ASET-2027-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRef(randomRef);
    }, 600);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#faf8f5] text-stone-900 font-sans selection:bg-amber-800 selection:text-white">


      {/* ========================================================= */}
      {/* 1. ONLINE ENQUIRY & CONTACT FORM (AT TOP)                 */}
      {/* ========================================================= */}
      <section
        id="contact-form-section"
        className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 bg-[#faf8f5] text-stone-900 border-b border-stone-200"
      >
        <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wider uppercase mb-1 justify-center shadow-xs"
            >
              <span>ONLINE ENQUIRY &amp; ADMISSION FORM</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-serif font-semibold text-stone-900 tracking-tight"
            >
              Get in Touch &amp; <span className="text-gradient-title font-extrabold">Enquiry Form</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-sm sm:text-base md:text-lg text-stone-600 font-sans max-w-2xl mx-auto leading-relaxed"
            >
              Official enquiry and admissions desk for ASET College. Submit your details below and our counseling team will connect with you within one working day.
            </motion.p>
          </div>

          {/* CONTACT SECTION CARD (From Home Page) */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* ------------------------------------------------------- */}
            {/* LEFT PANE: Precision Visual, Floating Badge & Clock     */}
            {/* ------------------------------------------------------- */}
            <div className="lg:col-span-4 xl:col-span-5 relative min-h-[320px] sm:min-h-[420px] lg:min-h-full bg-stone-950 overflow-hidden group">
              <img
                src={roboticsTechImg}
                alt="ASET Innovation Hub"
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />

              {/* Top Floating Badge & Animated Dropdown Pill */}
              <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-20">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 shadow-xs">
                  <div className="w-4 h-4 flex items-center justify-center text-stone-900">
                    <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-current">
                      <path d="M50 0 C48 35, 35 48, 0 50 C35 52, 48 65, 50 100 C52 65, 65 52, 100 50 C65 48, 52 35, 50 0 Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-stone-500 leading-none">
                      /CONTACT
                    </span>
                    <span className="text-xs font-bold text-stone-900 tracking-tight leading-tight pt-0.5">
                      ASET College
                    </span>
                  </div>
                </div>

                <div className="relative" ref={menuRef}>
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 shadow-xs text-xs font-semibold text-stone-900 hover:bg-white transition-all cursor-pointer"
                  >
                    <motion.span
                      animate={{ rotate: isMenuOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-3.5 h-3.5 text-stone-600" />
                    </motion.span>
                  </motion.button>

                  <AnimatePresence>
                    {isMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute right-0 mt-2 w-52 py-2 bg-white/98 backdrop-blur-xl rounded-xl shadow-2xl border border-stone-200 z-30 font-sans text-xs"
                      >
                        {onNavigateToAbout && (
                          <button
                            type="button"
                            onClick={() => {
                              setIsMenuOpen(false);
                              onNavigateToAbout('#about-overview');
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-orange-600 transition-colors text-stone-700 cursor-pointer"
                          >
                            About ASET
                          </button>
                        )}
                        {onNavigateToCampuses && (
                          <button
                            type="button"
                            onClick={() => {
                              setIsMenuOpen(false);
                              onNavigateToCampuses('#campuses-overview');
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-orange-600 transition-colors text-stone-700 cursor-pointer"
                          >
                            Campuses &amp; Facilities
                          </button>
                        )}
                        {onNavigateToLife && (
                          <button
                            type="button"
                            onClick={() => {
                              setIsMenuOpen(false);
                              onNavigateToLife('#life-overview');
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-orange-600 transition-colors text-stone-700 cursor-pointer"
                          >
                            Life at ASET
                          </button>
                        )}
                        {onNavigateToApplyOnline && (
                          <button
                            type="button"
                            onClick={() => {
                              setIsMenuOpen(false);
                              onNavigateToApplyOnline('#apply-online');
                            }}
                            className="w-full text-left px-4 py-2 text-rose-600 font-bold border-t border-stone-100 hover:bg-rose-50 transition-colors cursor-pointer"
                          >
                            Apply Online 2027–28 ↗
                          </button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Bottom-Left Live Monospace Clock */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20">
                <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/10 tracking-wider">
                  {currentTime || '9:19:01 PM'}
                </span>
              </div>
            </div>

            {/* ------------------------------------------------------- */}
            {/* RIGHT PANE: Interactive Form                            */}
            {/* ------------------------------------------------------- */}
            <div className="lg:col-span-8 xl:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-white space-y-8">
              {/* Top Header: Eyebrow + General & Admissions Helpline */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-stone-200/90">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-xs font-mono font-bold tracking-[0.2em] text-orange-600 uppercase">
                      ADMISSIONS &amp; COUNSELING 2027–2028
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-stone-900 tracking-tight">
                    Get in Touch with{' '}
                    <span className="text-gradient-title font-extrabold">ASET</span>
                  </h3>
                </div>

                {/* Quick Contacts Row from PDF */}
                <div className="flex items-center gap-6 sm:gap-8 pt-1 sm:pt-0">
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 mb-0.5">
                      GENERAL EMAIL
                    </span>
                    <a
                      href="mailto:contact@asetsafety.ac.in"
                      className="text-xs sm:text-[13px] font-semibold text-stone-900 hover:text-orange-600 transition-colors block font-mono"
                    >
                      contact@asetsafety.ac.in
                    </a>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 mb-0.5">
                      PHONE HELPLINE
                    </span>
                    <a
                      href="tel:+919159499973"
                      className="text-xs sm:text-[13px] font-semibold text-stone-900 hover:text-orange-600 transition-colors block font-mono"
                    >
                      +91 91594 99973 / 74
                    </a>
                  </div>
                </div>
              </div>

              {/* Form or Submission Confirmation */}
              {submittedRef ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 space-y-5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/25">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
                      Inquiry Registered · Reference #{submittedRef}
                    </span>
                    <h4 className="text-2xl font-bold text-stone-900 font-serif">
                      Thank you, {formData.fullName}
                    </h4>
                    <p className="text-sm text-stone-600 max-w-lg leading-relaxed pt-1 font-sans">
                      Your application enquiry for <strong className="text-stone-900">{formData.department}</strong> at{' '}
                      <strong className="text-stone-900">{formData.campus}</strong> has been received. Our admissions team aims to reply within one working day.
                    </p>
                  </div>
                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSubmittedRef(null);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          department: defaultDept,
                          campus: CAMPUSES_OFFICIAL[0].title,
                          message: '',
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-semibold tracking-wide hover:bg-stone-800 transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name, Email & Phone Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-medium text-stone-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your Name"
                        className={`w-full px-4 py-3 rounded-xl bg-stone-50/80 border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all ${
                          errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-stone-200'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-600 font-mono">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-medium text-stone-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className={`w-full px-4 py-3 rounded-xl bg-stone-50/80 border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all ${
                          errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-stone-200'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-600 font-mono">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-medium text-stone-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 91594 99973"
                        className={`w-full px-4 py-3 rounded-xl bg-stone-50/80 border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-mono ${
                          errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-stone-200'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-600 font-mono">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Department / Course & Preferred Campus Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    {/* Department / Course Dropdown */}
                    <div className="space-y-1.5 relative" ref={deptRef}>
                      <label className="block text-xs font-medium text-stone-700">
                        Department / Course
                      </label>

                      <button
                        type="button"
                        onClick={() => {
                          setIsDeptOpen(!isDeptOpen);
                          setIsCampusOpen(false);
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-stone-50/80 border text-sm text-stone-900 flex items-center justify-between gap-2 text-left cursor-pointer transition-all ${
                          isDeptOpen
                            ? 'border-orange-500 bg-white ring-2 ring-orange-500/20 shadow-sm'
                            : 'border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <span className="truncate font-medium text-stone-800">
                          {formData.department}
                        </span>
                        <motion.span
                          animate={{ rotate: isDeptOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="shrink-0 text-stone-500"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isDeptOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -6, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.98 }}
                            transition={{ duration: 0.16, ease: 'easeOut' }}
                            className="absolute left-0 right-0 top-full mt-1.5 z-40 max-h-60 overflow-y-auto rounded-xl bg-white/98 backdrop-blur-xl border border-stone-200/90 shadow-2xl py-1.5 text-xs sm:text-[13px]"
                          >
                            {DEPARTMENTS_LIST.map((dept) => {
                              const isSelected = formData.department === dept.name;
                              return (
                                <button
                                  key={dept.id}
                                  type="button"
                                  onClick={() => {
                                    setFormData({ ...formData, department: dept.name });
                                    setIsDeptOpen(false);
                                  }}
                                  className={`w-full px-4 py-2.5 text-left flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                                    isSelected
                                      ? 'bg-orange-50 text-orange-900 font-semibold border-l-2 border-orange-600'
                                      : 'text-stone-700 hover:bg-stone-50 hover:text-stone-950'
                                  }`}
                                >
                                  <span className="truncate">{dept.name}</span>
                                  {isSelected && (
                                    <Check className="w-4 h-4 text-orange-600 shrink-0" />
                                  )}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Preferred Campus Dropdown */}
                    <div className="space-y-1.5 relative" ref={campusRef}>
                      <label className="block text-xs font-medium text-stone-700">
                        Preferred Campus
                      </label>

                      <button
                        type="button"
                        onClick={() => {
                          setIsCampusOpen(!isCampusOpen);
                          setIsDeptOpen(false);
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-stone-50/80 border text-sm text-stone-900 flex items-center justify-between gap-2 text-left cursor-pointer transition-all ${
                          isCampusOpen
                            ? 'border-orange-500 bg-white ring-2 ring-orange-500/20 shadow-sm'
                            : 'border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <span className="truncate font-medium text-stone-800">
                          {formData.campus}
                        </span>
                        <motion.span
                          animate={{ rotate: isCampusOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="shrink-0 text-stone-500"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isCampusOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -6, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.98 }}
                            transition={{ duration: 0.16, ease: 'easeOut' }}
                            className="absolute left-0 right-0 top-full mt-1.5 z-40 rounded-xl bg-white/98 backdrop-blur-xl border border-stone-200/90 shadow-2xl py-1.5 text-xs sm:text-[13px]"
                          >
                            {CAMPUSES_OFFICIAL.map((campus) => {
                              const isSelected = formData.campus === campus.title;
                              return (
                                <button
                                  key={campus.id}
                                  type="button"
                                  onClick={() => {
                                    setFormData({ ...formData, campus: campus.title });
                                    setIsCampusOpen(false);
                                  }}
                                  className={`w-full px-4 py-2.5 text-left flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                                    isSelected
                                      ? 'bg-orange-50 text-orange-900 font-semibold border-l-2 border-orange-600'
                                      : 'text-stone-700 hover:bg-stone-50 hover:text-stone-950'
                                  }`}
                                >
                                  <div className="flex items-center gap-2 truncate">
                                    <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                                    <span className="truncate">{campus.title}</span>
                                  </div>
                                  {isSelected && (
                                    <Check className="w-4 h-4 text-orange-600 shrink-0" />
                                  )}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Row 3: Message Textarea */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-stone-700">
                      Message / Academic Query *
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your academic background, preferred course, or inquiry details..."
                      className={`w-full px-4 py-3 rounded-xl bg-stone-50/80 border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 resize-none transition-all ${
                        errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-stone-200'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-600 font-mono">{errors.message}</p>
                    )}
                  </div>

                  {/* Row 4: Submit Button & Response Notice */}
                  <div className="pt-2 flex items-center justify-between gap-4 flex-wrap">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-rose-700 hover:from-orange-500 hover:to-rose-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-orange-600/25 hover:shadow-orange-600/40 transition-all cursor-pointer disabled:opacity-50 group"
                    >
                      <span>
                        {isSubmitting ? 'Registering Inquiry...' : 'Submit Contact Enquiry'}
                      </span>
                      <ArrowRight className="w-4 h-4 stroke-[2.4] group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <span className="text-[11px] font-mono text-stone-500 hidden sm:inline-block">
                      Admissions team aims to reply within one working day
                    </span>
                  </div>
                </form>
              )}

              {/* Bottom Row: Quick Campus Reference Cards */}
              <div className="pt-6 border-t border-stone-200/90 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-600">
                <div className="p-3.5 rounded-xl bg-stone-50/80 border border-stone-200/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-stone-900 font-bold text-xs">
                    <Building2 className="w-3.5 h-3.5 text-orange-600" />
                    <span>Chennai Campus</span>
                  </div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    No. 28, Irulapalayam, Kuthambakkam, Chennai – 600124
                  </p>
                  <p className="text-[10px] font-mono text-stone-500 pt-0.5">
                    Ph: +91 91594 99973 / 74 · 044 2681 0078
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50/80 border border-stone-200/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-stone-900 font-bold text-xs">
                    <GraduationCap className="w-3.5 h-3.5 text-rose-600" />
                    <span>Coimbatore Campus</span>
                  </div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    Varathaiyangar Palayam, Saravanampatti, Coimbatore – 641110
                  </p>
                  <p className="text-[10px] font-mono text-stone-500 pt-0.5">
                    Ph: +91 91594 99975 / 77 · 0422 714 0772
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ADMISSION ENQUIRY, ADMINISTRATIVE & CITY OFFICE       */}
      {/* ========================================================= */}
      <section id="admission-enquiry" className="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <ScrollEyebrow className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wider uppercase mb-3 justify-center">
              <span>CENTRAL ADMISSION &amp; ADMINISTRATIVE DESKS</span>
            </ScrollEyebrow>
            <ScrollHeading className="text-2xl sm:text-4xl font-serif font-semibold text-stone-900 mb-4">
              Admission Enquiry &amp; <span className="text-gradient-title font-extrabold">Office Directory</span>
            </ScrollHeading>
            <ScrollParagraph className="text-stone-600 text-xs sm:text-sm max-w-2xl mx-auto">
              Direct access to admissions, administrative headquarters, and the Chennai city coordination office.
            </ScrollParagraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Admission Enquiry */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#faf8f5] border-2 border-orange-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center shadow-md shadow-orange-600/30">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider">
                    Primary Desk
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">
                  Admission Enquiry
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm text-stone-700 font-sans mb-6">
                  <div>
                    <span className="block text-[11px] font-mono uppercase text-stone-400 font-bold mb-0.5">
                      Phone Numbers:
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      <a href="tel:+919159499973" className="font-mono font-bold text-orange-600 hover:underline">
                        +91 91594 99973
                      </a>
                      <span className="text-stone-400">/</span>
                      <a href="tel:+919159499974" className="font-mono font-bold text-orange-600 hover:underline">
                        74
                      </a>
                    </div>
                  </div>

                  <div>
                    <span className="block text-[11px] font-mono uppercase text-stone-400 font-bold mb-0.5">
                      WhatsApp:
                    </span>
                    <a
                      href="https://wa.me/919159499973"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono font-bold text-emerald-700 hover:underline flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>+91 91594 99973</span>
                    </a>
                  </div>

                  <div>
                    <span className="block text-[11px] font-mono uppercase text-stone-400 font-bold mb-0.5">
                      Email Address:
                    </span>
                    <a href="mailto:contact@asetsafety.ac.in" className="font-mono text-stone-800 hover:text-orange-600 font-medium break-all">
                      contact@asetsafety.ac.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee Notice from PDF */}
              <div className="pt-4 border-t border-stone-200/80">
                <div className="p-3 rounded-2xl bg-orange-50 border border-orange-200/70 text-xs text-orange-950 flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Response time:</strong> The admissions team aims to reply within one working day.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Administrative Office */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#faf8f5] border border-stone-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-stone-900 text-white flex items-center justify-center shadow-md">
                    <Building2 className="w-6 h-6 text-amber-400" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider">
                    HQ Admin
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">
                  Administrative Office
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm text-stone-700 font-sans mb-6">
                  <div>
                    <span className="block text-[11px] font-mono uppercase text-stone-400 font-bold mb-0.5">
                      Mobile Numbers:
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      <a href="tel:+919159499973" className="font-mono font-bold text-stone-900 hover:text-orange-600 hover:underline">
                        +91 91594 99973
                      </a>
                      <span className="text-stone-400">/</span>
                      <a href="tel:+919159499974" className="font-mono font-bold text-stone-900 hover:text-orange-600 hover:underline">
                        74
                      </a>
                    </div>
                  </div>

                  <div>
                    <span className="block text-[11px] font-mono uppercase text-stone-400 font-bold mb-0.5">
                      Email Address:
                    </span>
                    <a href="mailto:contact@asetsafety.ac.in" className="font-mono text-stone-800 hover:text-orange-600 font-medium break-all">
                      contact@asetsafety.ac.in
                    </a>
                  </div>

                  <div>
                    <span className="block text-[11px] font-mono uppercase text-stone-400 font-bold mb-0.5">
                      Office Schedule:
                    </span>
                    <p className="text-stone-600">
                      Monday to Saturday: 9:00 AM – 5:30 PM IST
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <a
                  href="tel:+919159499973"
                  className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Administrative Office</span>
                </a>
              </div>
            </motion.div>

            {/* Card 3: City Office – Chennai */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#faf8f5] border border-stone-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-600 to-orange-600 text-white flex items-center justify-center shadow-md shadow-rose-600/25">
                    <User className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider">
                    City Office
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">
                  City Office – Chennai
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm text-stone-700 font-sans mb-6">
                  <div>
                    <span className="block text-[11px] font-mono uppercase text-stone-400 font-bold mb-0.5">
                      Contact Person:
                    </span>
                    <p className="font-bold text-stone-900 text-sm sm:text-base">
                      Mr. Santhosh Kumar
                    </p>
                  </div>

                  <div>
                    <span className="block text-[11px] font-mono uppercase text-stone-400 font-bold mb-0.5">
                      Mobile Number:
                    </span>
                    <a
                      href="tel:+918686251568"
                      className="font-mono font-bold text-orange-600 hover:underline text-sm sm:text-base flex items-center gap-1.5"
                    >
                      <Phone className="w-4 h-4 text-orange-600" />
                      <span>+91 86862 51568</span>
                    </a>
                  </div>

                  <div>
                    <span className="block text-[11px] font-mono uppercase text-stone-400 font-bold mb-0.5">
                      Direct WhatsApp:
                    </span>
                    <a
                      href="https://wa.me/918686251568"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono font-bold text-emerald-700 hover:underline flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Message on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <a
                  href="tel:+918686251568"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-500 hover:to-rose-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-orange-600/20"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Mr. Santhosh Kumar</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ========================================================= */}
      {/* 3. CAMPUS ADDRESSES (From Document)                       */}
      {/* ========================================================= */}
      <section id="campus-addresses" className="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <ScrollEyebrow className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wider uppercase mb-3 justify-center">
              <span>CAMPUS LOCATIONS &amp; POSTAL ADDRESSES</span>
            </ScrollEyebrow>
            <ScrollHeading className="text-2xl sm:text-4xl font-serif font-semibold text-stone-900 mb-4">
              Campus <span className="text-gradient-title font-extrabold">Addresses</span>
            </ScrollHeading>
            <ScrollParagraph className="text-stone-600 text-xs sm:text-sm max-w-2xl mx-auto">
              Complete physical addresses, landlines, mobile numbers, and official email coordinates for both Tamil Nadu campuses.
            </ScrollParagraph>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CAMPUSES_OFFICIAL.map((campus, idx) => (
              <motion.div
                key={campus.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl border-2 border-stone-200 bg-[#faf8f5] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-[11px] font-bold uppercase tracking-wider">
                      {campus.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider">
                      Tamil Nadu, India
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-stone-900 mb-1">
                    {campus.title}
                  </h3>
                  <p className="text-xs font-bold text-orange-700 uppercase tracking-wider mb-4 font-mono">
                    {campus.institution}
                  </p>

                  <div className="p-4 rounded-2xl bg-white border border-stone-200/90 mb-6 space-y-2.5 text-xs sm:text-sm text-stone-700">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span className="font-medium leading-relaxed">{campus.address}</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-stone-700 mb-6 font-sans">
                    <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                      <span className="text-stone-500 font-medium">Mobile:</span>
                      <div className="flex items-center gap-2 font-mono font-bold text-orange-600">
                        {campus.mobileTel.map((telNum, tIdx) => (
                          <React.Fragment key={telNum}>
                            {tIdx > 0 && <span className="text-stone-400">/</span>}
                            <a href={`tel:${telNum}`} className="hover:underline">
                              {tIdx === 0 ? telNum.replace('+91', '+91 ') : telNum.slice(-2)}
                            </a>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                      <span className="text-stone-500 font-medium">Landline:</span>
                      <a href={`tel:${campus.landlineTel}`} className="font-mono font-bold text-stone-900 hover:text-orange-600 hover:underline">
                        {campus.landline}
                      </a>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-stone-500 font-medium">Email:</span>
                      <a href={`mailto:${campus.email}`} className="font-mono text-stone-800 hover:text-orange-600 font-semibold">
                        {campus.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`tel:${campus.mobileTel[0]}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-orange-50 text-orange-700 hover:bg-orange-600 hover:text-white font-semibold text-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Campus</span>
                  </a>

                  <a
                    href={`mailto:${campus.email}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-700 hover:bg-stone-50 font-semibold text-xs transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-stone-500" />
                    <span>Send Email</span>
                  </a>

                  <a
                    href={campus.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs transition-colors ml-auto"
                  >
                    <Navigation className="w-3.5 h-3.5 text-amber-400" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. OFFICES ABROAD (From Document: Singapore, Saudi, Malay)*/}
      {/* ========================================================= */}
      <section id="offices-abroad" className="py-16 sm:py-24 bg-[#faf8f5] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <ScrollEyebrow className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wider uppercase mb-3 justify-center">
              <span>GLOBAL LIAISON &amp; OVERSEAS OFFICES</span>
            </ScrollEyebrow>
            <ScrollHeading className="text-2xl sm:text-4xl font-serif font-semibold text-stone-900 mb-4">
              Offices <span className="text-gradient-title font-extrabold">Abroad</span>
            </ScrollHeading>
            <ScrollParagraph className="text-stone-600 text-xs sm:text-sm max-w-2xl mx-auto">
              Connecting international students, NRIs, and global alumni across Singapore, Saudi Arabia, and Malaysia.
            </ScrollParagraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {OFFICES_ABROAD.map((office, idx) => (
              <motion.div
                key={office.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl" role="img" aria-label={office.country}>
                      {office.flag}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-[11px] font-mono font-bold uppercase tracking-wider">
                      International Office
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-1">
                    {office.country}
                  </h3>

                  <div className="mb-4">
                    <span className="text-[11px] font-mono uppercase text-stone-400 font-bold block mb-0.5">
                      Contact Person:
                    </span>
                    <p className="font-bold text-stone-900 text-sm sm:text-base">
                      {office.person}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#faf8f5] border border-stone-200/90 text-xs text-stone-600 leading-relaxed mb-5">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                  </div>

                  {office.contact && (
                    <div className="mb-4">
                      <span className="text-[11px] font-mono uppercase text-stone-400 font-bold block mb-0.5">
                        Contact Number:
                      </span>
                      <a
                        href={`tel:${office.contactTel}`}
                        className="font-mono font-bold text-orange-600 hover:underline text-sm flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-orange-600" />
                        <span>{office.contact}</span>
                      </a>
                    </div>
                  )}

                  <div>
                    <span className="text-[11px] font-mono uppercase text-stone-400 font-bold block mb-0.5">
                      Email Address:
                    </span>
                    <a
                      href={`mailto:${office.email}`}
                      className="font-mono text-xs text-stone-800 hover:text-orange-600 font-semibold break-all"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>

                <div className="pt-5 mt-6 border-t border-stone-100 flex items-center justify-between gap-2">
                  {office.contactTel ? (
                    <a
                      href={`tel:${office.contactTel}`}
                      className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call {office.country}</span>
                    </a>
                  ) : (
                    <a
                      href={`mailto:${office.email}`}
                      className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5 text-amber-400" />
                      <span>Email Office</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. BOTTOM ACTION STRIP                                     */}
      {/* ========================================================= */}
      <section className="py-12 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm">
            <div>
              <h4 className="text-lg font-serif font-bold text-stone-900 mb-1">
                Looking for Admissions &amp; Eligibility Criteria?
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-sans">
                Review document verification checklists, fee payment guidelines, or submit the online application form for 2027–2028.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {onNavigateToRequirements && (
                <button
                  type="button"
                  onClick={() => onNavigateToRequirements('#requirements-overview')}
                  className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <FileCheck className="w-4 h-4 text-orange-600" />
                  <span>Requirements</span>
                </button>
              )}

              {onNavigateToFeePayment && (
                <button
                  type="button"
                  onClick={() => onNavigateToFeePayment('#fee-payment')}
                  className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Fee Payment</span>
                </button>
              )}

              {onNavigateToApplyOnline && (
                <button
                  type="button"
                  onClick={() => onNavigateToApplyOnline('#apply-online')}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-500 hover:to-rose-500 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 shadow-md shadow-orange-600/20"
                >
                  <span>Apply Online 2027–28</span>
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
