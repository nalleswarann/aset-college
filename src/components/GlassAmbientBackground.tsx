import React from 'react';

/**
 * GlassAmbientBackground
 * -------------------------------------------------------------
 * Ultra-smooth, 120fps hardware-accelerated animated glass backdrop.
 * Floats organic Gaussian-blurred luminous color orbs in signature
 * ASET brand colors (warm amber, radiant orange, sunset rose, apricot)
 * beneath a frosted architectural glass diffusion layer.
 *
 * Uses ONLY transform: translate3d (GPU composited) with static
 * high-radius Gaussian blur to ensure ZERO scroll lag on any device.
 * ----------------------------------------------------------- */
export const GlassAmbientBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-50 overflow-hidden select-none"
    >
      {/* 1. Underlying Base Canvas */}
      <div className="absolute inset-0 bg-[#faf8f5]" />

      {/* 2. Fluid Organic Luminous Color Orbs (Gaussian Blurred) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orb 1: Vibrant Brand Orange to Amber (Top Left) */}
        <div className="absolute -top-[12vw] -left-[12vw] w-[58vw] h-[58vw] max-w-[850px] max-h-[850px] min-w-[340px] min-h-[340px] rounded-full bg-gradient-to-br from-orange-500/35 via-amber-500/28 to-rose-400/20 blur-[90px] sm:blur-[120px] md:blur-[150px] animate-glass-color-orb-1 transform-gpu" />

        {/* Orb 2: Golden Sunlight & Warm Amber (Top Right) */}
        <div className="absolute top-[4vh] -right-[14vw] w-[52vw] h-[52vw] max-w-[780px] max-h-[780px] min-w-[320px] min-h-[320px] rounded-full bg-gradient-to-bl from-amber-400/38 via-orange-400/26 to-yellow-300/22 blur-[90px] sm:blur-[120px] md:blur-[150px] animate-glass-color-orb-2 transform-gpu" />

        {/* Orb 3: Sunset Peach, Crimson Rose & Honey (Center Mid-Screen) */}
        <div className="absolute top-[38vh] left-[22vw] w-[50vw] h-[50vw] max-w-[720px] max-h-[720px] min-w-[300px] min-h-[300px] rounded-full bg-gradient-to-tr from-rose-500/26 via-orange-400/28 to-amber-300/22 blur-[90px] sm:blur-[120px] md:blur-[150px] animate-glass-color-orb-3 transform-gpu" />

        {/* Orb 4: Deep Copper & Warm Orange (Bottom Left) */}
        <div className="absolute -bottom-[14vw] -left-[10vw] w-[55vw] h-[55vw] max-w-[820px] max-h-[820px] min-w-[320px] min-h-[320px] rounded-full bg-gradient-to-tr from-orange-600/32 via-rose-500/22 to-amber-400/26 blur-[90px] sm:blur-[120px] md:blur-[150px] animate-glass-color-orb-4 transform-gpu" />

        {/* Orb 5: Radiant Gold & Warm Sunset Glow (Bottom Right) */}
        <div className="absolute -bottom-[10vw] -right-[12vw] w-[52vw] h-[52vw] max-w-[760px] max-h-[760px] min-w-[300px] min-h-[300px] rounded-full bg-gradient-to-tl from-amber-500/32 via-orange-400/26 to-rose-400/22 blur-[90px] sm:blur-[120px] md:blur-[150px] animate-glass-color-orb-5 transform-gpu" />
      </div>

      {/* 3. Frosted Architectural Glass Veil Layer */}
      <div className="absolute inset-0 bg-[#faf8f5]/72 backdrop-blur-[35px] sm:backdrop-blur-[50px] md:backdrop-blur-[65px]" />

      {/* 4. Subtle Specular Sheen (Natural Glass Reflection) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-white/20" />

      {/* 5. Tactile Micro-Texture Grid for Physical Depth */}
      <div
        className="absolute inset-0 opacity-[0.022] mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(rgba(0,0,0,0.4) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
};
