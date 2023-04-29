"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../store/features/popularSlice";
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
    dispatch(fetchRecipes());
  }, []);

  const { recipes, isLoading } = useSelector((store) => store.popular);
  return (
    <div className="pt-20 pb-5 flex flex-wrap gap-3">
      <h3 className="text-2xl font-bold my-2 mb-1 tracking-wider">
        Popular picks
      </h3>
      <Splide
        className="w-full"
        aria-label="My Favorite Images"
        options={{
          perPage: width < 740 ? 1 : width < 960 ? 2 : 3,
          pagination: false,
          // drag: "free",
          gap: "2rem",
          autoplay: true,
          snap: true,
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
