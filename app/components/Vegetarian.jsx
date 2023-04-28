"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../store/features/vegetarianSlice";
import Card from "./Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import CardLoading from "./CardLoading";

const Vegetarian = () => {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 800
  );

  useEffect(() => {
    let currWidth = window.innerWidth;
    const handleResize = () => {
      setWidth(currWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    dispatch(fetchRecipes("vegetarian"));
  }, []);

  const { recipes, isLoading } = useSelector((store) => store.vegetarian);
  return (
    <div className="h-full mt-4 pb-5  flex flex-wrap gap-3">
      <h3 className="text-xl font-bold my-2 mb-1 tracking-widest">
        Vegetarian picks
      </h3>
      <Splide
        className="w-full"
        aria-label="My Favorite Images"
        options={{
          perPage: width < 400 ? 1 : width < 740 ? 2 : width < 960 ? 3 : 4,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        {isLoading
          ? Array.from({ length: 9 }).map((item, key) => (
              <SplideSlide key={key}>
                <CardLoading />
              </SplideSlide>
            ))
          : recipes[0]?.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card {...recipe} />
                </SplideSlide>
              );
            })}
      </Splide>
    </div>
  );
};

export default React.memo(Vegetarian);
