import React from "react";

import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => (
    <form className="form">
        <input
            className="input"
            value={message}
            placeholder="Type a message..."
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" ? sendMessage(e) : null}
        />
        <button className="send-button"
            onClick={(e) => sendMessage(e)}>
            Send
        </button>
    </form>
)

export default Input;