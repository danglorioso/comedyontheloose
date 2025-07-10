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
    thumbnail: "/sketches/emergency-preparation.png",
    season: 1,
    episode: 1,
    date: "2017-04-07",
    url: "https://www.youtube.com/watch?v=43Y9_peVCGo",
  },
  {
    title: "20 Questions",
    thumbnail: "/sketches/20-questions.png",
    season: 1,
    episode: 2,
    date: "2017-04-14",
    url: "https://www.youtube.com/watch?v=91vE4F7OH28",
  },
  {
    title: "Quizzes of Oz",
    thumbnail: "/sketches/quizzes-of-oz.png",
    season: 1,
    episode: 3,
    date: "2017-04-21",
    url: "https://www.youtube.com/watch?v=tSeERpD0X1o",
  },
  {
    title: "Autocorrect 1",
    thumbnail: "/sketches/autocorrect-1.png",
    season: 1,
    episode: 2,
    date: "2017-04-28",
    url: "https://www.youtube.com/watch?v=bWaJzIX3VLk",
  },
  {
    title: "One If By Land",
    thumbnail: "/sketches/one-if-by-land.png",
    season: 1,
    episode: 2,
    date: "2017-05-05",
    url: "https://www.youtube.com/watch?v=V0Cy_TGErk0",
  },
  {
    title: "Awkwardly Waiting",
    thumbnail: "/sketches/awkwardly-waiting.png",
    season: 1,
    episode: 3,
    date: "2017-05-08",
    url: "https://www.youtube.com/watch?v=Mc-gAsMPP-E",
  },
  {
    title: "Everything Talkable",
    thumbnail: "/sketches/everything-talkable.png",
    season: 1,
    episode: 3,
    date: "2017-05-12",
    url: "https://www.youtube.com/watch?v=wJO3_iCskQQ",
  },
  {
    title: "An Unsilent Night",
    thumbnail: "/sketches/an-unsilent-night.png",
    season: 1,
    episode: 3,
    date: "2017-05-15",
    url: "https://www.youtube.com/watch?v=PPrVupDdHKE",
  },
  {
    title: "Old News",
    thumbnail: "/sketches/old-news.png",
    season: 1,
    episode: 3,
    date: "2017-05-15",
    url: "https://www.youtube.com/watch?v=Xa1CgVuQ4y4",
  },
  {
    title: "Bad Sketches",
    thumbnail: "/sketches/bad-sketches.png",
    season: 2,
    episode: 1,
    date: "2017-05-15",
    url: "https://www.youtube.com/watch?v=xa7-7zX9e2I",
  },
  {
    title: "The Birthday Card",
    thumbnail: "/sketches/the-birthday-card.png",
    season: 2,
    episode: 1,
    date: "2017-06-09",
    url: "https://www.youtube.com/watch?v=E-YY1rm7Q7s",
  },
  {
    title: "How to Write a Perfect Essay",
    thumbnail: "/sketches/how-to-write-a-perfect-essay.png",
    season: 2,
    episode: 1,
    date: "2017-06-16",
    url: "https://www.youtube.com/watch?v=0cN4qzy72-E",
  },
  {
    title: "Autocorrect 2",
    thumbnail: "/sketches/autocorrect-2.png",
    season: 2,
    episode: 1,
    date: "2017-06-16",
    url: "https://www.youtube.com/watch?v=l5JkComXbGY",
  },
  {
    title: "Spelling Bee",
    thumbnail: "/sketches/spelling-bee.png",
    season: 2,
    episode: 1,
    date: "2017-06-16",
    url: "https://www.youtube.com/watch?v=Wbgnvmt8V3E",
  },
  {
    title: "Incorrect!",
    thumbnail: "/sketches/incorrect.png",
    season: 2,
    episode: 2,
    date: "2017-07-14",
    url: "https://www.youtube.com/watch?v=xcGwwJHyrL4",
  },
  {
    title: "No Questions Asked",
    thumbnail: "/sketches/no-questions-asked.png",
    season: 2,
    episode: 2,
    date: "2017-07-21",
    url: "https://www.youtube.com/watch?v=o-zXMeZ9wWo",
  },
  {
    title: "Old Weather",
    thumbnail: "/sketches/old-weather.png",
    season: 2,
    episode: 2,
    date: "2017-07-28",
    url: "https://www.youtube.com/watch?v=jABXvWaFVGE",
  },
  {
    title: "Silence",
    thumbnail: "/sketches/silence.png",
    season: 2,
    episode: 3,
    date: "2017-08-11",
    url: "https://www.youtube.com/watch?v=EA2iHsfSZ0w",
  },
  {
    title: "But Seriously",
    thumbnail: "/sketches/but-seriously.png",
    season: 2,
    episode: 3,
    date: "2017-08-18",
    url: "https://www.youtube.com/watch?v=L9eoyrfLGJ0",
  },
  {
    title: "Car Directions",
    thumbnail: "/sketches/car-directions.png",
    season: 2,
    episode: 3,
    date: "2017-09-29",
    url: "https://www.youtube.com/watch?v=hYyoQrUD6wU",
  },
  {
    title: "Crossword Problems",
    thumbnail: "/sketches/crossword-problems.png",
    season: 2,
    episode: 3,
    date: "2017-10-20",
    url: "https://www.youtube.com/watch?v=Sb-MQ2kLcMs",
  },
  {
    title: "Halloween Hoarding",
    thumbnail: "/sketches/halloween-hoarding.png",
    season: 2,
    episode: 4,
    date: "2017-10-31",
    url: "https://www.youtube.com/watch?v=N6Vkrbeqm1Q",
  },
  {
    title: "Guide to Camping",
    thumbnail: "/sketches/guide-to-camping.png",
    season: 2,
    episode: 4,
    date: "2017-11-24",
    url: "https://www.youtube.com/watch?v=F8KOSOAsyCM",
  },
  {
    title: "It’s Not Broken",
    thumbnail: "/sketches/its-not-broken.png",
    season: 2,
    episode: 4,
    date: "2017-12-08",
    url: "https://www.youtube.com/watch?v=667v76SFvls",
  },
  {
    title: "Unboxing",
    thumbnail: "/sketches/unboxing.png",
    season: 3,
    episode: 1,
    date: "2018-06-15",
    url: "https://www.youtube.com/watch?v=XlCrqFDuQ0k",
  },
  {
    title: "Loud Library",
    thumbnail: "/sketches/loud-library.png",
    season: 3,
    episode: 1,
    date: "2018-07-07",
    url: "https://www.youtube.com/watch?v=7Svyl50r1lk",
  },
  {
    title: "Guide to Procrastination",
    thumbnail: "/sketches/guide-to-procrastination.png",
    season: 3,
    episode: 1,
    date: "2018-08-10",
    url: "https://www.youtube.com/watch?v=XuS9bea1mRY",
  },
];

export default function SketchGalleryPage() {
    return (
        <section className="px-4 py-12 max-w-screen-xl mx-auto">
            <h1 className="text-black text-4xl font-bold mb-10 text-center">
                Browse Sketches
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {[...sketches].reverse().map((sketch, index) => (
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
