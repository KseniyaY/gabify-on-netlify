import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from "../TextContainer/TextContainer";

import "./Chat.css";
import "../InfoBar/InfoBar.css";


let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const ENDPOINT = "https://react-nodejs-chat-app2020.herokuapp.com/";

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT);

        setRoom(room);
        setName(name);

        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error);
            }
        });


        //umnounting the component as we leave the chat
        return () => {
            socket.emit('disconnect');
            socket.off(); //it turns one instance of the connection
        }
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on("message", message => {
            setMessages(messages => [...messages, message]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        })
    }, []);

    //function for sending messages
    const sendMessage = (e) => {
        //in order not to refresh or render DOM in case of keypress event
        e.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => {
                setMessage("");
            })
        }
    }

    return (
        <div className="outer-container">
            <TextContainer users={users} />
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default Chat;