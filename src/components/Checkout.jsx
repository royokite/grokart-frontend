import React from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { totalItems, items, cartTotal } = useCart()
    const navigate = useNavigate()

    const handlePayment = () => {
      console.log("Mpesa STK goes here")
    }

    return (
        <div class="container w-75">
          <div class="py-5 text-center">
            <h2>Checkout Form</h2>
            <p class="lead">Confirm cart details and make payment</p>
          </div>

          <div class="row">
            <div class="col-md-4 order-md-2 mb-4">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Your cart</span>
                <span class="badge badge-secondary badge-pill">{totalItems}</span>
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
              </ul>

            </div>
            <div class="col-md-8 order-md-1">
              <h4 class="mb-3">Shipping address</h4>
              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="username">Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">@</span>
                    </div>
                    <input type="text" class="form-control" id="username" placeholder="Username" required />
                    <div class="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div class="mb-3">
                  <label for="address">Address</label>
                  <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <hr class="mb-4" />

                <h4 class="mb-3">M-pesa Payment</h4>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="cc-name">Registered Name</label>
                    <input type="text" class="form-control" id="cc-name" placeholder="" required />
                    <small class="text-muted">Full name as displayed on account</small>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="cc-number">Phone Number</label>
                    <input type="text" class="form-control" id="cc-number" placeholder="" required />
                    <div class="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <button 
                      class="btn btn-primary btn-lg btn-block" 
                      type="button"
                      onClick={() => navigate("/")}
                    >
                      Continue Shopping
                    </button>
                  </div>
                  <div class="col-md-6 mb-3">
                    <button 
                      class="btn btn-primary btn-lg btn-block" 
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
