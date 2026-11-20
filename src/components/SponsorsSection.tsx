import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2, ShieldCheck, Orbit, X, Briefcase, Handshake } from 'lucide-react';
import {
  ScrollHeading,
  ScrollParagraph,
  ScrollEyebrow,
} from './ScrollTypography';

// =========================================================================
// CENTRAL HUB ASSET
// =========================================================================
import asetLogo from '../assets/images/aset-logo.png';
import asetCrestRound from '../assets/images/aset-crest-round.png';

// =========================================================================
// OFFICIAL PARTNER LOGO IMPORTS (17 PARTNERS)
// =========================================================================
import aaiLogo from '../assets/images/partners/aai_clean.png';
import aasscLogo from '../assets/images/partners/aassc.png';
import lscLogo from '../assets/images/partners/lsc.png';
import hsuLogo from '../assets/images/partners/hsu_clean.png';
import shinawatraLogo from '../assets/images/partners/shinawatra.png';
import msuLogo from '../assets/images/partners/msu.png';
import intiLogo from '../assets/images/partners/inti_clean.png';
import hasanuddinLogo from '../assets/images/partners/hasanuddin.png';
import muscatLogo from '../assets/images/partners/muscat.avif';

import naturalsLogo from '../assets/images/partners/naturals.webp';
import inttrvuLogo from '../assets/images/partners/inttrvu.webp';
import sasLogo from '../assets/images/partners/sas.png';
import kpmgLogo from '../assets/images/partners/kpmg.webp';
import arrivoLogo from '../assets/images/partners/arrivo_clean.png';
import campusworldLogo from '../assets/images/partners/campusworld.png';
import tharaviationLogo from '../assets/images/partners/tharaviation.png';
import crestShieldLogo from '../assets/images/partners/crest-shield.png';

interface OrbitPartner {
  id: string;
  name: string;
  logo: string;
  alt: string;
  category: string;
  ring: number;
  angle: number; // Angle in degrees across full 360° circle (0 = top apex / 12 o'clock)
}

