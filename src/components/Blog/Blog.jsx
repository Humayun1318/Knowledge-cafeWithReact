import React from 'react';
import './Blog.css'

const Blog = (props) => {
    const {id, authorName, blogTitle, images, readTime, publishDate}= props.blog;
    console.log(authorName)
    return (
        <div>
            <img className='blog-cover-image' src={images.blogCoverImage} alt="" />
            <div className='blog-mid-container'>
                <div className='profile-flex'>
                    <img src={images.authorImage} alt="" />
                    <div>
                        <h3>{ authorName}</h3>
                        <p>{ publishDate}</p>
                    </div>
                </div>
                <div>
                    <p>{ readTime} min read <button></button></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;