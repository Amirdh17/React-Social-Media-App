import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import DataContext from './Context/DataContext';

const PostPage = () => {
  const {posts, handleDelete} = useContext(DataContext);
  const {id} = useParams();
  const post = posts.find(p => (p.id).toString() === id );

  return (
    <article className='PostPage'>
      { post && 
      <>
        <h2>{post.title}</h2>
        <p className='postDate'>{post.datetime}</p>
        <p className='postBody'>
          { post.body }
        </p>
        <Link to={`/post/edit/${post.id}`}>
        <button className='editButton' >Edit Post</button>
        </Link>
        <button className='deleteButton' onClick={() => handleDelete(post.id)}>
          Delete Post
        </button>
      </>
      }
      {!post && 
      <>
        <h2>Post Not Found!</h2>
        <p>Visit our Home Page</p>
      </>
      } 
      
    </article>
  )
}
export default PostPage;