import React, { useState } from "react";
import "./FlightDetails.css";
function FlightSec() {
  const [showdata, setShowdata] = useState(false);

  return (
    <>
        <div className="flightSec ">
       <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
            <div className="airFlightdetails">
              <table class="table  tableColor">
                <thead>
                  <tr>
                    <th ></th>
                    <th ></th>
                    <th ></th>
                    <th ></th>
                    <th >
                     
                    </th>
                    <th ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tableRow123">
                    <th scope="row" className="flightDetail16 detail201">
                      <img
                        src="https://dhiz4uvf5rpaq.cloudfront.net/in/V2/assets/images/AirlineLogo/I5.jpg"
                        alt=""
                      />
                      <span className="airAsia">
                        <h6>Air Asia I5</h6>
                      </span>
                      <p>l5 749</p>
                      <strong>Best Value</strong>
                    </th>
                    <td>
                      <div className="departure">
                        <h6>22:30</h6>
                        <p>Bangalore</p>
                      </div>
                    </td>
                    <td>
                      <div className="duration">
                        <h6>8Hr. 35 Min.</h6>
                        <i className="fa fa-plane"></i>
                        <p>1 stop , via New Delhi</p>
                      </div>
                    </td>
                    <td>
                      <div className="arrival">
                        <h6>07:05</h6>
                        <h5>
                          Kolkata <span className="text-danger">7 LEFT</span>
                        </h5>
                        <p>Next Day</p>
                      </div>
                    </td>
                    <td>
                      <div className="price">
                        <h6>₹ 7262</h6>
                      </div>
                    </td>
                    <td>
                      <div className="btn">
                        <div className="btn btn-danger">Book Now</div>
                        <p onClick={() => setShowdata(!showdata)}>Flight</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
               
              </table>
            
              <div className="flightaccordi">   
              {showdata && <div className="flightshowdata1234">
                  <ul>
                    <li>OVERVIEW</li>
                    <li>FARE SUMMARY & RULES</li>
                    <li>FREE BAGGAGE</li>
                  </ul>
                </div> }
              </div>
              <div className="tableParaDetail">
                <p>
                  <span className="tableInfo">Info</span> All passengers are
                  requested to administer 2 doses of accepted vaccine before
                  commencement of any..
                </p>
                
              </div>
            </div>
          </div>      
        </div>
        </div>
    </>
  )
}

export default FlightSec