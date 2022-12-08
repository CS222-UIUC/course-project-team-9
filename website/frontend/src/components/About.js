import React from "react";
import {Link} from "react-router-dom";
import "./About.css"

function About() {
    return (
    <div className="About">
        <nav className="topnav">
            <a className="active" href="./">Home</a>
            <Link to="/about">About</Link>
            <Link to="/login" className="split">Login</Link>
            <Link to="/register" className = "split">Register</Link>
            <Link to="/CreatePost">Create Post</Link>
        </nav>
        <h1>This is a UIUC CS 222 cource project. </h1>
        <h3>
            Group: Team-9
        </h3>
        <h3>
            Group members:
        </h3>
        <article>
            Anushant Singh: singh109@illinoi.edu
        </article>
        <article>
            Pai Zheng: paiz3@illinois.edu
        </article>
        <article>
            Rishi Shah: rishi5@illinois.edu
        </article>
        <article>
            Youngbo Sohn: yssohn2@illinois.edu
        </article>
        <a href="https://github.com/CS222-UIUC/course-project-team-9" target="_blank">
            Click here to visit our Github page.
        </a>
    </div>
    );
}

export default About;