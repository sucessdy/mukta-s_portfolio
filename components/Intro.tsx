"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { BiRightArrowAlt } from "react-icons/bi";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";

import me from "@/public/me.png";

import React from "react";
import Link from "next/link";
import useSectionInView from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView({sectionName: "Home"});

  // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className=" z-10 scroll-mt-[100rem] mb-28 max-w-[58rem] text-center sm:mb-0 justify-center"
    >
      <div className="flex items-center justify-center ">
        {" "}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          {" "}
          <Image
            src={me}
            alt="my"
            width={192}
            height={192}
            quality={90}
            priority={true}
            className="w-24 h-24 object-cover rounded-full border-white shadow-xl border-[0.35rem]"
          />{" "}
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className=" mb-10 mt-4 text-2xl font-medium leading-[1.5] sm:text-4xl font-roboto "
      >
        <span className="font-bold font-roboto line text-gradient-to-t  bg-gradient-to-l from-violet-500 to-transparent text-transparent bg-clip-text">
          {" "}
          Hello, I'm Mukta Kashyap.
        </span>{" "}
        I'm a
        <span className="font-bold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white bg-clip-text font-roboto">
          {" "}
          web developer and UI/UX designer.{" "}
        </span>
        I have a passion for creating websites and crafting engaging designs.
        {/* <span className="font-italic"> My primary focus is on </span> */}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-white flex-col sm:flex-row  flex gap-2 px-4  text-lg font-medium items-center justify-center"
      >
        <Link
          href="#contact"
          className="bg-gray-900  text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] transition hover:scale-[1.1rem] hover:bg-gray-950 active:scale-105 "
        >
          <span>Contact me here</span>

          <BiRightArrowAlt className="hover:opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="./cv"
          download
          className="bg-white text-[#1d1d1c] px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] transition hover:scale-[1.1rem] hover:bg-white opacity-90 active:scale-105 cursor-pointer "
        >
          <span> Download CV </span>{" "}
          <HiDownload className="hover:opacity-70 group-hover:translate-y-1 transition  " />
        </a>
        <a
          href="https://www.linkedin.com/in/mukta-kumari-63012a263/"
          target="_blank"
          className="bg-white text-[#1d1d1c] p-4 flex items-center rounded-full gap-2 "
        >
          {" "}
          {<ImLinkedin />}{" "}
        </a>
        <a
          href=""
          className="bg-white text-[#1d1d1c] p-4 flex items-center rounded-full gap-2 "
        >
          {" "}
          {<BsGithub />}{" "}
        </a>
      </motion.div>
    </section>
  );
}
