import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// const  useState = React.useState
export default function Nav() {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav>
      <ul>
        <div className={menu_class}>
          <div>
            <Link to="">HOME </Link>
            <Link to="Contact">Contact</Link>
          </div>
        </div>
        <Link to="">
          {" "}
          <li className="nav-link">home</li>
        </Link>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        
        <li className="nav-link">
          {/* Projects */}
          <Link to="Contact">
            {" "}
            <button>Contact</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
