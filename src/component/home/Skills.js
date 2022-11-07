import React from "react";
import IMAGES from "../../images/skillsImages";

export default function Skills() {
  const mySkills = [];
  
    for (const key in IMAGES) {
      const element = <img className={key==="reactIcon"||key==="reduxIcon"? "App-logo skill" : "skill"} key={key} src={IMAGES[key]} alt={key}></img>;
      mySkills.push(element);
    
  }
  return (
    <section className="skills">
      <h3> SKILLS </h3>
      <div className="mySkills grid">{mySkills}</div>
    </section>
  );
}
