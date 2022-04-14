# Project Three - Babble App
 ## Table of Contents
 * [Technology](#technology)
 * [Contributors](#contributors)
 * [ScreenShots](#screenshots)
 * [Links](#links)
## Requirements

Your project should fulfill the following requirements:
- Use React for the front end.
- Use GraphQL with a Node.js and Express.js server.
- Use MongoDB and the Mongoose ODM for the database.
- Use queries and mutations for retrieving, adding, updating, and deleting data.
- Be deployed using Heroku (with data).
- Have a polished UI.
- Be responsive.
- Be interactive (i.e., accept and respond to user input).
- Include authentication (JWT).
- Protect sensitive API key information on the server.
- Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class and id naming conventions, indentation, high-quality comments, etc.).
- Have a high-quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

##  Technology

- Node js
  - Express
  - Mongoose
  - Apollo Server
  - Socket.io
  - dotenv
  - bcrypt
- MongoDB
- React
- CSS

## Contributors

- [John Pacini](https://github.com/JohnPac15)
- [Tirsa Gomez](https://github.com/trrgomez)
- [Robert Clarady](https://github.com/texrob20)

### Open Source Code:
- Chit Chat (https://github.com/rajmasha/chit-chat)

## App Functionality

### Server

The server provides a web socket to listen on port 4000 for the chat server and port 3001 for the Apollo server.

### Homepage

The homepage provides links for a user to login or sign up.

### Profile

The profile page provides access to a user's calendar, tasks (To Do), and posts.  Only a user who is logged in will see their profile page.

### Chat

The chat page provides a non-persisent multi-room chat.  Only logged in users can access the chat but the chat is not linked to the user's account.  Because of the port limitation in Heroku the chat function in the deployed app does not work.

### Access (Login, Register, Logout)

The is function for a user to login if they already have an account, create an account if they do not have one, and logout when they leave the site.  Once a user is authenticated, they are provided with a JWT to authorize access to their account which is stored on the MongoDB.

## Links
https://gentle-retreat-43606.herokuapp.com/

