import React from 'react'
import "../Styles/About.css";
import self from "../Assets/portfolio-pic.png"
import { FaDev, FaGithub, FaLinkedin } from 'react-icons/fa'

const About = () => {
    const handleResumeClick = () => {
        const resumePath = process.env.PUBLIC_URL + '/resume.pdf';
        window.open(resumePath, '_blank');
    };

    return (
        <section className="about" id="about" data-aos="fade-down">
            <h1>About Me</h1>
            <div className="content">
                <img className="self" src={self} alt="Fernando Sousa" />
                <div className="container">
                    <p>Hey! I'm Fernando, a <span>fourth year computer science student</span> at the University of
                    Toronto. I enjoy studying different parts of computer science and learning new languages/tools,
                    since that makes it possible for me to bring things that I imagine into reality.</p>
                    <p>When I'm not in class I like going to the gym, reading, but also coding and building personal
                    projects outside of the pressures of school.</p>
                    <p>Below, you are able to find some of my <span>past projects</span> that I've built over the past
                    few years, and some of the ways that you are able to contact me, even if it's for a quick chat!</p>
                    <button 
                        className="contact-button" 
                        id="resume-button" 
                        onClick={handleResumeClick}
                        type="button"
                        aria-label="Download resume"
                    >
                        Résumé
                    </button>
                </div>
                <div className="proj-icons" role="list">
                    <a 
                        href="https://devpost.com/NandoMancini?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Devpost profile"
                    >
                        <FaDev className="proj-icon" aria-hidden="true" />
                    </a>
                    <a 
                        href="https://github.com/NandoMancini"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                    >
                        <FaGithub className="proj-icon" aria-hidden="true" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/fernando-sousa-501439205/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                    >
                        <FaLinkedin className="proj-icon" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
