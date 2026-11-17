export type DepartmentCategory =
  | 'aviation'
  | 'logistics'
  | 'safety'
  | 'management'
  | 'commerce'
  | 'hospitality';

export interface Department {
  id: string;
  code: string;
  name: string;
  category: DepartmentCategory;
  degrees: string[];
  durationSummary: string;
  eligibilitySummary: string;
  focusLabel: 'Core Focus Areas' | 'Target Career Roles';
  focusItems: string[];
  description: string;
  image: string;
  keyFacilities: string[];
  highlightNote: string;
  courses: {
    code: string;
    title: string;
    credits: string;
    description: string;
  }[];
}

export interface BannerSlide {
  id: number;
  wordLeft: string;
  wordRight: string;
  kicker: string;
  tagline: string;
  departmentFocus: string;
  accentQuote: string;
  statNumber: string;
  statLabel: string;
  image: string;
}

export interface ProgramMatrixRow {
  department: string;
  programs: string;
  duration: string;
  eligibility: string;
}

export interface AlumniStory {
  id: string;
  quote: string;
  name: string;
  organization: string;
}

export interface PlacementSector {
  sector: string;
  partners: string[];
}

export interface AdmissionsStep {
  step: string;
  title: string;
  summary: string;
  detail: string;
}
