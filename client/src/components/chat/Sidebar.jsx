import React from "react";
import { Typography, Avatar, Paper, Card, CardContent } from "@mui/material";

const Sidebar = ({ users }) => {
  return (
    <Paper
      style={{
        position: "absolute",
        top: "70px", // Adjusted top position to match the height of the Header
        left: "0",
        width: "25%",
        height: "calc(100vh - 70px)", // Adjusted height to fill the remaining space
        backgroundColor: "#2d2d2d", // Solid background color
        border: "none",
        borderRadius: "none",
        boxShadow: "2px 0px 4px rgba(0, 0, 0, 0.1)", // Add shadow
      }}
    >
      {/* User Cards */}
      {users.map((obj, index) => (
        <Card
          key={index + 1}
          style={{
            margin: "15px",
            height: "60px",
            borderRadius: "5px",
            marginBottom: "2px",
            backgroundColor: "#424242", // Background color
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add shadow
          }}
        >
          <CardContent style={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={obj.profile}
              alt="User"
              sx={{ width: 30, height: 30, marginRight: "10px" }}
            />
            <Typography>{obj.username}</Typography>
          </CardContent>
        </Card>
      ))}
    </Paper>
  );
};

export default Sidebar;
