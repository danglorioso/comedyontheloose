import Carousel from "./components/Carousel";
import WatchBanner from "./components/WatchBanner";
import WhatIs from "./components/WhatIs";
import WaysToWatch from "./components/WaysToWatch";
import FavSketches from "./components/FavSketches";
import OurStats from "./components/OurStats";
import SeasonThreePreview from "./components/SeasonThreePreview";
import NewsletterSignup from "./components/NewsletterSignup";

const slides = [
  {
    imageUrl: "/banner/banner1.png"
  },
  {
    imageUrl: "/banner/banner2.png",
    title: "NEW SKETCH: LOUD LIBRARY",
    subtitle: "The library is supposed to be a quiet place, except when it isn't...",
    buttonText: "Watch Now",
    buttonLink: "https://www.youtube.com/watch?v=7Svyl50r1lk",
  },
  {
    imageUrl: "/banner/banner3.png",
    title: "NEW GUESTS: UNBOXING",
    subtitle: "A random box has shown up at the house and no one knows what's in it. What could it be?!",
    buttonText: "Watch Now",
    buttonLink: "https://www.youtube.com/watch?v=XlCrqFDuQ0k",
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
      <Carousel slides={slides} autoPlayInterval={5000} />
      <WatchBanner/>
      <WhatIs/>
      <WaysToWatch/>
      <FavSketches/>
      <OurStats/>
      <SeasonThreePreview/>
      <NewsletterSignup/>
    </div>
  );
}
