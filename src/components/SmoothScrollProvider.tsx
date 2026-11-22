import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * Ultra-Smooth Hardware-Accelerated Momentum Scroll Engine (Lenis).
 * 
 * Features:
 * 1. 100% Native ProMotion 120Hz Touch on Mobile & Tablet:
 *    Touch devices retain native kinetic momentum with zero latency.
 * 2. Apple/Linear-Style Momentum on Desktop Mice:
 *    Transforms discrete mouse-wheel steps into fluid, luxurious momentum.
 * 3. Trackpad & Touchpad Integrity:
 *    Windows Precision Touchpads and macOS trackpads glide naturally.
 * 4. Universal Anchor Sync:
 *    All hashtag navigation anchors (#about, #departments, #placements, etc.)
 *    are intercepted and smoothly animated with precise header offset (-84px).
 */
export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect user OS preference for reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      syncTouch: false,
      infinite: false,
    });

    window.__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global anchor link smooth scroll interceptor
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          // Unlock body overflow if any drawer was open
          document.body.style.overflow = '';
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -84,
            duration: 1.15,
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, { capture: true });

    return () => {
      document.removeEventListener('click', handleAnchorClick, { capture: true });
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return <>{children}</>;
};
