import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../data/ApiPath";

const Login = ({ showRegisterHandler }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_URL}/vendor/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful, handle success (e.g., redirect to dashboard)
        console.log("Login successful:", data);
        alert("Login successful! Welcome to your dashboard.");

        localStorage.setItem("vendorToken", data.token); // Store token for authenticated requests

        // Redirect to landing page
        setEmail("");
        setPassword("");
        navigate("/");
      
      } else {
        console.error("Login failed:", data.message);
        alert(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="loginSection">
      <form className="authform" onSubmit={handleSubmit}>
        <h3>Vendor Login </h3>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <div className="forgotPassword">
          <a href="#">Forgot Password?</a>
        </div>
        <div className="signupLink">
          <span>Don't have an account? </span>
          <button type="button" onClick={showRegisterHandler}>
            Sign Up
          </button>
        </div>
        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
