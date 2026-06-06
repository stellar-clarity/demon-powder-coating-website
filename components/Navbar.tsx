"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-surface">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-3xl text-light tracking-widest leading-none">
            DEMON
          </span>
          <span className="font-display text-3xl text-accent tracking-widest leading-none">
            PC
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-display text-lg tracking-widest transition-colors ${
                pathname === l.href
                  ? "text-accent"
                  : "text-muted hover:text-light"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-accent hover:bg-red-700 text-light font-display text-lg tracking-widest px-5 py-2 transition-colors"
          >
            GET A QUOTE
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-light"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-light mb-1.5" />
          <div className="w-6 h-0.5 bg-light mb-1.5" />
          <div className="w-6 h-0.5 bg-light" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-t border-surface px-6 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block font-display text-2xl tracking-widest py-3 border-b border-bg transition-colors ${
                pathname === l.href ? "text-accent" : "text-light"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block mt-4 bg-accent text-light font-display text-xl tracking-widest px-5 py-3 text-center"
          >
            GET A QUOTE
          </Link>
        </div>
      )}
    </nav>
  );
}
