import EpisodeGrid from "../components/EpisodeGrid";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Online Episodes - Comedy on the Loose",
  description: "Watch our online episodes of Comedy on the Loose.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
  ]
};

export default function EpisodesPage() {
  return (
    <div>
      <EpisodeGrid />
    </div>
  );
}
