import { gql } from '@apollo/client';

// get all jokes
const GET_PRODUCTS = gql`
  {
    products {
      id
      title
      description
      image
      price
      rate
      count
      category
    }
  }
`;

export { GET_PRODUCTS };
