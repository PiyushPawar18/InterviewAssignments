"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ACCENT = "#e8601a";
const BG = "#4a5c6a";

const certifications = [
  {
    name: "GDP Certified",
    logo: (
      <svg width="110" height="90" viewBox="0 0 110 90" fill="none">
        <circle cx="55" cy="45" r="38" stroke="#2a5aa8" strokeWidth="2.5" strokeDasharray="6 3" />
        <circle cx="55" cy="45" r="30" stroke="#2a5aa8" strokeWidth="1.5" />
        <text x="55" y="38" textAnchor="middle" fontSize="22" fontWeight="700" fill="#2a5aa8" fontFamily="serif">GDP</text>
        <text x="55" y="52" textAnchor="middle" fontSize="7" fontWeight="600" fill="#2a5aa8" fontFamily="sans-serif" letterSpacing="2">GOOD DISTRIBUTION</text>
        <text x="55" y="62" textAnchor="middle" fontSize="7" fontWeight="600" fill="#2a5aa8" fontFamily="sans-serif" letterSpacing="2">PRACTICE</text>
        <text x="55" y="75" textAnchor="middle" fontSize="7" fontWeight="600" fill="#2a5aa8" fontFamily="sans-serif" letterSpacing="1.5">CERTIFIED ★</text>
      </svg>
    ),
  },
  {
    name: "ACAAI",
    logo: (
      <svg width="110" height="90" viewBox="0 0 110 90" fill="none">
        <rect x="20" y="15" width="52" height="52" rx="4" fill="#00b5e2" />
        <rect x="28" y="23" width="20" height="36" rx="2" fill="white" opacity="0.9" />
        <rect x="52" y="35" width="12" height="24" rx="2" fill="white" opacity="0.7" />
        <text x="55" y="82" textAnchor="middle" fontSize="9" fontWeight="700" fill="#00b5e2" fontFamily="sans-serif" letterSpacing="1">ACAAI</text>
      </svg>
    ),
  },
  {
    name: "ACFI",
    logo: (
      <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
        <path d="M20 55 A40 40 0 0 1 60 15" stroke="#f4800c" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M60 15 A40 40 0 0 1 100 55" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M100 55 A40 40 0 0 1 20 55" stroke="#138808" strokeWidth="8" strokeLinecap="round" fill="none" />
        <text x="60" y="52" textAnchor="middle" fontSize="16" fontWeight="800" fill="#1a3a6b" fontFamily="sans-serif">ACFI</text>
        <text x="60" y="66" textAnchor="middle" fontSize="5.5" fill="#444" fontFamily="sans-serif" letterSpacing="0.5">AIR CARGO FORUM INDIA</text>
        <text x="60" y="82" textAnchor="middle" fontSize="7.5" fill="#888" fontFamily="sans-serif" fontStyle="italic">Together We Can</text>
      </svg>
    ),
  },
  {
    name: "AerOceaNetwork",
    logo: (
      <svg width="130" height="70" viewBox="0 0 130 70" fill="none">
        <text x="10" y="36" fontSize="28" fontWeight="800" fill="#1a6abf" fontFamily="sans-serif">A</text>
        <circle cx="46" cy="25" r="14" stroke="#1a6abf" strokeWidth="2" fill="none" />
        <ellipse cx="46" cy="25" rx="7" ry="14" stroke="#1a6abf" strokeWidth="1.5" fill="none" />
        <path d="M32 25h28" stroke="#1a6abf" strokeWidth="1.5" />
        <path d="M34 18h24M34 32h24" stroke="#1a6abf" strokeWidth="1" />
        <text x="62" y="36" fontSize="28" fontWeight="800" fill="#1a6abf" fontFamily="sans-serif">N</text>
        <text x="10" y="54" fontSize="10" fill="#1a6abf" fontFamily="sans-serif" fontWeight="600" letterSpacing="0.5">AerOceaNetwork</text>
      </svg>
    ),
  },
  {
    name: "BCHAA",
    logo: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="42" stroke="#1a1a2e" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="34" stroke="#1a1a2e" strokeWidth="1.5" />
        <path d="M50 22 L66 30 L66 50 Q66 64 50 72 Q34 64 34 50 L34 30 Z" fill="#1a1a2e" />
        <path d="M43 48 l5 5 10-10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="50" y="87" textAnchor="middle" fontSize="5" fill="#1a1a2e" fontFamily="sans-serif" letterSpacing="0.8" fontWeight="600">CUSTOM HOUSE AGENTS</text>
      </svg>
    ),
  },
];

