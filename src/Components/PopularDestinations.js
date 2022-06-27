import React from "react";
import "./PopularDestinations.css";
function PopularDestinations() {
  return (
    <>
      <div className="PopularDestinations mt-3">
        <div className="listPopular">
          <span className="popular">
            Popular <b>Destinations</b>
          </span>
          <span className="popularHover">ALL DESTINATIONS</span>
          <span className="popularHover">INTERNATIONAL</span>
          <span className="popularHover">DOMESTIC</span>
          <span className="viewAllDesti">View All Destinations</span>
        </div>

        <div className="row">
          <div className="col-md-6 mt-3">
            <div className="countryList">
              <ul>
                {Array(16)
                  .fill()
                  .map((_, i) => (
                    <li>
                      <img
                        src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/maldives1222.webp"
                        alt=""
                      />
                      <span>India</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className="row">
            {
              Array(4).fill().map((_,i)=>(
                <div className="col-md-6">
                <div className="imageGallery mt-2">
                      <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                      </div>
                </div>
              ))
            }
        
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularDestinations;
