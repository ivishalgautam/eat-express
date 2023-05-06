import React from "react";

const RecipeLoading = () => {
  return (
    <div className="h-full mb-5">
      {/* heading section */}
      <div className="py-8">
        <div className="animate-pulse bg-gray-200 dark:bg-gray-800 w-14 h-3 rounded-full"></div>
        <div className="animate-pulse bg-gray-200 dark:bg-gray-800 my-4 h-14 w-80 rounded-md"></div>
        <div className="animate-pulse bg-gray-200 dark:bg-gray-800 w-8 h-3 rounded-full"></div>
        <div className="animate-pulse bg-gray-200 dark:bg-gray-800 w-12 my-4 h-8 "></div>
        <div className="animate-pulse bg-gray-200 dark:bg-gray-800 w-full sm:w-32 h-10 rounded-md"></div>
      </div>

      <div className="flex items-start justify-start flex-col-reverse lg:flex-row md:items-center gap-2 h-[40rem] lg:h-80">
        {/* recipe section */}
        <div className="flex-1 w-full h-full border dark:border-[#555] py-2 px-8 rounded-md overflow-y-hidden">
          {Array.from({ length: 5 }).map((step, key) => {
            return (
              <div key={key} className="py-6 pr-4 border-b dark:border-[#333]">
                <div className="animate-pulse h-3 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
              </div>
            );
          })}
        </div>
        {/* image section */}
        <div className="animate-pulse bg-gray-200 dark:bg-gray-800 lg:flex-1 w-full h-40 lg:h-full rounded-md"></div>
      </div>
    </div>
  );
};

export default RecipeLoading;
