import React from 'react'
import './Post.css'

const Post = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.class_and_section}</p>
      <p>{post.description}</p>
      <p>POST ID: {post.id}</p>
    </article>
  )
}

export default Post