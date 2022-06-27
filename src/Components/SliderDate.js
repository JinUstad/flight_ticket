import React from "react";
import Slider from "react-slick";
import "./SliderDate.css";
function SliderDate() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 9,
    slidesToScroll: 9,
  };
  return (
    <>
      <div>
        
        <div className="container">
          <Slider {...settings}>
            <div className="slider  ">
              <h6> Jan 1 2022</h6>
              <p>₹ 8890</p>
            </div>
            <div className="slider ">
              <h6> Jan 2 2022</h6>
              <p>₹ 8890</p>
            </div>
            <div className="slider ">
            <h6> Jan 3 2022</h6>
              <p>₹ 8890</p>
            </div>
            <div className="slider ">
            <h6> Jan 4 2022</h6>
              <p>₹ 8890</p>
            </div>
            <div className="slider ">
            <h6> Jan 5 2022</h6>
              <p>₹ 8890</p>
            </div>
            <div className="slider ">
            <h6> Jan 6 2022</h6>
              <p>₹ 8890</p>
            </div>
            <div className="slider ">
            <h6> Jan 7 2022</h6>
              <p>₹ 8890</p>
            </div>
            <div className="slider ">
            <h6> Jan 8 2022</h6>
              <p>₹ 8890</p>
            </div>
            <div className="slider ">
            <h6> Jan 9 2022</h6>
              <p>₹ 8890</p>
            </div>
            <div className="slider ">
            <h6> Jan 10 2022</h6>
              <p>₹ 8890</p>
            </div>
            <div className="slider ">
            <h6> Jan 11 2022</h6>
              <p>₹ 8890</p>
            </div>
            <div className="slider ">
            <h6> Jan 12 2022</h6>
              <p>₹ 8890</p>
            </div>
            <div className="slider ">
            <h6> Jan 13 2022</h6>
              <p>₹ 8890</p>
            </div>
            <div className="slider ">
            <h6> Jan 14 2022</h6>
              <p>₹ 8890</p>
            </div>
            <div className="slider ">
            <h6> Jan 15 2022</h6>
              <p>₹ 8890</p>
            </div>
            <div className="slider ">
            <h6> Jan 16 2022</h6>
              <p>₹ 8890</p>
            </div>
            <div className="slider ">
            <h6> Jan 17 2022</h6>
              <p>₹ 8890</p>
            </div>
            <div className="slider ">
            <h6> Jan 18 2022</h6>
              <p>₹ 8890</p>
            </div>
            <div className="slider ">
            <h6> Jan 19 2022</h6>
              <p>₹ 8890</p>
            </div>
            <div className="slider ">
            <h6> Jan 20 2022</h6>
              <p>₹ 8890</p>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default SliderDate;
