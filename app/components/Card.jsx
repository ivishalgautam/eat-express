"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ id, title, image }) => {
  return (
    <div className="shadow-lg h-[200px] flex-grow flex-shrink-0 basis-[250px] rounded overflow-hidden relative">
      <Link href={`/recipe/${id}`}>
        <figure className="absolute top-0 w-full h-full brightness-75">
          <Image src={image} layout="fill" objectFit="cover" alt={title} />
        </figure>
        <div className="absolute w-full h-2/5 bottom-0 p-2 text-gray-50 flex flex-col items-center justify-center bg-gradient-to-t from-black">
          <p key={id} className="text-center tracking-wider">
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