export const SponsorsSection: React.FC = () => {
  const [activePartner, setActivePartner] = useState<OrbitPartner | null>(null);

  // =========================================================================
  // 4 CONCENTRIC FULL 360° ORBITAL RINGS DATA
  // Uniform planetary distribution across the entire 360° circumference
  // =========================================================================

  // Ring 1 (Inner Track - Radius var(--orbit-r1)): Statutory Civil Aviation & Logistics Bodies
  const ring1Partners: OrbitPartner[] = [
    {
      id: 'aai',
      name: 'Airports Authority of India (AAI)',
      logo: aaiLogo,
      alt: 'Airports Authority of India',
      category: 'Statutory Civil Aviation Body',
      ring: 1,
      angle: 0, // Top apex (12 o'clock)
    },
    {
      id: 'lsc',
      name: 'Logistics Skill Council (LSC)',
      logo: lscLogo,
      alt: 'Logistics Skill Council',
      category: 'National Supply Chain & Logistics Council',
      ring: 1,
      angle: 120, // 4 o'clock
    },
    {
      id: 'aassc',
      name: 'Aerospace & Aviation Sector Skill Council',
      logo: aasscLogo,
      alt: 'AASSC Aerospace & Aviation Council',
      category: 'MoCA, HAL, BCAS & NSDC Promoted',
      ring: 1,
      angle: 240, // 8 o'clock
    },
  ];

  // Ring 2 (Mid-Inner Track - Radius var(--orbit-r2)): Global Corporate, Tech & Health Leaders
  const ring2Partners: OrbitPartner[] = [
    {
      id: 'kpmg',
      name: 'KPMG',
      logo: kpmgLogo,
      alt: 'KPMG Global Services',
      category: 'Big 4 Professional Advisory & Consulting',
      ring: 2,
      angle: 45,
    },
    {
      id: 'sas',
      name: 'SAS Institute',
      logo: sasLogo,
      alt: 'SAS Analytics & Technology',
      category: 'Global Analytics & AI Software',
      ring: 2,
      angle: 135,
    },
    {
      id: 'hsu',
      name: 'Health Sciences University (HSU)',
      logo: hsuLogo,
      alt: 'Health Sciences University UK',
      category: 'Specialist Health Sciences University, UK',
      ring: 2,
      angle: 225,
    },
    {
      id: 'inti',
      name: 'INTI International University',
      logo: intiLogo,
      alt: 'INTI International University & Colleges',
      category: 'International Higher Education Partner, Malaysia',
      ring: 2,
      angle: 315,
    },
  ];

  // Ring 3 (Mid-Outer Track - Radius var(--orbit-r3)): Premier International Universities & Networks
  const ring3Partners: OrbitPartner[] = [
    {
      id: 'shinawatra',
      name: 'Shinawatra University',
      logo: shinawatraLogo,
      alt: 'Shinawatra University Thailand',
      category: 'International Research University, Thailand',
      ring: 3,
      angle: 0,
    },
    {
      id: 'hasanuddin',
      name: 'Universitas Hasanuddin',
      logo: hasanuddinLogo,
      alt: 'Universitas Hasanuddin Indonesia',
      category: 'Autonomous Premier University, Indonesia',
      ring: 3,
      angle: 72,
    },
    {
      id: 'msu',
      name: 'Management & Science University (MSU)',
      logo: msuLogo,
      alt: 'Management & Science University Malaysia',
      category: 'QS-Ranked Global University, Malaysia',
      ring: 3,
      angle: 144,
    },
    {
      id: 'muscat',
      name: 'Muscat University',
      logo: muscatLogo,
      alt: 'Muscat University Sultanate of Oman',
      category: 'International University Collaboration, Oman',
      ring: 3,
      angle: 216,
    },
    {
      id: 'campusworld',
      name: 'Campus World',
      logo: campusworldLogo,
      alt: 'Campus World International',
      category: 'Global Higher Education & Admissions Network',
      ring: 3,
      angle: 288,
    },
  ];

  // Ring 4 (Outer Track - Radius var(--orbit-r4)): Enterprise, Fleet Operations & Specialized Training
  const ring4Partners: OrbitPartner[] = [
    {
      id: 'naturals',
      name: 'Naturals Lounge & Salon',
      logo: naturalsLogo,
      alt: "Naturals India's No.1 Salon",
      category: 'National Retail & Wellness Enterprise',
      ring: 4,
      angle: 36,
    },
    {
      id: 'arrivo',
      name: 'ARRIVO Edu Pvt. Ltd.',
      logo: arrivoLogo,
      alt: 'ARRIVO Edu Private Limited',
      category: 'Career Mentorship & Academic Advisory',
      ring: 4,
      angle: 108,
    },
    {
      id: 'tharaviation',
      name: 'Thar Aviation',
      logo: tharaviationLogo,
      alt: 'Thar Aviation Academy',
      category: 'Aviation Fleet Operations & Maintenance',
      ring: 4,
      angle: 180,
    },
    {
      id: 'inttrvu',
      name: 'INTTRVU Career Intelligence',
      logo: inttrvuLogo,
      alt: 'INTTRVU Global Career Platform',
      category: 'Corporate Mock Interview & Talent Readiness',
      ring: 4,
      angle: 252,
    },
    {
      id: 'crest-shield',
      name: 'Academic Excellence Crest',
      logo: crestShieldLogo,
      alt: 'Academic Excellence Shield - ज्ञानं परमं ध्येयम्',
      category: 'National Academic Foundation Partner',
      ring: 4,
      angle: 324,
    },
  ];

  return (
    <section
      id="sponsors"
      className="relative py-20 sm:py-24 lg:py-32 bg-[#faf8f5] text-stone-900 border-b border-stone-200/90 overflow-hidden select-none"
    >
      {/* ========================================================= */}
      {/* EXPANSIVE ATMOSPHERIC BACKGROUND                          */}
      {/* Multi-layered soft orange-to-crimson ambient glows        */}
      {/* ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[1500px] h-[700px] lg:h-[1000px] bg-gradient-to-r from-orange-200/22 via-rose-100/20 to-amber-100/20 blur-3xl rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-br from-orange-400/15 via-rose-400/10 to-transparent blur-3xl"
      />

      {/* ========================================================= */}
      {/* SECTION HEADER                                            */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-12 lg:mb-16 space-y-3">
        {/* Eyebrow */}
        <ScrollEyebrow delay={0.04} className="flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-orange-600">
            GLOBAL TIE-UPS &amp; ACCREDITATIONS
          </span>
        </ScrollEyebrow>

        {/* Heading */}
        <ScrollHeading delay={0.12} className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold tracking-tight text-stone-900 leading-tight">
          MOUs with{' '}
          <span className="text-gradient-title">ASET</span>
        </ScrollHeading>

        <ScrollParagraph delay={0.2} className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed pt-1">
          Empowering students with premier global academic affiliations, statutory aviation &amp; logistics skill councils, and industry recruitment networks.
        </ScrollParagraph>
      </div>

      {/* ========================================================= */}
      {/* FULL COMPLETE CIRCULAR ORBITAL SYSTEM                     */}
      {/* Wider layout with generous height, complete 360° circles  */}
      {/* Continuous rotation without pausing on hover              */}
      {/* ========================================================= */}
      <div className="group-orbit relative w-full max-w-[1550px] h-[460px] xs:h-[500px] sm:h-[660px] md:h-[820px] lg:h-[1000px] xl:h-[1160px] mx-auto overflow-visible flex items-center justify-center">
        {/* Responsive Auto-Scaling Stage Wrapper: ensures 100% viewport fit on all mobile screens without clipping or overlapping */}
        <div
          className="relative w-full h-full flex items-center justify-center pointer-events-none"
          style={{
            transform: 'scale(var(--orbit-scale, 1))',
            transformOrigin: 'center center',
          }}
        >
          {/* Soft Warm Orange-to-Rose Radial Glow Backdrop across full circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(2*var(--orbit-r4))] h-[calc(2*var(--orbit-r4))] rounded-full bg-radial from-orange-100/50 via-rose-50/25 to-transparent blur-2xl"
          />

          {/* Crosshair Astronomical Guidelines */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(2*var(--orbit-r4)+60px)] h-[1px] bg-gradient-to-r from-transparent via-purple-300/35 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[calc(2*var(--orbit-r4)+60px)] w-[1px] bg-gradient-to-b from-transparent via-purple-300/35 to-transparent"
          />

          {/* --------------------------------------------------------- */}
          {/* TRACK 4: OUTER ORBITAL RING (Full 360° Circle, CCW 88s)   */}
          {/* --------------------------------------------------------- */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full border border-purple-200/60 shadow-[0_0_20px_rgba(168,85,247,0.06)]"
            style={{
              width: 'calc(2 * var(--orbit-r4))',
              height: 'calc(2 * var(--orbit-r4))',
              left: 'calc(50% - var(--orbit-r4))',
              top: 'calc(50% - var(--orbit-r4))',
            }}
          />

          {/* Track 4 Rotating Container (Counter-Clockwise 88s, No Pause on Hover) */}
          <div
            className="absolute rounded-full animate-orbit-ring-4 pointer-events-none"
            style={{
              width: 'calc(2 * var(--orbit-r4))',
              height: 'calc(2 * var(--orbit-r4))',
              left: 'calc(50% - var(--orbit-r4))',
              top: 'calc(50% - var(--orbit-r4))',
              transformOrigin: 'center center',
            }}
          >
            {ring4Partners.map((partner) => (
              <div
                key={partner.id}
                className="absolute top-1/2 left-1/2 pointer-events-auto cursor-pointer"
                style={{
                  transform: `translate(-50%, -50%) rotate(${partner.angle}deg) translateY(calc(-1 * var(--orbit-r4))) rotate(${-partner.angle}deg)`,
                }}
                onClick={() => setActivePartner(partner)}
                title={`${partner.name} - ${partner.category}`}
              >
                <div className="animate-counter-ring-4">
                  <div className="group/badge relative w-11 h-11 sm:w-15 sm:h-15 md:w-19 md:h-19 lg:w-22 lg:h-22 xl:w-24 xl:h-24 rounded-full bg-white shadow-md hover:shadow-2xl border border-purple-200/90 hover:border-purple-600 transition-all duration-300 flex items-center justify-center p-1.5 sm:p-2 md:p-2.5 hover:scale-115">
                    <img
                      src={partner.logo}
                      alt={partner.alt}
                      className="w-auto max-h-6 sm:max-h-8 md:max-h-11 lg:max-h-13 max-w-[85%] object-contain select-none"
                      loading="lazy"
                    />
                    {/* Hover Floating Tooltip */}
                    <div className="opacity-0 group-hover/badge:opacity-100 pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-inter whitespace-nowrap shadow-xl transition-opacity duration-200 z-40 border border-stone-700">
                      {partner.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --------------------------------------------------------- */}
          {/* TRACK 3: MID-OUTER ORBITAL RING (Full 360° Circle, CW 72s)*/}
          {/* --------------------------------------------------------- */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full border border-purple-300/50 shadow-[0_0_20px_rgba(168,85,247,0.08)]"
            style={{
              width: 'calc(2 * var(--orbit-r3))',
              height: 'calc(2 * var(--orbit-r3))',
              left: 'calc(50% - var(--orbit-r3))',
              top: 'calc(50% - var(--orbit-r3))',
            }}
          />

          {/* Track 3 Rotating Container (Clockwise 72s, No Pause on Hover) */}
          <div
            className="absolute rounded-full animate-orbit-ring-3 pointer-events-none"
            style={{
              width: 'calc(2 * var(--orbit-r3))',
              height: 'calc(2 * var(--orbit-r3))',
              left: 'calc(50% - var(--orbit-r3))',
              top: 'calc(50% - var(--orbit-r3))',
              transformOrigin: 'center center',
            }}
          >
            {ring3Partners.map((partner) => (
              <div
                key={partner.id}
                className="absolute top-1/2 left-1/2 pointer-events-auto cursor-pointer"
                style={{
                  transform: `translate(-50%, -50%) rotate(${partner.angle}deg) translateY(calc(-1 * var(--orbit-r3))) rotate(${-partner.angle}deg)`,
                }}
                onClick={() => setActivePartner(partner)}
                title={`${partner.name} - ${partner.category}`}
              >
                <div className="animate-counter-ring-3">
                  <div className="group/badge relative w-11 h-11 sm:w-15 sm:h-15 md:w-19 md:h-19 lg:w-22 lg:h-22 xl:w-24 xl:h-24 rounded-full bg-white shadow-md hover:shadow-2xl border border-purple-200/90 hover:border-purple-600 transition-all duration-300 flex items-center justify-center p-1.5 sm:p-2 md:p-2.5 hover:scale-115">
                    <img
                      src={partner.logo}
                      alt={partner.alt}
                      className="w-auto max-h-6 sm:max-h-8 md:max-h-11 lg:max-h-13 max-w-[85%] object-contain select-none"
                      loading="lazy"
                    />
                    {/* Hover Floating Tooltip */}
                    <div className="opacity-0 group-hover/badge:opacity-100 pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-inter whitespace-nowrap shadow-xl transition-opacity duration-200 z-40 border border-stone-700">
                      {partner.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --------------------------------------------------------- */}
          {/* TRACK 2: MID-INNER ORBITAL RING (Full 360° Circle, CCW 58s)*/}
          {/* --------------------------------------------------------- */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full border border-purple-400/55 shadow-[0_0_20px_rgba(168,85,247,0.10)]"
            style={{
              width: 'calc(2 * var(--orbit-r2))',
              height: 'calc(2 * var(--orbit-r2))',
              left: 'calc(50% - var(--orbit-r2))',
              top: 'calc(50% - var(--orbit-r2))',
            }}
          />

          {/* Track 2 Rotating Container (Counter-Clockwise 58s, No Pause on Hover) */}
          <div
            className="absolute rounded-full animate-orbit-ring-2 pointer-events-none"
            style={{
              width: 'calc(2 * var(--orbit-r2))',
              height: 'calc(2 * var(--orbit-r2))',
              left: 'calc(50% - var(--orbit-r2))',
              top: 'calc(50% - var(--orbit-r2))',
              transformOrigin: 'center center',
            }}
          >
            {ring2Partners.map((partner) => (
              <div
                key={partner.id}
                className="absolute top-1/2 left-1/2 pointer-events-auto cursor-pointer"
                style={{
                  transform: `translate(-50%, -50%) rotate(${partner.angle}deg) translateY(calc(-1 * var(--orbit-r2))) rotate(${-partner.angle}deg)`,
                }}
                onClick={() => setActivePartner(partner)}
                title={`${partner.name} - ${partner.category}`}
              >
                <div className="animate-counter-ring-2">
                  <div className="group/badge relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-26 xl:h-26 rounded-full bg-white shadow-md hover:shadow-2xl border border-purple-300 hover:border-purple-600 transition-all duration-300 flex items-center justify-center p-1.5 sm:p-2 md:p-2.5 hover:scale-115">
                    <img
                      src={partner.logo}
                      alt={partner.alt}
                      className="w-auto max-h-7 sm:max-h-9 md:max-h-12 lg:max-h-14 max-w-[85%] object-contain select-none"
                      loading="lazy"
                    />
                    {/* Hover Floating Tooltip */}
                    <div className="opacity-0 group-hover/badge:opacity-100 pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-inter whitespace-nowrap shadow-xl transition-opacity duration-200 z-40 border border-stone-700">
                      {partner.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --------------------------------------------------------- */}
          {/* TRACK 1: INNER ORBITAL RING (Full 360° Circle, CW 48s)    */}
          {/* --------------------------------------------------------- */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full border border-purple-500/65 shadow-[0_0_22px_rgba(168,85,247,0.15)]"
            style={{
              width: 'calc(2 * var(--orbit-r1))',
              height: 'calc(2 * var(--orbit-r1))',
              left: 'calc(50% - var(--orbit-r1))',
              top: 'calc(50% - var(--orbit-r1))',
            }}
          />

          {/* Track 1 Rotating Container (Clockwise 48s, No Pause on Hover) */}
          <div
            className="absolute rounded-full animate-orbit-ring-1 pointer-events-none"
            style={{
              width: 'calc(2 * var(--orbit-r1))',
              height: 'calc(2 * var(--orbit-r1))',
              left: 'calc(50% - var(--orbit-r1))',
              top: 'calc(50% - var(--orbit-r1))',
              transformOrigin: 'center center',
            }}
          >
            {ring1Partners.map((partner) => (
              <div
                key={partner.id}
                className="absolute top-1/2 left-1/2 pointer-events-auto cursor-pointer"
                style={{
                  transform: `translate(-50%, -50%) rotate(${partner.angle}deg) translateY(calc(-1 * var(--orbit-r1))) rotate(${-partner.angle}deg)`,
                }}
                onClick={() => setActivePartner(partner)}
                title={`${partner.name} - ${partner.category}`}
              >
                <div className="animate-counter-ring-1">
                  <div className="group/badge relative w-13 h-13 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-26 lg:h-26 xl:w-28 xl:h-28 rounded-full bg-white shadow-md hover:shadow-2xl border border-purple-400 hover:border-purple-600 transition-all duration-300 flex items-center justify-center p-1.5 sm:p-2 md:p-2.5 lg:p-3 hover:scale-115">
                    <img
                      src={partner.logo}
                      alt={partner.alt}
                      className="w-auto max-h-8 sm:max-h-11 md:max-h-13 lg:max-h-15 max-w-[85%] object-contain select-none"
                      loading="lazy"
                    />
                    {/* Hover Floating Tooltip */}
                    <div className="opacity-0 group-hover/badge:opacity-100 pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-inter whitespace-nowrap shadow-xl transition-opacity duration-200 z-40 border border-stone-700">
                      {partner.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --------------------------------------------------------- */}
          {/* CENTRAL HUB: ASET COLLEGE EMBLEM (Dead-Center)            */}
          {/* Deep Royal Midnight Blue Background for maximum clarity   */}
          {/* of the golden laurel crest, ASET title & Global Partners  */}
          {/* --------------------------------------------------------- */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center pointer-events-auto">
            {/* Subtle Radar Wave Radiating Outward in Deep Blue Glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 sm:-inset-6 rounded-full bg-blue-600/25 blur-md animate-ping pointer-events-none select-none"
              style={{ animationDuration: '3.5s' }}
            />

            {/* Elevated Circular Disc for Central Hub: Deep Royal Navy with Logo & Global Network Partners inside the round */}
            <div className="relative w-24 h-24 sm:w-30 sm:h-30 md:w-36 md:h-36 lg:w-42 lg:h-42 rounded-full bg-gradient-to-br from-[#172554] via-[#0b1329] to-[#030712] shadow-[0_20px_50px_rgba(15,23,42,0.55),0_0_25px_rgba(30,58,138,0.35)] border-2 border-blue-400/60 hover:border-sky-300 transition-colors duration-300 flex flex-col items-center justify-center p-2 sm:p-2.5 md:p-3 z-20 group cursor-default">
              {/* Subtle Inner Glass Sheen */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/[0.05] to-white/[0.18] pointer-events-none"
              />
              {/* Official Circular Crest Emblem Logo */}
              <img
                src={asetCrestRound}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = '1';
                    target.src = '/aset-crest-round.png';
                  } else if (target.dataset.triedFallback === '1') {
                    target.dataset.triedFallback = '2';
                    target.src = asetLogo;
                  }
                }}
                alt="ASET College Logo"
                className="w-11 h-11 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 object-contain select-none transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_16px_rgba(255,255,255,0.4)] shrink-0"
              />
              {/* "Global Network Partners" placed directly under the logo inside the circular disc */}
              <span className="mt-1 sm:mt-1.5 text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-inter font-bold uppercase tracking-wider text-sky-200/90 text-center leading-tight select-none px-1">
                Global Network Partners
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* ACTIVE PARTNER MODAL / DRAWER (WHEN BADGE CLICKED)        */}
      {/* ========================================================= */}
      <AnimatePresence>
        {activePartner && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="fixed inset-x-4 bottom-6 sm:bottom-8 max-w-md mx-auto z-50 rounded-2xl bg-white shadow-2xl border border-purple-200 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-full bg-purple-50/80 border border-purple-200 flex items-center justify-center p-2 shrink-0">
                  <img src={activePartner.logo} alt={activePartner.alt} className="w-auto h-auto max-h-10 max-w-[85%] object-contain" />
                </div>
                <div>
                  <h4 className="font-manrope font-bold text-base text-stone-900 leading-snug">
                    {activePartner.name}
                  </h4>
                  <span className="inline-block mt-0.5 text-xs text-purple-700 font-inter font-semibold bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200/60">
                    {activePartner.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setActivePartner(null)}
                className="text-stone-400 hover:text-stone-700 transition-colors p-1 cursor-pointer"
                aria-label="Close partner details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-3 text-xs text-stone-600 font-sans leading-relaxed">
              Official institutional partner collaborating with ASET College of Science &amp; Technology and Alagappa University for world-class career placements, industry curricula, and global academic exchange.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* BOTTOM ACCREDITATION STRIP                                */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-6 border-t border-stone-200/80 flex flex-wrap items-center justify-center gap-6 text-xs font-inter text-stone-500"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Official Academic &amp; Statutory Affiliations</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
            <span>300+ Verified Corporate Placement &amp; Skill Partners</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Academically Supported by Alagappa University</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
