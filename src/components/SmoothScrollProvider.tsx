import React, { useEffect } from 'react';

/**
 * Modern hardware-accelerated momentum smooth scrolling provider.
 * Eliminates mouse wheel jitter and notch-stutter on desktop, providing
 * 60fps/120fps liquid gliding without lagging or stuttering.
 * 
 * Automatically leaves mobile and tablet touchscreens completely untouched
 * to preserve native 120Hz ProMotion inertial physics with zero touch latency.
 */
export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    // Only activate for fine pointer devices (desktop mice / trackpads)
    // Never hijack touchscreens (phones / tablets)
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    let currentY = window.scrollY;
    let targetY = window.scrollY;
    let isRunning = false;
    let rafId: number | null = null;

    // Optimal damping factor: 0.088 provides luxurious fluid momentum without sluggish lag
    const LERP = 0.088;

    const onWheel = (e: WheelEvent) => {
      // Do not hijack if user is scrolling inside an internal scrollable container (e.g. modal)
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

      // Normalize wheel delta across browsers & OS
      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 38; // lines
      if (e.deltaMode === 2) delta *= 750; // pages

      // Clamp delta to prevent massive jumps on fast scroll wheels
      delta = Math.max(-130, Math.min(130, delta * 0.92));

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
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
      if (Math.abs(diff) < 0.5) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        isRunning = false;
        return;
      }

      currentY += diff * LERP;
      window.scrollTo(0, Math.round(currentY * 10) / 10);
      rafId = requestAnimationFrame(updateScroll);
    };

    // Keep targetY in sync if user drags native scrollbar or presses PageDown/Home/End
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
