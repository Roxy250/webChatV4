import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import { format } from "date-fns";

const Message = ({ sender, message, timeStamp, isCurrentUser }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedMessage = message.substring(0, 100); // Truncate message to first 100 characters

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isCurrentUser ? "row-reverse" : "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: "8px 15px 8px 15px",
        position: "relative",
        paddingTop: "15px",
      }}
    >
      <div
        style={{
          backgroundColor: isCurrentUser ? "#2dacf0" : "#ffffff",
          borderRadius: isCurrentUser
            ? "16px 16px 4px 16px"
            : "16px 16px 16px 4px",
          padding: "8px",
          maxWidth: "64%",
          boxShadow: "0px 1.6px 4px rgba(0, 0, 0, 0.1)",
          wordWrap: "break-word",
        }}
      >
        <Typography sx={{ fontSize: "0.8rem" }}>
          {isExpanded ? message : truncatedMessage}
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "#ffd700", fontSize: "0.56rem" }}
        >
          {isCurrentUser ? "You" : sender}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#ffd700",
            marginLeft: "2.4rem",
            float: "right",
            fontSize: "0.48rem",
            marginTop: "0.48rem",
          }}
        >
          {format(new Date(timeStamp), "hh:mm")}
        </Typography>
        {message.length > 500 && (
          <Typography
            variant="caption"
            sx={{
              color: "#ffd700",
              fontSize: "0.48rem",
              marginLeft: "2.4rem",
              cursor: "pointer",
              float: "right",
              marginTop: "0.48rem",
            }}
            onClick={toggleExpand}
          >
            {isExpanded ? "Read less" : "Read more"}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Message;
