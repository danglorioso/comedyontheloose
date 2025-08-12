"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "GALLERY", href: "/gallery" },
  { label: "ONLINE EPISODES", href: "/episodes" },
  { label: "SKETCHES", href: "/sketches" },
  { label: "SCHEDULE", href: "/schedule" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
    <header className="bg-secondary p-4 shadow-md border-t-4 border-primary mb-2">
      <div className="max-w-screen-xl md:px-15 mx-auto flex justify-between items-center gap-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold text-primary hover:tranform hover:scale-103 transition-transform duration-400">
            <img src="/logo.png" alt="Comedy on the Loose" className="h-22 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-wrap justify-center gap-2 text-sm text-black">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <a
                key={label}
                href={href}
                className={`px-3 py-2 px-4 transition-colors duration-200 text-base flex items-center justify-center text-center
                  ${isActive ? "bg-primary text-white font-normal" : "hover:bg-primary hover:text-white"}`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Hamburger Icon on Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary pr-5"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-5 px-4 space-y-2">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)} // Close menu on click
                className={`block px-4 py-2 rounded transition-colors text-base ${
                  isActive
                    ? "bg-primary text-white font-normal"
                    : "hover:bg-primary text-black hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
    </div>
  );
}
