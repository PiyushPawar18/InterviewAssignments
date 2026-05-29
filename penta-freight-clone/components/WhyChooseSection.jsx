"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    img:"/logos/correct.png",
    title: "Comprehensive Solutions",
    desc: "Full-spectrum logistics services including air, sea, and multimodal transport for seamless handling of your cargo.",
  },
  {
    img:"/logos/expert.png",
    title: "Expertise and Experience",
    desc: "Over 30+ years of experience with skilled customs agents ensuring accurate clearance and secure delivery.",
  },
  {
    img:"/logos/car.png",
    title: "State-of-the-Art Facilities",
    desc: "Advanced transit warehouse with specialized storage and a fleet of reefer and general trucks for efficient nationwide transport.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-0">

          {/* ── Left: heading ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="md:w-[28%] shrink-0 "
          >
            {/* Badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span className="text-xl border border-slate-300 rounded-full px-4 py-1 text-slate-600">
                Why us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl  leading-tight tracking-tight">
              <span className="text-slate-900">Why choose </span>
              <br />
              <span className="text-[#8b8a8a]">Penta Freight.</span>
            </h2>
          </motion.div>

          {/* ── Right: feature columns ── */}
          <div className="flex flex-col md:flex-row flex-1 divide-y md:divide-y-0 md:divide-x divide-slate-200 -ml-5">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex-1 px-8 py-8 md:py-0 first:pl-0 md:first:pl-8"
              >
                {/* Icon */}
                <Image src={feat.img} alt={feat.title} width={56} height={56} />
                {/* Title */}
                <h3 className="text-xl text-nowrap text-slate-900 mb-3 leading-snug">
                  {feat.title}
                </h3>
                {/* Description */}
                <p className="text-base  text-slate-500 leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}