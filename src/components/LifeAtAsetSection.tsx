import React from 'react';
import { Sparkles, Compass } from 'lucide-react';

// Campus Life Photos
import aviationStudentsImg from '../assets/images/aset-aviation-students.png';
import celebrationImg from '../assets/images/aset-graduates-celebration.jpg';
import capsImg from '../assets/images/aset-graduates-wearing-caps.jpg';
import pathwaySunsetImg from '../assets/images/aset-college-pathway-sunset.jpg';
import quadCampusImg from '../assets/images/hero_university_campus_1794469701413.jpg';
import designStudioImg from '../assets/images/dept_design_architecture_1794469703164.jpg';
import roboticsLabImg from '../assets/images/dept_biotech_robotics_1794469703091.jpg';
import businessHallImg from '../assets/images/dept_global_business_1794469703130.jpg';
import modernBuildingImg from '../assets/images/campus-building-user.jpg';
import hospitalityImg from '../assets/images/values-hotel-restaurant.jpg';
import studentDifferenceImg from '../assets/images/aset-difference-student.jpg';
import officialGroupImg from '../assets/images/aset-students-group-official.jpg';
import candidateHeroImg from '../assets/images/candidate-experience-hero.jpg';
import campusMainImg from '../assets/images/aset-campus.jpg';

interface ImageCard {
  id: string;
  image: string;
  alt: string;
}

// -----------------------------------------------------------------
// Column 1: Flight Simulators, Robotics Lab, Design Studios, Tech
// -----------------------------------------------------------------
const COLUMN_1_CARDS: ImageCard[] = [
  {
    id: 'c1-1',
    image: aviationStudentsImg,
    alt: 'DGCA Flight Simulator Lab & Aviation Cadets',
  },
  {
    id: 'c1-2',
    image: designStudioImg,
    alt: 'Creative Architecture & Design Studios',
  },
  {
    id: 'c1-3',
    image: roboticsLabImg,
    alt: 'Robotics & Industrial Drone Testing Lab',
  },
  {
    id: 'c1-4',
    image: modernBuildingImg,
    alt: 'Modern Campus Academic Infrastructure',
  },
  {
    id: 'c1-5',
    image: candidateHeroImg,
    alt: 'Collaborative Student Innovation Hub',
  },
];

// -----------------------------------------------------------------
// Column 2: Celebrations, Sunset Quad, Cap Toss, Campus Grounds
// -----------------------------------------------------------------
const COLUMN_2_CARDS: ImageCard[] = [
  {
    id: 'c2-1',
    image: celebrationImg,
    alt: 'Convocation & Graduation Celebrations',
  },
  {
    id: 'c2-2',
    image: pathwaySunsetImg,
    alt: 'Tree-Lined Campus Pathway at Sunset',
  },
  {
    id: 'c2-3',
    image: capsImg,
    alt: 'Annual Graduation Cap Toss Tradition',
  },
  {
    id: 'c2-4',
    image: quadCampusImg,
    alt: 'ASET University Campus Greens & Quad',
  },
  {
    id: 'c2-5',
    image: officialGroupImg,
    alt: 'Student Council Leadership & Cultural Fest',
  },
];

// -----------------------------------------------------------------
// Column 3: Business Conclave, Culinary Lab, Shipping & Campus Life
// -----------------------------------------------------------------
const COLUMN_3_CARDS: ImageCard[] = [
  {
    id: 'c3-1',
    image: businessHallImg,
    alt: 'Global Business Summit & Conference Hall',
  },
  {
    id: 'c3-2',
    image: hospitalityImg,
    alt: 'Commercial Culinary & Hotel Training Facility',
  },
  {
    id: 'c3-3',
    image: studentDifferenceImg,
    alt: 'Multimodal Logistics & Shipping Research',
  },
  {
    id: 'c3-4',
    image: campusMainImg,
    alt: 'ASET Flagship Campus Architecture',
  },
  {
    id: 'c3-5',
    image: aviationStudentsImg,
    alt: 'Aviation Cockpit Instruments & Training',
  },
];

