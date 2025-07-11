"use client";

import React from "react";
import { FaPlayCircle, FaCalendarAlt } from "react-icons/fa";

export default function WatchUs() {
  return (
    <section className="bg-[#3DBC27] py-5 px-10">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center md:flex-row text-white text-center md:text-left gap-8">
        {/* Watch Online */}
        <div className="flex flex-col md:flex-row items-center text-right gap-8">
          <h2 className="text-4xl font-bold leading-none">
            WATCH US<br />ONLINE:
          </h2>
          <a
            href="#episodes"
            className="flex items-center justify-center gap-2 bg-[#73b666] border border-white px-10 py-4 rounded-md font-bold text-white hover:bg-white hover:text-[#73b666] hover:border-[#73b666] transition-all duration-300 transform hover:scale-105"
          >
            <FaPlayCircle className="w-6 h-6"/>
            <h2 className="text-2xl font-bold">ONLINE EPISODES</h2>
          </a>
        </div>

        {/* Horizontal Divider on Mobile */}
        <div className="md:hidden w-3/4 h-px bg-white opacity-50" />

        {/* Vertical Divider on Desktop */}
        <div className="hidden md:block h-16 w-px bg-white opacity-50" />

        {/* Watch on TV */}
        <div className="flex flex-col md:flex-row items-center text-right gap-8">
          <h2 className="text-4xl font-bold leading-none">
            WATCH US<br />ON TV:
          </h2>
          <a
            href="#schedule"
            className="flex items-center justify-center gap-2 bg-[#D04D44] px-10 py-4 rounded-md font-bold text-white border border-white hover:bg-white hover:text-[#D04D44] hover:border-[#D04D44] transition-all duration-300 transform hover:scale-105"
          >
            <FaCalendarAlt className="w-6 h-6" />
            <h2 className="text-2xl font-bold">AIRING SCHEDULE</h2>
          </a>
        </div>
      </div>
    </section>
  );
}
