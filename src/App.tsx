import React, { useState, useEffect } from 'react';
import { SmoothScrollProvider } from './components/SmoothScrollProvider';
import { Navbar } from './components/Navbar';
import { AsetHeroBanner } from './components/AsetHeroBanner';
import { SmoothSection } from './components/SmoothSection';
import { KeyMetricsBar } from './components/KeyMetricsBar';
import { StudentSpotlightSection } from './components/StudentSpotlightSection';
import { WhatWeStandForSection } from './components/WhatWeStandForSection';
import { InstitutionalGradeSection } from './components/InstitutionalGradeSection';
import { OurDifferenceSection } from './components/OurDifferenceSection';
import { AboutSection } from './components/AboutSection';
import { AdmissionsProcessSection } from './components/AdmissionsProcessSection';
import { DepartmentSection } from './components/DepartmentSection';
import { CampusLifeSection } from './components/CampusLifeSection';
import { LifeAtAsetSection } from './components/LifeAtAsetSection';
import { SponsorsSection } from './components/SponsorsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CurriculumModal } from './components/CurriculumModal';
import { VirtualTourModal } from './components/VirtualTourModal';
import { Department } from './types/university';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [inquiryDepartment, setInquiryDepartment] = useState<string>('');

  // Scroll spy to highlight active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'departments', 'testimonials', 'placements', 'sponsors', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenAdmissions = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreDepartments = () => {
    const deptsEl = document.getElementById('departments');
    if (deptsEl) {
      deptsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyForDepartment = (deptName: string) => {
    setInquiryDepartment(deptName);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#faf8f5] text-stone-900 selection:bg-amber-800 selection:text-white flex flex-col font-body">
      {/* Top Bar Navigation (Transparent over Hero, Frosted Navy on Scroll) */}
      <Navbar
        onOpenAdmissions={handleOpenAdmissions}
        onExploreDepartments={handleExploreDepartments}
        activeSection={activeSection}
      />

      {/* Main Experience */}
      <main className="flex-1">
        {/* Full-Screen 100vh ASET Hero Banner with Scroll-Triggered Parallax */}
        <AsetHeroBanner
          onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
          onExploreDepartments={handleExploreDepartments}
          onOpenAdmissions={handleOpenAdmissions}
        />

        {/* Quantitative Metric Strip */}
        <SmoothSection>
          <KeyMetricsBar />
        </SmoothSection>

        {/* Student Ambassadors & Gradient Scroll Spotlight */}
        <StudentSpotlightSection
          onOpenAdmissions={handleOpenAdmissions}
          onExploreDepartments={handleExploreDepartments}
        />

        {/* What We Stand For Section (Core Institutional Values) */}
        <WhatWeStandForSection />

        {/* Institutional Grade In All We Do (Horizontal Kinetic Pillar Showcase) */}
        <InstitutionalGradeSection onOpenAdmissions={handleOpenAdmissions} />

        {/* Our Difference / Operational Excellence Kinetic Showcase */}
        <OurDifferenceSection />

        {/* About Section */}
        <SmoothSection>
          <AboutSection />
        </SmoothSection>

        {/* Step-by-Step Admissions Process Section with Animated Traveling Line */}
        <AdmissionsProcessSection onOpenAdmissions={handleOpenAdmissions} />

        {/* Department Section */}
        <DepartmentSection
          onSelectDepartment={(dept) => setSelectedDepartment(dept)}
          onApplyForDepartment={handleApplyForDepartment}
        />

        {/* Alumni Success Stories Section (Verified Placements & Career Journeys) */}
        <SmoothSection>
          <TestimonialsSection />
        </SmoothSection>

        {/* Our Placement Partners Section */}
        <SmoothSection>
          <CampusLifeSection
            onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
          />
        </SmoothSection>

        {/* Life at ASET (Students Feedback with Auto-Moving Cards) */}
        <SmoothSection>
          <LifeAtAsetSection />
        </SmoothSection>

        {/* Global Partners & Sponsors Section */}
        <SmoothSection>
          <SponsorsSection />
        </SmoothSection>

        {/* Contact & Admissions Form */}
        <SmoothSection>
          <ContactSection
            initialDepartment={inquiryDepartment}
          />
        </SmoothSection>
      </main>

      {/* Institutional Footer */}
      <Footer
        onOpenAdmissions={handleOpenAdmissions}
        onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
      />

      {/* Interactive Curriculum & Syllabus Modal */}
      <CurriculumModal
        department={selectedDepartment}
        onClose={() => setSelectedDepartment(null)}
        onApply={handleApplyForDepartment}
      />

      {/* Interactive 360 Campus Tour Modal */}
      <VirtualTourModal
        isOpen={isVirtualTourOpen}
        onClose={() => setIsVirtualTourOpen(false)}
      />
    </div>
  </SmoothScrollProvider>
  );
}
