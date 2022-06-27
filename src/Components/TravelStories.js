import React from "react";
import "./TravelStories.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function TravelStories() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
      <div className="TravelStories mt-5">
        <h4>
          Travel <b>Stories</b>
        </h4>

        <Carousel responsive={responsive} infinite={true}>
          {Array(8)
            .fill()
            .map((_, i) => (
              <div className="row">
                <div className="col-md-3">
                  <div className="cardStories mt-2">
                    <img
                      src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/travelstories/webp/story1.webp"
                      alt=""
                    />
                    <div className="overlayImage"></div>
                    <div className="textOverlayImage"><p>Flight</p></div>
                    <div className="treavelSummary"><p>5 Easy International Destinations From India For Your Next Vacation</p></div>
                    <button>View More</button>
                  </div>
                </div>
              </div>
            ))}
        </Carousel>
      </div>
    </>
  );
}

export default TravelStories;
