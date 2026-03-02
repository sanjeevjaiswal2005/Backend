import React, { useState } from "react";
import FormInput from "../components/FormInput";
import "../style/register.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const { handleRegister, loading } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    await handleRegister({ username, email, password });
    navigate("/");
  }
  return (
    <>
      <div className="register-page">
        <div className="form-container">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <FormInput
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label="Username"
              placeholder="Enter your username"
            />
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
            <button type="submit">Register</button>
          </form>
          <p style={{ color: "black" }}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
