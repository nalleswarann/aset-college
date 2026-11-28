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
import { ExaminationCellModal } from './components/ExaminationCellModal';
import { AboutOverviewPage } from './components/AboutOverviewPage';
import { CampusOverviewPage } from './components/CampusOverviewPage';
import { CampusLifeOverviewPage } from './components/CampusLifeOverviewPage';
import { AdmissionOverviewPage } from './components/AdmissionOverviewPage';
import { RequirementOverviewPage } from './components/RequirementOverviewPage';
import { FeePaymentOverviewPage } from './components/FeePaymentOverviewPage';
import { ApplyOnlineOverviewPage } from './components/ApplyOnlineOverviewPage';
import { ExaminationCellOverviewPage } from './components/ExaminationCellOverviewPage';
import { ContactOverviewPage } from './components/ContactOverviewPage';
import { PlacementOverviewPage } from './components/PlacementOverviewPage';
import { Department } from './types/university';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'campuses' | 'life' | 'admissions' | 'requirements' | 'fee-payment' | 'apply-online' | 'examination-cell' | 'contact' | 'placements'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (
        hash.startsWith('#placement') ||
        hash.startsWith('#/placement') ||
        hash.startsWith('#placements') ||
        hash.startsWith('#/placements') ||
        hash.startsWith('#placement-cell') ||
        hash.startsWith('#our-placement-cell') ||
        hash.startsWith('#placement-overview') ||
        path === '/placement' ||
        path.startsWith('/placement') ||
        path === '/placements' ||
        path.startsWith('/placements') ||
        path === '/about/placement' ||
        path.startsWith('/about/placement')
      ) {
        return 'placements';
      }
      if (
        hash.startsWith('#placement') ||
        hash.startsWith('#/placement') ||
        hash.startsWith('#placements') ||
        hash.startsWith('#/placements') ||
        hash.startsWith('#placement-cell') ||
        hash.startsWith('#our-placement-cell') ||
        hash.startsWith('#placement-overview') ||
        path === '/placement' ||
        path.startsWith('/placement') ||
        path === '/placements' ||
        path.startsWith('/placements') ||
        path === '/about/placement' ||
        path.startsWith('/about/placement')
      ) {
        setCurrentPage('placements');
        if (
          hash &&
          hash !== '#placement' &&
          hash !== '#placements' &&
          hash !== '#placement-overview' &&
          hash !== '#placement-cell'
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
      } else if (
        hash.startsWith('#contact') ||
        hash.startsWith('#/contact') ||
        path === '/contact' ||
        path.startsWith('/contact')
      ) {
        return 'contact';
      }
      if (
        hash.startsWith('#examination-cell') ||
        hash.startsWith('#/examination-cell') ||
        hash.startsWith('#exam-cell') ||
        hash.startsWith('#exam') ||
        path === '/examination-cell' ||
        path.startsWith('/examination-cell')
      ) {
        return 'examination-cell';
      }
      if (
        hash.startsWith('#apply-online') ||
        hash.startsWith('#/apply-online') ||
        hash.startsWith('#online-application') ||
        hash.startsWith('#/online-application') ||
        hash.startsWith('#apply') ||
        path === '/apply-online' ||
        path.startsWith('/apply-online') ||
        path === '/online-application' ||
        path.startsWith('/online-application') ||
        path === '/admission/apply' ||
        path.startsWith('/admission/apply')
      ) {
        return 'apply-online';
      }
      if (
        hash.startsWith('#fee-payment') ||
        hash.startsWith('#/fee-payment') ||
        hash.startsWith('#mode-of-fee-payment') ||
        hash.startsWith('#payment-overview') ||
        path === '/fee-payment' ||
        path.startsWith('/fee-payment') ||
        path === '/admission/fee-payment' ||
        path.startsWith('/admission/fee-payment')
      ) {
        return 'fee-payment';
      }
      if (
        hash.startsWith('#requirements') ||
        hash.startsWith('#/requirements') ||
        hash.startsWith('#requirement') ||
        hash.startsWith('#/requirement') ||
        hash.startsWith('#admission/requirements') ||
        hash.startsWith('#/admission/requirements') ||
        path === '/requirements' ||
        path.startsWith('/requirements') ||
        path === '/admission/requirements' ||
        path.startsWith('/admission/requirements')
      ) {
        return 'requirements';
      }
      if (
        hash.startsWith('#admission') ||
        hash.startsWith('#/admission') ||
        hash.startsWith('#admissions') ||
        hash.startsWith('#/admissions') ||
        hash.startsWith('#documents-required') ||
        hash.startsWith('#online-application') ||
        hash.startsWith('#courses-offered') ||
        path === '/admission' ||
        path.startsWith('/admission') ||
        path === '/admissions' ||
        path.startsWith('/admissions')
      ) {
        return 'admissions';
      }
      if (
        hash.startsWith('#life') ||
        hash.startsWith('#/life') ||
        hash.startsWith('#campus-life') ||
        hash.startsWith('#life-at-aset') ||
        hash.startsWith('#gallery') ||
        hash.startsWith('#campus-routine') ||
        hash.startsWith('#day-one') ||
        path === '/campus-life' ||
        path.startsWith('/campus-life') ||
        path === '/life'
      ) {
        return 'life';
      }
      if (
        hash.startsWith('#campuses') ||
        hash.startsWith('#/campuses') ||
        hash.startsWith('#campus') ||
        path === '/campuses' ||
        path.startsWith('/campuses')
      ) {
        return 'campuses';
      }
      if (
        hash.startsWith('#about') ||
        hash.startsWith('#/about') ||
        hash.startsWith('#journal') ||
        hash.startsWith('#iqac') ||
        path === '/about' ||
        path.startsWith('/about')
      ) {
        return 'about';
      }
    }
    return 'home';
  });
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [isExamCellOpen, setIsExamCellOpen] = useState(false);
  const [inquiryDepartment, setInquiryDepartment] = useState<string>('');

  // Routing listener for hash and pathname
  useEffect(() => {
    const handleRouteChange = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();

      if (
        hash.startsWith('#placement') ||
        hash.startsWith('#/placement') ||
        hash.startsWith('#placements') ||
        hash.startsWith('#/placements') ||
        hash.startsWith('#placement-cell') ||
        hash.startsWith('#our-placement-cell') ||
        hash.startsWith('#placement-overview') ||
        path === '/placement' ||
        path.startsWith('/placement') ||
        path === '/placements' ||
        path.startsWith('/placements') ||
        path === '/about/placement' ||
        path.startsWith('/about/placement')
      ) {
        setCurrentPage('placements');
        if (
          hash &&
          hash !== '#placement' &&
          hash !== '#placements' &&
          hash !== '#placement-overview' &&
          hash !== '#placement-cell'
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
      } else if (
        hash.startsWith('#contact') ||
        hash.startsWith('#/contact') ||
        path === '/contact' ||
        path.startsWith('/contact')
      ) {
        setCurrentPage('contact');
        if (
          hash &&
          hash !== '#contact' &&
          hash !== '#/contact' &&
          hash !== '#contact-overview'
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
      } else if (
        hash.startsWith('#examination-cell') ||
        hash.startsWith('#/examination-cell') ||
        hash.startsWith('#exam-cell') ||
        hash.startsWith('#exam') ||
        path === '/examination-cell' ||
        path.startsWith('/examination-cell')
      ) {
        setCurrentPage('examination-cell');
        if (
          hash &&
          hash !== '#examination-cell' &&
          hash !== '#/examination-cell' &&
          hash !== '#exam-cell' &&
          hash !== '#exam'
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
      } else if (
        hash.startsWith('#apply-online') ||
        hash.startsWith('#/apply-online') ||
        hash.startsWith('#online-application') ||
        hash.startsWith('#/online-application') ||
        hash.startsWith('#apply') ||
        path === '/apply-online' ||
        path.startsWith('/apply-online') ||
        path === '/online-application' ||
        path.startsWith('/online-application') ||
        path === '/admission/apply' ||
        path.startsWith('/admission/apply')
      ) {
        setCurrentPage('apply-online');
        if (
          hash &&
          hash !== '#apply-online' &&
          hash !== '#/apply-online' &&
          hash !== '#online-application' &&
          hash !== '#apply'
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
      } else if (
        hash.startsWith('#fee-payment') ||
        hash.startsWith('#/fee-payment') ||
        hash.startsWith('#mode-of-fee-payment') ||
        hash.startsWith('#payment-overview') ||
        path === '/fee-payment' ||
        path.startsWith('/fee-payment') ||
        path === '/admission/fee-payment' ||
        path.startsWith('/admission/fee-payment')
      ) {
        setCurrentPage('fee-payment');
        if (
          hash &&
          hash !== '#fee-payment' &&
          hash !== '#/fee-payment' &&
          hash !== '#mode-of-fee-payment' &&
          hash !== '#payment-overview'
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
      } else if (
        hash.startsWith('#requirements') ||
        hash.startsWith('#/requirements') ||
        hash.startsWith('#requirement') ||
        hash.startsWith('#/requirement') ||
        hash.startsWith('#admission/requirements') ||
        hash.startsWith('#/admission/requirements') ||
        path === '/requirements' ||
        path.startsWith('/requirements') ||
        path === '/admission/requirements' ||
        path.startsWith('/admission/requirements')
      ) {
        setCurrentPage('requirements');
        if (
          hash &&
          hash !== '#requirements' &&
          hash !== '#requirements-overview' &&
          hash !== '#requirement' &&
          hash !== '#/requirements'
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
      } else if (
        hash.startsWith('#admission') ||
        hash.startsWith('#/admission') ||
        hash.startsWith('#admissions') ||
        hash.startsWith('#/admissions') ||
        hash.startsWith('#documents-required') ||
        hash.startsWith('#fee-payment') ||
        hash.startsWith('#online-application') ||
        hash.startsWith('#courses-offered') ||
        path === '/admission' ||
        path.startsWith('/admission') ||
        path === '/admissions' ||
        path.startsWith('/admissions')
      ) {
        setCurrentPage('admissions');
        if (
          hash &&
          hash !== '#admission' &&
          hash !== '#admissions' &&
          hash !== '#admission-overview' &&
          hash !== '#/admission' &&
          hash !== '#/admissions'
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
      } else if (
        hash.startsWith('#life') ||
        hash.startsWith('#/life') ||
        hash.startsWith('#campus-life') ||
        hash.startsWith('#life-at-aset') ||
        hash.startsWith('#gallery') ||
        hash.startsWith('#campus-routine') ||
        hash.startsWith('#day-one') ||
        path === '/campus-life' ||
        path.startsWith('/campus-life') ||
        path === '/life'
      ) {
        setCurrentPage('life');
        if (
          hash &&
          hash !== '#life' &&
          hash !== '#life-overview' &&
          hash !== '#campus-life' &&
          hash !== '#life-at-aset'
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
      } else if (
        hash.startsWith('#campuses') ||
        hash.startsWith('#/campuses') ||
        hash.startsWith('#campus') ||
        path === '/campuses' ||
        path.startsWith('/campuses')
      ) {
        setCurrentPage('campuses');
        if (
          hash &&
          hash !== '#campuses' &&
          hash !== '#campuses-overview' &&
          hash !== '#campus-overview' &&
          hash !== '#/campuses'
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
      } else if (
        hash.startsWith('#about') ||
        hash.startsWith('#/about') ||
        hash.startsWith('#journal') ||
        hash.startsWith('#iqac') ||
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
        if (hash && hash !== '#home') {
          setTimeout(() => {
            const targetEl = document.querySelector(hash);
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          }, 200);
        }
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

  const handleNavigateToApplyOnline = (targetHash: string = '#apply-online') => {
    window.history.pushState(null, '', targetHash);
    setCurrentPage('apply-online');
    if (
      targetHash &&
      targetHash !== '#apply-online' &&
      targetHash !== '#/apply-online' &&
      targetHash !== '#online-application' &&
      targetHash !== '#apply'
    ) {
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

  const handleNavigateToExamCell = (targetHash: string = '#examination-cell') => {
    window.history.pushState(null, '', targetHash);
    setCurrentPage('examination-cell');
    if (
      targetHash &&
      targetHash !== '#examination-cell' &&
      targetHash !== '#/examination-cell' &&
      targetHash !== '#exam-cell' &&
      targetHash !== '#exam'
    ) {
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

  const handleNavigateToContact = (targetHash: string = '#contact') => {
    window.history.pushState(null, '', targetHash);
    setCurrentPage('contact');
    if (
      targetHash &&
      targetHash !== '#contact' &&
      targetHash !== '#/contact' &&
      targetHash !== '#contact-overview'
    ) {
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

  const handleNavigateToPlacements = (targetHash: string = '#placement-overview') => {
    window.history.pushState(null, '', targetHash);
    setCurrentPage('placements');
    if (
      targetHash &&
      targetHash !== '#placement' &&
      targetHash !== '#placements' &&
      targetHash !== '#placement-overview' &&
      targetHash !== '#placement-cell'
    ) {
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

  const handleNavigateToFeePayment = (targetHash: string = '#fee-payment') => {
    window.history.pushState(null, '', targetHash);
    setCurrentPage('fee-payment');
    if (
      targetHash &&
      targetHash !== '#fee-payment' &&
      targetHash !== '#/fee-payment' &&
      targetHash !== '#mode-of-fee-payment' &&
      targetHash !== '#payment-overview'
    ) {
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

  const handleNavigateToRequirements = (targetHash: string = '#requirements-overview') => {
    window.history.pushState(null, '', targetHash);
    setCurrentPage('requirements');
    if (
      targetHash &&
      targetHash !== '#requirements' &&
      targetHash !== '#requirements-overview' &&
      targetHash !== '#requirement' &&
      targetHash !== '#/requirements'
    ) {
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

  const handleNavigateToAdmissions = (targetHash: string = '#admission-overview') => {
    window.history.pushState(null, '', targetHash);
    setCurrentPage('admissions');
    if (
      targetHash &&
      targetHash !== '#admission' &&
      targetHash !== '#admissions' &&
      targetHash !== '#admission-overview'
    ) {
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

  const handleNavigateToLife = (targetHash: string = '#life-overview') => {
    window.history.pushState(null, '', targetHash);
    setCurrentPage('life');
    if (
      targetHash &&
      targetHash !== '#life' &&
      targetHash !== '#life-overview' &&
      targetHash !== '#campus-life'
    ) {
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

  const handleNavigateToCampuses = (targetHash: string = '#campuses-overview') => {
    window.history.pushState(null, '', targetHash);
    setCurrentPage('campuses');
    if (
      targetHash &&
      targetHash !== '#campuses' &&
      targetHash !== '#campuses-overview' &&
      targetHash !== '#campus-overview'
    ) {
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
        {/* Top Bar Navigation (Always present across Home, About, Campus, and Life pages) */}
        <Navbar
          onOpenAdmissions={handleOpenAdmissions}
          onExploreDepartments={handleExploreDepartments}
          onNavigateToAbout={handleNavigateToAbout}
          onNavigateToCampuses={handleNavigateToCampuses}
          onNavigateToLife={handleNavigateToLife}
          onNavigateToAdmissions={handleNavigateToAdmissions}
          onNavigateToRequirements={handleNavigateToRequirements}
          onNavigateToFeePayment={handleNavigateToFeePayment}
          onNavigateToApplyOnline={handleNavigateToApplyOnline}
          onNavigateToExamCell={handleNavigateToExamCell}
          onNavigateToPlacements={handleNavigateToPlacements}
          onNavigateToContact={handleNavigateToContact}
          onNavigateToHome={() => handleNavigateToHome('#home')}
          onSelectDepartment={(dept) => {
            if (currentPage !== 'home') {
              handleNavigateToHome('#departments');
            }
            setSelectedDepartment(dept);
          }}
          onOpenExamCell={() => setIsExamCellOpen(true)}
          activeSection={activeSection}
          currentPage={currentPage}
        />

        {/* Main Content: Home sections, Dedicated About, Campuses, Campus Life, Admissions, or Requirements */}
        {currentPage === 'about' ? (
          <AboutOverviewPage
            onBackToHome={() => handleNavigateToHome('#home')}
            onOpenAdmissions={handleOpenAdmissions}
            onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
            onNavigateToCampuses={handleNavigateToCampuses}
            onNavigateToLife={handleNavigateToLife}
          />
        ) : currentPage === 'campuses' ? (
          <CampusOverviewPage
            onBackToHome={() => handleNavigateToHome('#home')}
            onOpenAdmissions={handleOpenAdmissions}
            onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
            onNavigateToAbout={handleNavigateToAbout}
            onNavigateToLife={handleNavigateToLife}
          />
        ) : currentPage === 'life' ? (
          <CampusLifeOverviewPage
            onBackToHome={() => handleNavigateToHome('#home')}
            onOpenAdmissions={handleOpenAdmissions}
            onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
            onNavigateToAbout={handleNavigateToAbout}
            onNavigateToCampuses={handleNavigateToCampuses}
          />
        ) : currentPage === 'admissions' ? (
          <AdmissionOverviewPage
            onBackToHome={() => handleNavigateToHome('#home')}
            onOpenAdmissions={handleOpenAdmissions}
            onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
            onNavigateToAbout={handleNavigateToAbout}
            onNavigateToCampuses={handleNavigateToCampuses}
            onNavigateToLife={handleNavigateToLife}
          />
        ) : currentPage === 'requirements' ? (
          <RequirementOverviewPage
            onBackToHome={() => handleNavigateToHome('#home')}
            onOpenAdmissions={handleOpenAdmissions}
            onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
            onNavigateToAbout={handleNavigateToAbout}
            onNavigateToCampuses={handleNavigateToCampuses}
            onNavigateToLife={handleNavigateToLife}
            onNavigateToAdmissions={handleNavigateToAdmissions}
            onNavigateToApplyOnline={handleNavigateToApplyOnline}
          />
        ) : currentPage === 'fee-payment' ? (
          <FeePaymentOverviewPage
            onBackToHome={() => handleNavigateToHome('#home')}
            onOpenAdmissions={handleOpenAdmissions}
            onNavigateToAbout={handleNavigateToAbout}
            onNavigateToCampuses={handleNavigateToCampuses}
            onNavigateToLife={handleNavigateToLife}
            onNavigateToAdmissions={handleNavigateToAdmissions}
            onNavigateToRequirements={handleNavigateToRequirements}
            onNavigateToApplyOnline={handleNavigateToApplyOnline}
          />
        ) : currentPage === 'apply-online' ? (
          <ApplyOnlineOverviewPage
            onBackToHome={() => handleNavigateToHome('#home')}
            onOpenAdmissions={handleOpenAdmissions}
            onNavigateToAbout={handleNavigateToAbout}
            onNavigateToCampuses={handleNavigateToCampuses}
            onNavigateToLife={handleNavigateToLife}
            onNavigateToAdmissions={handleNavigateToAdmissions}
            onNavigateToRequirements={handleNavigateToRequirements}
            onNavigateToFeePayment={handleNavigateToFeePayment}
          />
        ) : currentPage === 'examination-cell' ? (
          <ExaminationCellOverviewPage
            onBackToHome={() => handleNavigateToHome('#home')}
            onOpenAdmissions={handleOpenAdmissions}
            onNavigateToAbout={handleNavigateToAbout}
            onNavigateToCampuses={handleNavigateToCampuses}
            onNavigateToLife={handleNavigateToLife}
            onNavigateToAdmissions={handleNavigateToAdmissions}
            onNavigateToRequirements={handleNavigateToRequirements}
            onNavigateToFeePayment={handleNavigateToFeePayment}
            onNavigateToApplyOnline={handleNavigateToApplyOnline}
          />
        ) : currentPage === 'contact' ? (
          <ContactOverviewPage
            onBackToHome={() => handleNavigateToHome('#home')}
            onOpenAdmissions={handleOpenAdmissions}
            onNavigateToAbout={handleNavigateToAbout}
            onNavigateToCampuses={handleNavigateToCampuses}
            onNavigateToLife={handleNavigateToLife}
            onNavigateToAdmissions={handleNavigateToAdmissions}
            onNavigateToRequirements={handleNavigateToRequirements}
            onNavigateToFeePayment={handleNavigateToFeePayment}
            onNavigateToApplyOnline={handleNavigateToApplyOnline}
            initialDepartment={inquiryDepartment}
          />
        ) : currentPage === 'placements' ? (
          <PlacementOverviewPage
            onBackToHome={() => handleNavigateToHome('#home')}
            onOpenAdmissions={handleOpenAdmissions}
            onNavigateToAbout={handleNavigateToAbout}
            onNavigateToCampuses={handleNavigateToCampuses}
            onNavigateToLife={handleNavigateToLife}
            onNavigateToAdmissions={handleNavigateToAdmissions}
            onNavigateToRequirements={handleNavigateToRequirements}
            onNavigateToFeePayment={handleNavigateToFeePayment}
            onNavigateToApplyOnline={handleNavigateToApplyOnline}
            onNavigateToExamCell={handleNavigateToExamCell}
            onNavigateToContact={handleNavigateToContact}
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
                onNavigateToPlacements={() => handleNavigateToPlacements('#placement-overview')}
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

        {/* Institutional Footer (Always present on Home, About, Campus, Life, and Admissions pages) */}
        <Footer
          onOpenAdmissions={handleOpenAdmissions}
          onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
          onNavigateToAbout={handleNavigateToAbout}
          onNavigateToCampuses={handleNavigateToCampuses}
          onNavigateToLife={handleNavigateToLife}
          onNavigateToAdmissions={handleNavigateToAdmissions}
          onNavigateToRequirements={handleNavigateToRequirements}
          onNavigateToFeePayment={handleNavigateToFeePayment}
          onNavigateToApplyOnline={handleNavigateToApplyOnline}
          onNavigateToExamCell={handleNavigateToExamCell}
          onNavigateToPlacements={handleNavigateToPlacements}
          onNavigateToContact={handleNavigateToContact}
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

        {/* Interactive Examination Cell (COE) Modal */}
        <ExaminationCellModal
          isOpen={isExamCellOpen}
          onClose={() => setIsExamCellOpen(false)}
        />
      </div>
    </SmoothScrollProvider>
  );
}
