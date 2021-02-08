import { useState, useEffect } from 'react';
import ReactDOM from 'react';
import Bloglist from './Bloglist';

import React from 'react';
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)

    }
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [name, setName] = useState('George')
    useEffect(() => {
        setTimeout(() => {

                fetch('http://localhost:8000/blogs')
        
                    .then(res => {
                        console.log(res)
                        if (!res.ok) {
                            throw Error("Could not fetch data from resource")
                        }
                    return res.json()
                })
                .then(data => {
                    console.log(data);
                    setBlogs(data);
                    setIsPending(false);
                })
                    .catch(err => {
                        console.log(err.message);
                        setError(err.message)
                         
            })
        }, 1000)
        
    },[]);
    
    return ( 
        
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div className = "load">Loading...</div>}
            {blogs && <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
           
             
        </div>
     );
}
 
export default Home;