import React, { useRef } from "react";
import "./Checkout.css";

const Checkout = () => {
  const form = useRef();

  return (
    <div className="checkout-container">
    <div className="checkout-card">
    <h3 className="checkout-heading ">Checkout</h3>
    <form>
      <div className="card-row mb-1.5">
        <input type="text" id="firstName" placeholder="Name" />
        <input type="text" id="secondName" placeholder="Surname" />
      </div>
      <br/>
      <div className="card-row mb-1.5">
        <input type="text" id="checkout-email" placeholder="Email" />
        <input type="text" id="checkout-city" placeholder="City" />
      </div>
      <br/>
      <div className="card-address mb-1.5">
        <input type="text" placeholder="Address" id="address" />
      </div>
      <br/>
      <div className="card-row mb-1.5">
        <input type="text" id="card-postal" placeholder="Postal Code" />
        <input type="text" id="card-phone" placeholder="Phone Number" />
      </div>
      <div className="btn-container" >
        <button type= "submit" className="btn btn-primary btn-lg btn-block checkout-btn "
         id="nextBtn" >Next</button>
      </div>
    </form>
  </div>
  </div>
  );
};
export default Checkout;
