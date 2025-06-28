"use client";

import React from "react";

export default function ImageCarousel() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-screen-xl px-16 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center mt-8">
          {/* Text Column */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-[#55595e]">
              IMAGE CAROUSEL
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              This is a placeholder for an image carousel component.
            </p>
          </div>

          {/* Image Column */}
          <div className="flex justify-center lg:justify-end">
            {/* Placeholder for image carousel */}
            <div className="w-full max-w-md h-auto bg-gray-200 rounded-lg shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}