import React from "react";
import "./SeatBook.css";
function SeatBook() {
    function handleClose(){
        document.getElementById("closeBody").style.display = "none"
    }
  return (
    <>
      <div className="seatBooking625" id="closeBody">
        <div className="booking625 ">
          <h5 className="ml-2">
            Select Seat <i className="fa fa-close" onClick={handleClose}></i>
          </h5>
          <hr />
          <strong className="ml-2">ONWARD</strong>
          <div className="wrapperData">
            <div className="rowData_236221">
              <hr />
              <div className="flexSec_236221">Traveller</div>
              <div className="flexSec_236221 text-primary">
                Ahmedabad &rarr; New Delhi
              </div>
              <hr />
            </div>
            <div className="adult625">
              <div className="addyourSet625">Adult</div>
              <div className="addyourSet625 text-danger">-Add Your Seat</div>
            </div>
            <div className="seatSection625">
              <div className="seat625">
                <>
                  <div>
                    <div className="seatSelection col-lg-12">
                      <p className="seatSection">
                        Your first
                        <span className="freeSeats">2</span> seats selected will
                        be Free.
                        <br /> You can add more seats and proceed to check out.
                      </p>
                      <div className="seatsChart col-lg-6">
                        <div className="seatRow">
                          <div className="seatRowNumber">Row 1</div>
                          <div
                            id="1_1"
                            title
                            role="checkbox"
                            value={95}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber seatUnavailable"
                          >
                            1
                          </div>
                          <div
                            id="1_2"
                            role="checkbox"
                            value={45}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            2
                          </div>
                          <div
                            id="1_3"
                            role="checkbox"
                            value={45}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            3
                          </div>
                          <div
                            id="1_4"
                            role="checkbox"
                            value={45}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber seatUnavailable"
                          >
                            4
                          </div>
                          <div
                            id="1_5"
                            role="checkbox"
                            value={45}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            5
                          </div>
                          <div
                            id="1_6"
                            role="checkbox"
                            value={45}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber  "
                          >
                            6
                          </div>
                          <div
                            id="1_7"
                            role="checkbox"
                            value={45}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            7
                          </div>
                          <div
                            id="1_8"
                            role="checkbox"
                            value={45}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            8
                          </div>
                        </div>
                        <div className="seatRow">
                          <div className="seatRowNumber">Row 2</div>
                          <div
                            id="2_1"
                            role="checkbox"
                            value={42}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            1
                          </div>
                          <div
                            id="2_2"
                            role="checkbox"
                            value={42}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber seatUnavailable"
                          >
                            2
                          </div>
                          <div
                            id="2_3"
                            role="checkbox"
                            value={42}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            3
                          </div>
                          <div
                            id="2_4"
                            role="checkbox"
                            value={42}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            4
                          </div>
                          <div
                            id="2_5"
                            role="checkbox"
                            value={42}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            5
                          </div>
                          <div
                            id="2_6"
                            role="checkbox"
                            value={42}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber  "
                          >
                            6
                          </div>
                          <div
                            id="2_7"
                            role="checkbox"
                            value={42}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            7
                          </div>
                          <div
                            id="2_8"
                            role="checkbox"
                            value={42}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber seatUnavailable"
                          >
                            8
                          </div>
                        </div>
                        <div className="seatRow">
                          <div className="seatRowNumber">Row 3</div>
                          <div
                            id="3_1"
                            role="checkbox"
                            value={38}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber seatUnavailable"
                          >
                            1
                          </div>
                          <div
                            id="3_2"
                            role="checkbox"
                            value={38}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            2
                          </div>
                          <div
                            id="3_3"
                            role="checkbox"
                            value={38}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber seatUnavailable"
                          >
                            3
                          </div>
                          <div
                            id="3_4"
                            role="checkbox"
                            value={38}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            4
                          </div>
                          <div
                            id="3_5"
                            role="checkbox"
                            value={38}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber seatUnavailable"
                          >
                            5
                          </div>
                          <div
                            id="3_6"
                            role="checkbox"
                            value={38}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber  "
                          >
                            6
                          </div>
                          <div
                            id="3_7"
                            role="checkbox"
                            value={38}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            7
                          </div>
                          <div
                            id="3_8"
                            role="checkbox"
                            value={38}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            8
                          </div>
                        </div>
                        <div className="seatRow">
                          <div className="seatRowNumber">Row 4</div>
                          <div
                            id="4_1"
                            role="checkbox"
                            value={30}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            1
                          </div>
                          <div
                            id="4_2"
                            role="checkbox"
                            value={30}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            2
                          </div>
                          <div
                            id="4_3"
                            role="checkbox"
                            value={30}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            3
                          </div>
                          <div
                            id="4_4"
                            role="checkbox"
                            value={30}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            4
                          </div>
                          <div
                            id="4_5"
                            role="checkbox"
                            value={30}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            5
                          </div>
                          <div
                            id="4_6"
                            role="checkbox"
                            value={30}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber seatUnavailable "
                          >
                            6
                          </div>
                          <div
                            id="4_7"
                            role="checkbox"
                            value={30}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            7
                          </div>
                          <div
                            id="4_8"
                            role="checkbox"
                            value={30}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            8
                          </div>
                        </div>
                        <div className="seatRow">
                          <div className="seatRowNumber">Row 5</div>
                          <div
                            id="5_1"
                            role="checkbox"
                            value={28}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber seatUnavailable"
                          >
                            1
                          </div>
                          <div
                            id="5_2"
                            role="checkbox"
                            value={28}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            2
                          </div>
                          <div
                            id="5_3"
                            role="checkbox"
                            value={28}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            3
                          </div>
                          <div
                            id="5_4"
                            role="checkbox"
                            value={28}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber seatUnavailable"
                          >
                            4
                          </div>
                          <div
                            id="5_5"
                            role="checkbox"
                            value={28}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            5
                          </div>
                          <div
                            id="5_6"
                            role="checkbox"
                            value={28}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber seatUnavailable "
                          >
                            6
                          </div>
                          <div
                            id="5_7"
                            role="checkbox"
                            value={28}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            7
                          </div>
                          <div
                            id="5_8"
                            role="checkbox"
                            value={28}
                            aria-checked="false"
                            focusable="true"
                            tabIndex={-1}
                            className=" seatNumber "
                          >
                            8
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </div>

              <div className="chairIcon625 ">
                <div className="text-center">
                  <button className="btn btn-success ">Your Seat</button>&nbsp;
                  <button className="btn btn-primary ">Reserved</button>&nbsp;
                  <button className="btn btn-secondary ">Others</button>
                </div>
              </div>
              <div>
                <h5>Other Addon Services</h5>
                <hr />
                <div className="Services623">
                  <div className="suitcase_23622">
                    <button className="btn ">Seat Section</button>
                  </div>
                </div>
              </div>
              <div
                className="amountSec_22622"
                style={{ display: "flex", flexDirection: "row", width: "65%" }}
              >
                <div
                  className="amountHed"
                  style={{ width: "31%", display: "grid" }}
                >
                  <h5>Total Amount for Select Baggage</h5>
                </div>
                <div
                  className="amout_22622"
                  style={{ width: "32%", display: "grid" }}
                >
                  <section style={{ marginTop: "auto" }}>
                    <p>₹ 9132</p>
                  </section>
                </div>
                <div
                  className="btnbtnSec_22622"
                  style={{ width: "12%", display: "grid", marginLeft: "88px" }}
                >
                  <button>Done</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SeatBook;
