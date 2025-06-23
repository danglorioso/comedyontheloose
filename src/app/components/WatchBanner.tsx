"use client";

import React from "react";
import { FaPlayCircle, FaCalendarAlt } from "react-icons/fa";

export default function WatchUs() {
  return (
    <section className="bg-[#3DBC27] py-5">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center md:flex-row text-white text-center md:text-left gap-8">
        {/* Watch Online */}
        <div className="flex flex-col md:flex-row items-center text-right gap-4">
          <h2 className="text-4xl font-bold leading-none">
            WATCH US<br />ONLINE:
          </h2>
          <a
            href="#episodes"
            className="flex items-center justify-center gap-2 bg-[#73b666] border border-white px-10 py-4 rounded-md font-bold text-white hover:bg-[#6ac954] transition-colors"
          >
            <FaPlayCircle className="w-6 h-6"/>
            <h2 className="text-2xl font-bold">ONLINE EPISODES</h2>
          </a>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-16 w-px bg-white opacity-50" />

        {/* Watch on TV */}
        <div className="flex flex-col md:flex-row items-center text-right gap-4">
          <h2 className="text-4xl font-bold leading-none">
            WATCH US<br />ON TV:
          </h2>
          <a
            href="#schedule"
            className="flex items-center justify-center gap-2 bg-[#D04D44] px-10 py-4 rounded-md font-bold text-white border border-white hover:bg-[#d57875] transition-colors"
          >
            <FaCalendarAlt className="w-6 h-6" />
            <h2 className="text-2xl font-bold">AIRING SCHEDULE</h2>
          </a>
        </div>
      </div>
    </section>
  );
}
