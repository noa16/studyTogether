const express = require("express");
const socketio = require("socket.io");

const http = require("http");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");
const PORT = process.env.PORT || 8000;
const router = require("./router");
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("we have new connection");

  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return callback(error);
    //emit event fronm the backend to the fron end
    socket.emit("message", {
      user: "admin",
      text: `${user.name} welcome to the room ${user.room}`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });
    socket.join(user.room); //add user to the room

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    //take a message from the front (listener)

    const user = getUser(socket.id); //specific user
    io.to(user.room).emit("message", { user: user.name, text: message });
    callback(); //after the message is send from the from end
  });
  socket.on("disconnect", () => {
    console.log("User had left");
  });
});
app.use(router);
server.listen(PORT, () => {
  console.log(`server start on port ${PORT}`);
});
