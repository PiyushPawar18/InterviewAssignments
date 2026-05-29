"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const awards = [
  {
    name: "Emirates SkyCargo",
    award: "Top Cargo Agents, 2016/17\nTop Cargo Agents, 2005/06",
    logo: "/logos/l1.png",
  },
  {
    name: "Delta Air Lines",
    award: "Top Revenue Performance, 2002",
    logo: "/logos/l2.png",
  },
  {
    name: "MASKargo",
    award: "Mega Tonners, 2006/07",
    logo: "/logos/l3.png",
  },
  {
    name: "CONCOR",
    award: "CONCOR Exim Star, 2003/04",
    logo: "/logos/l4.png",
  },
  {
    name: "Air France",
    award: "Meritorious Performance, 1999/2000",
    logo: "/logos/l1.png",
  },
  {
    name: "Finnair Cargo",
    award: "Top Performance, 2008\nTop Performance, 2007",
    logo: "/logos/l2.png",
  },
  {
    name: "IAG Cargo",
    award: "Significant Support and Contribution, 2007",
    logo: "/logos/l3.png",
  },
  {
    name: "STAT Trade Times",
    award: "International Award for Excellence in Air Cargo, Region India - Winner, 2018",
    logo: "/logos/l4.png",
  },
];

/* ── Single award card with mouse-tracking glow border ── */
const AwardCard = ({ award, index }) => {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
      viewport={{ once: true, margin: "-40px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative rounded-2xl p-6 flex flex-col gap-5 cursor-pointer overflow-hidden transition-colors duration-300 border-2 border-gray-200 items-center justify-center text-center shadow-xl"
      style={{
        backgroundColor: hovered ? "#f1f1f1" : "#ffffff",
      }}
    >

      {/* Logo */}
      <div className=" flex items-center mx-auto w-[50%]">
        <img src={award.logo} alt={`${award.name} Logo`} className="object-contain w-full" />
      </div>
      <div >{award.award}</div>
    </motion.div>
  );
};

/* ── Root component ── */
export default function AwardsSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span className="text-xl border border-slate-300 rounded-full px-4 py-1 text-black">
              Awards
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl leading-12 tracking-tight">
            <span className="text-slate-900">Proudly Recognized with Prestigious </span>
            <br />
            <span className="text-gray-500">Awards and Accolades.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {awards.map((award, i) => (
            <AwardCard key={award.name} award={award} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}