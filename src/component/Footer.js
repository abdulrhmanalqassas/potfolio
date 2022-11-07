import React from "react";
import IMAGES from "../images/social";
import { Link } from "react-router-dom";

export default function Footer() {
  const mySocial = [];
  
    for (const key in IMAGES) {
      const element = (
        <>
          
          <a href={IMAGES[key]["href"]} ><img
            className={"social-icon"}
            key={key}
            src={IMAGES[key]["src"]}
            alt={key}

          ></img>  </a>
          <span>{key}</span>
      
        </>
          
      );
      mySocial.push(element);
    
  }
  return (
    <footer>
      <div className="social">{mySocial}</div>
      <ul>
        <Link to="">
          <li>HOME</li>
        </Link>

        <Link to="contact">
          <li>CONTACT</li>
        </Link>
      </ul>
    </footer>
  );
}
