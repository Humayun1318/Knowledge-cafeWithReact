import React, { useEffect, useState } from 'react';
import './SideCart.css'

const SideCart = ({time}) => {
    // console.log(time)
    const [ spentTime, setSpentTime ] = useState(time);
    
    useEffect(() => {
        const getReadTimeFromStorage = localStorage.getItem("readTime")
        setSpentTime(getReadTimeFromStorage)
    }, [time])
    
    return (
        <div>
            <div className='side-container-upper'>
                <h2 className='on-read-time'>Spent time on read : {spentTime} min</h2>

            </div>
            <div className='side-container-lower'>
                <h1 className='bookmarked-blogs'>Bookmarked Blogs : { }</h1>

                <div className='under-booked-mark-blogs'>


                </div>
            </div>
        </div>
    );
};

export default SideCart;