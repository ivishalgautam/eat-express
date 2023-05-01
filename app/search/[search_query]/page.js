"use client";
import React, { useEffect } from "react";
import SearchedResult from "@/app/components/SearchedResult";
import { useDispatch, useSelector } from "react-redux";
import { searchRecipes } from "@/app/store/features/searchRecipeSlice";

// import { Suspense, lazy } from "react";

// const SearchedResult = lazy(() => import("@/app/components/SearchedResult"));

const SearchedPage = ({ params: { search_query } }) => {
  const { search_results, isLoading } = useSelector((store) => store.searched);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchRecipes(search_query));
  }, []);

  return (
    <div className="h-full px-4 sm:px-14 md:px-20 lg:px-24 text-gray-950 dark:text-gray-100 bg-light dark:bg-gray-dark tracking-wider">
      <h2 className="text-2xl"> Search result for: {search_query}</h2>
      <div>
        {isLoading ? (
          <div>loading results....</div>
        ) : (
          search_results[0]?.map((recipe) => {
            return <SearchedResult key={recipe.id} {...recipe} />;
          })
        )}
      </div>
      {/* <Suspense fallback={<p>loading results...</p>}> */}
      {/* </Suspense> */}
    </div>
  );
};

export default SearchedPage;
