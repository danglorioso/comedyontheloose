import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function WhatIs() {
  return (
    <section className="bg-white py-4 px-4">
      <div className="max-w-screen-xl md:px-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr] items-center mt-8">
          {/* Text Column */}
          <div className="px-6">
            <div className="border-t-1 border-primary"></div>
            <h2 className="text-4xl font-bold my-8 text-[#55595e]">
              WHAT IS "COMEDY ON THE LOOSE"?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Step into the world of laughter with <strong>Comedy on the Loose</strong>! 
              Premiering in April 2016 by Dan and Cam, Comedy on the Loose (COTL) 
              proudly calls Littleton Community Television (LCTV) its home and is 
              the cable network's sole sketch-comedy television show.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The journey kicked off in 2014 with homemade comedy videos and quickly evolved into 
              full-length episodes that continue to keep the laughs coming for three seasons. 
              Bringing their comedic prowess to life as both stars and creators, Dan and Cam are the 
              driving force of the show, taking on the role of writers, set designers, directors, 
              producers, and video editors to craft a genuine two-person production.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Don't miss a beat – tune in for new full-length episodes released monthly on LCTV 
              and enjoy fresh sketches on our YouTube channel every Friday at 6:00pm.
            </p>
              <a 
                href="/about-us"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 shadow hover:scale-105 transition-transform duration-200 my-8">
                  READ MORE <FaArrowRight />
              </a>
            <div className="border-t-1 border-primary mb-2"></div>
          </div>

          {/* Image Column */}
          <div className="flex justify-center mt-6 md:mt-0">
            <Image
              width={600}
              height={300}
              src="/images/danandcam.png"
              alt="Dan & Cam of Comedy on the Loose"
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="w-full mt-8 pb-8">
          <div className="aspect-video mt-8 mx-4">
            <iframe
              className="w-full h-full border-5 border-solid border-primary"
              src="https://www.youtube.com/embed/Oni4QTp7dEU"
              title="Comedy on the Loose Promo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}