import Carousel from "./components/Carousel";
import WatchBanner from "./components/WatchBanner";
import WhatIs from "./components/WhatIs";

const slides = [
  {
    imageUrl: "/banner/banner1.png"
  },
  {
    imageUrl: "/banner/banner2.png",
    title: "NEW SKETCH: LOUD LIBRARY",
    subtitle: "The library is supposed to be a quiet place, except when it isn't...",
    buttonText: "Watch Now",
    buttonLink: "/sketches",
  },
  {
    imageUrl: "/banner/banner3.png",
    title: "NEW GUESTS: UNBOXING",
    subtitle: "A random box has shown up at the house and no one knows what's in it. What could it be?!",
    buttonText: "Watch Now",
    buttonLink: "/sketches",
  },
  {
    imageUrl: "/banner/banner4.png",
    title: "NEW EPISODE: SEASEON 2, EPISODE 4",
    subtitle: "Check out our latest episode on LCTV!",
    buttonText: "Watch Now",
    buttonLink: "/episodes",
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
