import React from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import Project from "../Project/Project";
import About from "./About";

export default function Home() {
  return (
    <>
      <Hero />
      <Project/>
      <About />
      <Skills />
    </>
  );
}
