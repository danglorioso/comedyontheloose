"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaPlay } from "react-icons/fa";

interface Sketch {
  title: string;
  thumbnail: string;
  season: number;
  episode: number;
  date: string;
  url: string;
}

const sketches: Sketch[] = [
  {
    title: "Emergency Preparation",
    thumbnail: "/gallery/EmergencyPreparation1.png",
    season: 1,
    episode: 1,
    date: "2016-04-06",
    url: "/sketches/emergency-preparation",
  },
  {
    title: "Awkwardly Waiting",
    thumbnail: "/gallery/AwkwardlyWaiting1.png",
    season: 1,
    episode: 3,
    date: "2016-11-23",
    url: "/sketches/awkwardly-waiting",
  },
  {
    title: "Halloween Hoarding",
    thumbnail: "/gallery/HalloweenHoarding1.png",
    season: 2,
    episode: 4,
    date: "2017-10-31",
    url: "/sketches/halloween-hoarding",
  },
  // Add more as needed
];

export default function SketchGalleryPage() {
  return (
    <section className="px-4 py-12 max-w-screen-xl mx-auto">
      <h1 className="text-black text-4xl font-bold mb-10 text-center">
        Browse Sketches
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {sketches.map((sketch, index) => (
          <div key={index} className="flex flex-col">
            <Image
              src={sketch.thumbnail}
              alt={sketch.title}
              width={600}
              height={356.25}
              className="rounded w-full h-auto object-cover"
            />
            <h2 className="mt-3 text-lg font-bold text-black text-center">
              {sketch.title}
            </h2>
            <p className="text-sm text-center text-gray-700">
              Season {sketch.season}, Episode {sketch.episode}
            </p>
            <div className="mt-1 flex justify-center items-center gap-2 text-sm text-gray-600">
              <FaCalendar className="w-4 h-4" />
              <span className="text-black font-medium">
                {new Date(sketch.date).toLocaleDateString()}
              </span>
            </div>
            <div className="mt-4 flex justify-center">
              <Link
                href={sketch.url}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-[#36aa24] text-white rounded shadow hover:bg-[#2f981f] transition"
              >
                <FaPlay className="w-4 h-4" />
                Watch
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
