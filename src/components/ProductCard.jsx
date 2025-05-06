import React, { useState, useRef } from "react";
import { useCart } from "react-use-cart";
import { Overlay, Tooltip } from "react-bootstrap";

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const addToCart = () => {
    addItem(product);
    setShow(true);
    setTimeout(() => setShow(false), 2000);
  };

  return (
    <div className="col-md-3 mb-4 product-card">
      <div
        className="card d-flex flex-column text-center p-3 border-0 shadow rounded-4"
        style={{ backgroundColor: "#1f1f1f", height: "100%" }}
      >
        <img
          src={product.image}
          className="card-img-top object-fit-cover rounded"
          alt={product.name}
          height="250"
          style={{ objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title text-white mb-3">{product.name}</h5>

          {/* Spacer pushes the price and button to the bottom */}
          <div className="mt-auto">
            <p
              className="card-text lead fw-semibold mb-3"
              style={{ color: "#f97316" }}
            >
              Ksh. {product.price}
            </p>
            <button
              ref={target}
              className="btn btn-outline-light w-100 fw-bold"
              style={{
                borderColor: "#f97316",
                color: "#f97316",
              }}
              onClick={addToCart}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#f97316";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#f97316";
              }}
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
