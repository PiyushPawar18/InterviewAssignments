"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ACCENT = "#e8601a";

const LogoCell = ({ primary, secondary, color = "#c00" }) => (
  <div className="flex flex-col items-center justify-center px-3 py-2">
    <span className="font-black text-sm leading-none tracking-tight" style={{ color }}>
      {primary}
    </span>
    {secondary && (
      <span className="text-[9px] font-semibold text-slate-400 mt-0.5 tracking-wider uppercase">
        {secondary}
      </span>
    )}
  </div>
);

const ProductTable = ({ rows }) => (
  <div className="border border-slate-200 rounded-xl overflow-hidden w-full">
    {rows.map((row, ri) => (
      <div
        key={ri}
        className={`flex items-stretch min-h-[56px] ${ri < rows.length - 1 ? "border-b border-slate-200" : ""}`}
      >
        <div className="w-28 shrink-0 flex items-center px-4 border-r border-slate-200">
          <span className="font-bold text-sm text-slate-800">{row.label}</span>
        </div>
        <div className="flex flex-1 items-center divide-x divide-slate-200">
          {row.logos.map((logo, li) => (
            <div key={li} className="flex-1 flex items-center justify-center py-2">
              <LogoCell {...logo} />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const parcelRows = [
  {
    label: "Single Use",
    logos: [
      { primary: "COOL", secondary: "Guard PCM",    color: "#e05a1b" },
      { primary: "COOL", secondary: "Guard Advance", color: "#38bdf8" },
    ],
  },
  {
    label: "Reusable",
    logos: [{ primary: "Crēdo", secondary: "Cube", color: "#2563eb" }],
  },
];

const palletRows = [
  {
    label: "Single Use",
    logos: [
      { primary: "CoolPall", secondary: "Vertos",        color: "#0ea5e9" },
      { primary: "CoolPall", secondary: "Vertos Advance", color: "#64748b" },
    ],
  },
  {
    label: "Reusable",
    logos: [
      { primary: "Crēdo", secondary: "Xtreme", color: "#dc2626" },
      { primary: "Crēdo", secondary: "Cargo",  color: "#dc2626" },
    ],
  },
];

export default function ProductSolutionsSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const titleY       = useTransform(scrollYProgress, [0, 0.18], [0, -40]);
  const leftScale  = useTransform(scrollYProgress, [0, 0.40], [0.18, 1]);
  const leftX      = useTransform(scrollYProgress, [0, 0.40], ["-34vw", "0vw"]);
  const leftY      = useTransform(scrollYProgress, [0, 0.40], ["-30vh", "0vh"]);

  const rightScale = useTransform(scrollYProgress, [0, 0.40], [0.18, 1]);
  const rightX     = useTransform(scrollYProgress, [0, 0.40], ["34vw",  "0vw"]);
  const rightY     = useTransform(scrollYProgress, [0, 0.40], ["-30vh", "0vh"]);

  const leftContentOpacity  = useTransform(scrollYProgress, [0.38, 0.52], [0, 1]);
  const rightContentOpacity = useTransform(scrollYProgress, [0.55, 0.68], [0, 1]);

  const boxesExitY       = useTransform(scrollYProgress, [0.78, 1.00], ["0vh", "-115vh"]);
  const boxesExitOpacity = useTransform(scrollYProgress, [0.78, 0.94], [1, 0]);

  return (
    <div ref={containerRef} style={{ height: "500vh" }}>

      <div
        className="sticky top-0 h-screen bg-white"
        style={{ overflow: "hidden" }}
      >

        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-slate-900 tracking-tight select-none">
            Product Solutions
          </h2>
        </motion.div>

        <motion.div
          className="absolute inset-0"
          style={{ y: boxesExitY, opacity: boxesExitOpacity }}
        >
          <motion.div
            style={{
              x: leftX,
              y: leftY,
              scale: leftScale,
              transformOrigin: "top left",
            }}
            className="absolute left-[2vw] top-[11vh] w-[46vw] h-[78vh]
                       rounded-2xl bg-white border border-slate-200 flex flex-col
                       items-center justify-center"
          >
            <motion.div
              style={{ opacity: leftContentOpacity }}
              className="w-full px-8 flex flex-col items-center gap-4"
            >
              <h3 className="text-3xl md:text-4xl font-light text-slate-900 text-center">
                Parcel Shippers
              </h3>
              <p className="text-slate-500 text-sm text-center leading-relaxed max-w-xs">
                We understand the unique challenges faced by parcel shippers
                and offer tailored solutions for seamless shipping.
              </p>
              <ProductTable rows={parcelRows} />
              <button
                className="mt-1 px-7 py-2.5 rounded-lg text-white text-sm font-semibold
                           hover:-translate-y-0.5 transition-transform"
                style={{ backgroundColor: ACCENT }}
              >
                Parcel Shippers
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div
            style={{
              x: rightX,
              y: rightY,
              scale: rightScale,
              transformOrigin: "top right",
            }}
            className="absolute right-[2vw] top-[11vh] w-[46vw] h-[78vh]
                       rounded-2xl bg-white border border-slate-200 flex flex-col
                       items-center justify-center"
          >
            <motion.div
              style={{ opacity: rightContentOpacity }}
              className="w-full px-8 flex flex-col items-center gap-4"
            >
              <h3 className="text-3xl md:text-4xl font-light text-slate-900 text-center">
                Pallet Shippers
              </h3>
              <p className="text-slate-500 text-sm text-center leading-relaxed max-w-xs">
                We provide tailored services for pallet shippers, ensuring
                your cargo arrives safely and efficiently.
              </p>
              <ProductTable rows={palletRows} />
              <button
                className="mt-1 px-7 py-2.5 rounded-lg text-white text-sm font-semibold
                           hover:-translate-y-0.5 transition-transform"
                style={{ backgroundColor: ACCENT }}
              >
                Pallet Shippers
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}