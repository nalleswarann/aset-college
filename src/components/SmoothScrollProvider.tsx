import React from 'react';

/**
 * SmoothScrollProvider
 * -------------------------------------------------------------
 * Ultra-fast native scroll provider. Removes artificial wheel-dampening,
 * lerp delays, and delta-clamping so scrolling is 100% instantaneous,
 * responsive, and hardware-accelerated on all devices (mobile, tablet, desktop).
 * ----------------------------------------------------------- */
export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};
