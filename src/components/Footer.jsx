import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="footer">
              <div className="footer_box">
                <div className="footer_box_social">

                  <img
                    src="./images/logo-no-bg.png"
                    className="card-img "
                    alt="banner"
                    height={120}
                  />
                </div>
                <div className="footer_box_discover">
                  <h5>PRODUCTS</h5>

                  <h6>Dairy</h6>

                  <h6>Meat</h6>

                  <h6>Fruits</h6>

                  <h6>Vegies</h6>
                </div>
                <div className="footer_box_help">
                  <h5>USEFUL LINKS</h5>

                  <h6>Pricing</h6>

                  <h6>Settings</h6>

                  <h6>Orders</h6>

                  <h6>Help</h6>
                </div>
                <div className="footer_box_contact">
                  <h5>CONTACT</h5>
                  <p>
                    Nairobi,Kenya info@grokart.com +2540123456578 +254012344566
                  </p>
                </div>
              </div>
            </div>

            <p className="lead text-center">
              Grokart All Rights Reserved &copy;{new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
