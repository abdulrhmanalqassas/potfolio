import React from "react";
import {Link} from  "react-router-dom"
export default function Nav(){
    return(
        <nav>
            <ul>
              <Link to=""> <li>home</li></Link> 
                <div className="mob-burger"></div>
                <li className="nav-link" >
                    {/* Projects */}
                    <Link to="Contact"> <button>Contact</button></Link>
                </li>
                
            </ul>
        </nav>
    )
}