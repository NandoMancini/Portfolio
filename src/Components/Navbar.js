import React from 'react'
import "../Styles/Navbar.css";
import {Link, animateScroll} from "react-scroll"

const Navbar = () => {
    const scrollToTop = () => {
      animateScroll.scrollToTop();
    };

    return (
        <div className="navbar">
            <div id="logo" onClick={scrollToTop}><strong>Fernando S.</strong></div>
            <div className={"links"}>
                <Link to={"about"} smooth={true} duration={1000} className={"link-wrapper"}><a id="link">About Me</a></Link>
                <Link to={"projects"} smooth={true} duration={1000} className={"link-wrapper"}><a id="link">Projects</a></Link>
                <Link to={"contact"} smooth={true} duration={1000} className={"link-wrapper"}><a id="link">Contact</a></Link>
            </div>
        </div>
    )
}

export default Navbar
