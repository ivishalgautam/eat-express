"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ id, title, image }) => {
  return (
    <div className="shadow-lg h-[200px] flex-grow flex-shrink-0 basis-[250px] rounded-md overflow-hidden relative">
      <Link href={`/recipe/${id}`}>
        <figure className="absolute top-0 w-full h-full dark:brightness-75 h-2/3">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt={title}
            className="hover:scale-110 transition-transform"
          />
        </figure>
        <div className="absolute w-full h-1/3 bottom-0 p-2 text-gray-50 flex flex-col items-center justify-center bg-indigo-500 dark:bg-indigo-950">
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
