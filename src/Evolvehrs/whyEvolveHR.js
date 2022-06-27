import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { imageSlider } from "./EvolveImage";
function whyEvolveHR() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="container mt-5">
        <Carousel responsive={responsive} infinite={true} >
            {imageSlider.map((ele)=>(

          
       
                <div className="imgSec_315210 m-2" >
                <div className="row">
                 
                  <div className="col-md-6">
                  <div className="dealsImage">
                  <img
                      src={ele.imageSlider}
                      alt=""
                      
                    />
                  </div>
                  </div>
              
                </div>
              </div>
    
            
        ))}
        </Carousel>
      </div>
    </>
  );
}

export default whyEvolveHR;
