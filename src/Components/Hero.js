import React from 'react'
import "../Styles/Hero.css"
import { init } from "ityped"
import { useEffect, useRef } from "react"

const Hero = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, 
            { showCursor: true,
              backDelay: 1500,
              backSpeed: 50,
              
              strings: ['coding.',  'problem solving.', 'cooking.', 'learning.'] })
    }, [])

    return (
        <div className="body">
            <div className="wrapper">
                <h2>Hi, I'm</h2>
                <h1>Fernando Sousa,</h1>
                <h3>and I enjoy <span ref={textRef}></span></h3>
                <button>Contact Me.</button>
            </div>
        </div>
    )
}

export default Hero
