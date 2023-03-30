import React, { useEffect, useState } from 'react';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
        
    }, []);

    return (
        <div className='blogs-container'>
            <div className="blog-container">
                {
                    blogs.map(blog=>console.log(blog))
                }
            </div>
            <div className="side-container">
                
            </div>
        </div>
    );
};

export default Blogs;