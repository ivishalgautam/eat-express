"use client";
import { searchRecipes } from "@/app/store/features/searchRecipeSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchedPage = ({ params: { search_query } }) => {
  const { search_results, isLoading } = useSelector((store) => store.searched);
  console.log(search_results);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchRecipes(search_query));
  }, []);

  return (
    <div className="h-full px-4 sm:px-14 md:px-20 lg:px-24 text-gray-950 dark:text-gray-100 bg-light dark:bg-gray-dark tracking-wider">
      Search result for: {search_query}
      {search_results[0]?.map((recipe) => {
        return <p key={recipe.id}>{recipe.title}</p>;
      })}
    </div>
  );
};

export default SearchedPage;
