import React from "react";
import './ExclusiveDeals.css'
import ImageSlider from "./ImageSlider";
function ExclusiveDeals() {
 
  return (
    <div>
      <div className="exclusiveDeal">
        <div className="container">
          <div className="exclusiveList">
            <ul>
              <span className="exclusive ">
                Exclusive <b>Deals</b>{" "}
              </span>
              <li className="ml-5">Hot Deal</li>
              <li>Flight</li>
              <li>Hotel</li>
              <li>Holiday</li>
              <li>Curise</li>
              <li className="viewDetails">View All</li>
            </ul>
            </div>
            <ImageSlider/>
          </div>
        </div>
    </div>
  );
}

export default ExclusiveDeals;
