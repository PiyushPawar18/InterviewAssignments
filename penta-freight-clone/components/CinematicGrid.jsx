"use client";

import React from "react";
import { motion } from "framer-motion";

const ACCENT = "#e8601a";

const services = [
  {
    label: "Air Freight",
    paragraphs: [
      "We are India's leading air freight forwarder, offering complete import and export logistics. Our volume advantage ensures competitive pricing and guaranteed space.",
      "Our expert route planners optimize transit, carrier selection, and cargo handling. We reduce costs and transit time with on-demand pickup, drop-off, and warehousing.",
    ],
    tags: ["Speed", "Efficiency", "Reliability", "Affordability"],
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    imgLeft: true,
  },
  {
    label: "Sea Freight",
    paragraphs: [
      "We offer global sea freight services via top shipping lines. Our team understands your products, transit needs, and budget.",
      "With decades of experience, we plan, monitor, and manage shipments, ensuring compliance.",
      "We provide flexible FCL scheduling and cost-efficient LCL options. On-demand pickup, drop-off, and warehousing help cut costs and transit time.",
    ],
    tags: ["Flexibility", "Cost-Effective", "Scalability", "Expertise"],
    img: "https://images.unsplash.com/photo-1520350094754-f0fdcac35c1c?q=80&w=1200&auto=format&fit=crop",
    imgLeft: false,
  },
  {
    label: "Multi Modal Transport",
    paragraphs: [
      "Seamlessly combine air, sea, rail, and road transport for end-to-end supply chain efficiency. We design multi-modal solutions tailored to your cargo type and delivery timelines.",
      "Our integrated network across India and global corridors ensures your freight moves without interruption — optimized at every handoff.",
    ],
    tags: ["Integration", "Flexibility", "Coverage", "Efficiency"],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    imgLeft: true,
  },
  {
    label: "Project Cargo",
    paragraphs: [
      "From heavy machinery to oversized industrial equipment, we manage every aspect of complex project cargo with precision planning and dedicated project managers.",
      "We handle permits, route surveys, specialized lifting, and customs clearance — ensuring safe, on-time delivery no matter the complexity.",
    ],
    tags: ["Heavy Lift", "OOG Cargo", "Planning", "Safety"],
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    imgLeft: false,
  },
];

/* ── Single card ─────────────────────────────────── */
const ServiceCard = ({ service, index }) => {
  const { label, paragraphs, tags, img, imgLeft } = service;

  // Each card sticks 20px lower than the previous so they fan out as a stack
  const stickyTop = 80 + index * 20;

  const imageBlock = (
    <div className="relative w-full md:w-[46%] shrink-0 overflow-hidden rounded-2xl min-h-[470px] z-0">
      <img
        src={img}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Fade toward text side */}
      <div
        className="absolute inset-0"
        style={{
          background: imgLeft
            ? "linear-gradient(to right, transparent 55%, white 100%)"
            : "linear-gradient(to left, transparent 55%, white 100%)",
        }}
      />
    </div>
  );

  const textBlock = (
    <div className={`flex flex-col justify-center flex-1 ${imgLeft ? "pl-2 pr-6 md:pr-10" : "pr-2 pl-6 md:pl-10"}`}>
      <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
        {label}
      </h3>
      <div className="space-y-3 mb-6">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
            {p}
          </p>
        ))}
      </div>
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-7">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-slate-600 border border-slate-300 rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* CTA */}
      <button
        className="self-start px-7 py-2.5 rounded-lg text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        style={{ backgroundColor: ACCENT }}
      >
        Read More
      </button>
    </div>
  );

  return (
    // Outer wrapper is sticky — this is what causes the overlap effect
    <div
      className="sticky"
      style={{ top: `${stickyTop}px`, zIndex: 10 + index }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-80px" }}
        className="bg-white rounded-3xl border border-slate-100 overflow-hidden flex flex-col md:flex-row"
        style={{
          boxShadow: `0 ${4 + index * 4}px ${24 + index * 8}px rgba(0,0,0,${0.06 + index * 0.02})`,
        }}
      >
        {imgLeft ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </motion.div>
    </div>
  );
};

/* ── Root component ──────────────────────────────── */
export default function ServicesSection() {
  return (
    <section className="min-h-screen bg-white py-10 md:px-12">
      <div className="max-w-6xl mx-auto ">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-16">
          <div className="px-4">
            {/* Pill badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span className="text-xl border border-slate-300 rounded-full px-4 py-1 text-slate-600">
                Services
              </span>
            </div>
            <p className="text-4xl md:text-4xl  text-slate-900 leading-tight ">
              Seamless Solutions for
            </p>
            <h2 className="text-4xl md:text-4xl  text-gray-500 leading-tight tracking-tight">
              Every Logistics Need
            </h2>
          </div>
          <p className="text-black text-sm md:text-base max-w-xs md:max-w-sm leading-relaxed md:pt-14">
            Tailored logistics solutions for timely, cost-effective deliveries
            across air, sea, and multimodal transport.
          </p>
        </div>

        {/* Cards — pb-[40vh] gives scroll room for last sticky card */}
        <div className="space-y-6 ">
          {services.map((service, i) => (
            <ServiceCard key={service.label} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}