"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "#e8601a";
const BG = "#4a5c6a";

const stats = [
  { value: "7+",    label: "Strategic Domestic Offices" },
  { value: "USA",   label: "Global presence" },
  { value: "200+",  label: "Logistics Experts" },
  { value: "50+",   label: "Awards & Accolades" },
];

/* ── Animated counter for numeric values ── */
const AnimatedStat = ({ value, label, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  // Extract numeric part and suffix
  const numMatch = value.match(/^(\d+)(\D*)$/);
  const isNumeric = !!numMatch;
  const target = isNumeric ? parseInt(numMatch[1]) : null;
  const suffix = isNumeric ? numMatch[2] : "";

  useEffect(() => {
    if (!inView || !isNumeric) {
      setDisplay(value);
      return;
    }
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setDisplay(`${start}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className="flex flex-col gap-2"
    >
      <span className="text-5xl md:text-6xl font-semibold text-white tracking-tight leading-none">
        {inView ? display : (isNumeric ? `0${suffix}` : value)}
      </span>
      <span className="text-white text-sm md:text-2xl font-normal text-nowrap">
        {label}
      </span>
    </motion.div>
  );
};

export default function AchievementsSection() {
  return (
    <section
      className="relative py-24 px-4 md:px-16 overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      {/* ── Background route-line pattern ── */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
        viewBox="0 0 1440 320"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path d="M-100 180 Q200 60 500 180 Q800 300 1100 130 Q1300 40 1540 180" stroke="white" strokeWidth="1.5" />
        <path d="M-100 260 Q300 140 600 260 Q900 380 1200 210 Q1380 120 1540 260" stroke="white" strokeWidth="1" />
        <path d="M0 100 Q250 10 550 100 Q850 190 1100 60 Q1300 -10 1440 80"  stroke="white" strokeWidth="1" />
        {[100, 280, 480, 680, 900, 1080, 1280].map((x, i) => (
          <circle key={i} cx={x} cy={130 + (i % 3) * 45} r="2.5" fill="white" />
        ))}
      </svg>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">

        {/* ── Left: heading + description ── */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="md:w-[44%] shrink-0"
        >
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4 leading-tight"
            style={{ color: ACCENT }}
          >
            Our Achievements
          </h2>
          <p className="text-white text-sm md:text-base leading-relaxed ">
            Over 31+ years of excellence, trusted globally, delivering reliable
            logistics solutions with precision.
          </p>
        </motion.div>

        {/* ── Right: 2×2 stats grid ── */}
        <div className="grid grid-cols-2 gap-x-55 gap-y-12 flex-1 md:-ml-12">
          {stats.map((stat, i) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={0.1 + i * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export function PhilosophySection() {
  return (
    <section
      className="relative py-10 px-4 md:px-16 overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      {/* ── Background route-line pattern ── */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
        viewBox="0 0 1440 320"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path d="M-100 180 Q200 60 500 180 Q800 300 1100 130 Q1300 40 1540 180" stroke="white" strokeWidth="1.5" />
        <path d="M-100 260 Q300 140 600 260 Q900 380 1200 210 Q1380 120 1540 260" stroke="white" strokeWidth="1" />
        <path d="M0 100 Q250 10 550 100 Q850 190 1100 60 Q1300 -10 1440 80" stroke="white" strokeWidth="1" />
        {/* Dot grid on right side */}
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 6 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={1100 + col * 40}
              cy={60 + row * 35}
              r="1.8"
              fill="white"
              opacity="0.6"
            />
          ))
        )}
        {[120, 300, 500, 700, 900].map((x, i) => (
          <circle key={i} cx={x} cy={130 + (i % 3) * 45} r="2.5" fill="white" />
        ))}
      </svg>

      {/* ── Content ── */}
      <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-8">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
          style={{ color: ACCENT }}
        >
          Our Philosophy
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white text-base md:text-lg leading-relaxed"
        >
          Customer satisfaction drives everything we do. Every shipment is a
          promise, and we deliver it with precision, care, and professionalism.
          With expert resources, we ensure safe, timely transport, building
          lasting partnerships founded on trust and excellence.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-10 py-3.5 rounded-lg text-white font-semibold text-sm tracking-wide transition-shadow"
          style={{
            backgroundColor: ACCENT,
            boxShadow: `0 6px 24px ${ACCENT}55`,
          }}
        >
          Read more
        </motion.button>

      </div>
    </section>
  );
}

