import React, { useState } from "react";
import "../style/form.scss";
import "../style/button.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(username, password);
    navigate("/");
  };
  if (loading) {
    return (
      <main>
        <h1>Loading.....</h1>
      </main>
    );
  }
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onInput={(e) => setUsername(e.target.value)}
            name="username"
            id="username"
            placeholder="Enter your usernaem"
          />
          <input
            type="password"
            onInput={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <button className="button primary-btn">Login</button>
        </form>
        <p>
          Create your Accoutn <Link to="/register">Create Account</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
