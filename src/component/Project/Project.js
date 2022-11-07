import React from "react";
import ProjectCard from "./ProjectCard";
import myProjects from "./myProjects";
import { Link } from "react-router-dom";


function displayedProject(displayedNumber){
  var Cards=[]
  for( let i = 1; i<=displayedNumber ; i++ ){
    Cards.push( <ProjectCard myProject={myProjects[`p${i}`]} />)
  }
  return Cards
}

export default function Project(props) {
  return (
    <section className="project">
      <h3>PROJECTS</h3>
      <div className="grid">
        {
          displayedProject(props.displayedNumber)
        }
      </div>
      
      
         { props.displayedNumber<3 && <Link to="Projects">
          
            <button>view more Projects</button>
          </Link>}
    </section>
  );
}
