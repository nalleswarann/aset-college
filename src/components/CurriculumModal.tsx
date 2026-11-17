import React from 'react';
import { Department } from '../types/university';
import { PROSPECTUS_PDF_URL } from '../data/universityData';
import { X, Download, Check, GraduationCap } from 'lucide-react';

interface CurriculumModalProps {
  department: Department | null;
  onClose: () => void;
  onApply: (deptName: string) => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({
  department,
  onClose,
  onApply,
}) => {
  const [downloadSuccess, setDownloadSuccess] = React.useState(false);

  if (!department) return null;

  const handleDownloadProspectus = () => {
    const link = document.createElement('a');
    link.href = PROSPECTUS_PDF_URL;
    link.download = 'ASET-College-Academic-Prospectus-2026-2027.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 3000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl bg-white border border-stone-200 rounded-sm shadow-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200 bg-stone-50">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-900 font-semibold">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ASET Academic Prospectus · 2026–2027</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              {department.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-900 rounded-sm hover:bg-stone-200/60 transition-colors cursor-pointer"
            aria-label="Close program modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Duration & Entry Eligibility */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-stone-100/60 border border-stone-200 rounded-xs text-xs font-mono">
            <div>
              <span className="text-stone-500 block uppercase">Typical Duration</span>
              <strong className="text-stone-900 text-sm font-serif">
                {department.durationSummary}
              </strong>
            </div>
            <div>
              <span className="text-stone-500 block uppercase">Entry Eligibility</span>
              <strong className="text-stone-900 text-sm font-serif">
                {department.eligibilitySummary}
              </strong>
            </div>
          </div>

          {/* Department Overview */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase font-mono tracking-wider text-stone-900">
              Department Overview &amp; Industry Alignment
            </h4>
            <p className="text-sm text-stone-700 leading-relaxed">
              {department.description}
            </p>
            <p className="text-xs text-amber-900 bg-amber-50/70 p-3 border-l-2 border-amber-800 rounded-r-xs">
              {department.highlightNote}
            </p>
          </div>

          {/* Programs Offered */}
          <div>
            <h4 className="text-sm font-bold uppercase font-mono tracking-wider text-stone-900 mb-2">
              Programs Offered
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              {department.degrees.map((deg, idx) => (
                <li
                  key={idx}
                  className="p-2.5 bg-stone-50 border border-stone-200 rounded-xs flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-800 shrink-0 mt-1.5" />
                  <span>{deg}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Modules & Focus Areas */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold uppercase font-mono tracking-wider text-stone-900">
                Training Modules &amp; Curriculum Pathways
              </h4>
              <span className="text-xs font-mono text-stone-500">
                Supported by Alagappa University
              </span>
            </div>

            <div className="space-y-3">
              {department.courses.map((course) => (
                <div
                  key={course.code}
                  className="p-4 bg-stone-50 border border-stone-200 rounded-xs space-y-1.5"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-mono font-bold text-amber-900">
                      {course.code}
                    </span>
                    <span className="text-xs font-mono text-stone-500 font-medium">
                      {course.credits}
                    </span>
                  </div>
                  <h5 className="text-base font-serif font-bold text-stone-900">
                    {course.title}
                  </h5>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Focus Items & Practical Exposure */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-stone-900 mb-2">
                {department.focusLabel}
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-700">
                {department.focusItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-2 bg-white border border-stone-200 rounded-xs flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-800 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-stone-900 mb-2">
                Practical Labs &amp; Exposure
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-700">
                {department.keyFacilities.map((fac, idx) => (
                  <li
                    key={idx}
                    className="p-2 bg-white border border-stone-200 rounded-xs flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-800 shrink-0" />
                    <span>{fac}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 border-t border-stone-200 bg-stone-50 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleDownloadProspectus}
            className="px-4 py-2 border border-stone-300 hover:border-stone-900 text-stone-800 text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center gap-2 cursor-pointer bg-white"
          >
            {downloadSuccess ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span className="text-emerald-700">Prospectus Downloaded</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Download Prospectus PDF</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-stone-600 hover:text-stone-900 text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onApply(department.name);
              }}
              className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-50 text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors cursor-pointer shadow-xs"
            >
              Apply for This Department
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
