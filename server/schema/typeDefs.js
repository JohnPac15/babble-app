const { gql } = require('apollo-server-express');

const typeDefs = gql `
type Post {
  _id: ID
  postText: String
  createdAt: String
  username: String
  commentCount: Int
  comments: [Comment]
}
type ToDo {
  _id: ID
  toDoText: String
  createdAt: String
  username: String
}  
type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    posts: [Post]
    friends: [User]
    toDos: [ToDo]
  }
  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    me: User
    user(username: String!): User
    posts: [Post]
    post(_id: ID!): Post
    toDos: [ToDo]
    toDo(_id: ID!): ToDo
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addComment( postId: ID!, commentBody: String!): Post
    addFriend(friendId: ID!): User
    deleteFriend(friendId: ID!): User
    addToDo(toDoText: String!): ToDo
    removeToDo(_id: ID!): ToDo
    removePost( _id: ID!): Post
    removeComment(postId: ID!, commentId: String!): Post
  }
  `;

module.exports = typeDefs