import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Sider from '../Sider/Sider';
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
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    >
                        
                    </Blog>)
                }
            </div>
            <div className="side-container">
                <Sider></Sider>
            </div>
        </div>
    );
};

export default Blogs;