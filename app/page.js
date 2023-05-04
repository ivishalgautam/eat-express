import Vegetarian from "./components/Vegetarian";
import Popular from "./components/Popular";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

export default function Home() {
  return (
    <main className="h-full text-gray-950 dark:text-gray-100 bg-light dark:bg-gray-dark px-4 sm:px-14 md:px-20 lg:px-24">
      <Popular font={bebas.className} />
      <Vegetarian font={bebas.className} />
    </main>
  );
}
