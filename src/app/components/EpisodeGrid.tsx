"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCalendar, FaPlay } from "react-icons/fa";
import Link from "next/link";

interface Episode {
  season: number;
  episode: number;
  date: string;
  aired: boolean;
  thumbnail: string;
  sketches: { name: string; link?: string }[];
  url: string;
}

const episodes: Episode[] = [
    {
        season: 1,
        episode: 1,
        date: "2016-04-06",
        aired: true,
        thumbnail: "/episodes/s1e1.png",
        sketches: [
            { name: "Emergency Preparation", link: "/sketches/emergency-preparation" },
            { name: "Your Conscience 1" },
            { name: "Hall of the Mountain" },
            { name: "Words of Encouragement" },
        ],
        url: "https://comedyontheloose.com/s1e1",
    },
    {
        season: 1,
        episode: 2,
        date: "2016-07-07",
        aired: true,
        thumbnail: "/episodes/s1e2.png",
        sketches: [
            { name: "20 Questions", link: "/sketches/20-questions" },
            { name: "Science 'Fail' Project", link: "" },
            { name: "Quizzes of Oz", link: "/sketches/quizzes-of-oz" },
            { name: "Autocorrect 1", link: "/sketches/autocorrect-1" },
            { name: "One If By Land", link: "/sketches/one-if-by-land" },
        ],
        url: "https://comedyontheloose.com/s1e2",
    },
    {
        season: 1,
        episode: 3,
        date: "2016-11-23",
        aired: true,
        thumbnail: "/episodes/s1e3.png",
        sketches: [
            { name: "Everything Talkable", link: "/sketches/everything-talkable" },
            { name: "Awkwardly Waiting", link: "/sketches/awkwardly-waiting" },
            { name: "An Unsilent Night", link: "/sketches/an-unsilent-night" },
            { name: "Old News", link: "/sketches/old-news" },
        ],
        url: "https://comedyontheloose.com/s1e3",
    },
    {
        season: 1,
        episode: 4,
        date: "2016-12-18",
        aired: true,
        thumbnail: "/episodes/s1e4.png",
        sketches: [
            { name: "Christmas in Australia" },
            { name: "Gift Exchange" },
            { name: "‘Twas the Night" },
        ],
        url: "https://comedyontheloose.com/s1e4",
    },
    {
        season: 2,
        episode: 1,
        date: "2017-03-09",
        aired: true,
        thumbnail: "/episodes/s2e1.png",
        sketches: [
            { name: "20 Questions", link: "/sketches/20-questions" },
            { name: "The Birthday Card", link: "/sketches/the-birthday-card" },
            { name: "How to Write a Perfect Essay", link: "/sketches/how-to-write-a-perfect-essay" },
            { name: "Autocorrect 2", link: "/sketches/autocorrect-2" },
            { name: "Spelling Bee", link: "/sketches/spelling-bee" },
        ],
        url: "https://example.com/watch/s2e1",
    },
    {
        season: 2,
        episode: 2,
        date: "2017-05-21",
        aired: true,
        thumbnail: "/episodes/s2e2.png",
        sketches: [
            { name: "Incorrect!", link: "/sketches/incorrect" },
            { name: "Stuck Outside" },
            { name: "No Questions Asked", link: "/sketches/no-questions-asked" },
            { name: "Old Weather", link: "/sketches/old-weather" },
        ],
        url: "https://example.com/watch/s2e2",
    },
    {
        season: 2,
        episode: 3,
        date: "2017-05-21",
        aired: true,
        thumbnail: "/episodes/s2e3.png",
        sketches: [
            { name: "Silence", link: "/sketches/silence" },
            { name: "But Seriously", link: "/sketches/but-seriously" },
            { name: "Car Directions", link: "/sketches/car-directions" },
            { name: "Crossword Problems", link: "/sketches/crossword-problems" },
        ],
        url: "https://example.com/watch/s2e3",
    },
    {
        season: 2,
        episode: 4,
        date: "2017-10-31",
        aired: true,
        thumbnail: "/episodes/s2e4.png",
        sketches: [
            { name: "Halloween Hoarding", link: "/sketches/halloween-hoarding" },
            { name: "Guide to Camping", link: "/sketches/guide-to-camping" },
            { name: "Communication Errors" },
            { name: "It’s Not Broken", link: "/sketches/its-not-broken" },
        ],
        url: "https://example.com/watch/s2e4",
    },
    {
        season: 3,
        episode: 1,
        date: "Unreleased",
        aired: false,
        thumbnail: "/episodes/s3e1.png",
        sketches: [
            { name: "Loud Library", link: "/sketches/loud-library" },
            { name: "Unboxing", link: "/sketches/unboxing" },
            { name: "Guide to Procrastination", link: "/sketches/guide-to-procrastination" },
            { name: "Yobrella" },
        ],
        url: "https://comedyontheloose.com/s3e1",
    },
];

