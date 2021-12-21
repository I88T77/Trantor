import React from 'react';
import './bloglistdetail.css'
// import { Link } from 'react-router-dom';


export const Bloglistdetail=({blog})=>{
  console.log("bloggggggg",blog)
    return(
      // <
      <a href={`${blog.url}`} target="_self">
        <div className="main">
        <img className="avatar" src={blog.urlToImage} alt="Avatar" />
        <p className="font2">{blog.description}</p>
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="avatar2"/>
        <p className="author">{blog.author}</p>
        </div>
      </a>
      
      // </Link>
        
    )

}