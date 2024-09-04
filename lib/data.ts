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
    title: "Wordpress Developer",
  company: "Garmin Express Updater",
    description:
"During my 4-month WordPress Developer internship, I used Elementor to create user-friendly websites, including a project for Garmin Express Updater. I gained experience in WordPress, UI design, and timely delivery while tailoring sites to client needs." ,
icon:  React.createElement(LuGraduationCap),
    date: "Feb 2023 to May 2023",
  },
  {
    title: " Web Developer",
    company: "Prachar Expert",
    description:
      "Developed React websites for various industries, focusing on user experience. Built responsive sites with HTML, CSS, and JavaScript, and designed engaging WordPress platforms. Collaborated with SEO experts and designers to enhance performance and visual appeal.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 - Mar 2024 · ",
  },
  {
    title: "Front End Developer",
    company: "Experts Coder",
    description:
      "Developed and deployed high-performance React websites with user-friendly interfaces. Led teams, solved problems, and collaborated with SEO experts to optimize code for speed and efficiency. Consistently delivered projects on time, focusing on performance and user interaction.",
    icon: React.createElement(FaReact),
    date: "Mar 2024 - Aug 2024 ·",
  },
  {
    title: "UI/UX Designer",
    company: "Through LinkedIn - (freelance)",
    description:
      "Designing an all-in-one app with advanced UI/UX features like Glassmorphism and dark mode, enabling service price comparisons, and adding user-friendly features like payment splitting and personalized profiles, all while ensuring alignment with modern design standards.",
    icon: React.createElement(FaReact),
    date: "Apr 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Enchanted Real Estate",
    description:
      "I built a sleek real estate website using React.js and Tailwind CSS, adding smooth animations and clear milestone displays for an engaging user experience.",
    tags: ["React", "Framer motion", "React tilt", "Email Js", "GSAP"],
    // imageUrl: corpcommentImg,
    imageUrl: Meta,
    redirect_link: 'https://enchanted-estate-website.netlify.app/'
  },
  {
    title: "Prachar Expert",
    description:
      "I developed a website for Prachar Expert using HTML, CSS, and JavaScript, creating a polished and professional online presence for the company.",
    tags: ["HTML" , "CSS", "JavaScript", "PHP"] ,
    imageUrl: Tesla,
    redirect_link: "https://www.pracharexpert.com/"
  },
  {
    title: "My Portfolio",
    description:
      "My portfolio, built with Next.js, Tailwind, Resend, Framer Motion, and GSAP, features a modern, sleek design with interactive and engaging elements.",
    tags: ["Next js", "Resend", "Framer motion", "Tailwind", "Gsap"],
    imageUrl: nova,
    redirect_link: "/"
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
