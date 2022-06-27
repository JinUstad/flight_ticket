import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a
          className="navbar-brand text-white" href="#" >
          Touroxy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item  active">
              <a className="nav-link text-center text-white" href="#">
                
                <i className="fa fa-plane"></i> <p>Flight</p>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-center text-white" href="#">
                <i className="fa fa-hotel"></i>
                <p>Hotel</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-center text-white" href="#">
                <i className="fa fa-bus"></i>
                <p>Holidy</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-center text-white" href="#">
                <i className="fa fa-passport"></i>
                <p>Visa</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-center text-white" href="#">
                <i className="fa fa-passport"></i>
                <p>Visa</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar