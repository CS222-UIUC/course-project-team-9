import React, { Component } from "react";
import {Router, Routes, Link, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Filter from './Filter';
import Post from './Post';
import Home from "./components/Home";
import About from './components/About';


function App() {
  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="about">About</Link>
      </nav>
      <Title />
      <Filter />
      <Post />
    </div>
  );
}

export default App;
