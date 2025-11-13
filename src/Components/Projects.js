import React, { useState, useCallback } from 'react'
import "../Styles/Projects.css"
import dataSlider from "./dataSlider"
import leftArrow from "../Assets/leftArrow.png"
import rightArrow from "../Assets/rightArrow.png"
import { FaYoutube, FaGithub, FaDev } from 'react-icons/fa'
import parse from "html-react-parser";

function Projects() {
    const [slideIndex, setSlideIndex] = useState(0)

    const nextSlide = useCallback(() => {
        setSlideIndex((prevIndex) => 
            prevIndex === dataSlider.length - 1 ? 0 : prevIndex + 1
        );
    }, []);

    const prevSlide = useCallback(() => {
        setSlideIndex((prevIndex) => 
            prevIndex === 0 ? dataSlider.length - 1 : prevIndex - 1
        );
    }, []);

    return (
        <section className="projects" id="projects" data-aos="fade-down">
            <h1>Projects</h1>
            <div className="slider" style={{transform: `translateX(-${slideIndex * 100}vw)`}}>
               {dataSlider.map((obj) => (
                    <div key={obj.id} className="item-container">
                        <div className="item">
                            <div className="left">
                                <h2>{obj.title}</h2>
                                <p>{parse(obj.subTitle)}</p>
                                <div className="stack-icons" role="list">
                                    {obj.devpost && (
                                        <a 
                                            href={obj.devpost}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${obj.title} Devpost`}
                                        >
                                            <FaDev className="stack-icon" aria-hidden="true" />
                                        </a>
                                    )}
                                    {obj.youtube && (
                                        <a 
                                            href={obj.youtube}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${obj.title} YouTube`}
                                        >
                                            <FaYoutube className="stack-icon" aria-hidden="true" />
                                        </a>
                                    )}
                                    {obj.github && (
                                        <a 
                                            href={obj.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${obj.title} GitHub`}
                                        >
                                            <FaGithub className="stack-icon" aria-hidden="true" />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="right">
                                <img 
                                    src={require(`../Assets/${obj.image}.png`)} 
                                    alt={`${obj.title} project screenshot`}
                                />
                            </div>
                        </div>
                    </div>
               ))}
            </div>
            <button 
                className="proj-arrow-left" 
                onClick={prevSlide}
                aria-label="Previous project"
                type="button"
            >
                <img src={leftArrow} alt="Previous" />
            </button>
            <button 
                className="proj-arrow-right" 
                onClick={nextSlide}
                aria-label="Next project"
                type="button"
            >
                <img src={rightArrow} alt="Next" />
            </button>
        </section>
    )
}

export default Projects

