import Link from "next/link";
import { usePathname } from "next/navigation";
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

const NavList = () => {
  const pathname = usePathname();

  return (
    <ul className="flex items-center justify-center gap-5">
      {navList.map((navItem, key) => {
        return (
          <li key={key} className="capitalize">
            <Link
              href={navItem.href}
              className={`hover:text-gray-900 dark:hover:text-indigo-400 ${
                pathname === navItem.href
                  ? "text-gray-900 dark:text-indigo-400 font-extrabold"
                  : ""
              }`}
            >
              {navItem.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;
