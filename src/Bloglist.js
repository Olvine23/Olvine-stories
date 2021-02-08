import React from 'react';
import { useState } from 'react';

const Bloglist = ({blogs, title, length, handleDelete}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(blogs.length)
    
    return ( 
        <div className="blog-list">
            <h2 className = "title">{title}</h2>
            <h3 className = "length">{blogs.length} blogs</h3>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>Blog number {blog.id}</p>
                    <button onClick = {() => handleDelete(blog.id)} >Delete blog</button>
            </div>
            ))}
            
        </div>
     );
}
 
export default Bloglist;