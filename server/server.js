const express = require('express');
const { createServer } = require("http");
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const {authMiddleware} = require('./utils/auth');

const chat = require('./utils/chat');
const socketio = require('socket.io');
const cors = require('cors');

const { typeDefs, resolvers } = require('./schema');

const PORT = process.env.PORT || 3001;
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

const server = createServer();
const io = socketio(server,{
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});
chat(io);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
