// File: components/Header.tsx
"use client";

import React from 'react';

export default function Header() {
  return (
    <header className="bg-white text-white p-4 shadow-md border-t-4 border-green-500">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Comedy on the Loose" className="h-22 w-auto" />
        </div>
        <nav className="space-x-4 text-sm text-black font-semibold">
          <a href="" className="hover:text-green-500">Home</a>
          <a href="#about" className="hover:text-green-500">About Us</a>
          <a href="#gallery" className="hover:text-green-500">Gallery</a>
          <a href="#episodes" className="hover:text-green-500">Online Episodes</a>
          <a href="#sketches" className="hover:text-green-500">Sketches</a>
          <a href="#schedule" className="hover:text-green-500">Schedule</a>
          <a href="#contact" className="hover:text-green-500">Contact</a>
        </nav>
      </div>
    </header>
  );
}