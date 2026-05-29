"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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

const features = [
  {
    img: "/logos/correct.png",
    title: "Comprehensive Solutions",
    desc: "Full-spectrum logistics services including air, sea, and multimodal transport for seamless handling of your cargo.",
  },
  {
    img: "/logos/expert.png",
    title: "Expertise and Experience",
    desc: "Over 30+ years of experience with skilled customs agents ensuring accurate clearance and secure delivery.",
  },
  {
    img: "/logos/car.png",
    title: "State-of-the-Art Facilities",
    desc: "Advanced transit warehouse with specialized storage and a fleet of reefer and general trucks for efficient nationwide transport.",
  },
];

const reviews = [
  {
    company: "Lufthansa Cargo",
    tagline: "Networking the world.",
    logoColor: "#f5a623",
    logo: "/logos/Lufthansa.png",
    quote:
      "Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India….",
    name: "Frank Naeve",
    role: "Vice President Asia Pacific",
    width: 200,
  },
  {
    company: "Sun Pharma",
    tagline: "",
    logoColor: "#e05a1b",
    logo: "/logos/sun.png",
    quote:
      "Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India….",
    name: "Frank Naeve",
    role: "Vice President Asia Pacific",
    width: 100,
  },
  {
    company: "Watson Pharmaceuticals",
    tagline: "",
    logoColor: "#0073c6",
    logo: "/logos/Watson.png",
    quote:
      "Penta Freight has been one of our export LSP's for several years and our experience with them has been consistently good. Besides having strong relationships with airlines to obtain competitive rates, Penta Freight has the ability to get things done in a compliant manner. In addition, an excellent service level and professional relationship was maintained throughout the course of export operations. Best wishes for all success.",
    name: "Ryan Veigas",
    role: "Vice President - Supply Chain & Procurement",
    width: 200,
  },
  {
    company: "Lufthansa Cargo",
    tagline: "Networking the world.",
    logoColor: "#f5a623",
    logo: "/logos/Lufthansa.png",
    quote:
      "Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India….",
    name: "Frank Naeve",
    role: "Vice President Asia Pacific",
    width: 200,
  },
];

