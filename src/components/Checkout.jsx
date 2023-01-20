import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Checkout = () => {
    const { totalItems, items, cartTotal, emptyCart } = useCart();
    const [stkCheck, setStkCheck] = useState();
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handlePayment = () => {
      handleShow();
      const cred = {
        "phoneNumber": user.user.contact,
        "amount": cartTotal
      };

      fetch("https://6183-196-101-71-81.ngrok.io/stkpush", {
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

      fetch("https://6183-196-101-71-81.ngrok.io/stkquery", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(queryParams)
      })
      .then(res => res.json())
      .then(queryMessage => console.log(queryMessage))
      .then(handleClose())
      .then(() => {
        emptyCart();
        navigate("/")
      })
      // .then(() => {
      //   if(query[1].ResultCode === "0") {
      //     alert("Payment received, order processing")
      //     emptyCart();
      //     navigate("/")
      //   } else {
      //     alert("Invalid response, please try again")
      //   }
      // })
    };

    // console.log(query[1].ResultCode)

    return (
        <div className="container w-75">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton className="bg-dark">
              <Modal.Title>Payment Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark">
              A payment prop has been sent to your device, click confirm once the payment is made.
            </Modal.Body>
            <Modal.Footer className="bg-dark">
              <Button variant="primary" onClick={handleClick}>Confirm</Button>
            </Modal.Footer>
          </Modal>
          <div className="py-1 text-center">
            <h2>Checkout Form</h2>
            <p className="lead">Confirm cart details and make payment</p>
          </div>

          <div className="row">
            <div className="col-md-4 order-md-2 mb-4 p-3" style={{backgroundColor: "#4d7e3e"}}>
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span>Your cart</span>
                <span className="badge badge-pill">{totalItems}</span>
              </h4>
              <ul className="list-group mb-3">
                {items.map((item) => {
                  return (
                    <li className="list-group-item d-flex justify-content-between lh-condensed" key={item.id}>
                      <div>
                        <h6 className="my-0">{item.name} ({item.quantity})</h6>
                        <small className="text-muted">{item.description}</small>
                      </div>
                      <span className="text-muted">{item.price}</span>
                    </li>
                  );
                })}
                <hr />
                <li className="list-group-item d-flex justify-content-between text-success fs-3">
                  <span>Total (KES)</span>
                  <strong>{cartTotal}</strong>
                </li>
              </ul>
            </div>

            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Shipping address</h4>
              
              { user ? (
              <div>
                <div className="mb-3">
                    <label htmlFor="name">Full name</label>
                    <p className="fs-4">{user.user.name}</p>
                </div>

                <div className="mb-3">
                  <label htmlFor="username">Username</label>
                    <p className="fs-4">{user.user.username}</p>
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <p className="fs-4">{user.user.email}</p>
                </div>

                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <p className="fs-4">{user.user.address}</p>
                </div>
                <hr className="mb-4" />

                <h4 className="mb-3">M-pesa Payment</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-name">Registered Name</label>
                    <p className="fs-4">{user.user.name}</p>
                    <small className="text-muted">Full name as displayed on account</small>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-number">Phone Number</label>
                    <p className="fs-4">{user.user.contact}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <button 
                      className="btn btn-warning btn-lg btn-block" 
                      type="button"
                      onClick={() => navigate("/")}
                    >
                      Continue Shopping
                    </button>
                  </div>
                  <div className="col-md-6 mb-3">
                    <button 
                      className="btn btn-warning btn-lg btn-block" 
                      type="button"
                      onClick={() => handlePayment()} 
                    >
                      Make Payment
                    </button> 
                  </div>
                </div>
                <hr className="mb-4" />
              </div> ) : (

              <form className="needs-validation">
                <div className="mb-3">
                    <label htmlFor="name">Full name</label>
                    <input type="text" className="form-control" id="name" placeholder="John Doe" />
                </div>

                <div className="mb-3">
                  <label htmlFor="username">Username</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input type="text" className="form-control" id="username" placeholder="Username" required />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                </div>

                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Kwenu St" required />
                </div>
                <hr className="mb-4" />

                <h4 className="mb-3">M-pesa Payment</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-name">Registered Name</label>
                    <input type="text" className="form-control" id="cc-name" placeholder="" required />
                    <small className="text-muted">Full name as displayed on account</small>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-number">Phone Number</label>
                    <input type="text" className="form-control" id="cc-number" placeholder="" required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <button 
                      className="btn btn-warning btn-lg btn-block" 
                      type="button"
                      onClick={() => navigate("/")}
                    >
                      Continue Shopping
                    </button>
                  </div>
                  <div className="col-md-6 mb-3">
                    <button 
                      className="btn btn-warning btn-lg btn-block" 
                      type="button"
                      onClick={() => handlePayment()} 
                    >
                      Make Payment
                    </button> 
                  </div>
                </div>
                <hr className="mb-4" />
              </form> )
              } 

            </div>
          </div>

        </div>     


    );
};

export default Checkout;
