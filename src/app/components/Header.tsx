// File: components/Header.tsx
"use client";

import React from 'react';

export default function Header() {
  return (
    <header className="bg-white text-white p-4 shadow-md border-t-4 border-green-500">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Comedy on the Loose" className="h-22 w-auto" />
        </div>
        <nav className="space-x-4 text-sm font-semibold">
          <a href="#about" className="hover:text-green-500">About Us</a>
          <a href="#sketches" className="hover:text-green-500">Sketches</a>
          <a href="#watch" className="hover:text-green-500">Watch</a>
          <a href="#news" className="hover:text-green-500">Newsletter</a>
          <a href="#contact" className="hover:text-green-500">Contact</a>
        </nav>
      </div>
    </header>
  );
}