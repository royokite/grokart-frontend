import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from "react-use-cart";

import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/users/Login';
import SignUp from './components/users/SignUp';
import Checkout from './components/Checkout.jsx';
import Cart from './components/Cart';
import Products from './components/Products';
import MyAccount from './components/MyAccount';
import Footer from './components/Footer';
import Admin from './components/Admin';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [filter, setFilter] = useState(allProducts);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://grokart.onrender.com/products");
      const json = await response.json();
       
      setAllProducts(json);
      setFilter(json);
      setLoading(false);
    };

    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = allProducts.filter((x) => x.category_id === cat);
    setFilter(updatedList)
  }


  return (
    <BrowserRouter>
      <CartProvider>
          <Routes>
                <Route exact path='/' element={
                <>
                   <Navbar/>
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
                    <Footer/>
                    
                </>
                
                } 
                />              
                <Route path="/cart" element={<><Navbar/><Cart/></>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/checkout" element={<><Navbar/><Checkout/></>}/>
                <Route path="/my-account" element={<><Navbar/><MyAccount/></>}/>      
                <Route path="/admin" element={<Admin allProducts={allProducts}/>}/>
          </Routes>
      </CartProvider>
    </BrowserRouter>
   
  );
}

export default App;
