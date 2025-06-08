"use client";

import React from "react";
import { FaPlayCircle, FaCalendarAlt } from "react-icons/fa";

export default function WatchUs() {
  return (
    <section className="bg-[#3dbc27] py-3">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-items-end-safe items-center text-white text-center md:text-left gap-8">
        {/* Watch Online */}
        <div className="flex flex-col md:flex-row items-center text-right gap-4">
          <h2 className="text-3xl font-bold leading-tight">
            WATCH US<br />ONLINE:
          </h2>
          <a
            href="#episodes"
            className="flex items-center gap-2 bg-[#73b666] border border-white px-6 py-3 rounded-md font-bold text-white hover:bg-[#6ac954] transition-colors"
          >
            <FaPlayCircle className="w-5 h-5" />
            ONLINE EPISODES
          </a>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-16 w-px bg-white opacity-50" />

        {/* Watch on TV */}
        <div className="flex flex-col md:flex-row items-center text-right gap-4">
          <h2 className="text-3xl font-bold leading-tight">
            WATCH US<br />ON TV:
          </h2>
          <a
            href="#schedule"
            className="flex items-center gap-2 bg-[#D04D44] px-6 py-3 rounded-md font-bold text-white border border-white hover:bg-white hover:text-[#D04D44] transition-colors"
          >
            <FaCalendarAlt className="w-5 h-5" />
            AIRING SCHEDULE
          </a>
        </div>
      </div>
    </section>
  );
}
