"use client";
import { fetchRecipe } from "@/app/store/features/recipeSlice";
import { Bebas_Neue } from "next/font/google";
import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcLike } from "react-icons/fc";
import Image from "next/image";

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

const SearchedRecipePage = ({ params: { recipeid } }) => {
  const { recipe, isLoading } = useSelector((store) => store.recipe);
  let dispatch = useDispatch();
  console.log(recipe);

  useEffect(() => {
    dispatch(fetchRecipe(recipeid));
  }, []);

  return (
    <div className="h-full px-4 sm:px-14 md:px-20 lg:px-24 text-gray-950 dark:text-gray-100 bg-light dark:bg-gray-dark tracking-wider">
      {isLoading ? (
        <p>Loading recipe...</p>
      ) : (
        recipe?.map((recipe) => {
          return (
            <div className="h-full" key={recipe.id}>
              <div className="py-8">
                <p>
                  {recipe.dishTypes.map((type, key) => (
                    <span
                      className="text-xs font-bold text-indigo-500"
                      key={key}
                    >
                      {type.toUpperCase()}
                    </span>
                  ))}
                </p>
                <h2 className={`${bebas.className} text-6xl`}>
                  {recipe.title}
                </h2>
                <div className="text-xs font-bold flex items-center justify-start gap-2">
                  <FcLike />
                  {recipe.aggregateLikes}
                </div>
              </div>
              <div className="flex items-start justify-start md:items-center flex-col-reverse md:flex-row gap-2">
                <ul className="bg-white border text-sm font-bold text-[#333] dark:border-[#555] dark:bg-black dark:text-gray-lighter py-2 px-8 rounded-md list-none w-80 sm:w-96 h-96 overflow-y-auto">
                  {recipe.analyzedInstructions[0].steps.map((step) => {
                    return (
                      <li
                        key={step.number}
                        className="counter-increment my-counter relative py-6 pl-8 pr-4 border-b dark:border-[#333]"
                      >
                        <span className="absolute font-bold text-indigo-500 tracking-wide text-xs transform -translate-y-1/2 -left-3 -rotate-90 top-1/2">
                          STEP <span>{step.number}</span>
                        </span>
                        {step.step}
                      </li>
                    );
                  })}
                </ul>
                <div className="flex-1 h-96 flex items-center justify-center">
                  <div className="w-80 sm:w-96 h-60 relative">
                    <Image
                      src={recipe.image}
                      fill
                      style={{ backgroundPosition: "center" }}
                      className="rounded-md object-center aspect-square"
                      alt={recipe.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SearchedRecipePage;
