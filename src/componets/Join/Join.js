import React, { useState } from "react";
import "./Join.css";
import logo from "../../Asset/Logo.png";
import { Link } from "react-router-dom";

// Global variable to store the user name
export let user;

/**
 * Join component for users to enter their name and join the chat.
 * Stores the user name in the global variable 'user' upon clicking 'Join'.
 */
const Join = () => {
  // State variable to store the user name entered by the user
  const [name, setName] = useState("");

  /**
   * Function to set the 'user' global variable with the entered name.
   * Clears the input field after storing the user name.
   */
  const sendUser = () => {
    try {
      user = document.getElementById("joinInput").value;
      document.getElementById("joinInput").value = "";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="joinPage">
      <div className="JoinContainer">
        <img src={logo} alt="logo" />
        <h1>Snappy socket learning</h1>
        <input
          autoFocus
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
          id="joinInput"
        />
        {/* Link to the Chat component, prevents navigation if name is not entered */}
        <Link onClick={(e) => (!name ? e.preventDefault() : null)} to="/chat">
          <button onClick={sendUser} className="joinbtn">
            Join
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
