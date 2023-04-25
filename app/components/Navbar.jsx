"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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
      } px-4 sm:px-14 md:px-20 lg:px-24 bg-indigo-600 dark:bg-gray-900 backdrop-blur-lg drop-shadow-xl text-slate-100 flex items-center justify-between h-16 transition-all`}
    >
      <div className={`logo text-xl font-bold tracking-wider`}>
        <Link href="/">
          Eat
          <span className="text-gray-900 dark:text-indigo-500">express</span>
        </Link>
      </div>
      <nav className="ml-auto mr-10 hidden md:block">
        <ul className="flex items-center justify-center gap-5">
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
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
        <button className="btn-header flex md:hidden">
          <RxHamburgerMenu size={20} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
