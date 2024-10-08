import React from 'react';

import './Message.css';

import ReactEmoji from "react-emoji";

const Message = ({ message: { user, text }, name }) => {
    let isSendByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();
    if (user === trimmedName) {
        isSendByCurrentUser = true;
    }

    return (
        isSendByCurrentUser
            ? (
                <div className="message-container justify-end">
                    <p className="sent-text pr-10">{trimmedName}</p>
                    <div className="message-box background-blue">
                        <p className="message-text color-white">{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            )
            : (
                <div className="message-container justify-start">
                    <div className="message-box background-light">
                        <p className="message-text color-dark">{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className="sent-text pl-10">{user}</p>
                </div>
            )
    )

}

export default Message;