import React from "react";
import ProductCard from "./ProductCard";
import { CartProvider, useCart } from "react-use-cart";
import Cart from "./cart";

const Products = ({ allProducts, filter, loading, setFilter, filterProduct }) => {

 
  const Loading = () => {
    return(
     <>
      Loading....
    </>    
    );
  };  

  const renderProducts= filter.map((product) => 
    <ProductCard key={product.id} product={product}/>)
  
  return (
    // <CartProvider>
      <div>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12 mb-5 color: ">
              <h1 className="display-6 fw-bolder text-center">Available Products</h1>
              <hr />
            </div>
            <div className="buttons d-flex justify-content-center mb-5">
              <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(allProducts)}>ALL</button>
              <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct(1)}>Dairy</button>
              <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct(2)}>Meat</button>
              <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct(3)}>Fruits</button>
              <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct(4)}>Vegetables</button>
              <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct(5)}>Drinks</button>
              <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct(6)}>Pantry</button>
          </div>
          <hr />
            <div className="row justify-content-center">
              {loading ? <Loading /> : renderProducts}
            </div>
            <hr />
          </div>
        </div>
      </div>
    // </CartProvider>
  );
};

export default Products;