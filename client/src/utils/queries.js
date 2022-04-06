import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
query Posts {
  posts {
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

export const QUERY_POST = gql`
query Post($id: ID!) {
  post(_id: $id) {
    _id
    createdAt
    username
    postText
    commentCount
    comments {
      _id
      createdAt
      username
      commentBody
    }
  }
}
`;

export const QUERY_USER = gql`
query Users {
  users {
    _id
    username
    email
    posts {
      _id
      postText
      commentCount
    }
    friends {
      friends {
        _id
        username
        email
      }
    }
  }
}
`;

export const QUERY_ME = gql`
query Me {
  me {
    _id
    username
    email
    friendCount
    friends {
      username
    }
    posts {
      _id
      username
      createdAt
      postText
      commentCount
      comments {
        _id
        username
        createdAt
        commentBody
      }
    }
  }
}
`;