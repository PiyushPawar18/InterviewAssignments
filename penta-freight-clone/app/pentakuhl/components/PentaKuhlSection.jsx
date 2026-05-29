"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ACCENT = "#e8601a";
const BG = "#4a5c6a";

export default function PentaKuhlSection() {
  return (
    <div className="font-sans">
      {/* ── TOP: white about strip ───────────────────────────────── */}
      <section className="bg-white py-12 px-4 md:px-20 ">
        <div className="w-full h-[150px] z-10 flex flex-col justify-between items-center gap-4">
          <div
            className="w-[70%] h-full flex justify-between items-center gap-15"
          >
            <div className="w-[20%] flex flex-col justify-left items-center ">
              <h1 className="text-xl  font-bold  border-b-3 uppercase border-orange-500 text-center pb-2 text-orange-500">
                About
              </h1>
              <h1 className="text-xl font-bold text-center pt-2 uppercase text-orange-500">
                Penta Kuhl
              </h1>
            </div>
            <div className="w-[75%] px-5 text-xl text-gray-500 leading-relaxed">
              At{" "}
              <strong className="text-gray-600 font-bold">
                Pentakuhl
              </strong>{" "}
              , we specialize in providing durable, effective packaging
              solutions that maintain temperature{" "}
              <strong className="text-gray-600 font-bold">
                stability
              </strong>{" "}
              during transit,{" "}
              <strong className="text-gray-600 font-bold">
                protecting
              </strong>{" "}
              your valuable products. Our innovative designs cater to various
              industries, including pharmaceuticals, food, and biotechnology.
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM: dark distributor banner ─────────────────────── */}
      <section
        className="relative py-20 px-4 overflow-hidden h-[400px]" 
        style={{ backgroundColor: BG }}
      >
        {/* Background route lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
          viewBox="0 0 1440 320"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <path
            d="M-100 180 Q200 60 500 180 Q800 300 1100 130 Q1300 40 1540 180"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M0 100 Q250 10 550 100 Q850 190 1100 60 Q1300 -10 1440 80"
            stroke="white"
            strokeWidth="1"
          />
          {[120, 300, 480, 660, 860, 1060, 1260].map((x, i) => (
            <circle
              key={i}
              cx={x}
              cy={120 + (i % 3) * 40}
              r="2.5"
              fill="white"
            />
          ))}
        </svg>

        <div className="relative max-w-lg mx-auto flex flex-col items-center gap-4 text-center">
          {/* Logo card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl px-5 py-4 flex flex-col items-center gap-2"
            style={{ boxShadow: "0 8px 36px rgba(0,0,0,0.18)" }}
          >
            {/* Pelican BioThermal SVG logo */}
            <Image src="/logos/peli.png" alt="Pelican BioThermal Logo" width={170} height={170} />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="text-white text-2xl md:text-3xl font-semibold leading-snug md:text-nowrap "
          >
            Authorized Distributors for Pelican BioThermal
            <sup className="text-xl font-normal align-super">tm</sup> Products
          </motion.h2>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-2 rounded-lg text-white font-semibold text-base"
            style={{
              backgroundColor: ACCENT,
              boxShadow: `0 6px 20px ${ACCENT}55`,
            }}
          >
            Read more
          </motion.button>
        </div>
      </section>
    </div>
  );
}
