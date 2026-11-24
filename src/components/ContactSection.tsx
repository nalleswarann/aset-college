import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DEPARTMENTS } from '../data/universityData';
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
} from 'lucide-react';
import roboticsTechImg from '../assets/images/contact.webp';

interface ContactSectionProps {
  initialDepartment?: string;
  onOpenAdmissions?: () => void;
}

const CAMPUSES = [
  {
    id: 'chennai',
    name: 'Chennai Campus (Kuthambakkam)',
    address: 'No: 28, Irulapalayam, Kuthambakkam, Chennai – 600124',
    phone: '+91 91594 99973 / 99974',
    badge: 'HQ Flagship',
  },
  {
    id: 'coimbatore',
    name: 'Coimbatore Campus (Saravanampatti)',
    address: 'Varathaiyangar Palayam, Saravanampatti – 641110',
    phone: '+91 91594 99975 / 99977',
    badge: 'Regional Hub',
  },
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialDepartment = '',
  onOpenAdmissions,
}) => {
  const defaultDept = DEPARTMENTS[0].name;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: initialDepartment || defaultDept,
    campus: CAMPUSES[0].name,
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
    if (!formData.message.trim()) {
      errs.message = 'Please share your academic background or query';
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
      const randomRef = `ASET-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRef(randomRef);
    }, 600);
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 lg:py-32 bg-[#faf8f5] text-stone-900 font-serif font-semibold"
    >
      <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* CONTACT SECTION CARD                                      */}
        {/* Clean, balanced split layout with proper alignment        */}
        {/* ========================================================= */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">

          {/* ------------------------------------------------------- */}
          {/* LEFT PANE: Precision Visual, Floating Badge & Clock     */}
          {/* ------------------------------------------------------- */}
          <div className="lg:col-span-4 xl:col-span-5 relative min-h-[320px] sm:min-h-[400px] lg:min-h-full bg-stone-950 overflow-hidden group">
            {/* High-Contrast Campus Robotics & Engineering Visual */}
            <img
              src={roboticsTechImg}
              alt="ASET Robotics & Drone Innovation Hub"
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Subtle dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/55" />

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

              {/* Animated Menu Dropdown */}
              <div className="relative" ref={menuRef}>
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 shadow-xs text-xs font-semibold text-stone-900 hover:bg-white transition-all cursor-pointer"
                >
                  {/* <span>Menu</span> hello */}
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
                      <button
                        onClick={() => scrollTo('#about')}
                        className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-orange-600 transition-colors text-stone-700"
                      >
                        About ASET
                      </button>
                      <button
                        onClick={() => scrollTo('#departments')}
                        className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-orange-600 transition-colors text-stone-700"
                      >
                        Academic Departments
                      </button>
                      <button
                        onClick={() => scrollTo('#placements')}
                        className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-orange-600 transition-colors text-stone-700"
                      >
                        Placements &amp; Partners
                      </button>
                      <button
                        onClick={() => scrollTo('#life-at-aset')}
                        className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-orange-600 transition-colors text-stone-700"
                      >
                        Life at Aset
                      </button>
                      <button
                        onClick={() => {
                          setIsMenuOpen(false);
                          if (onOpenAdmissions) onOpenAdmissions();
                        }}
                        className="w-full text-left px-4 py-2 text-rose-600 font-bold border-t border-stone-100 hover:bg-rose-50 transition-colors"
                      >
                        Apply for 2026–2027 ↗
                      </button>
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
          {/* RIGHT PANE: Modern Creative Form with Animated Controls */}
          {/* (Giant "Contact Form" removed for balanced alignment)   */}
          {/* ------------------------------------------------------- */}
          <div className="lg:col-span-8 xl:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-white space-y-8">

            {/* Top Header: Eyebrow + General & Admissions Helpline */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-stone-200/90">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-[0.2em] text-orange-600 uppercase">
                    ADMISSIONS &amp; COUNSELING 2026–2027
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-stone-900 tracking-tight">
                  Get in Touch with{' '}
                  <span className="text-gradient-title font-extrabold">
                    ASET
                  </span>
                </h3>
              </div>

              {/* Quick Contacts Row */}
              <div className="flex items-center gap-6 sm:gap-8 pt-1 sm:pt-0">
                <div>
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 mb-0.5">
                    GENERAL
                  </span>
                  <a
                    href="mailto:contact@asetcollege.ac.in"
                    className="text-xs sm:text-[13px] font-semibold text-stone-900 hover:text-orange-600 transition-colors block"
                  >
                    contact@asetcollege.ac.in
                  </a>
                  <a
                    href="mailto:contact@asetsafety.ac.in"
                    className="text-[11px] text-stone-500 hover:text-orange-600 transition-colors block"
                  >
                    contact@asetsafety.ac.in
                  </a>
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 mb-0.5">
                    HELPLINE
                  </span>
                  <a
                    href="tel:+919159499973"
                    className="text-xs sm:text-[13px] font-semibold text-stone-900 hover:text-orange-600 transition-colors block font-mono"
                  >
                    +91 91594 99973
                  </a>
                  <span className="text-[11px] text-stone-500 font-mono block">
                    +91 91594 99974 / 75
                  </span>
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
                  <h4 className="text-2xl font-bold text-stone-900">
                    Thank you, {formData.fullName}
                  </h4>
                  <p className="text-sm text-stone-600 max-w-lg leading-relaxed pt-1">
                    Your application inquiry for <strong className="text-stone-900">{formData.department}</strong> at{' '}
                    <strong className="text-stone-900">{formData.campus}</strong> has been received. Our senior admissions counselor will contact you within 24 hours.
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
                        campus: CAMPUSES[0].name,
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-semibold tracking-wide hover:bg-stone-800 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Row 1: Name & Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-stone-700">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-xl bg-stone-50/80 border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all ${errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-stone-200'
                        }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-600 font-mono">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-stone-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 rounded-xl bg-stone-50/80 border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all ${errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-stone-200'
                        }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-600 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: MODERN ANIMATED CUSTOM DROPDOWNS (No clipping, sleek animations) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

                  {/* Department Custom Animated Dropdown */}
                  <div className="space-y-1.5 relative" ref={deptRef}>
                    <label className="block text-xs font-medium text-stone-700">
                      Department
                    </label>

                    <button
                      type="button"
                      onClick={() => {
                        setIsDeptOpen(!isDeptOpen);
                        setIsCampusOpen(false);
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-stone-50/80 border text-sm text-stone-900 flex items-center justify-between gap-2 text-left cursor-pointer transition-all ${isDeptOpen
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
                          {DEPARTMENTS.map((dept) => {
                            const isSelected = formData.department === dept.name;
                            return (
                              <button
                                key={dept.id}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, department: dept.name });
                                  setIsDeptOpen(false);
                                }}
                                className={`w-full px-4 py-2.5 text-left flex items-center justify-between gap-2 transition-colors cursor-pointer ${isSelected
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

                  {/* Preferred Campus Custom Animated Dropdown */}
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
                      className={`w-full px-4 py-3 rounded-xl bg-stone-50/80 border text-sm text-stone-900 flex items-center justify-between gap-2 text-left cursor-pointer transition-all ${isCampusOpen
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
                          {CAMPUSES.map((campus) => {
                            const isSelected = formData.campus === campus.name;
                            return (
                              <button
                                key={campus.id}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, campus: campus.name });
                                  setIsCampusOpen(false);
                                }}
                                className={`w-full px-4 py-2.5 text-left flex items-center justify-between gap-2 transition-colors cursor-pointer ${isSelected
                                  ? 'bg-orange-50 text-orange-900 font-semibold border-l-2 border-orange-600'
                                  : 'text-stone-700 hover:bg-stone-50 hover:text-stone-950'
                                  }`}
                              >
                                <div className="flex items-center gap-2 truncate">
                                  <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                                  <span className="truncate">{campus.name}</span>
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
                    Message / Academic Background *
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention your 10th / 12th / UG score, preferred program, or request an admissions counseling session..."
                    className={`w-full px-4 py-3 rounded-xl bg-stone-50/80 border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 resize-none transition-all ${errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-stone-200'
                      }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-600 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Row 4: MODERN ANIMATED BUTTON with Website Signature Gradient */}
                <div className="pt-2 flex items-center justify-between gap-4 flex-wrap">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-rose-700 hover:from-orange-500 hover:to-rose-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-orange-600/25 hover:shadow-orange-600/40 transition-all cursor-pointer disabled:opacity-50 group"
                  >
                    <span>
                      {isSubmitting ? 'Registering Inquiry...' : 'Request Counseling (2026–2027)'}
                    </span>
                    <ArrowRight className="w-4 h-4 stroke-[2.4] group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <span className="text-[11px] font-mono text-stone-500 hidden sm:inline-block">
                    Free counseling &amp; scholarship assessment
                  </span>
                </div>

              </form>
            )}

            {/* Bottom Row: Two-Column Campus Directory Cards */}
            <div className="pt-6 border-t border-stone-200/90 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-600">
              <div className="p-3.5 rounded-xl bg-stone-50/80 border border-stone-200/80 space-y-1">
                <div className="flex items-center gap-1.5 text-stone-900 font-bold text-xs">
                  <Building2 className="w-3.5 h-3.5 text-orange-600" />
                  <span>HQ · Chennai Campus</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-relaxed">
                  No: 28, Irulapalayam, Kuthambakkam, Chennai – 600124
                </p>
                <p className="text-[10px] font-mono text-stone-500 pt-0.5">
                  Ph: +91 91594 99973 / 74
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50/80 border border-stone-200/80 space-y-1">
                <div className="flex items-center gap-1.5 text-stone-900 font-bold text-xs">
                  <GraduationCap className="w-3.5 h-3.5 text-rose-600" />
                  <span>Coimbatore Campus</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-relaxed">
                  Varathaiyangar Palayam, Saravanampatti – 641110
                </p>
                <p className="text-[10px] font-mono text-stone-500 pt-0.5">
                  Ph: +91 91594 99975 / 77
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
