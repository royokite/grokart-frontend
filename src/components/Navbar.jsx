import React from "react";
import { useCart } from "react-use-cart";
import { Form, FormControl, Button } from 'react-bootstrap';

const Navbar = () => {
  const { totalItems } = useCart();

  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = `/search/${searchTerm}`;
  };




  

  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark align-middle"
      style={{ backgroundColor: "#181a1b" }}
    >
      <div className="container-fluid">
        <ul className="navbar-nav  d-flex justify-content-between align-items-center w-100">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <img
                src="./images/gro-kart-website-favicon-color.png"
                style={{ height: "4rem", width: "auto" }}
              ></img>
            </a>
          </li>
          {/* <li className="nav-item w-auto search-bar">
            <Form inline onSubmit={handleSubmit}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={searchTerm}
                onChange={handleChange}
              />
            </Form>
          </li> */}
          <li className="nav-item d-flex flex-row mx-5">
            <div className="dropdown">
              <a
                className="account-cart btn dropdown-toggle rounded-circle me-2"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-user-circle"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/my-account">
                    My Account
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/login">
                    Log out
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="/cart"
              className="account-cart btn position-relative rounded-circle"
            >
              <i className="fa fa-shopping-cart"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                {totalItems}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};



export default Navbar;
