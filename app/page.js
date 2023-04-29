import Vegetarian from "./components/Vegetarian";
import Popular from "./components/Popular";

export default function Home() {
  return (
    <main className="h-full text-gray-950 dark:text-gray-100 bg-light dark:bg-gray-dark px-4 sm:px-14 md:px-20 lg:px-24">
      <Popular />
      <Vegetarian />
    </main>
  );
}
