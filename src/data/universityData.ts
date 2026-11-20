import {
  Department,
  BannerSlide,
  ProgramMatrixRow,
  AlumniStory,
  PlacementSector,
  AdmissionsStep,
} from '../types/university';

import asetCampusImg from '../assets/images/aset-campus.webp';
import roboticsImg from '../assets/images/dept_biotech_robotics_1794469703091.jpg';
import architectureImg from '../assets/images/dept_design_architecture_1794469703164.jpg';
import businessImg from '../assets/images/dept_global_business_1794469703130.jpg';
import aviationDeptImg from '../assets/images/departments/dept-aviation.jpg';
import logisticsDeptImg from '../assets/images/departments/dept-logistics.jpg';
import safetyDeptImg from '../assets/images/departments/dept-safety.jpg';
import analyticsDeptImg from '../assets/images/departments/dept-analytics.jpg';
import commerceDeptImg from '../assets/images/departments/dept-commerce.jpg';
import hospitalityDeptImg from '../assets/images/departments/dept-hospitality.jpg';

export const PROSPECTUS_PDF_URL =
  '/assets/aistudio/ASET_College___Institutional_Overview___Academic_Prospectus_f153166e.pdf';

export const BANNER_SLIDES: BannerSlide[] = [
  {
    id: 1,
    wordLeft: 'CAREER',
    wordRight: 'READY',
    kicker: 'ADMISSIONS OPEN 2026–2027 • INSTITUTIONAL PROSPECTUS',
    tagline:
      'Build your career with industry-ready education in Aviation, Logistics & Shipping, Fire & Industrial Safety, Business Analytics, Commerce, and Hospitality.',
    departmentFocus: 'ASET College of Science & Technology',
    accentQuote:
      "“Recognized as India's No. 1 Institution for Innovative Course at the International Innovative Summit & Awards (Elevate Global Forums & IIMSAM–UN ECOSOC).”",
    statNumber: '10,000+',
    statLabel: 'Students Enrolled Across Career Disciplines',
    image: asetCampusImg,
  },
  {
    id: 2,
    wordLeft: 'SAFETY',
    wordRight: 'FIRST',
    kicker: 'DEDICATED FIRE & SAFETY LAB • GLOBAL CERTIFICATIONS',
    tagline:
      'Training safety officers, HSE professionals, and emergency response specialists with firefighting tools, PPE, rescue gear, and NEBOSH / IOSH pathways.',
    departmentFocus: 'Fire & Industrial Safety Engineering',
    accentQuote:
      '“6,000+ Fire & Safety alumni working across India and abroad, supported by international alumni networks including the Dubai Alumni Meet.”',
    statNumber: '6,000+',
    statLabel: 'Fire & Safety Alumni Across India & Abroad',
    image: roboticsImg,
  },
  {
    id: 3,
    wordLeft: 'GLOBAL',
    wordRight: 'SCALE',
    kicker: 'ACADEMICALLY SUPPORTED BY ALAGAPPA UNIVERSITY',
    tagline:
      'Combining classroom instruction with practical simulations, monthly industrial visits, mandatory internships, and end-to-end placement support.',
    departmentFocus: 'Aviation, Logistics, Analytics & Commerce',
    accentQuote:
      '“Over 120 academic programs and 60+ career-focused disciplines spanning UG, PG, Diploma, PG Diploma, and international certification pathways.”',
    statNumber: '120+',
    statLabel: 'Academic Programs & 60+ Disciplines',
    image: businessImg,
  },
];

