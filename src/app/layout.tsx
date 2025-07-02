import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Comedy on the Loose - Sketch Comedy TV Show",
  description: "Sketch comedy TV show",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" className={`${poppins.variable} ${oswald.variable}`}>
      <body
        className={`bg-black antialiased flex flex-col min-h-screen`}
      >
        {/* Header */}
        <div className="flex-shrink-0">
          <Header />
        </div>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <div className="flex-shrink-0">
          <Footer />
        </div>
      
        {/* Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
