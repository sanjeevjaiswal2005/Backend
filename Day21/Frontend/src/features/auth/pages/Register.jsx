import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="usernaem"
            id="username"
            placeholder="Enter your username"
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <button className="button primary-btn">Register now</button>
        </form>
        <p>
          Already have account <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
