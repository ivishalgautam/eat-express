"use client";
import { fetchRecipe } from "@/app/store/features/recipeSlice";
import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchedRecipePage = ({ params: { recipeid } }) => {
  const { recipe, isLoading } = useSelector((store) => store.recipe);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipe(recipeid));
  }, []);

  if (isLoading) {
    return <p>loading results...</p>;
  }

  return (
    <Suspense fallback={<p>loading results...</p>}>
      <div className="h-full px-4 sm:px-14 md:px-20 lg:px-24 text-gray-950 dark:text-gray-100 bg-light dark:bg-gray-dark tracking-wider">
        {recipe?.map((recipe) => {
          return <h2 key={recipe.id}>{recipe.title}</h2>;
        })}
      </div>
    </Suspense>
  );
};

export default SearchedRecipePage;
