import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Service } from "./pages/Service";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Error } from "./pages/Error";
import { Navbar } from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/about" element={<About />} />
          <Route path="/admin/service" element={<Service />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
