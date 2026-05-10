import React, { useState } from "react";

import { API_URL } from "../../data/ApiPath";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/vendor/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: userName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Registration successful, handle success (e.g., redirect to login)
        console.log("Registration successful:", data);
        alert("Registration successful! Please login.");
        setUserName("");
        setEmail("");
        setPassword("");
      } else {
        // Registration failed, handle error
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registerSection">
      <form className="authform" onSubmit={handleSubmit}>
        <h3>Vendor Register </h3>

        <label htmlFor="email">UserName</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter UserName"
          value={userName}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          value={email}       
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
