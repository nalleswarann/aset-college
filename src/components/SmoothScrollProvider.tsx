import React, { useEffect } from 'react';

/**
 * Ultra-Smooth Hardware-Accelerated Momentum Scroll Engine.
 * 
 * Key Physics & Behavioral Architecture:
 * 1. Native Trackpad & Touch Passthrough:
 *    Leaves macOS trackpads, Windows Precision Touchpads, and mobile/tablet
 *    touchscreens completely untouched with native 120Hz/ProMotion physics.
 * 2. Notched Mouse Wheel Glide:
 *    Transforms harsh discrete mouse-wheel steps into fluid, luxurious momentum
 *    using a high-frequency RAF loop with optimal damping (0.14 lerp).
 * 3. Zero Conflict:
 *    Bypasses internal scrollable elements (modals, dropdowns) and passes
 *    'instant' behavior so CSS scroll rules never fight the RAF loop.
 */
export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Mobile & tablet touchscreens: 100% native ProMotion touch physics
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let currentY = window.scrollY;
    let targetY = window.scrollY;
    let isRunning = false;
    let rafId: number | null = null;
    let lastWheelTime = 0;

    // Snappy modern lerp damping: responsive immediate start, silky ease-out
    const LERP = 0.14;

    const onWheel = (e: WheelEvent) => {
      // Never hijack if user is scrolling inside an internal scrollable container (e.g. modal)
      let el = e.target as HTMLElement | null;
      let insideScrollable = false;
      while (el && el !== document.body && el !== document.documentElement) {
        const overflowY = window.getComputedStyle(el).overflowY;
        if (
          (overflowY === 'auto' || overflowY === 'scroll') &&
          el.scrollHeight > el.clientHeight
        ) {
          insideScrollable = true;
          break;
        }
        el = el.parentElement;
      }
      if (insideScrollable) return;

      const now = performance.now();
      const timeDiff = now - lastWheelTime;
      lastWheelTime = now;

      // Trackpad vs Notched Mouse Wheel Detection:
      // Trackpads fire high-frequency events with non-integer or low delta values (< 45px).
      // Notched mouse wheels fire discrete clicks (deltaMode 1 or abs(deltaY) >= 100).
      const isFractional = Math.abs(e.deltaY % 1) > 0.05;
      const isSmallContinuousDelta = Math.abs(e.deltaY) < 45 && timeDiff < 40;
      const isTrackpad = isFractional || isSmallContinuousDelta;

      if (isTrackpad) {
        // Trackpads have superior native OS inertia and 120Hz gesture physics
        // Do not intercept or preventDefault
        targetY = window.scrollY;
        currentY = window.scrollY;
        isRunning = false;
        if (rafId) cancelAnimationFrame(rafId);
        return;
      }

      // Traditional notched mouse wheel: smooth the harsh discrete jumps
      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 36; // Line mode
      if (e.deltaMode === 2) delta *= window.innerHeight; // Page mode

      // Allow natural velocity accumulation without aggressive clamping
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      // Natural proportional dampening
      delta = Math.sign(delta) * Math.min(360, Math.abs(delta) * 1.05);

      targetY = Math.max(0, Math.min(maxScroll, targetY + delta));

      if (!isRunning) {
        isRunning = true;
        currentY = window.scrollY;
        rafId = requestAnimationFrame(updateScroll);
      }

      e.preventDefault();
    };

    const updateScroll = () => {
      const diff = targetY - currentY;
      if (Math.abs(diff) < 0.35) {
        currentY = targetY;
        window.scrollTo({ top: currentY, behavior: 'instant' });
        isRunning = false;
        return;
      }

      currentY += diff * LERP;
      window.scrollTo({ top: Math.round(currentY * 10) / 10, behavior: 'instant' });
      rafId = requestAnimationFrame(updateScroll);
    };

    // Synchronize immediately if user drags native scrollbar or presses PageDown/Home/End
    const onScroll = () => {
      if (!isRunning) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <>{children}</>;
};
