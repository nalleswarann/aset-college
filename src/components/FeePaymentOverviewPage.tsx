import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CreditCard,
  Building2,
  QrCode,
  Calendar,
  Phone,
  ShieldCheck,
  AlertTriangle,
  Copy,
  Check,
  ExternalLink,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Landmark,
  Wallet,
  Receipt,
  FileCheck2,
  Clock,
  HelpCircle,
  MapPin,
  CheckCircle2,
  Smartphone,
  Info,
  DollarSign,
  ArrowUpRight,
  ShieldAlert,
} from 'lucide-react';
import { ScrollHeading, ScrollParagraph, ScrollEyebrow } from './ScrollTypography';

// College Building & Campus Imagery
import campusBuildingImg from '../assets/images/campus-building-user.jpg';
import campusModernImg from '../assets/images/aset-campus-modern-full.jpg';
import campusSunsetImg from '../assets/images/aset-college-pathway-sunset.jpg';
import graduatesImg from '../assets/images/aset-graduates-celebration.jpg';

interface FeePaymentOverviewPageProps {
  onBackToHome?: () => void;
  onOpenAdmissions?: () => void;
  onNavigateToAbout?: (hash?: string) => void;
  onNavigateToCampuses?: (hash?: string) => void;
  onNavigateToLife?: (hash?: string) => void;
  onNavigateToAdmissions?: (hash?: string) => void;
  onNavigateToRequirements?: (hash?: string) => void;
  onNavigateToApplyOnline?: (hash?: string) => void;
}

