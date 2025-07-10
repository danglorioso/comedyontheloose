import ScheduleAccordion from "../components/ScheduleAccordion";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Schedule - Comedy on the Loose",
  description: "Check out the weekly schedule to catch your favorite sketches",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
  ]
};

export default function SchedulePage() {
  return (
    <div>
      <ScheduleAccordion />
    </div>
  );
}
