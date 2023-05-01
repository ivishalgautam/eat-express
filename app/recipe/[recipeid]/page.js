"use client";
import { fetchRecipe } from "@/app/store/features/recipeSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = ({ params: { recipeid } }) => {
  const { recipe, isPending } = useSelector((store) => store.recipe);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipe(recipeid));
  }, []);

  return (
    <div className="h-full px-4 sm:px-14 md:px-20 lg:px-24 text-gray-950 dark:text-gray-100 bg-light dark:bg-gray-dark tracking-wider">
      {recipe?.map((recipe) => {
        return <h2 key={recipe.id}>{recipe.title}</h2>;
      })}
    </div>
  );
};

export default page;
