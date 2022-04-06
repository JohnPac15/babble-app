const express = require('express');
const http = require("http");
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const {authMiddleware} = require('./utils/auth');

const chat = require('./utils/chat');
const socketio = require('socket.io');
const cors = require('cors');

const { typeDefs, resolvers } = require('./schema');

const PORT = process.env.PORT || 3001;
const HTTP = process.env.HTTP || 3002;
const app = express();

const startServer = async () => {
  const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    context: authMiddleware 
  });
  await server.start();

  server.applyMiddleware({ app });

  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);

};

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const chatServer = http.createServer(app);
var io = socketio(chatServer,{
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});
chat(io);

chatServer.listen(HTTP, () => console.log(`Listening on port ${HTTP}`));

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
