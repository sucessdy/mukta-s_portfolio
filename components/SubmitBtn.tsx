import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
// import { gsap } from "gsap";

interface SubmitBtnProps {
  loading: boolean;
}

export default function SubmitBtn({ loading }: SubmitBtnProps) {
  return (
    <motion.button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] sm:w-[10rem] md:w-[12rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 disabled:cursor-not-allowed"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05 }}
      disabled={loading}
    >
      {loading ? (
        <motion.div
          className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
      ) : (
        <>
          Submit
          <FaPaperPlane className="paperplane-icon text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </motion.button>
  );
}
