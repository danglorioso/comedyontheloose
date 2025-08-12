import React from "react";

const videoData = [
  {
    season: "SEASON 1",
    videos: [
      { id: "tSeERpD0X1o", title: "QUIZZES OF OZ" },
      { id: "43Y9_peVCGo", title: "EMERGENCY PREPARATION" },
      { id: "/wJO3_iCskQQ", title: "EVERYTHING TALKABLE" },
    ],
  },
  {
    season: "SEASON 2",
    videos: [
      { id: "F8KOSOAsyCM", title: "GUIDE TO CAMPING" },
      { id: "hYyoQrUD6wU", title: "CAR DIRECTIONS" },
      { id: "xa7-7zX9e2I", title: "BAD SKETCHES" },
    ],
  },
  {
    season: "SEASON 3",
    videos: [
      { id: "XlCrqFDuQ0k", title: "UNBOXING" },
      { id: "7Svyl50r1lk", title: "LOUD LIBRARY" },
      { id: "Oni4QTp7dEU", title: "SEASON 3 PROMO" },
    ],
  },
];

export default function FavoriteSketches() {
  return (
    <section className="bg-[#4BD35F] py-12">
      <div className="max-w-screen-xl px-6 md:px-16 mx-auto">
        <div className="text-4xl font-medium text-center text-white mb-2">OUR FAVORITE SKETCHES</div>
        <div className="flex items-center justify-center my-6">
            <div className="flex-grow border-t border-white"></div>
            <div className="mx-4 text-white text-xl">★</div>
            <div className="flex-grow border-t border-white"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoData.map((season, seasonIdx) => (
            <div key={seasonIdx}>
              <div className="text-center text-white font-medium text-3xl mb-4">{season.season}</div>
              <div className="space-y-6">
                {season.videos.map((video, videoIdx) => (
                  <div
                    key={videoIdx}
                    className="aspect-video border-2 border-primary overflow-hidden"
                  >
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
