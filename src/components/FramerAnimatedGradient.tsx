import React from 'react';

interface FramerAnimatedGradientProps {
  className?: string;
  variant?: 'lava' | 'halo' | 'noise' | 'full';
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  showNoise?: boolean;
}

/**
 * FramerAnimatedGradient
 * Replicates the popular Framer "3 Animated Gradients" component by Saptarshi Nath:
 * 1. Lava / Liquid Gradient: Organic morphing molten blobs with dynamic border-radius and fluid translation.
 * 2. Halo Gradient: Atmospheric soft-breathing radial halo anchored at the bottom-center.
 * 3. Noise Texture: Silky fractal noise overlay for tactile film-grain depth without banding.
 * Responsive, hardware-accelerated, runs continuously at 60-120 FPS.
 */
export const FramerAnimatedGradient: React.FC<FramerAnimatedGradientProps> = ({
  className = '',
  variant = 'full',
  showNoise = true,
}) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none ${className}`}
    >
      {/* ------------------------------------------------------------- */}
      {/* 1. HALO GRADIENT: Atmospheric breathing radial glow anchor   */}
      {/* ------------------------------------------------------------- */}
      {(variant === 'halo' || variant === 'full') && (
        <>
          {/* Main Bottom-Center Atmospheric Halo */}
          <div
            className="absolute -bottom-[35%] left-[5%] sm:left-[15%] w-[90%] sm:w-[70%] h-[80%] rounded-[50%] filter blur-[80px] sm:blur-[110px] animate-framer-halo pointer-events-none opacity-80"
            style={{
              background:
                'radial-gradient(ellipse at bottom center, rgba(220,38,38,0.55) 0%, rgba(127,29,29,0.35) 45%, rgba(69,10,10,0.1) 70%, transparent 85%)',
            }}
          />

          {/* Golden Core Secondary Halo */}
          <div
            className="absolute -bottom-[20%] left-[20%] sm:left-[30%] w-[60%] sm:w-[40%] h-[55%] rounded-[50%] filter blur-[70px] sm:blur-[95px] animate-framer-halo pointer-events-none opacity-70"
            style={{
              animationDelay: '-4s',
              background:
                'radial-gradient(circle at bottom center, rgba(245,158,11,0.45) 0%, rgba(185,28,28,0.3) 50%, transparent 75%)',
            }}
          />
        </>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 2. LAVA / LIQUID GRADIENT: Organic molten morphing blobs      */}
      {/* ------------------------------------------------------------- */}
      {(variant === 'lava' || variant === 'full') && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Molten Liquid Blob 1: Crimson Velvet */}
          <div
            className="absolute -bottom-[10%] left-[-10%] sm:left-[5%] w-[85%] sm:w-[65%] h-[75%] sm:h-[80%] filter blur-[75px] sm:blur-[115px] opacity-75 animate-framer-lava-1 will-change-transform"
            style={{
              background:
                'linear-gradient(135deg, rgba(239,68,68,0.55) 0%, rgba(185,28,28,0.45) 40%, rgba(127,29,29,0.2) 100%)',
            }}
          />

          {/* Molten Liquid Blob 2: Deep Wine & Rose (Counter-Morphing) */}
          <div
            className="absolute -bottom-[15%] right-[-10%] sm:right-[5%] w-[85%] sm:w-[60%] h-[75%] sm:h-[80%] filter blur-[85px] sm:blur-[125px] opacity-70 animate-framer-lava-2 will-change-transform"
            style={{
              animationDelay: '-6s',
              background:
                'linear-gradient(225deg, rgba(225,29,72,0.5) 0%, rgba(153,27,27,0.45) 50%, rgba(69,10,10,0.25) 100%)',
            }}
          />

          {/* Molten Liquid Blob 3: Magma Core (Warm Amber / Gold Glow) */}
          <div
            className="absolute bottom-[5%] left-[25%] sm:left-[35%] w-[50%] sm:w-[35%] h-[45%] sm:h-[50%] filter blur-[60px] sm:blur-[90px] opacity-80 animate-framer-accent will-change-transform"
            style={{
              background:
                'radial-gradient(circle, rgba(251,191,36,0.55) 0%, rgba(217,119,6,0.4) 50%, rgba(185,28,28,0.15) 100%)',
            }}
          />

          {/* Upper Horizon Liquid Drift (Subtle ambient light) */}
          <div
            className="absolute top-[10%] left-[15%] w-[70%] h-[40%] filter blur-[90px] sm:blur-[130px] opacity-40 animate-framer-drift will-change-transform"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(185,28,28,0.35) 0%, rgba(84,12,17,0.2) 60%, transparent 80%)',
            }}
          />
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 3. NOISE GRADIENT: Silky tactile micro-fractal noise overlay  */}
      {/* ------------------------------------------------------------- */}
      {showNoise && (
        <div
          aria-hidden="true"
          className="absolute inset-0 framer-noise-texture mix-blend-overlay opacity-35 pointer-events-none z-10"
        />
      )}
    </div>
  );
};
