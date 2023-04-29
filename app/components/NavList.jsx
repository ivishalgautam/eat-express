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
  console.log(pathname);

  return (
    <ul className="flex items-center justify-center gap-5">
      {navList.map((navItem, key) => {
        return (
          <li key={key} className="capitalize">
            <Link
              href={navItem.href}
              className={`hover:text-gray-900 text-[#848484] dark:text-gray-light dark:hover:text-white ${
                pathname === navItem.href ? "text-black dark:text-white" : ""
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
