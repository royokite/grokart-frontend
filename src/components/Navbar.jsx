import React from "react";
import Grokart from '../img/WhatsApp Image 2023-01-06 at 3.57.47 PM (1) (2).jpeg'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container" >
        <img></img>
          <a className="navbar-brand fw-bold fs-4" href="#">
            Grokart
            <a href= ""><img src={Grokart} alt="" /></a>
          </a>
          <button
            className=" navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=" navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id=" navbarSupportedContent ">
            <ul className=" navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className=" nav-item ">
                <a className=" nav-link active " aria-current=" page " href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a href="" className="btn btn-outline-warning">
                <i className="fa fa-sign-in me-1"></i>Sign-in
              </a>
              <a href="" className="btn btn-outline-warning ms-1">
                <i className="fa fa-user-plus me-1"></i>Register
              </a>
              <a href="" className="btn btn-outline-warning ms-1">
                <i className="fa fa-shopping-cart me-1"></i>Cart (0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
