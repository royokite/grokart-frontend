import React, { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import Loading from "../Loading";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, email, contact, password, passwordConfirmation);
  };

  return (
    <section className="signin-container position-relative">
      <img
        src="./images/access-bg.png"
        alt="Signup background"
        className="img-fluid w-100"
        style={{ height: "100vh", objectFit: "cover" }}
      />

      <form
        onSubmit={handleSubmit}
        className="form-group bg-dark p-4 rounded position-absolute top-50 start-50 translate-middle shadow"
        style={{ maxWidth: "450px", width: "90%" }}
      >
        <div className="text-center mb-4">
          <img
            src="./images/logo-no-bg.png"
            alt="GroKart logo"
            className="w-50"
            height={120}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label text-white">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label text-white">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="contact" className="form-label text-white">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="contact"
            placeholder="254XXXXXXXXX"
            maxLength="12"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
          <small className="text-warning">Format: 254XXXXXXXXX</small>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label text-white">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <small className="text-warning">
            Min 6 characters, 1 uppercase, 1 special character
          </small>
        </div>

        <div className="mb-3">
          <label htmlFor="confirm-password" className="form-label text-white">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirm-password"
            placeholder="Confirm password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
        </div>

        {error && <div className="error mb-3">{error}</div>}

        {isLoading ? (
          <Loading />
        ) : (
          <button className="btn mt-2" type="submit" id="loginbtn">
            Sign Up
          </button>
        )}

        <div className="mt-4 text-center">
          <a href="/login" className="text-warning">
            Already have an account? <strong>Sign in here!</strong>
          </a>
        </div>
      </form>
    </section>
  );
}

export default SignUp;
