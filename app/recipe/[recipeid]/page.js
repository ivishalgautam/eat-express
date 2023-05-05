"use client";
import { fetchRecipe } from "@/app/store/features/recipeSlice";
import { Bebas_Neue } from "next/font/google";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcLike } from "react-icons/fc";
import Image from "next/image";
import loading from "./loading";
import RecipeLoading from "@/app/components/RecipeLoading";

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

const SearchedRecipePage = ({ params: { recipeid } }) => {
  const [activeTab, setActiveTab] = useState("instructions");
  const { recipe, isLoading } = useSelector((store) => store.recipe);
  let dispatch = useDispatch();
  console.log(recipe);

  useEffect(() => {
    dispatch(fetchRecipe(recipeid));
  }, []);

  return (
    <div className="h-full px-4 sm:px-14 md:px-20 lg:px-24 text-gray-950 dark:text-gray-100 bg-light dark:bg-gray-dark tracking-wider">
      {isLoading ? (
        <RecipeLoading />
      ) : (
        recipe?.map((recipe) => {
          return (
            <div className="h-full mb-5" key={recipe.id}>
              {/* heading section */}
              <div className="py-8">
                <p className="flex items-center justify-start gap-1">
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

              <div className="flex items-start justify-start flex-col-reverse lg:flex-row md:items-center gap-2 h-[30rem] lg:h-80  rounded-md">
                {/* recipe section */}
                <div className="h-80 lg:flex-1 flex flex-col w-full bg-white dark:bg-black border dark:border-[#555] relative">
                  <div className="flex items-center justify-center w-full absolute top-0 left-0 z-10">
                    <button
                      className={`flex-1 bg-white dark:bg-black py-3 border-b dark:border-[#333] ${
                        activeTab === "instructions" ? "border-indigo-500" : ""
                      }`}
                      onClick={() => setActiveTab("instructions")}
                    >
                      Instructions
                    </button>
                    <button
                      className={`flex-1 bg-white dark:bg-black py-3 border-b dark:border-[#333] ${
                        activeTab === "summary" ? "border-indigo-500" : ""
                      }`}
                      onClick={() => setActiveTab("summary")}
                    >
                      Summary
                    </button>
                  </div>
                  <div className="mt-12 h-full overflow-y-auto">
                    {activeTab === "instructions" ? (
                      <ul className="font-bold text-[#333] dark:text-gray-lighter py-2 px-8 list-none">
                        {recipe.analyzedInstructions[0].steps.map((step) => {
                          return (
                            <li
                              key={step.number}
                              className="relative py-6 pl-8 pr-4 border-b dark:border-[#333] text-xs md:text-sm"
                            >
                              <span className="absolute font-bold text-indigo-500 tracking-wide text-xs transform -translate-y-1/2 -left-3 -rotate-90 top-1/2">
                                STEP <span>{step.number}</span>
                              </span>
                              {step.step}
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <div
                        className="text-[#333] dark:text-gray-lighter mt-4 py-2 px-8 rounded-md list-none"
                        dangerouslySetInnerHTML={{ __html: recipe.summary }}
                      />
                    )}
                  </div>
                </div>

                {/* image section */}
                <div className="h-40 lg:flex-1 w-full lg:h-full flex items-center justify-center relative">
                  <Image
                    src={recipe.image}
                    fill
                    style={{
                      backgroundPosition: "center",
                      objectFit: "cover",
                    }}
                    alt={recipe.title}
                    className="rounded-md"
                  />
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
