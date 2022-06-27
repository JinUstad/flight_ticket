import React, { useState, useEffect } from "react";
import "./FlightDetails.css";
import FlightSec from "./FlightSec";
import SliderDate from "./SliderDate";
function FlightDetails() {
  const [showdata, setShowdata] = useState(false);

  function handleCallTab(event, tabName) {
    var tab, btn;
    tab = document.getElementsByClassName("overview206");
    btn = document.getElementsByClassName("callTab");
    for (var i = 0; i < tab.length; i++) {
      tab[i].style.display = "none";
    }
    for (var j = 0; j < btn.length; j++) {
      btn[j].className = btn[j].className.replace("   active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += "  active";
  }

  // useEffect(()=>{

  //   document.getElementById('bydefaultTab').click()

  // },[])
  return (
    <>
      <div className="flightTicketdetails mt-5">
        <div className="row">
          <div className="col-md-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="col-md-9">
            <div className="datePrice">
            <SliderDate/>
            </div>
            <div className="airFlightdetails">
              <table class="table  tableColor">
                <thead>
                  <tr>
                    <th scope="col">AIRLINE</th>
                    <th scope="col">DEPARTURE</th>
                    <th scope="col">DURATION</th>
                    <th scope="col">ARRIVAL</th>
                    <th scope="col">
                      PRICE <i className="fa fa-arrow_downward"></i>
                    </th>
                    <th scope="col">BEST VALUE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tableRow123">
                    <th scope="row" className="flightDetail16">
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
                {showdata && (
                  <div className="flightshowdata1234">
                    <ul>
                      <li
                        className="callTab"
                        id="bydefaultTab"
                        onClick={(event) => handleCallTab(event, "first")}
                      >
                        OVERVIEW
                      </li>
                      <li
                        className="callTab"
                        onClick={(event) => handleCallTab(event, "second")}
                      >
                        FARE SUMMARY & RULES
                      </li>
                      <li
                        className="callTab"
                        onClick={(event) => handleCallTab(event, "third")}
                      >
                        FREE BAGGAGE
                      </li>
                    </ul>
                    <div className="overview206" id="first">
                      <h1>hello1</h1>
                    </div>
                    <div className="overview206" id="second">
                      <div className="FARESUMMARY">
                        <div className="row">
                          <div className="col-md-5">
                            <div className="fareDetails">
                              <h5>Fare Details</h5>
                            </div>
                          </div>
                          <div className="col-md-7">
                            <div className="fareRules">
                              <h5>Fare Rules</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="overview206" id="third">
                      <div className="freeBaggeTab620">
                        <table class="table">
                          <thead class="thead-light">
                            <tr>
                              <th scope="col">Sector/Flight</th>
                              <th scope="col">Check in Baggage</th>
                              <th scope="col">Cabin Baggage</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>MAA - BOM</td>
                              <td>There Is No Items</td>
                              <td>There Is No Items</td>
                            </tr>
                            <tr>
                              <td>BOM - AMD</td>
                              <td>There Is No Items</td>
                              <td>There Is No Items</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="ulDetails">
                          <p>
                            The information presented above is as obtained from
                            the airline reservation system. Akbartravels.com
                            does not guarantee the accuracy of this information.
                          </p>
                          <p>
                            The baggage allowance may vary according to
                            stop-overs, connecting flights and changes in
                            airline rules.
                          </p>
                        </div>
                        <div className="tabWornning">
                          <p>
                            {" "}
                            <i className="fa fa-warning mr-2 text-danger"></i>{" "}
                            Additional baggage cannot be added on this fare.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
          <FlightSec />
        </div>
      </div>
    </>
  );
}

export default FlightDetails;