export const DEPARTMENTS: Department[] = [
  {
    id: 'aviation-pilot',
    code: '2.1',
    name: 'Pilot Training, Aviation & Airport Management',
    category: 'aviation',
    degrees: [
      'Pilot Training',
      'B.Sc. Aviation (3 Yrs / Lateral Entry)',
      'BBA Airline & Airport Management',
      'MBA Airline & Airport / Aviation Management',
      'Diploma in Airline & Travel Management',
    ],
    durationSummary: '2–3 Years / Program-based',
    eligibilitySummary: '12th Std (UG & Pilot Training) / Any UG Degree (MBA)',
    focusLabel: 'Core Focus Areas',
    focusItems: [
      'Airport ground operations',
      'Airline management',
      'Aviation safety',
      'Air cargo logistics',
      'Passenger handling',
    ],
    description:
      'Designed for students aspiring to careers in commercial aviation, airline operations, airport management, cargo security, and aviation business. The curriculum combines classroom management principles with in-flight exposure, airport visits, and customer service training.',
    image: aviationDeptImg,
    keyFacilities: [
      'Airport Ground Operations Briefings',
      'In-Flight & Cabin Service Modules',
      'Guided Airport & Cargo Facility Visits',
    ],
    highlightNote:
      'Internships and placements across leading aviation partners including DGCA, Airports Authority of India (AAI), Air India, Air India SATS, Air India Express, Akasa Air, and SpiceJet.',
    courses: [
      {
        code: 'AVN-01',
        title: 'Commercial Aviation & Airline Operations',
        credits: 'UG / MBA',
        description:
          'Foundations of airline scheduling, fleet coordination, passenger handling protocols, and airport terminal workflows.',
      },
      {
        code: 'AVN-02',
        title: 'Air Cargo Logistics & Aviation Safety',
        credits: 'Core Track',
        description:
          'Cargo security procedures, dangerous goods awareness, ramp safety management, and regulatory compliance.',
      },
      {
        code: 'AVN-03',
        title: 'Pilot Training & Travel Management Pathways',
        credits: 'Specialized',
        description:
          'Structured aviation ground principles, in-flight exposure, customer service training, and airport field visits.',
      },
    ],
  },
  {
    id: 'logistics-shipping',
    code: '2.2',
    name: 'Logistics & Shipping',
    category: 'logistics',
    degrees: [
      'BBA in Shipping & Logistics',
      'MBA in Logistics & Shipping / Supply Chain Management',
      'Diploma / Professional Diploma in Shipping & Logistics',
    ],
    durationSummary: '1 Yr (Diploma) / 2 Yrs (MBA) / 3 Yrs (BBA)',
    eligibilitySummary: '12th Std (UG) / Any Degree (MBA)',
    focusLabel: 'Core Focus Areas',
    focusItems: [
      'Supply chain coordination',
      'Multimodal transportation',
      'Warehouse operations',
      'Inventory control',
      'Port systems & international trade',
    ],
    description:
      'Prepares students to manage global supply chains connecting manufacturers, ports, warehouses, freight forwarders, and international markets. Students gain operational familiarity with export-import documentation, customs procedures, and maritime logistics.',
    image: logisticsDeptImg,
    keyFacilities: [
      'Seaport & Container Terminal Visits',
      'Export–Import Documentation Labs',
      'Logistics Warehouse Field Modules',
    ],
    highlightNote:
      'Recruiting and internship partners include Maersk, DHL Supply Chain, MSC, DB Schenker, TVS Supply Chain, NTC Logistics, Delhivery, Haesok Shipping, Vinayak Shipping, and Galleon Shipping.',
    courses: [
      {
        code: 'LOG-01',
        title: 'Global Supply Chain & Multimodal Transportation',
        credits: 'BBA / MBA',
        description:
          'Coordinating freight movement across maritime, air, rail, and road networks connecting global manufacturers and ports.',
      },
      {
        code: 'LOG-02',
        title: 'Export–Import Documentation & Customs Procedures',
        credits: 'Core Track',
        description:
          'Hands-on operational mastery of shipping bills, bills of lading, customs clearance, and international trade compliance.',
      },
      {
        code: 'LOG-03',
        title: 'Warehouse Operations & Inventory Control',
        credits: 'Practical IV',
        description:
          'Warehouse layout optimization, distribution management, and guided industrial visits to active ports and logistics hubs.',
      },
    ],
  },
  {
    id: 'fire-safety',
    code: '2.3',
    name: 'Fire & Industrial Safety',
    category: 'safety',
    degrees: [
      'B.Sc. Fire & Industrial Safety Management (3 Yrs & 2-Yr LE)',
      'M.Sc. Industrial Safety & Hygiene / HSE',
      'MBA Environment & Industrial Safety',
      'Diploma (1 Yr / 3 Yrs) & PG Diploma',
      'Intl. Certifications (NEBOSH, HABC, AOSH, IOSH, Lead Auditor)',
    ],
    durationSummary: '1–3 Years (UG/Diploma) / 2 Years (M.Sc./MBA)',
    eligibilitySummary: '10th Std+ (Diploma), 12th/3-Yr DOTE (B.Sc.), B.E./B.Tech/B.Sc./Any Degree (PG)',
    focusLabel: 'Core Focus Areas',
    focusItems: [
      'Hazard identification',
      'Industrial safety engineering',
      'Fire prevention',
      'Workplace ergonomics',
      'Emergency preparedness',
    ],
    description:
      'Dedicated to training safety officers, HSE professionals, and emergency response specialists. Students train in a dedicated Fire and Safety Lab equipped with firefighting tools, personal protective equipment (PPE), and rescue gear, supplemented by regular fire drills and CPR training.',
    image: safetyDeptImg,
    keyFacilities: [
      'Dedicated Fire & Safety Lab',
      'Firefighting Tools, PPE & Rescue Gear',
      'Regular Fire Drills & CPR Training',
    ],
    highlightNote:
      'Backed by 6,000+ Fire & Safety alumni worldwide, Dubai Alumni Meet networking, and placements at L&T, DLF, Casagrand, SPR Construction, Tenneco Clean Air India, and Swastik Corporation.',
    courses: [
      {
        code: 'FIS-01',
        title: 'Industrial Safety Engineering & Hazard Identification',
        credits: 'B.Sc. / M.Sc.',
        description:
          'Risk assessment methodologies, workplace ergonomics, industrial hygiene, and engineering controls for high-hazard sites.',
      },
      {
        code: 'FIS-02',
        title: 'Fire Prevention, Firefighting & Rescue Drills',
        credits: 'Lab Intensive',
        description:
          'Practical training in the Fire and Safety Lab using PPE, rescue equipment, suppression systems, and CPR response.',
      },
      {
        code: 'FIS-03',
        title: 'International HSE Certification Pathways',
        credits: 'NEBOSH / IOSH',
        description:
          'Preparation aligned with globally recognized safety credentials including NEBOSH, HABC, AOSH, IOSH, and Lead Auditor.',
      },
    ],
  },
  {
    id: 'business-analytics',
    code: '2.4',
    name: 'Business Analytics & Management Studies',
    category: 'management',
    degrees: [
      'MBA in Business Analytics',
      'MBA (HR, Marketing, Systems, Operations, Finance)',
      'B.Sc. Artificial Intelligence',
    ],
    durationSummary: '2 Years (MBA) / 3 Years (B.Sc. AI)',
    eligibilitySummary: 'Any UG Degree (MBA) / 12th Std (UG)',
    focusLabel: 'Target Career Roles',
    focusItems: [
      'Business Analyst',
      'Data Analyst',
      'Reporting Analyst',
      'Analytics Associate',
      'Junior Data Scientist & Market Research Analyst',
    ],
    description:
      'Combines core business administration with quantitative data analytics, business intelligence, and practical capstone projects to prepare graduates for data-driven corporate roles.',
    image: analyticsDeptImg,
    keyFacilities: [
      'Quantitative Analytics & BI Labs',
      '1 Major Project + 2 Mini-Projects (MBA)',
      'Mandatory Summer Internship Track',
    ],
    highlightNote:
      'MBA structure incorporates one major project, two mini-projects, and a summer internship, alongside 12-area structured placement training and tech placements at partners such as Zoho and TTF Technologies.',
    courses: [
      {
        code: 'MGT-01',
        title: 'Quantitative Data Analytics & Business Intelligence',
        credits: 'MBA / B.Sc. AI',
        description:
          'Applied statistical modeling, executive reporting, and data visualization for enterprise decision-making.',
      },
      {
        code: 'MGT-02',
        title: 'Functional Management Specializations',
        credits: 'HR / Mkt / Fin / Ops / Sys',
        description:
          'Cross-functional management mastery across Human Resources, Marketing, Systems, Operations, and Finance.',
      },
      {
        code: 'MGT-03',
        title: 'Capstone Projects & Summer Internship',
        credits: 'Industry Project',
        description:
          'One major corporate project, two mini-projects, and a mandatory summer internship bridging theory and practice.',
      },
    ],
  },
  {
    id: 'school-of-commerce',
    code: '2.5',
    name: 'School of Commerce (CA / CMA / CS / ACCA + B.Com)',
    category: 'commerce',
    degrees: [
      'Integrated B.Com + CA',
      'Integrated B.Com + CMA',
      'Integrated B.Com + CS',
      'Integrated B.Com + ACCA',
    ],
    durationSummary: '3 Years',
    eligibilitySummary: '12th Std',
    focusLabel: 'Target Career Roles',
    focusItems: [
      'Financial Analyst',
      'Tax Consultant',
      'Audit Associate',
      'Corporate Accountant',
      'Finance Associate',
    ],
    description:
      'Integrates undergraduate commerce education with globally recognized professional accounting, taxation, and corporate governance qualifications.',
    image: commerceDeptImg,
    keyFacilities: [
      'Integrated CA / CMA / CS / ACCA Coaching',
      'Corporate Accounting & Tax Workshops',
      'Structured Aptitude & Interview Prep',
    ],
    highlightNote:
      'Combines a 3-year B.Com degree pathway with simultaneous professional coaching for Chartered Accountancy, Cost & Management Accounting, Company Secretaryship, and ACCA.',
    courses: [
      {
        code: 'COM-01',
        title: 'Professional Accounting & Financial Reporting',
        credits: 'B.Com + CA/ACCA',
        description:
          'Integrated undergraduate commerce foundations paired with international and national accounting standards.',
      },
      {
        code: 'COM-02',
        title: 'Direct & Indirect Taxation Practice',
        credits: 'Core Track',
        description:
          'Applied taxation frameworks, compliance workflows, and advisory preparation for Tax Consultant roles.',
      },
      {
        code: 'COM-03',
        title: 'Auditing & Corporate Governance',
        credits: 'CMA / CS Track',
        description:
          'Internal audit procedures, statutory compliance, cost accounting, and corporate governance principles.',
      },
    ],
  },
  {
    id: 'hotel-management',
    code: '2.6',
    name: 'Hotel Management',
    category: 'hospitality',
    degrees: [
      'Professional Hotel Management Degree Pathway',
      'Professional Hotel Management Diploma Pathway',
    ],
    durationSummary: 'Degree & Diploma Pathways',
    eligibilitySummary: '10th / 12th Std (Pathway-dependent)',
    focusLabel: 'Target Career Roles',
    focusItems: [
      'Hotel Operations Executive',
      'Front Office Executive',
      'Food & Beverage Supervisor',
      'Guest Relations Executive',
      'Housekeeping Executive',
    ],
    description:
      'Equips students with operational, culinary, and guest relations expertise for careers in luxury hotels, resorts, airlines, cruise lines, and international tourism.',
    image: hospitalityDeptImg,
    keyFacilities: [
      'Hospitality Operations & Front Office Training',
      'Food & Beverage Service Practice',
      'Guest Relations & Soft Skills Labs',
    ],
    highlightNote:
      'Prepares graduates for operational leadership across luxury hotels, resorts, airline hospitality, cruise lines, and international tourism.',
    courses: [
      {
        code: 'HM-01',
        title: 'Hotel Operations & Front Office Management',
        credits: 'Degree / Diploma',
        description:
          'Guest check-in systems, concierge standards, housekeeping operations, and luxury service etiquette.',
      },
      {
        code: 'HM-02',
        title: 'Food & Beverage Operations & Culinary Craft',
        credits: 'Practical Lab',
        description:
          'Kitchen operations, beverage management, banquet coordination, and hospitality quality assurance.',
      },
      {
        code: 'HM-03',
        title: 'Guest Relations, Cruise & Tourism Hospitality',
        credits: 'Career Track',
        description:
          'Cross-cultural service excellence for resorts, airlines, cruise lines, and global tourism enterprises.',
      },
    ],
  },
];

