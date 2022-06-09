import React, {useState} from 'react'
import "../Styles/Projects.css"
import dataSlider from "./dataSlider"
import leftArrow from "../Assets/leftArrow.png"
import rightArrow from "../Assets/rightArrow.png"
import {faYoutube, faGithub, faDev} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import parse from "html-react-parser";

function Projects() {
    const [slideIndex, setSlideIndex] = useState(0)

    const nextSlide = () => {
        console.log(slideIndex);
        if(slideIndex !== dataSlider.length - 1){
            setSlideIndex(slideIndex + 1)
        } 
        else {
            setSlideIndex(0)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 0){
            setSlideIndex(slideIndex - 1)
        }
        else {
            setSlideIndex(dataSlider.length - 1)
        }
    }

    return (
        <div className="projects" data-aos="fade-down">
            <h1>Projects</h1>
            <div className="slider" style={{transform: `translateX(-${slideIndex * 100}vw)`}}>
               {dataSlider.map((obj, index) => {
                   return (
                    <div key={obj.id} className="item-container">
                        <div  className='item'>
                            <div className="left">
                                <h2>{obj.title}</h2>
                                <p>{parse(obj.subTitle)}</p>
                                <div className="stack-icons">
                                    <a href={obj.devpost}>
                                        <FontAwesomeIcon icon={faDev} className={"stack-icon"} style={obj.devpost ? {display:  "block"} : {display: "none"}} inverse />
                                    </a>
                                    <a href={obj.youtube}>
                                        <FontAwesomeIcon icon={faYoutube} className={"stack-icon"} style={obj.youtube ? {display:  "block"} : {display: "none"}} inverse />
                                    </a>
                                    <a href={obj.github}>
                                        <FontAwesomeIcon icon={faGithub} className={"stack-icon"} style={obj.github ? {display:  "block"} : {display: "none"}} inverse />
                                    </a>
                                </div>
                            </div>
                            <div className="right">
                                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                <img src={require("../Assets/" + obj.image + ".png")} alt={"Project picture"}></img>
                            </div>
                        </div>
                    </div>
                   )
               })}
            </div>
            <img src={leftArrow} className="proj-arrow-left" onClick={prevSlide} alt={"leftArrow"}></img>
            <img src={rightArrow} className="proj-arrow-right" onClick={nextSlide} alt={"rightArrow"}></img>
        </div>
    )
}

export default Projects
