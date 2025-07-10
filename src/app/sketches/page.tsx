import SketchGrid from "../components/SketchGrid";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sketches - Comedy on the Loose",
  description: "Watch our sketches of Comedy on the Loose.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
  ]
};

export default function SketchesPage() {
  return (
    <div>
      <SketchGrid />
    </div>
  );
}
