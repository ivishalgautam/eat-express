"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

let navList = [
  {
    name: "home",
    href: "/home",
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

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setIsVisible(visible);
      console.log(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleTheme = () => {
    let element = document.documentElement;
    element.classList.toggle("dark");
  };

  return (
    <div
      className={`w-full fixed ${
        isVisible ? "translate-y-0" : "-translate-y-16"
      } px-4 sm:px-14 md:px-20 lg:px-24 bg-indigo-500 dark:bg-gray-900 backdrop-blur-lg drop-shadow-xl text-slate-100 flex items-center justify-between h-16 transition-all`}
    >
      <div className={`logo text-xl font-bold tracking-wider`}>
        <Link href="/">
          Eat
          <span className="text-gray-900 dark:text-indigo-500">express</span>
        </Link>
      </div>

      <nav className="ml-auto mr-10 hidden md:block">
        <ul className="flex items-center justify-center gap-5">
          {navList.map((navItem, key) => {
            return (
              <li key={key} className="capitalize">
                <Link href={navItem.href}>{navItem.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex items-center justify-center gap-0 md:gap-2">
        <div className="btn-header">
          <Link href="/cart">
            <BsCart2 size={20} />
          </Link>
        </div>
        <button
          className="btn-header outline-none rounded-full"
          onClick={handleTheme}
        >
          <MdOutlineDarkMode size={20} />
        </button>
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="btn-header flex md:hidden"
        >
          <RxHamburgerMenu size={20} />
        </button>
      </div>

      <div
        className={`absolute ${
          showMobileMenu ? "right-0" : "-right-full"
        } top-0 h-screen w-80 bg-indigo-500 transition-all block md:hidden`}
      >
        <button
          className="btn-header absolute top-1 right-1"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <IoMdClose size={30} />
        </button>
        <ul className="flex flex-col items-center justify-center mt-20 gap-10">
          {navList.map((navItem, key) => {
            return (
              <li key={key} className="capitalize text-xl">
                <Link href={navItem.href}>{navItem.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
