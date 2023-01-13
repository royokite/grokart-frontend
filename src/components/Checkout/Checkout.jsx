import React, { useRef } from "react";
import "./Checkout.css";

const Checkout = () => {
  const form = useRef();

  return (
    <div className="checkout-form" id="checkout">
      {/* left side copy and paste from work section */}
      <div className="w-left"></div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form}>
          <h1>Checkout</h1>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <input
            type="text"
            name="user_email"
            className="user"
            placeholder="Address"
          />
          <input
            type="text"
            name="user_email"
            className="user"
            placeholder="City"
          />
          <input type="submit" value="Send" className="button" />
          <div></div>
          <span>{"Thank you for Contacting me"}</span>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
