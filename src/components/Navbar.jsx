import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light align-middle">
      <div className="container-fluid">
        <ul className="navbar-nav  d-flex justify-content-between align-items-center w-100">
          <li className="nav-item">
            <a className="nav-link" href="/"><img src="./images/gro-kart-website-favicon-color.png" style={{height: "4rem", width: "auto"}}></img></a>
          </li>
          <li className="nav-item w-auto">
            <input type="text"/>
          </li>
          <li className="nav-item d-flex flex-row mx-5">
            <div className="dropdown">
              <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                <i className="fa fa-user-circle"></i>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Orders</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/login">Log out</a></li>
              </ul>
            </div>
            <a className="nav-link" href="/cart"><i className="fa fa-shopping-cart"></i>(0)</a>
          </li>          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
