import React, { useEffect } from "react";
import { useNavigate } from "react-router"; // Import useNavigate from react-router

import Logo from "../components/Logo";

import logo from "../assets/logo.png";

const HomePage = () => {
  const navigate = useNavigate(); // Use useNavigate hook for programmatic navigation

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login"); // Redirect to login page after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, [navigate]);

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      
      <Logo />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <img src={logo} style={{ maxWidth: "250px" }} alt="Logo" />
      </div>
    </div>
  );
};

export default HomePage;
