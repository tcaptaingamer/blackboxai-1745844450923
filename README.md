
Built by Tcaptain Gamer

---

```markdown
# WhatsApp Copy App

A simple WhatsApp clone application built using Node.js, Express, Socket.IO, and Tailwind CSS. This project serves as a practical example of how to create a real-time chat application using web technologies.

## Project Overview

The "WhatsApp Copy App" allows users to connect and chat in real-time. It features user authentication (by username) and the ability to send text and audio messages. The application uses Socket.IO for real-time web socket communication and Express.js to serve the application.

## Installation

To install the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/whatsapp-copy-app.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd whatsapp-copy-app
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Start the application:**
   ```bash
   npm start
   ```

5. **Open your web browser and go to:**
   ```
   http://localhost:8000
   ```

## Usage

- Open multiple browser windows/tabs to see real-time user interactions.
- Enter your desired username to join the chat.
- You can send chat messages and audio messages.
- When a user joins or leaves, the chat will update accordingly to reflect the current user list.

## Features

- **Real-Time Messaging:** Users can send and receive messages instantly using Socket.IO.
- **User Authentication:** Users can enter a unique username upon joining the chat.
- **Typing Indicator:** The application notifies others when a user is typing a message.
- **User List:** Displays active users in the chat room.
- **Audio Messaging:** Send and receive audio messages.

## Dependencies

The project makes use of the following key dependencies:

- **Express:** Fast, unopinionated, minimalist web framework for Node.js
- **Socket.IO:** Enables real-time, bidirectional, and event-based communication between web clients and servers.

The full list of dependencies can be found in the `package.json` file:

```json
"dependencies": {
  "express": "^4.18.2",
  "socket.io": "^4.7.1"
}
```

## Project Structure

Here is a brief overview of the project structure:

```
/whatsapp-copy-app
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Lock file for npm dependencies
├── server.js               # Main entry point of the application
└── /public                 # Static files (HTML, CSS, JS)
```

### server.js

The `server.js` file contains the main logic for setting up the Express server and configuring Socket.IO to handle real-time communication. 

### public

The `public` folder should contain your HTML, CSS (including tailwind), and JavaScript files necessary for the front-end interface of the app.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

**Note:** Remember to replace `yourusername` in the cloning URL to your actual GitHub username or project repository URL.
