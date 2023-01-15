import { gql } from '@apollo/client';

// get all posts
const GET_LOSES = gql`
  {
    loses {
      data {
        id
        lose_name
        description
        personal_name
        type
        phone_of_loses
        date_of_lose
        location
      }
    }
  }
`;

export { GET_LOSES };
