import { useState } from 'react';
import ReactDOM from 'react';
import Bloglist from'./Bloglist';

import React from 'react';
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Olra', author: 'Olvine', body: 'lorem ipsum', id: 1 },
        { title: 'Blown By The Wind', author: 'George', body: 'lorem ipsum', id: 2 },
        { title: 'Set Eyes On Fire', author: 'Laura', body: 'lorem ipsum', id: 3 },
          { title: 'Set Eyes On Fire', author: 'Laura', body: 'lorem ipsum', id: 4}
    ]);
    // let name = "Mario";
  

    //const [name, setName] = useState('mario')
    //const [age, setAge] = useState(25);
    //const handleClick = (e) => {
        //setName("Olvine");
        //setAge(21);
    //}
    
    return ( 
        <div className="home">
            <Bloglist blogs={blogs} title="All Blogs" length={blogs.length}/>
        </div>
     );
}
 
export default Home;