"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ id, title, image }) => {
  return (
    <div className="h-[200px] flex-grow flex-shrink-0 basis-[250px] rounded-md overflow-hidden relative border dark:border-[#333] dark:hover:border-white">
      <Link href={`/recipe/${id}`}>
        <figure className="absolute top-0 w-full h-2/3">
          <Image
            src={image ? image : "/image-not-found.png"}
            fill
            priority
            style={{ backgroundPosition: "center", objectFit: "cover" }}
            alt={title}
          />
        </figure>
        <div className="absolute w-full h-1/3 bottom-0 p-2 text-gray-dark dark:text-gray-lighter flex flex-col items-center justify-center bg-white dark:bg-black">
          <p key={id} className="text-center tracking-wider text-sm ">
            {title}
          </p>
          {/* <button className="absolute bottom-2 bg-indigo-500 py-2 px-4 rounded-md text-gray-50 font-bold tracking-wider">
          Add to plate
        </button> */}
        </div>
      </Link>
    </div>
  );
};

export default Card;
