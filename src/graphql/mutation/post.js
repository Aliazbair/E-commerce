import { gql } from '@apollo/client';

// create new post

const CREATE_POST = gql`
  mutation createPost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      title
    }
  }
`;

//update post
const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $title: String!, $body: String!) {
    updatePost(id: $id, title: $title, body: $body) {
      id
    }
  }
`;

// delete the post
const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;
export { CREATE_POST, UPDATE_POST, DELETE_POST };
