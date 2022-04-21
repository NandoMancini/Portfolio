import React, {useState} from 'react'
import "../Styles/Projects.css"
import dataSlider from "./dataSlider"
import leftArrow from "../Assets/leftArrow.png"
import rightArrow from "../Assets/rightArrow.png"
import react from "../Assets/react.png"
import js from "../Assets/js.png"

function Projects() {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        console.log(slideIndex);
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="slider">
               {dataSlider.map((obj, index) => {
                   return (
                        <div key={obj.id} className='item'>
                            <div className="left">
                                <h2>{obj.title}</h2>
                                <p>{obj.subTitle}</p>
                                <div className="project-icons">
                                    <img src={react}></img>
                                    <img src={js}></img>
                                </div>
                            </div>
                            <div className="right">
                                <img src={require("../Assets/" + obj.image + ".png")}></img>
                            </div>
                        </div>
                   )
               })}
               <img src={leftArrow} className="proj-arrow-left" onClick={nextSlide}></img>
               <img src={rightArrow} className="proj-arrow-right" onClick={prevSlide}></img>
            </div>
        </div>
    )
}

export default Projects
