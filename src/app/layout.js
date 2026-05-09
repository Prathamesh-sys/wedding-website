import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" });

export const metadata = {
  title: "Wedding Invitation | Ashwini & Atul",
  description: "Join us in celebrating our wedding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} font-sans bg-stone-950 text-stone-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
