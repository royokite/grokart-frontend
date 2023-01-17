import React from "react";
import ProductCard from "./ProductCard";
import { CartProvider, useCart } from "react-use-cart";
import Cart from "./cart";

const Products = ({
  allProducts,
  filter,
  loading,
  setFilter,
  filterProduct,
}) => {
  const Loading = () => {
    return <>Loading....</>;
  };
  const filterByName = () => {
    const name = document.getElementById("productName").value;
    const filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilter(filteredProducts);
  };

  const renderProducts = filter.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const filterByProduct = (category) => {
    let filteredProducts;
    const name = document.getElementById("productName").value;
    if (category) {
      filteredProducts = allProducts.filter(
        (product) =>
          product.category_id === category &&
          product.name.toLowerCase().includes(name.toLowerCase())
      );
    } else {
      filteredProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    setFilter(filteredProducts);
  };

  return (
    <div className="container-fluid">
      <div className="container my-5 py-5 text-white">
        <div className="row">
          <div className="col-12 mb-5 color: ">
            <h1 className="display-6 fw-bolder text-center">
              Available Products
            </h1>
            <hr />
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2 w-25 text-center text-dark fw-bold border-0 bg-light rounded-pill shadow-sm text-center"
                id="productName"
                type="text"
                id="productName"
                placeholder="Enter product name"
              />
              <button
                className="btn btn-outline-dark me-2 rounded-pill shadow-sm text-center"
                onClick={filterByName}
              >
                Search
              </button>
            </div>
          </div>
          <div className="buttons d-flex justify-content-center mb-2">
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => setFilter(allProducts)}
            >
              ALL
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct(1)}
            >
              Dairy
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct(2)}
            >
              Meat
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct(3)}
            >
              Fruits
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct(4)}
            >
              Vegetables
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct(5)}
            >
              Drinks
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct(6)}
            >
              Pantry
            </button>
          </div>
          <hr />
          <div className="row justify-content-center product-row">
            <div className="row justify-content-center">
              {loading ? <Loading /> : renderProducts}
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Products;
