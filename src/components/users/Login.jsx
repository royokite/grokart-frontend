import React, { useState } from 'react';
import { useLogin } from "../../hooks/useLogin"

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
          className="card-img"
          alt="background"
          style={{height: "100vh"}}

        />
        

    <form onSubmit={handleSubmit} className="form-group position-absolute top-50 start-50 translate-middle">
      <img
          src="./images/WhatsApp_Image_2023-01-06_at_3.57.54_PM__1_-removebg.png"
          className="card-img mb-4 w-50 position-relative start-50 translate-middle top-0"
          alt="banner"
          height={120}
    
          />
      <label >
        <input 
          className="form-control mb-5 form-control-lg mx-auto d-block position-absolute start-50 mt-5 translate-middle"
          type="email"
          placeholder='Email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        <input 
          className="form-control mb-5 pl-3 form-control-lg mt-5"
          type="password"
          placeholder='Password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button className="btn position-absolute start-50 translate-middle mt-5"
        type="submit"
        id = "loginbtn"
        disabled={isLoading}
      >Sign In</button>
      {error && <div className="error">{error}</div>}      
    </form>    
    <a href="/signup" className="text-warning position-absolute bottom-0 start-50 translate-middle mt-5 mb-4">Don't have an account? <strong>Sign up here!</strong></a>
    </section>


  );
}

export default Login;