const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'public')));

let users = {};

io.on('connection', (socket) => {
  console.log('a user connected:', socket.id);

  // Handle new user joining with username
  socket.on('join', (username) => {
    users[socket.id] = username;
    io.emit('userList', Object.values(users));
    io.emit('userJoined', username);
    console.log('User joined:', username);
  });

  // Handle sending messages
  socket.on('chatMessage', (msg) => {
    const username = users[socket.id] || 'Anonymous';
    io.emit('chatMessage', { username, message: msg, timestamp: new Date().toISOString() });
  });

  // Handle sending audio messages
  socket.on('audioMessage', (audioData) => {
    const username = users[socket.id] || 'Anonymous';
    io.emit('audioMessage', { username, audioData, timestamp: new Date().toISOString() });
  });

  // Handle typing indicator
  socket.on('typing', (isTyping) => {
    const username = users[socket.id];
    if (username) {
      socket.broadcast.emit('typing', { username, isTyping });
    }
  });

  // Handle user disconnect
  socket.on('disconnect', () => {
    const username = users[socket.id];
    if (username) {
      io.emit('userLeft', username);
      delete users[socket.id];
      io.emit('userList', Object.values(users));
      console.log('User disconnected:', username);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