export const LifeAtAsetSection: React.FC = () => {
  return (
    <section
      id="life-at-aset"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#0a0b0e] text-white font-manrope overflow-hidden select-none"
    >
      {/* Ambient background glows with signature orange & crimson hues */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-orange-600/15 via-rose-600/10 to-transparent blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 right-10 w-[450px] h-[450px] rounded-full bg-rose-600/10 blur-3xl pointer-events-none"
      />

      <div className="w-full max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ======================================================= */}
          {/* LEFT SIDE: Heading "Life at Aset" & Description        */}
          {/* ======================================================= */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-center space-y-5 lg:space-y-6 z-10">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-orange-400">
                CAMPUS EXPERIENCE
              </span>
            </div>

            {/* Standardized Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold tracking-tight text-white leading-tight select-none">
              Life at <br />
              <span className="text-gradient-title font-extrabold">
                Aset
              </span>
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans max-w-md pt-1">
              Explore the vibrant daily spirit across ASET College campuses. Experience advanced aviation simulators, robotics labs, design studios, cultural festivals, and life across Chennai and Coimbatore.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-stone-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>12+ Active Student Clubs</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-stone-200">
                <Compass className="w-3.5 h-3.5 text-rose-400" />
                <span>Dual Flagship Campuses</span>
              </span>
            </div>
          </div>

          {/* ======================================================= */}
          {/* RIGHT SIDE: Multi-Column Automatic Moving Image Cards   */}
          {/* Continuous non-stop infinite ticker (does NOT stop on   */}
          {/* mouse hover) with reduced border radius & pure images   */}
          {/* ======================================================= */}
          <div
            className="lg:col-span-7 xl:col-span-8 relative h-[440px] sm:h-[520px] md:h-[580px] lg:h-[640px] overflow-hidden"
            style={{
              maskImage:
                'linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)',
            }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 h-full">
              
              {/* --------------------------------------------------- */}
              {/* COLUMN 1: Upward Infinite Moving Track              */}
              {/* --------------------------------------------------- */}
              <div className="overflow-hidden h-full">
                <div className="animate-marquee-vertical-up flex flex-col gap-3 sm:gap-4">
                  {[...COLUMN_1_CARDS, ...COLUMN_1_CARDS].map((card, idx) => (
                    <div
                      key={`col1-${card.id}-${idx}`}
                      className="relative rounded-lg sm:rounded-xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] w-full shadow-md shadow-black/50 border border-white/10 bg-stone-900 group select-none shrink-0"
                    >
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Subtle hover vignette & caption overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <span className="text-[11px] sm:text-xs font-semibold text-white/95 drop-shadow truncate block">
                          {card.alt}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* --------------------------------------------------- */}
              {/* COLUMN 2: Downward Infinite Moving Track            */}
              {/* --------------------------------------------------- */}
              <div className="overflow-hidden h-full">
                <div className="animate-marquee-vertical-down flex flex-col gap-3 sm:gap-4">
                  {[...COLUMN_2_CARDS, ...COLUMN_2_CARDS].map((card, idx) => (
                    <div
                      key={`col2-${card.id}-${idx}`}
                      className="relative rounded-lg sm:rounded-xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] w-full shadow-md shadow-black/50 border border-white/10 bg-stone-900 group select-none shrink-0"
                    >
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Subtle hover vignette & caption overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <span className="text-[11px] sm:text-xs font-semibold text-white/95 drop-shadow truncate block">
                          {card.alt}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* --------------------------------------------------- */}
              {/* COLUMN 3: Upward Infinite Moving Track (Desktop)    */}
              {/* --------------------------------------------------- */}
              <div className="overflow-hidden h-full hidden lg:block">
                <div className="animate-marquee-vertical-up-slow flex flex-col gap-3 sm:gap-4">
                  {[...COLUMN_3_CARDS, ...COLUMN_3_CARDS].map((card, idx) => (
                    <div
                      key={`col3-${card.id}-${idx}`}
                      className="relative rounded-lg sm:rounded-xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] w-full shadow-md shadow-black/50 border border-white/10 bg-stone-900 group select-none shrink-0"
                    >
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Subtle hover vignette & caption overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <span className="text-[11px] sm:text-xs font-semibold text-white/95 drop-shadow truncate block">
                          {card.alt}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
