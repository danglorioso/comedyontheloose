"use client";

import React from "react";
import Image from "next/image";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="max-w-screen-xl px-4 sm:px-8 md:px-12 lg:px-16 mx-auto py-6 text-gray-800">
      {/* Announcement */}
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded mb-8">
        <p className="font-bold text-lg">Season 3 is on the way!</p>
        <p className="text-sm">Check back later for updated information.</p>
      </div>

    {/* What is COTL Section */}
    <div className="flex flex-col md:grid md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="order-2 md:order-none flex flex-col justify-center h-full">
            <Image
                src="/images/4-multi-thumbnail.png"
                alt="Sketches"
                width={600}
                height={400}
                className="rounded w-full h-auto mx-auto"
            />
            <p className="text-sm text-center md:mb-0 mb-10">
            A snapshot of some of our most popular sketches.
            </p>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center order-1 md:order-none">
            <div className="border-t-1 border-[#3dbc27]"></div>
            <h2 className="text-4xl font-bold my-8 text-green-600">
                What is "Comedy on the Loose"?
            </h2>
            <p className="mb-4">
            <strong>“Comedy on the Loose”</strong> is a self-produced sketch
            comedy show that premiered on Littleton Community Television (LCTV)
            in April 2016. Created by friends Dan and Cam, who handle all
            aspects of the show from acting and directing to editing and
            writing, it quickly became popular, drawing hundreds of views per
            episode each month and topping LCTV’s popularity charts.
            </p>
            <p className="mb-0 md:mb-4">
            Since its start in 2016, the show has released eight episodes over
            three seasons, each one well-received for its humor. Dan and Cam
            also post new sketches weekly on YouTube, attracting thousands of
            viewers. With over seven years of experience in sketch comedy, Dan
            and Cam continue to bring their passion and creativity to every
            project, aiming to make a lasting impact on the comedy world.
            </p>
        </div>
    </div>

    {/* BTS Section */}
    <div className="flex flex-col md:grid md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center order-1 md:order-none">
            <div className="border-t-1 border-[#3dbc27]"></div>
            <h2 className="text-4xl font-bold my-8 text-green-600">
                Behind the Sketches
            </h2>
            <p className="mb-4">
            Each episode of Comedy on the Loose is the result of a detailed and
            collaborative creative process. It all starts with brainstorming 
            sessions, where we bounce around ideas, draft scripts, and workshop
            them through table reads. Cam takes the lead on writing, adapting
            funny moments from our lives into sharp, sketch-ready concepts. 
            Some sketches feature recurring characters or settings from past 
            episodes, creating an ongoing universe of inside jokes for our 
            viewers.
            </p>
            <p className="mb-0 md:mb-4">
            Once a script is finalized, we memorize lines and dedicate an 
            entire day to filming each sketch. Every shoot is hands-on — we 
            handle everything ourselves: set decoration, technical setup, 
            multi-camera recording, and of course, acting and directing. We 
            shoot with multiple angles, including wide and close-ups, while 
            recording audio separately to ensure high-quality sound. Dan leads
            post-production, which can take several months and includes video 
            editing, multi-audio mixing, sound design, and sometimes voice-overs.
            </p>
        </div>
        <div className="order-2 md:order-none flex flex-col justify-center h-full">
            <Image
                width={600}
                height={400}
                src="/gallery/EmergencyPreparation3.png"
                alt="Dan and Cam pilot episode"
                className="rounded w-full h-auto mx-auto"
            />
            <p className="text-sm text-center mt-2">
                Dan and Cam pictured in the first sketch of their pilot episode.
            </p>
        </div>
    </div>

    {/* Production, Promotion, and Passion Section */}
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="order-1 md:order-none flex flex-col justify-center h-full">
            <Image 
                width={600}
                height={400}
                src="/gallery/GuideToCamping1.png" 
                alt="Sketches" 
                className="rounded w-full h-auto mx-auto" 
            />
            <p className="text-sm text-center rounded-lg mt-2 md:mb-0 mb-10">
                Dan and Cam go outside. 
            </p>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center order-2 md:order-none mt-12 md:mt-0">
            <div className="border-t-1 border-[#3dbc27]"></div>
            <h2 className="text-4xl font-bold my-8 text-green-600">
                Production, Promotion, and Passion
            </h2>
            <p className="mb-4">
            In addition to producing the show, we also manage all the marketing.
            From creating promo videos and TV commercials for Littleton 
            Community Television to running our social media accounts and 
            website, we work hard to get the word out and grow our audience. 
            Our sketches follow a classic “bit” format: short, character-driven 
            scenes built around multiple jokes — simple setups with big payoffs.
            </p>
            <p className="md:mb-0 mb-4">
            Though we occasionally feature special guests, every sketch stars 
            the original duo — Dan and Cam. We're proud of our long-standing 
            partnership with LCTV, and we’re incredibly grateful for their 
            continued support over the years. Being able to keep the show going
            across multiple seasons is something we don’t take for granted.
            </p>
        </div>
    </div>

    {/* Why We Do It Section */}
    <div className="grid md:grid-cols-2 gap-0 md:gap-12">
        <div>
            <div className="border-t-1 border-[#3dbc27]"></div>
            <h2 className="text-4xl font-bold my-8 text-green-600">
                Why We Do It
            </h2>
            <p className="mb-4">
            At the end of the day, our goal is simple: to make people laugh. 
            Whether you’ve been watching us for years or just found us online, 
            we hope Comedy on the Loose brings a little humor to your day. 
            Thank you for watching — we can’t wait to share what’s next.
            </p>
        </div>
        <div className="flex flex-col justify-center mt-0 md:mt-12">
            <Image
                width={600}
                height={400}
                src="/gallery/BadSketches1.png"
                alt="Dan and Cam pilot episode"
                className="rounded w-full h-auto mx-auto"
            />
            <p className="text-sm text-center mt-2">
                Reviewing some of our sketch ideas. 
            </p>
        </div>
    </div>

      {/* Footer Icons */}
        <footer className="flex justify-center space-x-6 mt-12 text-gray-600">
            <a href="http://bit.ly/SubToCOTL"><FaYoutube size={24} /></a>
            <a href="http://bit.ly/COTLfacebook"><FaFacebook size={24} /></a>
            <a href="http://bit.ly/COTLtwitter"><FaTwitter size={24} /></a>
            <a href="http://bit.ly/COTLinsta"><FaInstagram size={24} /></a>
        </footer>

        <div className="flex justify-center mt-4">
            <a
                href="/contact"
                className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition inline-block text-center"
            >
                Contact Us
            </a>
        </div>
    </section>
  );
};
