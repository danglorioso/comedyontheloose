import AboutUs from "../components/AboutUs";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us - Comedy on the Loose",
  description: "Learn more about the creators and the show.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
  ]
};

export default function AboutUsPage() {
  return (
    <div>
      <AboutUs />
    </div>
  );
}
