"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const row1 = [
  "Tailored Freight Solutions",
  "Robust Load Security",
  "Expert Logistics Support",
  "Tailored Freight Solutions",
  "Robust Load Security",
  "Expert Logistics Support",
  "Tailored Freight Solutions",
  "Robust Load Security",
  "Expert Logistics Support",
];

const row2 = [
  "End-to-End Supply Chain Management",
  "Flexible Shipping Schedules",
  "Volume Discounts",
  "End-to-End Supply Chain Management",
  "Flexible Shipping Schedules",
  "Volume Discounts",
  "End-to-End Supply Chain Management",
  "Flexible Shipping Schedules",
  "Volume Discounts",
];

/* ── Single marquee row ── */
const MarqueeRow = ({ items, direction = "left", x }) => (
  <div className="overflow-hidden border-y border-slate-200 py-0">
    <motion.div
      style={{ x }}
      className="flex whitespace-nowrap will-change-transform"
    >
      {/* Duplicate items so the strip feels infinite */}
      {[...items, ...items, ...items].map((text, i) => (
        <div
          key={i}
          className="flex items-center shrink-0 w-65 border border-slate-100"
        >
          <span className="px-10 py-6 text-sm md:text-xl font-semibold text-black text-center leading-snug inline-block min-w-[150px] text-wrap">
            {text}
          </span>
          {/* Vertical divider */}
          <span className="h-8 w-px bg-slate-200 shrink-0" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default function ScrollMarqueeSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Row 1 moves LEFT as you scroll down: 0 → -300px
  const row1X = useTransform(scrollYProgress, [0, 1], ["0px", "-300px"]);

  // Row 2 moves RIGHT as you scroll down: 0 → +300px
  const row2X = useTransform(scrollYProgress, [0, 1], ["0px", "300px"]);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-0 overflow-hidden font-sans"
    >
      <div className="flex flex-col gap-6 py-10">
        <MarqueeRow items={row1} direction="left"  x={row1X} />
        <MarqueeRow items={row2} direction="right" x={row2X} />
      </div>
    </section>
  );
}