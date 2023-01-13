import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light align-middle">
      <div className="container-fluid">
        <ul className="navbar-nav  d-flex justify-content-between align-items-center w-100">
          <li className="nav-item">
            <a className="nav-link" href="/"><img src="./images/gro-kart-website-favicon-color.png" style={{height: "4rem", width: "auto"}}></img></a>
          </li>
          <li className="nav-item w-auto search-bar">
          <div class="row no-gutters w-100">
            <div class="col px-0">
                  <input 
                    className="form-control border-right-0 rounded-0" 
                    type="search"
                    placeholder="Search..."
                  />
            </div>
            <div class="col-auto px-0">
                  <button class="btn btn-outline-secondary border-left-0 rounded-0 rounded-right" type="button">
                    <i class="fa fa-search"></i>
                  </button>
            </div>
          </div>
          </li>
          <li className="nav-item d-flex flex-row mx-5">
            <div className="dropdown">
              <a className="account-cart btn dropdown-toggle rounded-circle me-2" data-bs-toggle="dropdown">
                <i className="fa fa-user-circle"></i>
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Orders</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/login">Log out</a></li>
              </ul>
            </div>
            <a href="/cart" className="account-cart btn position-relative rounded-circle">
              <i className="fa fa-shopping-cart"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">0</span>
            </a>
          </li>          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
