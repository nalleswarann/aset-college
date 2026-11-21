import React from 'react';
import { Sparkles, Compass, ShieldCheck, Award } from 'lucide-react';
import { ScrollHeading, ScrollParagraph, ScrollEyebrow, ScrollAction } from './ScrollTypography';

// =================================================================
// Authentic Student Life & Activity Images direct from asetcollege.ac.in
// =================================================================
import pilotsImg from '../assets/images/aset-life/home-adm-pilots.webp';
import cabinCrewImg from '../assets/images/aset-life/home-adm-cabin-crew.webp';
import safetyTeamImg from '../assets/images/aset-life/home-adm-safety-team.webp';
import droneLabImg from '../assets/images/aset-life/home-adm-drone-lab.webp';
import airportModelImg from '../assets/images/aset-life/home-adm-airport-model.webp';
import freshersStageImg from '../assets/images/aset-life/home-adm-freshers-stage.webp';
import graduationImg from '../assets/images/aset-life/home-adm-graduation.webp';
import iwexpoImg from '../assets/images/aset-life/home-adm-iwexpo.webp';
import laptopGroupImg from '../assets/images/aset-life/home-adm-laptop-group.webp';
import hangarImg from '../assets/images/aset-life/home-adm-hangar.webp';
import welcomeStageImg from '../assets/images/aset-life/home-adm-welcome-stage.webp';
import groomingImg from '../assets/images/aset-life/home-adm-grooming.webp';
import fireDrillImg from '../assets/images/aset-life/home-adm-fire-drill.webp';
import lotusTempleImg from '../assets/images/aset-life/home-adm-lotus-temple.webp';
import freshersQuestImg from '../assets/images/aset-life/home-adm-freshers-quest.webp';
import danceImg from '../assets/images/aset-life/home-adm-dance.webp';
import activity1Img from '../assets/images/aset-life/home-adm-1.jpg';
import activity2Img from '../assets/images/aset-life/home-adm-2.jpg';
import activity3Img from '../assets/images/aset-life/home-adm-3.jpg';
import activity4Img from '../assets/images/aset-life/home-adm-4.jpg';
import activity5Img from '../assets/images/aset-life/home-adm-5.png';
import activity6Img from '../assets/images/aset-life/home-adm-6.jpg';
import whyGroupImg from '../assets/images/aset-life/home-why-group.webp';
import portVisitImg from '../assets/images/aset-life/lg-port-visit.jpg';
import caClassImg from '../assets/images/aset-life/mg-ca-class.jpg';

interface ImageCard {
  id: string;
  image: string;
  alt: string;
  tag?: string;
}

// -----------------------------------------------------------------
// Track 1: Flight Simulators, UAV Drones, Hangar & High-Tech Labs
// -----------------------------------------------------------------
const COLUMN_1_CARDS: ImageCard[] = [
  {
    id: 'c1-1',
    image: pilotsImg,
    alt: 'ASET Aviation Cadets & Pilot Flight Training',
    tag: 'Aviation Flight School',
  },
  {
    id: 'c1-2',
    image: droneLabImg,
    alt: 'Unmanned Aerial Vehicle (UAV) & Drone Testing Lab',
    tag: 'Drone Technology',
  },
  {
    id: 'c1-3',
    image: cabinCrewImg,
    alt: 'Aviation Cabin Crew & In-Flight Service Training',
    tag: 'In-Flight Training',
  },
  {
    id: 'c1-4',
    image: hangarImg,
    alt: 'Aircraft Maintenance Hangar Practical Briefing',
    tag: 'Aircraft Hangar',
  },
  {
    id: 'c1-5',
    image: laptopGroupImg,
    alt: 'Business Analytics & Data Science Collaborative Lab',
    tag: 'Analytics Lab',
  },
  {
    id: 'c1-6',
    image: groomingImg,
    alt: 'Professional Aviation Grooming & Etiquette Workshop',
    tag: 'Grooming Masterclass',
  },
  {
    id: 'c1-7',
    image: activity1Img,
    alt: 'Interactive Seminar & Applied Research Session',
    tag: 'Campus Seminar',
  },
  {
    id: 'c1-8',
    image: activity4Img,
    alt: 'Student Peer Collaboration & Campus Discussion',
    tag: 'Peer Learning',
  },
];

// -----------------------------------------------------------------
// Track 2: Fire Drills, Safety Gear, Maritime Ports & Supply Chain
// -----------------------------------------------------------------
const COLUMN_2_CARDS: ImageCard[] = [
  {
    id: 'c2-1',
    image: safetyTeamImg,
    alt: 'Fire & Industrial Safety Drill Squad in Full PPE',
    tag: 'Safety Squad',
  },
  {
    id: 'c2-2',
    image: fireDrillImg,
    alt: 'Live Firefighting Drill & Emergency Evacuation Simulation',
    tag: 'Live Fire Drill',
  },
  {
    id: 'c2-3',
    image: whyGroupImg,
    alt: 'Student Council Leadership at ASET Flagship Campus',
    tag: 'Student Council',
  },
  {
    id: 'c2-4',
    image: portVisitImg,
    alt: 'Seaport Logistics & Maritime Container Terminal Visit',
    tag: 'Seaport Visit',
  },
  {
    id: 'c2-5',
    image: iwexpoImg,
    alt: 'India Warehousing Expo Logistics Delegation',
    tag: 'Warehousing Expo',
  },
  {
    id: 'c2-6',
    image: airportModelImg,
    alt: 'Airport Operations & Air Traffic Management Scale Lab',
    tag: 'Airport Simulation',
  },
  {
    id: 'c2-7',
    image: activity2Img,
    alt: 'Practical Field Drills & Hazard Assessment',
    tag: 'Hazard Drill',
  },
  {
    id: 'c2-8',
    image: activity5Img,
    alt: 'Specialized Industrial Equipment Demonstration',
    tag: 'Equipment Lab',
  },
];

