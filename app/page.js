import Vegetarian from "./components/Vegetarian";
import Popular from "./components/Popular";

export default function Home() {
  return (
    <main className="min-h-full text-gray-950 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 px-4 sm:px-14 md:px-20 lg:px-24">
      <Popular />
      <Vegetarian />
    </main>
  );
}