/* ── Single Certification Card ── */
const CertificationCard = ({ cert }) => (
  <div
    className="bg-white rounded-2xl flex items-center justify-center p-6 mx-3"
    style={{
      minWidth: "240px",
      minHeight: "240px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
    }}
  >
    {cert.logo}
  </div>
);

export default function CertificationsSection() {
  // Duplicate array 3x for seamless infinite loop
  const scrollItems = [...certifications, ...certifications, ...certifications];

  return (
    <section
      className="relative py-20 px-4 md:px-12 overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      {/* ── Background world-map line pattern ── */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path d="M-100 200 Q200 80 500 200 Q800 320 1100 150 Q1300 60 1540 200" stroke="white" strokeWidth="1.5" />
        <path d="M-100 280 Q300 160 600 280 Q900 400 1200 230 Q1380 140 1540 280" stroke="white" strokeWidth="1" />
        <path d="M0 120 Q250 20 550 120 Q850 220 1100 80 Q1300 0 1440 100" stroke="white" strokeWidth="1" />
        {[120, 300, 500, 700, 900, 1100, 1300].map((x, i) => (
          <circle key={i} cx={x} cy={150 + (i % 3) * 40} r="3" fill="white" />
        ))}
      </svg>

      <div className="relative max-w-[75rem] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: ACCENT }}>
            Certifications
          </h2>
          <p className="text-white text-sm md:text-base max-w-xl mx-auto">
            Certified excellence, ensuring compliance, quality, and global logistics reliability.
          </p>
        </motion.div>

        {/* ── Infinite Horizontal Scroll ── */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center"
            animate={{ x: ["0%", "-33.333%"] }} // Move 1/3 of the tripled array
            transition={{
              duration: 10, // Adjust speed: lower = faster
              ease: "linear",
              repeat: Infinity,
            }}
            onMouseEnter={(e) => e.currentTarget.pauseAnimation?.()}
            onMouseLeave={(e) => e.currentTarget.resumeAnimation?.()}
          >
            {scrollItems.map((cert, i) => (
              <CertificationCard key={`${cert.name}-${i}`} cert={cert} />
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
export function WordsBranchLocationSection() {

  return (
    <section
      className="relative py-10 px-4 md:px-8 overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      {/* ── Background world-map line pattern ── */}
      <svg
        className="absolute inset-0 w-full h-screen opacity-[0.07] pointer-events-none"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path d="M-100 200 Q200 80 500 200 Q800 320 1100 150 Q1300 60 1540 200" stroke="white" strokeWidth="1.5" />
        <path d="M-100 280 Q300 160 600 280 Q900 400 1200 230 Q1380 140 1540 280" stroke="white" strokeWidth="1" />
        <path d="M0 120 Q250 20 550 120 Q850 220 1100 80 Q1300 0 1440 100" stroke="white" strokeWidth="1" />
        {[120, 300, 500, 700, 900, 1100, 1300].map((x, i) => (
          <circle key={i} cx={x} cy={150 + (i % 3) * 40} r="3" fill="white" />
        ))}
      </svg>

      <div className="relative max-w-[75rem] mx-auto ">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center "
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: ACCENT }}>
            Our Global Footprint
          </h2>
          <Image src="/img/google-map.png" alt="Branch Locations" width={1100} height={400} className="mx-auto mt-5"/>
        </motion.div>

      </div>

    </section>
  );
}