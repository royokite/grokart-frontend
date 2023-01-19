import React from "react";
import { useCart } from "react-use-cart";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { totalItems } = useCart();
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const navigate = useNavigate()

  const handleClick = () => {
    logout()
  }  

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
                alt="App logo"
              ></img>
            </a>
          </li>
          <li className="nav-item d-flex flex-row mx-5">
            {user && (
              <div className="m-2 me-4 fst-italic">
                <span>Hello, </span>
                <strong style={{color: "#f97316"}}><span>{user.user.username}</span></strong>
              </div>
            )}
            <div className="dropdown">
              <span
                className="account-cart btn dropdown-toggle rounded-circle me-2"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-user-circle"></i>
              </span>
              <ul className="dropdown-menu">
                { user && 
                  <li>
                    <a className="dropdown-item" href="/my-account">
                      My Account
                    </a>
                  </li>
                }
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  { user ? 
                    <button className="btn dropdown-item" onClick={handleClick}>Log out</button> : 
                    <button className="btn dropdown-item" onClick={() => navigate("/login")}>Log In</button>
                  }
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
