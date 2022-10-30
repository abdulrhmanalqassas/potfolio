import React from "react";
export default function ProjectCard(props) {
 const technologies =props.myProject.technologies
 console.log(">>>>>>>>>>>>>",props)
  return (
    <div className="project-card">
      <img alt="project m img "  src={props.myProject.image}></img>
      <h3>{props.myProject.title}</h3>
      {technologies.map((tech) => {
        return <button>{tech}</button>;
      })}
      <p>
        {props.myProject.description}
      </p>
    </div>
  );
}
