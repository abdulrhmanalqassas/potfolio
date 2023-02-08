import React from "react";
import { Link, useNavigate, useLocation }  from "react-router-dom";
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

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  return (
    <div style={{postion:"fixed"}}>
    <nav>
      <ul>
        <div className={menu_class}>
          <div>
            <Link onClick={updateMenu} to="potfolio">HOME </Link>
            <Link onClick={updateMenu} to="potfolio/Contact">Contact</Link>
            <Link onClick={updateMenu} to="potfolio/Projects">Projects</Link>
          </div>
        </div>
        <Link to="potfolio">
   
          <li className="nav-link">Home</li>
        </Link>
        <Link to="potfolio/Projects">
   
          <li className="nav-link">Projects</li>
        </Link>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        
        <li className="nav-link">
          
          <Link to="potfolio/Contact">
            
            <button>Contact</button>
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}


