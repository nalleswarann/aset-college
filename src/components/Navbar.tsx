import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Phone,
  ArrowRight,
  GraduationCap,
  Sparkles,
  Compass,
  MapPin,
} from 'lucide-react';
import asetLogo from '../assets/images/aset-logo.png';

interface NavbarProps {
  onOpenAdmissions: () => void;
  onExploreDepartments?: () => void;
  activeSection?: string;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Departments', href: '#departments' },
  { label: 'Eligibility', href: '#eligibility' },
  { label: 'Values', href: '#values' },
  { label: 'Placements', href: '#placements' },
  { label: 'Stories', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAdmissions,
  onExploreDepartments,
  activeSection = 'home',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Apple-Style Pill Navigation Header */}
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none pt-3 sm:pt-4 px-3 sm:px-6 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Main Floating Capsule */}
          <nav
            aria-label="Main Navigation"
            className={`w-full pointer-events-auto rounded-full transition-all duration-300 flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 ${
              isScrolled
                ? 'bg-white/85 backdrop-blur-2xl border border-stone-200/90 shadow-[0_12px_36px_rgba(0,0,0,0.08)]'
                : 'bg-white/90 backdrop-blur-xl border border-stone-200/70 shadow-sm'
            }`}
          >
            {/* Left: Official ASET Logo with subtle contrast frame */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#home');
              }}
              className="inline-flex items-center gap-2.5 group cursor-pointer select-none pl-1"
              aria-label="ASET College Homepage"
            >
              <div className="bg-stone-950 rounded-xl px-2.5 py-1.5 border border-stone-800 shadow-xs flex items-center justify-center transition-transform group-hover:scale-102">
                <img
                  src={asetLogo}
                  alt="ASET College of Science & Technology"
                  className="h-6 sm:h-7 w-auto object-contain"
                />
              </div>
              <div className="hidden xl:flex flex-col text-left">
                <span className="text-[11px] font-bold text-stone-900 leading-none tracking-tight">
                  ASET COLLEGE
                </span>
                <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest mt-0.5">
                  Alagappa Univ.
                </span>
              </div>
            </a>

            {/* Center: Desktop Nav Pills */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 px-3">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all cursor-pointer ${
                      isActive
                        ? 'text-stone-950 font-semibold bg-stone-100 shadow-2xs'
                        : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100/70'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="active-nav-dot"
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-600"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right: Quick Action CTAs */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Phone Inquiry Micro-Pill (Hidden on smallest mobile) */}
              <a
                href="tel:+919840333333"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200/80 text-stone-700 text-xs font-mono font-medium transition-colors border border-stone-200/80"
                aria-label="Direct Admissions Hotline"
              >
                <Phone className="w-3 h-3 text-orange-600" />
                <span className="text-[11px]">Admissions</span>
              </a>

              {/* Primary Apply Button */}
              <button
                type="button"
                onClick={onOpenAdmissions}
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-rose-600 hover:from-orange-700 hover:to-rose-700 text-white text-xs font-semibold tracking-tight shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Apply 2026–27</span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-800 transition-colors cursor-pointer border border-stone-200/80"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Apple-Style Mobile Navigation Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-20 inset-x-4 max-w-lg mx-auto bg-white/95 backdrop-blur-2xl rounded-3xl border border-stone-200 shadow-2xl p-6 overflow-hidden space-y-4 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-stone-200/80">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                  <span>ASET College Navigation</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-stone-200 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className="flex items-center justify-between p-3 rounded-2xl bg-stone-50 hover:bg-orange-50/80 text-stone-900 text-sm font-semibold transition-all border border-stone-200/70 group text-left cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-orange-600 group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>

              <div className="pt-2 border-t border-stone-200/80 space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmissions();
                  }}
                  className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-orange-600 via-orange-500 to-rose-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Apply for 2026–2027 Admissions</span>
                </button>

                <div className="flex items-center justify-between px-2 pt-1 text-[11px] font-mono text-stone-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-orange-600" />
                    Chennai &bull; Coimbatore
                  </span>
                  <span>Alagappa University</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
