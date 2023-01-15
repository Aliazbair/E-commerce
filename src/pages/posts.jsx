import React from 'react'
import { useQuery, useMutation } from '@apollo/client';

import { GET_POSTS } from '../graphql/query/post';
import { CREATE_POST, UPDATE_POST, DELETE_POST } from '../graphql/mutation/post';
function Posts() {

    // get all post
    const {data,loading,error}=useQuery(GET_POSTS)
      // create a new post
    const [createPost] = useMutation(CREATE_POST,{
        variables:{title:'new post with react',body:'this post created with react'}
    });

    // update post
    const [updatePost] = useMutation(UPDATE_POST, {
      variables: {
        id: 478,
        title: 'update post with react',
        body: 'this post updated with react',
      },
    });

    // delete post
    const [deletePost] = useMutation(DELETE_POST, { variables: { id: 478 } });

    const {data:posts}=data.posts;

    if(loading) return 'loading'
  return (
    <div>
  <button onClick={createPost}>create new post</button>
  <button onClick={updatePost}>update the post</button>
  <button onClick={deletePost}>delete the post</button>
        <h1>Posts lists</h1>

        <ul>
            {posts.map(post =>(
                <h3>{post.title}</h3>
            ))}
        </ul>
       
    </div>
  )
}

export default Posts