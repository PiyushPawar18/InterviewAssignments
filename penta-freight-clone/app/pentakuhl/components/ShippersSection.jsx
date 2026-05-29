"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ACCENT = "#e8601a";

/* ── Product table ── */
const ProductTable = ({ rows }) => (
  <div className="border border-slate-200 rounded-xl overflow-hidden w-full">
    {rows.map((row, ri) => (
      <div
        key={ri}
        className={`flex items-stretch min-h-[64px] ${ri < rows.length - 1 ? "border-b border-slate-200" : ""}`}
      >
        {/* Label */}
        <div className="w-62 shrink-0 flex items-center px-4 border-r border-slate-200">
          <span className="font-semibold text-2xl text-slate-800">{row.label}</span>
        </div>
        {/* Logo cells */}
        <div className="flex flex-1 items-center divide-x divide-slate-200">
          {row.logos.map((logo, li) => (
            <div key={li} className="flex-1 flex items-center justify-center py-3 px-4">
              <div className="flex flex-col items-center">
                <Image src={logo.logo} alt={"23"} width={85} height={20} />
              </div>
            </div>
          ))}
          {/* Empty filler cells if only 1 logo in row */}
          {row.logos.length === 1 && <div className="flex-1" />}
        </div>
      </div>
    ))}
  </div>
);

const parcelRows = [
  {
    label: "Single Use",
    logos: [
      { logo:"/img/coolred.png" },
      { logo:"/img/coolred.png" },
    ],
  },
  {
    label: "Reusable",
    logos: [
      { logo:"/img/coolred.png" },
    ],
  },
];

const palletRows = [
  {
    label: "Single Use",
    logos: [
      { logo:"/img/coolred.png" },
      { logo:"/img/coolblue.png" },
    ],
  },
  {
    label: "Reusable",
    logos: [
      { logo:"/img/coolred.png" },
      { logo:"/img/coolblue.png" },
    ],
  },
];

/* ── Single shipper card ── */
const ShipperCard = ({ title, desc, rows, btnLabel, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    viewport={{ once: true }}
    className="flex-1 bg-white rounded-2xl border-3 border-gray-100 px-10 py-12 flex flex-col items-center gap-6"
    // style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.02)" }}
  >
    {/* Title */}
    <h3 className="text-4xl md:text-5xl font-normal text-slate-900 text-center tracking-relaxed">
      {title}
    </h3>

    {/* Description */}
    <p className="text-black text-sm md:text-xl text-center leading-relaxed max-w-full">
      {desc}
    </p>

    {/* Table */}
    <div className="w-full">
      <ProductTable rows={rows} />
    </div>

    {/* CTA */}
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="mt-2 px-8 py-3 rounded-lg text-white text-sm font-semibold"
      style={{
        backgroundColor: ACCENT,
        boxShadow: `0 4px 16px ${ACCENT}44`,
      }}
    >
      {btnLabel}
    </motion.button>
  </motion.div>
);

/* ── Root ── */
export default function ShippersSection() {
  return (
    <section className="bg-slate-50 py-20 px-4 md:px-0 font-sans">
      <div className="flex flex-col md:flex-row gap-14">
        <ShipperCard
          title="Parcel Shippers"
          desc="We understand the unique challenges faced by parcel shippers and offer tailored solutions for seamless shipping."
          rows={parcelRows}
          btnLabel="Parcel Shippers"
          delay={0}
        />
        <ShipperCard
          title="Pallet Shippers"
          desc="We provide tailored services for pallet shippers, ensuring your cargo arrives safely and efficiently."
          rows={palletRows}
          btnLabel="Pallet Shippers"
          delay={0.1}
        />
      </div>
    </section>
  );
}