export const PROGRAM_MATRIX: ProgramMatrixRow[] = [
  {
    department: 'Fire & Industrial Safety',
    programs: 'Diploma in Fire & Industrial Safety',
    duration: '1 Year / 3 Years',
    eligibility: '10th Std & Above',
  },
  {
    department: 'Fire & Industrial Safety',
    programs: 'B.Sc. Fire & Industrial Safety Management',
    duration: '3 Years (2 Yrs LE)',
    eligibility: '12th Std (or 3-Yr DOTE Diploma for LE)',
  },
  {
    department: 'Fire & Industrial Safety',
    programs: 'M.Sc. Industrial Safety & Hygiene / PG Diploma',
    duration: '2 Years / 1 Year',
    eligibility: 'B.E./B.Tech or B.Sc. (Physics/Chemistry/Safety) / Any Degree',
  },
  {
    department: 'Aviation',
    programs: 'B.Sc. Aviation / BBA Airline & Airport Management',
    duration: '3 Years',
    eligibility: '12th Std',
  },
  {
    department: 'Aviation',
    programs: 'MBA in Airline & Airport Management / Pilot Training',
    duration: '2 Years / Program-based',
    eligibility: 'Any UG Degree (12th for Pilot Training)',
  },
  {
    department: 'Logistics & Shipping',
    programs: 'BBA / MBA / Diploma in Shipping & Logistics',
    duration: '3 Yrs / 2 Yrs / 1 Yr',
    eligibility: '12th Std (UG) / Any Degree (MBA)',
  },
  {
    department: 'Management & Analytics',
    programs: 'MBA Business Analytics / MBA (HR, Fin, Mkt, Ops, Sys)',
    duration: '2 Years',
    eligibility: 'Any UG Degree',
  },
  {
    department: 'School of Commerce',
    programs: 'B.Com + CA / CMA / CS / ACCA',
    duration: '3 Years',
    eligibility: '12th Std',
  },
];

