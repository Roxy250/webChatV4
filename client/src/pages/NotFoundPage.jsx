import React from "react";
import bgVideo from "../assets/BG.mp4"; // Provide the path to your video

const NotFoundPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "0", // Ensure the video has a lower z-index than the text
        }}
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          width: "400px",
          height: "auto",
          backgroundColor: "rgba(255,255,255,0.3)",
          borderRadius: "6.67px",
          backdropFilter: "blur(66.67px)",
          border: "1.34px solid rgba(255,255,255,0.1)",
          boxShadow: "0 0 26.67px rgba(8,7,16,0.3)",
          padding: "33.34px 66.67px",
          fontSize: "13.33px",
          color: "#fff",
          zIndex: "1", // Ensure the text has a higher z-index than the video
        }}
      >
        <h1>404 NOT FOUND</h1>
        {/* Your form elements go here */}
      </div>
    </div>
  );
};

export default NotFoundPage;
