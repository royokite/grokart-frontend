import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

function Cart() {
  const navigate = useNavigate()
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) {
    return <h1 className="text-center">Your cart is empty</h1>;
  }

  const handleCheckout = () => {
    navigate("/checkout")
  };
  
  return (
    <section className="py-4 container" style={{backgroundColor: "#1c1e1f"}}>
      <div className="row justify-content-center" style={{backgroundColor: "#1c1e1f"}}>
        <div className="col-12">
          <h5>
            Cart <span className="badge">{totalUniqueItems}</span> - Total Items: <span className="badge">{totalItems}</span>
          </h5>
          <table className="table table-dark table-striped table-hover m-0">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col"></th>
            </tr>
          </thead>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.image} style={{ height: "6rem" }} alt={item.name}/>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>({item.quantity})</td>
                    <td className="text-center">
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove Item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto my-2">
          <h2>Total Price: <span style={{color: "#f97316"}}>Ksh. {cartTotal}</span></h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            Clear Cart
          </button>
          <button className="btn btn-primary m-2" onClick={() => handleCheckout()}>Checkout</button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
