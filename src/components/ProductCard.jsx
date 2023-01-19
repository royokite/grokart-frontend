import React from "react";
import { useCart } from "react-use-cart";
import { useState } from "react";
//import { Alert } from "react-bootstrap";
import { Overlay, Tooltip } from "react-bootstrap";
import { useRef } from "react";

const ProductCard = ({ product }) => {
  const { addItem, items } = useCart();
  const [showAlert, setShowAlert] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const addToCart = () => {
    addItem(product);
    console.log(items);
  };

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setShow(false);
    }, 2000);
  };

  return (
    <div className="col-md-3 mb-4 position-relative product-card">
      <div
        className="card h-100 text-center p-4 border-0"
        style={{ backgroundColor: "#181a1b" }}
      >
        <img
          src={product.image}
          className="card-img-topz"
          alt={product.name}
          height="250px"
        />
        <div className="card-body">
          <h5 className="card-title mb-0 text-white">{product.name}</h5>
          <p className="card-text lead fw-bold" style={{ color: "#f97316" }}>
            Ksh. {product.price}
          </p>
          <div>
            <button
              ref={target}
              className="btn btn-outline-dark position-absolute bottom-0 start-50 translate-middle-x text-white"
              onClick={() => {
                addToCart();
                handleClick();
                setShow(!show);
              }}
            >
              Add to Cart
            </button>
            <Overlay target={target.current} show={show} placement="right">
              {(props) => (
                <Tooltip
                  className="fade-out"
                  id="overlay-cart"
                  {...props}
                >
                  Item added!
                </Tooltip>
              )}
            </Overlay>
            {/* {showAlert && (
              <Alert variant="success" className="fade-out">
                Item added to cart!
              </Alert>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
