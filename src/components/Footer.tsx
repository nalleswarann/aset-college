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
} from 'lucide-react';
import asetLogo from '../assets/images/aset-logo.png';

interface FooterProps {
  onOpenAdmissions: () => void;
  onOpenVirtualTour?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAdmissions,
  onOpenVirtualTour,
}) => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="footer"
      className="relative w-full overflow-hidden bg-[#faf8f5] text-stone-900 font-manrope select-none border-t border-stone-200/90 pt-14 sm:pt-18 lg:pt-20 pb-10 sm:pb-14"
    >
      {/* ========================================================= */}
      {/* SCREEN-MERGED CANVAS (#faf8f5)                            */}
      {/* Seamless full-width integration with the rest of the site */}
      {/* ========================================================= */}
      <div className="w-full max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* ======================================================= */}
        {/* MAIN FOOTER GRID (4-Column Layout)                      */}
        {/* ======================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-12 items-start">
          
          {/* ----------------------------------------------------- */}
          {/* COLUMN 1: Official Logo, Description & Action Button   */}
          {/* ----------------------------------------------------- */}
          <div className="md:col-span-12 lg:col-span-4 space-y-5">
            {/* Properly Aligned Official Navigation Bar Logo with Dark Contrast Container */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#home');
              }}
              className="inline-flex items-center group cursor-pointer select-none"
              aria-label="ASET College Home"
            >
              <div className="bg-stone-950 hover:bg-stone-900 border border-stone-800/90 rounded-2xl px-4 py-2 sm:px-5 sm:py-2.5 shadow-md shadow-stone-950/10 transition-all duration-300 group-hover:scale-[1.02] flex items-center justify-center">
                <img
                  src={asetLogo}
                  alt="ASET College"
                  className="h-7.5 sm:h-8.5 md:h-9.5 w-auto max-w-[190px] sm:max-w-[220px] object-contain brightness-105"
                />
              </div>
            </a>

            {/* Official Institutional Description from Website */}
            <ScrollParagraph delay={0.1} className="text-xs sm:text-sm text-stone-700 max-w-md leading-relaxed font-sans">
              ASET College offers career-focused programmes in Aviation, Logistics &amp; Shipping, Fire &amp; Industrial Safety, Management Studies, Commerce and Hotel Management, with practical training, industry exposure and placement support, at campuses in Chennai and Coimbatore.
            </ScrollParagraph>

            {/* Red Pill Call-to-Action Button */}
            <ScrollAction delay={0.18} className="pt-1">
              <button
                type="button"
                onClick={() => {
                  onOpenAdmissions();
                  scrollTo('#contact');
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] active:scale-95 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md shadow-red-600/25 hover:shadow-lg hover:shadow-red-600/35 transition-all cursor-pointer"
              >
                <span>Let&apos;s talk</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.4]" />
              </button>
            </ScrollAction>
          </div>

          {/* ----------------------------------------------------- */}
          {/* COLUMN 2: EXPLORE Navigation Links                    */}
          {/* ----------------------------------------------------- */}
          <div className="col-span-1 md:col-span-4 lg:col-span-2 space-y-4">
            <h3 className="text-xs sm:text-[13px] font-bold text-[#dc2626] font-inter uppercase tracking-wider">
              EXPLORE
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 font-sans">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#about')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  About ASET
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenAdmissions}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left font-medium"
                >
                  Admission
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#life-at-aset')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Student Life
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#placements')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Placement
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#blogs')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Blogs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#contact')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#about')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#about')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Journal
                </button>
              </li>
            </ul>
          </div>

          {/* ----------------------------------------------------- */}
          {/* COLUMN 3: DEPARTMENTS Programs List                   */}
          {/* ----------------------------------------------------- */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3 space-y-4">
            <h3 className="text-xs sm:text-[13px] font-bold text-[#dc2626] font-inter uppercase tracking-wider">
              DEPARTMENTS
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 font-sans">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#departments')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Aviation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#departments')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Logistics &amp; Shipping
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#departments')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Fire &amp; Industrial Safety
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#departments')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Management Studies
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#departments')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  School of Commerce
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#departments')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Hotel Management
                </button>
              </li>
            </ul>
          </div>

          {/* ----------------------------------------------------- */}
          {/* COLUMN 4: CONNECT Social Links & Email                */}
          {/* ----------------------------------------------------- */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3 space-y-4">
            <h3 className="text-xs sm:text-[13px] font-bold text-[#dc2626] font-inter uppercase tracking-wider">
              CONNECT
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 font-sans">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all inline-block"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all inline-block"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all inline-block"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all inline-block"
                >
                  YouTube
                </a>
              </li>
              <li className="pt-1.5">
                <a
                  href="mailto:contact@asetsafety.ac.in"
                  className="text-stone-900 font-medium hover:text-red-600 transition-colors inline-flex items-center gap-1.5 text-xs sm:text-sm whitespace-nowrap"
                >
                  <Mail className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span>contact@asetsafety.ac.in</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Thin Divider Line */}
        <div className="w-full h-px bg-stone-300/80 my-6 sm:my-8" />

        {/* ======================================================= */}
        {/* SUB-FOOTER: Copyright, Accreditation & Social Icons    */}
        {/* ======================================================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-2 text-xs sm:text-[13px] text-stone-700 font-sans">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 sm:gap-x-6 gap-y-2 text-center md:text-left">
            <span>
              © {new Date().getFullYear()} ASET College of Science &amp; Technology. All rights reserved.
            </span>
            <span className="text-stone-500 font-medium">
              Academically supported by Alagappa University · Chennai &amp; Coimbatore
            </span>
          </div>

          {/* Social Icons Pills */}
          <div className="flex items-center gap-3.5 text-stone-800">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-stone-200/70 hover:text-blue-600 transition-all hover:scale-110"
            >
              <Facebook className="w-4 h-4 fill-current" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-stone-200/70 hover:text-rose-600 transition-all hover:scale-110"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Twitter"
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-stone-200/70 hover:text-stone-950 transition-all hover:scale-110"
            >
              <Twitter className="w-4 h-4 fill-current" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-stone-200/70 hover:text-blue-700 transition-all hover:scale-110"
            >
              <Linkedin className="w-4 h-4 fill-current" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-stone-200/70 hover:text-red-600 transition-all hover:scale-110"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
