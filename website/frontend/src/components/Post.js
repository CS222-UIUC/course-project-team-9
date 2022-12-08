import React from 'react'
import './Post.css'

const Post = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>Class and Section: {post.class_and_section}</p>
      <p>Description: {post.description}</p>
    </article>
  )
}

export default Post