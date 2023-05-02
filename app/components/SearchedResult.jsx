import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addRecipeId } from "../store/features/cartSlice";

const SearchedResult = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { search_results, isLoading } = useSelector((store) => store.searched);
  let dispatch = useDispatch();

  if (isLoading) {
    return <div>Searching...</div>;
  }

  const handleClick = (recipeId) => {
    dispatch(addRecipeId(recipeId));
  };

  return search_results[0]?.map((recipe) => {
    return (
      <div
        key={recipe.id}
        className="h-[250px] flex-grow flex-shrink-0 basis-[250px] grid grid-rows-7 rounded-md relative border bg-white dark:bg-black dark:border-[#333] dark:hover:border-white"
        onMouseEnter={() => setHoveredIndex(recipe.id)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <Link
          href={`recipe/${recipe.id}`}
          className={`absolute -top-2 -right-2 opacity-0 ${
            hoveredIndex === recipe.id ? "opacity-100" : ""
          } transition-opacity bg-white dark:bg-black border dark:border-gray-[#333] dark:text-white shadow-lg w-8 h-8 rounded-full z-10 flex items-center justify-center`}
        >
          <FiExternalLink size={18} />
        </Link>
        <figure className="relative top-0 w-full row-span-6">
          <Image
            src={recipe.image}
            fill
            sizes="width:100%"
            priority
            style={{ objectFit: "cover" }}
            alt={recipe.title}
            className="rounded-t-md"
          />
        </figure>
        <div className=" w-full row-span-2 bottom-0 p-2 text-gray-dark dark:text-gray-lighter flex flex-col items-center justify-center ">
          <p>{recipe.title}</p>
        </div>
        <div className="row-span-1 border-t dark:border-gray-dark">
          <button
            className="w-full h-full"
            onClick={() => handleClick(recipe.id)}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  });
};

export default SearchedResult;
