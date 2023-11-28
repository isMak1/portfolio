import { links } from "./data";
import { pages } from "./data";

export type SectionName = (typeof links)[number]["name"];
export type PageName = (typeof pages)[number]["name"];
