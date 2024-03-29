import React from "react"; // Provide the path to your video

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
