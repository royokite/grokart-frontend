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
      <img
        src="./images/access-bg.png"
        alt="Login background"
        className="img-fluid w-100"
        style={{ height: "100vh", objectFit: "cover" }}
      />

      <form
        onSubmit={handleSubmit}
        className="form-group bg-dark p-4 rounded position-absolute top-50 start-50 translate-middle shadow"
        style={{ maxWidth: "400px", width: "90%" }}
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
          <label htmlFor="email" className="form-label text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="error mb-3">{error}</div>}

        {isLoading ? (
          <Loading />
        ) : (
          <button className="btn w-100 mt-2" type="submit" id="loginbtn">
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
