import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import RahmAuto from "@/public/rahmauto.png";
import Amir from "@/public/amir.png";
import CPM from "@/public/cpm.png";
import Canvas from "@/public/canvas.png";
import Port from "@/public/port.png";
import Image from "next/image";

export const pages = [
  {
    name: "Portfolio",
    hash: "#portfolio",
  },
  {
    name: "Agency",
    hash: "#agency",
  }
] as const;

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
    title: "Bachelors Degree",
    location: "Tunis, Tunisia",
    description:
      "I got my bachelor degree in math back in 2015 in my home country tunisia and I got into software engineering right after..",
    icon: React.createElement(LuGraduationCap),
    date: "2015",
  },
  {
    title: "Software Engineer",
    location: "Tunis, SMU",
    description:
      "I finished 3 years of masters degree in the mediterranean school of technology before I had the opportunity to travel to Canada and persue my studies.",
    icon: <Image className="rounded-full" height="60" width="60" src="/SMU1.jpg" alt="SMU" />,
    date: "2015 - 2019",
  },
  {
    title: "Programmer-Analyst",
    location: "Montreal, QC",
    description:
      "I finished 3 years of College in Canada and acquired the core concepts of Internet Oriented programming with the best practices to build scalable and maintainable web applications.",
    icon: <Image className="rounded-full" height="60" width="60" src="/CDI.jpg" alt="CDI" />,
    date: "2020 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Renaissance Canvas",
    description:
      "Employing state-of-the-art algorithms, every 30 minutes, our advanced system prompts DALL-E to generate a unique visual, ChatGPT generates a relative name and  description, Shopify builds a canvas with the generated data. Then everything is passed to our marketplaces and Socials for promotion. An automated scenario with the help of Make.com",
    tags: ["HTML", "CSS3", "Javascript", "Figma", "Photoshop", "Webflow"],
    imageUrl: Canvas,
    link: "https://renaissancecanvas.com/"
  },
  {
    title: "Rahma Auto",
    description:
      "This was my internship project which led me to graduation as a Programmer-Analyst. I got an offer to build the online presence of an internation cars point of sales startup and I applied all the knowledge acquired in my 3 years of collage both on the analytical and development side.",
    tags: ["Bootstrap", "Figma", "React", "Tailwind", "Framer", "Paypal"],
    imageUrl: RahmAuto,
    link: "https://rahmauto.com/"
  },
  {
    title: "Amir",
    description:
      "First contract as a Junior full-stack developer. I was the webmaster for this project working with artists and designers to update the web application for the infamous libanese food-chain Amir",
    tags: ["Figma", "React", "Next.js", "TypeScript", "Node.js", "Tailwind", "Framer", "Stripe"],
    imageUrl: Amir,
    link: "https://ismak.webflow.io/404/"
  },
  {
    title: "CPM",
    description:
      "Carrefour de personnel de Montreal is Quebec based recrutement agency that reach out to me after hearning from my satisfied employers and asked me to help them build  a platform to communicate efficiently with their clients.",
    tags: ["Bootstrap", "Figma", "Photoshop", "React", "Next.js", "Tailwind", "Framer", "OpenAI"],
    imageUrl: CPM,
    link: "https://cpmjob.com/"
  },
  {
    title: "Vieux Port",
    description:
      "My first designed portfolio made using Webflow It containes my old project. Feel free to check it out.",
    tags: ["HTML", "CSS3", "Javascript", "Figma", "Photoshop", "Webflow"],
    imageUrl: Port,
    link: "https://ismak.webflow.io/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Framer Motion",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Java",
  "Git",
  "C#",
  "MySQL",
  "PostgreSQL",
  "Wordpress",
  "Shopify",
  "Webflow",
  "Figma",
  "AdobeXD",
  "OpenAI",
  "Make.com",
] as const;
