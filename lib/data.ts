// import React from "react"
import {CgWorkAlt} from "react-icons/cg"
import { LuGraduationCap}   from "react-icons/lu"

import {FaReact} from "react-icons/fa"
import Meta from "@/assets/Meta.png";
import Tesla from "@/assets/Tesla.png";
import nova from "@/assets/nova.png";
import React from "react";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Garmin Express Ltd",
    location: "Delhi",
    description:
"I did a 3 month of intership as Wordpress developer where i learn about migrate and user interface more about deliver your work on time" ,
icon:  React.createElement(LuGraduationCap),
    date: "2023 ",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    // imageUrl: corpcommentImg,
    imageUrl: Meta,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: [" Wordpress" , " UI "] ,
    imageUrl: Tesla,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: nova,
  },

  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: nova,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",

  "React",
  "Next.js",

  "Git",
  "Tailwind",
  ,
  "Figma",
  "UI/UX design",
  "Framer Motion",
] as const;
