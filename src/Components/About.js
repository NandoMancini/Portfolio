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
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo <span>ligula</span> eget dolor. Aenean massa. Cum sociis natoque penatibus et
                     <span>magnis</span> dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
                    nec, pellentesque eu, pretium <span>quis</span>, sem. Nulla consequat massa quis enim.</p>
                    <button className="contact-button">Résumé</button>
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
