import React, { useState } from "react";
import { Typography } from "@mui/material";
import { format } from "date-fns";
import { motion } from "framer-motion";

const Message = ({ sender, message, timeStamp, isCurrentUser }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedMessage = message.substring(0, 100); // Truncate message to first 100 characters

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isCurrentUser ? -100 : 100 }} // Adjust the x value for less sliding into the side
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20, // Increase damping for smoother animation
      }}
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "#ffd700", fontSize: "0.56rem", marginRight: "4px" }}
          >
            {isCurrentUser ? "You" : sender}
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#ffd700", fontSize: "0.48rem" }}
          >
            {format(new Date(timeStamp), "hh:mm")}
          </Typography>
        </div>
        {message.length > 100 && (
          <Typography
            variant="caption"
            sx={{
              color: "#ffd700",
              fontSize: "0.48rem",
              cursor: "pointer",
              marginTop: "0.24rem",
            }}
            onClick={toggleExpand}
          >
            {isExpanded ? "Show less" : "Show more"}
          </Typography>
        )}
      </div>
    </motion.div>
  );
};

export default Message;
