import { gql } from '@apollo/client';

// get all jokes
const GET_JOKES = gql`
  {
    jokes {
      id
      joke
      type
    }
  }
`;

export { GET_JOKES };
