import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ExclusiveDeals.css";
function Imageslider() {
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
      <div className="container">
        <Carousel responsive={responsive} infinite={true} >
        {
            Array(8).fill().map((_ , i)=>(
                <div className="imgSec_315210 m-2" key={i}>
                <div className="row">
                 
                  <div className="col-md-6">
                  <div className="dealsImage">
                  <img
                      src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/hotel280122.webp"
                      alt=""
                      style={{ width: "82%" }}
                    />
                  </div>
                  </div>
                  <div className="col-md-6">
                    <a href="">
                        <div className="dealText">
                        <h4>HOTEL</h4>
                      <h6>Upto 50% Off on Hotels</h6>
                      <p>Get upto 50%* Instant discount on any Hotel bookings</p>
                        </div>
                    </a>
                  </div>
                </div>
              </div>
    
            ))
        }
       
        </Carousel>
      </div>
    </>
  );
}

export default Imageslider;
