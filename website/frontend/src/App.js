import React from "react";
import { useState, useEffect } from 'react'
import {Link} from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import { getPosts } from "./api/axios";
import Title from "./components/Title"
import SearchBar from "./components/SearchBar";
import ListPage from "./components/ListPage";



function App () {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getPosts().then(json => {
      setPosts(json)
      return json
    }).then(json => {
      setSearchResults(json)
    })
  }, [])

  return (
    <div className="App">
      <nav className="topnav">
        <a className="active" href="./">Home</a>
        <Link to="/about">About</Link>
        <Link to="/login" className="split">Login</Link>
        <Link to="/register" className = "split">Register</Link>
        <Link to="/CreatePost">Create Post</Link>
      </nav>
      <Title />
      <div className="container">
        <SearchBar posts={posts} setSearchResults={setSearchResults} />
      </div>
      <div className="container">
        <ListPage searchResults={searchResults} />
      </div>
    </div>
  )
}

export default App;
