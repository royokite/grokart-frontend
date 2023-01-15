import React from "react";
import { useCart } from "react-use-cart";

const ProductCard = ({ product }) => {
    const { addItem, items } = useCart();

    const addToCart = () =>{
        addItem(product);
        console.log(items   )
    }

    return (
            <div className="col-md-3 mb-4 position-relative">
                <div className="card h-100 text-center p-4 border-0">
                    <img src={product.image} className="card-img-top" alt={product.name} height="250px"/>
                    <div className="card-body">
                        <h5 className="card-title mb-0">{product.name}</h5>
                        <p className="card-text lead fw-bold" style={{color: "#f97316"}}>
                            Ksh. {product.price}
                        </p>
                        <a className="btn btn-outline-dark position-absolute bottom-0 start-50 translate-middle-x" onClick={() => addToCart()}>
                            Add to Cart
                        </a>
                    </div>
                </div>
            </div>
    );
};

export default ProductCard;