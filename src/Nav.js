import React, { useEffect, useState } from "react";
import imageSrc from "./img/profile.png";
import imageSrc1 from "./img/netflix-logo-0.png";
import"./Nav.css"


function Nav() {
    const[show,handleShow] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else handleShow(false);
        });

        return () =>{
            window.removeEventListener("scroll");
        };
    }, []);


    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav__logo"
                alt="netflixlogo"
                src={imageSrc1}
            />

            <img className="nav__avatar"
                alt="netflixlogo"
                src={imageSrc}
            />

        </div>
    )

};

export default Nav;