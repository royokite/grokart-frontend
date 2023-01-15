import { BrowserRouter, BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/users/Login';
import SignUp from './components/users/SignUp';
import Checkout from './components/Checkout/Checkout.jsx';
import Cart from './components/cart';
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
          <Navbar/>
          <CartProvider>
            <Home/>
            <Cart/>
          </CartProvider>
          </>
        }/>

        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/checkout" element={<Checkout/>}/>

 
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
