import React, { useEffect, useRef, useState } from 'react'
import "../Styles/Landing.css"
import { Link } from 'react-scroll'
import { FaChevronDown } from 'react-icons/fa'

const TEXTS = ['coding.', 'problem solving.', 'cooking.', 'learning.'];
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_TIME = 1500;

const Hero = () => {
    const textRef = useRef(null);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = TEXTS[currentTextIndex];
        
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentText.length) {
                    setDisplayText(currentText.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), PAUSE_TIME);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentText.slice(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % TEXTS.length);
                }
            }
        }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentTextIndex]);

    return (
        <div className="landing">
            <div className="wrapper">
                <h2>Hi! I'm</h2>
                <h1>Fernando Sousa,</h1>
                <h3>and I enjoy <span ref={textRef}>{displayText}<span className="ityped-cursor">|</span></span></h3>
                <div>
                    <Link to="contact" smooth={true} duration={1000}>
                        <button className="contact-button" type="button">Contact Me!</button>
                    </Link>
                    <button 
                        className="contact-button resume-button" 
                        type="button"
                        onClick={() => {
                            const resumePath = process.env.PUBLIC_URL + '/resume.pdf';
                            window.open(resumePath, '_blank');
                        }}
                    >
                        Get my Resume!
                    </button>
                </div>
            </div>
            <FaChevronDown className="arrow" aria-label="Scroll down" />
        </div>
    )
}

export default Hero
