import React, { useContext } from 'react';
import Feed from './Feed';
import DataContext from './Context/DataContext';

const Home = () => {
  const { searchResults } = useContext(DataContext);
  const posts = searchResults;
  return (
    <main className='Home'>
      { posts.length ? (
        <Feed posts = {posts}/>
      ) : (
        <p style = {{ color : "Red" }}> Post not uploaded </p>
      )}
      
    </main>
  )
} 

export default Home