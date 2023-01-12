import { BrowserRouter, BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/users/Login';
import SignUp from './components/users/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
          <Navbar/>
          <Home/>
          </>
        }/>

        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>

 
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
