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
  Search,
  Lock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
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
  const [isVisible, setIsVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollYRef = useRef(0);

  // Track window scroll direction: Hide on scroll down, show on scroll up
  // Fully responsive with requestAnimationFrame and micro-jitter threshold
  useEffect(() => {
    let ticking = false;
    const threshold = 8; // Minimum scroll delta before toggling visibility

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = Math.max(0, window.scrollY);

          // Subtle elevation styling when scrolled
          setIsScrolled(currentScrollY > 20);

          // If mobile menu is open, keep navbar visible
          if (mobileMenuOpen) {
            setIsVisible(true);
            lastScrollYRef.current = currentScrollY;
            ticking = false;
            return;
          }

          // Always show navbar at the very top of the page
          if (currentScrollY <= 60) {
            setIsVisible(true);
            lastScrollYRef.current = currentScrollY;
            ticking = false;
            return;
          }

          const diff = currentScrollY - lastScrollYRef.current;

          // Scrolling DOWN -> hide navbar and close active mega-menus
          if (diff > threshold) {
            setIsVisible(false);
            setActiveMenu(null);
          }
          // Scrolling UP -> reveal navbar smoothly
          else if (diff < -threshold) {
            setIsVisible(true);
          }

          lastScrollYRef.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

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
    document.body.style.overflow = '';

    const targetSelector = href === '#admissions' ? '#admissions-process' : href;
    setTimeout(() => {
      if (window.__lenis) {
        window.__lenis.scrollTo(targetSelector, { offset: -84, duration: 1.15 });
      } else {
        const target = document.querySelector(targetSelector);
        if (target) {
          const y = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 84;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }, 35);
  };

  // Scroll directly to contact section
  const handleContactClick = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    document.body.style.overflow = '';

    setTimeout(() => {
      if (window.__lenis) {
        window.__lenis.scrollTo('#contact', { offset: -84, duration: 1.15 });
      } else {
        const target = document.querySelector('#contact');
        if (target) {
          const y = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 84;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }, 35);
  };

  // Mobile Navigation Items matching minimal editorial layout
  const mobileNavLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'DEPARTMENTS', href: '#departments', onAction: onExploreDepartments },
    { label: 'ADMISSIONS', href: '#admissions-process', onAction: onOpenAdmissions },
    { label: 'PLACEMENTS', href: '#placements' },
    { label: 'CONTACT', href: '#contact', onAction: handleContactClick },
  ];

  // Mobile search handler
  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    const q = searchQuery.toLowerCase().trim();
    setMobileMenuOpen(false);
    document.body.style.overflow = '';

    let target = '#departments';
    if (q.includes('about') || q.includes('campus') || q.includes('history') || q.includes('heritage')) {
      target = '#about';
    } else if (q.includes('admi') || q.includes('apply') || q.includes('fee') || q.includes('scholar') || q.includes('eligib')) {
      target = '#admissions-process';
      onOpenAdmissions?.();
    } else if (q.includes('place') || q.includes('job') || q.includes('recruit') || q.includes('salary') || q.includes('pack')) {
      target = '#placements';
    } else if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('reach')) {
      target = '#contact';
    } else if (q.includes('home') || q.includes('top')) {
      target = '#home';
    } else if (q.includes('dept') || q.includes('pilot') || q.includes('aviat') || q.includes('safe') || q.includes('logic') || q.includes('mba') || q.includes('bba')) {
      target = '#departments';
      onExploreDepartments?.();
    }

    setTimeout(() => {
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { offset: -84, duration: 1.15 });
      } else {
        const el = document.querySelector(target);
        if (el) {
          const y = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 84;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }, 40);
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
          { label: 'Overview', href: '#about' },
          { label: 'Campuses', href: '#about' },
          { label: 'Campus Life', href: '#about' },
          { label: 'Gallery', href: '#about' },
          { label: 'Student Login', href: '#about' },
          { label: 'Journel', href: '#about' },
        ],
        col2: [

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
      {/* Morphs into a floating glassmorphism pill with border       */}
      {/* radius when scrolled, responsive across all devices         */}
      {/* ========================================================= */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -130,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          y: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.22, ease: 'easeInOut' },
        }}
        className={`fixed top-0 left-0 right-0 z-50 font-manrope pointer-events-none transition-[padding] duration-300 ${isScrolled
          ? 'pt-2.5 sm:pt-4 px-3 sm:px-6 lg:px-8'
          : 'pt-3.5 sm:pt-5 px-4 sm:px-6 lg:px-8'
          }`}
      >
        <div
          className={`relative max-w-7xl mx-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'
            } ${isScrolled
              ? 'bg-stone-950/60 backdrop-blur-2xl backdrop-saturate-150 rounded-2xl sm:rounded-full border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] py-2 sm:py-2.5 px-3.5 sm:px-6 ring-1 ring-white/10'
              : 'bg-transparent py-1 sm:py-2 px-0'
            }`}
        >
          <div className="flex items-center justify-between gap-4 lg:gap-6">
            {/* ===================================================== */}
            {/* Left Brand: ASET College Logo Pill (Clean without redundant text) */}
            {/* ===================================================== */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center text-white tracking-tight whitespace-nowrap shrink-0 cursor-pointer select-none"
              aria-label="ASET College"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-full border border-white/25 backdrop-blur-xl shadow-sm flex items-center justify-center"
              >
                <img
                  src={asetLogo}
                  alt="ASET College"
                  className="h-7 sm:h-8 md:h-9 w-auto object-contain brightness-105"
                />
              </motion.div>
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
            {/* Right Action: Contact Pill & Hamburger Menu Button    */}
            {/* ===================================================== */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Contact Pill Button (Always visible on all screens) */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                onClick={handleContactClick}
                className="group inline-flex items-center gap-1 sm:gap-1.5 px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-stone-950 bg-white hover:bg-stone-50 transition-all rounded-full shadow-lg shadow-black/20 whitespace-nowrap cursor-pointer border border-white shrink-0"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>

              {/* Hamburger Menu Icon (Always visible on mobile & tablet, hidden on lg desktop) */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-white rounded-full bg-white/15 hover:bg-white/25 active:bg-white/30 border border-white/25 backdrop-blur-md shadow-sm transition-all focus:outline-hidden cursor-pointer shrink-0"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
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
      {/* MOBILE DRAWER MENU (Editorial Minimalist Full-Screen)     */}
      {/* Exact Match to Reference: Pure white, clean typography,  */}
      {/* orange accents, centered stack, sub-links & search bar   */}
      {/* ========================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            data-lenis-prevent
            className="fixed inset-0 z-50 lg:hidden bg-white text-stone-900 flex flex-col justify-between items-center px-6 py-7 sm:py-8 overflow-y-auto select-none font-sans min-h-screen"
          >
            {/* Top Bar: Left Close Icon (orange) | Center ASET Wordmark | Right Padlock (orange) */}
            <div className="w-full flex items-center justify-between pt-1 pb-4">
              <motion.button
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -ml-2 text-[#ea580c] hover:text-[#c2410c] active:opacity-75 transition-colors cursor-pointer"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
              </motion.button>

              <span className="font-heading font-extrabold text-base sm:text-lg tracking-[0.25em] text-stone-950 uppercase select-none">
                ASET
              </span>

              <motion.button
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissions();
                }}
                className="p-2 -mr-2 text-[#ea580c] hover:text-[#c2410c] active:opacity-75 transition-colors cursor-pointer"
                aria-label="Admissions Portal"
              >
                <Lock className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
              </motion.button>
            </div>

            {/* Center Content: Primary Navigation Stack & Sub-links */}
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm my-auto py-6 space-y-6 sm:space-y-8 text-center">
              {/* Primary Links */}
              <nav className="flex flex-col items-center space-y-4 sm:space-y-5" aria-label="Mobile Navigation">
                {mobileNavLinks.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      if (item.onAction) {
                        item.onAction();
                      }
                      handleNavClick(e, item.href);
                    }}
                    className="block font-heading font-bold text-sm sm:text-base tracking-[0.26em] text-stone-950 hover:text-[#ea580c] transition-colors uppercase cursor-pointer"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              {/* Secondary Sub-Links */}
              <div className="flex flex-col items-center space-y-2 pt-2 sm:pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleContactClick();
                  }}
                  className="text-xs sm:text-[13px] font-medium text-stone-600 hover:text-stone-950 tracking-wider transition-colors cursor-pointer"
                >
                  Student Login
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmissions();
                  }}
                  className="text-xs sm:text-[13px] font-medium text-stone-600 hover:text-stone-950 tracking-wider transition-colors cursor-pointer"
                >
                  Apply Online
                </button>
              </div>

              {/* Centered Social Media Icons */}
              <div className="flex items-center justify-center gap-6 pt-3 text-stone-800">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ea580c] transition-colors p-1"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ea580c] transition-colors p-1"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ea580c] transition-colors p-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ea580c] transition-colors p-1"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Bottom Search Bar */}
            <div className="w-full max-w-xs flex items-center justify-center gap-3 pt-4 pb-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                  className="bg-[#f0f0f0] text-stone-800 placeholder-stone-400 text-xs sm:text-sm px-4 py-2 w-48 sm:w-56 focus:outline-none focus:ring-1 focus:ring-stone-400 font-sans"
                />
              </div>
              <button
                type="button"
                onClick={handleSearch}
                className="text-stone-700 hover:text-stone-950 p-1 transition-colors cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};