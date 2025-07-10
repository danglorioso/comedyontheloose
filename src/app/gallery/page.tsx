import SketchGallery from "../components/SketchGallery";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gallery - Comedy on the Loose",
  description: "Explore the visual highlights of our sketches.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
  ]
};

export default function GalleryPage() {
  return (
    <div>
      <SketchGallery />
    </div>
  );
}
