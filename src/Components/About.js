import React from 'react'
import "../Styles/About.css";
import self from "../Assets/portfolio-pic.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDev, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const About = () => {
    return (
        <div className="about">
            <h1>About Me</h1>
            <div className="content">
                <div className="a-image">
                    <img className="self" src={self} alt={"self portrait"}></img>
                </div>
                <div className="container">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo <span>ligula</span> eget dolor. Aenean massa. Cum sociis natoque penatibus et
                     <span>magnis</span> dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
                    nec, pellentesque eu, pretium <span>quis</span>, sem. Nulla consequat massa quis enim.</p>
                    <button class="contact">Résumé</button>
                    <div className="proj-icons">
                        <FontAwesomeIcon icon={faDev} className={"proj-icon"} />
                        <FontAwesomeIcon icon={faGithub} className={"proj-icon"} />
                        <FontAwesomeIcon icon={faLinkedin} className={"proj-icon"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
