import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Loading from "../Loading";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <section className="signin-container position-relative">
      {/* Background Image */}
      <img
        src="./images/access-bg.png"
        className="img-fluid w-100 position-absolute top-0 start-0"
        alt="Access background"
        style={{
          height: "100vh",
          objectFit: "cover",
          zIndex: "-1",
          filter: "brightness(60%)",
        }}
      />

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="form-group bg-dark bg-opacity-75 rounded p-5 shadow-lg position-absolute top-50 start-50 translate-middle text-white"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <div className="text-center mb-4">
          <img
            src="./images/logo-no-bg.png"
            className="img-fluid"
            alt="GroKart Logo"
            style={{ height: "80px" }}
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="text-danger mb-3">{error}</div>}

        {isLoading ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn-warning w-100 fw-semibold">
            Sign In
          </button>
        )}

        <div className="mt-4 text-center">
          <a href="/signup" className="text-warning">
            Don't have an account? <strong>Sign up here!</strong>
          </a>
        </div>
      </form>
    </section>
  );
}

export default Login;
