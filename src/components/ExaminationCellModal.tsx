import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  GraduationCap,
  Calendar,
  FileCheck2,
  ExternalLink,
  ShieldAlert,
  Clock,
  Phone,
  Mail,
  CheckCircle2,
  Building2,
  BookOpen,
} from 'lucide-react';

interface ExaminationCellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExaminationCellModal: React.FC<ExaminationCellModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 font-serif font-semibold">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-stone-200 z-10"
          >
            {/* Header */}
            <div className="relative p-6 sm:p-8 bg-[#0c0d0f] text-white overflow-hidden shrink-0">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-red-600/20 via-orange-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start justify-between gap-4 relative z-10">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/25 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Academic Evaluation &amp; Governance</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Office of the <span className="text-gradient-title font-extrabold">Controller of Examinations</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-300">
                    ASET College of Science &amp; Technology · Affiliated to Alagappa University
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 text-stone-300 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer shrink-0"
                  aria-label="Close Examination Cell Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-stone-800 text-sm">
              {/* Affiliation Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3 sm:gap-4">
                <Building2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                    Alagappa University Affiliation &amp; DGCA Regulatory Standards
                  </h3>
                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                    End-semester examinations, degree certificate issuances, and official grade cards are conferred directly under the authority of Alagappa University (State University Accredited A+ by NAAC). Aviation and Pilot Training certifications follow DGCA norms.
                  </p>
                </div>
              </div>

              {/* 2-Column Key Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Examination Calendar */}
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
                  <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>Semester Examination Cycles</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Odd Semester (Sem 1, 3, 5):</strong> Conducted in November / December</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Even Semester (Sem 2, 4, 6):</strong> Conducted in April / May</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Supplementary Exams:</strong> Conducted alongside regular semester slots</span>
                    </li>
                  </ul>
                </div>

                {/* Evaluation Scheme */}
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
                  <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                    <FileCheck2 className="w-4 h-4" />
                    <span>Evaluation Scheme &amp; Attendance</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Continuous Internal Assessment (CIA):</strong> 25% weightage (tests &amp; assignments)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>End-Semester University Exam:</strong> 75% written &amp; practical component</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong>Minimum Attendance:</strong> 75% mandatory for hall ticket generation</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons for Students */}
              <div className="p-5 rounded-2xl bg-stone-900 text-white space-y-4">
                <div className="flex items-center gap-2 font-bold text-stone-200">
                  <BookOpen className="w-4 h-4 text-red-400" />
                  <span>Student Examination Portals</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://asetcollege.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-xs sm:text-sm transition-all group"
                  >
                    <span>ASET Student Portal &amp; Hall Tickets</span>
                    <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://alagappauniversity.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-xs sm:text-sm transition-all group"
                  >
                    <span>Alagappa University CoE Portal</span>
                    <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>

              {/* Helpdesk Contacts */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-stone-600 border-t border-stone-200">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-stone-400" />
                  <span>Controller Desk: 044 2681 0078 / +91 91594 99973</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-stone-400" />
                  <span>Email: <a href="mailto:coe@asetcollege.ac.in" className="text-red-700 hover:underline font-semibold">coe@asetcollege.ac.in</a></span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex items-center justify-end shrink-0">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-xs"
              >
                Close Examination Cell
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
