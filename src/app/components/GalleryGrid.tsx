"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Sketch {
  src: string;
  alt: string;
  caption: string;
}

const sketches: Sketch[] = [
  { src: "/gallery/20Questions1.png", alt: "20 Questions", caption: "20 Questions" },
  { src: "/gallery/AnUnsilentNight1.png", alt: "An Unsilent Night", caption: "An Unsilent Night" },
  { src: "/gallery/AwkwardlyWaiting1.png", alt: "Awkwardly Waiting", caption: "Awkwardly Waiting" },
  { src: "/gallery/BadSketches1.png", alt: "Bad Sketches", caption: "Bad Sketches" },
  { src: "/gallery/ButSeriously1.png", alt: "But Seriously", caption: "But Seriously" },
  { src: "/gallery/CarDirections1.png", alt: "Car Directions", caption: "Car Directions" },
  { src: "/gallery/CrosswordProblems1.png", alt: "Crossword Problems", caption: "Crossword Problems" },
  { src: "/gallery/EmergencyPreparation1.png", alt: "Emergency Preparation", caption: "Emergency Preparation" },
  { src: "/gallery/EmergencyPreparation2.png", alt: "Emergency Preparation", caption: "Emergency Preparation" },
  { src: "/gallery/EmergencyPreparation3.png", alt: "Emergency Preparation", caption: "Emergency Preparation" },
  { src: "/gallery/EverythingTalkable1.png", alt: "Everything Talkable", caption: "Everything Talkable" },
  { src: "/gallery/GuideToCamping1.png", alt: "Guide to Camping", caption: "Guide to Camping" },
  { src: "/gallery/HalloweenHoarding1.png", alt: "Halloween Hoarding", caption: "Halloween Hoarding" },
  { src: "/gallery/HowToWriteAPerfectEssay1.png", alt: "How to Write a Perfect Essay", caption: "How to Write a Perfect Essay" },
  { src: "/gallery/Incorrect!1.png", alt: "Incorrect!", caption: "Incorrect!" },
  { src: "/gallery/It'sNotBroken1.png", alt: "It's Not Broken", caption: "It's Not Broken" },
  { src: "/gallery/LoudLibrary1.png", alt: "Loud Library", caption: "Loud Library" },
  { src: "/gallery/NoQuestionsAsked1.png", alt: "No Questions Asked", caption: "No Questions Asked" },
  { src: "/gallery/OldNews1.png", alt: "Old News", caption: "Old News" },
  { src: "/gallery/OldWeather1.png", alt: "Old Weather", caption: "Old Weather" },
  { src: "/gallery/OneIfByLand1.png", alt: "One If By Land", caption: "One If By Land" },
  { src: "/gallery/QuizzesofOz1.png", alt: "Quizzes of Oz", caption: "Quizzes of Oz" },
  { src: "/gallery/S2E1Outro1.png", alt: "Season 2 Episode 1 Outro", caption: "S2E1 Outro" },
  { src: "/gallery/ScienceFailProject1.png", alt: "Science Fail Project", caption: "Science Fail Project" },
  { src: "/gallery/Season1Episode2Outro1.png", alt: "Season 1 Episode 2 Outro", caption: "Season 1 Episode 2 Outro" },
  { src: "/gallery/Silence1.png", alt: "Silence", caption: "Silence" },
  { src: "/gallery/SpellingBee1.png", alt: "Spelling Bee", caption: "Spelling Bee" },
  { src: "/gallery/StuckOutside1.png", alt: "Stuck Outside", caption: "Stuck Outside" },
  { src: "/gallery/TheBirthdayCard1.png", alt: "The Birthday Card", caption: "The Birthday Card" },
  { src: "/gallery/XMasInAustralia1.png", alt: "XMas in Australia", caption: "XMas in Australia" },
];

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function GalleryGrid() {
  const [shuffledSketches, setShuffledSketches] = useState<Sketch[]>([]);

  useEffect(() => {
    setShuffledSketches(shuffleArray(sketches));
  }, []);

  return (
    <section className="px-4 py-12 max-w-screen-xl mx-auto">
      <h1 className="text-black text-4xl font-bold mb-10 text-center">
        Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {shuffledSketches.map((sketch, index) => (
          <div key={index} className="flex flex-col justify-center">
            <Image
              src={sketch.src}
              alt={sketch.alt}
              width={600}
              height={356}
              className="rounded h-auto w-full object-cover"
            />
            <p className="text-sm text-center mt-2 text-black">
              {sketch.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}