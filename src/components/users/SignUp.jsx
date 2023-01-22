import React, { useState } from "react";
import { useSignup } from "../../hooks/useSignup"
import Loading from "../Loading";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(username, email, contact, password, passwordConfirmation)
  }
  
  return (
    <section className="signin-container">
      <img
        src="./images/access-bg.png"
        className="card-img cover-fit"
        alt="background"
        style={{ height: "100vh" }}
      />
      <form
        onSubmit={handleSubmit}
        className="form-group position-absolute top-50 start-50 translate-middle"
      >
        <img
          src="./images/logo-no-bg.png"
          className="card-img"
          alt="banner"
          height={120}          
        />
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control" 
            id="username" 
            placeholder="username" 
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required />
        </div>

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
            type="number" 
            className="form-control" 
            id="contact" 
            placeholder="phone number" 
            maxLength="12"
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            required />
        <small className="text-warning">254XXXXXXXXX</small>
        </div>

        <div className="mb-3">
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            placeholder="password" 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required />
        <small className="text-warning">6 in length, 1 upper and 1 special character</small>
        </div>

        <div className="mb-3">
          <input 
            type="password" 
            className="form-control" 
            id="confirm-password" 
            placeholder="confirm password" 
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
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
          >
          Sign Up
        </button>
        }
        <br />
        <br />
        <a
          href="/login"
          className="text-warning" id="login-button"
        >
        Already have an account? <strong>Sign in here!</strong>
      </a>
      </form>
    </section>
  );
}

export default SignUp;