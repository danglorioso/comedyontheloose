"use client";

import React, { useState } from "react";
import { FaVideo } from "react-icons/fa";

type ScheduleItem = {
  time: string;
  title: string;
  season: string;
  sketches: string[];
};

type WeeklySchedule = {
  [day: string]: ScheduleItem[];
};

const scheduleData: WeeklySchedule = {
  Sunday: [
    {
      time: "4:00 PM",
      title: "Comedy on the Loose",
      season: "Season 2, Episode 4",
      sketches: [
        "Halloween Hoarding",
        "Guide to Camping",
        "Communication Errors",
        "It’s Not Broken",
      ],
    },
  ],
  Monday: [
    {
      time: "9:00 AM",
      title: "Comedy on the Loose",
      season: "Season 2, Episode 4",
      sketches: [
        "Halloween Hoarding",
        "Guide to Camping",
        "Communication Errors",
        "It’s Not Broken",
      ],
    },
    {
      time: "4:00 PM",
      title: "Comedy on the Loose",
      season: "Season 2, Episode 4",
      sketches: [
        "Halloween Hoarding",
        "Guide to Camping",
        "Communication Errors",
        "It’s Not Broken",
      ],
    },
  ],
  Tuesday: [],
  Wednesday: [
    {
      time: "10:00 AM",
      title: "Comedy on the Loose",
      season: "Season 2, Episode 4",
      sketches: [
        "Halloween Hoarding",
        "Guide to Camping",
        "Communication Errors",
        "It’s Not Broken",
      ],
    },
  ],
  Thursday: [],
  Friday: [],
  Saturday: [
    {
      time: "7:32 PM",
      title: "Comedy on the Loose",
      season: "Season 2, Episode 4",
      sketches: [
        "Halloween Hoarding",
        "Guide to Camping",
        "Communication Errors",
        "It’s Not Broken",
      ],
    },
  ],
};

const days = Object.keys(scheduleData);

const ScheduleAccordion: React.FC = () => {
  const [activeDay, setActiveDay] = useState<string>("Sunday");

  const dailySchedule = scheduleData[activeDay];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-12">
        <h1 className="text-black text-4xl font-bold mb-4 pb-5">Watch Episodes Live</h1>

      {/* Days Tabs */}
      <div className="flex justify-between border-b border-primary mb-4 overflow-x-auto">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`py-2 px-4 font-semibold text-lg focus:outline-none ${
              activeDay === day
                ? "text-black border-b-4 border-primary"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Schedule Display */}
      <div className="bg-gray-100 border-2 border-primary p-6 rounded-md min-h-[150px]">
        <h2 className="text-2xl text-black font-semibold mb-4">AIRING TIMES:</h2>

        {dailySchedule.length === 0 ? (
          <p className="text-lg text-gray-600 italic">Not Airing</p>
        ) : (
          dailySchedule.map((item, index) => (
            <div key={index} className="mb-6">
              <p className="text-2xl text-black  font-bold mb-1">{item.time}</p>
              <p className="font-bold text-black">{item.title}</p>
              <p className="mb-1 text-black">{item.season}</p>
              <p className="text-black">
                Sketches include:{" "}
                <span className="font-semibold text-black">
                  {item.sketches.join(", ")}.
                </span>
              </p>
            </div>
          ))
        )}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-red-500 text-white px-6 py-3 rounded-md text-lg flex items-center gap-2 hover:bg-red-600 transition">
          <FaVideo />
          View Live Channel
        </button>
      </div>
    </div>
  );
};

export default ScheduleAccordion;
