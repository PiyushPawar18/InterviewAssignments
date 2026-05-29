"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ACCENT = "#f07030";
const ACCENT_DARK = "#ff9a4d";

const industries = [
  {
    title: "Pharmaceuticals",
    desc: "The pharmaceutical industry requires highly customized supply chain solutions. Our temperature-controlled warehouse ensures seamless end-to-end service, prioritizing transparency and attention to detail for precise and reliable shipments.",
    icon: "/logos/pharmace.png",
  },
  {
    title: "Chemicals",
    desc: "We follow IATA guidelines for chemical imports and exports, offering competitive options. With strong authority relations and continuous monitoring, we ensure a smooth, compliant, and efficient supply chain experience.",
    icon: "/logos/chemical.png",
  },
  {
    title: "Textiles",
    desc: "We are sensitive to the tightly controlled consignments and seasonality within the textile industry. We optimize your supply chain through our distribution and consolidation services. Our door to door offerings and constant shipment tracking allow you to efficiently monitor your consignments.",
    icon: "/logos/textiles.png",
  },
  {
    title: "Energy",
    desc: "As an organization we have kept up with the growing consumption of renewable energy through our forward looking perspective. We have supported the transport of cutting edge tools used to generate renewable energy by coming up with creative methods to serve emerging markets.",
    icon: "/logos/energy.png",
  },
  {
    title: "Automobile",
    desc: "Our adaptable nature allows us to handle inventory of any dimension and value for the automobile industry. We demonstrate the same flexibility by catering to the dynamic market trends of this industry across our global network.",
    icon:"/logos/car1.png",
  },
  {
    title: "Packaging",
    desc: "The packaging industry needs forwarders with a widespread reach. We are able to offer this through our global partnerships and diverse network of carriers. Our experienced team uses this network to provide you with timely and affordable solutions.",
    icon:"/logos/box.png",
  },
  {
    title: "Time Critical Cargo",
    desc: "We leverage strong carrier relations to secure priority pricing while ensuring swift, efficient operations for time-critical cargo.",
    icon:"/logos/img1.png",
  },
  {
    title: "Glassware",
    desc: "Our team is acquainted with the extensive reach and distribution network of the glassware industry. We couple our global supply chain knowledge with material handling expertise to ensure your shipments are transported reliably and efficiently.",
    icon: "/logos/glass.png",
  },
  {
    title: "Electronics",
    desc: "We ensure the safe and efficient transport of electronic goods, protecting sensitive components from damage and delays. Our logistics solutions help businesses meet market demands while optimizing supply chain costs.",
    icon: "/logos/electronics.png",
  },
];

/* ── Single card ── */
const IndustryCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.08 }}
    viewport={{ once: true, margin: "-40px" }}
    whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(224,96,32,0.35)" }}
    className="rounded-3xl p-7 py-15 flex flex-col gap-4 cursor-default"
    style={{
      background: `linear-gradient(145deg, ${ACCENT} 0%, ${ACCENT_DARK} 100%)`,
      boxShadow: "0 8px 28px rgba(224,96,32,0.25)",
    }}
  >
    {/* Icon + Title row */}
    <div className="flex items-center gap-3">
      <div className="p-2 border rounded-full border-orange-300">
      <Image src={item.icon} alt={`${item.title} icon`} width={52} height={42} />
      </div>
      <h3 className="text-white font-bold text-2xl leading-tight">{item.title}</h3>
    </div>

    {/* Divider */}
    <div className="h-px w-full" style={{ backgroundColor: "rgba(255,255,255,0.25)" }} />

    {/* Description */}
    <p className="text-white text-sm leading-[1">{item.desc}</p>
  </motion.div>
);

/* ── Root ── */
export default function IndustriesSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-12 font-sans md:mt-10">
      <div className="max-w-[76rem] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          {industries.map((item, i) => (
            <IndustryCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}