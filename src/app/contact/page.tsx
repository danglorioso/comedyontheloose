import ContactForm from "../components/ContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact - Comedy on the Loose",
  description: "Get in touch with us for inquiries and feedback",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
  ]
};

export default function ContactPage() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}
