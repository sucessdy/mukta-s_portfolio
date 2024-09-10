"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/Context/ContextActiveProvider";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

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
      <p className="mb-3">
        {" "}
        As a Frontend developer, I&#39;m passionate about creating beautiful and
        functional user experiences. My expertise lies in{" "}
        <span className="font-medium">HTML, CSS, and JavaScript</span>, where I
        don&#39;t just code, but craft user experiences that make people say,
        &#34;Wow, that&#39;s sleek!&#34; 💻✨ My core stack includes{" "}
        <span className="font-medium">React & Next.js</span>. I&#39;m currently
        looking for a <span className="font-medium">full-time position</span> as
        a software developer.{" "}
      </p>{" "}
      <p>
        {" "}
        <span className="italic">When I&#39;m not coding</span>, I dive into
        design. I love creating cool designs and beautiful UIs, always
        researching how to enhance user experience using Figma. I enjoy making
        prototypes and turning them into something that users will love.{" "}
      </p>
    </motion.section>
  );
}
