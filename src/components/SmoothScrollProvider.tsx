import React, { useEffect } from 'react';

/**
 * Modern hardware-accelerated momentum smooth scrolling provider.
 * Eliminates mouse wheel notch-stutter on desktop mice while preserving:
 * 1. Native 120Hz/60Hz OS trackpad gestures (Mac & Windows Precision Trackpads)
 * 2. Native mobile & tablet touchscreens (Apple ProMotion & Android 120Hz)
 * 3. Native anchor link smooth jumping with zero scroll fighting
 */
export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Never hijack touchscreens (phones, tablets, touch displays)
    const isTouchOnly = window.matchMedia('(pointer: coarse) and (hover: none)').matches;
    if (isTouchOnly) return;

    let currentY = window.scrollY;
    let targetY = window.scrollY;
    let isRunning = false;
    let rafId: number | null = null;

    // Snappy, luxurious fluid lerp rate: 0.14 provides immediate response without lag
    const LERP = 0.14;

    const onWheel = (e: WheelEvent) => {
      // 1. Do not hijack internal scrollable containers (e.g. modals, drawers, code blocks)
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

      // 2. Distinguish between physical notched mouse wheel and continuous trackpad gestures.
      // Trackpads deliver fractional deltaY or rapid small deltas (< 35px in pixel mode).
      // Let trackpads run 100% natively on the OS compositor thread for zero latency!
      const isTrackpad = e.deltaMode === 0 && (!Number.isInteger(e.deltaY) || Math.abs(e.deltaY) < 35);
      if (isTrackpad) {
        if (isRunning) {
          // If a wheel momentum animation was running, stop it and sync
          isRunning = false;
          if (rafId) cancelAnimationFrame(rafId);
          currentY = window.scrollY;
          targetY = window.scrollY;
        }
        return; // Allow native OS trackpad scrolling
      }

      // 3. For notched mouse wheels, smooth the stepped jump
      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 40; // lines mode
      if (e.deltaMode === 2) delta *= 600; // pages mode

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      // Accumulate delta naturally without hard clamping
      targetY = Math.max(0, Math.min(maxScroll, (isRunning ? targetY : window.scrollY) + delta));

      if (!isRunning) {
        isRunning = true;
        currentY = window.scrollY;
        rafId = requestAnimationFrame(updateScroll);
      }

      e.preventDefault();
    };

    const updateScroll = () => {
      const diff = targetY - currentY;
      if (Math.abs(diff) < 0.6) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        isRunning = false;
        return;
      }

      currentY += diff * LERP;
      window.scrollTo(0, Math.round(currentY * 10) / 10);
      rafId = requestAnimationFrame(updateScroll);
    };

    // Keep target in sync on native anchor jumps or scrollbar drags
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