export default function OnlineEpisodes() {
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = filter
    ? episodes.filter((ep) => `Season ${ep.season}` === filter)
    : episodes;

  const seasons = Array.from(
    new Set(episodes.map((ep) => `Season ${ep.season}`))
  ).sort((a, b) => Number(b.split(" ")[1]) - Number(a.split(" ")[1]));

  return (
    <section className="px-4 py-6 md:py-12 max-w-screen-xl mx-auto">
      <h1 className="text-black text-4xl font-bold mb-6">Watch Episodes Online</h1>

      {/* Filter by Season */}
      <div className="mb-8">
        <span className="text-black mr-2 text-lg font-medium">Filter by season:</span>
        <button
          onClick={() => setFilter(null)}
          className={`px-3 py-1 rounded mr-2 text-sm ${
            filter === null
              ? "bg-[#3dbc27] text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          All
        </button>
        {seasons.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-3 py-1 rounded mr-2 text-sm ${
              filter === s ? "bg-[#3dbc27] text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="space-y-12">
        {filtered
          .sort((a, b) => b.season - a.season || b.episode - a.episode)
          .map((ep, idx, arr) => {
            const isFirstOfSeason =
              idx === 0 || arr[idx - 1].season !== ep.season;
            return (
              <div key={`${ep.season}-${ep.episode}`}>
                {isFirstOfSeason && (
                  <h2 className="text-black text-2xl font-bold border-b border-gray-400 pb-1 mb-4">
                    Season {ep.season}
                  </h2>
                )}

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                    <div>
                    <Image
                        src={ep.thumbnail}
                        alt={ep.season + ep.episode + " Thumbnail"}
                        width={300}
                        height={180}
                        className="rounded"
                    />
                    </div>

                    <div className="col-span-2">
                        <h3 className="text-black text-3xl font-semibold">
                            Season {ep.season}, Episode {ep.episode}
                        </h3>
                        <div className="flex items-center gap-3 text-base font-normal text-black mt-1">
                            <FaCalendar className="w-4 h-4" />
                            <span className="text-black font-normal">
                                {ep.aired
                                ? new Date(ep.date).toLocaleDateString()
                                : "Unreleased"}
                            </span>
                            {ep.aired && (
                                <span className="flex items-center gap-1 ml-3">
                                <span className="inline-block w-2 h-2 rounded-full bg-red-500" />
                                <span className="font-normal">Aired</span>
                                </span>
                            )}
                        </div>

                        <p className="mt-3 text-md text-black">
                            <span className="font-medium">Sketches include:</span>{" "}
                            {ep.sketches.map((sketch, index) => {
                                const isLast = index === ep.sketches.length - 1;
                                const isSecondLast = index === ep.sketches.length - 2;
                                const separator = isLast
                                ? "."
                                : isSecondLast
                                ? ", and "
                                : ", ";
                                return (
                                  <span key={sketch.name}>
                                    {sketch.link ? (
                                      <Link 
                                        href={sketch.link} 
                                        target="_blank"
                                        className="text-[#34a924] hover:underline">
                                        {sketch.name}
                                      </Link>
                                    ) : (
                                      <span>{sketch.name}</span>
                                    )}
                                    {separator}
                                  </span>
                                );
                            })}
                        </p>
                    </div>

                    <div className="flex items-center justify-start md:justify-end">
                        <Link
                            href={ep.url}
                            target="_blank"
                            className="flex items-center gap-2 px-4 py-2 bg-[#3dbc27] text-white rounded shadow hover:bg-[#36aa24] transition"
                        >
                            <FaPlay className="w-4 h-4" />
                            Watch Online
                        </Link>
                    </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
