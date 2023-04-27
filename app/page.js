"use client";

import Vegetarian from "./components/Vegetarian";
import Popular from "./components/Popular";
import { useEffect, useState } from "react";

export default function Home() {
  const [width, setWidth] = useState();
  useEffect(() => {
    window.addEventListener("resize", function () {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", function () {
        console.log("removed");
      });
    };
  }, [width]);

  return (
    <main className="min-h-full text-gray-950 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 px-4 sm:px-14 md:px-20 lg:px-24">
      <Popular width={width} />
      <Vegetarian width={width} />
    </main>
  );
}