/* ── Single service card ─────────────────────────────────── */
const ServiceCard = ({ service, index }) => {
  const { label, paragraphs, tags, img, imgLeft } = service;

  // Sticky offset — desktop only (no sticky on mobile to avoid clipping)
  const stickyTop = 80 + index * 20;

  /* ── MOBILE: full-bleed background image card ── */
  const mobileCard = (
    <div className="md:hidden relative rounded-3xl overflow-hidden min-h-[480px] flex flex-col justify-end">
      {/* Background image */}
      <img
        src={img}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay — strong at bottom for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.10) 100%)",
        }}
      />
      {/* Content */}
      <div className="relative z-10 p-6 pb-7">
        <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
          {label}
        </h3>
        <div className="space-y-2 mb-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-sm text-white/80 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-white/90 border border-white/40 rounded-full px-3 py-1 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* CTA */}
        <button
          className="px-7 py-2.5 rounded-lg text-sm font-semibold text-white transition-transform active:scale-95"
          style={{ backgroundColor: ACCENT }}
        >
          Read More
        </button>
      </div>
    </div>
  );

  /* ── DESKTOP: original side-by-side layout ── */
  const imageBlock = (
    <div className="relative w-full md:w-[46%] shrink-0 overflow-hidden rounded-2xl min-h-[470px] z-0">
      <img
        src={img}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
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
    <div
      className={`flex flex-col justify-center flex-1 ${
        imgLeft ? "pl-2 pr-6 md:pr-10" : "pr-2 pl-6 md:pl-10"
      }`}
    >
      <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
        {label}
      </h3>
      <div className="space-y-3 mb-6">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-sm md:text-[15px] text-slate-600 leading-relaxed"
          >
            {p}
          </p>
        ))}
      </div>
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
      <button
        className="self-start px-7 py-2.5 rounded-lg text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        style={{ backgroundColor: ACCENT }}
      >
        Read More
      </button>
    </div>
  );

  const desktopCard = (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      className="hidden md:flex bg-white rounded-3xl border border-slate-100 overflow-hidden flex-col md:flex-row"
      style={{
        boxShadow: `0 ${4 + index * 4}px ${24 + index * 8}px rgba(0,0,0,${
          0.06 + index * 0.02
        })`,
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
  );

  return (
    <div
      className="md:sticky"
      style={{ top: `${stickyTop}px`, zIndex: 10 + index }}
    >
      {/* Mobile version */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-60px" }}
      >
        {mobileCard}
      </motion.div>

      {/* Desktop version */}
      {desktopCard}
    </div>
  );
};

/* ── Root ServicesSection ──────────────────────────────────── */
export default function ServicesSection() {
  return (
    <section className="min-h-screen bg-white py-10 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-10 md:mb-16">
          <div className="px-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span className="text-lg md:text-xl border border-slate-300 rounded-full px-4 py-1 text-slate-600">
                Services
              </span>
            </div>
            <p className="text-3xl md:text-4xl text-slate-900 leading-tight">
              Seamless Solutions for
            </p>
            <h2 className="text-3xl md:text-4xl text-gray-500 leading-tight tracking-tight">
              Every Logistics Need
            </h2>
          </div>
          <p className="text-black text-sm md:text-base max-w-xs md:max-w-sm leading-relaxed px-4 md:px-0 md:pt-14">
            Tailored logistics solutions for timely, cost-effective deliveries
            across air, sea, and multimodal transport.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-5 md:space-y-6 px-4 md:px-0">
          {services.map((service, i) => (
            <ServiceCard key={service.label} service={service} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ── WhyChooseSection ──────────────────────────────────────── */
export function WhyChooseSection() {
  return (
    <section className="bg-white py-16 md:py-20 px-4 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-0">

          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="md:w-[28%] shrink-0"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span className="text-lg md:text-xl border border-slate-300 rounded-full px-4 py-1 text-slate-600">
                Why us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl leading-tight tracking-tight">
              <span className="text-slate-900">Why choose </span>
              <br />
              <span className="text-[#8b8a8a]">Penta Freight.</span>
            </h2>
          </motion.div>

          {/* Right: feature columns */}
          {/* Mobile: stack vertically with horizontal dividers
              Desktop: side-by-side with vertical dividers (original) */}
          <div className="flex flex-col md:flex-row flex-1 divide-y md:divide-y-0 md:divide-x divide-slate-200 md:-ml-5">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
                className="flex-1 px-0 md:px-8 py-8 md:py-0 first:pt-0 md:first:pl-8"
              >
                <Image
                  src={feat.img}
                  alt={feat.title}
                  width={56}
                  height={56}
                  className="mb-4"
                />
                <h3 className="text-lg md:text-xl text-slate-900 mb-3 leading-snug">
                  {feat.title}
                </h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">
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

/* ── Single review card ──────────────────────────────────── */
const ReviewCard = ({ review, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: index * 0.08,
    }}
    viewport={{ once: true, margin: "-40px" }}
    className="bg-white rounded-2xl border border-slate-100 p-6 md:p-7 flex flex-col gap-4"
    style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}
  >
    {/* Logo row */}
    <div className="flex justify-center items-center">
      <Image
        src={review.logo}
        alt={review.company}
        width={review.width}
        height={28}
      />
    </div>

    {/* Quote */}
    <p className="text-sm md:text-base text-slate-600 leading-relaxed text-center italic">
      "{review.quote}"
    </p>

    {/* Author */}
    <div className="pt-2 border-t border-slate-100 text-center">
      <p className="text-lg md:text-xl font-semibold text-slate-900">
        {review.name}
      </p>
      <p className="text-sm md:text-base text-slate-500 mt-0.5">{review.role}</p>
    </div>
  </motion.div>
);

/* ── ReviewsSection ──────────────────────────────────────── */
export function ReviewsSection() {
  const col1 = reviews.filter((_, i) => i % 2 === 0);
  const col2 = reviews.filter((_, i) => i % 2 !== 0);

  return (
    <section className="bg-white py-16 md:py-20 px-4 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">

        {/* LEFT: heading — sticky only on desktop */}
        <div className="md:w-[34%] shrink-0 md:sticky md:top-24 self-start">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span className="text-lg md:text-xl border border-slate-300 rounded-full px-4 py-1 text-slate-600">
              Reviews
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            <span className="text-slate-900">Hear From Our Satisfied </span>
            <span className="text-[#8b8a8a]">Clients Worldwide.</span>
          </h2>
          <p className="text-sm md:text-base text-black leading-relaxed">
            Explore what industry leaders and long-term partners say about our
            commitment to excellence and innovation.
          </p>
        </div>

        {/* RIGHT: review columns
            Mobile: single column, no offset
            Desktop: two staggered columns (original) */}
        <div className="flex-1 md:px-7">
          {/* Mobile: single column */}
          <div className="flex flex-col gap-6 md:hidden">
            {reviews.map((review, i) => (
              <ReviewCard key={`mobile-${i}`} review={review} index={i} />
            ))}
          </div>

          {/* Desktop: two staggered columns */}
          <div className="hidden md:grid grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-10">
              {col1.map((review, i) => (
                <ReviewCard key={`col1-${i}`} review={review} index={i * 2} />
              ))}
            </div>
            <div className="flex flex-col gap-10 md:mt-82">
              {col2.map((review, i) => (
                <ReviewCard
                  key={`col2-${i}`}
                  review={review}
                  index={i * 2 + 1}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}