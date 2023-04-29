"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { BsCart2 } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { RxHamburgerMenu, RxSlash } from "react-icons/rx";
import { increment } from "../store/features/counterSlice";
import NavList from "./NavList";
import MobileNavList from "./MobileNavList";
import { IoMdClose } from "react-icons/io";
import { BiDish } from "react-icons/bi";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { closeMenu, openMenu } from "../store/features/menuSlice";
import { useDispatch, useSelector } from "react-redux";

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  // variable: "--var-bebas-neue",
});

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const pathname = usePathname();
  let dispatch = useDispatch();
  const { isMenuOpen } = useSelector((store) => store.mobileMenu);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setIsVisible(visible);
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
      } px-4 sm:px-14 md:px-20 lg:px-24 bg-white dark:bg-black border-b dark:border-[#333] text-slate-100 flex items-center justify-between h-16 transition-all z-10`}
    >
      {/* logo */}
      <div
        className={`${bebas.className} logo text-xl font-bold tracking-wider z-10 flex items-center justify-center gap-3`}
      >
        <span>
          <BiDish size={30} className="text-black dark:text-white" />
        </span>
        <span className="font-thin text-2xl text-gray-lighter">
          <RxSlash />
        </span>
        <Link href="/" className="text-black dark:text-white tracking-widest">
          Eat
          <span className="text-indigo-500">express</span>
        </Link>
      </div>
      {/* nav list */}
      <nav className="ml-auto mr-10 hidden md:block">
        <NavList />
      </nav>
      {/* cta */}
      <div className="flex items-center justify-center gap-0 md:gap-2">
        <div className="btn-header">
          <Link
            href="/cart"
            className={`${
              pathname === "/cart" ? "text-gray-900 dark:text-indigo-500" : ""
            } `}
          >
            <BsCart2 size={20} />
          </Link>
        </div>
        <button
          className="btn-header outline-none rounded-full"
          onClick={handleTheme}
        >
          <MdOutlineDarkMode size={20} />
        </button>
        {isMenuOpen ? (
          <button
            className="btn-header flex md:hidden"
            onClick={() => dispatch(closeMenu())}
          >
            <IoMdClose size={20} />
          </button>
        ) : (
          <button
            onClick={() => dispatch(openMenu())}
            className="btn-header flex md:hidden"
          >
            <RxHamburgerMenu size={20} />
          </button>
        )}
      </div>

      {/* mobile menu */}
      <div
        className={`absolute ${
          isMenuOpen ? "top-0" : "-top-[700px]"
        } left-0 h-screen w-full bg-white dark:bg-black transition-all block md:hidden -z-10`}
      >
        <MobileNavList />
      </div>
    </div>
  );
};

export default Navbar;
