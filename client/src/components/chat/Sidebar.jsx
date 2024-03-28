import React from "react";
import { Typography, Avatar, Paper, Card, CardContent } from "@mui/material";

const Sidebar = ({ users }) => {
  return (
    <Paper
    style={{
      position: "absolute",
      top: "68px", // Adjusted top position to match the height of the Header
      left: "0",
      width: "25%",
      height: "calc(100vh - 68px)", // Adjusted height to fill the remaining space
      // backgroundImage: "linear-gradient(to bottom, #1a1a1a, #85a7ff)", // Gradient from #1a1a1a to a lighter blue shade
      border: "none",
      borderRadius: "none"
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
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#2dacf0", // Add grey background color
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
