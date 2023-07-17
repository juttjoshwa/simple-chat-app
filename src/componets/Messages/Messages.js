import React from "react";
import "./Messages.css";

const Messages = ({ message, user, classes }) => {
  if (user) {
    return (
      <div
        style={{ fontFamily: "sans-serif" }}
        className={`MessageBox ${classes}`}
      >{`${user} : ${message}`}</div>
    );
  } else {
    return (
      <div
        style={{ fontFamily: "sans-serif" }}
        className={`MessageBox ${classes}`}
      >{`you : ${message}`}</div>
    );
  }
};

export default Messages;
