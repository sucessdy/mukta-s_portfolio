"use client";

import React, {useEffect} from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/Context/ContextActiveProvider";

export default function About() {

  const [ref, inView] = useInView({
    threshold: 0.75,
  }); 
  const {setActiveSection, timeOfLastClick} =  useActiveSectionContext()
  // console.log(inView)

  useEffect(() => {

    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
    
  }, [inView, setActiveSection, timeOfLastClick] )
 
  return (
    <motion.section
      id="about"
      ref={ref} 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.176 }}
      className=" scroll-mt-28 mb-28 max-w-[45rem] text-center leading-7  mt-10 "
    >
      ;
      <h1 className="text-3xl font-raleway font-bold mb-8  uppercase ">
        {" "}
        About Me
      </h1>
      <p className="font-regular font-fredoka text-stone-600  mt-12">
        {" "}
        👋 Hey there! I'm Mukta, your friendly neighborhood web wizard 🧙‍♂️, armed
        with a keyboard and a passion for creating digital magic!
        <span className="font-fredoka  text-stone-600">
          {" "}
          🌐 As a web developer, I'm your go-to guy for all things HTML, CSS,
          and JavaScript. I don't just code; I craft user experiences that leave
          people saying, "Wow, that's sleek!" 💻✨ 🎨 And speaking of sleek, my
          UI/UX designs are like the superhero capes of the internet world.
          Figma is my trusty sidekick, helping me bring your visions to life
          with pixel-perfect precision. 🎨💡💡 My goal? To make the web a
          cooler, more user-friendly place, one pixel at a time. Whether it's a
          killer website or a jaw-dropping app, I've got your back. 💪
        </span>
      </p>
    </motion.section>
  );
}
