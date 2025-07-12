"use client";

import React from "react";
import { FaFilm, FaUsers } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa6";

export default function SeasonThreePreview() {
  return (
    <section className="bg-[#e0ffe5] py-16">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          SEASON 3 BRINGS YOU MORE!
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          With season 3 right around the corner, learn what you can expect!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* MORE SKETCHES */}
          <div>
            <FaFilm className="text-5xl text-pink-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">MORE SKETCHES!</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Episode in season 3 will bring you more sketches per episode! Longer
              episodes will include behind the scenes footage, bloopers, and more
              hilarious mini-sketches.
            </p>
          </div>

          {/* NEW CAST MEMBERS */}
          <div>
            <FaUsers className="text-5xl text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">NEW CAST MEMBERS!</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              New season means new cast members! Over 5 new guests join the Comedy on
              the Loose family this season in never-before-seen sketches.
            </p>
          </div>

          {/* MORE SOCIAL MEDIA CONTENT */}
          <div>
            <FaHashtag className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">MORE SOCIAL MEDIA CONTENT!</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Follow us on all of our social media accounts so you don't miss any new
              content. We post behind the scenes footage, unreleased video, reminders
              for our new episode, sneak peaks of upcoming sketches, and much more!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
