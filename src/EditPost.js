import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from './Context/DataContext';

const EditPost = () => {
    const {posts, editTitle, editBody, setEditTitle, setEditBody, handleEdit} = useContext(DataContext);
    const {id} = useParams();
    const post = posts.find(p => (p.id).toString() === id);
    useEffect(() => {
      setEditTitle(post.title);
      setEditBody(post.body);
    }, [post.title, post.body, setEditTitle, setEditBody]);
    
  return (
    <main className='NewPost'>
      <h2>Edit Post</h2>
      <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="postTitle"> Title: </label>
        <input
          id="postTitle"
          required
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
        />
        <button type='submit' onClick={() => handleEdit(post.id)}>Edit it!</button>
      </form>
    </main>
  )
}

export default EditPost