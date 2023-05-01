"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addQuery } from "../store/features/searchRecipeSlice";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  let router = useRouter();
  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addQuery(query));
    router.push(`/search/${query}`);
  };
  return (
    <div className="pt-20 mb-10 px-4 sm:px-14 md:px-20 lg:px-24 text-gray-950 dark:text-gray-100 bg-light dark:bg-gray-dark overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-start relative"
      >
        <span className="w-10 absolute left-0">
          <BsSearch size={15} className="m-auto text-gray-light" />
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes here..."
          className="w-full px-4 py-2 pl-10 border rounded-md bg-white dark:bg-black dark:placeholder:text-gray-light dark:border-[#333] dark:focus:border-gray-lighter focus:border-gray-dark outline-none transition-colors"
        />
      </form>
    </div>
  );
};

export default SearchInput;
