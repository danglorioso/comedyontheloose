import React from "react";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 p-4 shadow-md border-t-4 border-[#3dbc27]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 p-4 items-start">
        {/* Column 1 - Logo */}
        <div className="md:col-span-1 flex justify-center md:justify-end items-center md:items-end">
          <img
            src="/favicon.png"
            alt="Comedy on the Loose"
            className="h-25 w-auto mt-2"
          />
        </div>

        {/* Column 2 - About Us */}
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-3xl text-white">About Us</h2>
          <p className="text-md text-gray-400 mt-2">
            Comedy on the Loose is a sketch comedy TV show that airs exclusively
            on Littleton Community Television. Created by Dan and Cam in 2016,
            it showcases their evolution from homemade videos to full-length,
            studio-produced episodes.
          </p>
        </div>

        {/* Column 3 - Watch Us */}
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-3xl text-white">Watch Us On</h2>
          <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start md:gap-10 mt-2">
            <a
              href="https://cloud.castus.tv/vod/littleton/video/64025b373e11cd0008700758?page=HOME&type=live"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-80"
            >
              <img
                src="/lctv.png"
                alt="LCTV"
                className="h-22 w-auto"
              />
            </a>
            <a
              href="https://www.youtube.com/@comedyontheloose"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-80"
            >
              <img
                src="/yt.png"
                alt="YouTube"
                className="h-22 pb-2 pt-10 w-auto"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center mt-6">
          {/* Footer Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="/SubToCOTL"><FaYoutube size={24} /></a>
          <a href="/insta"><FaInstagram size={24} /></a>
          <a href="/facebook"><FaFacebook size={24} /></a>
          <a href="/twitter"><FaTwitter size={24} /></a>
        </div>

        <p className="mb-2 text-md text-slate-300 leading-tight">
          Website created by{" "}
          <a
            href="https://danglorioso.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-slate-200 transition-colors duration-300"
          >
            Dan Glorioso
          </a>
          .
        </p>
        <p className="text-md text-neutral-300 leading-tight">
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
