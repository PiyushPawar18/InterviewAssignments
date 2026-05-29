"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const SERVICES_LINKS = [
  { name: "Air Freight", href: "/services/air-freight" },
  { name: "Sea Freight", href: "/services/sea-freight" },
  { name: "Multi Modal Transport", href: "/services/multi-modal-transport" },
  { name: "Project Cargo", href: "/services/project-cargo" },
  { name: "Custom Broking", href: "/services/custom-broking" },
  { name: "Transit Warehouse And Fleet", href: "/services/transit-warehouse-and-fleet" },
];

const PENTA_LINKS = [
  { name: "Parcel Shippers", href: "/services/air-freight" },
  { name: "Pallet Shippers", href: "/services/sea-freight" },
];

/* ── Active Path Helper ──────────────────────────────────── */
const isActivePath = (pathname, href) => {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
};

/* ── Reusable Nav Link ──────────────────────────────────── */
const NavLink = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      className={`transition-colors duration-200 ${
        isActive
          ? "font-bold text-orange-500"
          : "font-semibold text-black hover:text-orange-500"
      }`}
    >
      {label}
    </Link>
  );
};

/* ── Services Dropdown ─────────────────────────────────── */
const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = SERVICES_LINKS.some((link) => isActivePath(pathname, link.href)) || isActivePath(pathname, "/services");
  console.log(isActive)
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href="/services"
        
        className={`flex items-center gap-1 cursor-pointer select-none transition-colors duration-200 ${
          isActive
            ? "font-bold text-orange-500"
            : "font-semibold text-black hover:text-orange-500"
        }`}
      >
        SERVICES{" "}
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""} ${isActive ? "text-orange-500" : "text-black"}`}
        />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-9 left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-50 overflow-hidden border border-zinc-100"
          >
            <ul className="py-2">
              {SERVICES_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block px-5 py-2.5 text-sm font-normal text-zinc-700 hover:text-black hover:bg-zinc-50 transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Penta Dropdown ────────────────────────────────────── */
const PentaDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = PENTA_LINKS.some((link) => isActivePath(pathname, link.href) || isActivePath(pathname, "/pentakuhl"));

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href="/pentakuhl"
        className={`flex items-center gap-1 cursor-pointer select-none transition-colors duration-200 ${
          isActive
            ? "font-bold text-blue-500"
            : "font-semibold text-black hover:text-blue-500"
        }`}
      >
        <Image src="/img/pentaKUHL.png" alt="Penta" width={85} height={20} className="object-contain" />
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""} ${isActive ? "text-blue-500" : "text-black"}`}
        />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-9 left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-50 overflow-hidden border border-zinc-100"
          >
            <ul className="py-2">
              {PENTA_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block px-5 py-2.5 text-sm font-normal text-zinc-700 hover:text-black hover:bg-zinc-50 transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Root NavBar ───────────────────────────────────────── */
export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 150);
  });

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white hidden md:flex justify-center items-center h-16 border-b-[3px] border-zinc-200"
    >
      <nav className="flex items-center justify-between gap-10.5 font-semibold text-sm">
        <NavLink href="/" label="HOME" />
        <NavLink href="/about" label="ABOUT US" />

        <ServicesDropdown />
        <PentaDropdown />

        <NavLink href="/industries" label="INDUSTRIES" />
        <NavLink href="/careers" label="CAREERS" />
        <NavLink href="/contact" label="CONTACT" />
      </nav>
    </motion.header>
  );
}