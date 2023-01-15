import React, { useRef } from "react";
import "./Checkout.css";

const Checkout = () => {
  const form = useRef();

  return (
    <div className="checkout-container">
    <div className="checkout-card">
    <h3>Checkout</h3>
    <form>
      <div className="card-row">
        <input type="text" id="firstName" placeholder="Name" />
        <input type="text" id="secondName" placeholder="Surname" />
      </div>
      <div className="card-row">
        <input type="text" id="checkout-email" placeholder="Email" />
        <input type="text" id="checkout-city" placeholder="City" />
      </div>
      <div className="card-address">
        <input type="text" placeholder="Address" id="address" />
      </div>
      <div className="card-row">
        <input type="text" id="card-postal" placeholder="Postal Code" />
        <input type="text" id="card-phone" placeholder="Phone Number" />
      </div>
      <div className="btn-container">
        <button type="button" id="nextBtn">Next</button>
      </div>
    </form>
  </div>
  </div>
  );
};
export default Checkout;
