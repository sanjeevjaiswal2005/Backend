import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const { loading, handleRegister } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister(username, email, password);
    navigate("/");
  };
  if (loading) {
    return (
      <main>
        <h1>Loading....</h1>
      </main>
    );
  }
  return (
    <main>
      <div className="form-conatainer">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            // value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            id="username"
            placeholder="Enter your username "
          />
          <input
            type="text"
            // value={username}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            placeholder="Enter your email "
          />

          <input
            type="password"
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <button className="button primary-btn">Register</button>
        </form>
        <p>
          Already have account ? <Link to={"/login"}>Login</Link>{" "}
        </p>
      </div>
    </main>
  );
};

export default Register;
