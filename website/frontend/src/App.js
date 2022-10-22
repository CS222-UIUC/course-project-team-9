import React, { Component } from "react";
import { useState, useEffect } from 'react'
import {Link} from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Modal from "./components/Modal";
import Title from './components/Title';
//import Filter from './components/Filter';
import axios from "axios";
import { getPosts } from "./api/axios";
import SearchBar from "./components/SearchBar";
import ListPage from "./components/ListPage";

// const postItems =[
//   {
//     "id": 1,
//     "title": "1st post",
//     "class_and_section": "CS222 team-9",
//     "description": "Hi!",
//     "completed": true,
//   },
//   {
//     "id": 2,
//     "title": "another post",
//     "class_and_section": "CS 222",
//     "description": "Let's see",
//     "completed": false,
//   }
// ]

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       viewCompleted: false,
//       postList: [],
//       modal: false,
//       activeItem: {
//         title: "",
//         class_and_section: "",
//         description: "",
//         completed: false,
//       },
//       searchTerm: "",
//       setSearchTerm: "",
//     };
//   }

//   componentDidMount() {
//     this.refreshList();
//   }

//   refreshList = () => {
//     axios
//       .get("/api/posts/")
//       .then((res) => this.setState({ postList: res.data }))
//       .catch((err) => console.log(err));
//   };

//   toggle = () => {
//     this.setState({ modal: !this.state.modal });
//   };

//   handleSubmit = (item) => {
//     this.toggle();
//     if (item.id) {
//       axios
//         .put(`/api/posts/${item.id}/`, item)
//         .then((res) => this.refreshList());
//       return;
//     }
//     axios
//       .post("/api/posts/", item)
//       .then((res) => this.refreshList());
//   };

//   handleDelete = (item) => {
//     axios
//       .delete(`/api/posts/${item.id}/`)
//       .then((res) => this.refreshList());
//   };

//   createItem = () => {
//     const item = { title: "", description: "", completed: false };

//     this.setState({ activeItem: item, modal: !this.state.modal });
//   };

//   editItem = (item) => {
//     this.setState({ activeItem: item, modal: !this.state.modal });
//   };

//   displayCompleted = (status) => {
//     if (status) {
//       return this.setState({ viewCompleted: true });
//     }

//     return this.setState({ viewCompleted: false });
//   };

//   renderTabList = () => {
//     return (
//       <div className="nav nav-tabs">
//         <span
//           className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
//           onClick={() => this.displayCompleted(true)}
//         >
//           Complete
//         </span>
//         <span
//           className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
//           onClick={() => this.displayCompleted(false)}
//         >
//           Incomplete
//         </span>
//       </div>
//     );
//   };

//   renderItems = () => {
//     const { viewCompleted } = this.state;
//     const newItems = this.state.postList.filter(
//       (item) => item.completed === viewCompleted
//     );

//     return newItems.map((item) => (
//       <li
//         key={item.id}
//         className="list-group-item d-flex justify-content-between align-items-center"
//       >
//         <span
//           className={`post-title mr-2 ${
//             this.state.viewCompleted ? "completed-post" : ""
//           }`}
//           title={item.description}
//         >
//           {item.title}
//         </span>
//         <span>
//           <button
//             className="btn btn-secondary mr-2"
//             onClick={() => this.editItem(item)}
//           >
//             Edit
//           </button>
//           <button
//             className="btn btn-danger"
//             onClick={() => this.handleDelete(item)}
//           >
//             Delete
//           </button>
//         </span>
//       </li>
//     ));
//   };
  
//   render() { 
//     return (
//       <div className="App">
//         <nav className="Nav">
//           <Link to="about">About</Link>
//         </nav>
//         <Title />
//         <input type="text" placeholder="Search..." onChange={(event) => {this.setSearchTerm(event.target.value)}} />
//         {/* <Filter /> */}

//         <main className="container">
//           <div className="row">
//             <div className="col-md-6 col-sm-10 mx-auto p-0">
//               <div className="card p-3">
//                 <div className="mb-4">
//                   <button
//                     className="btn btn-primary"
//                     onClick={this.createItem}
//                   >
//                     Post
//                   </button>
//                 </div>
//                 {this.renderTabList()}
//                 <ul className="list-group list-group-flush border-top-0">
//                   {this.renderItems()}
//                 </ul>
//               </div>
//             </div>
//           </div>
//           {this.state.modal ? (
//             <Modal
//               activeItem={this.state.activeItem}
//               toggle={this.toggle}
//               onSave={this.handleSubmit}
//             />
//           ) : null}
//         </main>
//       </div>
//     );
//   }
// }

function App () {
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getPosts().then(json => {
      setPosts(json)
      return json
    }).then(json => {
      setSearchResults(json)
    })
  }, [])

  return (
    <>
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </>
  )
}

export default App;
