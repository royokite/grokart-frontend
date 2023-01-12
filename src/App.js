import { BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import Login from './components/users/Login';
// import SignUp from './components/users/SignUp';

function App() {
  return (
    <div> 
      
      <Navbar/>
      <Home/>
      
</div>
   
  );
}

export default App;
