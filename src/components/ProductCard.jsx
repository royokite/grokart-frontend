import React, { useState, useRef } from "react";
import { useCart } from "react-use-cart";
import { Overlay, Tooltip } from "react-bootstrap";

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const addToCart = () => {
    addItem(product);
  };

  const handleClick = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  return (
    <div className="col-md-3 mb-4">
      <div
        className="card h-100 text-center p-3 border-0 shadow-lg rounded-4"
        style={{ backgroundColor: "#1f1f1f" }}
      >
        <img
          src={product.image}
          className="card-img-top object-fit-cover rounded-3"
          alt={product.name}
          style={{ height: "250px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title mb-2 text-white">{product.name}</h5>
          <p
            className="card-text lead fw-semibold"
            style={{ color: "#f97316" }}
          >
            Ksh. {product.price}
          </p>
          <div className="position-relative">
            <button
              ref={target}
              className="btn btn-outline-light w-100 mt-3 fw-bold transition"
              onClick={() => {
                addToCart();
                handleClick();
              }}
              style={{
                borderColor: "#f97316",
                color: "#f97316",
              }}
              onMouseEnter={(e) => (
                (e.target.style.backgroundColor = "#f97316"),
                (e.target.style.color = "#fff")
              )}
              onMouseLeave={(e) => (
                (e.target.style.backgroundColor = "transparent"),
                (e.target.style.color = "#f97316")
              )}
            >
              Add to Cart
            </button>

            <Overlay target={target.current} show={show} placement="top">
              {(props) => (
                <Tooltip id="overlay-cart" {...props} className="fade show">
                  ✅ Item added!
                </Tooltip>
              )}
            </Overlay>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
