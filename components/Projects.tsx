"use client"

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import useSectionInView from "@/lib/hooks";
export default function Projects() {
  const {ref} = useSectionInView({ sectionName: "Projects" ,}); 
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-27">
      <h1 className="text-3xl font-raleway font-bold mb-8  uppercase ">
        {" "}
        Project
      </h1>

      <div>
        {" "}
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            {" "}
            <Project {...project} />
          </React.Fragment>
        ))}{" "}
      </div>
    </section>
  );
}
