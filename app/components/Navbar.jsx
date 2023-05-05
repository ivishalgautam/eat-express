"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { BsCart2 } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { RxHamburgerMenu, RxSlash } from "react-icons/rx";
import { BiDish } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

import NavList from "./NavList";
import MobileNavList from "./MobileNavList";
import { openNavbar, closeNavbar } from "../store/features/navbarSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  let dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.navbar);

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

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.tagName === "A") {
      dispatch(closeNavbar());
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.2 }}
      className={`w-full fixed ${
        isVisible ? "translate-y-0" : "-translate-y-16"
      } px-4 sm:px-14 md:px-20 lg:px-24 bg-white dark:bg-black border-b dark:border-[#333] text-slate-100 flex items-center justify-between h-16 transition-all z-50`}
    >
      {/* logo */}
      <div
        className={`${bebas.className} logo text-xl font-bold tracking-wider z-10 flex items-center justify-center gap-1 md:gap-3`}
      >
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, duration: 0.5 }}
        >
          <BiDish size={30} className="text-black dark:text-white" />
        </motion.span>
        <motion.span
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, duration: 0.5 }}
          className="font-thin text-2xl text-gray-lighter"
        >
          <RxSlash />
        </motion.span>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, duration: 0.5 }}
        >
          <Link href="/" className="text-black dark:text-white tracking-widest">
            Eat
            <span className="text-indigo-500">express</span>
          </Link>
        </motion.div>
      </div>

      {/* nav list */}
      <nav className="ml-auto mr-10 hidden md:block">
        <NavList />
      </nav>

      {/* cta */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex items-center justify-center gap-0 md:gap-2"
      >
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
        {isOpen ? (
          <button
            className="btn-header flex md:hidden"
            onClick={() => dispatch(closeNavbar())}
          >
            <IoMdClose size={20} />
          </button>
        ) : (
          <button
            onClick={() => dispatch(openNavbar())}
            className="btn-header flex md:hidden"
          >
            <RxHamburgerMenu size={20} />
          </button>
        )}
      </motion.div>

      {/* mobile menu */}
      <div
        onClick={(e) => handleClick(e)}
        className={`absolute ${
          isOpen ? "top-0" : "-top-[700px]"
        } font-poppins left-0 h-screen w-full bg-white dark:bg-black transition-all block md:hidden -z-10`}
      >
        <MobileNavList />
      </div>
    </motion.div>
  );
};

export default Navbar;
