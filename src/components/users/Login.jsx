import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

   const handleLogin = () => {
    fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        navigate('/home')
      })
      .catch((err) => console.log(err));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

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
          src="./images/gro-kart-logo.png"
          className="card-img mb-5 w-50 position-relative start-50 translate-middle top-0"
          alt="banner"
          height={100}
          width={50}
          />
      <label >
        <input className="form-control mb-5 form-control-lg mx-auto d-block position-absolute start-50 mt-5 translate-middle"
          type="text"
          placeholder='Username'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          id = "form-control"
        />
      </label>
      <br />
      <label>
        <input className="form-control mb-5 pl-3 form-control-lg mt-5
        "
          type="password"
          placeholder='Password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          id = "form-control"
        />
      </label>
      <br />
      <button className="btn position-absolute start-50 translate-middle mt-5"
      type="submit"
      id = "loginbtn"
      >Sign In</button>
      
      
    </form>
    <a href="/signup" className="text-warning position-absolute bottom-0 start-50 translate-middle mt-5 mb-4">Don't have an account? Sign up here!</a>
    </section>


  );
}

export default Login;