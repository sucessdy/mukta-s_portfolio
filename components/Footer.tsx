import React from "react";

import { MdArrowOutward } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Mukta Kumari | All Right Reserved{" "}
      </small>

      <div className=" mt-5  gap-3 h-8 w-[100%] flex  flex-row text-center justify-center items-center">
        <a
          className="underline  font-semibold flex  gap-2 justify-center items-center "
          target="_blank"
          href="https://dribbble.com/sucessdy"
        >
          Dribbble
          <MdArrowOutward />{" "}
        </a>
        <a
          className="underline  font-semibold flex gap-2 justify-center items-center"
          target="_blank"
          href="https://www.behance.net/sucessdy"
        >
          Behance <MdArrowOutward />{" "}
        </a>
        <a
          className="underline  font-semibold flex justify-center items-center  gap-2"
          target="_blank"
          href="https://www.linkedin.com/in/mukta-kumari/"
        >
          {" "}
          LinkedIn <MdArrowOutward />{" "}
        </a>
      </div>
    </footer>
  );
}
