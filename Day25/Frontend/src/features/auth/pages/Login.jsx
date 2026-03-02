import React, { useState } from "react";
import "../style/login.scss";
import FormInput from "../components/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    await handleLogin({ email, password });
    navigate("/");
  }
  return (
    <>
      <div className="login-page">
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <FormInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              placeholder="Enter your email"
            />
            <FormInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              placeholder="Enter your password"
            />
            <button type="submit">Login</button>
          </form>
          <p style={{ color: "black" }}>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
