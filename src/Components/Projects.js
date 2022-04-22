import React, {useState} from 'react'
import "../Styles/Projects.css"
import dataSlider from "./dataSlider"
import leftArrow from "../Assets/leftArrow.png"
import rightArrow from "../Assets/rightArrow.png"
import react from "../Assets/react.png"
import js from "../Assets/js.png"

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
        <div className="projects">
            <h1>Projects</h1>
            <div className="slider" style={{transform: `translateX(-${slideIndex * 100}vw)`}}>
               {dataSlider.map((obj, index) => {
                   return (
                    <div key={obj.id} className="item-container">
                        <div  className='item'>
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
                    </div>
                   )
               })}
            </div>
            <img src={leftArrow} className="proj-arrow-left" onClick={prevSlide}></img>
            <img src={rightArrow} className="proj-arrow-right" onClick={nextSlide}></img>
        </div>
    )
}

export default Projects
