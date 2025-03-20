import React, { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const userAttribute = e.target.name;
    const userAttributeValue = e.target.value;
    setUser((user) => ({ ...user, [userAttribute]: userAttributeValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
  };

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={user.email}
          onChange={handleInputChange}
          required
        />
        <br />{" "}
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
