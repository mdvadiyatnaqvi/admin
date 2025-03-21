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

  const URL = "https://mern-app-fknl.onrender.com/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform login logic here

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        // Redirect to admin dashboard or home page
        setUser({ email: "", password: "" });
        alert("Login successful");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
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
        <button type="submit">Login</button>
      </form>
    </>
  );
};
