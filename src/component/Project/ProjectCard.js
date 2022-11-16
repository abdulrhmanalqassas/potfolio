import React from "react";
import { Link } from "react-router-dom";
export default function ProjectCard(props) {
 const technologies =props.myProject.technologies
  return (
    <div className="project-card">
      <img alt="project m img "  src={props.myProject.image}></img>
      {  
    props.myProject.link && <button onClick={() => {window.location.href=`${props.myProject.link}`}} style={{width: "fit-content"}} > VIEW DEMO HERE </button>
      }
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
