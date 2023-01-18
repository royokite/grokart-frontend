import React from "react";
import { useCart } from "react-use-cart";
import { useState } from "react";
import { Alert } from "react-bootstrap";

const ProductCard = ({ product }) => {
  const { addItem, items } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const addToCart = () => {
    addItem(product);
    console.log(items);
  };

  const handleClick = () => {
    setIsAdded(true);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
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
          className="card-img-top"
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
              className="btn btn-outline-dark position-absolute bottom-0 start-50 translate-middle-x text-white"
              onClick={() => {
                addToCart();
                handleClick();
              }}
            >
              Add to Cart
            </button>
            {showAlert && (
              <Alert variant="success" className="fade-out">
                Item added to cart!
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
