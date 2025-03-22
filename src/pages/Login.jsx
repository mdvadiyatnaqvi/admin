import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { InputField } from "../components/custom-components/InputField";

export const Login = () => {
  const navigate = useNavigate();

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
        // alert("Login successful");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login-container mt-3">
        <h2 className="text-center">Log In</h2>
        <p className="separator"></p>
        <form onSubmit={handleSubmit} className="login-form">
          <InputField
            type="email"
            placeholder="Email address*"
            value={user.email}
            onChange={handleInputChange}
            name="email" // Added name prop
          />
          <InputField
            type="password"
            placeholder="Enter Password*"
            value={user.password}
            onChange={handleInputChange}
            name="password" // Added name prop
          />
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
      </div>
    </>
  );
};
