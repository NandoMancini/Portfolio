import leftArrow from "../Assets/leftArrow.png"
import rightArrow from "../Assets/rightArrow.png"

export default function BtnSlider({ direction, moveSlide }) {
    return (
      <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        <img src={direction === "next" ? rightArrow : leftArrow} />
      </button>
    );
  }