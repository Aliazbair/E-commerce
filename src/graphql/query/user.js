import { gql } from "@apollo/client/core";


// get all users
const GET_USERS = gql`
  {
    users {
      data {
        name
        email 
        id
      }

      paginatorInfo {
        count
        total
      }
    }
  }
`;


export {GET_USERS}