import React from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  MapPin,
  Plane,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Users,
} from 'lucide-react';
import asetCampusMainImg from '../assets/images/aset-campus-main-building.webp';
import asetAviationStudents from '../assets/images/aset-aviation-students.png';
import asetGraduates from '../assets/images/aset-graduates-celebration.jpg';
import campusSunsetImg from '../assets/images/aset-college-pathway-sunset.jpg';
import { ScrollHeading, ScrollParagraph, ScrollEyebrow } from './ScrollTypography';

interface StudentSpotlightSectionProps {
  onOpenAdmissions: () => void;
  onExploreDepartments: () => void;
}

export const StudentSpotlightSection: React.FC<StudentSpotlightSectionProps> = ({
  onOpenAdmissions,
  onExploreDepartments,
}) => {
  return (
    <section id="spotlight" className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#faf8f5] text-stone-900 font-manrope select-none border-b border-stone-200/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Apple-Style Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14 pb-8 sm:pb-10 border-b border-stone-200">
          <div className="space-y-3 max-w-2xl">
            <ScrollEyebrow delay={0.04} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-orange-800 text-xs font-mono font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
              <span>Two Flagship Destinations</span>
            </ScrollEyebrow>

            <ScrollHeading delay={0.1} className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-extrabold tracking-tight text-stone-950 leading-tight">
              World-Class Infrastructure.{' '}
              <span className="font-serif italic font-normal text-gradient-title block sm:inline">
                Chennai &amp; Coimbatore.
              </span>
            </ScrollHeading>
          </div>

          <ScrollParagraph delay={0.16} className="text-sm sm:text-base text-stone-600 max-w-md lg:max-w-lg leading-relaxed font-sans self-start md:self-end">
            Explore dedicated DGCA flight simulator bays, industrial firefighting rigs, and smart maritime logistics laboratories across Tamil Nadu.
          </ScrollParagraph>
        </div>

        {/* Apple-Style Bento Grid Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Bento Tile 1 (Large 7 Cols): Authentic ASET College Campus Building */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm p-6 sm:p-8 flex flex-col justify-between overflow-hidden group hover:shadow-md transition-all">
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/60">
                  Campus 01 &bull; Chennai
                </span>
                <span className="text-xs font-mono text-stone-500 font-semibold">Kuthambakkam</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                ASET Chennai Flagship Campus
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                A sprawling campus featuring three-story academic blocks, DGCA-compliant flight simulator laboratories, industrial safety obstacle fields, and digital conference auditoriums.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-stone-900 shadow-inner">
              <img
                src={asetCampusMainImg}
                alt="ASET College Chennai Flagship Campus"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  Kuthambakkam, Chennai
                </span>
                <span className="text-amber-300 font-semibold">10,000+ Students</span>
              </div>
            </div>
          </div>

          {/* Bento Tile 2 (5 Cols): Coimbatore Campus & Simulator Training */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-stone-200/90 shadow-sm p-6 sm:p-8 flex flex-col justify-between overflow-hidden group hover:shadow-md transition-all">
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/60">
                  Campus 02 &bull; Coimbatore
                </span>
                <span className="text-xs font-mono text-stone-500 font-semibold">Saravanampatti</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Coimbatore Academic Hub
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Located in the educational heart of Coimbatore, housing dedicated aviation training setups, safety engineering labs, and corporate placement cells.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-stone-900 shadow-inner">
              <img
                src={campusSunsetImg}
                alt="ASET College Coimbatore Campus Pathway"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  Saravanampatti, Coimbatore
                </span>
                <span className="text-amber-300 font-semibold">Alagappa University</span>
              </div>
            </div>
          </div>

          {/* Bento Row 2: 3 Clean Micro-Tiles */}
          {/* Tile 3: Practical Aviation & Safety Simulation */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-3">
                <Plane className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-lg font-bold text-stone-900 tracking-tight">
                DGCA Flight Simulation Bays
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Real cockpit avionics, instrument training, and ground emergency handling for commercial pilots and airport managers.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-orange-600 font-semibold">
              <span>Full Practical Training</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Tile 4: Industrial Safety Drill Rig */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-lg font-bold text-stone-900 tracking-tight">
                Live Industrial Safety Drills
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Smoke chambers, hazardous chemical leak containment drills, and scaffolding safety courses compliant with NEBOSH norms.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-rose-600 font-semibold">
              <span>ISO 9001:2015 Quality</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Tile 5: 100% Placement & Corporate Tie-Ups */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-lg font-bold text-stone-900 tracking-tight">
                100% Campus Placement Cell
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Annual recruitment drives with Airports Authority of India, DHL Supply Chain, SpiceJet, and global shipping lines.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-amber-700 font-semibold">
              <span>500+ Hiring Partners</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
