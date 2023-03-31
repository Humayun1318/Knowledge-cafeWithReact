import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    // console.log(props)
    const {id, authorName, blogTitle, images, readTime, publishDate } = props.blog;
    const timeOnRead = props.timeOnRead;
    const bookedMarkBlogs = props.bookedMark;
    
    
    return (
        <div className='blog-single-part'>
            <img className='blog-cover-image' src={images.blogCoverImage} alt="" />
            <div className='blog-mid-container'>
                <div className='profile-flex'>
                    <img src={images.authorImage} alt="" />
                    <div>
                        <h3 className='author-name'>{ authorName}</h3>
                        <p className='date'>{ publishDate}</p>
                    </div>
                </div>
                <div className='read-info'>
                    <p className='min-read-time'>{readTime} min read
                        <button onClick={() => { bookedMarkBlogs(props.blog) }} >
                            <FontAwesomeIcon icon={faBookmark} /></button>
                    </p>   
                    
                </div>
            </div>
            <div className='title-part-bottom'>
                <h1 className='blog-title'>{blogTitle}</h1>
                <p className='blog-title-part-1'>#beginners<span className='title-under-text'>     
                 #programming </span></p>
                <button onClick={() => { timeOnRead(props.blog) }}
                    className='mark-read-btn' href="">Mark as read</button>
            </div>
            <hr />
        </div>
    );
};

export default Blog;