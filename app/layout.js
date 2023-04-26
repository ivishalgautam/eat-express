import Navbar from "./components/Navbar";
import "./globals.css";
import { Outfit } from "next/font/google";
import { Providers } from "./store/Provider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Eat Express",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} h-screen min-h-screen bg-slate-100 dark:bg-slate-950`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
