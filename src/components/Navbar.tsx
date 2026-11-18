import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  ArrowUpRight,
  Plus,
  Minus,
  GraduationCap,
  MapPin,
} from 'lucide-react';
import asetLogo from '../assets/images/aset-logo.png';
import asetAviationStudents from '../assets/images/aset-aviation-students.png';
import campusBuildingImg from '../assets/images/campus-building-user.jpg';
import asetCampusSunset from '../assets/images/aset-college-pathway-sunset.jpg';
import asetGraduates from '../assets/images/aset-graduates-celebration.jpg';
import asetCampusModernClean from '../assets/images/aset-campus-modern-clean.png';
import deptBusinessImg from '../assets/images/dept_global_business_1794469703130.jpg';

interface NavbarProps {
  onOpenAdmissions: () => void;
  onExploreDepartments?: () => void;
  activeSection?: string;
}

interface MegaMenuLink {
  label: string;
  href: string;
  isAction?: boolean;
  onClick?: () => void;
}

interface MegaMenuItem {
  id: string;
  label: string;
  hasDropdown: boolean;
  badge?: string;
  badgeColor?: string;
  href?: string;
  categoryTitle?: string;
  columns?: {
    col1: MegaMenuLink[];
    col2: MegaMenuLink[];
  };
  featured?: {
    image: string;
    alt: string;
    buttonLabel: string;
    buttonHref: string;
    onButtonClick?: () => void;
  };
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAdmissions,
  onExploreDepartments,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedAccordion, setMobileExpandedAccordion] = useState<string | null>(null);

  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track window scroll for subtle navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle smooth scroll navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveMenu(null);
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll directly to contact section
  const handleContactClick = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Silky hover handlers with spring debounce
  const handleMouseEnter = (menuId: string, hasDropdown: boolean) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (hasDropdown) {
      setActiveMenu(menuId);
    } else {
      setActiveMenu(null);
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  // Curated navigation data matching user's exact list:
  // About, Admission, Department, Student, Placement, Blogs
  const menuItems: MegaMenuItem[] = [
    {
      id: 'about',
      label: 'About',
      hasDropdown: true,
      categoryTitle: 'Institutional Heritage & Excellence',
      columns: {
        col1: [
          { label: 'About ASET College of Science & Technology', href: '#about' },
          { label: 'Academically Supported by Alagappa University', href: '#about' },
          { label: 'Dual Campuses: Chennai & Coimbatore', href: '#about' },
          { label: 'Leadership, Deans & Expert Faculty', href: '#about' },
        ],
        col2: [
          { label: 'Global Network & University Partners (60+)', href: '#sponsors' },
          { label: 'World-Class Flight Simulators & Safety Labs', href: '#about' },
          { label: 'Accreditations, UGC Approvals & ISO Status', href: '#about' },
          { label: 'Campus Infrastructure & Research Centers', href: '#about' },
        ],
      },
      featured: {
        image: asetCampusModernClean,
        alt: 'ASET College Campus',
        buttonLabel: 'Discover Our Heritage ↗',
        buttonHref: '#about',
      },
    },
    {
      id: 'admission',
      label: 'Admission',
      hasDropdown: true,
      categoryTitle: '2026–2027 Admissions Gateway',
      columns: {
        col1: [
          { label: 'Step-by-Step Admissions Process', href: '#admissions-process' },
          { label: 'Eligibility & Marksheet Verification', href: '#admissions-process' },
          { label: '1-on-1 Academic Counseling & Guidance', href: '#admissions-process' },
          { label: 'Seat Allotment & Enrollment Records', href: '#admissions-process' },
        ],
        col2: [
          { label: 'Merit Scholarships (Up to 100%)', href: '#admissions-process' },
          { label: 'Alagappa University Degree Recognition', href: '#about' },
          { label: 'Campus Tour: Chennai & Coimbatore', href: '#contact' },
          {
            label: 'Online Application Portal 2026–2027',
            href: '#admissions',
            isAction: true,
            onClick: onOpenAdmissions,
          },
        ],
      },
      featured: {
        image: asetCampusSunset,
        alt: 'ASET College Campus Pathway',
        buttonLabel: 'Start Application 2026 ↗',
        buttonHref: '#admissions-process',
        onButtonClick: onOpenAdmissions,
      },
    },
    {
      id: 'department',
      label: 'Department',
      hasDropdown: true,
      categoryTitle: 'Six Core High-Growth Schools',
      columns: {
        col1: [
          { label: 'Pilot Training, Aviation & Airport Management', href: '#departments' },
          { label: 'Fire & Industrial Safety Engineering', href: '#departments' },
          { label: 'Logistics, Shipping & Supply Chain Management', href: '#departments' },
        ],
        col2: [
          { label: 'Management Studies & Business Analytics', href: '#departments' },
          { label: 'School of Commerce & Professional Accounting', href: '#departments' },
          { label: 'International Hotel & Tourism Management', href: '#departments' },
        ],
      },
      featured: {
        image: campusBuildingImg,
        alt: 'ASET College Departments',
        buttonLabel: 'Explore All Departments ↗',
        buttonHref: '#departments',
        onButtonClick: onExploreDepartments,
      },
    },
    {
      id: 'student',
      label: 'Student',
      hasDropdown: true,
      categoryTitle: 'Student Life, Ambassadorship & Community',
      columns: {
        col1: [
          { label: 'Student Spotlight & Campus Ambassadors', href: '#spotlight' },
          { label: 'Campus Culture, Festivities & Tech Clubs', href: '#spotlight' },
          { label: 'Flight Simulators & Practical Safety Drills', href: '#about' },
          { label: 'Mentorship & Peer Learning Circles', href: '#spotlight' },
        ],
        col2: [
          { label: 'Hostel & Residential Campus Life', href: '#about' },
          { label: 'Sports, Gymnasium & Fitness Facilities', href: '#spotlight' },
          { label: 'Student Welfare & Anti-Ragging Cell', href: '#about' },
          { label: 'Global Student Exchange Pathways', href: '#sponsors' },
        ],
      },
      featured: {
        image: asetAviationStudents,
        alt: 'ASET College Students',
        buttonLabel: 'Meet Student Ambassadors ↗',
        buttonHref: '#spotlight',
      },
    },
    {
      id: 'placement',
      label: 'Placement',
      hasDropdown: true,
      categoryTitle: 'Corporate Partnerships & Placements',
      columns: {
        col1: [
          { label: '100% Placement Assurance Cell', href: '#placements' },
          { label: 'Aviation Recruiters (Air India, SpiceJet)', href: '#placements' },
          { label: 'Logistics Giants (DHL, Maersk, TVS)', href: '#placements' },
          { label: 'Safety & Infrastructure (DLF, SPR, Casagrand)', href: '#placements' },
        ],
        col2: [
          { label: 'Aptitude & Soft Skills Grooming Labs', href: '#placements' },
          { label: 'Monthly Industrial & Port Visits', href: '#placements' },
          { label: 'Global Alumni Across 12+ Countries', href: '#placements' },
          { label: 'Corporate Recruiter Registration', href: '#contact' },
        ],
      },
      featured: {
        image: asetGraduates,
        alt: 'ASET College Placements & Alumni',
        buttonLabel: 'View Placement Records ↗',
        buttonHref: '#placements',
      },
    },
    {
      id: 'blogs',
      label: 'Blogs',
      hasDropdown: true,
      categoryTitle: 'Campus News, Articles & Industry Trends',
      columns: {
        col1: [
          { label: 'Aviation Careers: Scope for Commercial Pilots & Ground Crew', href: '#departments' },
          { label: 'Industrial Safety: High Global Demand for Certified Officers', href: '#departments' },
          { label: 'Why Logistics & Supply Chain is a Booming Career Choice', href: '#departments' },
        ],
        col2: [
          { label: 'Campus Chronicles: Life at Chennai & Coimbatore Campuses', href: '#about' },
          { label: 'Alumni Journey: From Classroom to DHL, Maersk & SpiceJet', href: '#placements' },
          { label: 'Scholarship Guide: How to Secure up to 100% Merit Aid', href: '#admissions-process' },
        ],
      },
      featured: {
        image: deptBusinessImg,
        alt: 'ASET College Articles & News',
        buttonLabel: 'Read All Insights ↗',
        buttonHref: '#about',
      },
    },
  ];

  const currentMegaMenu = menuItems.find((item) => item.id === activeMenu && item.hasDropdown);

  return (
    <>
      {/* ========================================================= */}
      {/* FULL-PAGE BACKDROP BLUR (Active when any menu is hovered)   */}
      {/* Silky blur transition over the entire background            */}
      {/* ========================================================= */}
      <AnimatePresence>
        {(activeMenu !== null || mobileMenuOpen) && (
          <motion.div
            key="navbar-backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => {
              setActiveMenu(null);
              setMobileMenuOpen(false);
            }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xl transition-all pointer-events-auto"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* TOP NAVIGATION BAR CONTAINER (Fixed Header with entrance)   */}
      {/* ========================================================= */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-manrope ${activeMenu !== null
          ? 'bg-transparent py-4 sm:py-5'
          : isScrolled
            ? 'bg-[#001733]/90 backdrop-blur-2xl border-b border-white/10 py-3 shadow-[0_16px_40px_rgba(0,10,28,0.5)]'
            : 'bg-transparent py-4 sm:py-5'
          }`}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 lg:gap-6">
            {/* ===================================================== */}
            {/* Left Brand: ASET College Logo & Name                  */}
            {/* ===================================================== */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-3 text-white tracking-tight whitespace-nowrap shrink-0 cursor-pointer select-none"
              aria-label="ASET College of Science & Technology"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="bg-white/12 hover:bg-white/20 px-3 py-1.5 rounded-full border border-white/25 backdrop-blur-xl shadow-sm flex items-center justify-center"
              >
                <img
                  src={asetLogo}
                  alt="ASET College"
                  className="h-8 sm:h-9 w-auto object-contain brightness-105"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-manrope text-base sm:text-lg font-bold tracking-tight text-white leading-tight">
                  ASET College
                </span>
                <span className="text-[10px] font-sans tracking-widest text-white/70 uppercase">
                  Science &amp; Technology
                </span>
              </div>
            </a>

            {/* ===================================================== */}
            {/* Center Navigation Links (Desktop)                     */}
            {/* Gliding Spring Pill Animation via layoutId            */}
            {/* ===================================================== */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-1.5 relative py-1"
              onMouseLeave={handleMouseLeave}
            >
              {menuItems.map((item) => {
                const isHovered = activeMenu === item.id;

                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.id, item.hasDropdown)}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        if (item.hasDropdown) {
                          setActiveMenu(activeMenu === item.id ? null : item.id);
                        }
                      }}
                      className="relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium tracking-tight cursor-pointer select-none"
                      aria-expanded={isHovered}
                    >
                      {/* Shared Layout Spring Pill Indicator: Glides seamlessly across tabs */}
                      {isHovered && (
                        <motion.div
                          layoutId="active-nav-pill"
                          className="absolute inset-0 bg-white rounded-full shadow-md z-0"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        />
                      )}

                      {/* Pill Text Content */}
                      <span
                        className={`relative z-10 transition-colors duration-200 ${isHovered
                          ? 'text-stone-950 font-bold'
                          : 'text-white/90 hover:text-white'
                          }`}
                      >
                        {item.label}
                      </span>

                      {/* Rotating Plus Icon */}
                      {item.hasDropdown && (
                        <motion.span
                          animate={{ rotate: isHovered ? 45 : 0 }}
                          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                          className={`relative z-10 text-xs font-bold leading-none inline-block origin-center ${isHovered ? 'text-stone-950' : 'text-white/80'
                            }`}
                        >
                          +
                        </motion.span>
                      )}
                    </button>
                  </div>
                );
              })}
            </nav>

            {/* ===================================================== */}
            {/* Right Action: Pure White Pill "Contact ↗" Button      */}
            {/* Smooth spring micro-interaction                       */}
            {/* ===================================================== */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                onClick={handleContactClick}
                className="group inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-stone-950 bg-white hover:bg-stone-50 transition-colors rounded-full shadow-lg shadow-black/20 whitespace-nowrap cursor-pointer border border-white"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-4 h-4 text-stone-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
            </div>

            {/* ===================================================== */}
            {/* Mobile Controls (Menu Toggle & Compact Pill CTA)      */}
            {/* ===================================================== */}
            <div className="flex lg:hidden items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleContactClick}
                className="sm:hidden inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-bold text-stone-950 bg-white rounded-full shadow-md"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.92 }}
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-stone-200 rounded-full hover:bg-white/10 transition-colors focus:outline-hidden cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* ======================================================= */}
          {/* DESKTOP MEGA-DROPDOWN PANEL                             */}
          {/* Steady outer shell + seamless fluid morphing content     */}
          {/* ======================================================= */}
          <AnimatePresence>
            {activeMenu !== null && currentMegaMenu && currentMegaMenu.columns && currentMegaMenu.featured && (
              <motion.div
                key="mega-dropdown-shell"
                initial={{ opacity: 0, y: 14, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.985 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-5xl lg:max-w-6xl px-4 pt-3.5 pointer-events-auto z-50"
                onMouseEnter={() => handleMouseEnter(currentMegaMenu.id, true)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white text-stone-900 rounded-[2.2rem] shadow-[0_28px_80px_rgba(0,0,0,0.38)] p-8 sm:p-10 lg:p-12 border border-stone-100 overflow-hidden">
                  {/* Morphing Inner Container: Crossfades and glides seamlessly on tab switch */}
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={currentMegaMenu.id}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col md:flex-row items-stretch justify-between gap-8 lg:gap-12 w-full"
                    >
                      {/* Left Section: Eyebrow + 2 Columns of Links */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          {/* Eyebrow Label */}
                          <div className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-6">
                            {currentMegaMenu.categoryTitle}
                          </div>

                          {/* 2-Column Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-4">
                            {/* Column 1 */}
                            <div className="space-y-4">
                              {currentMegaMenu.columns.col1.map((link, idx) => (
                                <motion.a
                                  key={link.label}
                                  href={link.href}
                                  initial={{ opacity: 0, x: -6 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: idx * 0.03,
                                    duration: 0.2,
                                    ease: [0.16, 1, 0.3, 1],
                                  }}
                                  whileHover={{ x: 5 }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setActiveMenu(null);
                                    if (link.onClick) {
                                      link.onClick();
                                    } else {
                                      handleNavClick(e, link.href);
                                    }
                                  }}
                                  className="block font-bold text-stone-900 hover:text-red-700 text-[15px] sm:text-[16px] tracking-tight transition-colors leading-snug cursor-pointer group"
                                >
                                  <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                    <span>{link.label}</span>
                                  </span>
                                </motion.a>
                              ))}
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-4">
                              {currentMegaMenu.columns.col2.map((link, idx) => (
                                <motion.a
                                  key={link.label}
                                  href={link.href}
                                  initial={{ opacity: 0, x: -6 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: 0.05 + idx * 0.03,
                                    duration: 0.2,
                                    ease: [0.16, 1, 0.3, 1],
                                  }}
                                  whileHover={{ x: 5 }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setActiveMenu(null);
                                    if (link.onClick) {
                                      link.onClick();
                                    } else {
                                      handleNavClick(e, link.href);
                                    }
                                  }}
                                  className="block font-bold text-stone-900 hover:text-red-700 text-[15px] sm:text-[16px] tracking-tight transition-colors leading-snug cursor-pointer group"
                                >
                                  <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                    <span>{link.label}</span>
                                  </span>
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Section: Aspect Image Card with Overlay Button */}
                      <div className="w-full md:w-[300px] lg:w-[350px] shrink-0">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full shadow-md group">
                          <motion.img
                            key={currentMegaMenu.featured.image}
                            initial={{ scale: 1.08, opacity: 0.6 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            src={currentMegaMenu.featured.image}
                            alt={currentMegaMenu.featured.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          {/* Ambient Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />

                          {/* Pill Button Overlay */}
                          <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                            onClick={() => {
                              setActiveMenu(null);
                              if (currentMegaMenu.featured?.onButtonClick) {
                                currentMegaMenu.featured.onButtonClick();
                              } else if (currentMegaMenu.featured?.buttonHref) {
                                const target = document.querySelector(
                                  currentMegaMenu.featured.buttonHref
                                );
                                if (target) {
                                  target.scrollIntoView({ behavior: 'smooth' });
                                }
                              }
                            }}
                            className="absolute bottom-4 left-4 z-10 bg-stone-950/90 hover:bg-black text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 backdrop-blur-md transition-all shadow-md cursor-pointer border border-white/20"
                          >
                            <span>{currentMegaMenu.featured.buttonLabel}</span>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* ========================================================= */}
      {/* MOBILE DRAWER MENU (Responsive for all phones & tablets)  */}
      {/* Smooth spring slide-down with backdrop blur               */}
      {/* ========================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -24, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.99 }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed inset-x-0 top-0 z-50 lg:hidden bg-stone-950/95 backdrop-blur-2xl text-white border-b border-white/15 shadow-2xl max-h-[92vh] overflow-y-auto"
          >
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img src={asetLogo} alt="ASET College" className="h-7 w-auto object-contain" />
                <span className="font-manrope font-bold text-white text-base">ASET College</span>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-stone-300 hover:text-white rounded-full bg-white/10"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Mobile Navigation List with Expandable Accordions */}
            <div className="p-4 space-y-2">
              {menuItems.map((item) => {
                const isExpanded = mobileExpandedAccordion === item.id;

                if (!item.hasDropdown) {
                  return (
                    <motion.a
                      key={item.id}
                      whileTap={{ scale: 0.98 }}
                      href={item.href || '#'}
                      onClick={(e) => handleNavClick(e, item.href || '#')}
                      className="flex items-center justify-between py-3 px-3 rounded-xl hover:bg-white/10 text-base font-semibold text-white transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.label}</span>
                        {item.badge && (
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${item.badgeColor || 'bg-emerald-400 text-stone-950'
                              }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/60" />
                    </motion.a>
                  );
                }

                return (
                  <div key={item.id} className="border-b border-white/10 pb-1">
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() =>
                        setMobileExpandedAccordion(isExpanded ? null : item.id)
                      }
                      className="w-full flex items-center justify-between py-3 px-3 text-base font-semibold text-white rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <span>{item.label}</span>
                      <motion.span
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-1 rounded-full bg-white/10 text-white/80"
                      >
                        {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </motion.span>
                    </motion.button>

                    {/* Accordion Content */}
                    <AnimatePresence>
                      {isExpanded && item.columns && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          className="pl-4 pr-2 pb-4 space-y-2 overflow-hidden"
                        >
                          <div className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider pt-2 pb-1">
                            {item.categoryTitle}
                          </div>
                          <div className="space-y-2.5">
                            {[...item.columns.col1, ...item.columns.col2].map((link, idx) => (
                              <motion.a
                                key={link.label}
                                initial={{ opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.02, duration: 0.18 }}
                                href={link.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setMobileMenuOpen(false);
                                  if (link.onClick) {
                                    link.onClick();
                                  } else {
                                    handleNavClick(e, link.href);
                                  }
                                }}
                                className="block text-sm text-stone-200 hover:text-white py-1 transition-colors"
                              >
                                • {link.label}
                              </motion.a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Mobile Bottom Actions */}
            <div className="p-4 pt-2 border-t border-white/10 space-y-3 bg-stone-900/60">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleContactClick}
                className="w-full py-3.5 px-5 text-center text-sm font-bold text-stone-950 bg-white hover:bg-stone-100 transition-colors rounded-full shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Contact Admissions &amp; Campus</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>

              <div className="flex items-center justify-around pt-2 text-xs text-stone-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Chennai &amp; Coimbatore
                </span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                  Alagappa University
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};