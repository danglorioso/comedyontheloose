"use client";

import React, { useEffect, useState } from "react";
import { FaEye, FaHeart, FaClock, FaHourglassHalf } from "react-icons/fa";

type Stat = {
  icon: React.ReactNode;
  label: string;
  value: number;
};

const stats: Stat[] = [
  { icon: <FaEye className="text-[#3dbc27] text-2xl" />, label: "VIEWS", value: 6257 },
  { icon: <FaHeart className="text-[#3dbc27] text-2xl" />, label: "LIKES", value: 315 },
  { icon: <FaClock className="text-[#3dbc27] text-2xl" />, label: "MINUTES OF CONTENT", value: 735 },
  { icon: <FaHourglassHalf className="text-[#3dbc27] text-2xl" />, label: "HOURS OF FILMING", value: 300 },
];

export default function OurStats() {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    let start = performance.now();
    const duration = 1500; // in ms

    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const newCounts = stats.map((stat, i) =>
        Math.floor(progress * stat.value)
      );
      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-15"
      style={{
        backgroundImage: `url('/banner/COTL-Clouds-and-Kit-Drawing-digital-v1-50opacity.png')`,
      }}
    >
      <div className="py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">OUR STATS</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white text-center">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="relative border-2 border-[#3dbc27] px-6 py-8 "
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-4">
                  {stat.icon}
                </div>
                <div className="text-5xl font-semibold mt-4">
                  {counts[idx].toLocaleString()}
                </div>
                <div className="mt-4 text-md tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
