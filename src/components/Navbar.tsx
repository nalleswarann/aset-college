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
import { DEPARTMENTS } from '../data/universityData';
import { Department } from '../types/university';

interface NavbarProps {
  onOpenAdmissions: () => void;
  onExploreDepartments?: () => void;
  onNavigateToAbout?: (targetHash?: string) => void;
  onNavigateToCampuses?: (targetHash?: string) => void;
  onNavigateToLife?: (targetHash?: string) => void;
  onNavigateToAdmissions?: (targetHash?: string) => void;
  onNavigateToRequirements?: (targetHash?: string) => void;
  onNavigateToFeePayment?: (targetHash?: string) => void;
  onNavigateToApplyOnline?: (targetHash?: string) => void;
  onNavigateToExamCell?: (targetHash?: string) => void;
  onNavigateToHome?: () => void;
  onSelectDepartment?: (dept: Department) => void;
  onOpenExamCell?: () => void;
  activeSection?: string;
  currentPage?: 'home' | 'about' | 'campuses' | 'life' | 'admissions' | 'requirements' | 'fee-payment' | 'apply-online' | 'examination-cell';
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
  onNavigateToAbout,
  onNavigateToCampuses,
  onNavigateToLife,
  onNavigateToAdmissions,
  onNavigateToRequirements,
  onNavigateToFeePayment,
  onNavigateToApplyOnline,
  onNavigateToExamCell,
  onNavigateToHome,
  onSelectDepartment,
  onOpenExamCell,
  activeSection,
  currentPage = 'home',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedAccordion, setMobileExpandedAccordion] = useState<string | null>(null);

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
  const handleNavClick = (e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string = '#') => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    setActiveMenu(null);
    setMobileMenuOpen(false);
    document.body.style.overflow = '';

    if (href.startsWith('http://') || href.startsWith('https://')) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }

    if (href === '#examination-cell') {
      if (onOpenExamCell) {
        onOpenExamCell();
        return;
      }
    }

    if (href === '#journal') {
      if (onNavigateToAbout) {
        onNavigateToAbout('#journal');
        return;
      }
    }

    if (
      href === '#gallery' ||
      href === '#campus-routine' ||
      href === '#day-one' ||
      href === '#talent-stage' ||
      href.startsWith('#life') ||
      href.startsWith('#campus-life') ||
      href === '/campus-life' ||
      href === '/life'
    ) {
      if (onNavigateToLife) {
        onNavigateToLife(href);
        return;
      }
    }

    if (
      href.startsWith('#requirements') ||
      href.startsWith('#/requirements') ||
      href.startsWith('#requirement') ||
      href.startsWith('#/requirement') ||
      href.startsWith('#admission/requirements') ||
      href.startsWith('#/admission/requirements') ||
      href === '/requirements' ||
      href === '/admission/requirements'
    ) {
      if (onNavigateToRequirements) {
        onNavigateToRequirements(href);
        return;
      }
    }

    if (
      href.startsWith('#fee-payment') ||
      href.startsWith('#/fee-payment') ||
      href.startsWith('#mode-of-fee-payment') ||
      href.startsWith('#payment-overview') ||
      href === '/fee-payment' ||
      href === '/admission/fee-payment'
    ) {
      if (onNavigateToFeePayment) {
        onNavigateToFeePayment(href);
        return;
      }
    }

    if (
      href.startsWith('#examination-cell') ||
      href.startsWith('#/examination-cell') ||
      href.startsWith('#exam-cell') ||
      href.startsWith('#exam') ||
      href === '/examination-cell'
    ) {
      if (onNavigateToExamCell) {
        onNavigateToExamCell(href);
        return;
      }
    }

    if (
      href.startsWith('#apply-online') ||
      href.startsWith('#/apply-online') ||
      href.startsWith('#online-application') ||
      href.startsWith('#/online-application') ||
      href.startsWith('#apply') ||
      href === '/apply-online' ||
      href === '/online-application' ||
      href === '/admission/apply'
    ) {
      if (onNavigateToApplyOnline) {
        onNavigateToApplyOnline(href);
        return;
      }
    }

    if (
      href.startsWith('#admission') ||
      href.startsWith('#/admission') ||
      href.startsWith('#admissions') ||
      href.startsWith('#/admissions') ||
      href.startsWith('#documents-required') ||
      href.startsWith('#courses-offered') ||
      href === '/admission' ||
      href === '/admissions'
    ) {
      if (onNavigateToAdmissions) {
        onNavigateToAdmissions(href);
        return;
      }
    }

    if (href.startsWith('#campuses') || href.startsWith('#campus') || href === '/campuses') {
      if (onNavigateToCampuses) {
        onNavigateToCampuses(href);
        return;
      }
    }

    if (href.startsWith('#about') || href === '/about') {
      if (onNavigateToAbout) {
        onNavigateToAbout(href);
        return;
      }
    }

    if (href === '#home') {
      if (onNavigateToHome) {
        onNavigateToHome();
        return;
      }
    }

    if (
      currentPage === 'about' ||
      currentPage === 'campuses' ||
      currentPage === 'life' ||
      currentPage === 'admissions' ||
      currentPage === 'requirements' ||
      currentPage === 'fee-payment' ||
      currentPage === 'apply-online' ||
      currentPage === 'examination-cell'
    ) {
      const targetInPage = document.querySelector(href);
      if (targetInPage) {
        setTimeout(() => {
          if (window.__lenis) {
            window.__lenis.scrollTo(href, { offset: -84, duration: 1.15 });
          } else {
            const y = targetInPage.getBoundingClientRect().top + window.scrollY - 84;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 35);
        return;
      } else if (onNavigateToHome) {
        onNavigateToHome();
        setTimeout(() => {
          if (window.__lenis) {
            window.__lenis.scrollTo(href, { offset: -84, duration: 1.15 });
          } else {
            const target = document.querySelector(href);
            if (target) {
              const y = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 84;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }
        }, 150);
        return;
      }
    }

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

  // Helper to select and display department modal & smooth scroll
  const handleSelectDepartmentByName = (searchQuery: string) => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    document.body.style.overflow = '';

    const matchedDept = DEPARTMENTS.find(
      (d) =>
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (currentPage !== 'home' && onNavigateToHome) {
      onNavigateToHome();
    }

    setTimeout(() => {
      if (matchedDept && onSelectDepartment) {
        onSelectDepartment(matchedDept);
      }
      const target = document.querySelector('#departments');
      if (target) {
        if (window.__lenis) {
          window.__lenis.scrollTo('#departments', { offset: -84, duration: 1.15 });
        } else {
          const y = target.getBoundingClientRect().top + window.scrollY - 84;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }, currentPage !== 'home' ? 180 : 35);
  };

  // Scroll directly to contact section
  const handleContactClick = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    document.body.style.overflow = '';

    if (
      currentPage === 'about' ||
      currentPage === 'campuses' ||
      currentPage === 'life' ||
      currentPage === 'admissions' ||
      currentPage === 'requirements' ||
      currentPage === 'fee-payment' ||
      currentPage === 'apply-online' ||
      currentPage === 'examination-cell'
    ) {
      if (onNavigateToHome) {
        onNavigateToHome();
        setTimeout(() => {
          if (window.__lenis) {
            window.__lenis.scrollTo('#contact', { offset: -84, duration: 1.15 });
          } else {
            const target = document.querySelector('#contact');
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 150);
        return;
      }
    }

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

  // Curated navigation data matching user's exact specification:
  // Home
  // About (Overview, Campuses, Campus Life, Gallery, Student Login, Journal)
  // Admission (Admission Overview, Requirements, Mode of Fee Payment, Apply Online)
  // Departments (Aviation, Logistics & Shipping, Fire & Industrial Safety, Management Studies, School of Commerce, Hotel Management)
  // Student (Examination Cell, Student Events, Alumni, News & Events)
  // Placement (Our Placement Cell, Placement Training, Internship Program, Industrial Visits, Student Registration, Testimonials)
  // Contact
  const menuItems: MegaMenuItem[] = [
    {
      id: 'home',
      label: 'Home',
      hasDropdown: false,
      href: '#home',
    },
    {
      id: 'about',
      label: 'About',
      hasDropdown: true,
      categoryTitle: 'Institutional Heritage & Campuses',
      columns: {
        col1: [
          {
            label: 'Overview',
            href: '#about-overview',
            onClick: () => onNavigateToAbout && onNavigateToAbout('#about-overview'),
          },
          {
            label: 'Campuses',
            href: '#campuses-overview',
            onClick: () => {
              if (onNavigateToCampuses) {
                onNavigateToCampuses('#campuses-overview');
              } else if (onNavigateToAbout) {
                onNavigateToAbout('#campuses');
              }
            },
          },
          {
            label: 'Campus Life',
            href: '#life-overview',
            onClick: () => {
              if (onNavigateToLife) {
                onNavigateToLife('#life-overview');
              } else if (onNavigateToAbout) {
                onNavigateToAbout('#life-at-aset');
              }
            },
          },
        ],
        col2: [
          {
            label: 'Gallery',
            href: '#gallery',
            onClick: () => {
              if (onNavigateToLife) {
                onNavigateToLife('#gallery');
              } else if (onNavigateToAbout) {
                onNavigateToAbout('#life-at-aset');
              }
            },
          },
          {
            label: 'Student Login',
            href: 'https://asetcollege.ac.in/',
          },
          {
            label: 'Journal',
            href: '#journal',
            onClick: () => onNavigateToAbout && onNavigateToAbout('#journal'),
          },
        ],
      },
      featured: {
        image: asetCampusModernClean,
        alt: 'ASET College Campuses & Heritage',
        buttonLabel: 'Discover Our Heritage ↗',
        buttonHref: '#about-overview',
        onButtonClick: () => onNavigateToAbout && onNavigateToAbout('#about-overview'),
      },
    },
    {
      id: 'admission',
      label: 'Admission',
      hasDropdown: true,
      categoryTitle: 'Academic Year 2026–2027 Admissions',
      columns: {
        col1: [
          {
            label: 'Admission Overview',
            href: '#admission-overview',
            onClick: () => onNavigateToAdmissions && onNavigateToAdmissions('#admission-overview'),
          },
          {
            label: 'Requirements',
            href: '#requirements-overview',
            onClick: () => {
              if (onNavigateToRequirements) {
                onNavigateToRequirements('#requirements-overview');
              } else if (onNavigateToAdmissions) {
                onNavigateToAdmissions('#documents-required');
              }
            },
          },
        ],
        col2: [
          {
            label: 'Mode of Fee Payment',
            href: '#fee-payment',
            onClick: () => {
              if (onNavigateToFeePayment) {
                onNavigateToFeePayment('#fee-payment');
              } else if (onNavigateToAdmissions) {
                onNavigateToAdmissions('#fee-payment');
              }
            },
          },
          {
            label: 'Apply Online',
            href: '#apply-online',
            onClick: () => {
              if (onNavigateToApplyOnline) {
                onNavigateToApplyOnline('#apply-online');
              } else if (onNavigateToAdmissions) {
                onNavigateToAdmissions('#online-application');
              }
            },
          },
        ],
      },
      featured: {
        image: asetCampusSunset,
        alt: 'ASET College Admissions Guide',
        buttonLabel: 'Apply Online 2026–27 ↗',
        buttonHref: '#apply-online',
        onButtonClick: () => {
          if (onNavigateToApplyOnline) {
            onNavigateToApplyOnline('#apply-online');
          } else if (onNavigateToAdmissions) {
            onNavigateToAdmissions('#admission-overview');
          }
        },
      },
    },
    {
      id: 'departments',
      label: 'Departments',
      hasDropdown: true,
      categoryTitle: 'Six Core Industry-Aligned Schools',
      columns: {
        col1: [
          {
            label: 'Aviation',
            href: '#departments',
            onClick: () => handleSelectDepartmentByName('Aviation'),
          },
          {
            label: 'Logistics & Shipping',
            href: '#departments',
            onClick: () => handleSelectDepartmentByName('Logistics'),
          },
          {
            label: 'Fire & Industrial Safety',
            href: '#departments',
            onClick: () => handleSelectDepartmentByName('Safety'),
          },
        ],
        col2: [
          {
            label: 'Management Studies',
            href: '#departments',
            onClick: () => handleSelectDepartmentByName('Management'),
          },
          {
            label: 'School of Commerce',
            href: '#departments',
            onClick: () => handleSelectDepartmentByName('Commerce'),
          },
          {
            label: 'Hotel Management',
            href: '#departments',
            onClick: () => handleSelectDepartmentByName('Hotel'),
          },
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
      categoryTitle: 'Student Life, Governance & Events',
      columns: {
        col1: [
          {
            label: 'Examination Cell',
            href: '#examination-cell',
            onClick: () => {
              if (onNavigateToExamCell) {
                onNavigateToExamCell('#examination-cell');
              } else if (onOpenExamCell) {
                onOpenExamCell();
              } else {
                handleNavClick(undefined, '#examination-cell');
              }
            },
          },
          {
            label: 'Student Events',
            href: '#campus-routine',
            onClick: () => {
              if (onNavigateToLife) {
                onNavigateToLife('#campus-routine');
              } else {
                handleNavClick(undefined, '#campus-routine');
              }
            },
          },
        ],
        col2: [
          {
            label: 'Alumni',
            href: '#testimonials',
            onClick: () => handleNavClick(undefined, '#testimonials'),
          },
          {
            label: 'News & Events',
            href: '#day-one',
            onClick: () => {
              if (onNavigateToLife) {
                onNavigateToLife('#day-one');
              } else {
                handleNavClick(undefined, '#day-one');
              }
            },
          },
        ],
      },
      featured: {
        image: asetAviationStudents,
        alt: 'ASET College Student Life',
        buttonLabel: 'Explore Campus Life ↗',
        buttonHref: '#life-overview',
        onButtonClick: () => onNavigateToLife && onNavigateToLife('#life-overview'),
      },
    },
    {
      id: 'placement',
      label: 'Placement',
      hasDropdown: true,
      categoryTitle: 'Corporate Partnerships & Placements',
      columns: {
        col1: [
          {
            label: 'Our Placement Cell',
            href: '#placements',
            onClick: () => handleNavClick(undefined, '#placements'),
          },
          {
            label: 'Placement Training',
            href: '#placements',
            onClick: () => handleNavClick(undefined, '#placements'),
          },
          {
            label: 'Internship Program',
            href: '#placements',
            onClick: () => handleNavClick(undefined, '#placements'),
          },
        ],
        col2: [
          {
            label: 'Industrial Visits',
            href: '#placements',
            onClick: () => handleNavClick(undefined, '#placements'),
          },
          {
            label: 'Student Registration',
            href: '#contact',
            onClick: () => {
              if (onOpenAdmissions) {
                onOpenAdmissions();
              } else {
                handleNavClick(undefined, '#contact');
              }
            },
          },
          {
            label: 'Testimonials',
            href: '#testimonials',
            onClick: () => handleNavClick(undefined, '#testimonials'),
          },
        ],
      },
      featured: {
        image: asetGraduates,
        alt: 'ASET College Placements & Alumni',
        buttonLabel: 'View Placement Records ↗',
        buttonHref: '#placements',
        onButtonClick: () => handleNavClick(undefined, '#placements'),
      },
    },
    {
      id: 'contact',
      label: 'Contact',
      hasDropdown: false,
      href: '#contact',
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
        className={`fixed top-0 left-0 right-0 z-50 font-sans pointer-events-none transition-[padding] duration-300 ${isScrolled
          ? 'pt-2.5 sm:pt-4 px-3 sm:px-6 lg:px-8'
          : 'pt-3.5 sm:pt-5 px-4 sm:px-6 lg:px-8'
          }`}
      >
        <div
          className={`relative max-w-7xl mx-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'
            } ${isScrolled
              ? 'bg-stone-950/85 backdrop-blur-2xl backdrop-saturate-150 rounded-2xl sm:rounded-full shadow-2xl py-2 sm:py-2.5 px-3.5 sm:px-6'
              : 'bg-transparent py-1 sm:py-2 px-0 border-0 shadow-none'
            }`}
        >
          <div className="flex items-center justify-between gap-4 lg:gap-6">
            {/* ===================================================== */}
            {/* Left Brand: ASET College Logo Pill (Bigger, bolder and prominent) */}
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
                className={`px-3.5 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full backdrop-blur-xl flex items-center justify-center transition-all ${
                  isScrolled
                    ? 'bg-white/10 hover:bg-white/20'
                    : 'bg-white/15 hover:bg-white/25 shadow-md'
                }`}
              >
                <img
                  src={asetLogo}
                  alt="ASET College"
                  className="h-8 xs:h-9 sm:h-9 md:h-10 w-auto object-contain brightness-105"
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
                        if (!item.hasDropdown) {
                          setActiveMenu(null);
                          if (item.href === '#home') {
                            if (onNavigateToHome) onNavigateToHome();
                          } else if (item.href === '#contact') {
                            handleContactClick();
                          } else if (item.href) {
                            handleNavClick(undefined, item.href);
                          }
                          return;
                        }
                        if (item.id === 'about' && onNavigateToAbout) {
                          setActiveMenu(null);
                          onNavigateToAbout('#about-overview');
                        } else if (item.id === 'admission' && onNavigateToAdmissions) {
                          setActiveMenu(null);
                          onNavigateToAdmissions('#admission-overview');
                        } else if (item.id === 'departments' && onExploreDepartments) {
                          setActiveMenu(null);
                          onExploreDepartments();
                        } else if (item.hasDropdown) {
                          setActiveMenu(activeMenu === item.id ? null : item.id);
                        }
                      }}
                      className="relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold tracking-tight cursor-pointer select-none"
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
                          ? 'text-stone-950 font-semibold'
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
            {/* Right Action: Apply Now Pill (Desktop only) & Menu Button */}
            {/* ===================================================== */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Apply Now Pill Button (Desktop only) */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                onClick={onOpenAdmissions}
                className="group hidden lg:inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white bg-[#dc2626] hover:bg-[#b91c1c] transition-all rounded-full shadow-lg shadow-red-900/30 whitespace-nowrap cursor-pointer border border-red-500/40 shrink-0"
              >
                <span>Apply 2026–27</span>
                <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>

              {/* Hamburger Menu Icon (Always visible on mobile & tablet, hidden on lg desktop) */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 flex items-center justify-center text-white rounded-full bg-white/15 hover:bg-white/25 active:bg-white/30 backdrop-blur-md shadow-md transition-all focus:outline-hidden cursor-pointer shrink-0"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
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
                                  className="block font-semibold text-stone-900 hover:text-red-700 text-[15px] sm:text-[16px] tracking-tight transition-colors leading-snug cursor-pointer group"
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
                                  className="block font-semibold text-stone-900 hover:text-red-700 text-[15px] sm:text-[16px] tracking-tight transition-colors leading-snug cursor-pointer group"
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
                                if (currentMegaMenu.featured.buttonHref.startsWith('#about') && onNavigateToAbout) {
                                  onNavigateToAbout(currentMegaMenu.featured.buttonHref);
                                } else {
                                  const target = document.querySelector(
                                    currentMegaMenu.featured.buttonHref
                                  );
                                  if (target) {
                                    target.scrollIntoView({ behavior: 'smooth' });
                                  }
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
      {/* Sleek dark luxury aesthetic matching user specification   */}
      {/* ========================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -24, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.99 }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed inset-x-0 top-0 z-50 lg:hidden bg-[#0c0d0f]/98 backdrop-blur-2xl text-stone-100 border-b border-stone-800 shadow-2xl shadow-black/60 max-h-[92vh] overflow-y-auto font-sans"
          >
            {/* Subtle atmospheric glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 -right-12 w-64 h-64 rounded-full bg-gradient-to-b from-orange-500/15 via-rose-500/10 to-transparent blur-3xl -z-10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 -left-16 w-56 h-56 rounded-full bg-blue-500/10 blur-3xl -z-10"
            />

            {/* Mobile Header Bar: Dark color for high contrast & prominent branding */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-stone-800/90 bg-[#08080a] text-white shadow-md">
              <div className="flex items-center gap-3">
                <img src={asetLogo} alt="ASET College" className="h-7 sm:h-8 w-auto object-contain brightness-110" />
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white hover:text-white rounded-full bg-white/10 hover:bg-white/20 active:bg-white/25 border border-white/15 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>
            </div>

            {/* Mobile Navigation List with Expandable Accordions */}
            <div className="p-4 sm:p-5 space-y-1.5">
              {menuItems.map((item) => {
                const isExpanded = mobileExpandedAccordion === item.id;

                if (!item.hasDropdown) {
                  return (
                    <motion.a
                      key={item.id}
                      whileTap={{ scale: 0.98 }}
                      href={item.href || '#'}
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        if (item.href === '#home') {
                          if (onNavigateToHome) onNavigateToHome();
                        } else if (item.href === '#contact') {
                          handleContactClick();
                        } else {
                          handleNavClick(e, item.href || '#');
                        }
                      }}
                      className="group flex items-center justify-between py-3.5 px-3 rounded-xl hover:bg-white/5 text-base font-bold text-white transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.label}</span>
                        {item.badge && (
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              item.badgeColor || 'bg-emerald-500 text-white'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-orange-400 transition-colors" />
                    </motion.a>
                  );
                }

                return (
                  <div key={item.id} className="border-b border-stone-800/70 pb-1">
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() =>
                        setMobileExpandedAccordion(isExpanded ? null : item.id)
                      }
                      className="w-full flex items-center justify-between py-3.5 px-3 text-base font-semibold text-white rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <motion.span
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`p-1.5 rounded-full transition-colors ${
                          isExpanded
                            ? 'bg-orange-600 text-white shadow-xs'
                            : 'bg-white/10 text-stone-300 hover:bg-white/15'
                        }`}
                      >
                        {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
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
                          className="pl-3 pr-2 pb-3.5 space-y-1.5 overflow-hidden"
                        >
                          <div className="text-[11px] font-mono font-bold text-orange-400 uppercase tracking-wider pt-2 pb-1 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                            <span>{item.categoryTitle}</span>
                          </div>
                          <div className="space-y-1">
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
                                className="group flex items-center justify-between text-sm font-semibold text-stone-300 hover:text-white hover:bg-white/5 px-2.5 py-2 rounded-xl transition-all"
                              >
                                <span className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-stone-600 group-hover:bg-orange-400 transition-colors shrink-0" />
                                  <span>{link.label}</span>
                                </span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-orange-400 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
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
            <div className="p-4 sm:p-5 pt-3 border-t border-stone-800 space-y-3 bg-[#08080a]">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleContactClick}
                className="w-full py-3.5 px-5 text-center text-sm font-semibold text-stone-950 bg-white hover:bg-stone-100 transition-all rounded-full shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Contact Admissions &amp; Campus</span>
                <ArrowUpRight className="w-4 h-4 text-stone-950" />
              </motion.button>

              <div className="flex items-center justify-around pt-1 text-xs font-medium text-stone-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  <span>Chennai &amp; Coimbatore</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Alagappa University</span>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};