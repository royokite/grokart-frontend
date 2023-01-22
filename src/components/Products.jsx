import React from "react";
import ProductCard from "./ProductCard";
import Loading from "./Loading";

const Products = ({
  allProducts,
  filter,
  loading,
  setFilter,
  filterProduct,
}) => {

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
                className="form-control me-2 w-25 text-dark fw-bold border-0 bg-light rounded-pill shadow-sm"
                id="productName"
                type="search"
                placeholder ="Search Products"
                onChange={filterByName}
              />
              {/* <button
                className="btn btn-outline-dark me-2 rounded-pill shadow-sm text-center"
                onClick={filterByName}
              >
                Search
              </button> */}
            </div>
          </div>
          <div className="buttons d-flex justify-content-center mb-2 mw-100">
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
          <hr className="mt-5"/>
          <div className="flex-wrapper">
          <div className="row justify-content-center product-row g-5 mt-1">
            <div className="row justify-content-center">
              {loading ? <Loading /> : renderProducts}
            </div>
          </div>
          </div>
          <hr className="mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
