import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Search } from 'lucide-react';
import asetLogo from '../assets/images/aset-logo.png';

interface NavbarProps {
  onOpenAdmissions: () => void;
  onExploreDepartments?: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAdmissions,
  onExploreDepartments,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Courses / Academics', href: '#departments', id: 'academics' },
    { label: 'Departments', href: '#departments', id: 'departments' },
    { label: 'Admissions', href: '#contact', id: 'admissions' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-manrope ${
        isScrolled
          ? 'bg-[#001733]/82 backdrop-blur-2xl border-b border-white/15 shadow-[0_16px_40px_rgba(0,10,28,0.6)] py-3'
          : 'bg-transparent border-b border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Left Brand: ASET College Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 text-white tracking-tight whitespace-nowrap shrink-0 cursor-pointer"
            aria-label="ASET College of Science & Technology Home"
          >
            <div className="bg-white/12 hover:bg-white/20 px-3.5 py-1.5 rounded-full border border-white/25 backdrop-blur-xl transition-all group-hover:scale-[1.02] shadow-sm">
              <img
                src={asetLogo}
                alt="ASET College of Science & Technology"
                className="h-8 sm:h-9 w-auto object-contain brightness-105"
              />
            </div>
            <div className="hidden xl:flex flex-col">
              <span className="font-manrope text-sm font-bold tracking-wider text-white uppercase leading-tight">
                ASET College
              </span>
              <span className="text-[10px] font-manrope tracking-widest text-sky-200 uppercase">
                Science &amp; Technology
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-white/90">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 tracking-wide whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#F5C542] font-semibold'
                      : 'text-white/85 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F5C542] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Search icon & Prominent Gold 'Apply Now' Button */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={() => {
                const searchEl = document.querySelector('#departments');
                if (searchEl) searchEl.scrollIntoView({ behavior: 'smooth' });
              }}
              title="Search Courses"
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Search Programs"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenAdmissions}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs uppercase tracking-wider font-bold text-[#002B4E] bg-[#F5C542] hover:bg-[#e4b534] active:scale-98 transition-all rounded-full shadow-lg shadow-amber-400/20 whitespace-nowrap shrink-0 cursor-pointer border border-[#f7cf5a]"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenAdmissions}
              className="sm:hidden px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-bold text-[#002B4E] bg-[#F5C542] rounded-full shadow-md"
            >
              Apply
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#F5C542] rounded-md focus:outline-hidden cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#001f3f]/95 backdrop-blur-2xl border-b border-white/15 px-6 pt-4 pb-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-white/90 hover:text-[#F5C542] py-2.5 border-b border-white/10 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-white/40 text-xs font-mono">0{idx + 1}</span>
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmissions();
              }}
              className="w-full py-3 px-4 text-center text-xs uppercase tracking-wider font-bold text-[#002B4E] bg-[#F5C542] hover:bg-[#e4b534] transition-colors rounded-full shadow-lg cursor-pointer"
            >
              Apply Now · 2026–2027 Admissions
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
