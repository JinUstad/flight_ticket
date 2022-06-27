import React from "react";
import "./BookNow.css";
function BookNow() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-9">
            <div className="Log_inFlight">
              <div className="accountFlight">
                <ul>
                  <li>
                    {" "}
                    <i className="fa fa-lock-open mr-3"></i>Log-in to your
                    Akbartravels account
                  </li>
                  <li className="logGuest ml-4">
                    <button className="btn btn-danger text-white">
                      Continue as Guest
                    </button>
                  </li>
                  <li className="logGuest">Log-in</li>
                </ul>
              </div>
            </div>
            <div className="mt-2">
              <h6>Make your booking refundable</h6>
            </div>
            {/* Covid-19 Infection & Isolation */}
            <div className="infectionIsolation">
              <div className="flightIsolation">
                <div className="COVID_19">
                  <p>
                    <i class="fa-solid fa-weight-hanging mr-2"></i> COVID-19
                    Infection & Isolation{" "}
                  </p>
                  <h6>
                    <i className="fa fa-plane mr-2"></i> 63% of our flyers
                    upgrade to a Refundable booking.
                  </h6>
                </div>
                <hr />
              </div>
              <div className="sicknessFlight">
                <div className="row">
                  {Array(8)
                    .fill()
                    .map((e) => (
                      <div className="col-md-4">
                        <div className="Sickness">
                          <p>
                            <i class="fa fa-check-circle"></i> Sickness /
                            Accident / Injury
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <hr />
              <div className="termsConditions">
                <p>
                  Upgrade your Booking and receive upto 100% if you cannot
                  attend and can evidence one of the many reasons in our{" "}
                  <u>Terms and Conditions</u> , which you accept when you select
                  a Refundable Booking.
                </p>
                <div>
                  &nbsp;{" "}
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    defaultValue="HTML"
                  />
                  &nbsp;{" "}
                  <label className="labelText" htmlFor="html">
                    Yes make my booking refundable (recommended){" "}
                  </label>{" "}
                  <span className="amount">
                    <b>Premium Amount</b>
                  </span>{" "}
                  <br />
                  &nbsp;{" "}
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    defaultValue="CSS"
                  />
                  &nbsp;{" "}
                  <label className="labelText" htmlFor="css">
                    No do not make my booking Refundable and accept terms might
                    be Non-Refundable
                  </label>{" "}
                  <span className="rupye">
                    <b>₹ 861</b>
                  </span>
                </div>
              </div>
            </div>
            {/* Traveller Details */}
            <div className="travellerDetailsFlight mt-2">
              <div className="mt-2">
                <h6>Traveller Details</h6>
              </div>
              <div className="detailFlight23">
                <p>
                  <i class="fa fa-warning"></i> Please make sure you enter the
                  Name as per your Government photo id.
                </p>
                <div className="inputFlight"></div>
              </div>
            </div>
            {/* Addon Services */}
            <div className="addonServices623">
              <div className="mt-2">
                <h6>Addon Services</h6>
              </div>
              <div className="Services623">
                <div className="suitcase">
                  <button className="btn btn-danger">
                    <i class="fa fa-suitcase mr-2"></i>Add Baggage
                  </button>
                  <button className="btn btn-danger">
                    <i class="fa-solid fa-chair mr-2"></i>Seat Section
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
}

export default BookNow;
