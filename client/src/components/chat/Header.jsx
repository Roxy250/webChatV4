import React from "react";
import { Typography, Avatar, Button, Paper } from "@mui/material";
import "../../styles.css";

const Header = ({ user, logout }) => {
  return (
    <Paper
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "70px",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#2d2d2d",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          src={user?.profile}
          alt="User Profile"
          sx={{ width: 30, height: 30, marginRight: "10px" }}
        />
        <Typography
          className="user-heading"
          sx={{
            color: "#03bcf4",
            fontFamily: "MyFont",
            fontSize: "1.5rem",
            animation: "animate 5s infinite",
          }}
        >
          Hello, {user?.username}
        </Typography>
      </div>
      <Button
        variant="contained"
        onClick={() => logout(user?.user_id)}
        sx={{
          minWidth: "80px",
          padding: "15px",
          height: "36px",
          fontSize: "0.8rem",
          fontWeight: "bold",
          backgroundColor: "#2dacf0",
          color: "#fff",
          "&:hover": { 
            backgroundColor: "#03bcf4", // Change to a darker shade of blue
            boxShadow: "0 0 10px #03bcf4, 0 0 20px #03bcf4, 0 0 40px #03bcf4", // Add box-shadow
          }
        }}
        
      >
        Logout
      </Button>
    </Paper>
  );
};

export default Header;
