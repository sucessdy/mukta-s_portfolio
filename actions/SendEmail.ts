"use server";

import { Resend } from "resend";
import { validateString } from "@/helper/Helper";
import Email from "@/emails/Email";
import React from "react";
const resend = new Resend(process.env.RESEND_API_KEY);
const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return { error: error.message };
  } else if (error && typeof error === "object" && "message" in error) {
    return {
      error: error.message,
    };
  }
};
export const SendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  // simple server side validation
  if (!validateString(senderEmail, 200)) {
    return {
      error: "Invalid email",
    };
  }

  if (!validateString(message, 500)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "sucessdy@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail as string,
      // text: message as string,
      react: React.createElement(Email, { message: message as string , senderEmail: senderEmail as string }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