export const ADMISSIONS_STEPS: AdmissionsStep[] = [
  {
    step: 'Step 01',
    title: 'Eligibility Verification',
    summary:
      'Submit 10th, 12th, or undergraduate degree marksheets according to program requirements.',
    detail: 'Applies to 2026–2027 academic intakes.',
  },
  {
    step: 'Step 02',
    title: 'Program Guidance',
    summary:
      'Consult admissions counselors on curriculum options, specializations, and fee structures.',
    detail: 'Available online or at Chennai & Coimbatore campuses.',
  },
  {
    step: 'Step 03',
    title: 'Personal Counseling',
    summary:
      'One-on-one academic session with department faculty to map career goals and internships.',
    detail: 'Merit scholarship eligibility assessment included.',
  },
  {
    step: 'Step 04',
    title: 'Enrollment Confirmation',
    summary:
      'Complete registration and receive official admission allotment for the 2026–2027 batch.',
    detail: 'Academically supported by Alagappa University.',
  },
];

export const PLACEMENT_SECTORS: PlacementSector[] = [
  {
    sector: 'Aviation & Airport Services',
    partners: ['Air India', 'Air India SATS', 'Air India Express', 'Akasa Air', 'SpiceJet'],
  },
  {
    sector: 'Logistics, Shipping & Supply Chain',
    partners: [
      'Maersk',
      'DHL Supply Chain',
      'MSC',
      'DB Schenker',
      'TVS Supply Chain',
      'NTC Logistics',
      'Delhivery',
      'Haesok Shipping',
      'Vinayak Shipping',
      'Galleon Shipping',
    ],
  },
  {
    sector: 'Construction, Infrastructure & Manufacturing',
    partners: [
      'DLF',
      'Casagrand',
      'SPR India / SPR Construction',
      'Tenneco Clean Air India',
      'Swastik Corporation',
    ],
  },
  {
    sector: 'Technology & Enterprise',
    partners: ['Zoho', 'TTF Technologies'],
  },
];

