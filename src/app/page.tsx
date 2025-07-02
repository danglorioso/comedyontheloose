import Carousel from "./components/Carousel";
import WatchBanner from "./components/WatchBanner";
import WhatIs from "./components/WhatIs";

const slides = [
  {
    imageUrl: "/banner/banner1.png",
    title: "Comedy on the Loose",
    subtitle: "Unscripted, uncensored, unbelievably funny.",
    buttonText: "Watch Now",
    buttonLink: "/episodes",
  },
  {
    imageUrl: "/banner/banner2.png",
    title: "Season 5 Premiere",
    subtitle: "Streaming now on Littleton Community TV",
    buttonText: "See Schedule",
    buttonLink: "/schedule",
  },
];

export default function Home() {
  return (
    <div>
      <Carousel slides={slides} autoPlayInterval={6000} />
      <WatchBanner/>
      <WhatIs/>
    </div>
  );
}
