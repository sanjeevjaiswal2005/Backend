import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const handleSubmit = (e) => {
    preventDefault();
  };
  return (
    <main>
      <div className="form-conatainer">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            // value={username}
            name="username"
            id="username"
            placeholder="Enter your username "
          />
          <input
            type="text"
            // value={username}
            name="email"
            id="email"
            placeholder="Enter your email "
          />

          <input
            type="password"
            // value={password}
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
