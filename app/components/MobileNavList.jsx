import Link from "next/link";
import React from "react";

let navList = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "menu",
    href: "/menu",
  },
  {
    name: "about",
    href: "/about",
  },
];

const MobileNavList = () => {
  return (
    <ul className="flex flex-col items-start justify-center px-14 mt-20">
      {navList.map((navItem, key) => {
        return (
          <li
            key={key}
            className="capitalize text-xl border-b  dark:border-gray-dark w-full leading-[45px] text-[#4f4f4f]"
          >
            <Link href={navItem.href}>{navItem.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MobileNavList;
