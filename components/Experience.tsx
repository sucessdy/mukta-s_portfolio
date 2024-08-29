import React from "react";
import { Button } from "./ui/MovingBorder";
import { MdOutlineWork } from "react-icons/md";
import { experiencesData } from "@/lib/data";
import {motion} from "framer-motion"

type ExperienceProps = {
  title: string;
  icon?: React.ReactNode;
  company: string;
  description: string;
  date: string;
};

export default function Experience() {
  return (
    <motion.div className="py-20 max-w-[60rem] sm:p-3" id="experience">
      <h1 className="text-3xl font-raleway font-bold mb-8 uppercase">
        My Work Experience
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {experiencesData.map((card: ExperienceProps) => (
          <Button
            key={card.title}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-[#1d1d1c]"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <a
                href=""
                className="bg-white text-[#1d1d1c] p-4 flex items-center rounded-full gap-2 w-fit"
              >
                <MdOutlineWork />
              </a>
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <strong className="text-sm text-start opacity-60 flex "> {card.company}</strong>
                <p className="text-start text-gray-500 mt-3 font-medium font-fredoka">
                  {card.description}
                </p>
                <span className="text-start font-regular font-fredoka text-stone-600 flex font-style: italic font-semibold ">
                  {card.date}
                </span>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </motion.div>
  );
}
