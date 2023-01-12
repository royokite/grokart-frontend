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
          src="./images/james9876_beautiful_login_page_for_an_online_grocery_website_wh_c635d628-3c57-436e-82f6-6c844b467da4 (1) (1).png"
          className="card-img"
          alt="background"
          height={1000}

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
        <input className="form-control mb-5 text-warning ml-50
        "
          type="text"
          placeholder='Username'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        <input className="form-control mb-5 text-warning position-relative float-right
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
    </section>


  );
}

export default Login;