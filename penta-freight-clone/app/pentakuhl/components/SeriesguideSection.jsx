"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ACCENT = "#e8601a";

const series = [
  {
    id: "SERIES 4",
    temp: "2°C - 8°C",
    usage: "Typically used for products that require refrigeration.",
    ideal: "Ideal for vaccines, insulin, biologics, and other temperature-sensitive pharmaceuticals.",
  },
  {
    id: "SERIES 22",
    temp: "15°C - 25°C",
    usage: "Covers a controlled room temperature range.",
    ideal: "Suitable for products that need to remain stable at standard room temperature, including certain medicines and cosmetics.",
  },
  {
    id: "SERIES 20M",
    temp: "-20°C - 0°C",
    usage: "Designed for frozen product transport requiring sub-zero temperatures.",
    ideal: "Ideal for frozen biologics, plasma, and other products requiring frozen storage during transit.",
  },
  {
    id: "SERIES 50M",
    temp: "-50°C - -15°C",
    usage: "Ultra-cold packaging for deep-freeze applications.",
    ideal: "Best suited for mRNA vaccines, cell therapies, and other products requiring ultra-low temperature maintenance.",
  },
];

export default function SeriesGuideSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-20 px-4 md:px-12 font-sans">
      <div className="max-w-[72rem] mx-auto">

        {/* ── Heading ── */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-base text-slate-900 mb-4 tracking-tight">
            Series <span className="text-gray-500">Guide</span>
          </h2>
          <p className="text-black text-sm md:text-base leading-relaxed max-w-full mx-auto">
            This guide outlines temperature-controlled packaging solutions designed for the safe
            transport and storage of sensitive products, like vaccines and biologics, across various
            thermal conditions, from refrigerated to deep-freeze.
          </p>
        </div>

        {/* ── Tab bar ── */}
        <div className="border border-slate-200 rounded-lg grid grid-cols-4 mb-2">
          {series.map((s, i) => {
            const isActive = active === i;
            return (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`
                  relative py-4 text-xs md:text-sm  tracking-widest uppercase
                  transition-colors duration-200 focus:outline-none
                  ${i < series.length - 1 ? "border-r border-slate-200" : ""}
                  ${isActive ? "font-extrabold" : "text-slate-500 font-semibold hover:text-slate-700"}
                `}
                style={isActive ? { color: ACCENT } : {}}
              >
                {s.id}
                {/* Active underline indicator */}
                {isActive && (
                  <motion.div
                    layoutId="series-underline"
                    className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Content panel ── */}
        <div className="border border-slate-200 rounded-lg overflow-hidden min-h-[140px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="px-8 py-8 flex flex-col gap-3"
            >
              <p className="text-base text-slate-700 leading-relaxed">
                <strong className="font-bold text-slate-900">Temperature Range:</strong>{" "}
                {series[active].temp}
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                <strong className="font-bold text-slate-900">Usage & Applications:</strong>{" "}
                {series[active].usage}
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                <strong className="font-bold text-slate-900">Ideal For:</strong>{" "}
                {series[active].ideal}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}