export const FeePaymentOverviewPage: React.FC<FeePaymentOverviewPageProps> = ({
  onBackToHome,
  onOpenAdmissions,
  onNavigateToAbout,
  onNavigateToCampuses,
  onNavigateToLife,
  onNavigateToAdmissions,
  onNavigateToRequirements,
  onNavigateToApplyOnline,
}) => {
  const [activeCampusTab, setActiveCampusTab] = useState<'all' | 'chennai' | 'coimbatore'>('all');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedQrModal, setSelectedQrModal] = useState<{
    campus: string;
    upiId: string;
    bank: string;
  } | null>(null);

  const handleCopy = (text: string, fieldKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldKey);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const chennaiBank = {
    campus: 'Chennai Campus',
    bankName: 'ICICI Bank',
    accountName: 'ASET INSTITUTE OF SCIENCE AND TECHNOLOGY',
    accountNumber: '154601003739',
    accountType: 'Savings',
    ifsc: 'ICIC0001546',
    branch: 'Poonamallee',
    upiId: 'AIOSAT@icici',
    supportedApps: ['BHIM', 'UPI', 'ICICI iMobile Pay', 'Paytm', 'Google Pay', 'PhonePe'],
    offlineMode: 'Cash deposit at the college campus in the Accounts Section.',
  };

  const coimbatoreBank = {
    campus: 'Coimbatore Campus',
    bankName: 'RBL Bank',
    accountName: 'ASET INSTITUTE OF SCIENCE AND TECHNOLOGY - COIMBATORE',
    accountNumber: '300120011001',
    accountType: 'Current / Institutional',
    ifsc: 'RATN0000387',
    branch: 'Saveetha Deemed University, Chennai',
    branchAddress:
      'Saveetha Deemed University, Saveetha Institute of Medical and Technical Sciences, Saveetha Nagar, Thandalam Post, Mevalurkuppam, Tamil Nadu, Chennai - 602105',
    upiId: 'ASETINSTITUTECOIMBATORE@rbl',
    supportedApps: ['BHIM', 'UPI', 'Google Pay', 'PhonePe', 'Paytm', 'CRED', 'MobiKwik', 'slice'],
    offlineMode: 'Cash deposit at the college campus in the Accounts Section.',
  };

  const feeDeadlines = [
    {
      semester: 'First Semester',
      badge: 'Admission Milestone',
      deadline: 'As Specified in Admission Letter',
      details:
        'The first-semester fee must be paid strictly within the timeframe stipulated in your official Admission Letter. Total tuition and course fees are communicated formally at the time of admission.',
      color: 'from-orange-500/20 to-amber-500/10 border-orange-300/40',
      tagColor: 'bg-orange-100 text-orange-800',
    },
    {
      semester: 'Odd Semester (Sem 3, 5, 7)',
      badge: 'Annual Cycle: Mid-Year',
      deadline: 'July 15 Every Year',
      details:
        'All returning students enrolled in odd academic semesters must clear their term fees on or before July 15. If July 15 falls on a weekend or public holiday, the next working day will serve as the due date.',
      color: 'from-red-500/20 to-rose-500/10 border-red-300/40',
      tagColor: 'bg-red-100 text-red-800',
    },
    {
      semester: 'Even Semester (Sem 2, 4, 6, 8)',
      badge: 'Annual Cycle: Year-End',
      deadline: 'December 1 Every Year',
      details:
        'All continuing students enrolled in even academic semesters must remit their tuition fees by December 1. If December 1 falls on a weekend or government holiday, payment is accepted on the subsequent working day.',
      color: 'from-amber-500/20 to-orange-500/10 border-amber-300/40',
      tagColor: 'bg-amber-100 text-amber-800',
    },
  ];

  const paymentSteps = [
    {
      step: '01',
      title: 'Select Bank & Campus Account',
      desc: 'Identify whether your admission is at Chennai or Coimbatore campus. Copy the verified Account Number, IFSC, or UPI handle.',
      icon: Landmark,
    },
    {
      step: '02',
      title: 'Execute E-Transfer or Scan UPI',
      desc: 'Use your preferred banking portal or mobile app (NEFT / RTGS / IMPS / UPI) to transfer the approved fee amount.',
      icon: CreditCard,
    },
    {
      step: '03',
      title: 'Save Transaction ID / UTR Number',
      desc: 'Keep the 12-digit UTR reference or UPI transaction receipt screenshot. Note your Student Name and Application / Roll Number.',
      icon: Receipt,
    },
    {
      step: '04',
      title: 'Obtain Official College Stamp',
      desc: 'Submit the UTR receipt to the Accounts Section or via official WhatsApp/Email to obtain the official ASET fee receipt.',
      icon: FileCheck2,
    },
  ];

  const faqs = [
    {
      question: '1. What are the accepted modes of fee payment at ASET College?',
      answer:
        'ASET College accepts fees through: (1) Cash deposit at the campus accounts section; (2) Electronic bank transfer via NEFT, RTGS, or IMPS into the designated college account; and (3) UPI payment using verified virtual payment addresses (AIOSAT@icici for Chennai and ASETINSTITUTECOIMBATORE@rbl for Coimbatore).',
    },
    {
      question: '2. Are the bank account details different for Chennai and Coimbatore campuses?',
      answer:
        'Yes. Chennai campus fees are routed through ICICI Bank (Account Number: 154601003739, IFSC: ICIC0001546), whereas Coimbatore campus fees are routed through RBL Bank (Account Number: 300120011001, IFSC: RATN0000387). Always ensure you transfer to the correct campus account.',
    },
    {
      question: '3. What happens if a semester fee deadline falls on a Sunday or holiday?',
      answer:
        'If an official due date (e.g., July 15 or December 1) coincides with a weekend, second Saturday, or gazetted public holiday, the immediate next official working day is recognized as the valid deadline without penalty.',
    },
    {
      question: '4. Can I pay my semester fees in installments?',
      answer:
        'The per-semester fee is payable at the commencement of each semester as per the institution payment schedule. Under genuine academic or financial circumstances, installment requests may be submitted in writing to the Accounts and Management Committee for special review.',
    },
    {
      question: '5. Does ASET College offer educational loan assistance?',
      answer:
        'Yes. Upon provisional admission, ASET College issues an official Bonafide Certificate and Fee Structure Estimate letter to assist candidates in securing educational loans from nationalised and private banks.',
    },
    {
      question: '6. How do I verify my payment and receive an official receipt?',
      answer:
        'After completing an electronic transfer or UPI payment, email or present your transaction receipt (showing the 12-digit UTR number, student name, and course) to the campus Accounts Section. An official stamped college receipt will be generated and handed over or dispatched to you.',
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#faf8f5] text-stone-900 font-sans selection:bg-amber-800 selection:text-white">
      {/* Toast Notification for Clipboard Copy */}
      <AnimatePresence>
        {copiedField && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-stone-900 text-white rounded-xl shadow-2xl border border-stone-700 text-xs sm:text-sm font-medium"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Copied to clipboard:</span>
            <span className="font-mono text-amber-300 font-bold">{copiedField}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* 1. HERO BANNER WITH COLLEGE BUILDING ARCHITECTURE        */}
      {/* Reference: Architectural backdrop & Two-tone luxury title */}
      {/* ========================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between pt-28 sm:pt-36 lg:pt-40 pb-0 overflow-hidden bg-stone-950 text-white">
        {/* Cinematic College Building Image Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src={campusBuildingImg}
            alt="ASET College Building Architecture"
            className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.1] scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-black/75" />
          <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-transparent via-stone-950/40 to-stone-950" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 sm:pt-12 pb-12 sm:pb-16 my-auto">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wider text-orange-300 uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>ASET COLLEGE · MODE OF FEE PAYMENT · ACADEMIC SESSION 2027–28</span>
          </motion.div>

          {/* Luxury Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif font-semibold tracking-tight text-white mb-6 leading-[1.08] sm:leading-[1.05]"
          >
            Mode of <span className="text-gradient-title font-extrabold">Fee Payment</span>
          </motion.h1>

          {/* Subtitle / Overview Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-stone-200 text-sm sm:text-base md:text-lg leading-relaxed font-sans mb-8"
          >
            ASET College provides verified banking channels for students and parents to remit academic fees:
            cash deposits at campus accounts counters, electronic bank transfers (NEFT / RTGS / IMPS), and
            instant UPI transfers. Review official bank accounts and semester deadlines below.
          </motion.p>

          {/* Action Trigger Anchors */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="#chennai-payment"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-500 hover:to-rose-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-orange-600/30 transition-all hover:scale-102 active:scale-98"
            >
              <Landmark className="w-4 h-4" />
              <span>Chennai Campus (ICICI)</span>
            </a>

            <a
              href="#coimbatore-payment"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all hover:scale-102 active:scale-98"
            >
              <Landmark className="w-4 h-4 text-orange-400" />
              <span>Coimbatore Campus (RBL)</span>
            </a>

            <a
              href="#deadlines"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-900/80 hover:bg-stone-800 border border-stone-700 text-stone-200 font-semibold text-xs sm:text-sm transition-all"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Fee Deadlines</span>
            </a>
          </motion.div>
        </div>

        {/* Anchored Bottom Metric Strip */}
        <div className="relative z-10 w-full border-t border-white/10 bg-stone-950/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium">Verification Status</p>
                  <p className="text-xs sm:text-sm font-bold text-white">100% Verified Accounts</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium">Dual Campuses</p>
                  <p className="text-xs sm:text-sm font-bold text-white">Chennai &amp; Coimbatore</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium">Supported Gateways</p>
                  <p className="text-xs sm:text-sm font-bold text-white">NEFT · RTGS · IMPS · UPI</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium">Accounts Helpline</p>
                  <a href="tel:+919159499973" className="text-xs sm:text-sm font-bold text-amber-300 hover:underline">
                    +91 91594 99973
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. IMPORTANT PAYMENT SAFETY NOTE BANNER                   */}
      {/* Official requirement from PDF                             */}
      {/* ========================================================= */}
      <section className="py-6 bg-amber-500/10 border-b border-amber-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-200">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="flex-1 text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
              <strong className="text-amber-950 font-bold block sm:inline mr-1">
                Important Payment Safety Note:
              </strong>
              Bank account numbers, IFSC codes, and UPI IDs are reproduced directly from the official ASET College
              fee-payment webpage. Always contact the college accounts office or verify via the official portal before
              transferring high-value tuition amounts. Do not rely on unverified offline copies alone.
            </div>
            <a
              href="https://www.asetcollege.ac.in/admission/fee-payment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-900 text-white hover:bg-amber-950 text-xs font-semibold shrink-0 transition-colors"
            >
              <span>Verify Online</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. CAMPUS SELECTOR & OVERVIEW SECTION                     */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <ScrollEyebrow className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wider uppercase mb-3 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
              <span>APPROVED PAYMENT METHODS &amp; CHANNELS</span>
            </ScrollEyebrow>
            <ScrollHeading className="text-2xl sm:text-4xl font-serif font-semibold text-stone-900 mb-4">
              Official Banking Information for <span className="text-gradient-title font-extrabold">Both Campuses</span>
            </ScrollHeading>
            <ScrollParagraph className="text-stone-600 text-sm sm:text-base">
              ASET College states that students and parents can pay academic fees through cash deposit at the campus
              accounts section, electronic bank transfer (NEFT / RTGS / IMPS), or UPI payment. Separate bank and UPI
              details are provisioned for Chennai and Coimbatore.
            </ScrollParagraph>
          </div>

          {/* Interactive Campus Switcher Pill */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-2xl bg-stone-100 border border-stone-200">
              <button
                type="button"
                onClick={() => setActiveCampusTab('all')}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCampusTab === 'all'
                    ? 'bg-stone-900 text-white shadow-md'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                View Both Campuses
              </button>
              <button
                type="button"
                onClick={() => setActiveCampusTab('chennai')}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCampusTab === 'chennai'
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                1. Chennai Campus (ICICI)
              </button>
              <button
                type="button"
                onClick={() => setActiveCampusTab('coimbatore')}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCampusTab === 'coimbatore'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                2. Coimbatore Campus (RBL)
              </button>
            </div>
          </div>

          {/* Dual Campus Banking Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* -------------------------------------------------- */}
            {/* CHENNAI CAMPUS CARD                                */}
            {/* -------------------------------------------------- */}
            {(activeCampusTab === 'all' || activeCampusTab === 'chennai') && (
              <motion.div
                id="chennai-payment"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col rounded-3xl bg-white border-2 border-orange-200/80 shadow-xl overflow-hidden hover:border-orange-300 transition-all"
              >
                {/* Header Strip */}
                <div className="bg-gradient-to-r from-orange-600 via-orange-700 to-amber-700 p-6 sm:p-7 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-orange-100">
                      Primary Campus
                    </span>
                    <span className="text-xs font-semibold text-orange-200 flex items-center gap-1.5">
                      <Landmark className="w-3.5 h-3.5" />
                      ICICI Bank Partner
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold mb-1">
                    1. Chennai Campus Fee Payment
                  </h3>
                  <p className="text-xs sm:text-sm text-orange-100/90 font-sans">
                    ASET Institute of Science and Technology · Chennai Campus
                  </p>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  {/* Offline Cash Payment Notice */}
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/70 text-xs sm:text-sm text-stone-800">
                    <Building2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-orange-950 block">Offline Payment (Cash Counter):</span>
                      <span>Cash deposit directly at the college campus in the Accounts Section.</span>
                    </div>
                  </div>

                  {/* Option 1: E-Transfer (NEFT / RTGS / IMPS) */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-orange-600" />
                        Option 1 – E-Transfer (NEFT / RTGS / IMPS)
                      </h4>
                      <span className="text-[11px] text-stone-500 font-medium">Bank Details</span>
                    </div>

                    {/* Clean Bank Table */}
                    <div className="divide-y divide-stone-100 rounded-2xl border border-stone-200 overflow-hidden text-xs sm:text-sm">
                      <div className="flex items-center justify-between p-3.5 bg-stone-50/80">
                        <span className="font-medium text-stone-500">Account Name</span>
                        <div className="flex items-center gap-2 text-right">
                          <span className="font-bold text-stone-900">{chennaiBank.accountName}</span>
                          <button
                            type="button"
                            onClick={() => handleCopy(chennaiBank.accountName, 'Chennai Account Name')}
                            className="p-1 rounded text-stone-400 hover:text-stone-700 hover:bg-stone-200/60"
                            title="Copy Account Name"
                          >
                            {copiedField === 'Chennai Account Name' ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3.5 bg-amber-50/40">
                        <span className="font-medium text-stone-500">Account Number</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-extrabold text-stone-950 text-sm sm:text-base">
                            {chennaiBank.accountNumber}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopy(chennaiBank.accountNumber, chennaiBank.accountNumber)}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded bg-orange-600 text-white text-[11px] font-semibold hover:bg-orange-700 active:scale-95 transition-all"
                          >
                            {copiedField === chennaiBank.accountNumber ? (
                              <>
                                <Check className="w-3 h-3" />
                                <span>Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3.5 bg-stone-50/80">
                        <span className="font-medium text-stone-500">Account Type</span>
                        <span className="font-semibold text-stone-800">{chennaiBank.accountType}</span>
                      </div>

                      <div className="flex items-center justify-between p-3.5 bg-white">
                        <span className="font-medium text-stone-500">IFSC Code</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-stone-900">{chennaiBank.ifsc}</span>
                          <button
                            type="button"
                            onClick={() => handleCopy(chennaiBank.ifsc, chennaiBank.ifsc)}
                            className="p-1 rounded text-stone-400 hover:text-stone-700 hover:bg-stone-200/60"
                            title="Copy IFSC"
                          >
                            {copiedField === chennaiBank.ifsc ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3.5 bg-stone-50/80">
                        <span className="font-medium text-stone-500">Bank &amp; Branch</span>
                        <span className="font-semibold text-stone-800">
                          {chennaiBank.bankName} · {chennaiBank.branch}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Option 2: UPI Payment */}
                  <div className="pt-2 border-t border-stone-200">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                        <QrCode className="w-4 h-4 text-orange-600" />
                        Option 2 – UPI Payment
                      </h4>
                      <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                        Instant Remittance
                      </span>
                    </div>

                    {/* UPI ID Pill Box */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                      <div>
                        <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                          Official Chennai UPI ID
                        </span>
                        <span className="font-mono font-bold text-base sm:text-lg text-stone-950">
                          {chennaiBank.upiId}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button
                          type="button"
                          onClick={() => handleCopy(chennaiBank.upiId, chennaiBank.upiId)}
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold shadow-sm transition-all active:scale-95"
                        >
                          {copiedField === chennaiBank.upiId ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy UPI ID</span>
                            </>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedQrModal({
                              campus: 'Chennai Campus',
                              upiId: chennaiBank.upiId,
                              bank: 'ICICI Bank',
                            })
                          }
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50 transition-all"
                        >
                          <QrCode className="w-3.5 h-3.5 text-stone-600" />
                          <span>Show QR</span>
                        </button>
                      </div>
                    </div>

                    {/* Supported Apps Badges */}
                    <div>
                      <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-2">
                        Supported UPI Applications:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {chennaiBank.supportedApps.map((app) => (
                          <span
                            key={app}
                            className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 text-xs font-medium border border-stone-200"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Reference Links */}
                <div className="p-4 bg-stone-50 border-t border-stone-100 text-xs text-stone-600 flex flex-wrap items-center justify-between gap-2">
                  <span>Official Website Links:</span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.asetcollege.ac.in/admission/fee-payment"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-700 font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>Chennai ICICI UPI QR (original)</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* -------------------------------------------------- */}
            {/* COIMBATORE CAMPUS CARD                             */}
            {/* -------------------------------------------------- */}
            {(activeCampusTab === 'all' || activeCampusTab === 'coimbatore') && (
              <motion.div
                id="coimbatore-payment"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col rounded-3xl bg-white border-2 border-rose-200/80 shadow-xl overflow-hidden hover:border-rose-300 transition-all"
              >
                {/* Header Strip */}
                <div className="bg-gradient-to-r from-rose-700 via-rose-800 to-stone-900 p-6 sm:p-7 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-rose-100">
                      Coimbatore Campus
                    </span>
                    <span className="text-xs font-semibold text-rose-200 flex items-center gap-1.5">
                      <Landmark className="w-3.5 h-3.5" />
                      RBL Bank Partner
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold mb-1">
                    2. Coimbatore Campus Fee Payment
                  </h3>
                  <p className="text-xs sm:text-sm text-rose-100/90 font-sans">
                    ASET Institute of Science and Technology · Coimbatore Campus
                  </p>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  {/* Offline Cash Payment Notice */}
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-50/70 border border-rose-200/70 text-xs sm:text-sm text-stone-800">
                    <Building2 className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-rose-950 block">Offline Payment (Cash Counter):</span>
                      <span>Cash deposit directly at the college campus in the Accounts Section.</span>
                    </div>
                  </div>

                  {/* Option 1: E-Transfer (NEFT / RTGS / IMPS) */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-rose-700" />
                        Option 1 – E-Transfer (NEFT / RTGS / IMPS)
                      </h4>
                      <span className="text-[11px] text-stone-500 font-medium">Bank Details</span>
                    </div>

                    {/* Clean Bank Table */}
                    <div className="divide-y divide-stone-100 rounded-2xl border border-stone-200 overflow-hidden text-xs sm:text-sm">
                      <div className="flex items-center justify-between p-3.5 bg-stone-50/80">
                        <span className="font-medium text-stone-500">Account Name</span>
                        <div className="flex items-center gap-2 text-right">
                          <span className="font-bold text-stone-900 text-xs sm:text-sm">
                            {coimbatoreBank.accountName}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopy(coimbatoreBank.accountName, 'Coimbatore Account Name')}
                            className="p-1 rounded text-stone-400 hover:text-stone-700 hover:bg-stone-200/60"
                            title="Copy Account Name"
                          >
                            {copiedField === 'Coimbatore Account Name' ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3.5 bg-rose-50/40">
                        <span className="font-medium text-stone-500">Account Number</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-extrabold text-stone-950 text-sm sm:text-base">
                            {coimbatoreBank.accountNumber}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopy(coimbatoreBank.accountNumber, coimbatoreBank.accountNumber)}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded bg-rose-700 text-white text-[11px] font-semibold hover:bg-rose-800 active:scale-95 transition-all"
                          >
                            {copiedField === coimbatoreBank.accountNumber ? (
                              <>
                                <Check className="w-3 h-3" />
                                <span>Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3.5 bg-white">
                        <span className="font-medium text-stone-500">IFSC Code</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-stone-900">{coimbatoreBank.ifsc}</span>
                          <button
                            type="button"
                            onClick={() => handleCopy(coimbatoreBank.ifsc, coimbatoreBank.ifsc)}
                            className="p-1 rounded text-stone-400 hover:text-stone-700 hover:bg-stone-200/60"
                            title="Copy IFSC"
                          >
                            {copiedField === coimbatoreBank.ifsc ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3.5 bg-stone-50/80">
                        <span className="font-medium text-stone-500">Bank</span>
                        <span className="font-semibold text-stone-800">{coimbatoreBank.bankName}</span>
                      </div>

                      <div className="p-3.5 bg-white">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-stone-500">Branch Address</span>
                          <button
                            type="button"
                            onClick={() => handleCopy(coimbatoreBank.branchAddress, 'Coimbatore Branch Address')}
                            className="text-[11px] text-rose-700 font-semibold hover:underline inline-flex items-center gap-1"
                          >
                            <Copy className="w-3 h-3" />
                            <span>Copy Address</span>
                          </button>
                        </div>
                        <p className="text-stone-700 text-xs leading-relaxed font-sans">
                          {coimbatoreBank.branchAddress}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Option 2: UPI Payment */}
                  <div className="pt-2 border-t border-stone-200">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                        <QrCode className="w-4 h-4 text-rose-700" />
                        Option 2 – UPI Payment
                      </h4>
                      <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                        Instant Remittance
                      </span>
                    </div>

                    {/* UPI ID Pill Box */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                      <div>
                        <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                          Official Coimbatore UPI ID
                        </span>
                        <span className="font-mono font-bold text-xs sm:text-sm md:text-base text-stone-950 break-all">
                          {coimbatoreBank.upiId}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                        <button
                          type="button"
                          onClick={() => handleCopy(coimbatoreBank.upiId, coimbatoreBank.upiId)}
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-700 hover:bg-rose-800 text-white text-xs font-semibold shadow-sm transition-all active:scale-95"
                        >
                          {copiedField === coimbatoreBank.upiId ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy UPI ID</span>
                            </>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedQrModal({
                              campus: 'Coimbatore Campus',
                              upiId: coimbatoreBank.upiId,
                              bank: 'RBL Bank',
                            })
                          }
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50 transition-all"
                        >
                          <QrCode className="w-3.5 h-3.5 text-stone-600" />
                          <span>Show QR</span>
                        </button>
                      </div>
                    </div>

                    {/* Supported Apps Badges */}
                    <div>
                      <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-2">
                        Supported UPI Applications:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {coimbatoreBank.supportedApps.map((app) => (
                          <span
                            key={app}
                            className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 text-xs font-medium border border-stone-200"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Reference Links */}
                <div className="p-4 bg-stone-50 border-t border-stone-100 text-xs text-stone-600 flex flex-wrap items-center justify-between gap-2">
                  <span>Official Website Links:</span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.asetcollege.ac.in/admission/fee-payment"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-700 font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>Coimbatore RBL Bank UPI QR (original)</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. LAST DATES FOR FEE PAYMENT (INTERACTIVE CALENDAR)      */}
      {/* Section 3 from PDF                                        */}
      {/* ========================================================= */}
      <section id="deadlines" className="py-16 sm:py-24 bg-[#faf8f5] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <ScrollEyebrow className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wider uppercase mb-3 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
              <span>ACADEMIC SEMESTER TIMELINES</span>
            </ScrollEyebrow>
            <ScrollHeading className="text-2xl sm:text-4xl font-serif font-semibold text-stone-900 mb-4">
              3. Last Dates for <span className="text-gradient-title font-extrabold">Fee Payment</span>
            </ScrollHeading>
            <ScrollParagraph className="text-stone-600 text-sm sm:text-base">
              The per-semester college fee is payable at the start of each semester according to the institution’s
              payment schedule. Ensure compliance with the institutional deadlines detailed below.
            </ScrollParagraph>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {feeDeadlines.map((item, index) => (
              <motion.div
                key={item.semester}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border-2 shadow-sm hover:shadow-xl transition-all ${item.color}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${item.tagColor}`}>
                      {item.badge}
                    </span>
                    <Clock className="w-4 h-4 text-stone-400" />
                  </div>

                  <h4 className="text-lg sm:text-xl font-serif font-bold text-stone-900 mb-2">
                    {item.semester}
                  </h4>

                  <div className="p-3.5 rounded-2xl bg-stone-900 text-white font-mono font-bold text-base sm:text-lg mb-4 text-center shadow-inner">
                    {item.deadline}
                  </div>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
                    {item.details}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Mandatory Term Compliance
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Institutional Policy Highlights Banner */}
          <div className="rounded-3xl bg-white border border-stone-200 p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-base font-bold text-stone-900 mb-1">
                    Weekend &amp; Holiday Rollover Rule
                  </h5>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    If an official semester fee due date (such as July 15 or December 1) falls on a weekend, second
                    Saturday, or gazetted public holiday, the next official working day is automatically applied.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-base font-bold text-stone-900 mb-1">
                    Management Revision Right
                  </h5>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    The per-semester college fee is payable at the start of each semester according to the institution’s
                    payment schedule. Management reserves the right to change the fee structure with prior notification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. STEP-BY-STEP PAYMENT & VERIFICATION WORKFLOW           */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <ScrollEyebrow className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wider uppercase mb-3 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
              <span>SEAMLESS TRANSFER PROCESS</span>
            </ScrollEyebrow>
            <ScrollHeading className="text-2xl sm:text-4xl font-serif font-semibold text-stone-900 mb-4">
              How to Remit Fees &amp; <span className="text-gradient-title font-extrabold">Verify Your Receipt</span>
            </ScrollHeading>
            <ScrollParagraph className="text-stone-600 text-sm sm:text-base">
              Follow these simple steps when executing your academic fee payments to ensure rapid reconciliation
              and prompt receipt generation.
            </ScrollParagraph>
          </div>

          {/* 4 Process Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative p-6 sm:p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/90 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-orange-600 tracking-wider">
                      STEP {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-stone-900 mb-2">{step.title}</h4>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. FEE ENQUIRIES & ACCOUNTS DESK HELPLINE                */}
      {/* Section 4 from PDF                                        */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-stone-900 via-stone-950 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 border border-stone-800 bg-stone-900/60 backdrop-blur-xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-300 text-xs font-semibold uppercase tracking-wider inline-block mb-4">
                  4. Fee Enquiries Desk
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-4 leading-tight">
                  Need Help with Tuition Fees or <span className="text-gradient-title font-extrabold">Payment Verification?</span>
                </h3>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  For programme tuition fees, fee schedules, educational loan bonafide certificates, or queries
                  regarding payments already completed, contact the college admissions and accounts office directly.
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
                  <a
                    href="tel:+919159499973"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-500 hover:to-rose-500 text-white font-bold shadow-lg shadow-orange-600/30 transition-all hover:scale-102"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Accounts Desk: +91 91594 99973</span>
                  </a>

                  {onOpenAdmissions && (
                    <button
                      type="button"
                      onClick={onOpenAdmissions}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all hover:scale-102 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-orange-400" />
                      <span>Request Fee Breakdown</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="text-xs text-stone-400 uppercase tracking-wider font-semibold block mb-1">
                    Official Admissions &amp; Accounts Phone
                  </span>
                  <a
                    href="tel:+919159499973"
                    className="font-mono text-xl sm:text-2xl font-bold text-orange-400 hover:underline"
                  >
                    +91 91594 99973
                  </a>
                  <p className="text-xs text-stone-400 mt-1">Available Monday to Saturday, 9:00 AM – 5:30 PM</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="text-xs text-stone-400 uppercase tracking-wider font-semibold block mb-1">
                    Official Web Portal
                  </span>
                  <a
                    href="https://www.asetcollege.ac.in/admission/fee-payment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-200 text-xs sm:text-sm hover:text-white hover:underline flex items-center justify-between"
                  >
                    <span className="truncate">asetcollege.ac.in/admission/fee-payment</span>
                    <ExternalLink className="w-4 h-4 shrink-0 text-orange-400 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. FREQUENTLY ASKED QUESTIONS (ACCORDION)                 */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollEyebrow className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wider uppercase mb-3 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
              <span>ANSWERS FOR STUDENTS &amp; PARENTS</span>
            </ScrollEyebrow>
            <ScrollHeading className="text-2xl sm:text-4xl font-serif font-semibold text-stone-900 mb-4">
              Frequently Asked <span className="text-gradient-title font-extrabold">Fee Payment Queries</span>
            </ScrollHeading>
            <ScrollParagraph className="text-stone-600 text-sm sm:text-base">
              Common questions answered regarding payment receipts, educational loan bonafide letters, and banking
              reconciliation.
            </ScrollParagraph>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-stone-200 bg-[#faf8f5] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-100/60 transition-colors"
                  >
                    <span className="font-serif font-semibold text-sm sm:text-base text-stone-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-orange-600' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans border-t border-stone-200/60 pt-4">
                          {faq.answer}
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

      {/* ========================================================= */}
      {/* 8. BOTTOM NAVIGATION STRIP                                */}
      {/* ========================================================= */}
      <section className="py-12 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm">
            <div>
              <h4 className="text-lg font-serif font-bold text-stone-900 mb-1">
                Explore More Admission Information
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-sans">
                Review eligibility criteria, required submission certificates, or start your online application.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {onNavigateToRequirements && (
                <button
                  type="button"
                  onClick={() => onNavigateToRequirements('#requirements-overview')}
                  className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <FileCheck2 className="w-4 h-4 text-orange-600" />
                  <span>Requirements &amp; Documents</span>
                </button>
              )}

              {onNavigateToApplyOnline && (
                <button
                  type="button"
                  onClick={() => onNavigateToApplyOnline('#apply-online')}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-500 hover:to-rose-500 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 shadow-md shadow-orange-600/20"
                >
                  <span>Apply Online 2027–28</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {onNavigateToAdmissions && (
                <button
                  type="button"
                  onClick={() => onNavigateToAdmissions('#admission-overview')}
                  className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Admission Overview</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* MODAL: UPI QR CODE PREVIEW                                */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedQrModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-sm rounded-3xl bg-white p-6 sm:p-8 shadow-2xl text-center"
            >
              <button
                type="button"
                onClick={() => setSelectedQrModal(null)}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 cursor-pointer"
              >
                ✕
              </button>

              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-3">
                <QrCode className="w-6 h-6" />
              </div>

              <h4 className="text-lg font-serif font-bold text-stone-900 mb-1">
                {selectedQrModal.campus}
              </h4>
              <p className="text-xs text-stone-500 mb-4">{selectedQrModal.bank} · UPI QR Payment</p>

              {/* Rendered Visual QR Simulator */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 inline-block mb-4 shadow-inner">
                <svg viewBox="0 0 100 100" className="w-48 h-48 mx-auto" fill="currentColor">
                  {/* Corner Position Detection Squares */}
                  <rect x="10" y="10" width="24" height="24" rx="3" fill="#1c1917" />
                  <rect x="14" y="14" width="16" height="16" rx="2" fill="#ffffff" />
                  <rect x="18" y="18" width="8" height="8" rx="1" fill="#ea580c" />

                  <rect x="66" y="10" width="24" height="24" rx="3" fill="#1c1917" />
                  <rect x="70" y="14" width="16" height="16" rx="2" fill="#ffffff" />
                  <rect x="74" y="18" width="8" height="8" rx="1" fill="#ea580c" />

                  <rect x="10" y="66" width="24" height="24" rx="3" fill="#1c1917" />
                  <rect x="14" y="70" width="16" height="16" rx="2" fill="#ffffff" />
                  <rect x="18" y="74" width="8" height="8" rx="1" fill="#ea580c" />

                  {/* Simulated Data Dots Pattern */}
                  <rect x="40" y="12" width="6" height="6" fill="#1c1917" />
                  <rect x="52" y="12" width="6" height="6" fill="#1c1917" />
                  <rect x="44" y="24" width="8" height="6" fill="#1c1917" />
                  <rect x="12" y="42" width="6" height="6" fill="#1c1917" />
                  <rect x="24" y="44" width="6" height="6" fill="#1c1917" />
                  <rect x="36" y="38" width="6" height="6" fill="#1c1917" />
                  <rect x="48" y="44" width="8" height="8" fill="#ea580c" />
                  <rect x="62" y="40" width="6" height="6" fill="#1c1917" />
                  <rect x="78" y="44" width="6" height="6" fill="#1c1917" />
                  <rect x="40" y="60" width="6" height="6" fill="#1c1917" />
                  <rect x="54" y="58" width="6" height="6" fill="#1c1917" />
                  <rect x="68" y="66" width="6" height="6" fill="#1c1917" />
                  <rect x="80" y="72" width="8" height="8" fill="#1c1917" />
                  <rect x="44" y="76" width="6" height="6" fill="#1c1917" />
                  <rect x="58" y="80" width="6" height="6" fill="#1c1917" />
                </svg>
                <span className="block text-[11px] font-mono text-stone-500 mt-2 font-medium">
                  {selectedQrModal.upiId}
                </span>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => handleCopy(selectedQrModal.upiId, selectedQrModal.upiId)}
                  className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs transition-all shadow-md active:scale-98"
                >
                  {copiedField === selectedQrModal.upiId ? '✓ UPI ID Copied!' : 'Copy UPI ID'}
                </button>
                <a
                  href={`upi://pay?pa=${selectedQrModal.upiId}&pn=ASET%20College`}
                  className="w-full py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs block transition-all"
                >
                  Open in UPI App
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
