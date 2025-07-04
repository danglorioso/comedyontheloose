"use client";

import React from "react";
import { FaTv } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export default function WaysToWatch() {
  return (
    <section className="bg-[#005395] py-12">
      <div className="max-w-screen-xl px-6 md:px-16 mx-auto">
            <div className="text-4xl text-center leading-none mt-2">
                WAYS TO WATCH
            </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Littleton Community Television */}
          <div className="border border-white p-8 text-white relative">
            <div className="flex justify-center mb-4">
              <FaTv className="text-5xl" />
            </div>
            <h3 className="text-4xl font-medium text-center mb-4">LITTLETON COMMUNITY TELEVISION</h3>
            <p className="text-lg text-center leading-relaxed">
              Watch our full-length episodes on Littleton Community Television! Our episodes include all sketches, funny transitions, and exclusive bloopers in one half-hour show! Find sketches that cannot be found anywhere else! Brand new episodes released every month.
            </p>
            <div className="flex justify-center mt-6">
              <a
                href="#"
                className="bg-white text-[#005395] font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition"
              >
                Watch on LCTV
              </a>
            </div>
          </div>

          {/* YouTube */}
          <div className="border border-white p-8 text-white relative">
            <div className="flex justify-center mb-4">
              <FaYoutube className="text-5xl" />
            </div>
            <h3 className="text-4xl font-medium text-center mb-4">YOUTUBE</h3>
            <p className="text-lg text-center leading-relaxed">
              Catch up on all of our sketches on our YouTube channel! Additionally, access our entire library of short skits and promotional videos. New sketches premiere every Friday at 6:00pm (EST) on our channel, so make sure you subscribe to be notified when we upload!
            </p>
            <div className="flex justify-center mt-6">
              <a
                href="#"
                className="bg-white text-[#005395] font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
