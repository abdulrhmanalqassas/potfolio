import React from "react";
import ProjectCard from "./ProjectCard";

const myProjects = {
  p1: {
    image: require("../../images/h4isite.png"),
    title: "HI COMMERCE",
    description:
      "Fully featured Ecommerce website with currency switcher, cart, category, and PDP andJWT authentication",
    technologies: ["REACT", "apollo", "graphQL", "redux"],
  },
  p2: {
    image: require("../../images/tmlawysite.png"),
    title: "EDU Management ",
    description:
      ". Help managing student state and many courses info managing payment .",
    technologies: ["MUI", "REACT", "axios"],
  },
};
export default function Project() {
  return (
    <section className="project">
      <h3>PROJECTS</h3>
      <div className="grid">
        <ProjectCard myProject={myProjects.p1} />
        <ProjectCard myProject={myProjects.p2} />
        {/* <ProjectCard myProject={myProjects.p1} />
        <ProjectCard myProject={myProjects.p2} /> */}
      </div>
    </section>
  );
}
