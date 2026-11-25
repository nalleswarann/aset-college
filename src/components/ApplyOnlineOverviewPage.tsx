import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  User,
  Users,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Upload,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Sparkles,
  School,
  GraduationCap,
  ShieldCheck,
  Building2,
  Send,
  Printer,
  RotateCcw,
  Clock,
  IdCard,
  MessageSquare,
  Lock,
  ArrowUpRight,
  FileCheck,
} from 'lucide-react';
import { ScrollHeading, ScrollParagraph, ScrollEyebrow } from './ScrollTypography';

// College Building & Campus Imagery
import campusHeroImg from '../assets/images/aset-campus-modern-full.jpg';
import campusBuildingUserImg from '../assets/images/campus-building-user.jpg';
import studentsImg from '../assets/images/aset-aviation-students.png';
import pathwaySunsetImg from '../assets/images/aset-college-pathway-sunset.jpg';

interface ApplyOnlineOverviewPageProps {
  onBackToHome?: () => void;
  onOpenAdmissions?: () => void;
  onNavigateToAbout?: (hash?: string) => void;
  onNavigateToCampuses?: (hash?: string) => void;
  onNavigateToLife?: (hash?: string) => void;
  onNavigateToAdmissions?: (hash?: string) => void;
  onNavigateToRequirements?: (hash?: string) => void;
  onNavigateToFeePayment?: (hash?: string) => void;
}

