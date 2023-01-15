import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/users/Login';
import SignUp from './components/users/SignUp';
import Checkout from './components/Checkout/Checkout.jsx';
import Cart from './components/cart';
import Products from './components/Products';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [filter, setFilter] = useState(allProducts);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;
  
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:5000/products");
      const json = await response.json();
      if (componentMounted) {
        setAllProducts(json);
        setFilter(json);
        setLoading(false);
        // console.log(json);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = allProducts.filter((x) => x.category_id === cat);
    setFilter(updatedList)
    console.log(updatedList)
  }

  

  return (
    <BrowserRouter>
    <CartProvider>
        <Navbar/>
        <Routes>
                <Route exact path='/' element={
                <>
                    <Home 
                        allProducts={allProducts} setAllProducts={setAllProducts}
                        filter={filter} setFilter={setFilter}
                        loading={loading} setLoading={setLoading}
                        filterProduct={filterProduct}
                    />
                    <Products 
                        allProducts={allProducts} setAllProducts={setAllProducts}
                        filter={filter} setFilter={setFilter}
                        loading={loading} setLoading={setLoading}
                        filterProduct={filterProduct}
                    />
                </>
                
                } 
                />
            
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/checkout" element={<Checkout/>}/>

    
        </Routes>
    </CartProvider>
    </BrowserRouter>
   
  );
}

export default App;
