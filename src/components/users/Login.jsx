import React, { useState } from 'react';
import { useLogin } from "../../hooks/useLogin"
import Loading from "../Loading"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <section className="signin-container">
      <img
          src="./images/access-bg.png"
          className="imf-fluid card-img cover-fit"
          alt="background"
          style={{height: "100vh"}}
          

        />
        

    <form onSubmit={handleSubmit} className="form-group position-absolute top-50 start-50 translate-middle">
      <img
          src="./images/logo-no-bg.png"
          className="card-img w-50 position-relative start-50 translate-middle top-0"
          alt="banner"
          height={120}
    
          />
      <div className="mb-3">
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required />
        </div>

        <div className="mb-3">
          <input 
            type="password" 
            className="form-control" 
            id="paswword" 
            placeholder="password" 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required />
        </div>
      {error && <div className="error">{error}</div>}      
      {
        isLoading ? 
        <Loading/> : 
        <button 
          className="btn mt-2"
          type="submit"
          id = "loginbtn"
        >Sign In
        </button>
      }
      <br />
      <br />
      <a href="/signup" className="text-warning">Don't have an account? <strong>Sign up here!</strong></a>
    </form>    
    </section>


  );
}

export default Login;