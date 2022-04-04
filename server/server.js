const express = require('express');
const { createServer } = require("http");
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const {authMiddleware} = require('./utils/auth');
const { Server } = require("socket.io");

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

const httpServer = createServer(app);
const io = new Server(httpServer);
io.on("connection", function (socket) {
  console.log("Made socket connection");
});

httpServer.listen(3000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
