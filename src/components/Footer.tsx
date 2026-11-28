import React from 'react';
import { ScrollParagraph, ScrollAction } from './ScrollTypography';
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ArrowUp,
  Sparkles,
} from 'lucide-react';
import asetLogo from '../assets/images/aset-logo.png';

interface FooterProps {
  onOpenAdmissions: () => void;
  onOpenVirtualTour?: () => void;
  onNavigateToAbout?: (targetHash?: string) => void;
  onNavigateToCampuses?: (targetHash?: string) => void;
  onNavigateToLife?: (targetHash?: string) => void;
  onNavigateToAdmissions?: (targetHash?: string) => void;
  onNavigateToRequirements?: (targetHash?: string) => void;
  onNavigateToFeePayment?: (targetHash?: string) => void;
  onNavigateToApplyOnline?: (targetHash?: string) => void;
  onNavigateToExamCell?: (targetHash?: string) => void;
  onNavigateToPlacements?: (targetHash?: string) => void;
  onNavigateToContact?: (targetHash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAdmissions,
  onOpenVirtualTour,
  onNavigateToAbout,
  onNavigateToCampuses,
  onNavigateToLife,
  onNavigateToAdmissions,
  onNavigateToRequirements,
  onNavigateToFeePayment,
  onNavigateToApplyOnline,
  onNavigateToExamCell,
  onNavigateToPlacements,
  onNavigateToContact,
}) => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className="relative w-full overflow-hidden bg-gradient-to-b from-stone-950 via-[#131113] to-black text-white font-sans select-none border-t border-white/10 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16"
    >
      {/* ========================================================= */}
      {/* ATMOSPHERIC BACKGROUND: Warm Orange to Crimson Rose Glow   */}
      {/* ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-orange-500/12 via-rose-500/8 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-rose-600/10 via-orange-600/6 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-red-950/20 blur-3xl"
      />

      {/* Subtle radial sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial-[circle_at_top,_var(--tw-gradient-stops)] from-white/[0.04] via-transparent to-transparent"
      />

      <div className="relative z-10 w-full max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* ======================================================= */}
        {/* MAIN FOOTER GRID (4-Column Symmetrical Layout)          */}
        {/* ======================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 sm:pb-14 items-start">

          {/* ----------------------------------------------------- */}
          {/* COLUMN 1: Official Logo, Description & Action Buttons  */}
          {/* ----------------------------------------------------- */}
          <div className="md:col-span-12 lg:col-span-4 space-y-6">
            {/* Official Logo Container in Frosted Glass */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#home');
              }}
              className="inline-flex items-center group cursor-pointer select-none"
              aria-label="ASET College Home"
            >
              <div className="bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md rounded-2xl px-4 py-2 sm:px-5 sm:py-2.5 shadow-lg shadow-black/30 transition-all duration-300 group-hover:scale-[1.02] flex items-center justify-center">
                <img
                  src={asetLogo}
                  alt="ASET College"
                  className="h-8 sm:h-9 md:h-10 w-auto max-w-[190px] sm:max-w-[220px] object-contain brightness-105"
                />
              </div>
            </a>

            {/* Official Institutional Narrative */}
            <ScrollParagraph delay={0.08} className="text-xs sm:text-sm text-stone-300 max-w-md leading-relaxed font-sans">
              ASET College offers career-focused programmes in Aviation, Logistics &amp; Shipping, Fire &amp; Industrial Safety, Management Studies, Commerce and Hotel Management, with practical training, industry exposure and placement support, at campuses in Chennai and Coimbatore.
            </ScrollParagraph>

            {/* Action Buttons Row */}
            <ScrollAction delay={0.16} className="pt-1 flex flex-wrap items-center gap-3">
              {/* Primary Contact CTA Button */}
              <button
                type="button"
                onClick={() => {
                  if (onNavigateToContact) {
                    onNavigateToContact('#contact');
                  } else {
                    onOpenAdmissions();
                    scrollTo('#contact');
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-rose-700 hover:from-orange-500 hover:to-rose-600 active:scale-95 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-orange-600/25 hover:shadow-orange-600/40 hover:scale-102 transition-all cursor-pointer group w-full xs:w-auto"
              >
                <span>Let&apos;s talk</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Secondary Apply Online Button */}
              <button
                type="button"
                onClick={() => {
                  if (onNavigateToApplyOnline) {
                    onNavigateToApplyOnline('#apply-online');
                  } else {
                    onOpenAdmissions();
                  }
                }}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 min-h-[46px] rounded-full bg-white/10 hover:bg-white/15 active:scale-95 text-stone-200 hover:text-white text-xs sm:text-sm font-semibold tracking-wide border border-white/15 hover:border-white/25 transition-all cursor-pointer w-full xs:w-auto"
              >
                <span>Apply 2027–28</span>
              </button>
            </ScrollAction>

            {/* Quick Admissions Hotline Badge */}

          </div>

          {/* ----------------------------------------------------- */}
          {/* COLUMN 2: EXPLORE Navigation Links                    */}
          {/* ----------------------------------------------------- */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3 space-y-4">
            <h3 className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.18em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-red-400 flex items-center gap-2">
              <span>EXPLORE</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-sans">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigateToAbout) {
                      onNavigateToAbout('#about-overview');
                    } else {
                      scrollTo('#about');
                    }
                  }}
                  className="text-stone-300 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block py-0.5"
                >
                  About ASET
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigateToCampuses) {
                      onNavigateToCampuses('#campuses-overview');
                    } else {
                      scrollTo('#campuses');
                    }
                  }}
                  className="text-stone-300 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block py-0.5"
                >
                  Campuses &amp; Facilities
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigateToRequirements) {
                      onNavigateToRequirements('#requirements-overview');
                    } else if (onNavigateToAdmissions) {
                      onNavigateToAdmissions('#documents-required');
                    }
                  }}
                  className="text-stone-300 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block py-0.5"
                >
                  Admission Requirements
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigateToFeePayment) {
                      onNavigateToFeePayment('#fee-payment');
                    } else if (onNavigateToAdmissions) {
                      onNavigateToAdmissions('#fee-payment');
                    }
                  }}
                  className="text-stone-300 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block py-0.5"
                >
                  Mode of Fee Payment
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigateToApplyOnline) {
                      onNavigateToApplyOnline('#apply-online');
                    } else if (onNavigateToAdmissions) {
                      onNavigateToAdmissions('#online-application');
                    }
                  }}
                  className="text-stone-300 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left py-0.5 inline-flex items-center gap-1.5 group"
                >
                  <span className="group-hover:text-orange-300 transition-colors">Apply Online 2027–28</span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-500/20 to-rose-500/20 text-orange-300 border border-orange-500/30">
                    Active
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigateToExamCell) {
                      onNavigateToExamCell('#examination-cell');
                    } else {
                      scrollTo('#examination-cell');
                    }
                  }}
                  className="text-stone-300 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block py-0.5"
                >
                  Examination Cell
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigateToAdmissions) {
                      onNavigateToAdmissions('#admission-overview');
                    } else {
                      onOpenAdmissions();
                    }
                  }}
                  className="text-stone-300 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block py-0.5"
                >
                  Admission Guide 2027–28
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigateToLife) {
                      onNavigateToLife('#life-overview');
                    } else {
                      scrollTo('#life-at-aset');
                    }
                  }}
                  className="text-stone-300 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block py-0.5"
                >
                  Student Life
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigateToPlacements) {
                      onNavigateToPlacements('#placement-overview');
                    } else {
                      scrollTo('#placements');
                    }
                  }}
                  className="text-stone-300 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block py-0.5"
                >
                  Placement
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#blogs')}
                  className="text-stone-300 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block py-0.5"
                >
                  Blogs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigateToContact) {
                      onNavigateToContact('#contact');
                    } else {
                      scrollTo('#contact');
                    }
                  }}
                  className="text-stone-300 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block py-0.5"
                >
                  Contact Us
                </button>
              </li>
              <li>
                {/* <button
                  type="button"
                  onClick={() => scrollTo('#about')}
                  className="text-stone-400 hover:text-stone-200 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block py-0.5 text-xs"
                >
                  Privacy Policy
                </button> */}
              </li>
            </ul>
          </div>

          {/* ----------------------------------------------------- */}
          {/* COLUMN 3: DEPARTMENTS Programs List                   */}
          {/* ----------------------------------------------------- */}
          <div className="col-span-1 md:col-span-4 lg:col-span-2 space-y-4">
            <h3 className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.18em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-red-400 flex items-center gap-2">
              <span>DEPARTMENTS</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#departments')}
                  className="text-stone-300 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block py-0.5"
                >
                  Aviation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#departments')}
                  className="text-stone-300 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block py-0.5"
                >
                  Logistics &amp; Shipping
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#departments')}
                  className="text-stone-300 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block py-0.5"
                >
                  Fire &amp; Industrial Safety
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#departments')}
                  className="text-stone-300 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block py-0.5"
                >
                  Management Studies
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#departments')}
                  className="text-stone-300 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block py-0.5"
                >
                  School of Commerce
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#departments')}
                  className="text-stone-300 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block py-0.5"
                >
                  Hotel Management
                </button>
              </li>
            </ul>
          </div>

          {/* ----------------------------------------------------- */}
          {/* COLUMN 4: CONNECT & Direct Coordinates               */}
          {/* ----------------------------------------------------- */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3 space-y-4">
            <h3 className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.18em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-red-400 flex items-center gap-2">
              <span>CONNECT &amp; REACH US</span>
            </h3>

            {/* Direct Contact Cards */}
            <div className="space-y-3 font-sans">
              <a
                href="mailto:contact@asetsafety.ac.in"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/40 text-stone-200 hover:text-white transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-stone-400">Email Enquiries</p>
                  <p className="text-xs font-semibold truncate font-mono text-stone-200 group-hover:text-orange-300 transition-colors">
                    contact@asetsafety.ac.in
                  </p>
                </div>
              </a>

              <a
                href="tel:+919159499973"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-rose-500/40 text-stone-200 hover:text-white transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-stone-400">Direct Helpline</p>
                  <p className="text-xs font-semibold truncate font-mono text-stone-200 group-hover:text-rose-300 transition-colors">
                    +91 91594 99973 / 74
                  </p>
                </div>
              </a>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-stone-300 space-y-1">
                <div className="flex items-center gap-1.5 text-stone-200 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span>Campus Locations</span>
                </div>
                <p className="text-[11px] text-stone-400 leading-relaxed font-sans">
                  Chennai (Bangalore Highway) &amp; Coimbatore (Saravanampatti)
                </p>
              </div>
            </div>

            {/* Social Icons Pills */}
            <div className="pt-2">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-2.5">
                Official Channels
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://www.facebook.com/asetgroups/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/25 text-stone-300 hover:text-blue-400 transition-all hover:scale-105 active:scale-95 shadow-xs"
                >
                  <Facebook className="w-4 h-4 fill-current" />
                </a>
                <a
                  href="https://www.instagram.com/aset_chennai?utm_source=ig_web_button_share_sheet&hvrq=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/25 text-stone-300 hover:text-pink-400 transition-all hover:scale-105 active:scale-95 shadow-xs"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/asetsafety"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X Twitter"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/25 text-stone-300 hover:text-sky-300 transition-all hover:scale-105 active:scale-95 shadow-xs"
                >
                  <Twitter className="w-4 h-4 fill-current" />
                </a>
                <a
                  href="https://www.linkedin.com/company/aset-institute-of-technology-aset/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/25 text-stone-300 hover:text-blue-500 transition-all hover:scale-105 active:scale-95 shadow-xs"
                >
                  <Linkedin className="w-4 h-4 fill-current" />
                </a>
                {/* <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/25 text-stone-300 hover:text-red-500 transition-all hover:scale-105 active:scale-95 shadow-xs"
                >
                  <Youtube className="w-4 h-4" />
                </a> */}
              </div>
            </div>
          </div>

        </div>

        {/* Hairline Gradient Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-6 sm:my-8" />

        {/* ======================================================= */}
        {/* SUB-FOOTER: Copyright, Accreditation & Back to Top     */}
        {/* ======================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2 text-xs text-stone-400 font-sans">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 sm:gap-x-6 gap-y-1.5 text-center sm:text-left">
            <span>
              © {new Date().getFullYear()} ASET College of Science &amp; Technology. All rights reserved.
            </span>
            <span className="text-stone-500 font-medium">
              Academically supported by Alagappa University · Chennai &amp; Coimbatore
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-stone-300 hover:text-white text-xs font-mono transition-colors cursor-pointer shrink-0"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-orange-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
