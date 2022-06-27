import React from "react";
import './ViewAll.css'
function ViewAll() {
  return (
    <>
      <div className="container ">
        <div className="row">
          {Array(12)
            .fill()
            .map((_, i) => (
              <div className="col-md-3 mt-5">
     <div className="card" style={{width: '17rem'}}>
  <img className="card-img-top" src="https://b2c-admin-storage.s3-ap-southeast-1.amazonaws.com/CMS/Prod/308x190.pol.jpg" alt="Card image cap" />
  <div className="card-body text-center">
    <p className="card-text">Ready to take off with Indigo?</p>
    <hr />
    <p><i className="fa fa-clock"></i> Expires 1 month 2 week</p>
    <button className="btn btn-light w-100">Know More</button>
  </div>
</div>

              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default ViewAll;
