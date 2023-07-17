import React, { useEffect, useState } from "react";
import { user } from "../Join/Join";
import socketIo from "socket.io-client";
import { ENDPOINT } from "../../App";
import "./Chat.css";
import Messages from "../Messages/Messages";
import Bottom from "react-scroll-to-bottom";
import CloseIcon from "../../Asset/close.png";

let socket;

const Chat = () => {
  socket = socketIo(ENDPOINT, { transports: ["websocket"] });
  const [id, setId] = useState("");
  const [message, setMessage] = useState([]);

  const send = () => {
    const message = document.getElementById("chatInput").value;
    socket.emit("message", { message, id });
    document.getElementById("chatInput").value = "";
  };

  useEffect(() => {
    socket.on("connect", () => {
      alert("connected");
      setId(socket.id);
    });

    socket.emit("joined", { user });

    socket.on("welcome", (data) => {
      setMessage([...message, data]);
    });
    socket.on("userJoind", (data) => {
      setMessage([...message, data]);
    });
    socket.on("leave", (data) => {
      setMessage([...message, data]);
    });
    return () => {
      socket.emit("disconnected");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setMessage([...message, data]);
    });
    return () => {
      socket.off();
    };
  }, [message]);

  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header">
          <h1>Snappy</h1>
          <a href="/">
            <img src={CloseIcon} alt="close" />
          </a>
        </div>
        <Bottom className="chatBox">
          {message.map((item, idx) => (
            <Messages
              user={item.id === id ? "" : item.user}
              message={item.message}
              classes={item.id === id ? "right" : "left"}
            />
          ))}
        </Bottom>
        <div className="inputBox">
          <input
            autoFocus
            type="text"
            placeholder="Enter your message"
            id="chatInput"
          />
          <button onClick={send} className="sendBtn">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
