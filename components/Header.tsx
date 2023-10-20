"use client";

import React, { useContext, useState } from "react";

import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import {useActiveSectionContext} from "@/Context/ContextActiveProvider"; 

export default function Header() {
  // const [activeSection, setActiveSection] = useState("Home");
  const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext()



return (
    <header className=" z-[999]  relative ">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className=" flex fixed top-0 left-1/2  -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white opacity-40 bg-white bg-opacity-80  shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full "
      >
        <nav className="fixed flex top-[0.15rem]  left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
          <ul className=" flex justify-center items-center w-[22rem] flex-wrap m-[-1rem] gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                className=" 3/4 flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  stiffness: 130,
                  damping: 9,
                  duration: 0.3,
                }}
              >
                <Link
                  className={clsx(
                    "flex w-full justify-center items-center px-[0.81rem] py-1  hover:text-[#1d1d1c]  transition ",
                    { " text-gray-950 ": activeSection === link.name }
                  )}
                  href={link.hash}
                  onClick={() =>
                    
                    {setActiveSection(link.name)  ;setTimeOfLastClick(Date.now())}
                  }
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="bg-gray-100 py-5 mb-2  flex justify-center  text-center items-center  
  mt-1  -z-10 w-[5rem]  rounded-full absolute"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    >
                      {" "}
                    </motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
