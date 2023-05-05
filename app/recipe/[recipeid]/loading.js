import React from "react";

const loading = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="animate-spin w-20 h-20 border-10 border-gray-300 border-t-indigo-500 rounded-full"></div>
    </div>
  );
};

export default loading;
