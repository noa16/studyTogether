import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "./InfoBar";
import Messages from "./Messages";
import Input from "./Input";
import classes from "./Chat.module.css";
import TextContainer from "./TextContainer";

let socket;
const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState([]);
  const [users, setUsers] = useState("");
  const ENDPOINT = "localhost:8000";
  useEffect(() => {
    const { name, room } = queryString.parse(location.search); //get the url param(qurt)
    socket = io(ENDPOINT); //create instance
    console.log(name);
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {}); //dispatch event

    return () => {
      socket.emit("disconnect"); //unmount component

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]); //pushing new message
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  //func sending message

  const sendMessage = (event) => {
    event.preventDefault(); //prevent default beahvior

    if (message) {
      console.log(message);
      socket.emit("sendMessage", message, () => setMessage("")); //when sending the message the input field clear
    }
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
