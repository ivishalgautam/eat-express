import React, { useMemo } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../store/features/vegetarianSlice";
import Card from "./Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Vegetarian = ({ width }) => {
  const dispatch = useDispatch();

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
          perPage: width < 400 ? 1 : width < 580 ? 2 : width < 900 ? 3 : 4,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        {isLoading
          ? Array.from({ length: 9 }).map((item, key) => (
              <SplideSlide key={key}>
                <div className="h-[200px] flex-grow flex-shrink-0 basis-[250px] rounded  animate-pulse flex items-end border justify-center">
                  <div className="grid grid-cols-3 gap-2 w-full p-4">
                    <div className="h-2 animate-pulse bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 animate-pulse bg-slate-700 rounded col-span-1"></div>
                    <div className="h-2 animate-pulse bg-slate-700 rounded col-span-1"></div>
                    <div className="h-2 animate-pulse bg-slate-700 rounded col-span-2"></div>
                  </div>
                </div>
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
