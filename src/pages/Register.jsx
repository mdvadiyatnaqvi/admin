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

  const handleSubmit = (e) => {
    e.preventDefault();
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
