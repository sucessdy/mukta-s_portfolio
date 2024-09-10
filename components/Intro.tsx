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
import { useActiveSectionContext } from "@/Context/ContextActiveProvider";
export default function Intro() {
  const { ref } = useSectionInView({sectionName: "Home"})

  const {
    setActiveSection, 
    setTimeOfLastClick
  } = useActiveSectionContext()


  return (
    <section
      ref={ref} 
      id="home"
      className="z-10 scroll-mt-[100rem] mb-28 max-w-[58rem] text-center sm:mb-0 justify-center"
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
            quality={95}
            priority={true}
            className="w-24 h-24 object-cover rounded-full border-white shadow-xl border-[0.35rem]"
          />{" "}
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className=" mb-10 mt-4 text-2xl font-medium leading-[1.5] sm:text-4xl  "
      >
        <span className="font-bold line text-gradient-to-t    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ">
          {" "}
          Hi there! I&#39;m Mukta.
        </span>{" "}

        <span className= " bg-gray-600 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-clip-text ">
          {" "}
   
          I&#39;m a frontend developer and UI/UX designer who loves crafting engaging websites with React & Next.js. 
        </span>
       
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-white flex-col sm:flex-row  flex gap-4 px-4  text-lg font-medium items-center justify-center"
      >

        <Link
          href="#contact"
          className= " group bg-gray-900  text-white px-7 py-3 flex items-center gap-2 rounded-full focus hover:bg-gray-950 active:scale-105 " onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now())
          }}
        >
          <span className=" flex items-center gap-2 rounded-full outline-none transition-all">Contact me here</span>

         

          <BiRightArrowAlt className="hover:opacity-70 group-hover:translate-x-2 transition" />
        </Link>

        <a
          href="/mukta_resume.pdf"
          download
          className="group bg-white text-[#1d1d1c] px-7 py-3 flex items-center gap-2 rounded-full  focus justify-center "
        >
          <span className=" flex items-center justify-center"> Download CV </span>{" "}
          <HiDownload className="hover:opacity-70 group-hover:translate-y-1 transition  " />
        </a>
        <a
          href="https://www.linkedin.com/in/mukta-kumari/"
          target="_blank"
          className="bg-white text-[#1d1d1c] p-4 flex items-center rounded-full gap-2 focus  "
        >
          {" "}
          {<ImLinkedin />}{" "}
        </a>
        <a
          href="https://github.com/sucessdy"
          target="_blank"
          className="bg-white text-[#1d1d1c] p-4 flex items-center rounded-full gap-2 focus "
        >
          {" "}
          {<BsGithub />}{" "}
        </a>
      </motion.div>
    </section>
  );
}
