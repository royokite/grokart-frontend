import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate()

  const handleRegister = () => {
    fetch("http://127.0.0.1:3000/register", {
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
        navigate('/login')
        // if(data.success){
        //   localStorage.setItem("token", data.jwt);
        //   navigate('/login')
        // }else{
        //   alert(data.errors);
        // }
      })
      .catch((err) => console.log(err));
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      setError("Passwords do not match");
      return;
    } else{
      handleRegister()
    }
  }

  
  return (
    <section className="signin-container">
      <img
        src="./images/access-bg.png"
        className="card-img"
        alt="background"
        style={{ height: "100vh" }}
      />
      <form
        onSubmit={handleSubmit}
        className="form-group
    position-absolute top-50 start-50 translate-middle"
      >
        <img
          src="./images/gro-kart-logo.png"
          className="card-img mb-5 w-50 position-relative start-50 translate-middle top-0"
          alt="banner"
          height={100}
          width={50}
        />
        <label>
          <input
            className="form-control mb-5 form-control-lg mx-auto d-block position-absolute start-50 mt-5 translate-middle"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            id = "form-control"
          />
        </label>
        <br />
        <label>
          <input
            className="form-control mb-5 form-control-lg mt-5
        "
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            id = "form-control"
          />
        </label>
        <br />
        <label>
          <input
            className="form-control mb-5 pl-3 form-control-lg
        "
            placeholder="Confirm password"
            type="password"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            id = "form-control"
          />
        </label>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button
          className="btn position-absolute start-50 translate-middle mt-5"
          type="submit"
          id = "loginbtn"
          >
          Sign Up
        </button>
      </form>
      <a
        href="/login"
        className="text-warning position-absolute bottom-0 start-50 translate-middle mt-5 mb-4" id="login-button"
      >
        Already have an account? Sign in here!
      </a>
    </section>
  );
}

export default SignUp;