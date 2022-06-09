import React from 'react'
import "../Styles/About.css";
import self from "../Assets/portfolio-pic.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDev, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const About = () => {
    return (
        <div className="about" data-aos={"fade-down"}>
            <h1>About Me</h1>
            <div className="content">
                <img className={"self"} src={self} alt={"self portrait"}></img>
                <div className="container">
                    <p>Hey! I'm Fernando, a <span>second year computer science student</span> at the University of
                    Toronto. I enjoy studying different parts of computer science and learning new languages/tools,
                    since that makes it possible for me to bring things that I imagine into reality.</p>
                    <p>When I'm not in class I like going to the gym, reading, but also coding and building personal
                    projects outside of the pressures of school.</p>
                    <p>Below, you are able to find some of my <span>past projects</span> that I've built over the past
                    few years, and some of the ways that you are able to contact me, even if it's for a quick chat!</p>
                    <button className="contact-button" id={"resume-button"}>Résumé</button>
                </div>
                <div className="proj-icons">
                        <a href={"https://devpost.com/NandoMancini?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"}>
                            <FontAwesomeIcon icon={faDev} className={"proj-icon"} inverse />
                        </a>
                        <a href={"https://github.com/NandoMancini"}>
                            <FontAwesomeIcon icon={faGithub} className={"proj-icon"} inverse />
                        </a>
                        <a href={"https://www.linkedin.com/in/fernando-sousa-501439205/"}>
                            <FontAwesomeIcon icon={faLinkedin} className={"proj-icon"} inverse />
                        </a>
                </div>
            </div>
        </div>
    )
}

export default About
