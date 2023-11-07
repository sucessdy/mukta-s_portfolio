"use client"
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
 import "react-vertical-timeline-component/style.min.css";

 import { experiencesData } from "@/lib/data";
 


export default function Experience() {
  return (
    <section id="experience">
      <VerticalTimeline>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
          
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: '1px solid rgba(0, 0, 0, 0.5)', 
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
            >
              <h3>{experience.title}</h3>
              <p>{experience.location}</p>
              <p>{experience.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
