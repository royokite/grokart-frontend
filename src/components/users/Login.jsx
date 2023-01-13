import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // fetch('/api/sign-in', {
    //   method: 'POST',
    //   body: JSON.stringify({ username, password }),
    //   headers: { 'Content-Type': 'application/json' },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.success) {
    //       // Sign in succeeded, navigate to the homepage
    //       window.location.href = '/';
    //     } else {
    //       // Sign in failed, show an error message
    //       alert('Incorrect username or password.');
    //     }
    //   });
  };

  return (
    <section className="signin-container">
      <img
          src="./images/access-bg.png"
          className="card-img"
          alt="background"
          style={{height: "100vh"}}

        />
        

    <form onSubmit={handleSubmit} className="form-group
    position-absolute top-50 start-50 translate-middle"
    >
      <img
          src="./images/gro-kart-logo.png"
          className="card-img mb-5 w-50 position-relative start-50 translate-middle top-0"
          alt="banner"
          height={100}
          width={50}
          />
      <label >
        <input className="form-control mb-5 text-warning form-control-lg mx-auto d-block position-absolute start-50 mt-5 translate-middle"
          type="text"
          placeholder='Username'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        <input className="form-control mb-5 text-warning pl-3 form-control-lg mt-5
        "
          type="password"
          placeholder='Password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button className="btn btn-primary btn-lg position-absolute start-50 translate-middle mt-5 text-warning"
      type="submit">Sign In</button>
      
      
    </form>
    <a href="/signup" className="text-warning position-absolute start-50 translate-middle mt-5">Don't have an account? Sign up here!</a>
    </section>


  );
}

export default Login;