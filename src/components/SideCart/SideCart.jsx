import React, { useEffect, useState } from 'react';
import './SideCart.css'

const SideCart = ({time, bookedMark}) => {
    console.log(bookedMark)
    const [spentTime, setSpentTime] = useState(time);

    // const [book, setBook] = useState(bookedMark);
    
    // useEffect(() => {
    //     const getBookedMarkFromStorage = JSON.parse(localStorage.getItem("bookedMark"));
    //     setBook(getBookedMarkFromStorage)
    // }, [bookedMark])
    


    
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
                <h1 className='bookmarked-blogs'>Bookmarked Blogs : {bookedMark.length}</h1>

                <div>
                    <p className='under-booked-mark-blogs'>{bookedMark[0].blogTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default SideCart;