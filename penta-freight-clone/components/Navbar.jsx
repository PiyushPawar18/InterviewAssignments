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
import { ChevronDown, Menu, X, MapPin, Phone } from "lucide-react";

const SERVICES_LINKS = [
  { name: "Air Freight", href: "/services/air-freight" },
  { name: "Sea Freight", href: "/services/sea-freight" },
  { name: "Multi Modal Transport", href: "/services/multi-modal-transport" },
  { name: "Project Cargo", href: "/services/project-cargo" },
  { name: "Custom Broking", href: "/services/custom-broking" },
  { name: "Transit Warehouse And Fleet", href: "/services/transit-warehouse-and-fleet" },
];

const PENTA_LINKS = [
  { name: "Parcel Shippers", href: "/pentakuhl/parcel-shippers" },
  { name: "Pallet Shippers", href: "/pentakuhl/pallet-shippers" },
];

/* ── Active Path Helper ──────────────────────────────────── */
const isActivePath = (pathname, href) => {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
};

/* ── Reusable Desktop Nav Link ───────────────────────────── */
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

/* ── Reusable Mobile Nav Link ────────────────────────────── */
const MobileNavLink = ({ href, label, onClick }) => {
  const pathname = usePathname();
  const isActive = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block text-sm border-b border-zinc-100 pb-1 transition-colors duration-200 ${
        isActive
          ? "font-bold text-orange-500"
          : "font-medium text-zinc-800 hover:text-orange-500"
      }`}
    >
      {label}
    </Link>
  );
};

/* ── Desktop Services Dropdown ───────────────────────────── */
const DesktopServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive =
    SERVICES_LINKS.some((link) => isActivePath(pathname, link.href)) ||
    isActivePath(pathname, "/services");

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
          className={`transition-transform duration-200 hover:text-orange-500 ${isOpen ? "rotate-180" : ""} ${
            isActive ? "text-orange-500" : "text-black"
          }`}
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

/* ── Desktop Penta Dropdown ──────────────────────────────── */
const DesktopPentaDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive =
    PENTA_LINKS.some((link) => isActivePath(pathname, link.href)) ||
    isActivePath(pathname, "/pentakuhl");

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
        <Image
          src="/img/pentaKUHL.png"
          alt="Penta"
          width={85}
          height={20}
          className="object-contain"
        />
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""} ${
            isActive ? "text-blue-500" : "text-black"
          }`}
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

/* ── Mobile Accordion Dropdown ───────────────────────────── */
// FIX: label is now split into a <Link> (navigate) + <button> (toggle)
// so both work independently on mobile.
const MobileDropdown = ({
  label,
  href,
  children,
  isOpen,
  toggle,
  activeColor = "text-orange-500",
}) => {
  const pathname = usePathname();

  // Determine if this dropdown's root path or any child is active
  const isActive =
    (href && isActivePath(pathname, href)) ||
    (Array.isArray(children) &&
      children.some?.(
        (child) => child?.props?.href && isActivePath(pathname, child.props.href)
      ));

  return (
    <div className="border-b border-zinc-100 last:border-none pb-1">
      <div className="flex items-center justify-between">
        {/* Navigate to the section root */}
        <Link
          href={href || "#"}
          className={`text-sm transition-colors duration-200 ${
            isActive
              ? `font-bold ${activeColor}`
              : "font-medium text-zinc-800 hover:text-orange-500"
          }`}
        >
          {label}
        </Link>

        {/* Toggle the accordion */}
        <button
          onClick={toggle}
          className="p-1 -mr-1"
          aria-label={`Toggle ${label} submenu`}
        >
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              isOpen ? `rotate-180 ${activeColor}` : "text-zinc-500"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden mt-2"
          >
            <div className="pl-4 pb-2 space-y-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Mobile Sub-Link ─────────────────────────────────────── */
const MobileSubLink = ({ href, label, onClick }) => {
  const pathname = usePathname();
  const isActive = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block pl-2 text-sm transition-colors duration-200 ${
        isActive
          ? "font-bold text-orange-500"
          : "text-zinc-600 hover:text-orange-500"
      }`}
    >
      {label}
    </Link>
  );
};

/* ── Root NavBar ───────────────────────────────────────── */
export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePentaOpen, setMobilePentaOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 150);
  });

  const toggleMobileMenu = () => {
    const next = !isMobileMenuOpen;
    setIsMobileMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-40 bg-white hidden md:flex justify-center items-center h-16 border-b-[3px] border-zinc-200"
      >
        <nav className="flex items-center justify-between gap-10.5 font-semibold text-sm">
          <NavLink href="/" label="HOME" />
          <NavLink href="/about" label="ABOUT US" />
          <DesktopServicesDropdown />
          <DesktopPentaDropdown />
          <NavLink href="/industries" label="INDUSTRIES" />
          <NavLink href="/careers" label="CAREERS" />
          <NavLink href="/contact" label="CONTACT" />
        </nav>
      </motion.header>

      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 w-full z-50 md:hidden bg-white flex items-center justify-between px-4 h-16 border-b-[3px] border-zinc-200">
        <Link
          href="/contact"
          className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-semibold"
        >
          Contact
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-zinc-800"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={closeMobileMenu}
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[90%] max-w-sm bg-white z-50 flex flex-col md:hidden mt-16"
            >
              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto pb-6">
                <div className="flex flex-col p-4 gap-4">
                  {/* Simple links — now use MobileNavLink for active state */}
                  <MobileNavLink href="/" label="HOME" onClick={closeMobileMenu} />
                  <MobileNavLink href="/about" label="ABOUT US" onClick={closeMobileMenu} />

                  {/* Services accordion */}
                  <MobileDropdown
                    label="SERVICES"
                    href="/services"
                    isOpen={mobileServicesOpen}
                    toggle={() => setMobileServicesOpen(!mobileServicesOpen)}
                    activeColor="text-orange-500"
                  >
                    {SERVICES_LINKS.map((link) => (
                      <MobileSubLink
                        key={link.name}
                        href={link.href}
                        label={link.name}
                        onClick={closeMobileMenu}
                      />
                    ))}
                  </MobileDropdown>

                  {/* PentaKUHL accordion */}
                  <MobileDropdown
                    label="PENTAKUHL"
                    href="/pentakuhl"
                    isOpen={mobilePentaOpen}
                    toggle={() => setMobilePentaOpen(!mobilePentaOpen)}
                    activeColor="text-blue-500"
                  >
                    {PENTA_LINKS.map((link) => (
                      <MobileSubLink
                        key={link.name}
                        href={link.href}
                        label={link.name}
                        onClick={closeMobileMenu}
                      />
                    ))}
                  </MobileDropdown>

                  <MobileNavLink href="/industries" label="INDUSTRIES" onClick={closeMobileMenu} />
                  <MobileNavLink href="/careers" label="CAREERS" onClick={closeMobileMenu} />
                  <MobileNavLink href="/contact" label="CONTACT" onClick={closeMobileMenu} />
                </div>

                {/* Contact Info */}
                <div className="px-6 py-8 mt-4 border-t border-dashed border-zinc-300">
                  <h3 className="text-lg font-bold text-zinc-900 mb-6">Contact Info</h3>
                  <div className="space-y-4 text-sm text-zinc-600">
                    <a
                      href="tel:+912262226222"
                      className="flex items-center gap-3 hover:text-orange-500 transition-colors"
                    >
                      <Phone size={18} className="text-orange-500" />
                      +91 22-6222-6222
                    </a>
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-orange-500 mt-1 shrink-0" />
                      <p>
                        902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol,
                        Andheri (East), Mumbai 400 059
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}