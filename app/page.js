"use client";

import Vegetarian from "./components/Vegetarian";
import Popular from "./components/Popular";
import { useEffect, useState } from "react";

export default function Home() {
  let innerWidth = window.innerWidth;
  const [width, setWidth] = useState(innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <main className="min-h-full text-gray-950 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 px-4 sm:px-14 md:px-20 lg:px-24">
      <Popular width={width} />
      <Vegetarian width={width} />
    </main>
  );
}
