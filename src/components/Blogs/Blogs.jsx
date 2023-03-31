import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import SideCart from '../SideCart/SideCart';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [time, setTime] = useState("")

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, []);

   
    const timeOnRead = (blog) => {
        // console.log(blog)
        const { readTime } = blog;
        // console.log(readTime)
        const previousReadTime = JSON.parse(localStorage.getItem('readTime'));
        if (previousReadTime) {
            const total = previousReadTime + readTime;
            localStorage.setItem('readTime', total)
            setTime(total)
        }
        else {
            localStorage.setItem('readTime', readTime)
            setTime(readTime)
        }
    }

    return (
        <div className='blogs-container'>
            <div className="blog-container">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        timeOnRead={timeOnRead}
                    >

                    </Blog>)
                }
            </div>
            <div className="side-container">
                <SideCart time={time}>

                </SideCart>
            </div>
        </div>
    );
};

export default Blogs;