import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { totalItems, items, cartTotal } = useCart()
    const [stkCheck, setStkCheck] = useState()
    const navigate = useNavigate()

    const handlePayment = () => {
      const cred = {
        "phoneNumber": "254718246082",
        "amount": "1"
      };

      fetch("https://4420-105-161-239-30.ngrok.io/stkpush", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cred)
      })
      .then(res => res.json())
      .then(data => setStkCheck(data))
    }

    const handleClick = () => {
      const queryParams = {
        "checkoutRequestID": `${stkCheck[1].CheckoutRequestID}`
      }

      fetch("https://4420-105-161-239-30.ngrok.io/stkquery", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(queryParams)
      })
      .then(res => res.json())
      .then(queryMessage => console.log(queryMessage))
    };

    return (
        <div class="container w-75">
          <div class="py-5 text-center">
            <h2>Checkout Form</h2>
            <p class="lead">Confirm cart details and make payment</p>
          </div>

          <div class="row">
            <div class="col-md-4 order-md-2 mb-4 p-3" style={{backgroundColor: "#4d7e3e"}}>
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span>Your cart</span>
                <span class="badge badge-pill">{totalItems}</span>
              </h4>
              <ul class="list-group mb-3">
                {items.map((item, index) => {
                  return (
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 class="my-0">{item.name} ({item.quantity})</h6>
                        <small class="text-muted">{item.description}</small>
                      </div>
                      <span class="text-muted">{item.price}</span>
                    </li>
                  );
                })}
                <hr />
                <li class="list-group-item d-flex justify-content-between text-success fs-3">
                  <span>Total (KES)</span>
                  <strong>{cartTotal}</strong>
                </li>
                <li class="list-group-item text-center">
                  <button 
                    type="button" 
                    className="btn btn-warning btn-lg btn-block"
                    onClick={handleClick}
                  >
                    Confirm Payment
                  </button>
                </li>
              </ul>
            </div>

            <div class="col-md-8 order-md-1">
              <h4 class="mb-3">Shipping address</h4>
              
              {/* <div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <p className="fs-4">John</p>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label htmlFor="lastName">Last name</label>
                    <p className="fs-4">Doe</p>
                  </div>
                </div>

                <div class="mb-3">
                  <label htmlFor="username">Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text me-3">@</span>
                    </div>
                    <p className="fs-4">JDoe</p>
                  </div>
                </div>

                <div class="mb-3">
                  <label htmlFor="email">Email</label>
                  <p className="fs-4">john.doe@gmail.com</p>
                </div>

                <div class="mb-3">
                  <label htmlFor="address">Address</label>
                  <p className="fs-4">1234 my abode</p>
                </div>
                <hr class="mb-4" />

                <h4 class="mb-3">M-pesa Payment</h4>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label htmlFor="cc-name">Registered Name</label>
                    <p className="fs-4">John Doe</p>
                    <small class="text-muted">Full name as displayed on account</small>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label htmlFor="cc-number">Phone Number</label>
                    <p className="fs-4">254701234567</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <button 
                      class="btn btn-warning btn-lg btn-block" 
                      type="button"
                      onClick={() => navigate("/")}
                    >
                      Continue Shopping
                    </button>
                  </div>
                  <div class="col-md-6 mb-3">
                    <button 
                      className="btn btn-warning btn-lg btn-block" 
                      type="button"
                      onClick={() => handlePayment()} 
                    >
                      Make Payment
                    </button> 
                  </div>
                </div>
                <hr class="mb-4" />
              </div> */}

              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                  </div>
                </div>

                <div class="mb-3">
                  <label htmlFor="username">Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">@</span>
                    </div>
                    <input type="text" class="form-control" id="username" placeholder="Username" required />
                  </div>
                </div>

                <div class="mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                </div>

                <div class="mb-3">
                  <label htmlFor="address">Address</label>
                  <input type="text" class="form-control" id="address" placeholder="1234 Kwenu St" required />
                </div>
                <hr class="mb-4" />

                <h4 class="mb-3">M-pesa Payment</h4>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label htmlFor="cc-name">Registered Name</label>
                    <input type="text" class="form-control" id="cc-name" placeholder="" required />
                    <small class="text-muted">Full name as displayed on account</small>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label htmlFor="cc-number">Phone Number</label>
                    <input type="text" class="form-control" id="cc-number" placeholder="" required />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <button 
                      class="btn btn-warning btn-lg btn-block" 
                      type="button"
                      onClick={() => navigate("/")}
                    >
                      Continue Shopping
                    </button>
                  </div>
                  <div class="col-md-6 mb-3">
                    <button 
                      className="btn btn-warning btn-lg btn-block" 
                      type="button"
                      onClick={() => handlePayment()} 
                    >
                      Make Payment
                    </button> 
                  </div>
                </div>
                <hr class="mb-4" />
              </form>

            </div>
          </div>

        </div>     


    );
};

export default Checkout;
