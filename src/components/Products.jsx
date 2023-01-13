import React, { useState, useEffect } from "react";
// import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:5000/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {

    return(
     <>
      Loading....
    </>
    
    );
  };
  
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category_id === cat);
    setFilter(updatedList)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>ALL</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct(1)}>Dairy</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct(2)}>Meat</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct(3)}>Fruits</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct(4)}>Vegetables</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct(5)}>Drinks</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct(6)}>Pantry</button>
        </div>
        {filter.map((product) => {
          return (
            // <>
              <div className="col-md-3 mb-4" key={product.id}>
                <div className="card h-100 text-center p-4">
                  <img src={product.image} className="card-img-top" alt={product.name} height="250px" />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.name}</h5>
                    <p className="card-text lead fw-bold">
                      Ksh. {product.price}
                    </p>
                    <a href="#" className="btn btn-outline-dark">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            // </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 color: ">
            <h1 className="display-6 fw-bolder text-center">Available Products</h1>
            <hr />
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;