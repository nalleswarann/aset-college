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
import { AboutOverviewPage } from './components/AboutOverviewPage';
import { Department } from './types/university';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [inquiryDepartment, setInquiryDepartment] = useState<string>('');

  // Routing listener for hash and pathname
  useEffect(() => {
    const handleRouteChange = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (
        hash.startsWith('#about') ||
        hash.startsWith('#/about') ||
        path === '/about' ||
        path.startsWith('/about')
      ) {
        setCurrentPage('about');
        if (
          hash &&
          hash !== '#about' &&
          hash !== '#about-overview' &&
          hash !== '#/about'
        ) {
          setTimeout(() => {
            const targetEl = document.querySelector(hash);
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          }, 200);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        setCurrentPage('home');
      }
    };

    handleRouteChange();
    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const handleNavigateToAbout = (targetHash: string = '#about-overview') => {
    window.history.pushState(null, '', targetHash);
    setCurrentPage('about');
    if (targetHash && targetHash !== '#about' && targetHash !== '#about-overview') {
      setTimeout(() => {
        const targetEl = document.querySelector(targetHash);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateToHome = (targetHash: string = '#home') => {
    window.history.pushState(null, '', targetHash);
    setCurrentPage('home');
    if (targetHash && targetHash !== '#home') {
      setTimeout(() => {
        const targetEl = document.querySelector(targetHash);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
    if (currentPage === 'about') {
      handleNavigateToHome('#contact');
      return;
    }
    if (window.__lenis) {
      window.__lenis.scrollTo('#contact', { offset: -84, duration: 1.15 });
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleExploreDepartments = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo('#departments', { offset: -84, duration: 1.15 });
    } else {
      const deptsEl = document.getElementById('departments');
      if (deptsEl) {
        deptsEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleApplyForDepartment = (deptName: string) => {
    setInquiryDepartment(deptName);
    if (window.__lenis) {
      window.__lenis.scrollTo('#contact', { offset: -84, duration: 1.15 });
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#faf8f5] text-stone-900 selection:bg-amber-800 selection:text-white flex flex-col font-body">
        {/* Top Bar Navigation (Always present on both Home and About pages) */}
        <Navbar
          onOpenAdmissions={handleOpenAdmissions}
          onExploreDepartments={handleExploreDepartments}
          onNavigateToAbout={handleNavigateToAbout}
          onNavigateToHome={() => handleNavigateToHome('#home')}
          activeSection={activeSection}
          currentPage={currentPage}
        />

        {/* Main Content: Home sections or Dedicated About Overview */}
        {currentPage === 'about' ? (
          <AboutOverviewPage
            onBackToHome={() => handleNavigateToHome('#home')}
            onOpenAdmissions={handleOpenAdmissions}
            onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
          />
        ) : (
          <main className="flex-1">
            {/* Full-Screen 100vh ASET Hero Banner with Scroll-Triggered Parallax */}
            <AsetHeroBanner
              onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
              onExploreDepartments={handleExploreDepartments}
              onOpenAdmissions={handleOpenAdmissions}
            />

            {/* Quantitative Metric Strip */}
            <SmoothSection className="relative z-30 -mt-20 xs:-mt-24 sm:mt-0">
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

            {/* Our Placement Partners Section */}
            <SmoothSection>
              <CampusLifeSection
                onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
              />
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
        )}

        {/* Institutional Footer (Always present on both Home and About pages) */}
        <Footer
          onOpenAdmissions={handleOpenAdmissions}
          onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
          onNavigateToAbout={handleNavigateToAbout}
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
