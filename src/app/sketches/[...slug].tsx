// pages/sketches/[...slug].tsx
import { GetServerSideProps } from "next";

const sketchRedirects: Record<string, string> = {
  "emergency-preparation": "https://www.youtube.com/watch?v=43Y9_peVCGo",
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slugArray = context.params?.slug;
  const slugPath = Array.isArray(slugArray) ? slugArray.join("/") : "";

  const destination = sketchRedirects[slugPath];

  if (destination) {
    return {
      redirect: {
        destination,
        permanent: false,
      },
    };
  }

  // Optional: fallback if slug not found
  return {
    notFound: true,
  };
};

export default function RedirectPage() {
  return null; // Won’t render because SSR redirect will happen
}
