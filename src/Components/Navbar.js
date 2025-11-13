import React, { useState } from 'react'
import "../Styles/Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll"
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToTop = () => {
      scroll.scrollToTop();
      setMobileMenuOpen(false);
    };

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className="navbar" role="navigation" aria-label="Main navigation">
            <div id="logo" onClick={scrollToTop} onKeyDown={(e) => e.key === 'Enter' && scrollToTop()} tabIndex={0} role="button" aria-label="Scroll to top">
                <strong>Fernando S.</strong>
            </div>
            <div className="links">
                <Link to="about" smooth={true} duration={1000} className="link-wrapper" onClick={handleLinkClick}>
                    <span id="link">About</span>
                </Link>
                <Link to="experience" smooth={true} duration={1000} className="link-wrapper" onClick={handleLinkClick}>
                    <span id="link">Experience</span>
                </Link>
                <Link to="projects" smooth={true} duration={1000} className="link-wrapper" onClick={handleLinkClick}>
                    <span id="link">Projects</span>
                </Link>
                <Link to="contact" smooth={true} duration={1000} className="link-wrapper" onClick={handleLinkClick}>
                    <span id="link">Contact</span>
                </Link>
            </div>
            <button 
                className="mobile-menu-button" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
            >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                <Link to="about" smooth={true} duration={1000} className="link-wrapper" onClick={handleLinkClick}>
                    <span id="link">About</span>
                </Link>
                <Link to="experience" smooth={true} duration={1000} className="link-wrapper" onClick={handleLinkClick}>
                    <span id="link">Experience</span>
                </Link>
                <Link to="projects" smooth={true} duration={1000} className="link-wrapper" onClick={handleLinkClick}>
                    <span id="link">Projects</span>
                </Link>
                <Link to="contact" smooth={true} duration={1000} className="link-wrapper" onClick={handleLinkClick}>
                    <span id="link">Contact</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
