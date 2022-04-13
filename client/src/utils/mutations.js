import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        friendCount
        friends {
          username
        }
        posts {
          createdAt
          postText
          commentCount
        }
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation AddFriend($friendId: ID!) {
    addFriend(friendId: $friendId) {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation AddPost($postText: String!) {
    addPost(postText: $postText) {
      _id
      username
      postText
      commentCount
      comments {
        username
        commentBody
      }
    }
  }
`;
export const ADD_TODO = gql`
  mutation AddToDo($toDoText: String!) {
    addToDo(toDoText: $toDoText) {
      _id
      username
      toDoText
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($postId: ID!, $commentBody: String!) {
    addComment(postId: $postId, commentBody: $commentBody) {
      _id
      username
      createdAt
      postText
      commentCount
      comments {
        username
        createdAt
        commentBody
      }
    }
  }
`;

export const REMOVE_POST = gql`
  mutation RemovePost($id: ID!) {
    removePost(_id: $id) {
      _id
      username
      createdAt
      postText
      commentCount
    }
  }
`;

export const REMOVE_TODO = gql`
  mutation RemoveToDo($id: ID!) {
    removeToDo(_id: $id) {
      _id
      username
      toDoText
      createdAt
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation RemoveComment($postId: ID!, $commentId: String!) {
    removeComment(postId: $postId, commentId: $commentId) {
      _id
      createdAt
      username
      postText
      commentCount
      comments {
        _id
        createdAt
        commentBody
      }
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation DeleteFriend($friendId: ID!) {
    deleteFriend(friendId: $friendId) {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;
