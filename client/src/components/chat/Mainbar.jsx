// import React, { useEffect } from "react";
// import { Typography, Grid } from "@mui/material";
// import Message from "./Message";
// import SendMessageForm from "./SendMessageForm";
// import { Scrollbar } from 'react-scrollbars-custom';

// const Mainbar = ({ msges, user, messagesEndRef, send }) => {
//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [msges, messagesEndRef]);

//   return (
//     <Grid
//       item
//       xs={10}
//       style={{
//         position: "absolute",
//         top: "70px",
//         bottom: "45px",
//         right: "0",
//         width: "75%",
//       }}
//     >
//       <Scrollbar
//         style={{
//           width: "100%",
//           height: "100%",
//           backgroundColor: "#333333",
//           backdropFilter: "blur(10px)",
//           boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
//         }}
//       >
//         {msges && msges.length > 0 ? (
//           msges.map((msg, i) => (
//             <Message
//               key={i}
//               sender={msg.sender}
//               message={msg.message}
//               timeStamp={msg.timeStamp}
//               isCurrentUser={msg.sender === user.username}
//             />
//           ))
//         ) : (
//           <Typography
//             variant="body1"
//             style={{ textAlign: "center", marginTop: "20px" }}
//           >
//             No messages yet
//           </Typography>
//         )}
//         <div ref={messagesEndRef} />
//       </Scrollbar>
//       <SendMessageForm send={send} />
//     </Grid>
//   );
// };

// export default Mainbar;


import React, { useEffect } from "react";
import { Typography, Grid } from "@mui/material";
import Message from "./Message";
import SendMessageForm from "./SendMessageForm";
import { Scrollbar } from 'react-scrollbars-custom';
import emptyMessagesImg from "../../assets/logo.png"; // Import your image here

const Mainbar = ({ msges, user, messagesEndRef, send }) => {
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [msges, messagesEndRef]);

  return (
    <Grid
      item
      xs={10}
      style={{
        position: "absolute",
        top: "70px",
        bottom: "45px",
        right: "0",
        width: "75%",
      }}
    >
      <Scrollbar
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#333333",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
        }}
      >
        {msges && msges.length > 0 ? (
          msges.map((msg, i) => (
            <Message
              key={i}
              sender={msg.sender}
              message={msg.message}
              timeStamp={msg.timeStamp}
              isCurrentUser={msg.sender === user.username}
            />
          ))
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
            <img src={emptyMessagesImg} alt="No messages" style={{ maxWidth: "250px", marginTop:"100px"}} />
            <Typography variant="body1">
              No messages yet
            </Typography>
          </div>
        )}
        <div ref={messagesEndRef} />
      </Scrollbar>
      <SendMessageForm send={send} />
    </Grid>
  );
};

export default Mainbar;
