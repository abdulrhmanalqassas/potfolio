import React from "react";
import heroImage from "../../images/heroImage.png";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <header className=" hero grid">
      <div className="hero-text">
        <h3>💻FRONTEND - DEVELOPER💻</h3>
        <h1>ABDULRHMAN ALQASSAS</h1>
        <p>
          You need a nice DEVELOPER to be in your team i think you just found a
          good one just take a look and Contact Me waite to hear from You .
        </p>
        <Link to="Contact">
          {" "}
          <button>Contact Me</button>
        </Link>
      </div>
      <div>
        <img className="hero-img " alt="hero img " src={heroImage}></img>
      </div>
    </header>
  );
}
