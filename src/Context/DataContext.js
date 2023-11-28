import { createContext, useState, useEffect } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import api from "../api/posts.js";
import useWindowSize from "../hooks/useWindowSize";

const DataContext = createContext({});

export const DataProvider = ({children}) => {

    const [posts, setPosts] = useState([]);
    const [search, setSearch] =  useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const navigate = useNavigate();
    
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await api.get('/posts');
          setPosts(response.data);
        } catch (err) {
          if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          }
          else {
            console.log(`Error: ${err.message}`);
          }
        }
      }
      fetchPosts();
    }, []);
  
    useEffect(() => {
      const filteredResult = posts.filter((post) => 
        ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase())
      );
      setSearchResults(filteredResult.reverse());
  
    }, [search, posts])
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
      const datetime = format(new Date(), "MMMM dd, yyyy pp");
      const post = { id,  title : postTitle, datetime, body : postBody};
      try {
        const response = await api.post('/posts', post);
        const allPost = [...posts, response.data];
        setPosts(allPost);
        setPostTitle('');
        setPostBody('');
        navigate('/');
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
        else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
  
    const handleDelete = async (id) => {
      const remPosts = posts.filter(post => post.id !== id);
      try {
        const response = await api.delete(`posts/${id}`);
        console.log(response.data);
        setPosts(remPosts);
        navigate('/');
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
        else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
  
    const handleEdit = async (id) => {
      const datetime = format(new Date(), "MMMM dd, yyyy pp");
      const updatedPost = { id,  title : editTitle, datetime, body : editBody};
      try {
        const response = await api.put(`posts/${id}`, updatedPost);
        const allPosts = posts.map(p => p.id === id ? {...response.data} : p);
        setPosts(allPosts);
        setEditBody('');
        setEditTitle('');
        navigate('/');
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
        else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    

    return (
        <DataContext.Provider  value={{
            search, setSearch, searchResults,
            handleSubmit, postTitle, setPostTitle, postBody, setPostBody,
            posts, editTitle, editBody, setEditTitle, setEditBody, handleEdit, handleDelete
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;