import React, { useState } from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  ArrowUpRight,
  Check,
  Mail,
} from 'lucide-react';
import asetLogo from '../assets/images/aset-logo.png';
import asetAeroplane from '../assets/images/aset-aeroplane.png';
import {
  ScrollHeading,
  ScrollParagraph,
  ScrollAction,
} from './ScrollTypography';

interface FooterProps {
  onOpenAdmissions: () => void;
  onOpenVirtualTour?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAdmissions,
  onOpenVirtualTour,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="footer"
      className="relative w-full overflow-hidden bg-white text-stone-900 font-manrope select-none border-t border-stone-200/80 pt-12 sm:pt-16 lg:pt-20 pb-0"
    >
      {/* ========================================================= */}
      {/* ANIMATED FLUID AURORA & MESH GRADIENT BACKGROUND          */}
      {/* Website core colors: Electric Blue, Emerald Green, Cyan,   */}
      {/* Royal Purple & Signature ASET Crimson (Hardware-Accelerated) */}
      {/* ========================================================= */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
        style={{ contain: 'paint', transform: 'translate3d(0, 0, 0)' }}
      >
        {/* Crisp Luminous White Base */}
        <div className="absolute inset-0 bg-[#ffffff]/90" />

        {/* Blob 1: Vibrant Cobalt & Royal Blue (Top-Left & Center Dominant) */}
        <div
          className="absolute -top-[12%] -left-[10%] sm:-left-[5%] w-[75vw] sm:w-[65vw] max-w-[880px] h-[65vw] sm:h-[55vw] max-h-[720px] rounded-full filter blur-[50px] sm:blur-[70px] md:blur-[85px] opacity-75 animate-footer-blob-blue will-change-transform"
          style={{
            background:
              'radial-gradient(circle at 40% 40%, rgba(37,99,235,0.78) 0%, rgba(59,130,246,0.60) 45%, rgba(96,165,250,0.25) 75%, transparent 85%)',
          }}
        />

        {/* Blob 2: Vibrant Emerald & Leaf Green (Top-Right Dominant) */}
        <div
          className="absolute -top-[15%] -right-[12%] sm:-right-[6%] w-[70vw] sm:w-[60vw] max-w-[820px] h-[65vw] sm:h-[55vw] max-h-[700px] rounded-full filter blur-[50px] sm:blur-[70px] md:blur-[85px] opacity-70 animate-footer-blob-green will-change-transform"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.72) 0%, rgba(5,150,105,0.58) 45%, rgba(52,211,153,0.22) 75%, transparent 85%)',
          }}
        />

        {/* Blob 3: Glowing Cyan & Sky Blue (Middle Flow) */}
        <div
          className="absolute top-[28%] left-[18%] sm:left-[25%] w-[60vw] sm:w-[50vw] max-w-[700px] h-[50vw] sm:h-[42vw] max-h-[580px] rounded-full filter blur-[45px] sm:blur-[65px] md:blur-[80px] opacity-65 animate-footer-blob-cyan will-change-transform"
          style={{
            background:
              'radial-gradient(circle, rgba(6,182,212,0.68) 0%, rgba(14,165,233,0.48) 50%, rgba(56,189,248,0.18) 75%, transparent 85%)',
          }}
        />

        {/* Blob 4: Emerald Green & Mint Flow (Bottom-Right Aura) */}
        <div
          className="absolute bottom-[-10%] -right-[8%] w-[65vw] sm:w-[55vw] max-w-[750px] h-[55vw] sm:h-[45vw] max-h-[600px] rounded-full filter blur-[50px] sm:blur-[70px] md:blur-[85px] opacity-65 animate-footer-blob-green will-change-transform"
          style={{
            animationDelay: '-11s',
            background:
              'radial-gradient(circle, rgba(16,185,129,0.65) 0%, rgba(34,197,94,0.45) 50%, rgba(110,231,183,0.15) 80%, transparent 90%)',
          }}
        />

        {/* Blob 5: Signature ASET Crimson / Rose (Subtle warm underglow) */}
        <div
          className="absolute bottom-[8%] left-[2%] sm:left-[10%] w-[45vw] sm:w-[35vw] max-w-[500px] h-[40vw] sm:h-[32vw] max-h-[440px] rounded-full filter blur-[50px] sm:blur-[70px] md:blur-[85px] opacity-40 animate-footer-blob-crimson will-change-transform"
          style={{
            background:
              'radial-gradient(circle, rgba(220,38,38,0.50) 0%, rgba(225,29,72,0.30) 50%, transparent 80%)',
          }}
        />

        {/* Blob 6: Royal Violet & Purple (Upper-Mid Harmonizer) */}
        <div
          className="absolute top-[10%] left-[42%] w-[45vw] sm:w-[35vw] max-w-[500px] h-[40vw] sm:h-[32vw] max-h-[450px] rounded-full filter blur-[50px] sm:blur-[70px] md:blur-[85px] opacity-35 animate-footer-blob-purple will-change-transform"
          style={{
            background:
              'radial-gradient(circle, rgba(124,58,237,0.45) 0%, rgba(139,92,246,0.25) 50%, transparent 80%)',
          }}
        />

        {/* Center Luminous White Core for High Contrast & Crisp Legibility */}
        <div
          className="absolute top-[18%] left-[25%] w-[50vw] h-[35vw] rounded-full filter blur-[45px] sm:blur-[65px] opacity-85"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.6) 50%, transparent 80%)',
          }}
        />

        {/* Tactile Micro-fractal Film Grain */}
        <div className="absolute inset-0 framer-noise-texture opacity-[0.035] pointer-events-none" />
      </div>

      {/* ========================================================= */}
      {/* FOREGROUND CONTENT LAYER                                  */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* ========================================================= */}
        {/* TOP ROW: BRAND LOCKUP & NEWSLETTER BAR                    */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 sm:pb-10">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-stone-950 text-white flex items-center justify-center shrink-0 shadow-md">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-white"
              >
                <path d="M4 18h4" />
                <path d="M4 14h8" />
                <path d="M4 10h12" />
                <path d="M4 6h16" />
              </svg>
            </div>
            <ScrollHeading delay={0.08} className="text-2xl sm:text-3xl lg:text-5xl font-manrope font-bold text-stone-900 tracking-tight leading-tight">
              Elevate your career with <span className="text-gradient-accent">ASET</span>
            </ScrollHeading>
          </div>

          {/* Newsletter Input */}
          <ScrollAction delay={0.16} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <form onSubmit={handleSubscribe} className="flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full sm:w-64 md:w-72 px-4 py-2.5 rounded-full bg-white/95 border border-stone-300 text-stone-900 text-xs sm:text-sm placeholder:text-stone-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-sans"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-full bg-stone-950 hover:bg-stone-800 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-md hover:scale-102 active:scale-98 cursor-pointer shrink-0 flex items-center gap-1.5"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <span>Subscribe</span>
                )}
              </button>
            </form>
          </ScrollAction>
        </div>

        {/* Divider 1 */}
        <div className="w-full h-px bg-stone-900/12 mb-8 sm:mb-10" />

        {/* ========================================================= */}
        {/* MAIN FOOTER CONTENT MATCHING USER IMAGE EXACTLY:          */}
        {/* 1. Left: Logo, Description & "Let's talk ↗" button        */}
        {/* 2. EXPLORE: About, Admission, Student Life, etc.          */}
        {/* 3. DEPARTMENTS: Aviation, Logistics, Fire Safety, etc.    */}
        {/* 4. CONNECT: Social media links & contact email            */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-8 sm:pb-12">
          {/* ------------------------------------------------------- */}
          {/* Brand Info & Call To Action (Col span 5 on desktop)     */}
          {/* ------------------------------------------------------- */}
          <div className="md:col-span-12 lg:col-span-5 space-y-5">
            {/* Logo + ASET Brand Name */}
            <div className="flex items-center gap-3">
              <img
                src={asetLogo}
                alt="ASET College Crest Emblem"
                className="h-10 sm:h-11 w-auto object-contain drop-shadow-xs"
              />
              <span className="font-serif-display font-extrabold text-2xl sm:text-3xl tracking-tight text-stone-900">
                ASET
              </span>
            </div>

            {/* Exact Content Description from Image */}
            <ScrollParagraph delay={0.16} className="text-xs sm:text-sm text-stone-700 max-w-md leading-relaxed font-sans">
              ASET College offers career-focused programmes in Aviation, Logistics &amp; Shipping, Fire &amp; Industrial Safety, Management Studies, Commerce and Hotel Management, with practical training, industry exposure and placement support, at campuses in Chennai and Coimbatore.
            </ScrollParagraph>

            {/* "Let's talk ↗" Red Pill Button */}
            <div className="pt-1">
              <button
                onClick={() => {
                  onOpenAdmissions();
                  scrollTo('#contact');
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md shadow-red-600/25 hover:shadow-lg hover:shadow-red-600/35 hover:scale-103 active:scale-97 transition-all cursor-pointer"
              >
                <span>Let&apos;s talk</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.4]" />
              </button>
            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* Column 2: EXPLORE (Col span 2-3)                        */}
          {/* ------------------------------------------------------- */}
          <div className="col-span-1 md:col-span-4 lg:col-span-2 space-y-3.5">
            <h3 className="text-xs sm:text-[13px] font-bold text-[#dc2626] font-inter uppercase tracking-wider">
              EXPLORE
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 font-sans">
              <li>
                <button
                  onClick={() => scrollTo('#about')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  About ASET
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAdmissions}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left font-medium"
                >
                  Admission
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#spotlight')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Student Life
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#placements')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Placement
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#blogs')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Blogs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#about')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#about')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Journal
                </button>
              </li>
            </ul>
          </div>

          {/* ------------------------------------------------------- */}
          {/* Column 3: DEPARTMENTS (Col span 3)                      */}
          {/* ------------------------------------------------------- */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3 space-y-3.5">
            <h3 className="text-xs sm:text-[13px] font-bold text-[#dc2626] font-inter uppercase tracking-wider">
              DEPARTMENTS
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 font-sans">
              <li>
                <button
                  onClick={() => scrollTo('#departments')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Aviation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#departments')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Logistics &amp; Shipping
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#departments')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Fire &amp; Industrial Safety
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#departments')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Management Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#departments')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  School of Commerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#departments')}
                  className="hover:text-stone-950 hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Hotel Management
                </button>
              </li>
            </ul>
          </div>

          {/* ------------------------------------------------------- */}
          {/* Column 4: CONNECT (Col span 2)                          */}
          {/* ------------------------------------------------------- */}
          <div className="col-span-1 md:col-span-4 lg:col-span-2 space-y-3.5">
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
                  className="text-stone-900 font-semibold hover:text-blue-600 transition-colors break-all inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span>contact@asetsafety.ac.in</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider 2 */}
        <div className="w-full h-px bg-stone-900/12 my-6 sm:my-8" />

        {/* ========================================================= */}
        {/* SUB-FOOTER: COPYRIGHT & LEGAL ATTRIBUTION                 */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-2 text-xs sm:text-[13px] text-stone-700 font-sans">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 sm:gap-x-6 gap-y-2">
            <span>
              © {new Date().getFullYear()} ASET College of Science &amp; Technology. All rights reserved.
            </span>
            <span className="text-stone-500 font-medium">
              Academically supported by Alagappa University · Chennai &amp; Coimbatore
            </span>
          </div>

          <div className="flex items-center gap-3.5 text-stone-900">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-stone-950/10 hover:text-blue-600 transition-all hover:scale-110"
            >
              <Facebook className="w-4 h-4 fill-current" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-stone-950/10 hover:text-rose-600 transition-all hover:scale-110"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Twitter"
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-stone-950/10 hover:text-stone-950 transition-all hover:scale-110"
            >
              <Twitter className="w-4 h-4 fill-current" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-stone-950/10 hover:text-blue-700 transition-all hover:scale-110"
            >
              <Linkedin className="w-4 h-4 fill-current" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-stone-950/10 hover:text-red-600 transition-all hover:scale-110"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* AEROPLANE RUNWAY LANDING SCENE WITH SOLID CLOUDS          */}
      {/* Small commercial jet soaring down from the sky through   */}
      {/* solid puffy clouds, flaring and landing on the runway    */}
      {/* with tire smoke puff and smooth deceleration rollout     */}
      {/* 100% responsive on all mobile, tablet and desktop devices */}
      {/* ========================================================= */}
      <div className="relative w-full h-36 sm:h-44 md:h-52 lg:h-56 overflow-hidden mt-6 sm:mt-8 select-none pointer-events-none">
        {/* Soft Sky Horizon Ambient Gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-stone-900/10 via-transparent to-transparent pointer-events-none"
        />

        {/* ------------------------------------------------------- */}
        {/* SOLID CLOUDS IN THE SKY (Crisp Opaque White Silhouettes) */}
        {/* ------------------------------------------------------- */}
        {/* Cloud 1: High Left (Entry Corridor) */}
        <div className="absolute top-2 sm:top-3 left-[3%] sm:left-[6%] w-20 sm:w-28 md:w-36 animate-footer-cloud-1 z-10 pointer-events-none">
          <svg viewBox="0 0 140 70" fill="none" className="w-full h-auto">
            <path
              d="M25 58 C14 58 5 49 5 38 C5 29 11 21 20 19 C24 8 35 1 47 1 C58 1 67 7 71 16 C76 12 83 10 90 10 C103 10 114 19 116 31 C125 31 133 39 133 48 C133 58 125 58 116 58 Z"
              fill="#ffffff"
            />
            <path
              d="M25 58 C14 58 5 49 5 38 C7 42 12 45 18 45 C28 45 36 38 38 28 C42 35 50 40 60 40 C72 40 82 33 85 22 C92 27 101 28 108 34 C112 37 114 43 116 48 C122 48 128 52 131 56 C126 58 120 58 116 58 Z"
              fill="#e2e8f0"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Cloud 2: Mid-High Left (Descent Path) */}
        <div className="absolute top-7 sm:top-9 left-[19%] sm:left-[23%] w-16 sm:w-24 md:w-30 animate-footer-cloud-2 z-5 pointer-events-none">
          <svg viewBox="0 0 160 65" fill="none" className="w-full h-auto">
            <path
              d="M30 55 C18 55 8 46 8 35 C8 26 14 19 23 17 C27 8 37 2 48 2 C58 2 67 7 71 15 C76 11 84 9 92 9 C104 9 115 17 118 28 C123 26 129 25 135 25 C147 25 156 34 156 45 C156 55 147 55 138 55 Z"
              fill="#ffffff"
            />
            <path
              d="M30 55 C18 55 8 46 8 35 C10 40 16 44 22 44 C32 44 40 37 43 27 C48 34 56 38 66 38 C77 38 86 32 90 22 C97 27 106 28 113 33 C119 36 123 42 125 47 C130 47 136 50 139 54 C134 55 128 55 124 55 Z"
              fill="#e2e8f0"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Cloud 3: High Center-Right */}
        <div className="absolute top-1 sm:top-2 left-[50%] sm:left-[54%] w-24 sm:w-32 md:w-44 animate-footer-cloud-3 z-10 pointer-events-none">
          <svg viewBox="0 0 140 70" fill="none" className="w-full h-auto">
            <path
              d="M25 58 C14 58 5 49 5 38 C5 29 11 21 20 19 C24 8 35 1 47 1 C58 1 67 7 71 16 C76 12 83 10 90 10 C103 10 114 19 116 31 C125 31 133 39 133 48 C133 58 125 58 116 58 Z"
              fill="#ffffff"
            />
            <path
              d="M25 58 C14 58 5 49 5 38 C7 42 12 45 18 45 C28 45 36 38 38 28 C42 35 50 40 60 40 C72 40 82 33 85 22 C92 27 101 28 108 34 C112 37 114 43 116 48 C122 48 128 52 131 56 C126 58 120 58 116 58 Z"
              fill="#e2e8f0"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Cloud 4: Upper Far-Right */}
        <div className="absolute top-4 sm:top-5 right-[4%] sm:right-[7%] w-20 sm:w-28 md:w-36 animate-footer-cloud-1 z-10 pointer-events-none">
          <svg viewBox="0 0 160 65" fill="none" className="w-full h-auto">
            <path
              d="M30 55 C18 55 8 46 8 35 C8 26 14 19 23 17 C27 8 37 2 48 2 C58 2 67 7 71 15 C76 11 84 9 92 9 C104 9 115 17 118 28 C123 26 129 25 135 25 C147 25 156 34 156 45 C156 55 147 55 138 55 Z"
              fill="#ffffff"
            />
            <path
              d="M30 55 C18 55 8 46 8 35 C10 40 16 44 22 44 C32 44 40 37 43 27 C48 34 56 38 66 38 C77 38 86 32 90 22 C97 27 106 28 113 33 C119 36 123 42 125 47 C130 47 136 50 139 54 C134 55 128 55 124 55 Z"
              fill="#e2e8f0"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Cloud 5: Low-Floating Fluff near right horizon */}
        <div className="absolute top-14 sm:top-18 right-[24%] sm:right-[28%] w-14 sm:w-20 md:w-26 animate-footer-cloud-2 z-5 pointer-events-none">
          <svg viewBox="0 0 140 70" fill="none" className="w-full h-auto">
            <path
              d="M25 58 C14 58 5 49 5 38 C5 29 11 21 20 19 C24 8 35 1 47 1 C58 1 67 7 71 16 C76 12 83 10 90 10 C103 10 114 19 116 31 C125 31 133 39 133 48 C133 58 125 58 116 58 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* ------------------------------------------------------- */}
        {/* SOLID COMMERCIAL AEROPLANE FLYING & LANDING IN RUNWAY   */}
        {/* Smooth, continuous, zero-lag 60-120fps hardware-accelerated */}
        {/* Clean solid image only, zero shadow, responsive for all devices */}
        {/* ------------------------------------------------------- */}
        <div
          className="absolute bottom-[11px] sm:bottom-[14px] md:bottom-[17px] lg:bottom-[20px] left-0 pointer-events-none z-20 animate-footer-plane-landing will-change-transform"
          style={{ contain: 'layout style' }}
        >
          {/* Solid Aeroplane Cutout Graphic in a Small Size - Pure Solid Monochrome, Zero Shadows or Artifacts */}
          <img
            src={asetAeroplane}
            alt="Solid Aeroplane Landing on Runway"
            className="w-12 sm:w-15 md:w-18 lg:w-22 h-auto object-contain select-none grayscale contrast-110 pointer-events-none"
          />
        </div>

        {/* ------------------------------------------------------- */}
        {/* SOLID AIRPORT RUNWAY INFRASTRUCTURE                     */}
        {/* Solid dark asphalt strip with solid crisp white markings*/}
        {/* Pure solid monochrome: zero colors, no LEDs, no grass   */}
        {/* ------------------------------------------------------- */}
        <div className="absolute bottom-0 inset-x-0 w-full z-10 pointer-events-none">
          {/* Main Solid Asphalt Strip */}
          <div className="relative h-10 sm:h-12 md:h-14 lg:h-16 bg-[#18181b] flex items-center overflow-hidden border-t-2 border-b-2 border-white/20 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] px-2 sm:px-6">
            {/* Solid White Threshold Piano Keys (Runway Entry) */}
            <div className="flex items-center gap-1 sm:gap-1.5 pl-2 sm:pl-6 shrink-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`key-${i}`}
                  className="w-1 sm:w-1.5 h-5 sm:h-7 bg-white rounded-xs"
                />
              ))}
            </div>

            {/* Solid White Runway Designation Stencil */}
            <div className="pl-2 sm:pl-4 pr-3 shrink-0">
              <span className="font-mono font-black text-[11px] sm:text-xs text-white tracking-widest select-none">
                09L
              </span>
            </div>

            {/* Solid White Touchdown Zone Aiming Markers */}
            <div className="flex flex-col gap-1.5 px-3 sm:px-6 shrink-0">
              <div className="w-5 sm:w-8 h-1 sm:h-1.5 bg-white rounded-xs" />
              <div className="w-5 sm:w-8 h-1 sm:h-1.5 bg-white rounded-xs" />
            </div>

            {/* Continuous Solid White Dashed Runway Centerline */}
            <div className="flex-1 flex items-center overflow-hidden px-2">
              <div className="w-full h-0.5 border-b-2 border-dashed border-white/90" />
            </div>

            {/* Solid White Touchdown Zone Markers (Right Side) */}
            <div className="flex flex-col gap-1.5 px-3 sm:px-6 shrink-0">
              <div className="w-5 sm:w-8 h-1 sm:h-1.5 bg-white rounded-xs" />
              <div className="w-5 sm:w-8 h-1 sm:h-1.5 bg-white rounded-xs" />
            </div>

            {/* Solid White Threshold Piano Keys (Runway Exit) */}
            <div className="flex items-center gap-1 sm:gap-1.5 pr-2 sm:pr-6 shrink-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`key-exit-${i}`}
                  className="w-1 sm:w-1.5 h-5 sm:h-7 bg-white rounded-xs"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
