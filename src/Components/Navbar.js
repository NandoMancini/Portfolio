import React from 'react'
import "../Styles/Navbar.css";


const Navbar = () => {
    return (
        <div className="navbar">
            <div id="logo"><strong>Fernando S.</strong></div>
            <div><a className="link">About Me</a></div>
            <div><a className="link">Projects</a></div>
            <div><a className="link">Contact</a></div>
        </div>
    )
}

export default Navbar
