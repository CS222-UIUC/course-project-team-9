import "./CreatePost.css";
import { useState } from "react";
import {Link} from "react-router-dom";


function CreatePost() {
  const [title, setTitle] = useState("");
  const [class_and_section, setClass_and_section] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8000/api/posts/", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          class_and_section: class_and_section,
          description: description,
          completed: false
        }),
        headers: {
            'Content-type': 'application/json',
        },
      });
      let resJson = await res.json();
      if (res.status === 201) {
        setTitle("");
        setClass_and_section("");
        setDescription("");
        setMessage("Post created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="CreatePost">
        <nav className="topnav">
            <a className="active" href="./">Home</a>
            <Link to="/about">About</Link>
            <Link to="/login" className="split">Login</Link>
            <Link to="/register" className = "split">Register</Link>
            <Link to="/CreatePost">Create Post</Link>
        </nav>
        <div className="form">
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            />
            <input
            type="text"
            value={class_and_section}
            placeholder="Class and section"
            onChange={(e) => setClass_and_section(e.target.value)}
            />
            <textarea
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit">Create Post</button>

            <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
        </div>
    </div>
    
  );
}

export default CreatePost;