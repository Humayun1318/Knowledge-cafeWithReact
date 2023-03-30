import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const {id, authorName, blogTitle, images, readTime, publishDate}= props.blog;
    console.log(authorName)
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
                    <button><FontAwesomeIcon icon={faBookmark} /></button>
                    </p>   
                    
                </div>
            </div>
            <div className='title-part-bottom'>
                <h1 className='blog-title'>{blogTitle}</h1>
                <p className='blog-title-part-1'>#beginners<span className='title-under-text'>     
                 #programming </span></p>
                <a className='mark-read-btn' href="">Mark as read</a>
            </div>
            <hr />
        </div>
    );
};

export default Blog;