import React, { useState } from 'react';
import { X } from 'lucide-react';
import asetCampusImg from '../assets/images/aset-campus.webp';
import roboticsImg from '../assets/images/dept_biotech_robotics_1794469703091.jpg';
import architectureImg from '../assets/images/dept_design_architecture_1794469703164.jpg';
import businessImg from '../assets/images/dept_global_business_1794469703130.jpg';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({ isOpen, onClose }) => {
  const [selectedVantage, setSelectedVantage] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(0);

  if (!isOpen) return null;

  const vantages = [
    {
      title: 'Chennai Training Campus — Kuthambakkam',
      category: 'No: 28, Irulapalayam, Kuthambakkam, Chennai – 600124',
      image: asetCampusImg,
      description:
        'Full-fledged training campus in Chennai offering Aviation, Fire & Industrial Safety, Logistics & Shipping, Business Analytics, Commerce, and Hotel Management.',
      hotspots: [
        {
          id: 1,
          x: 24,
          y: 28,
          label: 'Admissions & Counseling Directorate',
          detail:
            'In-person eligibility verification, program guidance, and one-on-one counseling sessions with Department Heads.',
        },
        {
          id: 2,
          x: 74,
          y: 50,
          label: 'Placement & Training Cell',
          detail:
            'Pre-training assessments, customized mentoring, and evaluations across 12 placement training areas including Aptitude, GD, and Mock Interviews.',
        },
        {
          id: 3,
          x: 50,
          y: 68,
          label: 'Alagappa University Academic Pathways',
          detail:
            'Career-oriented UG, PG, Diploma, PG Diploma, and international certification programs backed by Alagappa University.',
        },
      ],
    },
    {
      title: 'Dedicated Fire & Industrial Safety Lab',
      category: 'Firefighting Tools, PPE & Emergency Rescue Gear',
      image: roboticsImg,
      description:
        'Dedicated Fire and Safety Lab training safety officers, HSE professionals, and emergency response specialists.',
      hotspots: [
        {
          id: 1,
          x: 28,
          y: 35,
          label: 'Firefighting & PPE Equipment Bay',
          detail:
            'Equipped with industrial firefighting tools, personal protective equipment (PPE), and specialized rescue gear.',
        },
        {
          id: 2,
          x: 78,
          y: 42,
          label: 'Fire Drills & CPR Training Ground',
          detail:
            'Regular practical fire drills, hazard identification simulations, and CPR emergency response exercises.',
        },
      ],
    },
    {
      title: 'Coimbatore Training Campus — Saravanampatti',
      category: 'Varathaiyangar Palayam, Saravanampatti – 641110',
      image: architectureImg,
      description:
        'Full-fledged Coimbatore training campus connecting students with regional manufacturing, aviation, hospitality, and safety industries.',
      hotspots: [
        {
          id: 1,
          x: 52,
          y: 72,
          label: 'Monthly Industrial Visit Hub',
          detail:
            'Organized field visits to airports, seaports, logistics warehouses, ISRO facilities, Global Infocity, SRF, Hatsun Agro, Welspun, and APPL Industries.',
        },
        {
          id: 2,
          x: 20,
          y: 55,
          label: 'Departmental Labs & Studios',
          detail:
            'Domain-specific practical spaces for Hospitality, Safety Engineering, and Business Analytics capstones.',
        },
      ],
    },
    {
      title: 'Aviation, Logistics & Commerce Seminar Suite',
      category: 'Industry Simulations & Capstone Labs',
      image: businessImg,
      description:
        'Classroom and simulation environment for Airline & Airport Management, Export–Import Documentation, Business Intelligence, and CA/CMA/CS/ACCA coaching.',
      hotspots: [
        {
          id: 1,
          x: 72,
          y: 44,
          label: 'Supply Chain & EXIM Documentation Lab',
          detail:
            'Operational training in export-import documentation, customs procedures, multimodal transport, and maritime logistics.',
        },
        {
          id: 2,
          x: 48,
          y: 78,
          label: 'Corporate Internship Readiness',
          detail:
            'Prepares learners for internships with DGCA, Airports Authority of India (AAI), L&T, DHL, and Maersk.',
        },
      ],
    },
  ];

  const current = vantages[selectedVantage];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div data-lenis-prevent className="relative w-full max-w-5xl bg-stone-900 text-stone-100 border border-stone-800 rounded-sm shadow-2xl flex flex-col overflow-hidden max-h-[94vh]">
        {/* Modal Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block">
                {current.category}
              </span>
              <h3 className="text-lg font-serif font-semibold text-white tracking-tight">
                {current.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-sm hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close tour"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Viewport & Interactive Hotspots */}
        <div className="relative aspect-16/9 w-full bg-stone-950 overflow-hidden">
          <img
            src={current.image}
            alt={current.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-opacity duration-500"
          />

          {/* Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-950/30 pointer-events-none" />

          {/* Interactive Hotspot Pins */}
          {current.hotspots.map((h, idx) => {
            const isActive = activeHotspot === idx;
            return (
              <button
                key={h.id}
                onClick={() => setActiveHotspot(idx)}
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
                className="group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 focus:outline-hidden"
                aria-label={`Hotspot: ${h.label}`}
              >
                <div
                  className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-transform ${
                    isActive ? 'scale-125' : 'group-hover:scale-110'
                  }`}
                >
                  <span className="absolute inset-0 rounded-full bg-amber-400 opacity-75 animate-ping" />
                  <span
                    className={`relative w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono shadow-lg border-2 ${
                      isActive
                        ? 'bg-amber-400 text-stone-950 border-white'
                        : 'bg-stone-900/90 text-amber-300 border-amber-400'
                    }`}
                  >
                    {idx + 1}
                  </span>
                </div>
              </button>
            );
          })}

          {/* Active Hotspot Info Card */}
          {activeHotspot !== null && current.hotspots[activeHotspot] && (
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md bg-stone-900/90 backdrop-blur-md border border-stone-700 p-4 rounded-xs text-xs space-y-1 animate-in fade-in slide-in-from-bottom-2 duration-150 z-30">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                  Highlight 0{activeHotspot + 1}
                </span>
                <span className="text-stone-400 text-[10px]">ASET Facility</span>
              </div>
              <h4 className="text-sm font-bold text-white font-serif font-semibold">
                {current.hotspots[activeHotspot].label}
              </h4>
              <p className="text-stone-300 leading-relaxed">
                {current.hotspots[activeHotspot].detail}
              </p>
            </div>
          )}
        </div>

        {/* Vantage Selector Strip */}
        <div className="p-4 bg-stone-950 border-t border-stone-800">
          <div className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
            Select Campus &amp; Training Facility
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {vantages.map((v, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedVantage(idx);
                  setActiveHotspot(0);
                }}
                className={`p-2.5 rounded-xs text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  selectedVantage === idx
                    ? 'border-amber-400 bg-stone-800/80 text-white'
                    : 'border-stone-800 bg-stone-900/50 text-stone-400 hover:border-stone-700 hover:text-stone-200'
                }`}
              >
                <span className="text-[10px] font-mono uppercase text-amber-400">
                  Campus 0{idx + 1}
                </span>
                <span className="text-xs font-medium font-serif font-semibold line-clamp-1">
                  {v.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
