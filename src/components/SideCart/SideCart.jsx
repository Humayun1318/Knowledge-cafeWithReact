import React, { useEffect, useState } from 'react';
import './SideCart.css'

const SideCart = ({ time, bookedMark }) => {
    // console.log(bookedMark)
    const [spentTime, setSpentTime] = useState(time);

    useEffect(() => {
        const getReadTimeFromStorage = localStorage.getItem("readTime")
        setSpentTime(getReadTimeFromStorage)
    }, [time])

    return (
        <div className='side-cart'>
            <div className='side-container-upper'>
                <h2 className='on-read-time'>Spent time on read : {spentTime} min</h2>

            </div>
            <div className='side-container-lower'>
                <h1 className='bookmarked-blogs'>Bookmarked Blogs : {bookedMark.length}</h1>

                <div >
                    {
                        bookedMark.map((b, index) => <p className='under-booked-mark-blogs'
                             key={index}>{b.blogTitle}
                            </p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SideCart;