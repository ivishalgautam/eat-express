import React from "react";

const CardLoading = () => {
  return (
    <div className="h-[200px] flex-grow flex-shrink-0 basis-[250px] rounded  animate-pulse flex items-end border justify-center">
      <div className="grid grid-cols-3 gap-2 w-full p-4">
        <div className="h-2 animate-pulse bg-slate-700 rounded col-span-2"></div>
        <div className="h-2 animate-pulse bg-slate-700 rounded col-span-1"></div>
        <div className="h-2 animate-pulse bg-slate-700 rounded col-span-1"></div>
        <div className="h-2 animate-pulse bg-slate-700 rounded col-span-2"></div>
      </div>
    </div>
  );
};

export default CardLoading;
