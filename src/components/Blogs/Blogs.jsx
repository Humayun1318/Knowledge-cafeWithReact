import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import SideCart from '../SideCart/SideCart';
import './Blogs.css'
import { ToastContainer, toast } from 'react-toastify';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [time, setTime] = useState("");
    const [bookedMark, setBookedMark] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    
    // function for mark as read button which coming blog.jsx component
    const timeOnRead = (blog) => {
        // console.log(blog)
        const { readTime } = blog;
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

    // function for booked mark button which coming blog.jsx component
    const bookedMarkBlogs = (blog) => {
        const isBookmarked = bookedMark.some((b) => b.id === blog.id);
        if (isBookmarked) {
            const newBlog = [...bookedMark, blog];
            setBookedMark(newBlog);
            toast("You Have Already Bookmarked This Blog");
        } else {
            const newBlog = [...bookedMark, blog];
            setBookedMark(newBlog);
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
                        bookedMark={bookedMarkBlogs}
                    >
                    </Blog>)
                }
            </div>
            <div className="side-container">
                <SideCart
                    time={time}
                    bookedMark={bookedMark}
                >
                </SideCart>
            </div>
        </div>
    );
};

export default Blogs;