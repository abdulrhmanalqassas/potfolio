import React from "react";
import IMAGES from "../images/social";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
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
        <Link to="potfolio">
          <li>HOME</li>
        </Link>

        <Link to="potfolio/contact">
          <li>CONTACT</li>
        </Link>
      </ul>
    </footer>
  );
}