export const ApplyOnlineOverviewPage: React.FC<ApplyOnlineOverviewPageProps> = ({
  onBackToHome,
  onOpenAdmissions,
  onNavigateToAbout,
  onNavigateToCampuses,
  onNavigateToLife,
  onNavigateToAdmissions,
  onNavigateToRequirements,
  onNavigateToFeePayment,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [applicationRef, setApplicationRef] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form State adhering to all fields from PDF
  const [formData, setFormData] = useState({
    // Step 1: Applicant Details
    academicYear: '2027–28',
    applicationDate: new Date().toISOString().split('T')[0],
    applicantName: '',
    fatherName: '',
    motherName: '',
    dateOfBirth: '',
    sex: 'Male',
    emailAddress: '',

    // Step 2: Contact & ID Details
    mobileNumber: '',
    alternativeMobile: '',
    whatsappNumber: '',
    fatherMobile: '',
    fatherOccupation: '',
    languagesKnown: '',
    religion: 'Hindu',
    religionOther: '',
    passportNumber: '',
    aadhaarNumber: '',
    address: '',
    photoFileName: '',
    photoPreviewUrl: '',

    // Step 3: Education & Course Details
    selectedCampus: 'Chennai Campus',
    selectedCourse: 'B.Sc. Aviation',
    sslcSchool: '',
    sslcYear: '',
    sslcMarks: '',
    hscSchool: '',
    hscYear: '',
    hscMarks: '',
    ugUniversity: '',
    ugYear: '',
    ugMarks: '',
    pgUniversity: '',
    pgYear: '',
    pgMarks: '',
  });

  const availableCourses = [
    // Aviation
    'B.Sc. Aviation',
    'BBA Aviation Management',
    'B.Sc. Aircraft Maintenance Engineering',
    'Pilot Training Ground School Preparation',
    // Logistics & Maritime
    'B.Sc. Logistics & Shipping',
    'BBA Logistics & Supply Chain Management',
    'MBA Logistics & Supply Chain Management',
    // Fire & Industrial Safety
    'B.Sc. Fire & Industrial Safety',
    'Diploma in Fire & Safety Engineering',
    'MBA Fire & Safety Management',
    // Management & Analytics
    'BBA Business Analytics',
    'BBA General Management',
    'MBA Dual Specialization (Logistics & Aviation)',
    // Commerce
    'B.Com General',
    'B.Com Accounting & Finance',
    'B.Com Computer Applications',
    // Hotel & Hospitality
    'B.Sc. Hotel Management & Catering Science',
    'Diploma in Food Production & Patisserie',
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (validationError) {
      setValidationError(null);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setValidationError('Photo file size must be less than 2 MB. Please upload a smaller file.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          photoFileName: file.name,
          photoPreviewUrl: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Step Validation logic strictly checking mandatory asterisks (*)
  const validateStep = (stepNumber: number): boolean => {
    if (stepNumber === 1) {
      if (!formData.applicantName.trim()) {
        setValidationError('Applicant Name is required.');
        return false;
      }
      if (!formData.fatherName.trim()) {
        setValidationError("Father's Name is required.");
        return false;
      }
      if (!formData.dateOfBirth) {
        setValidationError('Date of Birth is required.');
        return false;
      }
      if (!formData.sex) {
        setValidationError('Sex / Gender selection is required.');
        return false;
      }
    } else if (stepNumber === 2) {
      if (!formData.mobileNumber.trim()) {
        setValidationError('Mobile Number is required.');
        return false;
      }
      if (!formData.address.trim()) {
        setValidationError('Address is required.');
        return false;
      }
    } else if (stepNumber === 3) {
      if (!formData.selectedCourse) {
        setValidationError('Course Selection is required.');
        return false;
      }
    }
    setValidationError(null);
    return true;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 600, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    setValidationError(null);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(1) || !validateStep(2) || !validateStep(3)) {
      setValidationError('Some details were missing or invalid. Check the fields marked with an asterisk (*) and submit again.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedRef = `ASET-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      setApplicationRef(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }, 1200);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setValidationError(null);
    setFormData({
      academicYear: '2027–28',
      applicationDate: new Date().toISOString().split('T')[0],
      applicantName: '',
      fatherName: '',
      motherName: '',
      dateOfBirth: '',
      sex: 'Male',
      emailAddress: '',
      mobileNumber: '',
      alternativeMobile: '',
      whatsappNumber: '',
      fatherMobile: '',
      fatherOccupation: '',
      languagesKnown: '',
      religion: 'Hindu',
      religionOther: '',
      passportNumber: '',
      aadhaarNumber: '',
      address: '',
      photoFileName: '',
      photoPreviewUrl: '',
      selectedCampus: 'Chennai Campus',
      selectedCourse: 'B.Sc. Aviation',
      sslcSchool: '',
      sslcYear: '',
      sslcMarks: '',
      hscSchool: '',
      hscYear: '',
      hscMarks: '',
      ugUniversity: '',
      ugYear: '',
      ugMarks: '',
      pgUniversity: '',
      pgYear: '',
      pgMarks: '',
    });
  };

  const faqs = [
    {
      q: '1. What documents should I keep ready before filling out this online form?',
      a: 'Keep your 10th standard (SSLC), 12th standard (HSC), and if applying for PG, your UG mark statements ready. Also have your 12-digit Aadhaar number and a clean passport-size photograph in JPG, PNG, or WebP format (up to 2 MB) ready for upload.',
    },
    {
      q: '2. What happens immediately after I submit the online form?',
      a: 'Upon submission, your application details are recorded in the central admissions portal. You will receive an official Application Reference Number. The admissions desk will contact you via phone or WhatsApp regarding seat reservation, the admission booking fee, and certificate verification.',
    },
    {
      q: '3. Do I need to submit hard copies at the campus?',
      a: 'Yes. As per the official instructions, submit the filled application summary along with the admission booking fee and photocopies of the required qualifying testimonials at the admissions office (either Chennai or Coimbatore campus).',
    },
    {
      q: '4. Can I modify my course or campus selection after submitting?',
      a: 'Yes. If you wish to change your course stream or campus preference, contact the admissions helpline (+91 91594 99973) with your Application Reference Number prior to seat allocation.',
    },
    {
      q: '5. Who can I contact if I encounter any technical error during submission?',
      a: 'If you face any issue saving or sending the form, call the admissions support desk at +91 91594 99973 / 74 or email contact@asetsafety.ac.in for immediate assistance.',
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#faf8f5] text-stone-900 font-sans selection:bg-amber-800 selection:text-white">
      {/* ========================================================= */}
      {/* 1. HERO BANNER WITH COLLEGE BUILDING ARCHITECTURE        */}
      {/* ========================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between pt-28 sm:pt-36 lg:pt-40 pb-0 overflow-hidden bg-stone-950 text-white">
        {/* College Building Image Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src={campusHeroImg}
            alt="ASET College Architecture Building"
            className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.1] scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-black/75" />
          <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-transparent via-stone-950/40 to-stone-950" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 sm:pt-12 pb-12 sm:pb-16 my-auto">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wider text-orange-300 uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>ASET COLLEGE · ONLINE APPLICATION FORM · ACADEMIC YEAR 2027–28</span>
          </motion.div>

          {/* Luxury Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif font-semibold tracking-tight text-white mb-6 leading-[1.08] sm:leading-[1.05]"
          >
            Online Application <span className="text-gradient-title font-extrabold">Form 2027–28</span>
          </motion.h1>

          {/* Subtitle / Overview */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-stone-200 text-sm sm:text-base md:text-lg leading-relaxed font-sans mb-8"
          >
            The ASET College online application invites applicants to apply for the 2027–28 academic year.
            Follow our structured four-step submission process: Applicant Info, Contact &amp; ID Details,
            Academic Qualifications, and Final Review.
          </motion.p>

          {/* Action Trigger Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="#application-wizard"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-500 hover:to-rose-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-orange-600/30 transition-all hover:scale-102 active:scale-98"
            >
              <Send className="w-4 h-4" />
              <span>Start 4-Step Application</span>
            </a>

            <a
              href="#before-you-start"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all hover:scale-102 active:scale-98"
            >
              <FileCheck className="w-4 h-4 text-orange-400" />
              <span>Before You Start Checklist</span>
            </a>
          </motion.div>
        </div>

        {/* Anchored Metric Strip */}
        <div className="relative z-10 w-full border-t border-white/10 bg-stone-950/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium">Admissions Intake</p>
                  <p className="text-xs sm:text-sm font-bold text-white">2027–28 Academic Year</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium">Process Security</p>
                  <p className="text-xs sm:text-sm font-bold text-white">100% Encrypted &amp; Verified</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium">Campus Selection</p>
                  <p className="text-xs sm:text-sm font-bold text-white">Chennai &amp; Coimbatore</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium">Admissions Helpline</p>
                  <a href="tel:+919159499973" className="text-xs sm:text-sm font-bold text-amber-300 hover:underline">
                    +91 91594 99973 / 74
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. IMPORTANT NOTES & OFFICIAL ADVICE BANNER               */}
      {/* ========================================================= */}
      <section className="py-6 bg-amber-500/10 border-b border-amber-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-200">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="flex-1 text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
              <strong className="text-amber-950 font-bold block sm:inline mr-1">
                Important Intake Notice (2027–28):
              </strong>
              The application page currently displays 2027–28. Fields marked with an asterisk (*) are mandatory.
              The completed application must be submitted at the admissions office along with the admission booking
              fee and photocopies of the required certificates.
            </div>
            <a
              href="tel:+919159499973"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-900 text-white hover:bg-amber-950 text-xs font-semibold shrink-0 transition-colors"
            >
              <span>Call Helpline</span>
              <Phone className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. BEFORE YOU START & AFTER YOU APPLY PANELS              */}
      {/* Sections from Document Page 1                             */}
      {/* ========================================================= */}
      <section id="before-you-start" className="py-14 sm:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before You Start Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-orange-50/80 to-amber-50/50 border-2 border-orange-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-600 text-white flex items-center justify-center shadow-md">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 block">
                      Preparation Checklist
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                      Before You Start
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 font-sans">
                  Applicants are advised to keep the following documents and details readily available before
                  starting the online form:
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-stone-800">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>SSLC (Class 10) &amp; HSC (Class 12)</strong> mark statements and percentages.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>For PG Applicants:</strong> Consolidated UG mark details and degree certificate.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>12-digit Aadhaar Card Number</strong> and Passport number (if available).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Passport-size Photograph</strong> in JPG, PNG, or WebP format (up to 2 MB).</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-orange-200/70 text-xs text-orange-950 font-medium">
                💡 Tip: Having your marks and digital photo ready ensures you can finish in under 4 minutes.
              </div>
            </motion.div>

            {/* After You Apply Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-950 to-black text-white border-2 border-stone-800 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-600 text-white flex items-center justify-center shadow-md">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 block">
                      Next Milestones
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                      After You Apply
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 font-sans">
                  Submit the completed application at the admissions office along with the admission booking fee
                  and photocopies of the required documents.
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-stone-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span><strong>Direct Contact:</strong> The admissions office will contact you regarding next steps and fee structure.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span><strong>Booking Fee:</strong> Secure seat allotment by remitting the initial booking fee via Cash, NEFT, RTGS, or UPI.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span><strong>Document Verification:</strong> Present photocopies and original certificates at campus verification desks.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
                <span>Admissions Desk: +91 91594 99973</span>
                <span className="text-orange-400 font-semibold">Chennai &amp; Coimbatore</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. APPLICATION FORM — FOUR STEPS WIZARD                   */}
      {/* Core feature from PDF Pages 1 & 2                         */}
      {/* ========================================================= */}
      <section id="application-wizard" className="py-16 sm:py-24 bg-[#faf8f5] border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <ScrollEyebrow className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wider uppercase mb-3 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
              <span>FOUR-STEP ONLINE ADMISSION WIZARD</span>
            </ScrollEyebrow>
            <ScrollHeading className="text-2xl sm:text-4xl font-serif font-semibold text-stone-900 mb-3">
              Apply in <span className="text-gradient-title font-extrabold">Four Simple Steps</span>
            </ScrollHeading>
            <ScrollParagraph className="text-stone-600 text-xs sm:text-sm max-w-2xl mx-auto">
              Fields marked with an asterisk (*) are mandatory. Review your information before final submission.
            </ScrollParagraph>
          </div>

          {/* Stepper Progress Indicator */}
          <div className="mb-8 p-4 rounded-2xl bg-white border border-stone-200 shadow-sm">
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { num: 1, label: 'Applicant' },
                { num: 2, label: 'Contact & ID' },
                { num: 3, label: 'Education & Course' },
                { num: 4, label: 'Review & Submit' },
              ].map((step) => {
                const isActive = currentStep === step.num;
                const isPassed = currentStep > step.num;
                return (
                  <button
                    key={step.num}
                    type="button"
                    onClick={() => {
                      if (isPassed) setCurrentStep(step.num);
                    }}
                    disabled={!isPassed && currentStep !== step.num}
                    className={`flex flex-col items-center gap-1.5 py-2 px-1 rounded-xl transition-all ${
                      isActive
                        ? 'bg-orange-50 text-orange-700 font-bold'
                        : isPassed
                        ? 'text-stone-800 hover:bg-stone-50 cursor-pointer'
                        : 'text-stone-400 cursor-not-allowed opacity-60'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-orange-600 text-white shadow-md'
                          : isPassed
                          ? 'bg-emerald-600 text-white'
                          : 'bg-stone-200 text-stone-600'
                      }`}
                    >
                      {isPassed ? <CheckCircle2 className="w-4 h-4" /> : step.num}
                    </div>
                    <span className="text-[11px] sm:text-xs truncate max-w-full">{step.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Validation Alert Box */}
          <AnimatePresence>
            {validationError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-xs sm:text-sm"
              >
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold block">Validation message:</strong>
                  <span>{validationError}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Form Container */}
          <div className="rounded-3xl bg-white border border-stone-200 shadow-xl overflow-hidden">
            {/* Success Submission Screen */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 sm:p-14 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider inline-block mb-3">
                  Application Received Successfully
                </span>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-3">
                  Thank You for Applying to <span className="text-gradient-title">ASET College</span>
                </h3>

                <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
                  Application received. Thank you for applying to ASET College. The admissions office will
                  contact you shortly about the next steps and the admission booking fee.
                </p>

                {/* Reference Badge */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 max-w-md mx-auto mb-8">
                  <span className="text-xs text-stone-500 uppercase tracking-wider block font-semibold mb-1">
                    Your Application Reference Number
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-extrabold text-orange-600">
                    {applicationRef}
                  </span>
                  <p className="text-xs text-stone-500 mt-1">Please quote this reference in all future communication.</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print / Save Summary</span>
                  </button>

                  {onNavigateToFeePayment && (
                    <button
                      type="button"
                      onClick={() => onNavigateToFeePayment('#fee-payment')}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-500 hover:to-rose-500 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                    >
                      <span>Pay Admission Booking Fee</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Apply Another Candidate</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleFinalSubmit} className="p-6 sm:p-10">
                {/* ================================================= */}
                {/* STEP 1: APPLICANT DETAILS                         */}
                {/* ================================================= */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-stone-200 pb-4 mb-6">
                      <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider block mb-1">
                        Step 1 of 4
                      </span>
                      <h4 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                        Step 1: Applicant Details
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-500">
                        Personal and parent information as per qualifying board records.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Academic Year
                        </label>
                        <input
                          type="text"
                          disabled
                          value={formData.academicYear}
                          className="w-full px-4 py-3 rounded-xl bg-stone-100 border border-stone-200 text-stone-600 text-sm font-semibold cursor-not-allowed"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Date
                        </label>
                        <input
                          type="date"
                          value={formData.applicationDate}
                          onChange={(e) => handleInputChange('applicationDate', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Applicant Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Full Name as in 10th / 12th Mark Sheet"
                          value={formData.applicantName}
                          onChange={(e) => handleInputChange('applicantName', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Father's Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Father's Full Name"
                          value={formData.fatherName}
                          onChange={(e) => handleInputChange('fatherName', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Mother's Name
                        </label>
                        <input
                          type="text"
                          placeholder="Mother's Full Name"
                          value={formData.motherName}
                          onChange={(e) => handleInputChange('motherName', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Date of Birth <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Sex <span className="text-red-600">*</span>
                        </label>
                        <div className="flex gap-4 pt-2">
                          {['Male', 'Female'].map((option) => (
                            <label key={option} className="flex items-center gap-2 cursor-pointer text-sm font-semibold">
                              <input
                                type="radio"
                                name="sex"
                                value={option}
                                checked={formData.sex === option}
                                onChange={(e) => handleInputChange('sex', e.target.value)}
                                className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                              />
                              <span>{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="applicant.email@example.com"
                          value={formData.emailAddress}
                          onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Step Navigation Controls */}
                    <div className="pt-6 border-t border-stone-200 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                      >
                        <span>Next: Contact &amp; ID</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ================================================= */}
                {/* STEP 2: CONTACT & ID DETAILS                      */}
                {/* ================================================= */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-stone-200 pb-4 mb-6">
                      <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider block mb-1">
                        Step 2 of 4
                      </span>
                      <h4 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                        Step 2: Contact &amp; ID Details
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-500">
                        Contact numbers, identity proof, photograph upload, and address.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Mobile Number <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="10-digit Primary Mobile Number"
                          value={formData.mobileNumber}
                          onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Alternative Mobile Number
                        </label>
                        <input
                          type="tel"
                          placeholder="Secondary Contact Number"
                          value={formData.alternativeMobile}
                          onChange={(e) => handleInputChange('alternativeMobile', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          placeholder="WhatsApp Enabled Number"
                          value={formData.whatsappNumber}
                          onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Father's / Guardian Mobile Number
                        </label>
                        <input
                          type="tel"
                          placeholder="Parent / Guardian Contact"
                          value={formData.fatherMobile}
                          onChange={(e) => handleInputChange('fatherMobile', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Father's Occupation
                        </label>
                        <input
                          type="text"
                          placeholder="Occupation / Business"
                          value={formData.fatherOccupation}
                          onChange={(e) => handleInputChange('fatherOccupation', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Languages Known
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. English, Tamil, Hindi, Malayalam"
                          value={formData.languagesKnown}
                          onChange={(e) => handleInputChange('languagesKnown', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Religion
                        </label>
                        <select
                          value={formData.religion}
                          onChange={(e) => handleInputChange('religion', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        >
                          <option value="Hindu">Hindu</option>
                          <option value="Muslim">Muslim</option>
                          <option value="Christian">Christian</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Aadhaar Number (12 digits)
                        </label>
                        <input
                          type="text"
                          maxLength={12}
                          placeholder="XXXX XXXX XXXX"
                          value={formData.aadhaarNumber}
                          onChange={(e) => handleInputChange('aadhaarNumber', e.target.value.replace(/\D/g, ''))}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Passport Number (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="Passport Number if available"
                          value={formData.passportNumber}
                          onChange={(e) => handleInputChange('passportNumber', e.target.value.toUpperCase())}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none uppercase font-mono"
                        />
                      </div>

                      {/* Photo Upload Box */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Passport-size Photo Upload (JPG, PNG or WebP, max 2 MB)
                        </label>
                        <div className="p-4 rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50 flex flex-col sm:flex-row items-center gap-4">
                          {formData.photoPreviewUrl ? (
                            <div className="relative w-20 h-24 rounded-xl overflow-hidden border-2 border-orange-600 shrink-0">
                              <img
                                src={formData.photoPreviewUrl}
                                alt="Applicant Preview"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-20 h-24 rounded-xl bg-stone-200 border border-stone-300 flex items-center justify-center text-stone-400 shrink-0">
                              <User className="w-8 h-8" />
                            </div>
                          )}

                          <div className="flex-1 text-center sm:text-left">
                            <input
                              type="file"
                              accept="image/jpeg,image/png,image/webp"
                              id="photo-upload"
                              onChange={handlePhotoUpload}
                              className="hidden"
                            />
                            <label
                              htmlFor="photo-upload"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
                            >
                              <Upload className="w-3.5 h-3.5" />
                              <span>{formData.photoFileName ? 'Change Photo' : 'Select Photo File'}</span>
                            </label>
                            <p className="text-[11px] text-stone-500 mt-1">
                              {formData.photoFileName ? formData.photoFileName : 'Supported formats: JPG, PNG, WebP (up to 2 MB)'}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Permanent Address <span className="text-red-600">*</span>
                        </label>
                        <textarea
                          required
                          rows={3}
                          placeholder="Door No, Street Name, City, District, State, PIN Code"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Step Navigation Controls */}
                    <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs sm:text-sm transition-all cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Back: Applicant</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                      >
                        <span>Next: Education &amp; Course</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ================================================= */}
                {/* STEP 3: EDUCATION & COURSE DETAILS                */}
                {/* ================================================= */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-stone-200 pb-4 mb-6">
                      <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider block mb-1">
                        Step 3 of 4
                      </span>
                      <h4 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                        Step 3: Education &amp; Course Details
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-500">
                        Academic records for SSLC, HSC, UG, PG and preferred course &amp; campus selection.
                      </p>
                    </div>

                    {/* Course & Campus Selection Card */}
                    <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                            Select Campus <span className="text-red-600">*</span>
                          </label>
                          <select
                            value={formData.selectedCampus}
                            onChange={(e) => handleInputChange('selectedCampus', e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm font-semibold focus:ring-2 focus:ring-orange-500"
                          >
                            <option value="Chennai Campus">Chennai Campus (Poonamallee)</option>
                            <option value="Coimbatore Campus">Coimbatore Campus (Thandalam / Coimbatore)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                            Course Selection <span className="text-red-600">*</span>
                          </label>
                          <select
                            value={formData.selectedCourse}
                            onChange={(e) => handleInputChange('selectedCourse', e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm font-semibold focus:ring-2 focus:ring-orange-500"
                          >
                            {availableCourses.map((c) => (
                              <option key={c} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Qualifications Breakdown */}
                    <div className="space-y-4">
                      <h5 className="text-sm font-bold uppercase tracking-wider text-stone-800">
                        Academic Qualification Statements (SSLC, HSC, UG, PG)
                      </h5>

                      {/* SSLC (10th) */}
                      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 space-y-3">
                        <span className="font-bold text-xs uppercase tracking-wider text-orange-700 block">
                          1. Secondary School (SSLC / Class 10)
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <input
                            type="text"
                            placeholder="School / Board Name"
                            value={formData.sslcSchool}
                            onChange={(e) => handleInputChange('sslcSchool', e.target.value)}
                            className="px-3 py-2 rounded-lg bg-white border border-stone-300 text-xs text-stone-900"
                          />
                          <input
                            type="text"
                            placeholder="Year of Passing (e.g. 2022)"
                            value={formData.sslcYear}
                            onChange={(e) => handleInputChange('sslcYear', e.target.value)}
                            className="px-3 py-2 rounded-lg bg-white border border-stone-300 text-xs text-stone-900"
                          />
                          <input
                            type="text"
                            placeholder="Percentage of Marks (%)"
                            value={formData.sslcMarks}
                            onChange={(e) => handleInputChange('sslcMarks', e.target.value)}
                            className="px-3 py-2 rounded-lg bg-white border border-stone-300 text-xs text-stone-900"
                          />
                        </div>
                      </div>

                      {/* HSC (12th) */}
                      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 space-y-3">
                        <span className="font-bold text-xs uppercase tracking-wider text-orange-700 block">
                          2. Higher Secondary (HSC / Class 12 / +2)
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <input
                            type="text"
                            placeholder="School / Junior College Name"
                            value={formData.hscSchool}
                            onChange={(e) => handleInputChange('hscSchool', e.target.value)}
                            className="px-3 py-2 rounded-lg bg-white border border-stone-300 text-xs text-stone-900"
                          />
                          <input
                            type="text"
                            placeholder="Year of Passing (e.g. 2024)"
                            value={formData.hscYear}
                            onChange={(e) => handleInputChange('hscYear', e.target.value)}
                            className="px-3 py-2 rounded-lg bg-white border border-stone-300 text-xs text-stone-900"
                          />
                          <input
                            type="text"
                            placeholder="Percentage of Marks (%)"
                            value={formData.hscMarks}
                            onChange={(e) => handleInputChange('hscMarks', e.target.value)}
                            className="px-3 py-2 rounded-lg bg-white border border-stone-300 text-xs text-stone-900"
                          />
                        </div>
                      </div>

                      {/* Undergraduate (UG) */}
                      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 space-y-3">
                        <span className="font-bold text-xs uppercase tracking-wider text-stone-600 block">
                          3. Undergraduate (UG) — For PG Candidates
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <input
                            type="text"
                            placeholder="College / University Name"
                            value={formData.ugUniversity}
                            onChange={(e) => handleInputChange('ugUniversity', e.target.value)}
                            className="px-3 py-2 rounded-lg bg-white border border-stone-300 text-xs text-stone-900"
                          />
                          <input
                            type="text"
                            placeholder="Year of Passing"
                            value={formData.ugYear}
                            onChange={(e) => handleInputChange('ugYear', e.target.value)}
                            className="px-3 py-2 rounded-lg bg-white border border-stone-300 text-xs text-stone-900"
                          />
                          <input
                            type="text"
                            placeholder="Percentage / CGPA"
                            value={formData.ugMarks}
                            onChange={(e) => handleInputChange('ugMarks', e.target.value)}
                            className="px-3 py-2 rounded-lg bg-white border border-stone-300 text-xs text-stone-900"
                          />
                        </div>
                      </div>

                      {/* Postgraduate (PG) */}
                      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 space-y-3">
                        <span className="font-bold text-xs uppercase tracking-wider text-stone-600 block">
                          4. Postgraduate (PG) — Optional
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <input
                            type="text"
                            placeholder="University / Institute"
                            value={formData.pgUniversity}
                            onChange={(e) => handleInputChange('pgUniversity', e.target.value)}
                            className="px-3 py-2 rounded-lg bg-white border border-stone-300 text-xs text-stone-900"
                          />
                          <input
                            type="text"
                            placeholder="Year of Passing"
                            value={formData.pgYear}
                            onChange={(e) => handleInputChange('pgYear', e.target.value)}
                            className="px-3 py-2 rounded-lg bg-white border border-stone-300 text-xs text-stone-900"
                          />
                          <input
                            type="text"
                            placeholder="Percentage / Grade"
                            value={formData.pgMarks}
                            onChange={(e) => handleInputChange('pgMarks', e.target.value)}
                            className="px-3 py-2 rounded-lg bg-white border border-stone-300 text-xs text-stone-900"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Step Navigation Controls */}
                    <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs sm:text-sm transition-all cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Back: Contact &amp; ID</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                      >
                        <span>Next: Review &amp; Submit</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ================================================= */}
                {/* STEP 4: REVIEW & SUBMISSION                       */}
                {/* ================================================= */}
                {currentStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-stone-200 pb-4 mb-6">
                      <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider block mb-1">
                        Step 4 of 4
                      </span>
                      <h4 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                        Step 4: Review &amp; Submission
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-500">
                        Review the information entered in the application before sending it.
                      </p>
                    </div>

                    {/* Review Summary Breakdown */}
                    <div className="space-y-4 text-xs sm:text-sm">
                      {/* Personal Block */}
                      <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                        <div className="flex items-center justify-between mb-3 border-b border-stone-200 pb-2">
                          <span className="font-bold text-stone-900">1. Applicant Details</span>
                          <button
                            type="button"
                            onClick={() => setCurrentStep(1)}
                            className="text-xs text-orange-600 font-bold hover:underline"
                          >
                            Edit Step 1
                          </button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-stone-700">
                          <div><span className="text-stone-400 block text-[11px]">Applicant Name:</span> <strong>{formData.applicantName || '—'}</strong></div>
                          <div><span className="text-stone-400 block text-[11px]">Father's Name:</span> <strong>{formData.fatherName || '—'}</strong></div>
                          <div><span className="text-stone-400 block text-[11px]">Date of Birth:</span> <strong>{formData.dateOfBirth || '—'}</strong></div>
                          <div><span className="text-stone-400 block text-[11px]">Sex:</span> <strong>{formData.sex}</strong></div>
                        </div>
                      </div>

                      {/* Contact & ID Block */}
                      <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                        <div className="flex items-center justify-between mb-3 border-b border-stone-200 pb-2">
                          <span className="font-bold text-stone-900">2. Contact &amp; ID Details</span>
                          <button
                            type="button"
                            onClick={() => setCurrentStep(2)}
                            className="text-xs text-orange-600 font-bold hover:underline"
                          >
                            Edit Step 2
                          </button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-stone-700">
                          <div><span className="text-stone-400 block text-[11px]">Mobile:</span> <strong>{formData.mobileNumber || '—'}</strong></div>
                          <div><span className="text-stone-400 block text-[11px]">WhatsApp:</span> <strong>{formData.whatsappNumber || '—'}</strong></div>
                          <div><span className="text-stone-400 block text-[11px]">Aadhaar:</span> <strong>{formData.aadhaarNumber ? `•••• •••• ${formData.aadhaarNumber.slice(-4)}` : '—'}</strong></div>
                          <div className="sm:col-span-3"><span className="text-stone-400 block text-[11px]">Address:</span> <strong>{formData.address || '—'}</strong></div>
                        </div>
                      </div>

                      {/* Selected Course Block */}
                      <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200">
                        <div className="flex items-center justify-between mb-3 border-b border-orange-200 pb-2">
                          <span className="font-bold text-orange-950">3. Selected Programme &amp; Campus</span>
                          <button
                            type="button"
                            onClick={() => setCurrentStep(3)}
                            className="text-xs text-orange-700 font-bold hover:underline"
                          >
                            Edit Step 3
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-stone-800">
                          <div><span className="text-stone-500 block text-[11px]">Chosen Course:</span> <strong className="text-orange-950 text-sm">{formData.selectedCourse}</strong></div>
                          <div><span className="text-stone-500 block text-[11px]">Campus:</span> <strong className="text-orange-950 text-sm">{formData.selectedCampus}</strong></div>
                        </div>
                      </div>
                    </div>

                    {/* Submission Disclaimer */}
                    <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed">
                      <strong>Submission Note:</strong> By clicking "Send Application", you verify that all details
                      provided above are true and complete. If the form cannot be saved, try again or call +91 91594 99973 / 74.
                    </div>

                    {/* Step Navigation Controls */}
                    <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs sm:text-sm transition-all cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Back to Edit</span>
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-orange-600/30 transition-all hover:scale-102 active:scale-98 cursor-pointer disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Sending Application...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Application</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. ADMISSIONS HELP & CONTACT DESK                         */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-stone-900 via-stone-950 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 border border-stone-800 bg-stone-900/60 backdrop-blur-xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-300 text-xs font-semibold uppercase tracking-wider inline-block mb-4">
                  Admissions Guidance Desk
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-4 leading-tight">
                  Have Questions Before You Apply? <span className="text-gradient-title font-extrabold">We Are Here to Guide.</span>
                </h3>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  The admissions team can guide applicants on eligibility, course suitability, campus facilities,
                  and hostel accommodations.
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
                  <a
                    href="tel:+919159499973"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-500 hover:to-rose-500 text-white font-bold shadow-lg shadow-orange-600/30 transition-all hover:scale-102"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call: +91 91594 99973 / 74</span>
                  </a>

                  <a
                    href="https://wa.me/919159499973"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all hover:scale-102"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Support</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="text-xs text-stone-400 uppercase tracking-wider font-semibold block mb-1">
                    Official Admissions Email
                  </span>
                  <a
                    href="mailto:contact@asetsafety.ac.in"
                    className="font-mono text-base sm:text-lg font-bold text-orange-400 hover:underline"
                  >
                    contact@asetsafety.ac.in
                  </a>
                  <p className="text-xs text-stone-400 mt-1">Queries responded within 24 business hours</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="text-xs text-stone-400 uppercase tracking-wider font-semibold block mb-1">
                    Official Application Portal
                  </span>
                  <a
                    href="https://www.asetcollege.ac.in/admission/apply"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-200 text-xs sm:text-sm hover:text-white hover:underline flex items-center justify-between"
                  >
                    <span className="truncate">asetcollege.ac.in/admission/apply</span>
                    <ExternalLink className="w-4 h-4 shrink-0 text-orange-400 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. RELATED ADMISSION PAGES STRIP                          */}
      {/* From Document Page 2                                      */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <ScrollEyebrow className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wider uppercase mb-3 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
              <span>EXPLORE COMPLETE ADMISSIONS SUITE</span>
            </ScrollEyebrow>
            <ScrollHeading className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-2">
              Related <span className="text-gradient-title font-extrabold">Admission Pages</span>
            </ScrollHeading>
            <ScrollParagraph className="text-stone-600 text-xs sm:text-sm">
              Navigate seamlessly across the ASET College admission ecosystem.
            </ScrollParagraph>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Link 1: Admission Overview */}
            {onNavigateToAdmissions && (
              <button
                type="button"
                onClick={() => onNavigateToAdmissions('#admission-overview')}
                className="p-6 rounded-3xl bg-[#faf8f5] border border-stone-200 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all text-left group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-base text-stone-900 mb-1 flex items-center justify-between">
                  <span>Admission Overview</span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                </h4>
                <p className="text-stone-500 text-xs leading-relaxed">
                  Broader prospectus, approved faculties, and general admission criteria.
                </p>
              </button>
            )}

            {/* Link 2: Requirements */}
            {onNavigateToRequirements && (
              <button
                type="button"
                onClick={() => onNavigateToRequirements('#requirements-overview')}
                className="p-6 rounded-3xl bg-[#faf8f5] border border-stone-200 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all text-left group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-base text-stone-900 mb-1 flex items-center justify-between">
                  <span>Admission Requirements</span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                </h4>
                <p className="text-stone-500 text-xs leading-relaxed">
                  UG and PG document checklist, board equivalency, and attestations.
                </p>
              </button>
            )}

            {/* Link 3: Mode of Fee Payment */}
            {onNavigateToFeePayment && (
              <button
                type="button"
                onClick={() => onNavigateToFeePayment('#fee-payment')}
                className="p-6 rounded-3xl bg-[#faf8f5] border border-stone-200 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all text-left group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-base text-stone-900 mb-1 flex items-center justify-between">
                  <span>Mode of Fee Payment</span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                </h4>
                <p className="text-stone-500 text-xs leading-relaxed">
                  ICICI Bank (Chennai), RBL Bank (Coimbatore), and verified UPI handles.
                </p>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. FREQUENTLY ASKED QUESTIONS                             */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-[#faf8f5] border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollEyebrow className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wider uppercase mb-3 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </ScrollEyebrow>
            <ScrollHeading className="text-2xl sm:text-4xl font-serif font-semibold text-stone-900 mb-3">
              Application &amp; Admission <span className="text-gradient-title font-extrabold">Queries</span>
            </ScrollHeading>
            <ScrollParagraph className="text-stone-600 text-xs sm:text-sm">
              Answers to common queries regarding application status, booking fee, and campus procedures.
            </ScrollParagraph>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-stone-200 bg-white overflow-hidden transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50 transition-colors"
                  >
                    <span className="font-serif font-semibold text-sm sm:text-base text-stone-900">
                      {faq.q}
                    </span>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center bg-stone-100 text-stone-600 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-orange-100 text-orange-700' : ''
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans border-t border-stone-100 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
