"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After finishing my third year of Masters in{" "}
        <span className="font-medium">Computer Science in my home country Tunisia</span>, I had the opportunity to travel to canada and acquired a college degree as a{" "}
        <span className="font-medium">Programmer-Analayst</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        realisation of diverse clients ideas. I <span className="underline">love</span> turning their simple words into jaw dropping UI/UX designs. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, and Node.js
        </span>
        . I am also familiar with UX design tools such as Figma and AdobXD. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a web
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy doing some wight lifting and boxing sessions. I also enjoy{" "}
        <span className="font-medium">learning new things and keeping up with the latest technologies and tools in the market</span>. I am currently
        learning aboout{" "}
        <span className="font-medium">e-commerce and trying to build my own brand.</span>
      </p>
    </motion.section>
  );
}
