import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputField } from "../components/custom-components/InputField";
import "bootstrap/dist/css/bootstrap.min.css";

export const Register = () => {
  const navigate = useNavigate();

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
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/admin/login");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <>
      <div className="login-container mt-3">
        <h2 className="text-center">Register</h2>
        <p className="separator"></p>
        <form onSubmit={handleSubmit} className="login-form">
          <InputField
            type="text"
            placeholder="Email Username*"
            value={user.username}
            onChange={handleInputChange}
            name="username"
          />
          <InputField
            type="email"
            placeholder="Email address*"
            value={user.email}
            onChange={handleInputChange}
            name="email"
          />
          <InputField
            type="tel"
            placeholder="Email Phone*"
            value={user.phone}
            onChange={handleInputChange}
            name="phone"
          />
          <InputField
            type="password"
            placeholder="Enter Password*"
            value={user.password}
            onChange={handleInputChange}
            name="password"
          />
          <button type="submit" className="login-button">
            Register
          </button>
        </form>
      </div>

      {/* <form onSubmit={handleSubmit}>
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
      </form> */}
    </>
  );
};
