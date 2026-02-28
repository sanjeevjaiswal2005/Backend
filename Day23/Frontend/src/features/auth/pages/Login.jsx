import React, { useState } from "react";
import "../style/form.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { user,loading, handleLogin, setLoading } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(username, password);
    console.log("loggedin");
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
      <div className="form-conatainer">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            // value={username}
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            name="username"
            id="username"
            placeholder="Enter your username "
          />
          <input
            type="password"
            // value={password}
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <button className="button primary-btn">Login</button>
        </form>
        <p>
          Don't have account ? <Link to={"/register"}>Create on.</Link>{" "}
        </p>
      </div>
    </main>
  );
};

export default Login;
