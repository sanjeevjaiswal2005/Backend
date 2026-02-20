import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

 
    setUsername("");
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <main>
        <div className="form-container">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              placeholder="Enter username"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Enter email"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Enter password"
            />
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account?{" "}
            <Link className="toggelLinks" to="/login">
              Login
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default Register;
