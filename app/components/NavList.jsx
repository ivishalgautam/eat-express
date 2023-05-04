import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

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
          <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * key + 1 }}
            key={key}
            className="capitalize"
          >
            <Link
              href={navItem.href}
              className={`hover:text-gray-900 text-[#848484] dark:text-gray-light dark:hover:text-white ${
                pathname === navItem.href ? "text-black dark:text-white" : ""
              }`}
            >
              {navItem.name}
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default NavList;