// -----------------------------------------------------------------
// Track 3: Convocation, Cultural Fests, Stage Arts & National Tours
// -----------------------------------------------------------------
const COLUMN_3_CARDS: ImageCard[] = [
  {
    id: 'c3-1',
    image: graduationImg,
    alt: 'Annual Convocation Ceremony & Degree Conferral',
    tag: 'Convocation Day',
  },
  {
    id: 'c3-2',
    image: freshersStageImg,
    alt: 'Freshers Day Inauguration & Lamp Lighting Tradition',
    tag: 'Freshers Fest',
  },
  {
    id: 'c3-3',
    image: danceImg,
    alt: 'Annual Cultural Festival Stage Dance Performance',
    tag: 'Cultural Festival',
  },
  {
    id: 'c3-4',
    image: welcomeStageImg,
    alt: 'Campus Induction & Academic Orientation Assembly',
    tag: 'Orientation',
  },
  {
    id: 'c3-5',
    image: freshersQuestImg,
    alt: 'ASET Quest Annual Inter-College Talent Showcase',
    tag: 'ASET Quest',
  },
  {
    id: 'c3-6',
    image: lotusTempleImg,
    alt: 'National Educational & Industry Study Tour',
    tag: 'Study Tour',
  },
  {
    id: 'c3-7',
    image: caClassImg,
    alt: 'Executive Class Lecture & Case Study Analysis',
    tag: 'Case Study Lab',
  },
  {
    id: 'c3-8',
    image: activity6Img,
    alt: 'Youth Sports Meet & Outdoor Fitness Activities',
    tag: 'Campus Sports',
  },
  {
    id: 'c3-9',
    image: activity3Img,
    alt: 'Student Innovation Project Exhibition',
    tag: 'Project Showcase',
  },
];

export const LifeAtAsetSection: React.FC = () => {
  return (
    <section
      id="life-at-aset"
      className="relative w-full py-20 sm:py-24 lg:py-32 bg-[#0a0b0e] text-white font-manrope overflow-hidden select-none"
    >
      {/* Ambient background glows with signature orange & crimson tones */}
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
          {/* LEFT SIDE: Heading "Life at Aset" & Curated Narrative  */}
          {/* ======================================================= */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-center space-y-5 lg:space-y-6 z-10">
            {/* Eyebrow Label */}
            <ScrollEyebrow delay={0.04} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-orange-400">
                CAMPUS EXPERIENCE &amp; ACTIVITIES
              </span>
            </ScrollEyebrow>

            {/* Title */}
            <ScrollHeading delay={0.12} className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold tracking-tight text-white leading-tight select-none">
              Life at <br />
              <span className="text-gradient-title font-extrabold">
                Aset College
              </span>
            </ScrollHeading>

            {/* Subtitle Paragraph */}
            <ScrollParagraph delay={0.2} className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans max-w-md pt-1">
              Step inside daily student life across our Chennai and Coimbatore campuses. From pilot uniforms and cabin crew grooming to live firefighting drills, seaport visits, robotics innovation, convocation celebrations, and annual cultural fests.
            </ScrollParagraph>

            {/* Quick Badges */}
            <ScrollAction delay={0.26} className="grid grid-cols-2 gap-2.5 pt-2">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-xs text-stone-200">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium">12+ Student Clubs &amp; Fests</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-xs text-stone-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium">Live Safety &amp; Port Drills</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-xs text-stone-200">
                <Compass className="w-4 h-4 text-rose-400 shrink-0" />
                <span className="font-medium">Chennai &amp; Coimbatore</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-xs text-stone-200">
                <Award className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-medium">Study Tours &amp; Expos</span>
              </div>
            </ScrollAction>
          </div>

          {/* ======================================================= */}
          {/* RIGHT SIDE: Multi-Column Automatic Moving Image Cards   */}
          {/* Continuous non-stop infinite ticker with authentic      */}
          {/* student & activity photographs from asetcollege.ac.in   */}
          {/* ======================================================= */}
          <div
            className="lg:col-span-7 xl:col-span-8 relative h-[440px] xs:h-[480px] sm:h-[540px] md:h-[600px] lg:h-[660px] overflow-hidden"
            style={{
              maskImage:
                'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
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
                      className="relative rounded-xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] w-full shadow-lg shadow-black/60 border border-white/15 bg-stone-900 group select-none shrink-0"
                    >
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Authentic Activity Tag Pill */}
                      {card.tag && (
                        <div className="absolute top-2.5 left-2.5 z-10">
                          <span className="inline-block px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-mono font-semibold text-white/90">
                            {card.tag}
                          </span>
                        </div>
                      )}
                      {/* Subtle hover vignette & caption overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
                      className="relative rounded-xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] w-full shadow-lg shadow-black/60 border border-white/15 bg-stone-900 group select-none shrink-0"
                    >
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Authentic Activity Tag Pill */}
                      {card.tag && (
                        <div className="absolute top-2.5 left-2.5 z-10">
                          <span className="inline-block px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-mono font-semibold text-white/90">
                            {card.tag}
                          </span>
                        </div>
                      )}
                      {/* Subtle hover vignette & caption overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
                      className="relative rounded-xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] w-full shadow-lg shadow-black/60 border border-white/15 bg-stone-900 group select-none shrink-0"
                    >
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Authentic Activity Tag Pill */}
                      {card.tag && (
                        <div className="absolute top-2.5 left-2.5 z-10">
                          <span className="inline-block px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-mono font-semibold text-white/90">
                            {card.tag}
                          </span>
                        </div>
                      )}
                      {/* Subtle hover vignette & caption overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
