import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const userAttribute = e.target.name;
    const userAttributeValue = e.target.value;
    setUser((user) => ({ ...user, [userAttribute]: userAttributeValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const URL = "https://mern-app-fknl.onrender.com/register";

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("Response is: ", response);
      if (response.ok) {
        alert("Registration successful!");
        window.location.reload(); // Refresh the page after successful registration
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username*"
          value={user.username}
          onChange={handleInputChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={user.email}
          onChange={handleInputChange}
          required
        />
        <br />
        <input
          type="tel"
          name="phone"
          placeholder="Phone*"
          value={user.phone}
          onChange={handleInputChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password*"
          value={user.password}
          onChange={handleInputChange}
          required
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
};
