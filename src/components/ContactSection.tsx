import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DEPARTMENTS } from '../data/universityData';
import { Mail, Phone, MapPin, Send, CheckCircle2, ClipboardCheck } from 'lucide-react';
import {
  ScrollHeading,
  ScrollParagraph,
  ScrollEyebrow,
} from './ScrollTypography';

interface ContactSectionProps {
  initialDepartment?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialDepartment = '' }) => {
  const defaultDept = DEPARTMENTS[0].name;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    degreeLevel: 'Undergraduate (B.Sc. / BBA / B.Com)',
    department: initialDepartment || defaultDept,
    campus: 'Chennai Campus (Kuthambakkam)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  React.useEffect(() => {
    if (initialDepartment) {
      setFormData((prev) => ({ ...prev, department: initialDepartment }));
    }
  }, [initialDepartment]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Valid email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please share your academic background or program question';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = `ASET-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRef(randomRef);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#faf8f5]/86 backdrop-blur-xl text-stone-900 border-b border-white/60 overflow-hidden">
      {/* Ambient atmospheric glow with signature orange-to-crimson combo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-20 w-[45vw] max-w-[500px] h-[45vw] max-h-[500px] rounded-full bg-gradient-to-tr from-orange-400/10 via-rose-400/8 to-transparent blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -right-20 w-[40vw] max-w-[450px] h-[40vw] max-h-[450px] rounded-full bg-gradient-to-bl from-rose-400/8 via-amber-400/6 to-transparent blur-[100px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-200">
          <div className="space-y-3 max-w-2xl">
            <ScrollEyebrow delay={0.04} className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-amber-900">
              <Mail className="w-3.5 h-3.5" />
              <span>6. Admissions Process (2026–2027) &amp; Campus Directory</span>
            </ScrollEyebrow>
            <ScrollHeading delay={0.12} className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold tracking-tight text-stone-900 leading-tight">
              Apply Online or Visit{' '}
              <span className="text-gradient-accent">Chennai &amp; Coimbatore Campuses</span>
            </ScrollHeading>
          </div>
          <ScrollParagraph delay={0.2} className="text-sm text-stone-600 max-w-md leading-relaxed font-manrope self-start md:self-end">
            Admissions for the 2026–2027 academic session are open across undergraduate, postgraduate, and diploma programs. Candidates can apply online or visit either campus for personal counseling.
          </ScrollParagraph>
        </div>

        {/* Content Split: Inquiry Form & Campus Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start font-manrope">
          {/* Left Column: Form or Success Confirmation with Glass Effect */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 glass-panel p-6 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden"
          >
            {submittedRef ? (
              <div className="space-y-6 py-6 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
                    Admissions Inquiry Registered
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-stone-900">
                    Reference #{submittedRef}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Thank you, <strong className="text-stone-900">{formData.fullName}</strong>. Your inquiry for{' '}
                    <strong className="text-stone-900">{formData.department}</strong> ({formData.degreeLevel}) at{' '}
                    <strong className="text-stone-900">{formData.campus}</strong> has been recorded for the 2026–2027 session.
                  </p>
                </div>

                <div className="p-4 bg-stone-50 border border-stone-200 rounded-xs text-xs font-mono text-stone-700 space-y-2">
                  <div>
                    <strong>Applicant Email:</strong> {formData.email}
                  </div>
                  <div>
                    <strong>Preferred Campus:</strong> {formData.campus}
                  </div>
                  <div>
                    <strong>Next Step:</strong> Eligibility Verification &amp; Program Guidance with Admissions Counselors
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSubmittedRef(null);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      degreeLevel: 'Undergraduate (B.Sc. / BBA / B.Com)',
                      department: defaultDept,
                      campus: 'Chennai Campus (Kuthambakkam)',
                      message: '',
                    });
                  }}
                  className="px-5 py-2.5 bg-stone-900 text-stone-50 text-xs uppercase tracking-wider font-semibold rounded-xs hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <h3 className="text-xl font-serif font-bold text-stone-900">
                    2026–2027 Admissions Inquiry
                  </h3>
                  <span className="text-xs font-mono text-stone-500">
                    Chennai &amp; Coimbatore
                  </span>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Karthik Subramanian"
                      className={`w-full px-3.5 py-2.5 bg-stone-50 border text-sm text-stone-900 rounded-xs focus:outline-hidden focus:ring-1 focus:ring-stone-900 focus:bg-white transition-colors ${
                        errors.fullName ? 'border-rose-400' : 'border-stone-300'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-600 font-mono">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="student@example.com"
                      className={`w-full px-3.5 py-2.5 bg-stone-50 border text-sm text-stone-900 rounded-xs focus:outline-hidden focus:ring-1 focus:ring-stone-900 focus:bg-white transition-colors ${
                        errors.email ? 'border-rose-400' : 'border-stone-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-600 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Program Level & Department */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-medium">
                      Program Level
                    </label>
                    <select
                      value={formData.degreeLevel}
                      onChange={(e) => setFormData({ ...formData, degreeLevel: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 text-sm text-stone-900 rounded-xs focus:outline-hidden focus:ring-1 focus:ring-stone-900 focus:bg-white"
                    >
                      <option value="Diploma (1 Year / 3 Years)">Diploma (1 Yr / 3 Yrs)</option>
                      <option value="Undergraduate (B.Sc. / BBA / B.Com)">Undergraduate (B.Sc. / BBA / B.Com)</option>
                      <option value="Postgraduate (M.Sc. / MBA)">Postgraduate (M.Sc. / MBA)</option>
                      <option value="PG Diploma / International Certification">PG Diploma / Intl. Certification</option>
                      <option value="Pilot Training">Pilot Training</option>
                    </select>
                  </div>

                  <div className="space-y-1 sm:col-span-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-medium">
                      Department of Interest
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 text-sm text-stone-900 rounded-xs focus:outline-hidden focus:ring-1 focus:ring-stone-900 focus:bg-white"
                    >
                      {DEPARTMENTS.map((dept) => (
                        <option key={dept.id} value={dept.name}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Preferred Campus & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-medium">
                      Preferred Campus
                    </label>
                    <select
                      value={formData.campus}
                      onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 text-sm text-stone-900 rounded-xs focus:outline-hidden focus:ring-1 focus:ring-stone-900 focus:bg-white"
                    >
                      <option value="Chennai Campus (Kuthambakkam)">
                        Chennai Campus (Kuthambakkam)
                      </option>
                      <option value="Coimbatore Campus (Saravanampatti)">
                        Coimbatore Campus (Saravanampatti)
                      </option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-medium">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 91594 99973"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 text-sm text-stone-900 rounded-xs focus:outline-hidden focus:ring-1 focus:ring-stone-900 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Statement / Message */}
                <div className="space-y-1">
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-medium">
                    Academic Background / Counseling Request *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention your 10th / 12th / UG qualification, preferred program (e.g., B.Sc. Aviation, B.Sc. Fire & Industrial Safety, MBA Business Analytics, B.Com + ACCA), or request a counseling session..."
                    className={`w-full px-3.5 py-2.5 bg-stone-50 border text-sm text-stone-900 rounded-xs focus:outline-hidden focus:ring-1 focus:ring-stone-900 focus:bg-white transition-colors ${
                      errors.message ? 'border-rose-400' : 'border-stone-300'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-600 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-stone-900 hover:bg-stone-800 disabled:bg-stone-400 text-stone-50 text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  {isSubmitting ? (
                    <span className="font-mono text-xs">Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Admissions Counseling (2026–2027)</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Official Campus Directory (Chennai & Coimbatore) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 bg-white border border-stone-200 rounded-sm space-y-5">
              <h3 className="text-xl font-serif font-bold text-stone-900 pb-2 border-b border-stone-100">
                Campus Directory
              </h3>

              {/* Chennai Campus */}
              <div className="space-y-3 pb-4 border-b border-stone-100 text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 text-xs font-mono uppercase">
                      Chennai Campus
                    </strong>
                    <span>No: 28, Irulapalayam, Kuthambakkam, Chennai – 600124, Tamil Nadu</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
                  <div className="font-mono text-xs text-stone-900">
                    +91 91594 99973 / +91 91594 99974
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
                  <div className="font-mono text-xs space-y-0.5">
                    <span className="block text-stone-900">contact@asetcollege.ac.in</span>
                    <span className="block text-stone-600">contact@asetsafety.ac.in</span>
                  </div>
                </div>
              </div>

              {/* Coimbatore Campus */}
              <div className="space-y-3 text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 text-xs font-mono uppercase">
                      Coimbatore Campus
                    </strong>
                    <span>
                      ASET College, Varathaiyangar Palayam, Saravanampatti – 641110, Coimbatore, Tamil Nadu
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
                  <div className="font-mono text-xs text-stone-900">
                    +91 91594 99975 / +91 91594 99977
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
                  <div className="font-mono text-xs text-stone-900">
                    contact@asetsafety.ac.in
                  </div>
                </div>
              </div>
            </div>

            {/* Required Documents Box (from Section 6) */}
            <div className="p-6 bg-stone-900 text-stone-100 rounded-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                <ClipboardCheck className="w-4 h-4" />
                <span>Documents for Eligibility Verification</span>
              </div>

              <div className="space-y-3 text-xs divide-y divide-stone-800">
                <div className="pt-2 flex justify-between items-baseline gap-3">
                  <span className="text-stone-300">Diploma Programs:</span>
                  <span className="font-mono text-amber-300 font-bold text-right">10th Marksheets</span>
                </div>
                <div className="pt-2 flex justify-between items-baseline gap-3">
                  <span className="text-stone-300">Undergraduate Programs:</span>
                  <span className="font-mono text-amber-300 font-bold text-right">12th Marksheets</span>
                </div>
                <div className="pt-2 flex justify-between items-baseline gap-3">
                  <span className="text-stone-300">M.Sc. / MBA / PG Diploma:</span>
                  <span className="font-mono text-amber-300 font-bold text-right">UG Degree Certificates</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
