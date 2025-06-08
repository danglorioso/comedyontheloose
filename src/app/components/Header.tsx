"use client";

import React from "react";
import { usePathname } from "next/navigation";

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

  return (
    <header className="bg-white p-4 shadow-md border-t-4 border-[#3dbc27] mb-2">
      <div className="max-w-screen ml-35 mr-34 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Comedy on the Loose" className="h-22 w-auto" />
        </div>
        <nav className="flex gap-3 text-sm text-black">
          {navItems.map(({ label, href }) => {
            const isActive = href === "/" ? pathname === "/" : pathname.includes(href.replace("#", ""));
            return (
              <a
                key={label}
                href={href}
                className={`px-3 py-2 px-4 transition-colors duration-200
                  ${isActive ? "bg-[#3dbc27] text-white" : "hover:bg-[#3dbc27] hover:text-white"}`}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
