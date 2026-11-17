import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import asetContainerTruckBody from '../assets/images/aset-container-truck-body.png';

interface LogisticsContainerTruckProps {
  targetRef: React.RefObject<HTMLElement | null>;
}

/**
 * Ultra-crisp, mathematically balanced commercial truck wheel SVG.
 * Center is strictly at (50, 50) within a 100x100 viewBox so rotation around (50% 50%)
 * never wobbles, jumps, or loses circular concentricity on any device or resolution.
 */
const TruckWheelSVG: React.FC = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full select-none pointer-events-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* 3D curved high-grip commercial tyre sidewall */}
      <radialGradient id="tireWallGrad" cx="50%" cy="50%" r="50%">
        <stop offset="65%" stopColor="#383c42" />
        <stop offset="84%" stopColor="#222428" />
        <stop offset="100%" stopColor="#151719" />
      </radialGradient>

      {/* Silver metallic alloy rim gradient */}
      <linearGradient id="alloyRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f4f6fa" />
        <stop offset="45%" stopColor="#cbd0db" />
        <stop offset="80%" stopColor="#9ba1ad" />
        <stop offset="100%" stopColor="#808591" />
      </linearGradient>

      {/* Heavy-duty axle grease dust cap */}
      <radialGradient id="axleHubGrad" cx="44%" cy="44%" r="56%">
        <stop offset="0%" stopColor="#848a96" />
        <stop offset="68%" stopColor="#44474e" />
        <stop offset="100%" stopColor="#25272b" />
      </radialGradient>
    </defs>

    {/* 1. Outer Heavy-Duty Commercial Tyre */}
    <circle cx="50" cy="50" r="49" fill="url(#tireWallGrad)" />
    <circle cx="50" cy="50" r="48" stroke="#181a1d" strokeWidth="1.5" />

    {/* Subtle concentric tread grooves */}
    <circle cx="50" cy="50" r="43.5" stroke="#25282d" strokeWidth="2.5" />
    <circle cx="50" cy="50" r="38.5" stroke="#1d1f23" strokeWidth="1.2" />

    {/* 2. Silver Alloy Rim Flange & Dish */}
    <circle cx="50" cy="50" r="33.5" fill="#676d77" />
    <circle cx="50" cy="50" r="32" fill="url(#alloyRimGrad)" />
    <circle cx="50" cy="50" r="27.5" fill="#9fa4af" />

    {/* 3. 10 Ventilation Cooling Slots around the rim */}
    <g fill="#212327">
      <ellipse cx="76.0" cy="50.0" rx="3.0" ry="1.6" transform="rotate(90 76.0 50.0)" />
      <ellipse cx="71.0" cy="65.3" rx="3.0" ry="1.6" transform="rotate(126 71.0 65.3)" />
      <ellipse cx="58.0" cy="74.7" rx="3.0" ry="1.6" transform="rotate(162 58.0 74.7)" />
      <ellipse cx="42.0" cy="74.7" rx="3.0" ry="1.6" transform="rotate(198 42.0 74.7)" />
      <ellipse cx="29.0" cy="65.3" rx="3.0" ry="1.6" transform="rotate(234 29.0 65.3)" />
      <ellipse cx="24.0" cy="50.0" rx="3.0" ry="1.6" transform="rotate(270 24.0 50.0)" />
      <ellipse cx="29.0" cy="34.7" rx="3.0" ry="1.6" transform="rotate(306 29.0 34.7)" />
      <ellipse cx="42.0" cy="25.3" rx="3.0" ry="1.6" transform="rotate(342 42.0 25.3)" />
      <ellipse cx="58.0" cy="25.3" rx="3.0" ry="1.6" transform="rotate(18 58.0 25.3)" />
      <ellipse cx="71.0" cy="34.7" rx="3.0" ry="1.6" transform="rotate(54 71.0 34.7)" />
    </g>

    {/* 4. Lug Nut Ring (10 Chrome Bolts with Dark Socket Recesses) */}
    <g>
      <circle cx="69.0" cy="56.2" r="2.3" fill="#1e2023" />
      <circle cx="69.0" cy="56.2" r="1.3" fill="#ffffff" />

      <circle cx="61.8" cy="66.2" r="2.3" fill="#1e2023" />
      <circle cx="61.8" cy="66.2" r="1.3" fill="#ffffff" />

      <circle cx="50.0" cy="70.0" r="2.3" fill="#1e2023" />
      <circle cx="50.0" cy="70.0" r="1.3" fill="#ffffff" />

      <circle cx="38.2" cy="66.2" r="2.3" fill="#1e2023" />
      <circle cx="38.2" cy="66.2" r="1.3" fill="#ffffff" />

      <circle cx="31.0" cy="56.2" r="2.3" fill="#1e2023" />
      <circle cx="31.0" cy="56.2" r="1.3" fill="#ffffff" />

      <circle cx="31.0" cy="43.8" r="2.3" fill="#1e2023" />
      <circle cx="31.0" cy="43.8" r="1.3" fill="#ffffff" />

      <circle cx="38.2" cy="33.8" r="2.3" fill="#1e2023" />
      <circle cx="38.2" cy="33.8" r="1.3" fill="#ffffff" />

      <circle cx="50.0" cy="30.0" r="2.3" fill="#1e2023" />
      <circle cx="50.0" cy="30.0" r="1.3" fill="#ffffff" />

      <circle cx="61.8" cy="33.8" r="2.3" fill="#1e2023" />
      <circle cx="61.8" cy="33.8" r="1.3" fill="#ffffff" />

      <circle cx="69.0" cy="43.8" r="2.3" fill="#1e2023" />
      <circle cx="69.0" cy="43.8" r="1.3" fill="#ffffff" />
    </g>

    {/* 5. Center Axle Dust Cap with Seal Ring */}
    <circle cx="50" cy="50" r="11.5" fill="url(#axleHubGrad)" stroke="#1c1e21" strokeWidth="1.2" />
    <circle cx="50" cy="50" r="7.2" fill="#4a4e57" />
    <circle cx="50" cy="50" r="4.8" stroke="#d5d9e2" strokeWidth="0.9" fill="none" />
    <circle cx="50" cy="50" r="2.0" fill="#f4f6fa" />
  </svg>
);

