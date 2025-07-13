// app/sketches/[slug]/page.tsx
import { redirect } from "next/navigation";

const sketchRedirects: Record<string, string> = {
  "emergency-preparation": "https://www.youtube.com/watch?v=43Y9_peVCGo",
  "20-questions": "https://www.youtube.com/watch?v=91vE4F7OH28",
  "quizzes-of-oz": "https://www.youtube.com/watch?v=tSeERpD0X1o",
  "autocorrect-1": "https://www.youtube.com/watch?v=bWaJzIX3VLk",
  "one-if-by-land": "https://www.youtube.com/watch?v=V0Cy_TGErk0",
  "awkwardly-waiting": "https://www.youtube.com/watch?v=Mc-gAsMPP-E",
  "everything-talkable": "https://www.youtube.com/watch?v=wJO3_iCskQQ",
  "an-unsilent-night": "https://www.youtube.com/watch?v=PPrVupDdHKE",
  "old-news": "https://www.youtube.com/watch?v=Xa1CgVuQ4y4",
  "bad-sketches": "https://www.youtube.com/watch?v=xa7-7zX9e2I",
  "the-birthday-card": "https://www.youtube.com/watch?v=E-YY1rm7Q7s",
  "how-to-write-a-perfect-essay": "https://www.youtube.com/watch?v=0cN4qzy72-E",
  "autocorrect-2": "https://www.youtube.com/watch?v=l5JkComXbGY",
  "spelling-bee": "https://www.youtube.com/watch?v=Wbgnvmt8V3E",
  "incorrect": "https://www.youtube.com/watch?v=xcGwwJHyrL4",
  "no-questions-asked": "https://www.youtube.com/watch?v=o-zXMeZ9wWo",
  "old-weather": "https://www.youtube.com/watch?v=jABXvWaFVGE",
  "silence": "https://www.youtube.com/watch?v=EA2iHsfSZ0w",
  "but-seriously": "https://www.youtube.com/watch?v=L9eoyrfLGJ0",
  "car-directions": "https://www.youtube.com/watch?v=hYyoQrUD6wU",
  "crossword-problems": "https://www.youtube.com/watch?v=Sb-MQ2kLcMs",
  "halloween-hoarding": "https://www.youtube.com/watch?v=N6Vkrbeqm1Q",
  "guide-to-camping": "https://www.youtube.com/watch?v=F8KOSOAsyCM",
  "its-not-broken": "https://www.youtube.com/watch?v=667v76SFvls",
  "unboxing": "https://www.youtube.com/watch?v=XlCrqFDuQ0k",
  "loud-library": "https://www.youtube.com/watch?v=7Svyl50r1lk",
  "guide-to-procrastination": "https://www.youtube.com/watch?v=XuS9bea1mRY",
};

interface SketchRedirectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function SketchRedirectPage(props: SketchRedirectPageProps) {
  const params = await props.params;
  const destination = sketchRedirects[params.slug];

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-4">
        <h1 className="text-2xl font-bold">Sketch not found</h1>
      </div>
    );
  }

  redirect(destination);
}
