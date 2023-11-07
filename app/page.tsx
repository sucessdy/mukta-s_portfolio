"use client"
import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";

import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col ">
      <Intro />
      <SectionDivider />
      <About /> 
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