export const ALUMNI_STORIES: AlumniStory[] = [
  {
    id: 'alumni-1',
    quote:
      'The hands-on learning and career opportunities at ASET gave me the confidence to prepare for my future.',
    name: 'Nirmal Kumar P.',
    organization: 'DHL Supply Chain Pvt. Ltd.',
  },
  {
    id: 'alumni-2',
    quote:
      'ASET provided me with practical knowledge and valuable guidance that prepared me well for the professional world.',
    name: 'Sushmitha',
    organization: 'SpiceJet Limited',
  },
  {
    id: 'alumni-3',
    quote:
      'My MBA in Logistics & Shipping gave me a strong understanding of export processes and documentation. Today, I apply those skills every day in my role as an Export Documentation Executive.',
    name: 'Meharaj S.',
    organization: 'Galleon Shipping Agencies Sdn Bhd',
  },
  {
    id: 'alumni-4',
    quote:
      'I have been placed as a Safety Officer at SPR Construction through the campus placement drive. The college fulfilled its commitment by arranging on-campus placement in a reputed company.',
    name: 'J. Jeeva',
    organization: 'Safety Officer, SPR Construction',
  },
];

export const INDUSTRIAL_VISIT_PARTNERS = [
  'Airports & Seaports',
  'Logistics Warehouses',
  'ISRO Facilities',
  'Global Infocity',
  'SRF',
  'Hatsun Agro',
  'Welspun',
  'APPL Industries',
];

export const PLACEMENT_TRAINING_AREAS = [
  'Aptitude',
  'Communication Skills',
  'Group Discussion',
  'Mock Interviews',
  'Leadership',
  'Soft Skills',
];
