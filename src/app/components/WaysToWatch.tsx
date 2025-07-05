"use client";

import React from "react";
import { FaTv } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export default function WaysToWatch() {
  return (
    <section className="bg-[#005395] py-12">
      <div className="max-w-screen-xl px-6 md:px-16 mx-auto">
        <div className="text-4xl font-medium text-center text-white">WAYS TO WATCH</div>

        <div className="mt-12 mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Shared styles */}
          {[
            {
              icon: <FaTv className="text-5xl text-white" />,
              title: "LITTLETON COMMUNITY TELEVISION",
              text: "Watch our full-length episodes on Littleton Community Television! Our episodes include all sketches, funny transitions, and exclusive bloopers in one half-hour show! Find sketches that cannot be found anywhere else! Brand new episodes released every month.",
              button: "Watch on LCTV",
              link: "#",
            },
            {
              icon: <FaYoutube className="text-5xl text-white" />,
              title: "YOUTUBE",
              text: "Catch up on all of our sketches on our YouTube channel! Additionally, access our entire library of short skits and promotional videos. New sketches premiere every Friday at 6:00pm (EST) on our channel, so make sure you subscribe to be notified when we upload!",
              button: "Watch on YouTube",
              link: "#",
            },
          ].map((item, idx) => (
            <div key={idx} className="relative border border-white pt-16 pb-16 my-4 px-8 text-white text-center">
              {/* Icon Overlapping Top Border */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#005395] px-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-4xl mb-4">{item.title}</h3>

              {/* Paragraph */}
              <p className="text-xl leading-relaxed">{item.text}</p>

              {/* Button Overlapping Bottom Border */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <a
                  href={item.link}
                  className="bg-white text-[#005395] text-xl font-semibold px-6 py-2 shadow hover:bg-gray-100 transition"
                >
                  {item.button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
