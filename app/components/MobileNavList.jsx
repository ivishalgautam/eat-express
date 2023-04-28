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
    <ul className="flex flex-col items-center justify-center mt-20 gap-10">
      {navList.map((navItem, key) => {
        return (
          <li key={key} className="capitalize text-xl">
            <Link href={navItem.href}>{navItem.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MobileNavList;
