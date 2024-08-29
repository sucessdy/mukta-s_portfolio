import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";
type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function Email({ message, senderEmail }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>New message from portfolio site</Preview>
      <Tailwind>
        <Body className="bg-black/5 m-4 p-4">
          {" "}
          <Container className="">
            {" "}
            <Section className="py-4 mx-10 px-4 bg-white border-black  rounded-md">
              <Heading className="leading-tight text-black">
                {" "}
                You received the following message from the contact form
              </Heading>

              <Text > {message}</Text>
              <Hr />
              <Text> {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
