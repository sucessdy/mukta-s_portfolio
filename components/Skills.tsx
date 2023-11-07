"use client"
import React, { useEffect } from "react";
import { skillsData } from "@/lib/data";
import useSectionInView from "@/lib/hooks";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate:  (index : number ) => ( {
    opacity: 1,
    transition: {
      delay: 0.05 * index , 
    },
  })
};

export default function Skills() {
  const { ref } = useSectionInView({ sectionName: "Skills" });

  useEffect(() => {
    // Detect when the element enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              duration: 1, // Adjust the duration as needed
            }); 

          }
        });
      },
      {
        threshold: 0.2, // Adjust the threshold as needed
      }
    );

    // Attach the observer to each element with the class "animate-fade-in"
    document.querySelectorAll(".animate-fade-in").forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <section  id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <h1 className="text-3xl font-raleway font-bold mb-8 uppercase">Skills</h1>

      <ul className="flex justify-center flex-wrap text-center gap-4 text-gray-700 text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-full px-4 py-1 animate-fade-in" // Add animate-fade-in class
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
