import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import SideCart from '../SideCart/SideCart';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [time, setTime] = useState("");
    const [bookedMark, setBookedMark] = useState([]);
    // const [id, setId] = useState("");

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, []);
    
    // function for mark as read button which coming blog.jsx component
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

    // function for booked mark button which coming blog.jsx component
    const bookedMarkBlogs = (blog) => {
        // console.log(blog);
        // const { blogTitle } = blog;

        // const previousBookedMark = JSON.parse(localStorage.getItem('bookedMark'));
        // if (previousBookedMark) {
        //     const upDateBookedMark = previousBookedMark + blogTitle;
        //     localStorage.setItem('bookedMark', JSON.stringify(upDateBookedMark))
        //     setBookedMark(upDateBookedMark)
        //     alert('already exist')
        // }
        // else {
        //     localStorage.setItem('bookedMark', JSON.stringify(blogTitle))
        //     setBookedMark(blogTitle)
        // }

        // setBookedMark(blog)
        // setId(id)
        const newBlog = [...bookedMark, blog]
        setBookedMark(newBlog)
       
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