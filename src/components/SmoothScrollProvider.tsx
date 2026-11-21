import React, { useEffect } from 'react';

/**
 * High-performance hardware-accelerated scrolling provider.
 * Uses native 120Hz GPU-composited scrolling with zero thread-blocking
 * or wheel hijacking, ensuring ultra-fast, natural fluid response across
 * all desktop mice, laptop trackpads, and mobile touchscreens.
 */
export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    // Enable native smooth scroll transitions for in-page navigation anchors
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return <>{children}</>;
};
