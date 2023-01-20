import React, { useState } from "react";
import { useSignup } from "../../hooks/useSignup"
import Loading from "../Loading";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(username, email, password, passwordConfirmation)
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
          src="./images/WhatsApp_Image_2023-01-06_at_3.57.54_PM__1_-removebg-preview.png"
          className="card-img mb-2 w-50 position-relative start-50 translate-middle top-0"
          alt="banner"
          height={120}
          
        />
        <label>
          <input
            className="form-control  form-control-lg mx-auto d-block position-absolute start-50 mt-5 translate-middle"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
            id = "form-control1"
          />
        </label>
        <br />
        <label>
          <input
            className="form-control mb-2 pl-3 form-control-lg mt-5"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            id = "form-control1"
          />
        </label>
        <br />
        <label>
          <input
            className="form-control mb-2 form-control-lg mt-3"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            id="form-control1"
          />
        </label>
        <br />
        <label>
          <input
            className="form-control mb-2 pl-3 mt-3 form-control-lg"
            placeholder="Confirm password"
            type="password"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            required
            id="form-control1"
          />
        </label>
        <br />
        {
        isLoading ? 
        <Loading/> : 
        <button
          className="btn position-absolute start-50 translate-middle mt-5"
          type="submit"
          id = "signupbtn"
          >
          Sign Up
        </button>
        }
        {error && <div className="error">{error}</div>}
      </form>
      <a
        href="/login"
        className="text-warning position-absolute bottom-0 start-50 translate-middle mt-5 mb-5" id="login-button"
      >
        Already have an account? <strong>Sign in here!</strong>
      </a>
    </section>
  );
}

export default SignUp;