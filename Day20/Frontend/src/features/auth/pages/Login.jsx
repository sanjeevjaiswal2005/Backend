import React, { useState } from "react";
import "../style/form.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(username, password).then((res) => {
      console.log(res);
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