export const LogisticsContainerTruck: React.FC<LogisticsContainerTruckProps> = ({ targetRef }) => {
  // Track scroll through the section to drive the container truck smoothly
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'start 20%'],
  });

  // Spring-smoothed scroll progress for fluid momentum, natural inertia, and silky deceleration
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    mass: 0.5,
  });

  // Clamp progress strictly between 0 and 1 so it comes to a definitive, stable stop at the end of the border-radius
  const clampedProgress = useTransform(smoothProgress, [0, 1], [0, 1], { clamp: true });

  // Horizontal motion: moves from 0% (start of straight top border) to 100% (end of border-radius)
  const truckLeft = useTransform(clampedProgress, [0, 1], ['0%', '100%']);
  const truckTranslateX = useTransform(clampedProgress, [0, 1], ['0%', '-100%']);

  // Wheel rotation: synchronized with forward rolling motion
  // ~12 full 360-degree rotations across the length of the card
  const wheelRotate = useTransform(clampedProgress, [0, 1], [0, 4320]);

  // Subtle road suspension micro-bounce while rolling along the top border
  const suspensionY = useTransform(
    clampedProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
    [0, -1.0, 0.5, -0.8, 0.6, -0.5, 0.3, 0]
  );

  // Subtle dynamic pitch (cabin tilts down slightly during forward rolling, levels out on stop)
  const truckPitch = useTransform(clampedProgress, [0, 0.08, 0.88, 1], [0, 0.35, 0.3, 0]);

  // Status tag opacity: illuminates gently once the container arrives and stops at the end
  const arrivalBadgeOpacity = useTransform(clampedProgress, [0.88, 1], [0, 1]);

  // Wheel center positions in percentage coordinates of the truck image (810 x 206 aspect ratio)
  // W1: Trailer Rear (107, 183)
  // W2: Trailer Middle (193, 183)
  // W3: Trailer Front (279, 182)
  // W4: Tractor Rear Drive (543, 184)
  // W5: Tractor Front Steer (733, 183)
  const wheels = [
    { id: 'w1', left: '13.21%', top: '88.83%' },
    { id: 'w2', left: '23.83%', top: '88.83%' },
    { id: 'w3', left: '34.44%', top: '88.35%' },
    { id: 'w4', left: '67.04%', top: '89.32%' },
    { id: 'w5', left: '90.49%', top: '88.83%' },
  ];

  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-[calc(100%-2px)] pointer-events-none select-none z-30 px-3 sm:px-6 md:px-8 lg:px-10"
    >
      {/* Runway track across the top border layer */}
      <div className="relative w-full h-11 sm:h-14 md:h-18 lg:h-22">
        {/* Animated Moving Truck Container */}
        <motion.div
          style={{
            left: truckLeft,
            x: truckTranslateX,
            y: suspensionY,
            rotate: truckPitch,
          }}
          className="absolute bottom-0 w-[155px] sm:w-[205px] md:w-[265px] lg:w-[330px] xl:w-[370px] will-change-transform"
        >
          {/* Inner Aspect Ratio Box for the Truck Body & Spinning Wheels */}
          <div className="relative w-full aspect-[810/206]">
            {/* Ground Contact Shadows Beneath Each Wheel on the top rim */}
            {wheels.map((w) => (
              <div
                key={`shadow-${w.id}`}
                style={{
                  left: w.left,
                  bottom: '-2px',
                  width: '6%',
                  height: '3.5px',
                  transform: 'translateX(-50%)',
                }}
                className="absolute rounded-full bg-stone-950/45 blur-[1.5px] pointer-events-none"
              />
            ))}

            {/* Overall Ambient Undercarriage Shadow */}
            <div className="absolute inset-x-4 -bottom-1 h-3 bg-stone-900/25 blur-xs rounded-full pointer-events-none" />

            {/* Layer 1: Spinning Wheels (Positioned at exact wheel well centers) */}
            {/*
              CRUCIAL CENTERING ARCHITECTURE:
              The outer <div> handles static axle position (left, top) and centering (translate(-50%, -50%)).
              The inner <motion.div> handles ONLY rotate: wheelRotate around (50% 50%).
              This decouples translation from rotation, guaranteeing 100% concentric rotation without any wobble!
            */}
            {wheels.map((w) => (
              <div
                key={w.id}
                style={{
                  left: w.left,
                  top: w.top,
                  width: '5.43%',
                  aspectRatio: '1 / 1',
                  transform: 'translate(-50%, -50%)',
                }}
                className="absolute z-10 pointer-events-none"
              >
                <motion.div
                  style={{
                    rotate: wheelRotate,
                    transformOrigin: '50% 50%',
                  }}
                  className="w-full h-full flex items-center justify-center will-change-transform origin-center"
                >
                  <TruckWheelSVG />
                </motion.div>
              </div>
            ))}

            {/* Layer 2: Truck Body (Chassis + Red Cargo Container + Cab + Mudguards) */}
            <div className="relative z-20 w-full h-full">
              <img
                src={asetContainerTruckBody}
                alt="ASET College Logistics & Shipping Container Truck"
                className="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_8px_16px_rgba(0,10,25,0.3)]"
                draggable={false}
              />

              {/* Red Cargo Container ASET Decal Branding */}
              <div className="absolute top-[22%] left-[12%] z-25 flex items-center gap-1.5 opacity-90 select-none">
                <span className="font-mono text-[6px] sm:text-[7px] md:text-[8px] font-extrabold text-white/95 tracking-widest uppercase drop-shadow-xs">
                  ASET LOGISTICS
                </span>
              </div>

              {/* Front Cab Headlight Glow Beam */}
              <div className="absolute top-[68%] right-0 w-8 sm:w-12 md:w-16 h-4 bg-gradient-to-r from-amber-200/50 via-amber-100/20 to-transparent blur-xs rounded-r-full pointer-events-none" />
            </div>

            {/* Arrival Indicator Tag when reaching end of border radius */}
            <motion.div
              style={{ opacity: arrivalBadgeOpacity }}
              className="absolute -top-6 right-0 z-30 hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/20 text-[9px] font-mono font-medium text-amber-300 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Logistics Fleet Arrived</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
