"use client";
import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { SendEmail } from "@/actions/SendEmail";
import SubmitBtn from "./SubmitBtn";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    try {
      await SendEmail(formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section 
      id="contact"
      className="mt-20 mb-20 sm:mb-28 w-[min(100%, 38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }} 
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-3">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:kmukta1729@gmail.com">
          kmukta1729@gmail.com
        </a>{" "}
        for any query
      </p>

      <form
        className="mt-10 flex flex-col"
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          await handleSubmit(formData);
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-Black bg-white/80 outline-none focus:scale-110 transition hover:scale-110 hover:bg-white opacity-90"
          type="email"
          placeholder="Your email"
          required
          maxLength={200}
          name="senderEmail"
        />
        <textarea
          className="border-Black h-40 rounded-lg bg-white/80 p-4 mt-3 focus:outline-none mb-3"
          rows={4}
          placeholder="Your Message"
          maxLength={500}
          name="message"
        />
        <SubmitBtn loading={loading} />
      </form>
    </motion.section>
  );
}
