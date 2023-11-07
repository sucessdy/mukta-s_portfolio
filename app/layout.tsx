import Header from "@/components/Header";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveContextProvider from "@/Context/ContextActiveProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mukta | Portfolio",
  description: `I'm a web developer`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative text-center h-[5000px] pt-28 sm:pt-36`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-5rem] right-[11rem] h-[31.25rem] w-[31.25rem] z-10 rounded-full blur-[10rem] sm:w-[68.75rem]">
          {" "}
        </div>
        <div className="bg-[#f1d7fb] absolute top-[-1rem] left-[35rem] h-[31.25rem] w-[50rem] z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-29rem] xl:left-[-15rem] 2xl:left-[-5rem]">
          {" "}
        </div>
        <ActiveContextProvider>
          <Header />
          {children}
        </ActiveContextProvider>
      </body>
    </html>
  );
}
