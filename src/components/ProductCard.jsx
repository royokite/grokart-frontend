import React from "react";
import { useCart } from "react-use-cart";
import { useState } from "react";

const ProductCard = ({ product }) => {
    const { addItem, items } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const addToCart = () =>{
        addItem(product);
        console.log(items)
    };

      
        const handleClick = () => {
          setIsAdded(true);
          alert('Added to cart!');
        };

    return (
            <div className="col-md-3 mb-4 position-relative">
                <div className="card h-100 text-center p-4 border-0" style={{backgroundColor: "#181a1b"}}>
                    <img src={product.image} className="card-img-top" alt={product.name} height="250px"/>
                    <div className="card-body">
                        <h5 className="card-title mb-0 text-white">{product.name}</h5>
                        <p className="card-text lead fw-bold" style={{color: "#f97316"}}>
                            Ksh. {product.price}
                        </p>
                        <button className="btn btn-outline-dark position-absolute bottom-0 start-50 translate-middle-x text-white" onClick={() => {addToCart();handleClick();}}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
    );
};
export default ProductCard;