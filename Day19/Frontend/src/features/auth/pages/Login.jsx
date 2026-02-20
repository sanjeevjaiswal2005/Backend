import React, { useState } from "react";
import "../style/form.scss";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3000/api/auth/login",
        {
          username: username,
          password: password,
        },
        { withCredentials: true },
      )
      .then((res) => {
        console.log(res.data);
      });
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <main>
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onInput={(e) => setUsername(e.target.value)}
              name="username"
              placeholder="Enter username"
            />
            <input
              type="password"
              name="password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account?{" "}
            <Link className="toggelLinks" to="/register">
              Register
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default Login;
