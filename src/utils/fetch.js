import { gql } from '@apollo/client';

// get all posts

 const fetch=()=>{

     const GET_POSTS = gql`
       query getPosts {
         posts {
           data {
             title
           }
         }
       }
     `;


 }

export { GET_POSTS };
